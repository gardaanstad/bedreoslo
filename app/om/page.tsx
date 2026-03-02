export default function AboutPage() {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-24">
        <header className="mb-10 sm:mb-14">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Om Bedre Oslo
          </h1>
          <div className="border-t border-foreground/15 my-4" />
          <p className="text-xl text-foreground/60 max-w-3xl leading-relaxed">
            Dette er en kort beskrivelse av Bedre Oslo. Her kan det stå mer
            informasjon om hva vi jobber med og står for. Denne siden er ikke
            helt ferdig enda!
          </p>
        </header>

        {/* Principles */}
        <section className="mb-16 sm:mb-20">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-6">
            Våre prinsipper
          </h2>
          <div className="border-2 border-foreground p-6 sm:p-8">
            <ul className="space-y-6">
              {[
                {
                  num: 1,
                  title: 'Prinsipp #1',
                  desc: 'Beskrivelse av det første prinsippet.',
                },
                {
                  num: 2,
                  title: 'Prinsipp #2',
                  desc: 'Beskrivelse av det andre prinsippet.',
                },
                {
                  num: 3,
                  title: 'Prinsipp #3',
                  desc: 'Beskrivelse av det tredje prinsippet.',
                },
              ].map((p) => (
                <li key={p.num} className="flex items-start gap-4">
                  <span className="font-serif text-2xl text-foreground/25 leading-none mt-0.5">
                    {p.num}
                  </span>
                  <div>
                    <h4 className="font-medium mb-1">{p.title}</h4>
                    <p className="text-sm text-foreground/60 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What We Do */}
        <section className="mb-16 sm:mb-20">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-6">
            Hva vi gjør
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
            {[
              {
                title: 'Aktivitet #1',
                desc: 'Beskrivelse av den første aktiviteten som Bedre Oslo driver med.',
              },
              {
                title: 'Aktivitet #2',
                desc: 'Beskrivelse av den andre aktiviteten som Bedre Oslo driver med.',
              },
              {
                title: 'Aktivitet #3',
                desc: 'Beskrivelse av den tredje aktiviteten som Bedre Oslo driver med.',
              },
              {
                title: 'Aktivitet #4',
                desc: 'Beskrivelse av den fjerde aktiviteten som Bedre Oslo driver med.',
              },
            ].map((a) => (
              <div
                key={a.title}
                className="p-6 sm:p-8 bg-background"
              >
                <h3 className="font-serif text-lg font-bold mb-2">
                  {a.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16 sm:mb-20">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-6">
            Ofte stilte spørsmål
          </h2>
          <div className="divide-y divide-foreground/10 border-t border-b border-foreground/10">
            {[
              {
                q: 'Spørsmål #1',
                a: 'Svar på det første spørsmålet som ofte blir stilt om Bedre Oslo.',
              },
              {
                q: 'Spørsmål #2',
                a: 'Svar på det andre spørsmålet som ofte blir stilt om Bedre Oslo.',
              },
              {
                q: 'Spørsmål #3',
                a: 'Svar på det tredje spørsmålet som ofte blir stilt om Bedre Oslo.',
              },
            ].map((faq) => (
              <div key={faq.q} className="py-6">
                <h3 className="font-serif text-lg font-bold mb-2">
                  {faq.q}
                </h3>
                <p className="text-foreground/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* People */}
        <section>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            Våre folk
          </h2>
          <p className="text-foreground/60 mb-6 max-w-2xl">
            Kort beskrivelse av menneskene som er involvert i Bedre Oslo.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="p-5 bg-background">
                <div className="aspect-square w-full bg-foreground/[0.03] mb-4 flex items-center justify-center">
                  <span className="text-foreground/10 text-xs font-mono uppercase tracking-wider">
                    Bilde
                  </span>
                </div>
                <h3 className="font-serif font-bold mb-0.5">Person #{n}</h3>
                <p className="text-foreground/50 text-sm">Rolle #{n}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
