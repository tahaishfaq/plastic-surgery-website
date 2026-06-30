import { createLegalPage } from "@/components/pages/LegalDocumentPage";

const { metadata: pageMetadata, Page } = createLegalPage(
  "medical-disclaimer",
  "Medical disclaimer for educational content on the Rahman Plastic Surgery website.",
);

export const metadata = pageMetadata;
export default Page;
