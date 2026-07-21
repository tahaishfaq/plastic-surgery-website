import Link from "next/link";
import BlogGridCard from "@/components/ui/BlogGridCard";

export default function FeaturedBlogsSection({ posts = [] }) {
  if (!posts.length) return null;

  const featuredPosts = posts.slice(0, 4);

  return (
    <section aria-labelledby="featured-blogs-heading" className="border-y border-brand-line bg-brand-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">Top blogs</p>
            <h2
              id="featured-blogs-heading"
              className="mt-4 font-instrument text-4xl font-semibold tracking-[-0.04em] text-brand-ink sm:text-5xl"
            >
              Guidance for better-informed decisions
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-brand-body">
              Practical consultation, treatment, and recovery guidance from Rahman Plastic Surgery.
            </p>
          </div>

          <Link
            href="/news"
            className="inline-flex min-h-11 shrink-0 items-center self-start border border-brand-primary px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-brand-ink transition-colors hover:border-brand-primary-hover hover:text-brand-primary-hover sm:self-auto"
          >
            View all blogs
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:gap-6 xl:grid-cols-4">
          {featuredPosts.map((post) => (
            <BlogGridCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
