import Link from 'next/link';

const links = [
  {
    category: 'Offentlige dokumenter',
    items: [
      {
        title: 'Oslo kommunes saksinnsyn',
        url: 'https://www.oslo.kommune.no/saksinnsyn',
        description: 'Søk i kommunens saker og dokumenter',
      },
      {
        title: 'Plan- og bygningsetaten',
        url: 'https://www.oslo.kommune.no/plan-bygg-og-eiendom',
        description: 'Informasjon om byggesaker og reguleringsplaner',
      },
      {
        title: 'Høringer i Oslo kommune',
        url: 'https://www.oslo.kommune.no/horinger',
        description: 'Aktive høringer i Oslo kommune',
      },
    ],
  },
  {
    category: 'Transport og byutvikling',
    items: [
      {
        title: 'Ruter — Planlagte prosjekter',
        url: 'https://ruter.no/om-ruter/prosjekter',
        description: 'Oversikt over Ruters pågående prosjekter',
      },
      {
        title: 'Sporveien — Utbyggingsprosjekter',
        url: 'https://sporveien.com/inter/prosjekter',
        description: 'Sporveiens utbyggingsprosjekter',
      },
      {
        title: 'Bymiljøetaten',
        url: 'https://www.oslo.kommune.no/bymiljoetaten',
        description: 'Ansvarlig for byens uterom, parker og gater',
      },
    ],
  },
];

const research = [
  {
    category: 'Boligmarked og byutvikling',
    items: [
      {
        title: 'Forskningsartikkel nr. 1',
        authors: 'Person, Sted',
        year: '2023',
        url: 'example.com/1',
        description: 'Beskrivelse av artikkelen',
      },
      {
        title: 'Forskningsartikkel nr. 2',
        authors: 'Person, Sted',
        year: '2021',
        url: 'example.com/2',
        description: 'Beskrivelse av artikkelen',
      },
    ],
  },
  {
    category: 'Transport og mobilitet',
    items: [
      {
        title: 'Artikkel nr. 3',
        authors: 'Person, Sted',
        year: '2022',
        url: 'example.com/3',
        description: 'Beskrivelse av artikkelen',
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-24">
        <header className="mb-10 sm:mb-14">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Ressurser
          </h1>
          <div className="border-t border-foreground/15 my-4" />
          <p className="text-lg text-foreground/60 max-w-2xl">
            Utforsk våre samlinger av ressurser om byutvikling
          </p>
        </header>

        {/* Links */}
        <section className="mb-14 sm:mb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
            Nyttige lenker
          </h2>
          <div className="space-y-8">
            {links.map((category) => (
              <div key={category.category}>
                <h3 className="text-[10px] font-mono tracking-[0.2em] uppercase text-foreground/50 mb-3">
                  {category.category}
                </h3>
                <div className="divide-y divide-foreground/10 border-t border-b border-foreground/10">
                  {category.items.map((link) => (
                    <Link
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-4"
                    >
                      <div>
                        <h4 className="text-sm font-medium group-hover:underline underline-offset-2 decoration-1">
                          {link.title}
                        </h4>
                        <p className="text-xs text-foreground/50 mt-0.5">
                          {link.description}
                        </p>
                      </div>
                      <span className="text-foreground/25 ml-4 flex-shrink-0 text-sm">
                        ↗
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research */}
        <section>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
            Forskning
          </h2>
          <div className="space-y-8">
            {research.map((category) => (
              <div key={category.category}>
                <h3 className="text-[10px] font-mono tracking-[0.2em] uppercase text-foreground/50 mb-3">
                  {category.category}
                </h3>
                <div className="divide-y divide-foreground/10 border-t border-b border-foreground/10">
                  {category.items.map((paper) => (
                    <Link
                      key={paper.url}
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-4"
                    >
                      <div>
                        <h4 className="text-sm font-medium group-hover:underline underline-offset-2 decoration-1">
                          {paper.title}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-xs text-foreground/50">
                            {paper.authors}
                          </span>
                          <span className="text-xs text-foreground/25">
                            &middot;
                          </span>
                          <span className="text-xs text-foreground/50">
                            {paper.year}
                          </span>
                        </div>
                        <p className="text-xs text-foreground/50 mt-1">
                          {paper.description}
                        </p>
                      </div>
                      <span className="text-foreground/25 ml-4 flex-shrink-0 text-sm">
                        ↗
                      </span>
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
