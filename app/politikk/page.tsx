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

export default function Policy() {
  return (
    <main 
      className={`relative ${inter.className} min-h-screen overflow-x-hidden bg-[#f7f4ef] dark:bg-[#0b0b0b] pt-40`}
    >

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <header className="mb-2 md:mb-16">
          <h1 className={`${playfair.className} text-4xl sm:text-6xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-6`}>
            Vår politikk
          </h1>
          <div className="h-px bg-[#2b2b2b]/20 dark:bg-[#f5f1e8]/20 w-full my-6" />
          <p className="text-xl text-[#2b2b2b]/70 dark:text-[#a3b8b0] max-w-3xl">
            Vi jobber for en mer inkluderende by med plass til alle. Her er våre konkrete forslag.
          </p>
        </header>
      </div>

      {/* Main Content */}
      <div className="relative w-full px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-24 md:space-y-32">
            
            {/* Boligpolitikk - Left aligned */}
            <section className="md:flex md:items-start md:gap-12">
              <div className="md:w-1/3 mb-6 md:mb-0 md:sticky md:top-8">
                <h2 className={`text-3xl sm:text-4xl text-[#2b2b2b] dark:text-[#f5f1e8] ${playfair.className}`}>
                  Boligpolitikk
                </h2>
                <p className="mt-4 text-lg text-[#2b2b2b]/70 dark:text-[#a3b8b0]">
                  Oslo trenger drastiske tiltak for å løse boligkrisen.
                </p>
              </div>
              <div className="md:w-2/3 space-y-8">
                <div className="p-8 bg-[#efece5] dark:bg-black/20 backdrop-blur-sm border border-[#1a472a]/20 dark:border-[#f5f1e8]/10">
                  <div className="text-lg text-[#2b2b2b]/90 dark:text-[#a3b8b0] leading-relaxed space-y-6">                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="w-6 h-6 bg-[#1a472a] text-white flex-shrink-0 flex items-center justify-center mr-3">1</span>
                        <div>
                          <h3 className="text-[#2b2b2b] dark:text-[#f5f1e8]">Bygg tettere og høyere</h3>
                          <p className="text-[#2b2b2b]/90 dark:text-[#a3b8b0] mt-1">
                            Opphev småhusplanen og la utbyggere bygge tettere og høyere i hele byen. Dette vil gi flere boliger der folk vil bo.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="w-6 h-6 bg-[#1a472a] text-white flex-shrink-0 flex items-center justify-center mr-3">2</span>
                        <div>
                          <h3 className="text-[#2b2b2b] dark:text-[#f5f1e8]">Forenkle reguleringsprosessen</h3>
                          <p className="text-[#2b2b2b]/90 dark:text-[#a3b8b0] mt-1">
                            Dagens reguleringsprosess tar ofte 7-10 år. Dette må forenkles drastisk for å øke byggetakten.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="w-6 h-6 bg-[#1a472a] text-white flex-shrink-0 flex items-center justify-center mr-3">3</span>
                        <div>
                          <h3 className="text-[#2b2b2b] dark:text-[#f5f1e8]">Fortett rundt kollektivknutepunkter</h3>
                          <p className="text-[#2b2b2b]/90 dark:text-[#a3b8b0] mt-1">
                            Hver t-banestasjon bør ha høy tetthet av boliger. Dette reduserer transportbehov og skaper levende lokalmiljøer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Samferdselspolitikk - Right aligned */}
            <section className="md:flex md:flex-row-reverse md:items-start md:gap-12">
              <div className="md:w-1/3 mb-6 md:mb-0 md:sticky md:top-8">
                <h2 className={`text-3xl sm:text-4xl text-[#2b2b2b] dark:text-[#f5f1e8] ${playfair.className}`}>
                  Samferdselspolitikk
                </h2>
                <p className="mt-4 text-lg text-[#2b2b2b]/70 dark:text-[#a3b8b0]">
                  Vi trenger en radikal omlegging av hvordan vi bruker gatene våre.
                </p>
              </div>
              <div className="md:w-2/3 space-y-8">
                <div className="p-8 bg-[#efece5] dark:bg-black/20 backdrop-blur-sm border border-[#1a472a]/20 dark:border-[#f5f1e8]/10">
                  <div className="text-lg text-[#2b2b2b]/90 dark:text-[#a3b8b0] leading-relaxed space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="w-6 h-6 bg-[#1a472a] text-white flex-shrink-0 flex items-center justify-center mr-3">1</span>
                        <div>
                          <h3 className="text-[#2b2b2b] dark:text-[#f5f1e8]">Prioriter gående og syklende</h3>
                          <p className="text-[#2b2b2b]/90 dark:text-[#a3b8b0] mt-1">
                            Utvid fortau og sykkelfelt på bekostning av parkeringsplasser og kjørefelt.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <span className="w-6 h-6 bg-[#1a472a] text-white flex-shrink-0 flex items-center justify-center mr-3">2</span>
                        <div>
                          <h3 className="text-[#2b2b2b] dark:text-[#f5f1e8]">Bedre kollektivtilbud</h3>
                          <p className="text-[#2b2b2b]/90 dark:text-[#a3b8b0] mt-1">
                            Øk frekvensen på T-bane og buss, særlig utenom rushtid. Utvid nattilbudet.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <span className="w-6 h-6 bg-[#1a472a] text-white flex-shrink-0 flex items-center justify-center mr-3">3</span>
                        <div>
                          <h3 className="text-[#2b2b2b] dark:text-[#f5f1e8]">Reduser gjennomkjøring</h3>
                          <p className="text-[#2b2b2b]/90 dark:text-[#a3b8b0] mt-1">
                            Steng boliggater for gjennomkjøring og skap bilfrie soner i sentrum.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 border-l-4 border-[#1a472a] dark:border-[#1a472a] bg-[#1a472a]/5 dark:bg-[#1a472a]/20 my-8">
                      <p className="text-[#2b2b2b]/90 dark:text-[#a3b8b0]">
                        Hver krone investert i sykkeltiltak gir 4-5 kroner tilbake i samfunnsøkonomisk gevinst gjennom bedre folkehelse, mindre støy og mer attraktive byrom.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Byutvikling - Left aligned */}
            <section className="md:flex md:items-start md:gap-12">
              <div className="md:w-1/3 mb-6 md:mb-0 md:sticky md:top-8">
                <h2 className={`text-3xl sm:text-4xl text-[#2b2b2b] dark:text-[#f5f1e8] ${playfair.className}`}>
                  Byutvikling
                </h2>
                <p className="mt-4 text-lg text-[#2b2b2b]/70 dark:text-[#a3b8b0]">
                  God byutvikling handler om mer enn bare bygninger.
                </p>
              </div>
              <div className="md:w-2/3 space-y-8">
                <div className="p-8 bg-[#efece5] dark:bg-black/20 backdrop-blur-sm border border-[#1a472a]/20 dark:border-[#f5f1e8]/10">
                  <div className="text-lg text-[#2b2b2b]/90 dark:text-[#a3b8b0] leading-relaxed space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="w-6 h-6 bg-[#1a472a] text-white flex-shrink-0 flex items-center justify-center mr-3">1</span>
                        <div>
                          <h3 className="text-[#2b2b2b] dark:text-[#f5f1e8]">Aktive førsteetasjer</h3>
                          <p className="text-[#2b2b2b]/90 dark:text-[#a3b8b0] mt-1">
                            Krav om næringslokaler i førsteetasje i sentrale strøk for å skape levende gater.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <span className="w-6 h-6 bg-[#1a472a] text-white flex-shrink-0 flex items-center justify-center mr-3">2</span>
                        <div>
                          <h3 className="text-[#2b2b2b] dark:text-[#f5f1e8]">Flere møteplasser</h3>
                          <p className="text-[#2b2b2b]/90 dark:text-[#a3b8b0] mt-1">
                            Utvid og oppgrader parker, torg og andre offentlige rom.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <span className="w-6 h-6 bg-[#1a472a] text-white flex-shrink-0 flex items-center justify-center mr-3">3</span>
                        <div>
                          <h3 className="text-[#2b2b2b] dark:text-[#f5f1e8]">Grønnere by</h3>
                          <p className="text-[#2b2b2b]/90 dark:text-[#a3b8b0] mt-1">
                            Plant flere trær og lag grønne korridorer gjennom byen.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Les mer - Full width */}
            <section className="mt-16 md:mt-32">
              <h2 className={`text-2xl sm:text-3xl text-[#2b2b2b] dark:text-[#f5f1e8] mb-8 ${playfair.className}`}>
                Les mer om våre forslag
              </h2>
              <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                <Link 
                  href="/boligkrisen" 
                  className="p-6 bg-[#efece5] dark:bg-black/20 backdrop-blur-sm border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 group"
                >
                  <h3 className={`text-xl text-[#2b2b2b] dark:text-[#f5f1e8] group-hover:underline ${playfair.className}`}>
                    Boligkrisen i Oslo
                  </h3>
                  <p className="text-[#2b2b2b]/70 dark:text-[#a3b8b0] mt-2">
                    Våre forslag til å løse boligkrisen i Oslo.
                  </p>
                </Link>

                <Link 
                  href="/byrom" 
                  className="p-6 bg-[#efece5] dark:bg-black/20 backdrop-blur-sm border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 group"
                >
                  <h3 className={`text-xl text-[#2b2b2b] dark:text-[#f5f1e8] group-hover:underline ${playfair.className}`}>
                    Tryggere gater
                  </h3>
                  <p className="text-[#2b2b2b]/70 dark:text-[#a3b8b0] mt-2">
                    Slik skaper vi levende byrom for alle.
                  </p>
                </Link>

                <Link 
                  href="/kollektiv" 
                  className="p-6 bg-[#efece5] dark:bg-black/20 backdrop-blur-sm border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 group"
                >
                  <h3 className={`text-xl text-[#2b2b2b] dark:text-[#f5f1e8] group-hover:underline ${playfair.className}`}>
                    Fremtidens kollektivtransport
                  </h3>
                  <p className="text-[#2b2b2b]/70 dark:text-[#a3b8b0] mt-2">
                    Slik forbedrer vi tilbudet i hele byen.
                  </p>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
