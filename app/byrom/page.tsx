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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-24">
        <header className="mb-10 sm:mb-14">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Oslo har faktisk ganske trygge gater
          </h1>
          <div className="border-t border-foreground/15 my-4" />
          <p className="text-xl text-foreground/60 max-w-3xl leading-relaxed">
            Det er veldig få som dør eller blir hardt skadet i trafikken i
            Oslo. Likevel er det stort forbedringspotensial. Det er for mye
            biltrafikk, som påvirker både sikkerheten til myke trafikanter og
            selve bylivet.
          </p>
        </header>

        <div className="max-w-3xl space-y-6 sm:space-y-8">
        <section className="border border-foreground/10 p-6 sm:p-10">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-6">
            Biltrafikk dominerer fortsatt bybildet
          </h2>
          <div className="text-foreground/75 leading-[1.8] space-y-5">
            <p>
              Store deler av Oslo er fortsatt preget av støy, forurensning
              og barrierer skapt av biltrafikk.
            </p>
            <div className="grid grid-cols-2 gap-4 my-8">
              <div className="p-5 border border-foreground/10">
                <p className="font-serif text-3xl mb-2">20%</p>
                <p className="text-sm text-foreground/60">
                  Av Oslos areal er dedikert til biler
                  <Footnote id={1} />
                </p>
              </div>
              <div className="p-5 border border-foreground/10">
                <p className="font-serif text-3xl mb-2">70%</p>
                <p className="text-sm text-foreground/60">
                  Av Oslos befolkning er plaget av trafikkstøy
                  <Footnote id={1} />
                </p>
              </div>
            </div>
            <p>
              Biltrafikken skaper barrierer mellom nabolag og reduserer
              livskvaliteten for beboere.
              <Footnote id={2} />
            </p>
            <p>
              Dette er ikke naturlig — det er et resultat av flere tiår med
              bilsentrert byplanlegging.
            </p>
          </div>
        </section>

        <section className="border border-foreground/10 p-6 sm:p-10">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-6">
            Hvordan påvirker dette bylivet?
          </h2>
          <div className="text-foreground/75 leading-[1.8] space-y-5">
            <p>
              Biltrafikk påvirker hvordan vi bruker og opplever byen vår.
              <Footnote id={12} />
            </p>

            <div className="py-6 pl-6 border-l-2 border-foreground/15 my-8">
              <p className="font-serif text-lg italic text-foreground/75">
                &ldquo;Ring 2 deler bydelen vår i to. Det er nesten umulig å
                krysse gaten utenfor rushtiden.&rdquo;
              </p>
              <p className="mt-3 text-sm text-foreground/50">
                — Beboer på Torshov
              </p>
            </div>

            <p>
              Store veier skaper utrygge og lite attraktive byrom.
              <Footnote id={13} />
            </p>
            <p>
              Dette rammer spesielt barn, eldre og andre som er avhengige av
              trygge gangveier.
            </p>
          </div>
        </section>

        <section className="border border-foreground/10 p-6 sm:p-10">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-6">
            Sykkelinfrastruktur lønner seg
          </h2>
          <div className="text-foreground/75 leading-[1.8] space-y-5">
            <p>
              Forskningen viser:{' '}
              <span className="font-medium text-foreground">
                God sykkelinfrastruktur gir levende byrom.
              </span>
            </p>
            <p>
              Hver krone investert i sykkeltiltak gir 4-5 kroner tilbake i
              samfunnsøkonomisk gevinst.
              <Footnote id={6} /> Bedre folkehelse, mindre støy og mer
              attraktive byrom.
              <Footnote id={7} />
            </p>
            <p>
              Byer med mye sykling har mer liv i gatene og sterkere
              lokaløkonomi.
              <Footnote id={10} />
            </p>
          </div>
        </section>

        <section className="border border-foreground/10 p-6 sm:p-10">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-6">
            Tettere byutvikling fører til mer gåing og sykling
          </h2>
          <div className="text-foreground/75 leading-[1.8] space-y-5">
            <p>
              Når flere bor tett på hverandre blir det enklere å gå og sykle
              til daglige gjøremål.
              <Footnote id={14} />
            </p>
            <p>
              Tette nabolag har flere butikker, kafeer og tjenester innen
              gangavstand. Dette gjør det naturlig å velge beina eller
              sykkelen fremfor bilen.
              <Footnote id={15} />
            </p>
            <p>
              Studier viser at folk som bor i tette byområder går og sykler
              mer enn de som bor i spredte områder.
              <Footnote id={16} /> Dette gir både bedre helse og mer levende
              nabolag.
            </p>
          </div>
        </section>
        </div>
      </div>
    </main>
  );
}
