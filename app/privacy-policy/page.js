import { createLegalPage } from "@/components/pages/LegalDocumentPage";

const { metadata: pageMetadata, Page } = createLegalPage(
  "privacy-policy",
  "Privacy policy for Rahman Plastic Surgery website visitors and consultation requests.",
);

export const metadata = pageMetadata;
export default Page;
