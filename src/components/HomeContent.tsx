"use client";

import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";

export default function HomeContent() {
  return (
    <section>
      <AnimatedText initial={{ opacity: 0, y: -30 }}>
        <h1>Salut, moi c’est Adel 👋</h1>
      </AnimatedText>

      <AnimatedText initial={{ opacity: 0, y: 25 }} className="relative">
        <Image
          src="/me.jpg"
          alt="Photo de moi"
          width={120}
          height={120}
          className="float-right ml-4 mb-2 rounded-full shadow-md object-cover"
        />

        <p>
          Bienvenue sur mon portfolio ! Ce site a pour but de te faire découvrir
          mon parcours, mes projets, et ce qui me passionne au quotidien. Si tu
          veux en savoir plus sur moi, tu es au bon endroit.
        </p>

        <p>
          Je suis un <strong>développeur full-stack passionné</strong> avec plus
          de <strong>4 ans d’expérience</strong> dans la création d’applications
          web performantes. J’adore combiner la rigueur du backend avec la
          finesse du frontend pour livrer des expériences utilisateur fluides et
          intuitives.
        </p>

        <p>
          Mon stack de prédilection inclut <strong>React</strong>,{" "}
          <strong>Next.js</strong>, <strong>Python</strong>,{" "}
          <strong>MongoDB</strong>, ainsi que des outils DevOps comme{" "}
          <strong>GitLab CI/CD</strong>, <strong>AWS</strong> ou{" "}
          <strong>Docker</strong>. Je suis curieux, autonome, et j’aime
          apprendre et construire des choses utiles.
        </p>

        <p>
          J’ai découvert l’informatique à{" "}
          <strong>l’université Paul Sabatier à Toulouse</strong>, et très vite,
          je suis tombé amoureux de la programmation. Ce que j’aime le plus,
          c’est construire des choses utiles, résoudre des problèmes, et
          apprendre sans cesse de nouvelles technos.
        </p>

        <p>
          En dehors du code, je suis passionné par les jeux vidéo (et pas que
          les AAA), la culture japonaise sous toutes ses formes 🇯🇵, et je ne dis
          jamais non à une bonne sieste bien méritée 😴.
        </p>
        <a href="/Adel-KACIMI-CV.pdf" download="Adel_KACIMI_CV">
          <strong> Télécharger mon CV </strong>
        </a>
      </AnimatedText>
    </section>
  );
}
