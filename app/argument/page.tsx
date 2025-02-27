'use client';

import { Playfair_Display, Inter } from 'next/font/google';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Label,
  ReferenceLine,
} from 'recharts';
import Link from 'next/link';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500'],
});

const housingData = [
  { year: '2010', need: 650000, supply: 580000 },
  { year: '2015', need: 780000, supply: 590000 },
  { year: '2020', need: 900000, supply: 610000 },
  { year: '2025', need: 1050000, supply: 640000, status: 'prognose' },
  { year: '2030', need: 1200000, supply: 680000, status: 'prognose' },
];

// Custom footnote component
const Footnote = ({ id }: { id: number }) => (
  <sup>
    <Link 
      href={`#ref-${id}`} 
      id={`fn-${id}`}
      className="text-[#1a472a] dark:text-[#a3b8b0] hover:underline font-medium ml-0.5"
    >
      [{id}]
    </Link>
  </sup>
);

export default function Argument() {
  return (
    <main 
      className={`relative ${inter.className} min-h-screen overflow-x-hidden bg-[#f7f4ef] dark:bg-[#0a0a0a] pt-24`}
    >
      <div 
        className="fixed inset-0 bg-gradient-to-b from-[#1a472a] to-transparent dark:from-black/40 dark:to-transparent opacity-[0.08] -z-10"
      />

      {/* Hero Section */}
      <section className="relative w-full px-4 pt-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden md:border md:bg-white/5 md:dark:bg-black/20 border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-6 sm:p-16">
            <div className="relative z-10">
              <h1 className={`${playfair.className} text-5xl sm:text-7xl font-bold tracking-tight leading-[1.1] text-center text-[#1a472a] dark:text-[#f5f1e8] mb-8`}>
                Oslos boligkrise: Fakta og løsninger
              </h1>
              <p className="text-xl md:text-2xl text-[#2c5545] dark:text-[#a3b8b0] max-w-3xl mx-auto text-center leading-relaxed">
                Byen vår står ved et veiskille. Vi kan velge en fremtid hvor alle har råd til å bo, eller fortsette på en vei hvor byen blir et privilegium for de få.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Newspaper Style Layout */}
      <div className="relative w-full px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Two Column Layout for Desktop */}
          <div className="grid md:grid-cols-12 gap-8">
            
            {/* Main Content Column */}
            <div className="md:col-span-8 space-y-8">
              
              {/* Introduction with Problem Statement */}
              <section className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-8 sm:p-12 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
                <div className="relative">
                  <div className="relative">
                    <h2 className={`text-2xl sm:text-3xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-6 ${playfair.className}`}>
                      Oslo i tall: Krisen forverres hver dag
                    </h2>
                    <div className="text-lg text-[#2c5545] dark:text-[#a3b8b0] leading-relaxed space-y-4">
                      <p>
                        I Oslo stiger boligprisene med 110% siden 2010, mens lønningene kun har økt med 32%.
                        <Footnote id={1} /> Dette er ikke bare tall – det er mennesker som tvinges ut av byen de elsker.
                      </p>
                      <p>
                        Over 50 000 osloborgere står i boligkø – flere enn hele befolkningen i Moss.
                        <Footnote id={2} /> Og hvis trenden fortsetter, mangler Oslo 150 000 boliger innen 2030 – tilsvarende en ny by på størrelse med Trondheim.
                      </p>
                      <p>
                        Boligsituasjonen i Oslo er ikke bare en krise – det er et systematisk politisk valg vi tar hver dag ved å tillate NIMBY-mentaliteten å blokkere nye boliger.
                        <Footnote id={3} />
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Graph Section - Housing Gap */}
              <section className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-8 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
                <div className="relative">
                  <div className="relative">
                    <h2 className={`text-2xl sm:text-3xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-6 ${playfair.className}`}>
                      Gapet øker: Boligbehov vs. boligtilbud
                    </h2>
                    <p className="text-lg text-[#2c5545] dark:text-[#a3b8b0] mb-8">
                      For hvert år øker gapet mellom boligbehovet og tilgjengeligheten i Oslo. 
                      Denne trenden er ikke bare uholdbar – den er katastrofal for de som står utenfor boligmarkedet.
                      <Footnote id={4} />
                    </p>
                    <div className="h-[40vh] sm:h-[50vh]">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={housingData}
                          margin={{
                            top: 20,
                            right: 20,
                            left: 20,
                            bottom: 40,
                          }}
                        >
                          <defs>
                            <linearGradient id="gapColor" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#1a472a" stopOpacity={0.1}/>
                              <stop offset="95%" stopColor="#1a472a" stopOpacity={0.05}/>
                            </linearGradient>
                          </defs>
                          <XAxis
                            dataKey="year"
                            stroke="currentColor"
                            fontSize={14}
                            tickLine={false}
                            axisLine={false}
                          >
                            <Label value="År" offset={0} position="bottom" style={{ fill: 'currentColor', marginTop: '10px' }} />
                          </XAxis>
                          <YAxis 
                            stroke="currentColor" 
                            tickLine={false} 
                            axisLine={false}
                            tickFormatter={(value) => `${(value/1000).toString()}k`}
                          />
                          <Tooltip 
                            formatter={(value: number) => [`${value.toLocaleString()} boliger`, undefined]}
                            labelFormatter={(label) => {
                              const dataPoint = housingData.find(d => d.year === label);
                              return `${label}${dataPoint?.status ? ' (prognose)' : ''}`;
                            }}
                          />
                          <Legend
                            verticalAlign="top"
                            align="left"
                            height={60}
                            iconType="line"
                            iconSize={32}
                            formatter={(value: string) => {
                              return value === 'need' ? 'Boligbehov' : 'Boligtilbud';
                            }}
                          />
                          <Area
                            type="monotone"
                            dataKey="need"
                            stroke="#1a472a"
                            fill="none"
                            strokeWidth={3}
                            dot
                            activeDot={{ r: 8 }}
                          />
                          <Area
                            type="monotone"
                            dataKey="supply"
                            stroke="#dc2626"
                            fill="none"
                            strokeWidth={3}
                            dot
                            activeDot={{ r: 8 }}
                          />
                          <Area
                            type="monotone"
                            dataKey="need"
                            stroke="none"
                            fill="url(#gapColor)"
                            fillOpacity={1}
                          />
                          <ReferenceLine
                            y={780000}
                            stroke="#1a472a"
                            strokeDasharray="3 3"
                            strokeWidth={2}
                          >
                            <Label
                              value="Boligbehov 2015"
                              position="insideTopRight"
                              fill="#1a472a"
                              fontSize={12}
                            />
                          </ReferenceLine>
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                    <p className="text-sm text-[#2c5545]/70 dark:text-[#a3b8b0]/70 italic mt-4 text-right">
                      Kilde: Oslo kommune boligstatistikk, SSB befolkningsprognoser
                      <Footnote id={5} />
                    </p>
                  </div>
                </div>
              </section>
              
              {/* Three Core Principles - Grid Layout */}
              <section>
                <h2 className={`text-3xl sm:text-4xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-6 ${playfair.className}`}>
                  Tre grunnleggende sannheter
                </h2>
                
                {/* Principle 1 - Full width highlight */}
                <div className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-8 bg-[#1a472a]/10 dark:bg-[#1a472a]/20 backdrop-blur-sm mb-6">
                  <div className="relative">
                    <div className="relative flex flex-col md:flex-row gap-8">
                      <div className="md:w-16 flex-shrink-0">
                        <span className="flex items-center justify-center w-12 h-12 bg-[#1a472a] text-white font-bold text-xl rounded-full">
                          1
                        </span>
                      </div>
                      <div className="flex-grow">
                        <h3 className={`text-2xl sm:text-3xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-6 ${playfair.className}`}>
                          Økt boligbygging gjør eksisterende boliger <span className="underline decoration-4 decoration-[#1a472a]/30 dark:decoration-[#f5f1e8]/30">billigere</span>
                        </h3>
                        <div className="text-lg text-[#2c5545] dark:text-[#a3b8b0] leading-relaxed space-y-4">
                          <p>
                            Dette er grunnleggende markedsøkonomi: når tilbudet øker i forhold til etterspørselen, faller prisene. Forskning viser at for hver 10% økning i boligmasse, synker boligprisene med 5-7%.
                            <Footnote id={6} />
                          </p>
                          <p>
                            Nye studier fra både USA og Europa viser at bygging av nye boliger – selv i luksussegmentet – skaper en &ldquo;filtering&rdquo;-effekt som gjør at prisene synker i alle segmenter av markedet.
                            <Footnote id={7} />
                          </p>
                          <p>
                            I Helsinki bygde man over 7000 boliger årlig mellom 2016 og 2019, noe som førte til at boligprisene faktisk <em>falt</em> i reelle termer – den eneste hovedstaden i Europa hvor dette skjedde.
                            <Footnote id={8} />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Principles 2 & 3 in a grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Principle 2 */}
                  <div className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-8 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
                    <div className="relative h-full">
                      <div className="relative h-full flex flex-col">
                        <div className="flex items-center mb-6">
                          <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-[#1a472a] text-white font-bold text-xl rounded-full mr-4">
                            2
                          </span>
                          <h3 className={`text-xl sm:text-2xl font-bold text-[#1a472a] dark:text-[#f5f1e8] ${playfair.className}`}>
                            Tettere byutvikling <span className="underline decoration-4 decoration-[#1a472a]/30 dark:decoration-[#f5f1e8]/30">reduserer</span> klimagassutslipp
                          </h3>
                        </div>
                        <div className="text-lg text-[#2c5545] dark:text-[#a3b8b0] leading-relaxed space-y-4">
                          <p>
                            Når folk bor tett, trenger de mindre areal per person, bruker mindre energi på oppvarming, og kan enklere reise kollektivt.
                            <Footnote id={9} />
                          </p>
                          <p>
                            En gjennomsnittlig familie som bor i en leilighet i Oslo sentrum har et 30-40% lavere klimaavtrykk enn den samme familien i en enebolig i Bærum eller Lillestrøm.
                            <Footnote id={10} />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Principle 3 */}
                  <div className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-8 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
                    <div className="relative h-full">
                      <div className="relative h-full flex flex-col">
                        <div className="flex items-center mb-6">
                          <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-[#1a472a] text-white font-bold text-xl rounded-full mr-4">
                            3
                          </span>
                          <h3 className={`text-xl sm:text-2xl font-bold text-[#1a472a] dark:text-[#f5f1e8] ${playfair.className}`}>
                            Unge og lavinntektsgrupper <span className="underline decoration-4 decoration-[#1a472a]/30 dark:decoration-[#f5f1e8]/30">rammes hardest</span>
                          </h3>
                        </div>
                        <div className="text-lg text-[#2c5545] dark:text-[#a3b8b0] leading-relaxed space-y-4">
                          <p>
                            Førstegangskjøpere i Oslo må i dag spare i gjennomsnitt i 15 år for å ha råd til egenkapitalen til en leilighet – opp fra 3 år i 1995.
                            <Footnote id={12} />
                          </p>
                          <p>
                            Over 60% av lavinntektsfamilier i Oslo bruker mer enn 40% av inntekten sin på bolig – langt over det som regnes som bærekraftig.
                            <Footnote id={13} />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            
            {/* Sidebar Column */}
            <div className="md:col-span-4 space-y-8 mt-8 md:mt-0">
              {/* Call to Action - Box */}
              <div className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-8 bg-[#1a472a] text-white sticky top-24">
                <h3 className={`text-2xl font-bold mb-4 ${playfair.className}`}>
                  Bli med i kampen
                </h3>
                <p className="mb-6 text-white/90">
                  For å skape en by med plass til alle trenger vi din stemme. Bli med i YIMBY Oslo i dag.
                </p>
                <Link 
                  href="/bli-medlem"
                  className="block w-full py-3 bg-white text-[#1a472a] text-center font-medium rounded hover:bg-white/90 transition-colors"
                >
                  Meld deg inn
                </Link>
              </div>
              
              {/* Complement to Core Principles */}
              <div className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-8 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
                <h3 className={`text-xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-4 ${playfair.className}`}>
                  Innovasjon skaper bedre byer
                </h3>
                <p className="text-[#2c5545] dark:text-[#a3b8b0] mb-4">
                  Tette, kompakte byer er ikke bare bra for klimaet – de er også mer levende og økonomisk produktive. Innovasjon skjer når mennesker med ulik bakgrunn og kompetanse møtes.
                  <Footnote id={11} />
                </p>
                <p className="text-[#2c5545] dark:text-[#a3b8b0]">
                  For studenter og unge arbeidstakere er situasjonen kritisk: enten bo trangt i kollektiv langt fra sentrum, eller ta på seg uforsvarlig høy gjeld for å komme inn på boligmarkedet.
                  <Footnote id={14} />
                </p>
              </div>
              
              {/* "What We Can Do" Section - Sidebar Version */}
              <div className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-8 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
                <h3 className={`text-xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-4 ${playfair.className}`}>
                  Hva kan vi gjøre?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="w-8 h-8 bg-[#1a472a] text-white flex items-center justify-center rounded-full mr-3 flex-shrink-0 text-lg">
                      1
                    </span>
                    <div>
                      <h4 className="font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-1">Bygg tettere, høyere, smartere</h4>
                      <p className="text-sm text-[#2c5545] dark:text-[#a3b8b0]">
                        Vi må bygge tettere der folk vil bo. Småhusplanen innenfor Ring 3 må oppdateres for å tillate flere leiligheter og rekkehus.
                        <Footnote id={15} />
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="w-8 h-8 bg-[#1a472a] text-white flex items-center justify-center rounded-full mr-3 flex-shrink-0 text-lg">
                      2
                    </span>
                    <div>
                      <h4 className="font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-1">Fjern byråkratiske hindringer</h4>
                      <p className="text-sm text-[#2c5545] dark:text-[#a3b8b0]">
                        Dagens reguleringsprosess tar ofte 7-10 år fra idé til første spadetak. Dette må forenkles drastisk.
                        <Footnote id={16} />
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="w-8 h-8 bg-[#1a472a] text-white flex items-center justify-center rounded-full mr-3 flex-shrink-0 text-lg">
                      3
                    </span>
                    <div>
                      <h4 className="font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-1">Byutvikling rundt kollektivknutepunkter</h4>
                      <p className="text-sm text-[#2c5545] dark:text-[#a3b8b0]">
                        Hver T-banestasjon bør ha høy tetthet av boliger. Dette reduserer transportbehov og skaper levende lokalmiljøer.
                        <Footnote id={17} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Full Width "What We Can Do" Section for Mobile */}
          <div className="md:hidden mt-8">
            <h2 className={`text-3xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-6 ${playfair.className}`}>
              Hva kan vi gjøre?
            </h2>
            
            <div className="space-y-6">
              <div className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-6 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
                <div className="flex items-start">
                  <span className="w-10 h-10 bg-[#1a472a] text-white flex items-center justify-center rounded-full mr-4 flex-shrink-0 text-xl">
                    1
                  </span>
                  <div>
                    <h4 className="font-bold text-[#1a472a] dark:text-[#f5f1e8] text-lg mb-2">Bygg tettere, høyere, smartere</h4>
                    <p className="text-[#2c5545] dark:text-[#a3b8b0]">
                      Vi må bygge tettere der folk vil bo. Småhusplanen innenfor Ring 3 må oppdateres for å tillate flere leiligheter og rekkehus.
                      <Footnote id={15} />
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-6 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
                <div className="flex items-start">
                  <span className="w-10 h-10 bg-[#1a472a] text-white flex items-center justify-center rounded-full mr-4 flex-shrink-0 text-xl">
                    2
                  </span>
                  <div>
                    <h4 className="font-bold text-[#1a472a] dark:text-[#f5f1e8] text-lg mb-2">Fjern byråkratiske hindringer</h4>
                    <p className="text-[#2c5545] dark:text-[#a3b8b0]">
                      Dagens reguleringsprosess tar ofte 7-10 år fra idé til første spadetak. Dette må forenkles drastisk.
                      <Footnote id={16} />
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-6 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
                <div className="flex items-start">
                  <span className="w-10 h-10 bg-[#1a472a] text-white flex items-center justify-center rounded-full mr-4 flex-shrink-0 text-xl">
                    3
                  </span>
                  <div>
                    <h4 className="font-bold text-[#1a472a] dark:text-[#f5f1e8] text-lg mb-2">Byutvikling rundt kollektivknutepunkter</h4>
                    <p className="text-[#2c5545] dark:text-[#a3b8b0]">
                      Hver T-banestasjon bør ha høy tetthet av boliger. Dette reduserer transportbehov og skaper levende lokalmiljøer.
                      <Footnote id={17} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile CTA Button */}
            <div className="mt-8 border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-6 bg-[#1a472a] text-white">
              <h3 className={`text-xl font-bold mb-4 ${playfair.className}`}>
                Bli med i kampen
              </h3>
              <p className="mb-4 text-white/90">
                For å skape en by med plass til alle trenger vi din stemme. Bli med i YIMBY Oslo i dag.
              </p>
              <Link 
                href="/bli-medlem"
                className="block w-full py-3 bg-white text-[#1a472a] text-center font-medium rounded hover:bg-white/90 transition-colors"
              >
                Meld deg inn
              </Link>
            </div>
          </div>
          
          {/* References Section */}
          <section id="referanser" className="mt-16 pt-8 border-t border-[#1a472a]/20 dark:border-[#f5f1e8]/10">
            <h2 className={`text-2xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-6 ${playfair.className}`}>
              Referanser
            </h2>
            
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-[#2c5545] dark:text-[#a3b8b0]">
              <p id="ref-1">
                <Link href="#fn-1" className="font-medium text-[#1a472a] dark:text-[#a3b8b0] mr-2">[1]</Link>
                Statistisk sentralbyrå (2023): &ldquo;Boligprisindeksen for Oslo 2010-2023&rdquo; og &ldquo;Lønnsstatistikk for Oslo 2010-2023&rdquo;
              </p>
              <p id="ref-2">
                <Link href="#fn-2" className="font-medium text-[#1a472a] dark:text-[#a3b8b0] mr-2">[2]</Link>
                Oslo kommune (2023): &ldquo;Boligsituasjonen i Oslo: Analyserapport 2023&rdquo;
              </p>
              <p id="ref-3">
                <Link href="#fn-3" className="font-medium text-[#1a472a] dark:text-[#a3b8b0] mr-2">[3]</Link>
                Oslo byråd (2022): &ldquo;Strategiplan for boligutvikling 2022-2030&rdquo;
              </p>
              <p id="ref-4">
                <Link href="#fn-4" className="font-medium text-[#1a472a] dark:text-[#a3b8b0] mr-2">[4]</Link>
                Norges Eiendomsmeglerforbund (2023): &ldquo;Boligprisstatistikk Oslo 2000-2023&rdquo;
              </p>
              <p id="ref-5">
                <Link href="#fn-5" className="font-medium text-[#1a472a] dark:text-[#a3b8b0] mr-2">[5]</Link>
                Oslo kommune (2022): &ldquo;Boligstatistikk og befolkningsprognoser 2022-2040&rdquo;
              </p>
              <p id="ref-6">
                <Link href="#fn-6" className="font-medium text-[#1a472a] dark:text-[#a3b8b0] mr-2">[6]</Link>
                Glaeser, E. L., & Gyourko, J. (2018): &ldquo;The Economic Implications of Housing Supply&rdquo;
              </p>
              <p id="ref-7">
                <Link href="#fn-7" className="font-medium text-[#1a472a] dark:text-[#a3b8b0] mr-2">[7]</Link>
                Rosenthal, S. S. (2014): &ldquo;Are Private Markets and Filtering a Viable Source of Low-Income Housing?&rdquo;
              </p>
              <p id="ref-8">
                <Link href="#fn-8" className="font-medium text-[#1a472a] dark:text-[#a3b8b0] mr-2">[8]</Link>
                Helsinki Urban Development Department (2020): &ldquo;Housing Price Development 2016-2020&rdquo;
              </p>
              <p id="ref-9">
                <Link href="#fn-9" className="font-medium text-[#1a472a] dark:text-[#a3b8b0] mr-2">[9]</Link>
                Norsk institutt for by- og regionforskning (2021): &ldquo;Klimaeffekter av tett byutvikling&rdquo;
              </p>
              <p id="ref-10">
                <Link href="#fn-10" className="font-medium text-[#1a472a] dark:text-[#a3b8b0] mr-2">[10]</Link>
                Miljødirektoratet (2022): &ldquo;Rapport om klimaavtrykk fra boformer i Osloregionen&rdquo;
              </p>
              <p id="ref-11">
                <Link href="#fn-11" className="font-medium text-[#1a472a] dark:text-[#a3b8b0] mr-2">[11]</Link>
                Florida, R. (2019): &ldquo;The Creative Class and Economic Development&rdquo;
              </p>
              <p id="ref-12">
                <Link href="#fn-12" className="font-medium text-[#1a472a] dark:text-[#a3b8b0] mr-2">[12]</Link>
                Finanstilsynet (2023): &ldquo;Rapport om førstegangskjøpere i Oslo 1995-2023&rdquo;
              </p>
              <p id="ref-13">
                <Link href="#fn-13" className="font-medium text-[#1a472a] dark:text-[#a3b8b0] mr-2">[13]</Link>
                Statistisk sentralbyrå (2022): &ldquo;Levekårsundersøkelsen: Bolig og boforhold&rdquo;
              </p>
              <p id="ref-14">
                <Link href="#fn-14" className="font-medium text-[#1a472a] dark:text-[#a3b8b0] mr-2">[14]</Link>
                Norsk studentorganisasjon (2023): &ldquo;Studentenes boligsituasjon 2023&rdquo;
              </p>
              <p id="ref-15">
                <Link href="#fn-15" className="font-medium text-[#1a472a] dark:text-[#a3b8b0] mr-2">[15]</Link>
                Plan- og bygningsetaten Oslo (2022): &ldquo;Vurdering av småhusplanen og fortettingspotensiale&rdquo;
              </p>
              <p id="ref-16">
                <Link href="#fn-16" className="font-medium text-[#1a472a] dark:text-[#a3b8b0] mr-2">[16]</Link>
                OBOS (2023): &ldquo;Flaskehalser i boligbyggingen i Oslo&rdquo;
              </p>
              <p id="ref-17">
                <Link href="#fn-17" className="font-medium text-[#1a472a] dark:text-[#a3b8b0] mr-2">[17]</Link>
                Ruter og Oslo kommune (2021): &ldquo;Fortetting ved kollektivknutepunkter&rdquo;
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
