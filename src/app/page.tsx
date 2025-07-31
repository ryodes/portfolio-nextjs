import HomeContent from "@/components/HomeContent";

export default function HomePage() {
  return (
    <main className="px-6 py-6 max-w-2xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            dateCreated: "2025-07-10T12:34:00-05:00",
            dateModified: "2025-07-31T07:53:00-05:00",
            mainEntity: {
              "@type": "Person",
              name: "Adel Kacimi",
              alternateName: "Ryodes",
              description:
                "Portfolio d’Adel Kacimi, développeur fullstack passionné, spécialisé en React, Python et création d’applications web performantes.",
              image:
                "https://adel-kacimi.vercel.app/_next/image?url=%2Fme.jpg&w=256&q=75",
              sameAs: [
                "https://github.com/ryodes",
                "https://www.linkedin.com/in/adel-kacimi-146b08166/",
              ],
            },
          }),
        }}
      />
      <HomeContent />
    </main>
  );
}
