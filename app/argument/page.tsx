'use client';

import Link from 'next/link';
import { Playfair_Display, Inter } from 'next/font/google';
import { useEffect, useState, useRef } from 'react';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

// Housing data for the chart
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
    <Link href={`#ref-${id}`} id={`fn-${id}`} className="text-[#1a472a] dark:text-[#a3b8b0] font-medium hover:underline">
      [{id}]
    </Link>
  </sup>
);

// Simple housing chart component
const HousingChart = ({ data }: { data: typeof housingData }) => {
  const [mounted, setMounted] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return <div className="w-full h-[300px] bg-[#f0ece4] dark:bg-[#1a1a1a] animate-pulse"></div>;
  }
  
  const maxValue = Math.max(...data.map(d => Math.max(d.need, d.supply))) * 1.1;
  const width = 800;
  const height = 400;
  const padding = { top: 40, right: 40, bottom: 60, left: 60 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  
  // Calculate positions
  const xScale = (i: number) => padding.left + (i * chartWidth / (data.length - 1));
  const yScale = (value: number) => height - padding.bottom - (value / maxValue * chartHeight);
  
  // Generate path data
  const needPath = data.map((d, i) => 
    `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(d.need)}`
  ).join(' ');
  
  const supplyPath = data.map((d, i) => 
    `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(d.supply)}`
  ).join(' ');
  
  // Calculate the gap area
  const gapPath = `
    ${needPath} 
    L ${xScale(data.length - 1)} ${yScale(data[data.length - 1].supply)} 
    ${data.map((d, i) => `L ${xScale(data.length - 1 - i)} ${yScale(d.supply)}`).join(' ')} 
    Z
  `;
  
  return (
    <div className="w-full overflow-x-auto">
      <svg ref={svgRef} viewBox={`0 0 ${width} ${height}`} className="w-full h-auto max-h-[400px]">
        {/* Background grid lines */}
        {[0.25, 0.5, 0.75, 1].map((tick) => (
          <g key={tick}>
            <line 
              x1={padding.left} 
              y1={yScale(maxValue * tick)} 
              x2={width - padding.right} 
              y2={yScale(maxValue * tick)} 
              stroke="#ddd" 
              strokeDasharray="4 4"
              className="dark:stroke-gray-700"
            />
            <text 
              x={padding.left - 10} 
              y={yScale(maxValue * tick)} 
              textAnchor="end" 
              dominantBaseline="middle" 
              className="text-xs fill-[#555] dark:fill-gray-400"
            >
              {Math.round(maxValue * tick).toLocaleString()}
            </text>
          </g>
        ))}
        
        {/* Gap area */}
        <path 
          d={gapPath} 
          fill="url(#gap-gradient)" 
          opacity="0.3" 
        />
        
        {/* Lines for need and supply */}
        <path 
          d={needPath} 
          stroke="#c91a25" 
          strokeWidth="3" 
          fill="none" 
          className="dark:stroke-red-500"
        />
        <path 
          d={supplyPath} 
          stroke="#1a472a" 
          strokeWidth="3" 
          fill="none"
          className="dark:stroke-green-500" 
        />
        
        {/* X-axis and labels */}
        <line 
          x1={padding.left} 
          y1={height - padding.bottom} 
          x2={width - padding.right} 
          y2={height - padding.bottom} 
          stroke="#555"
          className="dark:stroke-gray-500" 
        />
        
        {data.map((d, i) => (
          <g key={i}>
            <text 
              x={xScale(i)} 
              y={height - padding.bottom + 20} 
              textAnchor="middle" 
              className={`text-sm fill-[#333] dark:fill-gray-300 ${d.status === 'prognose' ? 'font-light italic' : 'font-medium'}`}
            >
              {d.year}
              {d.status === 'prognose' && '*'}
            </text>
            <circle 
              cx={xScale(i)} 
              cy={yScale(d.need)} 
              r="4" 
              fill="#c91a25"
              className="dark:fill-red-500" 
            />
            <circle 
              cx={xScale(i)} 
              cy={yScale(d.supply)} 
              r="4" 
              fill="#1a472a"
              className="dark:fill-green-500" 
            />
          </g>
        ))}
        
        {/* Legend */}
        <g transform={`translate(${padding.left + 20}, ${padding.top - 10})`}>
          <circle cx="0" cy="0" r="4" fill="#c91a25" className="dark:fill-red-500" />
          <text x="10" y="5" className="text-sm fill-[#333] dark:fill-gray-300">Boligbehov</text>
          
          <circle cx="100" cy="0" r="4" fill="#1a472a" className="dark:fill-green-500" />
          <text x="110" y="5" className="text-sm fill-[#333] dark:fill-gray-300">Boligtilbud</text>
          
          <rect x="200" y="-4" width="14" height="10" fill="url(#gap-gradient)" opacity="0.3" />
          <text x="220" y="5" className="text-sm fill-[#333] dark:fill-gray-300">Boligmangel</text>
        </g>
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="gap-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c91a25" className="dark:stop-color-red-600" />
            <stop offset="100%" stopColor="#1a472a" className="dark:stop-color-green-700" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default function Argument() {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  // Intersection observer for scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      { 
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0.1
      }
    );

    // Observe all section elements
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className={`${inter.className} min-h-screen bg-[#f7f4ef] dark:bg-[#0a0a0a] relative overflow-hidden pt-24`}>
      {/* Fixed Background Elements */}
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.15] dark:opacity-[0.08] -z-10" />
      <div className="fixed inset-0 bg-gradient-to-b from-[#1a472a] to-transparent dark:from-black/40 dark:to-transparent opacity-[0.08] -z-10" />

      {/* Hero Section */}
      <section className="relative w-full px-4 pb-6 lg:pb-12">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden border bg-white/5 dark:bg-black/20 border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-6 sm:p-12">
            <div className="relative">
              <h1 className={`${playfair.className} text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-center text-[#1a472a] dark:text-[#f5f1e8]`}>
                Oslos boligkrise: Fakta og løsninger
              </h1>
              <p className="mt-6 text-lg md:text-xl text-center text-[#2c5545] dark:text-[#f5f1e8]/90 max-w-3xl mx-auto">
                Byen vår står ved et veiskille. Vi kan velge en fremtid hvor alle har råd til å bo, eller fortsette på en vei hvor byen blir et privilegium for de få.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 pb-24">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left/Main Column */}
          <div className="lg:col-span-2">
            
            {/* Crisis Section */}
            <section id="krisen" className="mb-16">
              <div className="bg-white/10 dark:bg-[#1a1a1a]/50 border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-6 md:p-8 rounded-md">
                <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-6`}>
                  Oslo i tall: Krisen forverres hver dag
                </h2>
                <div className="space-y-4 text-[#2c5545] dark:text-[#f5f1e8]/90">
                  <p className="leading-relaxed">
                    I Oslo stiger boligprisene med 110% siden 2010, mens lønningene kun har økt med 32%.
                    <Footnote id={1} /> Dette er ikke bare tall – det er mennesker som tvinges ut av byen de elsker.
                  </p>
                  <p className="leading-relaxed">
                    Over 50 000 osloborgere står i boligkø – flere enn hele befolkningen i Moss.
                    <Footnote id={2} /> Og hvis trenden fortsetter, mangler Oslo 150 000 boliger innen 2030 – tilsvarende en ny by på størrelse med Trondheim.
                  </p>
                  <p className="leading-relaxed">
                    Boligsituasjonen i Oslo er ikke bare en krise – det er et systematisk politisk valg vi tar hver dag ved å tillate NIMBY-mentaliteten å blokkere nye boliger.
                    <Footnote id={3} />
                  </p>
                </div>
              </div>
            </section>
            
            {/* Gap Section with Chart */}
            <section id="gapet" className="mb-16">
              <div className="bg-white/10 dark:bg-[#1a1a1a]/50 border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-6 md:p-8 rounded-md">
                <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-6`}>
                  Gapet øker: Boligbehov vs. boligtilbud
                </h2>
                <p className="mb-6 text-[#2c5545] dark:text-[#f5f1e8]/90 leading-relaxed">
                  For hvert år øker gapet mellom boligbehovet og tilgjengeligheten i Oslo. 
                  Denne trenden er ikke bare uholdbar – den er katastrofal for de som står utenfor boligmarkedet.
                  <Footnote id={4} />
                </p>
                <div className="mb-4 bg-white/30 dark:bg-black/30 p-4 rounded-md">
                  <HousingChart data={housingData} />
                </div>
                <p className="text-sm text-[#2c5545]/80 dark:text-[#f5f1e8]/60 italic">
                  Kilde: Oslo kommune boligstatistikk, SSB befolkningsprognoser
                  <Footnote id={5} />
                </p>
              </div>
            </section>
            
            {/* Three Truths Section */}
            <section id="sannheter" className="mb-16">
              <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-8`}>
                Tre grunnleggende sannheter
              </h2>
              
              <div className="space-y-8">
                {/* Truth 1 */}
                <div className="bg-white/10 dark:bg-[#1a1a1a]/50 border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-6 md:p-8 rounded-md">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1a472a] text-white flex-shrink-0 w-10 h-10 flex items-center justify-center text-lg font-bold rounded-full">
                      1
                    </div>
                    <div>
                      <h3 className={`${playfair.className} text-2xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-4`}>
                        Økt boligbygging gjør eksisterende boliger billigere
                      </h3>
                      <div className="space-y-3 text-[#2c5545] dark:text-[#f5f1e8]/90">
                        <p className="leading-relaxed">
                          Dette er grunnleggende markedsøkonomi: når tilbudet øker i forhold til etterspørselen, faller prisene. Forskning viser at for hver 10% økning i boligmasse, synker boligprisene med 5-7%.
                          <Footnote id={6} />
                        </p>
                        <p className="leading-relaxed">
                          Nye studier fra både USA og Europa viser at bygging av nye boliger – selv i luksussegmentet – skaper en &ldquo;filtering&rdquo;-effekt som gjør at prisene synker i alle segmenter av markedet.
                          <Footnote id={7} />
                        </p>
                        <p className="leading-relaxed">
                          I Helsinki bygde man over 7000 boliger årlig mellom 2016 og 2019, noe som førte til at boligprisene faktisk falt i reelle termer – den eneste hovedstaden i Europa hvor dette skjedde.
                          <Footnote id={8} />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Truth 2 & 3 side by side on desktop, stacked on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Truth 2 */}
                  <div className="bg-white/10 dark:bg-[#1a1a1a]/50 border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-6 md:p-8 rounded-md">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#1a472a] text-white flex-shrink-0 w-10 h-10 flex items-center justify-center text-lg font-bold rounded-full">
                        2
                      </div>
                      <div>
                        <h3 className={`${playfair.className} text-2xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-4`}>
                          Tettere byutvikling reduserer klimagassutslipp
                        </h3>
                        <div className="space-y-3 text-[#2c5545] dark:text-[#f5f1e8]/90">
                          <p className="leading-relaxed">
                            Når folk bor tett, trenger de mindre areal per person, bruker mindre energi på oppvarming, og kan enklere reise kollektivt.
                            <Footnote id={9} />
                          </p>
                          <p className="leading-relaxed">
                            En gjennomsnittlig familie som bor i en leilighet i Oslo sentrum har et 30-40% lavere klimaavtrykk enn den samme familien i en enebolig i Bærum eller Lillestrøm.
                            <Footnote id={10} />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Truth 3 */}
                  <div className="bg-white/10 dark:bg-[#1a1a1a]/50 border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-6 md:p-8 rounded-md">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#1a472a] text-white flex-shrink-0 w-10 h-10 flex items-center justify-center text-lg font-bold rounded-full">
                        3
                      </div>
                      <div>
                        <h3 className={`${playfair.className} text-2xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-4`}>
                          Unge og lavinntektsgrupper rammes hardest
                        </h3>
                        <div className="space-y-3 text-[#2c5545] dark:text-[#f5f1e8]/90">
                          <p className="leading-relaxed">
                            Førstegangskjøpere i Oslo må i dag spare i gjennomsnitt i 15 år for å ha råd til egenkapitalen til en leilighet – opp fra 3 år i 1995.
                            <Footnote id={12} />
                          </p>
                          <p className="leading-relaxed">
                            Over 60% av lavinntektsfamilier i Oslo bruker mer enn 40% av inntekten sin på bolig – langt over det som regnes som bærekraftig.
                            <Footnote id={13} />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          
          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              
              {/* Innovation Box */}
              <div className="bg-white/10 dark:bg-[#1a1a1a]/50 border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-6 md:p-8 rounded-md">
                <h3 className={`${playfair.className} text-2xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-4`}>
                  Innovasjon skaper bedre byer
                </h3>
                <div className="space-y-3 text-[#2c5545] dark:text-[#f5f1e8]/90">
                  <p className="leading-relaxed">
                    Tette, kompakte byer er ikke bare bra for klimaet – de er også mer levende og økonomisk produktive. Innovasjon skjer når mennesker med ulik bakgrunn og kompetanse møtes.
                    <Footnote id={11} />
                  </p>
                  <p className="leading-relaxed">
                    For studenter og unge arbeidstakere er situasjonen kritisk: enten bo trangt i kollektiv langt fra sentrum, eller ta på seg uforsvarlig høy gjeld for å komme inn på boligmarkedet.
                    <Footnote id={14} />
                  </p>
                </div>
              </div>
              
              {/* What can we do - Mobile version shows in main flow */}
              <div className="hidden lg:block" id="losninger">
                <h3 className={`${playfair.className} text-2xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-4`}>
                  Hva kan vi gjøre?
                </h3>
                <div className="space-y-4">
                  <div className="bg-white/10 dark:bg-[#1a1a1a]/50 border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-4 rounded-md">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#1a472a] text-white flex-shrink-0 w-8 h-8 flex items-center justify-center text-sm font-bold rounded-full">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-[#1a472a] dark:text-[#f5f1e8] mb-2">Bygg tettere, høyere, smartere</h4>
                        <p className="text-sm text-[#2c5545] dark:text-[#f5f1e8]/90">
                          Vi må bygge tettere der folk vil bo. Småhusplanen innenfor Ring 3 må oppdateres for å tillate flere leiligheter og rekkehus.
                          <Footnote id={15} />
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 dark:bg-[#1a1a1a]/50 border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-4 rounded-md">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#1a472a] text-white flex-shrink-0 w-8 h-8 flex items-center justify-center text-sm font-bold rounded-full">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-[#1a472a] dark:text-[#f5f1e8] mb-2">Fjern byråkratiske hindringer</h4>
                        <p className="text-sm text-[#2c5545] dark:text-[#f5f1e8]/90">
                          Dagens reguleringsprosess tar ofte 7-10 år fra idé til første spadetak. Dette må forenkles drastisk.
                          <Footnote id={16} />
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 dark:bg-[#1a1a1a]/50 border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-4 rounded-md">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#1a472a] text-white flex-shrink-0 w-8 h-8 flex items-center justify-center text-sm font-bold rounded-full">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-[#1a472a] dark:text-[#f5f1e8] mb-2">Byutvikling rundt kollektivknutepunkter</h4>
                        <p className="text-sm text-[#2c5545] dark:text-[#f5f1e8]/90">
                          Hver T-banestasjon bør ha høy tetthet av boliger. Dette reduserer transportbehov og skaper levende lokalmiljøer.
                          <Footnote id={17} />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile-only What Can We Do Section */}
        <section id="losninger-mobile" className="lg:hidden mb-16">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-8`}>
            Hva kan vi gjøre?
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white/10 dark:bg-[#1a1a1a]/50 border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-6 rounded-md">
              <div className="flex items-start gap-4">
                <div className="bg-[#1a472a] text-white flex-shrink-0 w-10 h-10 flex items-center justify-center text-lg font-bold rounded-full">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-xl text-[#1a472a] dark:text-[#f5f1e8] mb-2">Bygg tettere, høyere, smartere</h4>
                  <p className="text-[#2c5545] dark:text-[#f5f1e8]/90">
                    Vi må bygge tettere der folk vil bo. Småhusplanen innenfor Ring 3 må oppdateres for å tillate flere leiligheter og rekkehus.
                    <Footnote id={15} />
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 dark:bg-[#1a1a1a]/50 border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-6 rounded-md">
              <div className="flex items-start gap-4">
                <div className="bg-[#1a472a] text-white flex-shrink-0 w-10 h-10 flex items-center justify-center text-lg font-bold rounded-full">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-xl text-[#1a472a] dark:text-[#f5f1e8] mb-2">Fjern byråkratiske hindringer</h4>
                  <p className="text-[#2c5545] dark:text-[#f5f1e8]/90">
                    Dagens reguleringsprosess tar ofte 7-10 år fra idé til første spadetak. Dette må forenkles drastisk.
                    <Footnote id={16} />
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 dark:bg-[#1a1a1a]/50 border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-6 rounded-md">
              <div className="flex items-start gap-4">
                <div className="bg-[#1a472a] text-white flex-shrink-0 w-10 h-10 flex items-center justify-center text-lg font-bold rounded-full">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-xl text-[#1a472a] dark:text-[#f5f1e8] mb-2">Byutvikling rundt kollektivknutepunkter</h4>
                  <p className="text-[#2c5545] dark:text-[#f5f1e8]/90">
                    Hver T-banestasjon bør ha høy tetthet av boliger. Dette reduserer transportbehov og skaper levende lokalmiljøer.
                    <Footnote id={17} />
                  </p>
                </div>
              </div>
            </div>
            
            {/* Mobile CTA */}
            <div className="bg-[#1a472a] text-white p-6 rounded-md mt-8">
              <h3 className={`${playfair.className} text-2xl font-bold mb-4`}>
                Bli med i kampen
              </h3>
              <p className="mb-6">
                For å skape en by med plass til alle trenger vi din stemme. Bli med i YIMBY Oslo i dag.
              </p>
              <Link 
                href="/bli-medlem"
                className="inline-block px-6 py-3 bg-white text-[#1a472a] font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                Meld deg inn
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
