import Image from "next/image";
import Link from "next/link";

export function formatBlogDate(dateString) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));
}

export default function BlogCard({ post, headingLevel = 2, horizontal = false, priority = false }) {
  const articleHref = `/news/${post.slug}`;
  const Heading = headingLevel === 3 ? "h3" : "h2";

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden border border-brand-line bg-brand-white transition-colors duration-300 hover:border-brand-primary/60 ${
        horizontal ? "lg:grid lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)]" : ""
      }`}
    >
      <Link
        href={articleHref}
        aria-label={`Read ${post.title}`}
        className={`relative block overflow-hidden bg-brand-soft-blue ${
          horizontal ? "aspect-[16/10] lg:aspect-auto lg:min-h-[310px]" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={post.image || "/images/placeholders/og-placeholder.svg"}
          alt={post.imageAlt || ""}
          fill
          priority={priority}
          sizes={horizontal ? "(min-width: 1024px) 42vw, 100vw" : "(min-width: 1024px) 48vw, 100vw"}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-bold uppercase tracking-[0.12em]">
          <span className="text-brand-primary">{post.category}</span>
          <span aria-hidden="true" className="h-px w-5 bg-brand-line" />
          <time className="text-brand-muted" dateTime={post.publishedAt}>
            {formatBlogDate(post.publishedAt)}
          </time>
        </div>

        <Heading className="mt-5 font-instrument text-2xl font-semibold leading-[1.08] tracking-[-0.035em] text-brand-ink sm:text-3xl">
          <Link className="transition-colors duration-200 hover:text-brand-primary-hover" href={articleHref}>
            {post.title}
          </Link>
        </Heading>

        <p className="mt-4 text-sm leading-7 text-brand-body sm:text-base">{post.description}</p>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-brand-line pt-6 text-sm">
          <span className="text-brand-muted">{post.readingMinutes} min read</span>
          <Link
            href={articleHref}
            className="font-bold uppercase tracking-[0.11em] text-brand-primary transition-colors hover:text-brand-primary-hover"
          >
            Read blog <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
