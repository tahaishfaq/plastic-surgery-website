import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatBlogDate } from "@/components/ui/BlogCard";

export default function BlogGridCard({ post }) {
  const articleHref = `/news/${post.slug}`;

  return (
    <article className="group h-full">
      <Link
        href={articleHref}
        aria-label={`Read ${post.title}`}
        className="flex h-full flex-col overflow-hidden rounded-[2px] border border-brand-line bg-brand-white transition-colors duration-200 hover:border-brand-primary focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-brand-paper">
          <Image
            src={post.image || "/images/placeholders/og-placeholder.svg"}
            alt={post.imageAlt || ""}
            fill
            sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1279px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-bold uppercase leading-4 tracking-[0.11em] text-brand-muted">
            <span className="text-brand-primary">{post.category}</span>
            <span aria-hidden="true" className="h-px w-4 bg-brand-line" />
            <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
          </div>

          <h3 className="mt-3 line-clamp-3 font-instrument text-lg font-semibold leading-[1.12] tracking-[-0.025em] text-brand-ink sm:text-xl">
            {post.title}
          </h3>

          <p className="mt-3 line-clamp-2 text-xs leading-5 text-brand-body">{post.description}</p>

          <div className="mt-auto flex items-center justify-between gap-3 border-t border-brand-line pt-4 text-[11px]">
            <span className="text-brand-muted">{post.readingMinutes} min read</span>
            <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-[0.1em] text-brand-primary">
              Read blog
              <ArrowUpRight aria-hidden="true" size={13} strokeWidth={1.75} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
