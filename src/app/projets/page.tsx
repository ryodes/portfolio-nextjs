import Link from "next/link";

const projets = [
  {
    slug: "site-piano",
    nom: "Learn Chords",
    description: "Appli d’apprentissage des accords de piano",
  },
  {
    slug: "blog-dev",
    nom: "Mon blog perso",
    description: "Un blog tech en Markdown avec Next.js",
  },
  {
    slug: "arborescence-eanqa",
    nom: "Outil d’arborescence",
    description: "Outil interne développé chez EANQA",
  },
];

export default function ProjetsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-8">Projets</h1>

      <div className="space-y-6">
        {projets.map((projet) => (
          <Link key={projet.slug} href={`/projets/${projet.slug}`}>
            <div className="flex justify-between items-center border-b pb-2 hover:opacity-80 cursor-pointer">
              <h2 className="text-xl font-semibold">{projet.nom}</h2>
              <p className="text-sm text-gray-600">{projet.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
