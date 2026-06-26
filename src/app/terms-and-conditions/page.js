import { createLegalPage } from "@/components/pages/LegalDocumentPage";

const { metadata: pageMetadata, Page } = createLegalPage(
  "terms-and-conditions",
  "Terms and conditions for using the Rahman Plastic Surgery website.",
);

export const metadata = pageMetadata;
export default Page;
