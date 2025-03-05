import { Playfair_Display, Inter } from 'next/font/google';
import Link from 'next/link';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500'],
});

const links = [
  {
    category: "Offentlige dokumenter",
    items: [
      {
        title: "Oslo kommunes saksinnsyn",
        url: "https://www.oslo.kommune.no/saksinnsyn",
        description: "Søk i kommunens saker og dokumenter"
      },
      {
        title: "Plan- og bygningsetaten",
        url: "https://www.oslo.kommune.no/plan-bygg-og-eiendom",
        description: "Informasjon om byggesaker og reguleringsplaner"
      },
      {
        title: "Høringer i Oslo kommune",
        url: "https://www.oslo.kommune.no/horinger",
        description: "Aktive høringer i Oslo kommune"
      }
    ]
  },
  {
    category: "Transport og byutvikling",
    items: [
      {
        title: "Ruter - Planlagte prosjekter",
        url: "https://ruter.no/om-ruter/prosjekter",
        description: "Oversikt over Ruters pågående prosjekter"
      },
      {
        title: "Sporveien - Utbyggingsprosjekter",
        url: "https://sporveien.com/inter/prosjekter",
        description: "Sporveiens utbyggingsprosjekter"
      },
      {
        title: "Bymiljøetaten",
        url: "https://www.oslo.kommune.no/bymiljoetaten",
        description: "Ansvarlig for byens uterom, parker og gater"
      }
    ]
  }
];

const research = [
  {
    category: "Boligmarked og byutvikling",
    items: [
      {
        title: "Forskningsartikkel nr. 1",
        authors: "Person, Sted",
        year: "2023",
        url: "bedreoslo.no",
        description: "Beskrivelse av artikkelen"
      },
      {
        title: "Forskningsartikkel nr. 2",
        authors: "Person, Sted",
        year: "2021",
        url: "bedreoslo.no",
        description: "Beskrivelse av artikkelen"
      }
    ]
  },
  {
    category: "Transport og mobilitet",
    items: [
      {
        title: "Artikkel nr. 4",
        authors: "Person, Sted",
        year: "2022",
        url: "bedreoslo.no",
        description: "Beskrivelse av artikkelen"
      }
    ]
  }
];

export default function ResourcesPage() {
  return (
    <main 
      className={`relative ${inter.className} min-h-screen overflow-x-hidden bg-[#f7f4ef] dark:bg-[#0a0a0a] pt-40`}
    >
      <div 
        className="fixed inset-0 bg-gradient-to-b from-[#2b2b2b] to-transparent dark:from-black/40 dark:to-transparent opacity-[0.08] -z-10"
      />

      <div className="max-w-5xl mx-auto px-4 pb-16">
        {/* Page Header */}
        <header className="mb-8 md:mb-16">
          <h1 className={`${playfair.className} text-3xl sm:text-4xl md:text-6xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-4 md:mb-6`}>
            Ressurser
          </h1>
          <div className="h-px bg-[#2b2b2b]/20 dark:bg-[#f5f1e8]/20 w-full my-4 md:my-6" />
          <p className="text-lg md:text-xl text-[#2b2b2b]/70 dark:text-[#a3b8b0] max-w-2xl">
            Utforsk våre samlinger av ressurser om byutvikling
          </p>
        </header>

        {/* Links Section */}
        <section className="mb-16">
          <h2 className={`${playfair.className} text-2xl md:text-3xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-6`}>
            Nyttige lenker
          </h2>
          <div className="grid gap-6">
            {links.map((category) => (
              <div 
                key={category.category}
                className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 bg-white/5 dark:bg-black/20 p-6"
              >
                <h3 className={`${playfair.className} text-xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-4`}>
                  {category.category}
                </h3>
                <div className="grid gap-4">
                  {category.items.map((link) => (
                    <Link
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start"
                    >
                      <div className="flex-grow">
                        <h4 className="text-[#2b2b2b] dark:text-[#f5f1e8] font-medium group-hover:underline">
                          {link.title}
                        </h4>
                        <p className="text-sm text-[#2b2b2b]/70 dark:text-[#a3b8b0] mt-1">
                          {link.description}
                        </p>
                      </div>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 text-[#2b2b2b]/40 dark:text-[#f5f1e8]/40 mt-1 ml-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Section */}
        <section>
          <h2 className={`${playfair.className} text-2xl md:text-3xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-6`}>
            Forskning
          </h2>
          <div className="grid gap-6">
            {research.map((category) => (
              <div 
                key={category.category}
                className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 bg-white/5 dark:bg-black/20 p-6"
              >
                <h3 className={`${playfair.className} text-xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-4`}>
                  {category.category}
                </h3>
                <div className="grid gap-6">
                  {category.items.map((paper) => (
                    <Link
                      key={paper.url}
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start"
                    >
                      <div className="flex-grow">
                        <h4 className="text-[#2b2b2b] dark:text-[#f5f1e8] font-medium group-hover:underline">
                          {paper.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-[#2b2b2b]/70 dark:text-[#a3b8b0]">
                            {paper.authors}
                          </span>
                          <span className="text-sm text-[#2b2b2b]/50 dark:text-[#a3b8b0]/50">
                            •
                          </span>
                          <span className="text-sm text-[#2b2b2b]/70 dark:text-[#a3b8b0]">
                            {paper.year}
                          </span>
                        </div>
                        <p className="text-sm text-[#2b2b2b]/70 dark:text-[#a3b8b0] mt-2">
                          {paper.description}
                        </p>
                      </div>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 text-[#2b2b2b]/40 dark:text-[#f5f1e8]/40 mt-1 ml-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
