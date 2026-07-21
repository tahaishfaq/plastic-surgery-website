# Blog image guidelines

Use one article-specific image per blog. Do not reuse a procedure image simply because it is already in the codebase.

## Visual standard

- Landscape 4:3 composition, ideally 1600 x 1200 pixels or larger.
- Natural editorial healthcare photography with soft daylight.
- Warm ivory, beige, white, and restrained navy to match the clinic brand.
- South Asian adult patients and clinical teams where the article is Islamabad-focused.
- Fully clothed, non-graphic scenes centered on consultation, planning, communication, or recovery support.
- No text, logos, watermarks, readable documents, treatment in progress, or exaggerated results.
- Do not imply an AI-generated person is a named clinician. Use representative alt text.

## Reusable AI prompt

```text
Create a photorealistic landscape editorial cover for a plastic surgery patient-education blog.

Article topic: [TOPIC]
Scene: [ARTICLE-SPECIFIC CONSULTATION, PLANNING, TRAVEL, OR RECOVERY MOMENT]
People: South Asian adults in a professional, respectful clinical setting in Islamabad.
Style: premium natural healthcare photography, realistic skin and fabric, candid rather than staged.
Composition: horizontal 4:3 medium-wide frame designed for a compact website card.
Lighting: soft daylight, calm and reassuring.
Palette: warm ivory, muted beige, white, and restrained navy.
Constraints: everyone fully clothed, non-graphic, no procedure, no examination, no medical claims.
Avoid: text, logos, watermarks, distorted hands, glamour retouching, dramatic blue lighting, and generic operating-room imagery.
```

## Internet image workflow

1. Search by the article's real intent, such as `female doctor consultation South Asian patient` or `medical travel coordinator consultation`.
2. Prefer clinic-owned photography. Otherwise use a reputable stock library with a license that permits commercial website use.
3. Save the photographer, source URL, download date, and license with the asset record.
4. Download the image into `public/images/blogs/`. Do not hotlink third-party images.
5. Crop to 4:3 and verify that the subject remains readable at mobile card size.
6. Write factual alt text describing the scene without identifying unnamed people or implying a result.

## Current generated covers

- `female-plastic-surgeon-consultation.png`: female surgeon, female patient, and female clinical staff.
- `tummy-tuck-consultation-preparation.png`: patient reviewing consultation questions with a surgeon.
- `international-patient-travel-planning.png`: international patient planning travel with a clinic coordinator.
- `recovery-support-guidance.png`: patient reviewing recovery guidance with a female nurse.
