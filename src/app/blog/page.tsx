import Link from "next/link";
import { getBlogPosts } from "@/lib/mdx";

export default async function ProjetsPage() {
  let projets = getBlogPosts();
  return (
    <main className="max-w-3xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {projets
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <li key={post.slug} className="flex justify-between items-center">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-semibold hover:underline max-w-3xs">
                  {post.metadata.title}
                </h2>
              </Link>
              <Link href={`/projets/${post.slug}`}>
                <p className="text-sm text-gray-500 text-end max-w-md">
                  {post.metadata.summary}
                </p>
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
}
