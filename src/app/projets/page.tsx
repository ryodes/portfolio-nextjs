import Link from "next/link";
import { getBlogPosts } from "@/lib/mdx";

export default async function ProjetsPage() {
  let projets = getBlogPosts();
  return (
    <main className="max-w-3xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Projets</h1>
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
              <Link href={`/projets/${post.slug}`}>
                <h2 className="text-xl font-semibold hover:underline max-w-3xs">
                  {post.metadata.title}
                </h2>
                {post.metadata.stack && (
                  <p className="text-xs text-gray-500 mb-2">
                    {post.metadata.stack
                      ?.split(",")
                      .map((item: string) => item.trim())
                      .join(" • ")}
                  </p>
                )}
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
