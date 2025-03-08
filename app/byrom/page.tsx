'use client';

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

// Custom footnote component
const Footnote = ({ id }: { id: number }) => (
  <sup>
    <Link
      href={`#ref-${id}`}
      id={`fn-${id}`}
      className="text-[#2b2b2b] dark:text-[#a3b8b0] hover:underline font-medium ml-0.5"
    >
      [{id}]
    </Link>
  </sup>
);

export default function Argument() {
  return (
    <main
      className={`relative ${inter.className} min-h-screen overflow-x-hidden`}
    >
      <div
        className="fixed inset-0 bg-gradient-to-b from-[#2b2b2b] to-transparent dark:from-black/40 dark:to-transparent opacity-[0.08] -z-10"
      />

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        {/* Page Header */}
        <header className="mb-4">
          <h1 className={`${playfair.className} text-4xl sm:text-6xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-6`}>
            Oslo har faktisk ganske trygge gater
          </h1>
          <div className="h-px bg-[#2b2b2b]/20 dark:bg-[#f5f1e8]/20 w-full my-6" />
          <p className="text-xl text-[#2b2b2b]/70 dark:text-[#a3b8b0] max-w-4xl">
            Det er veldig få som dør eller blir hardt skadet i trafikken i Oslo. Likevel er det stort forbedringspotensial. Det er for mye biltrafikk, som påvirker både sikkerheten til myke trafikanter og selve bylivet - hvem har lyst til å henge langs Ring 2?
          </p>
        </header>
      </div>

      {/* Main Content */}
      <div className="relative w-full px-4 pb-24">
        <div className="max-w-3xl mx-auto">
          
          {/* Content Flow */}
          <div className="space-y-4 md:space-y-10">
            
            {/* First box */}
            <section className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-4 md:p-8 bg-white/5 dark:bg-black/20">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-4 md:mb-6 ${playfair.className}`}>
                Biltrafikk dominerer fortsatt bybildet
              </h2>
              <div className="text-base md:text-lg text-[#2b2b2b]/90 dark:text-[#a3b8b0] leading-relaxed space-y-4 md:space-y-6">
                <p>
                  Store deler av Oslo er fortsatt preget av støy, forurensning og barrierer skapt av biltrafikk.
                </p>
                <div className="grid grid-cols-2 gap-6 my-8">
                  <div className="p-6 bg-[#1a472a]/5 dark:bg-[#1a472a]/20 rounded-sm">
                    <p className="text-4xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-2">20%</p>
                    <p className="text-sm text-[#2b2b2b]/90 dark:text-[#a3b8b0]">Av Oslos areal er dedikert til biler<Footnote id={1} /></p>
                  </div>
                  <div className="p-6 bg-[#1a472a]/5 dark:bg-[#1a472a]/20 rounded-sm">
                    <p className="text-4xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-2">70%</p>
                    <p className="text-sm text-[#2b2b2b]/90 dark:text-[#a3b8b0]">Av Oslos befolkning er plaget av trafikkstøy<Footnote id={1} /></p>
                  </div>
                </div>
                <p>
                  Biltrafikken skaper barrierer mellom nabolag og reduserer livskvaliteten for beboere.
                  <Footnote id={2} />
                </p>
                <p>
                  Dette er ikke naturlig - det er et resultat av flere tiår med bilsentrert byplanlegging.
                </p>
              </div>
            </section>

            {/* Second box */}
            <section className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-4 md:p-8 bg-white/5 dark:bg-black/20">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-4 md:mb-6 ${playfair.className}`}>
                Hvordan påvirker dette bylivet?
              </h2>
              <div className="text-base md:text-lg text-[#2b2b2b]/90 dark:text-[#a3b8b0] leading-relaxed space-y-4 md:space-y-6">
                <p>
                  Biltrafikk påvirker hvordan vi bruker og opplever byen vår.
                  <Footnote id={12} />
                </p>
                
                <div className="p-6 border-l-4 border-[#1a472a] dark:border-[#1a472a] bg-[#1a472a]/5 dark:bg-[#1a472a]/20 my-8">
                  <p className="italic text-[#2b2b2b]/90 dark:text-[#a3b8b0]">
                    &ldquo;Ring 2 deler bydelen vår i to. Det er nesten umulig å krysse gaten utenfor rushtiden.&rdquo;
                  </p>
                  <p className="mt-2 text-sm text-[#2b2b2b]/90 dark:text-[#a3b8b0]">— Beboer på Torshov</p>
                </div>

                <p>
                  Store veier skaper utrygge og lite attraktive byrom.
                  <Footnote id={13} />
                </p>

                <p>
                  Dette rammer spesielt barn, eldre og andre som er avhengige av trygge gangveier.
                </p>
              </div>
            </section>

            {/* 3 - Sykkelinfrastruktur lønner seg */}
            <section className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-4 md:p-8 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-4 md:mb-6 ${playfair.className}`}>
                Sykkelinfrastruktur lønner seg
              </h2>
              <div className="text-base md:text-lg text-[#2b2b2b]/90 dark:text-[#a3b8b0] leading-relaxed space-y-4 md:space-y-6">
                <p>
                  Forskningen viser: <span className="font-bold">God sykkelinfrastruktur gir levende byrom.</span>
                </p>

                <p>
                  Hver krone investert i sykkeltiltak gir 4-5 kroner tilbake i samfunnsøkonomisk gevinst.<Footnote id={6} /> Bedre folkehelse, mindre støy og mer attraktive byrom.<Footnote id={7} />
                </p>

                <p>
                  Byer med mye sykling har mer liv i gatene og sterkere lokaløkonomi.<Footnote id={10} />
                </p>
              </div>
            </section>

            {/* 4 - Tettere byutvikling fører til mer gåing og sykling */}
            <section className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-4 md:p-8 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-4 md:mb-6 ${playfair.className}`}>
                Tettere byutvikling fører til mer gåing og sykling
              </h2>
              <div className="text-base md:text-lg text-[#2b2b2b]/90 dark:text-[#a3b8b0] leading-relaxed space-y-4 md:space-y-6">
                <p>
                  Når flere bor tett på hverandre blir det enklere å gå og sykle til daglige gjøremål.<Footnote id={14} />
                </p>

                <p>
                  Tette nabolag har flere butikker, kafeer og tjenester innen gangavstand. Dette gjør det naturlig å velge beina eller sykkelen fremfor bilen.<Footnote id={15} />
                </p>

                <p>
                  Studier viser at folk som bor i tette byområder går og sykler mer enn de som bor i spredte områder.<Footnote id={16} /> Dette gir både bedre helse og mer levende nabolag.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
