import Link from 'next/link';

const Footnote = ({ id }: { id: number }) => (
  <sup>
    <Link
      href={`#ref-${id}`}
      id={`fn-${id}`}
      className="text-accent/70 hover:underline text-xs ml-0.5"
    >
      [{id}]
    </Link>
  </sup>
);

export default function Argument() {
  return (
    <main>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-12">
        <header>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Oslo har en boligkrise. Her er historien.
          </h1>
          <div className="border-t border-foreground/15 my-4" />
          <p className="text-xl text-foreground/60 max-w-3xl leading-relaxed">
            Dette er ikke bare tall og statistikk — det er historien om
            mennesker som skyves ut av byen de elsker. Denne siden er ikke helt
            ferdig ennå!
          </p>
        </header>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Main column */}
          <div className="md:col-span-8 space-y-8">
            {/* Chapter 1 */}
            <section className="border border-foreground/10 p-6 sm:p-10">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/50">
                Kapittel 1
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-2 mb-6">
                Det var en gang en by hvor alle kunne bo
              </h2>
              <div className="text-foreground/75 leading-[1.8] space-y-5">
                <p>
                  For ikke lenge siden var Oslo en by hvor vanlige mennesker
                  kunne drømme om å eie sin egen bolig. Men noe har endret
                  seg dramatisk på kort tid.
                </p>
                <div className="grid grid-cols-2 gap-4 my-8">
                  <div className="p-5 border border-foreground/10">
                    <p className="font-serif text-3xl mb-2">+110%</p>
                    <p className="text-sm text-foreground/60">
                      Boligprisene i Oslo har steget med 110% siden 2010
                      <Footnote id={1} />
                    </p>
                  </div>
                  <div className="p-5 border border-foreground/10">
                    <p className="font-serif text-3xl mb-2">+32%</p>
                    <p className="text-sm text-foreground/60">
                      Lønningene har kun økt med 32% i samme periode
                      <Footnote id={1} />
                    </p>
                  </div>
                </div>
                <p>
                  I dag står over 50 000 osloborgere i boligkø — flere enn
                  hele befolkningen i Moss.
                  <Footnote id={2} /> Og hvis trenden fortsetter, mangler
                  Oslo tusenvis av boliger innen 2030.
                </p>
                <p>
                  Dette er ikke en naturkatastrofe. Det er resultatet av
                  bevisste politiske valg gjennom flere tiår.
                </p>
              </div>
            </section>

            {/* Chapter 2 */}
            <section className="border border-foreground/10 p-6 sm:p-10">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/50">
                Kapittel 2
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-2 mb-6">
                Hvem rammer dette hardest?
              </h2>
              <div className="text-foreground/75 leading-[1.8] space-y-5">
                <p>
                  Unge mennesker som forsøker å etablere seg i dag møter en
                  virkelighet deres foreldre aldri opplevde. En
                  førstegangskjøper i Oslo må nå spare i gjennomsnitt i{' '}
                  <span className="font-medium text-foreground">
                    15 år
                  </span>{' '}
                  for å ha råd til egenkapitalen til en leilighet — opp fra
                  3 år i 1995.
                  <Footnote id={12} />
                </p>

                <div className="py-6 pl-6 border-l-2 border-foreground/15 my-8">
                  <p className="font-serif text-lg italic text-foreground/75">
                    &ldquo;Dette er et sitat fra en person.&rdquo;
                  </p>
                  <p className="mt-3 text-sm text-foreground/50">
                    — Person, yrke i Oslo
                  </p>
                </div>

                <p>
                  Over 60% av lavinntektsfamilier i Oslo bruker mer enn 40%
                  av inntekten sin på bolig — langt over det som regnes som
                  bærekraftig.
                  <Footnote id={13} />
                </p>
                <p>
                  Konsekvensene er dramatiske: økende økonomisk ulikhet,
                  lengre pendleavstander, familier som splittes, og en by
                  som sakte mister sitt mangfold.
                </p>
              </div>
            </section>

            {/* Chapter 3 */}
            <section className="border border-foreground/10 p-6 sm:p-10">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/50">
                Kapittel 3
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-2 mb-6">
                Hva forskningen forteller oss
              </h2>
              <div className="text-foreground/75 leading-[1.8] space-y-5">
                <p>
                  Selv om debatten ofte preges av følelser og anekdoter,
                  forteller forskningen en klar historie:{' '}
                  <span className="font-medium text-foreground">
                    Økt boligbygging gjør boliger billigere.
                  </span>
                </p>
                <p>
                  For hver 10% økning i boligmasse, synker boligprisene med
                  5-7%.
                  <Footnote id={6} /> Nye studier fra både USA og Europa
                  viser at bygging av nye boliger skaper en
                  &ldquo;filtering&rdquo;-effekt som gjør at prisene synker
                  i alle segmenter av markedet.
                  <Footnote id={7} />
                </p>
                <p>
                  Forskningen viser også at tettere byutvikling reduserer
                  klimagassutslipp. En gjennomsnittlig familie som bor i en
                  leilighet i Oslo sentrum har et 30-40% lavere
                  klimaavtrykk enn den samme familien i en enebolig i Bærum
                  eller Lillestrøm.
                  <Footnote id={10} />
                </p>
              </div>
            </section>

            {/* Chapter 4 */}
            <section className="border border-foreground/10 p-6 sm:p-10">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/50">
                Kapittel 4
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-2 mb-6">
                Veien videre for Oslo
              </h2>
              <div className="text-foreground/75 leading-[1.8] space-y-5">
                <p>
                  Vi står ved et veiskille. Vi kan velge en fremtid hvor
                  alle har råd til å bo, eller fortsette på en vei hvor byen
                  blir et privilegium for de få.
                </p>

                <div className="my-8 divide-y divide-foreground/10 border-t border-b border-foreground/10">
                  {[
                    {
                      num: 1,
                      title: 'Bygg tettere og høyere',
                      desc: 'Vi må bygge tettere der folk vil bo. Småhusplanen innenfor Ring 3 må oppdateres for å tillate flere leiligheter og rekkehus.',
                      fn: 15,
                    },
                    {
                      num: 2,
                      title: 'Forenkle reguleringsprosessen',
                      desc: 'Dagens reguleringsprosess tar ofte 7-10 år fra idé til første spadetak. Dette må forenkles drastisk.',
                      fn: 16,
                    },
                    {
                      num: 3,
                      title: 'Fortett rundt kollektivknutepunkter',
                      desc: 'Hver T-banestasjon bør ha høy tetthet av boliger. Dette reduserer transportbehov og skaper levende lokalmiljøer.',
                      fn: 17,
                    },
                  ].map((item) => (
                    <div
                      key={item.num}
                      className="flex items-start gap-4 py-5"
                    >
                      <span className="font-serif text-2xl text-foreground/25 leading-none mt-0.5">
                        {item.num}
                      </span>
                      <div>
                        <h3 className="font-medium text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-foreground/70 mt-1">
                          {item.desc}
                          <Footnote id={item.fn} />
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p>
                  Dette er ikke radikale idéer. Dette er sunn fornuft basert
                  på forskning og erfaringer fra byer som har lykkes med å
                  holde boligprisene nede.
                </p>

                <div className="text-center mt-8 pt-8 border-t border-foreground/10">
                  <Link
                    href="/medlem"
                    className="inline-block px-8 py-3 bg-foreground text-background text-sm tracking-wide hover:bg-foreground/85"
                  >
                    Bli medlem
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-8">
            <div className="border border-foreground/10 p-6 md:sticky md:top-8">
              <h3 className="font-serif text-lg font-bold mb-4">
                Visste du at...
              </h3>
              <div className="space-y-4 text-foreground/70">
                {[
                  {
                    text: 'Oslo har over 200 000 eneboliger og rekkehus, mange med stort potensial for fortetting.',
                  },
                  {
                    text: 'Tette, kompakte byer er ikke bare bra for klimaet – de er også mer levende og økonomisk produktive.',
                    fn: 11,
                  },
                  {
                    text: 'Innovasjon skjer når mennesker med ulik bakgrunn og kompetanse møtes — noe som er lettere i tette, mangfoldige byer.',
                  },
                  {
                    text: 'For studenter og unge arbeidstakere er situasjonen kritisk: enten bo trangt i kollektiv langt fra sentrum, eller ta på seg uforsvarlig høy gjeld.',
                    fn: 14,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`pb-4 ${i < 3 ? 'border-b border-foreground/10' : ''}`}
                  >
                    <p className="text-sm leading-relaxed">
                      {item.text}
                      {item.fn && <Footnote id={item.fn} />}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-foreground/10 p-6">
              <h3 className="font-serif text-lg font-bold mb-4">
                Suksesshistorier
              </h3>
              <div className="space-y-4 text-foreground/70">
                {[
                  {
                    city: 'Helsinki',
                    text: 'Bygde over 7000 boliger årlig (2016-2019), som førte til at boligprisene faktisk falt i reelle termer. Oslo bygde under 3000 boliger årlig i samme periode.',
                    fn: 8,
                  },
                  {
                    city: 'Austin',
                    text: 'Økte boligbyggingen med 40% i perioden 2018-2022. Resultatet var at leieprisene falt med 11% i 2023, mens de økte i resten av USA.',
                  },
                  {
                    city: 'Minneapolis',
                    text: 'Fjernet restriksjonene på flerbolighus i 2019. Tre år senere hadde byen den laveste prisveksten blant storbyene i USA.',
                  },
                ].map((item, i) => (
                  <div
                    key={item.city}
                    className={`pb-4 ${i < 2 ? 'border-b border-foreground/10' : ''}`}
                  >
                    <h4 className="font-medium text-foreground mb-1">
                      {item.city}
                    </h4>
                    <p className="text-sm leading-relaxed">
                      {item.text}
                      {item.fn && <Footnote id={item.fn} />}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
