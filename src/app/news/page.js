import Link from "next/link";
import SiteShell from "@/components/layout/SiteShell";
import PageHero from "@/components/ui/PageHero";
import { getAllPosts } from "@/lib/content/news";

export const metadata = {
  title: "News & Insights | Rahman Plastic Surgery",
  description:
    "Patient guidance, recovery notes, and clinic updates from Rahman Plastic Surgery. Provisional articles until client approval.",
};

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));
}

export default async function NewsPage() {
  const posts = await getAllPosts();
  const [featuredPost, ...remainingPosts] = posts;

  return (
    <SiteShell>
      <PageHero
        title="News & Insights"
        description="Patient guidance, recovery notes, and clinic updates. Articles marked provisional await final client review."
      />

      <section className="bg-brand-paper px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          {featuredPost ? (
            <article className="border border-brand-line bg-brand-white p-8 sm:p-10 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,280px)] lg:gap-12">
              <div>
                {!featuredPost.isFinalized ? (
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-muted">Provisional</p>
                ) : null}
                <p className="mt-2 text-sm text-brand-muted">{formatDate(featuredPost.publishedAt)}</p>
                <h2 className="mt-4 font-instrument text-3xl font-semibold tracking-[-0.03em] text-brand-ink sm:text-4xl">
                  <Link className="transition-colors hover:text-brand-primary-hover" href={`/news/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-brand-body">{featuredPost.description}</p>
                <Link
                  className="mt-6 inline-flex min-h-11 items-center text-sm font-bold uppercase tracking-[0.14em] text-brand-primary transition-colors hover:text-brand-primary-hover"
                  href={`/news/${featuredPost.slug}`}
                >
                  Read article
                </Link>
              </div>
              <div className="mt-8 border-t border-brand-line pt-6 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-primary">Category</p>
                <p className="mt-3 text-base text-brand-ink">{featuredPost.category}</p>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-brand-primary">Author</p>
                <p className="mt-3 text-base text-brand-ink">{featuredPost.author}</p>
              </div>
            </article>
          ) : null}

          {remainingPosts.length ? (
            <div className="mt-12 divide-y divide-brand-line border-y border-brand-line">
              {remainingPosts.map((post) => (
                <article key={post.slug} className="grid gap-4 py-8 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-8">
                  <div>
                    <p className="text-sm text-brand-muted">{formatDate(post.publishedAt)}</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-primary">
                      {post.category}
                    </p>
                  </div>
                  <div>
                    <h2 className="font-instrument text-2xl font-semibold tracking-[-0.03em] text-brand-ink">
                      <Link className="transition-colors hover:text-brand-primary-hover" href={`/news/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-brand-body">{post.description}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </SiteShell>
  );
}
