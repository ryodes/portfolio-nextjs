import { projets } from "@/lib/projets";
import { notFound } from "next/navigation";

interface ProjetDetailProps {
  params: {
    slug: string;
  };
}

export default async function ProjetDetailPage({ params }: ProjetDetailProps) {
  const { slug } = await params;

  const projet = projets.find((p) => p.slug === slug);

  if (!projet) {
    return notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-4">{projet.nom}</h1>
      <p className="mb-4">{projet.content}</p>
      {/* {projet.images.map((img, idx) => (
        <img key={idx} src={img} alt="" className="mb-4 rounded shadow" />
      ))} */}
      {projet.link && (
        <a
          href={projet.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Voir le projet en ligne
        </a>
      )}
    </main>
  );
}
