#!/usr/bin/env python3
"""Score an evidence-backed SEO keyword CSV without inventing metrics."""

from __future__ import annotations

import argparse
import csv
import sys
from pathlib import Path


SCORE_COLUMNS = {
    "intent_score": 0.25,
    "business_fit_score": 0.20,
    "relevance_score": 0.15,
    "low_competition_score": 0.15,
    "demand_score": 0.10,
    "trend_score": 0.10,
    "serp_gap_score": 0.05,
}

REQUIRED_COLUMNS = {"keyword", "data_source", "as_of", *SCORE_COLUMNS}


def parse_score(row_number: int, column: str, value: str) -> float:
    if value.strip() == "":
        raise ValueError(f"row {row_number}: {column} is blank")
    try:
        score = float(value)
    except ValueError as error:
        raise ValueError(f"row {row_number}: {column} must be numeric") from error
    if not 0 <= score <= 5:
        raise ValueError(f"row {row_number}: {column} must be between 0 and 5")
    return score


def priority(score: float) -> str:
    if score >= 80:
        return "high"
    if score >= 60:
        return "medium"
    return "low"


def score_file(input_path: Path, output_path: Path) -> int:
    with input_path.open(newline="", encoding="utf-8-sig") as source:
        reader = csv.DictReader(source)
        if not reader.fieldnames:
            raise ValueError("input has no header row")
        missing = sorted(REQUIRED_COLUMNS.difference(reader.fieldnames))
        if missing:
            raise ValueError(f"missing required columns: {', '.join(missing)}")

        fieldnames = [
            *reader.fieldnames,
            "opportunity_score",
            "priority",
        ]
        rows = []
        for row_number, row in enumerate(reader, start=2):
            if not row["keyword"].strip():
                raise ValueError(f"row {row_number}: keyword is blank")
            if not row["data_source"].strip() or not row["as_of"].strip():
                raise ValueError(
                    f"row {row_number}: data_source and as_of are required; do not score unsourced estimates"
                )

            weighted = sum(
                parse_score(row_number, column, row[column]) * weight
                for column, weight in SCORE_COLUMNS.items()
            )
            opportunity_score = round(weighted * 20, 1)
            row["opportunity_score"] = f"{opportunity_score:.1f}"
            row["priority"] = priority(opportunity_score)
            rows.append(row)

    rows.sort(key=lambda item: float(item["opportunity_score"]), reverse=True)
    with output_path.open("w", newline="", encoding="utf-8") as destination:
        writer = csv.DictWriter(destination, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)
    return len(rows)


def main() -> int:
    parser = argparse.ArgumentParser(
        description=(
            "Score keyword opportunities from 0-5 evidence-backed inputs. "
            "Required columns: keyword, data_source, as_of, and each *_score column."
        )
    )
    parser.add_argument("input_csv", type=Path)
    parser.add_argument("-o", "--output", type=Path, required=True)
    args = parser.parse_args()

    try:
        count = score_file(args.input_csv, args.output)
    except (OSError, ValueError) as error:
        print(f"error: {error}", file=sys.stderr)
        return 1

    print(f"scored {count} keywords -> {args.output}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
