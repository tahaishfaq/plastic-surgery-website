import { getAllPosts } from "@/lib/content/news";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export default async function sitemap() {
  if (!siteUrl) return [];

  const staticRoutes = [
    "",
    "/about",
    "/doctors",
    "/featured-procedures",
    "/case-studies",
    "/news",
    "/contact",
    "/careers",
    "/international-patients",
    "/privacy-policy",
    "/medical-disclaimer",
    "/terms-and-conditions",
  ];

  const posts = await getAllPosts();

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
    })),
    ...posts.map((post) => ({
      url: `${siteUrl}/news/${post.slug}`,
      lastModified: new Date(post.publishedAt),
    })),
  ];
}
