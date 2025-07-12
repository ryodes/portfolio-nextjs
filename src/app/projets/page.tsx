import Link from "next/link";
import { getBlogPosts } from "@/lib/mdx";

export default async function ProjetsPage() {
  let projets = getBlogPosts();
  return (
    <main className="max-w-3xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Projets</h1>
      <ul className="space-y-4">
        {projets.map((post) => (
          <li key={post.slug} className="flex justify-between items-center">
            <Link href={`/projets/${post.slug}`}>
              <h2 className="text-xl font-semibold hover:underline">
                {post.metadata.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500">{post.metadata.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
