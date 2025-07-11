import { projets } from "@/lib/projets";
import Link from "next/link";

export default function ProjetsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-8">Mes Projets</h1>

      <div className="space-y-6">
        {projets.map((projet) => (
          <Link key={projet.slug} href={`/projets/${projet.slug}`}>
            <div className="flex justify-between items-center pb-2 hover:opacity-80 cursor-pointer">
              <h2 className="text-xl font-semibold">{projet.nom}</h2>
              <p className="text-sm text-gray-600">{projet.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
