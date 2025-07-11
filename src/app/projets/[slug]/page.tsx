interface ProjetDetailProps {
  params: { slug: string };
}

export default function ProjetDetailPage({ params }: ProjetDetailProps) {
  const { slug } = params;

  // En vrai, tu peux fetcher une vraie source ou importer un objet local
  return (
    <main className="max-w-3xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-4">Détails du projet : {slug}</h1>
      <p className="mb-4 text-gray-700">
        Ici tu peux ajouter une description détaillée du projet, des captures
        d’écran, des liens, etc.
      </p>

      <p className="text-sm text-blue-600 underline cursor-pointer">
        🔗 Lien vers le projet (externe)
      </p>
    </main>
  );
}
