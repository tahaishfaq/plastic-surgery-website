import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), ".data");
const CONSULTATIONS_FILE = path.join(DATA_DIR, "consultations.json");

export async function saveConsultationSubmission(data) {
  await mkdir(DATA_DIR, { recursive: true });

  let submissions = [];

  try {
    const raw = await readFile(CONSULTATIONS_FILE, "utf8");
    submissions = JSON.parse(raw);
  } catch {
    submissions = [];
  }

  const entry = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...data,
  };

  submissions.push(entry);
  await writeFile(CONSULTATIONS_FILE, JSON.stringify(submissions, null, 2), "utf8");

  return entry;
}
