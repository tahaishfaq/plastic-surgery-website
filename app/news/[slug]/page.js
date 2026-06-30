import Link from "next/link";
import { notFound } from "next/navigation";
import SiteShell from "@/components/layout/SiteShell";
import { compileMdxContent, getAllPosts, getPostBySlug } from "@/lib/content/news";

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found | Rahman Plastic Surgery" };
  }

  return {
    title: `${post.title} | Rahman Plastic Surgery`,
    description: post.description,
  };
}

export default async function NewsArticlePage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const Content = await compileMdxContent(post.content);

  return (
    <SiteShell className="min-h-screen bg-brand-white">
      <article className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <Link
            className="text-sm font-bold uppercase tracking-[0.14em] text-brand-primary transition-colors hover:text-brand-primary-hover"
            href="/news"
          >
            Back to News
          </Link>

          <p className="mt-8 text-sm text-brand-muted">{formatDate(post.publishedAt)}</p>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-primary">{post.category}</p>

          <h1 className="mt-5 font-instrument text-4xl font-semibold tracking-[-0.04em] text-brand-ink sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-base leading-7 text-brand-body">{post.description}</p>

          {!post.isFinalized ? (
            <p className="mt-6 rounded-sm border border-brand-line bg-brand-paper px-4 py-3 text-sm leading-6 text-brand-muted">
              Provisional article. Final copy requires client approval before publication.
            </p>
          ) : null}

          <div className="prose-clinic mt-12">
            <Content />
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
