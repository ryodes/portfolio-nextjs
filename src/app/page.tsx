import { AnimatedText } from "@/components/AnimatedText";

export default function Home() {
  return (
    <main className="p-8 text-center">
      <AnimatedText />
      <h1 className="text-4xl font-bold">Adel Kacimi</h1>
      <p className="mt-4 text-lg text-gray-600">
        Développeur Full-Stack React / Python / Firebase
      </p>
      <a
        href="/projects"
        className="inline-block mt-6 px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
      >
        Voir mes projets
      </a>
    </main>
  );
}
