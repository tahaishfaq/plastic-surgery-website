import BlogCard from "@/components/ui/BlogCard";
import SiteShell from "@/components/layout/SiteShell";
import { getAllPosts } from "@/lib/content/news";

export const metadata = {
  title: "Plastic Surgery Blogs | Rahman Plastic Surgery",
  description:
    "Read practical plastic surgery blogs about consultations, procedures, recovery, and planning care in Islamabad.",
  alternates: {
    canonical: "/news",
  },
  openGraph: {
    title: "Plastic Surgery Blogs | Rahman Plastic Surgery",
    description:
      "Practical patient guides about plastic surgery consultations, procedures, recovery, and planning care in Islamabad.",
    url: "/news",
    type: "website",
  },
};

export default async function BlogsPage() {
  const posts = await getAllPosts();
  const [featuredPost, ...remainingPosts] = posts;

  return (
    <SiteShell>
      <section className="border-b border-brand-line bg-brand-paper px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">Patient resources</p>
          <h1 className="mt-5 max-w-4xl font-instrument text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-brand-ink sm:text-6xl lg:text-7xl">
            Plastic Surgery Blogs
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-brand-body sm:text-lg">
            Clear guidance to help you prepare thoughtful questions about consultations, procedures, travel, and recovery.
          </p>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-brand-line pt-6 text-sm text-brand-muted">
            <span>Consultation planning</span>
            <span>Procedure education</span>
            <span>Recovery guidance</span>
            <span>International patient support</span>
          </div>
        </div>
      </section>

      <section aria-labelledby="latest-blog-heading" className="bg-brand-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          {featuredPost ? (
            <>
              <div className="mb-8 flex items-end justify-between gap-6 border-b border-brand-line pb-5">
                <h2 id="latest-blog-heading" className="font-instrument text-3xl font-semibold tracking-[-0.035em] text-brand-ink sm:text-4xl">
                  Latest blog
                </h2>
                <span className="hidden text-sm text-brand-muted sm:block">Evidence-aware patient education</span>
              </div>
              <BlogCard post={featuredPost} horizontal priority />
            </>
          ) : (
            <p className="text-base text-brand-body">New patient guides are being prepared.</p>
          )}
        </div>
      </section>

      {remainingPosts.length ? (
        <section aria-labelledby="all-blogs-heading" className="border-t border-brand-line bg-brand-paper px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1280px]">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">Explore the library</p>
              <h2 id="all-blogs-heading" className="mt-4 font-instrument text-4xl font-semibold tracking-[-0.04em] text-brand-ink sm:text-5xl">
                More patient guides
              </h2>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-12">
              {remainingPosts.map((post, index) => (
                <div
                  key={post.slug}
                  className={
                    index === 0
                      ? "lg:col-span-7"
                      : index === 1
                        ? "lg:col-span-5"
                        : "lg:col-span-12"
                  }
                >
                  <BlogCard post={post} horizontal={index > 1} />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </SiteShell>
  );
}
