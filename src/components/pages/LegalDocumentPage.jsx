import SiteShell from "@/components/layout/SiteShell";
import { legalDocuments } from "@/data/legal";

function LegalDocumentPage({ documentKey }) {
  const document = legalDocuments[documentKey];

  return (
    <SiteShell className="min-h-screen bg-brand-white">
      <article className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-instrument text-4xl font-semibold tracking-[-0.04em] text-brand-ink sm:text-5xl">
            {document.title}
          </h1>

          {!document.isFinalized ? (
            <p className="mt-6 rounded-sm border border-brand-line bg-brand-paper px-4 py-3 text-sm leading-6 text-brand-muted">
              {document.placeholderNote}
            </p>
          ) : null}

          <div className="mt-12 space-y-10">
            {document.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-bold text-brand-ink">{section.heading}</h2>
                <p className="mt-4 text-base leading-7 text-brand-body">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </article>
    </SiteShell>
  );
}

export function createLegalPage(documentKey, description) {
  const document = legalDocuments[documentKey];

  return {
    metadata: {
      title: `${document.title} | Rahman Plastic Surgery`,
      description,
    },
    Page: function Page() {
      return <LegalDocumentPage documentKey={documentKey} />;
    },
  };
}
