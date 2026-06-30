import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

const NEWS_CONTENT_DIR = path.join(process.cwd(), "content/news");

async function readMdxFile(slug) {
  const filePath = path.join(NEWS_CONTENT_DIR, `${slug}.mdx`);
  const source = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    slug,
    title: data.title,
    description: data.description,
    publishedAt: data.publishedAt,
    author: data.author,
    category: data.category,
    isFinalized: Boolean(data.isFinalized),
    content,
  };
}

export async function getAllPosts() {
  const entries = await fs.readdir(NEWS_CONTENT_DIR);
  const slugs = entries.filter((entry) => entry.endsWith(".mdx")).map((entry) => entry.replace(/\.mdx$/, ""));

  const posts = await Promise.all(slugs.map((slug) => readMdxFile(slug)));

  return posts
    .map(({ content, ...meta }) => meta)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export async function getPostBySlug(slug) {
  try {
    return await readMdxFile(slug);
  } catch {
    return null;
  }
}

export async function compileMdxContent(source) {
  const compiled = await compile(source, { outputFormat: "function-body" });
  const { default: Content } = await run(compiled, { ...runtime });
  return Content;
}
