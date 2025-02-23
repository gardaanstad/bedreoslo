'use client';

import { Playfair_Display, Inter } from 'next/font/google';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
} from 'recharts';

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
  { year: '2025', need: 1050000, supply: 640000 },
  { year: '2030', need: 1200000, supply: 680000 },
];

export default function History() {
  return (
    <main 
      className={`relative ${inter.className} min-h-screen overflow-x-hidden bg-[#f7f4ef] dark:bg-[#0a0a0a] pt-24`}
    >
      {/* Fixed Background Elements */}
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.15] dark:opacity-[0.08] -z-10" />
      <div 
        className="fixed inset-0 bg-gradient-to-b from-[#1a472a] to-transparent dark:from-black/40 dark:to-transparent opacity-[0.08] -z-10"
      />

      {/* Page Header */}
      <section className="relative w-full px-4 pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className={`${playfair.className} text-4xl sm:text-6xl font-bold tracking-tight text-[#1a472a] dark:text-[#f5f1e8] mb-6`}>
              Boligkrisen i Oslo - og hvordan YIMBYisme kan hjelpe
            </h1>
            <div className="w-16 h-[2px] bg-[#1a472a] dark:bg-[#f5f1e8] mx-auto mb-8" />
            <p className="text-xl text-[#2c5545] dark:text-[#a3b8b0] max-w-2xl mx-auto">
              La oss sammen bygge en by der ingen blir etterlatt. Tetthet er ikke fienden – det er veien til et rettferdigere, grønnere og mer levende Oslo.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative w-full px-4 space-y-24 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Current Situation */}
          <section className="space-y-8">
            <div className="border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-8 sm:p-12 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
              <div className="relative">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.1] mix-blend-overlay" />
                <div className="relative">
                  <h2 className={`text-2xl sm:text-3xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-6 ${playfair.className}`}>
                    Krisen i tall
                  </h2>
                  <p className="text-lg text-[#2c5545] dark:text-[#a3b8b0] leading-relaxed mb-4">
                    Over 50 000 mennesker står i boligkø i Oslo – flere enn hele befolkningen i Moss.
                  </p>
                  <p className="text-lg text-[#2c5545] dark:text-[#a3b8b0] leading-relaxed">
                    Hvis trenden fortsetter, mangler Oslo 150 000 boliger innen 2030 – tilsvarende en by på størrelse med Trondheim. Dette er ikke bare mangel – det er en systematisk mangel på å holde tritt med veksten.
                  </p>
                </div>
              </div>
            </div>

            {/* Graph Section */}
            <div className="border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-8 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
              <div className="relative">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.1] mix-blend-overlay" />
                <div className="relative">
                  <h2 className={`text-2xl sm:text-3xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-6 ${playfair.className}`}>
                    Økende gap: Behov vs. tilbud
                  </h2>
                  <p className="text-lg text-[#2c5545] dark:text-[#a3b8b0] mb-8">
                    Oslos befolkning eksploderer, men boligbygging henger etter. Siden 2010 har gapet mellom boligbehov og tilgjengelighet økt årlig. Uten handling vil høye priser og utkasting definere Oslos fremtid.
                  </p>
                  <div className="h-[40vh] sm:h-[50vh]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={housingData}
                        margin={{
                          top: 20,
                          right: 20,
                          left: 20,
                          bottom: 20,
                        }}
                      >
                        <XAxis
                          dataKey="year"
                          stroke="currentColor"
                          fontSize={14}
                          tickLine={false}
                          axisLine={false}
                        />
                        <YAxis hide />
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
                          stroke="#2563eb"
                          fill="none"
                          strokeWidth={2.5}
                          dot={false}
                        />
                        <Area
                          type="monotone"
                          dataKey="supply"
                          stroke="#dc2626"
                          fill="none"
                          strokeWidth={2.5}
                          dot={false}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Impact Section */}
          <section className="space-y-8 mt-24">
            <h2 className={`text-3xl sm:text-4xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-12 ${playfair.className}`}>
              Hvem rammes hardest?
            </h2>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-8 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
                <span className="text-3xl mb-6 block">👨‍👩‍👧‍👦</span>
                <h3 className={`text-xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-4 ${playfair.className}`}>
                  Familier
                </h3>
                <p className="text-[#2c5545] dark:text-[#a3b8b0]">
                  Presses ut av byen på jakt etter rimelige familieboliger – lokalsamfunn splittes.
                </p>
              </div>
              <div className="border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-8 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
                <span className="text-3xl mb-6 block">💰</span>
                <h3 className={`text-xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-4 ${playfair.className}`}>
                  Lavinntektsgrupper
                </h3>
                <p className="text-[#2c5545] dark:text-[#a3b8b0]">
                  Bruker 40% eller mer av inntekten på husleie, med færre alternativer hvert år.
                </p>
              </div>
              <div className="border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-8 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
                <span className="text-3xl mb-6 block">🎓</span>
                <h3 className={`text-xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-4 ${playfair.className}`}>
                  Studenter
                </h3>
                <p className="text-[#2c5545] dark:text-[#a3b8b0]">
                  Kjemper for å finne bolig nær studiested, noe som truer studiemuligheter.
                </p>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="space-y-8 mt-24">
            <h2 className={`text-3xl sm:text-4xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-12 ${playfair.className}`}>
              Løsningen: Tettere, smartere byer
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-8 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
                <span className="text-3xl mb-6 block">🌆</span>
                <h3 className={`text-xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-4 ${playfair.className}`}>
                  Tettere bebyggelse
                </h3>
                <p className="text-[#2c5545] dark:text-[#a3b8b0]">
                  Bygg tettere der folk vil bo. Vi kan ikke fortsette med småhusområder innenfor Ring 3, eller sinte naboer som forbyr leiligheter ved siden av seg.
                </p>
              </div>
              <div className="border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-8 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
                <span className="text-3xl mb-6 block">🏢</span>
                <h3 className={`text-xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-4 ${playfair.className}`}>
                  Smartere bygging
                </h3>
                <p className="text-[#2c5545] dark:text-[#a3b8b0]">
                  Bruk teknologi og innovasjon for å bygge raskere, billigere og grønnere.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
