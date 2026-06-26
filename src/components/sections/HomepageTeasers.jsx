import Link from "next/link";
import Button from "@/components/ui/Button";

export default function DoctorsTeaserSection() {
  return (
    <section className="border-t border-brand-line bg-brand-white px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-instrument text-3xl font-semibold tracking-[-0.03em] text-brand-ink sm:text-4xl">
            Surgeon-led care
          </h2>
          <p className="mt-4 text-base leading-7 text-brand-body">
            Meet the clinical team behind Rahman Plastic Surgery. Profiles are provisional until client-approved bios and
            photography are supplied.
          </p>
        </div>
        <Button href="/doctors">Meet Our Surgeons</Button>
      </div>
    </section>
  );
}

export function NewsTeaserSection({ posts = [] }) {
  const latestPost = posts[0];

  return (
    <section className="border-t border-brand-line bg-brand-paper px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-instrument text-3xl font-semibold tracking-[-0.03em] text-brand-ink sm:text-4xl">
              News & insights
            </h2>
            <p className="mt-4 text-base leading-7 text-brand-body">
              Patient guidance, recovery notes, and clinic updates.
            </p>
            {latestPost ? (
              <p className="mt-4 text-sm leading-7 text-brand-body">
                Latest:{" "}
                <Link
                  className="font-medium text-brand-ink underline-offset-4 hover:underline"
                  href={`/news/${latestPost.slug}`}
                >
                  {latestPost.title}
                </Link>
              </p>
            ) : null}
          </div>
          <Button href="/news" variant="outline">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
}
