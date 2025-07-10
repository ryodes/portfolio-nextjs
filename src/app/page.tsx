"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <main className="px-6 py-12 max-w-4xl mx-auto">
      <section className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Texte à gauche */}
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">Salut, moi c’est Adel 👋</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Développeur Full-Stack passionné avec plus de 4 ans d’expérience.
            J’aime créer des applications web modernes, performantes et bien
            pensées, avec un focus sur l’expérience utilisateur.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Mon stack préféré : React / Next.js, Python, Firebase, MongoDB,
            Tailwind, et un peu de Docker & CI/CD pour faire tourner tout ça
            correctement.
          </p>
        </div>

        {/* Photo à droite */}
        <div className="md:w-1/3 shrink-0">
          <Image
            src="/me.jpg" // Mets ta photo dans /public/me.jpg
            alt="Photo de moi"
            width={250}
            height={250}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
      </section>
    </main>
  );
}
