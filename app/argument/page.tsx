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
      className={`relative ${inter.className} min-h-screen overflow-x-hidden bg-[#f7f4ef] dark:bg-[#0a0a0a] pt-40`}
    >
      {/* Fixed Background Elements */}
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.15] dark:opacity-[0.08] -z-10" />
      <div 
        className="fixed inset-0 bg-gradient-to-b from-[#2b2b2b] to-transparent dark:from-black/40 dark:to-transparent opacity-[0.08] -z-10"
      />

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        {/* Page Header */}
        <header className="mb-16">
          <h1 className={`${playfair.className} text-4xl sm:text-6xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-6`}>
            Oslo har en boligkrise. Her er historien.
          </h1>
          <div className="h-px bg-[#2b2b2b]/20 dark:bg-[#f5f1e8]/20 w-full my-6" />
          <p className="text-xl text-[#2b2b2b]/70 dark:text-[#a3b8b0] max-w-3xl">
            Dette er ikke bare tall og statistikk — det er historien om mennesker som skyves ut av byen de elsker.
          </p>
        </header>
      </div>

      {/* Main Content */}
      <div className="relative w-full px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Content Flow - Desktop */}
          <div className="hidden md:grid md:grid-cols-12 gap-8">
            
            {/* Left Column - Main Narrative */}
            <div className="md:col-span-8 space-y-10">
              
              {/* Chapter 1: The Problem */}
              <section className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-8 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
                <span className="inline-block px-3 py-1 bg-[#1a472a]/10 dark:bg-[#1a472a]/30 text-[#2b2b2b] dark:text-[#f5f1e8]/90 text-sm font-medium rounded-sm mb-4">
                  Kapittel 1
                </span>
                <h2 className={`text-3xl sm:text-4xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-6 ${playfair.className}`}>
                  Det var en gang en by hvor alle kunne bo
                </h2>
                <div className="text-lg text-[#2b2b2b]/90 dark:text-[#a3b8b0] leading-relaxed space-y-6">
                  <p>
                    For ikke lenge siden var Oslo en by hvor vanlige mennesker kunne drømme om å eie sin egen bolig. Men noe har endret seg dramatisk på kort tid.
                  </p>
                  <div className="grid grid-cols-2 gap-6 my-8">
                    <div className="p-6 bg-[#1a472a]/5 dark:bg-[#1a472a]/20 rounded-sm">
                      <p className="text-4xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-2">+110%</p>
                      <p className="text-sm text-[#2b2b2b]/90 dark:text-[#a3b8b0]">Boligprisene i Oslo har steget med 110% siden 2010<Footnote id={1} /></p>
                    </div>
                    <div className="p-6 bg-[#1a472a]/5 dark:bg-[#1a472a]/20 rounded-sm">
                      <p className="text-4xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-2">+32%</p>
                      <p className="text-sm text-[#2b2b2b]/90 dark:text-[#a3b8b0]">Lønningene har kun økt med 32% i samme periode<Footnote id={1} /></p>
                    </div>
                  </div>
                  <p>
                    I dag står over 50 000 osloborgere i boligkø — flere enn hele befolkningen i Moss.
                    <Footnote id={2} /> Og hvis trenden fortsetter, mangler Oslo 150 000 boliger innen 2030 — tilsvarende en ny by på størrelse med Trondheim.
                  </p>
                  <p>
                    Dette er ikke en naturkatastrofe. Det er resultatet av bevisste politiske valg gjennom flere tiår.
                  </p>
                </div>
              </section>
              
              {/* Chapter 2: The Victims */}
              <section className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-8 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
                <span className="inline-block px-3 py-1 bg-[#1a472a]/10 dark:bg-[#1a472a]/30 text-[#2b2b2b] dark:text-[#f5f1e8]/90 text-sm font-medium rounded-sm mb-4">
                  Kapittel 2
                </span>
                <h2 className={`text-3xl sm:text-4xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-6 ${playfair.className}`}>
                  Hvem rammer dette hardest?
                </h2>
                <div className="text-lg text-[#2b2b2b]/90 dark:text-[#a3b8b0] leading-relaxed space-y-6">
                  <p>
                    Unge mennesker som forsøker å etablere seg i dag møter en virkelighet deres foreldre aldri opplevde. En førstegangskjøper i Oslo må nå spare i gjennomsnitt i <span className="font-bold">15 år</span> for å ha råd til egenkapitalen til en leilighet — opp fra 3 år i 1995.
                    <Footnote id={12} />
                  </p>
                  
                  <div className="p-6 border-l-4 border-[#1a472a] dark:border-[#1a472a] bg-[#1a472a]/5 dark:bg-[#1a472a]/20 my-8">
                    <p className="italic text-[#2b2b2b]/90 dark:text-[#a3b8b0]">
                      &ldquo;Dette er et sitat fra en person.&rdquo;
                    </p>
                    <p className="mt-2 text-sm text-[#2b2b2b]/90 dark:text-[#a3b8b0]">— Person, yrke i Oslo</p>
                  </div>
                  
                  <p>
                    Over 60% av lavinntektsfamilier i Oslo bruker mer enn 40% av inntekten sin på bolig — langt over det som regnes som bærekraftig.
                    <Footnote id={13} />
                  </p>
                  
                  <p>
                    Konsekvensene er dramatiske: økende økonomisk ulikhet, lengre pendleavstander, familier som splittes, og en by som sakte mister sitt mangfold.
                  </p>
                </div>
              </section>
              
              {/* Chapter 3: The Solution */}
              <section className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-8 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
                <span className="inline-block px-3 py-1 bg-[#1a472a]/10 dark:bg-[#1a472a]/30 text-[#2b2b2b] dark:text-[#f5f1e8]/90 text-sm font-medium rounded-sm mb-4">
                  Kapittel 3
                </span>
                <h2 className={`text-3xl sm:text-4xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-6 ${playfair.className}`}>
                  Hva forskningen forteller oss
                </h2>
                <div className="text-lg text-[#2b2b2b]/90 dark:text-[#a3b8b0] leading-relaxed space-y-6">
                  <p>
                    Selv om debatten ofte preges av følelser og anekdoter, forteller forskningen en klar historie: <span className="font-bold">Økt boligbygging gjør boliger billigere.</span>
                  </p>
                  
                  <p>
                    For hver 10% økning i boligmasse, synker boligprisene med 5-7%.<Footnote id={6} /> Nye studier fra både USA og Europa viser at bygging av nye boliger skaper en &ldquo;filtering&rdquo;-effekt som gjør at prisene synker i alle segmenter av markedet.<Footnote id={7} />
                  </p>
                  
                  <p>
                    Forskningen viser også at tettere byutvikling reduserer klimagassutslipp. En gjennomsnittlig familie som bor i en leilighet i Oslo sentrum har et 30-40% lavere klimaavtrykk enn den samme familien i en enebolig i Bærum eller Lillestrøm.<Footnote id={10} />
                  </p>
                </div>
              </section>

              {/* Chapter 4: Veien videre for Oslo */}
              <section className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-8 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
                <span className="inline-block px-3 py-1 bg-[#1a472a]/10 dark:bg-[#1a472a]/30 text-[#2b2b2b] dark:text-[#f5f1e8]/90 text-sm font-medium rounded-sm mb-4">
                  Kapittel 4
                </span>
                <h2 className={`text-3xl sm:text-4xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-6 ${playfair.className}`}>
                  Veien videre for Oslo
                </h2>
                <div className="text-lg text-[#2b2b2b]/90 dark:text-[#a3b8b0] leading-relaxed space-y-6">
                  <p>
                    Vi står ved et veiskille. Vi kan velge en fremtid hvor alle har råd til å bo, eller fortsette på en vei hvor byen blir et privilegium for de få.
                  </p>
                  
                  <div className="space-y-4 my-8">
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-[#1a472a] text-white flex-shrink-0 flex items-center justify-center mr-3 font-medium">1</span>
                      <div>
                        <h3 className="text-[#2b2b2b] dark:text-[#f5f1e8]">Bygg tettere og høyere</h3>
                        <p className="text-[#2b2b2b]/90 dark:text-[#a3b8b0] mt-1">
                          Vi må bygge tettere der folk vil bo. Småhusplanen innenfor Ring 3 må oppdateres for å tillate flere leiligheter og rekkehus.<Footnote id={15} />
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-[#1a472a] text-white flex-shrink-0 flex items-center justify-center mr-3 font-medium">2</span>
                      <div>
                        <h3 className="text-[#2b2b2b] dark:text-[#f5f1e8]">Forenkle reguleringsprosessen</h3>
                        <p className="text-[#2b2b2b]/90 dark:text-[#a3b8b0] mt-1">
                          Dagens reguleringsprosess tar ofte 7-10 år fra idé til første spadetak. Dette må forenkles drastisk.<Footnote id={16} />
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-[#1a472a] text-white flex-shrink-0 flex items-center justify-center mr-3 font-medium">3</span>
                      <div>
                        <h3 className="text-[#2b2b2b] dark:text-[#f5f1e8]">Fortett rundt kollektivknutepunkter</h3>
                        <p className="text-[#2b2b2b]/90 dark:text-[#a3b8b0] mt-1">
                          Hver T-banestasjon bør ha høy tetthet av boliger. Dette reduserer transportbehov og skaper levende lokalmiljøer.<Footnote id={17} />
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <p>
                    Dette er ikke radikale idéer. Dette er sunn fornuft basert på forskning og erfaringer fra byer som har lykkes med å holde boligprisene nede.
                  </p>
                </div>
              </section>
            </div>
            
            {/* Right Column - Sidebar */}
            <div className="md:col-span-4">              
              {/* Sticky "Did You Know" Box */}
              <div className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-6 bg-white/5 dark:bg-black/20 backdrop-blur-sm sticky top-24 mb-[450px]">
                <h3 className={`text-xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-4 ${playfair.className}`}>
                  Visste du at...
                </h3>
                <div className="space-y-6 text-[#2b2b2b]/90 dark:text-[#a3b8b0]">
                  <div className="pb-4 border-b border-[#1a472a]/10 dark:border-[#f5f1e8]/10">
                    <p className="mb-1 text-sm">
                      Oslo har over 200 000 eneboliger og rekkehus, mange med stort potensial for fortetting.
                    </p>
                  </div>
                  
                  <div className="pb-4 border-b border-[#1a472a]/10 dark:border-[#f5f1e8]/10">
                    <p className="mb-1 text-sm">
                      Tette, kompakte byer er ikke bare bra for klimaet – de er også mer levende og økonomisk produktive.
                      <Footnote id={11} />
                    </p>
                  </div>
                  
                  <div className="pb-4 border-b border-[#1a472a]/10 dark:border-[#f5f1e8]/10">
                    <p className="mb-1 text-sm">
                      Innovasjon skjer når mennesker med ulik bakgrunn og kompetanse møtes — noe som er lettere i tette, mangfoldige byer.
                    </p>
                  </div>
                  
                  <div className="pb-4">
                    <p className="mb-1 text-sm">
                      For studenter og unge arbeidstakere er situasjonen kritisk: enten bo trangt i kollektiv langt fra sentrum, eller ta på seg uforsvarlig høy gjeld.
                      <Footnote id={14} />
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-[#1a472a]/10 dark:border-[#f5f1e8]/10">
                  <Link 
                    href="/fakta" 
                    className="text-[#2b2b2b] dark:text-[#a3b8b0] font-medium text-sm flex items-center hover:underline"
                  >
                    Les flere fakta om boligkrisen
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Success Stories Box */}
              <div className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-6 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
                <h3 className={`text-xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-4 ${playfair.className}`}>
                  Suksesshistorier
                </h3>
                <div className="space-y-6 text-[#2b2b2b]/90 dark:text-[#a3b8b0]">
                  <div className="pb-4 border-b border-[#1a472a]/10 dark:border-[#f5f1e8]/10">
                    <h4 className="font-bold mb-2">Helsinki</h4>
                    <p className="text-sm">
                      Bygde over 7000 boliger årlig (2016-2019), som førte til at boligprisene faktisk falt i reelle termer. Oslo bygde under 3000 boliger årlig i samme periode.<Footnote id={8} />
                    </p>
                  </div>
                  
                  <div className="pb-4 border-b border-[#1a472a]/10 dark:border-[#f5f1e8]/10">
                    <h4 className="font-bold mb-2">Austin</h4>
                    <p className="text-sm">
                      Økte boligbyggingen med 40% i perioden 2018-2022. Resultatet var at leieprisene falt med 11% i 2023, mens de økte i resten av USA.
                    </p>
                  </div>
                  
                  <div className="pb-4">
                    <h4 className="font-bold mb-2">Minneapolis</h4>
                    <p className="text-sm">
                      Fjernet restriksjonene på flerbolighus i 2019. Tre år senere hadde byen den laveste prisveksten blant storbyene i USA.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Layout */}
          <div className="md:hidden space-y-8">
            {/* Chapter 1: The Problem - Mobile */}
            <section className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-6 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
              <span className="inline-block px-2 py-1 bg-[#1a472a]/10 dark:bg-[#1a472a]/30 text-[#2b2b2b] dark:text-[#f5f1e8]/90 text-xs font-medium rounded-sm mb-3">
                Kapittel 1
              </span>
              <h2 className={`text-2xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-4 ${playfair.className}`}>
                Det var en gang en by hvor alle kunne bo
              </h2>
              <div className="text-[#2b2b2b]/90 dark:text-[#a3b8b0] leading-relaxed space-y-4">
                <p>
                  For ikke lenge siden var Oslo en by hvor vanlige mennesker kunne drømme om å eie sin egen bolig. Men noe har endret seg dramatisk på kort tid.
                </p>
                
                <div className="grid grid-cols-2 gap-3 my-6">
                  <div className="p-4 bg-[#1a472a]/5 dark:bg-[#1a472a]/20 rounded-sm">
                    <p className="text-2xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-1">+110%</p>
                    <p className="text-xs text-[#2b2b2b]/90 dark:text-[#a3b8b0]">Boligprisene i Oslo har steget med 110% siden 2010<Footnote id={1} /></p>
                  </div>
                  <div className="p-4 bg-[#1a472a]/5 dark:bg-[#1a472a]/20 rounded-sm">
                    <p className="text-2xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-1">+32%</p>
                    <p className="text-xs text-[#2b2b2b]/90 dark:text-[#a3b8b0]">Lønningene har kun økt med 32% i samme periode<Footnote id={1} /></p>
                  </div>
                </div>
                
                <p>
                  I dag står over 50 000 osloborgere i boligkø — flere enn hele befolkningen i Moss.
                  <Footnote id={2} />
                </p>
                
                <p>
                  Dette er ikke en naturkatastrofe. Det er resultatet av bevisste politiske valg gjennom flere tiår.
                </p>
              </div>
            </section>
            
            {/* Mobile "Did You Know" Box */}
            <div className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-6 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
              <h3 className={`text-lg font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-4 ${playfair.className}`}>
                Visste du at...
              </h3>
              <div className="space-y-4 text-[#2b2b2b]/90 dark:text-[#a3b8b0]">
                <p className="text-sm">
                  For førstegangskjøpere i Oslo tar det nå i gjennomsnitt <strong>15 år</strong> å spare til egenkapital til en leilighet — opp fra 3 år i 1995.
                  <Footnote id={12} />
                </p>
                
                <p className="text-sm">
                  Over 60% av lavinntektsfamilier i Oslo bruker mer enn 40% av inntekten sin på bolig.
                  <Footnote id={13} />
                </p>
              </div>
            </div>
            
            {/* Chapter 3: The Solution - Mobile */}
            <section className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-6 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
              <span className="inline-block px-2 py-1 bg-[#1a472a]/10 dark:bg-[#1a472a]/30 text-[#2b2b2b] dark:text-[#f5f1e8]/90 text-xs font-medium rounded-sm mb-3">
                Kapittel 3
              </span>
              <h2 className={`text-2xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-4 ${playfair.className}`}>
                Hva forskningen forteller oss
              </h2>
              <div className="text-[#2b2b2b]/90 dark:text-[#a3b8b0] leading-relaxed space-y-4">
                <p>
                  Forskningen er klar: <span className="font-bold">Økt boligbygging gjør boliger billigere.</span>
                </p>
                
                <p>
                  For hver 10% økning i boligmasse, synker boligprisene med 5-7%.<Footnote id={6} />
                </p>
              </div>
            </section>
            
            {/* Success Stories Box - Mobile */}
            <div className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-6 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
              <h3 className={`text-lg font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-4 ${playfair.className}`}>
                Suksesshistorier
              </h3>
              <div className="space-y-4 text-[#2b2b2b]/90 dark:text-[#a3b8b0]">
                <div className="pb-4 border-b border-[#1a472a]/10 dark:border-[#f5f1e8]/10">
                  <h4 className="font-bold mb-2">Helsinki</h4>
                  <p className="text-sm">
                    Bygde over 7000 boliger årlig (2016-2019), som førte til at boligprisene faktisk falt i reelle termer. Oslo bygde under 3000 boliger årlig i samme periode.<Footnote id={8} />
                  </p>
                </div>
                
                <div className="pb-4 border-b border-[#1a472a]/10 dark:border-[#f5f1e8]/10">
                  <h4 className="font-bold mb-2">Austin</h4>
                  <p className="text-sm">
                    Økte boligbyggingen med 40% i perioden 2018-2022. Resultatet var at leieprisene falt med 11% i 2023, mens de økte i resten av USA.
                  </p>
                </div>
                
                <div className="pb-4">
                  <h4 className="font-bold mb-2">Minneapolis</h4>
                  <p className="text-sm">
                    Fjernet restriksjonene på flerbolighus i 2019. Tre år senere hadde byen den laveste prisveksten blant storbyene i USA.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Chapter 4: Call to Action - Mobile */}
            <section className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-6 bg-[#1a472a] dark:bg-[#1a472a] backdrop-blur-sm">
              <span className="inline-block px-2 py-1 bg-white/10 text-white text-xs font-medium rounded-sm mb-3">
                Kapittel 4
              </span>
              <h2 className={`text-2xl font-bold text-white dark:text-[#f5f1e8] mb-4 ${playfair.className}`}>
                Veien videre for Oslo
              </h2>
              <div className="text-white dark:text-[#f5f1e8]/95 leading-relaxed space-y-4">
                <p>
                  Vi står ved et veiskille. Vi kan velge en fremtid hvor alle har råd til å bo, eller fortsette på en vei hvor byen blir et privilegium for de få.
                </p>
                
                <div className="space-y-4 my-6">
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-white text-[#2b2b2b] flex-shrink-0 flex items-center justify-center mr-2 text-sm font-medium">1</span>
                    <div>
                      <h3 className="font-bold text-white dark:text-[#f5f1e8] text-sm">Bygg tettere og høyere</h3>
                      <p className="text-white/90 dark:text-[#f5f1e8]/90 text-xs mt-1">
                        Vi må bygge tettere der folk vil bo. Småhusplanen innenfor Ring 3 må oppdateres.<Footnote id={15} />
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-white text-[#2b2b2b] flex-shrink-0 flex items-center justify-center mr-2 text-sm font-medium">2</span>
                    <div>
                      <h3 className="font-bold text-white dark:text-[#f5f1e8] text-sm">Forenkle reguleringsprosessen</h3>
                      <p className="text-white/90 dark:text-[#f5f1e8]/90 text-xs mt-1">
                        Dagens reguleringsprosess tar ofte 7-10 år fra idé til første spadetak.<Footnote id={16} />
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <Link 
                    href="/bli-medlem" 
                    className="inline-block px-6 py-3 bg-white text-[#2b2b2b] font-bold text-sm rounded-sm hover:bg-white/90 transition duration-200"
                  >
                    Bli medlem i YIMBY Oslo
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
