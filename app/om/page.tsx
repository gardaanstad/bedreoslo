import { Playfair_Display, Inter } from 'next/font/google';
import Link from 'next/link';
import '../styles/gradients.css';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500'],
});

export default function AboutPage() {
  return (
    <main 
      className={`relative ${inter.className} min-h-screen overflow-x-hidden bg-[#f7f4ef] dark:bg-[#121212] pt-40`}
    >

      <div className="max-w-5xl mx-auto px-4 pb-16">
        {/* Page Header */}
        <header className="mb-16">
          <h1 className={`${playfair.className} text-4xl sm:text-6xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-6`}>
            Om Bedre Oslo
          </h1>
          <div className="h-px bg-[#2b2b2b]/20 dark:bg-[#f5f1e8]/20 w-full my-6" />
          <p className="text-xl text-[#2b2b2b]/80 dark:text-[#a3b8b0] max-w-1xl">
            Dette er en kort beskrivelse av Bedre Oslo. Her kan det stå mer informasjon om hva 
            vi jobber med og står for. Denne siden er ikke helt ferdig enda!
          </p>
        </header>
        
        {/* Principles Section */}
        <div className="mb-16">
          <h2 className={`${playfair.className} text-3xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-6`}>
            Våre prinsipper
          </h2>
          
          {/* Principles box */}
          <div className="bg-[#1a472a] dark:bg-[#1a472a] p-8 relative overflow-hidden">
            <div className="relative z-10">
              <ul className="space-y-6 text-[#f7f4ef] dark:text-[#f5f1e8]/90">
                <li className="flex items-start">
                  <span className="w-8 h-8 bg-[#f7f4ef] text-[#1a472a] flex-shrink-0 flex items-center justify-center mr-4">1</span>
                  <div>
                    <h4 className="text-lg text-[#f7f4ef] mb-2">Prinsipp #1</h4>
                    <p className="text-[#f7f4ef]/95">Beskrivelse av det første prinsippet.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 bg-[#f7f4ef] text-[#1a472a] flex-shrink-0 flex items-center justify-center mr-4">2</span>
                  <div>
                    <h4 className="text-lg text-[#f7f4ef] mb-2">Prinsipp #2</h4>
                    <p className="text-[#f7f4ef]/95">Beskrivelse av det andre prinsippet.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 bg-[#f7f4ef] text-[#1a472a] flex-shrink-0 flex items-center justify-center mr-4">3</span>
                  <div>
                    <h4 className="text-lg text-[#f7f4ef] mb-2">Prinsipp #3</h4>
                    <p className="text-[#f7f4ef]/95">Beskrivelse av det tredje prinsippet.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <Link 
            href="/politikk" 
            className="inline-block mt-6 text-[#1a472a] dark:text-[#a3b8b0] hover:underline"
          >
            Les mer om politikken vår →
          </Link>
        </div>
        
        {/* What We Do Section */}
        <div className="mb-16">
          <h2 className={`${playfair.className} text-3xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-6`}>
            Hva vi gjør
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 bg-white/5 dark:bg-black/20  p-6 relative">
              <div className="relative z-10">
                <Link href="/aktiviteter/politisk" className="group block h-full">
                  <h3 className={`${playfair.className} text-xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-3 group-hover:underline`}>
                    Aktivitet #1
                  </h3>
                  <p className="text-[#2b2b2b]/70 dark:text-[#a3b8b0]">
                    Beskrivelse av den første aktiviteten som Bedre Oslo driver med.
                  </p>
                </Link>
              </div>
            </div>
            
            <div className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 bg-white/5 dark:bg-black/20  p-6 relative">
              <div className="relative z-10">
                <Link href="/aktiviteter/kunnskap" className="group block h-full">
                  <h3 className={`${playfair.className} text-xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-3 group-hover:underline`}>
                    Aktivitet #2
                  </h3>
                  <p className="text-[#2b2b2b]/70 dark:text-[#a3b8b0]">
                    Beskrivelse av den andre aktiviteten som Bedre Oslo driver med.
                  </p>
                </Link>
              </div>
            </div>
            
            <div className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 bg-white/5 dark:bg-black/20  p-6 relative">
              <div className="relative z-10">
                <Link href="/aktiviteter/fellesskap" className="group block h-full">
                  <h3 className={`${playfair.className} text-xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-3 group-hover:underline`}>
                    Aktivitet #3
                  </h3>
                  <p className="text-[#2b2b2b]/70 dark:text-[#a3b8b0]">
                    Beskrivelse av den tredje aktiviteten som Bedre Oslo driver med.
                  </p>
                </Link>
              </div>
            </div>
            
            <div className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 bg-white/5 dark:bg-black/20  p-6 relative">
              <div className="relative z-10">
                <Link href="/aktiviteter/media" className="group block h-full">
                  <h3 className={`${playfair.className} text-xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-3 group-hover:underline`}>
                    Aktivitet #4
                  </h3>
                  <p className="text-[#2b2b2b]/70 dark:text-[#a3b8b0]">
                    Beskrivelse av den fjerde aktiviteten som Bedre Oslo driver med.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
          
        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className={`${playfair.className} text-3xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-8`}>
            Ofte stilte spørsmål
          </h2>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 bg-white/5 dark:bg-black/20  p-8 relative">
              <div className="relative z-10">
                <h3 className={`${playfair.className} text-xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-3`}>
                  Spørsmål #1
                </h3>
                <p className="text-[#2b2b2b]/70 dark:text-[#a3b8b0]">
                  Svar på det første spørsmålet som ofte blir stilt om Bedre Oslo.
                </p>
              </div>
            </div>
            
            <div className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 bg-white/5 dark:bg-black/20  p-8 relative">
              <div className="relative z-10">
                <h3 className={`${playfair.className} text-xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-3`}>
                  Spørsmål #2
                </h3>
                <p className="text-[#2b2b2b]/70 dark:text-[#a3b8b0]">
                  Svar på det andre spørsmålet som ofte blir stilt om Bedre Oslo.
                </p>
              </div>
            </div>
            
            <div className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 bg-white/5 dark:bg-black/20  p-8 relative">
              <div className="relative z-10">
                <h3 className={`${playfair.className} text-xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-3`}>
                  Spørsmål #3
                </h3>
                <p className="text-[#2b2b2b]/70 dark:text-[#a3b8b0]">
                  Svar på det tredje spørsmålet som ofte blir stilt om Bedre Oslo.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our People Section */}
        <div>
          <h2 className={`${playfair.className} text-3xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-6`}>
            Våre folk
          </h2>
          
          <p className="text-[#2b2b2b]/70 dark:text-[#a3b8b0] mb-8 max-w-3xl">
            Kort beskrivelse av menneskene som er involvert i Bedre Oslo.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Board member examples - placeholder images */}
            <div className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 bg-white/5 dark:bg-black/20  p-5 relative">
              <div className="relative z-10">
                <div className="aspect-square w-full bg-gray-200 dark:bg-gray-800 mb-3 flex items-center justify-center">
                  <span className="text-[#2b2b2b] dark:text-[#f5f1e8]/50">Bilde</span>
                </div>
                <h3 className={`${playfair.className} text-lg font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-1`}>
                  Person #1
                </h3>
                <p className="text-[#2b2b2b]/70 dark:text-[#a3b8b0] text-sm mb-2">
                  Rolle #1
                </p>
                <p className="text-[#2b2b2b]/60 dark:text-[#a3b8b0]/60 text-xs">
                  Beskrivelse av person #1
                </p>
              </div>
            </div>
            
            <div className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 bg-white/5 dark:bg-black/20  p-5 relative">
              <div className="relative z-10">
                <div className="aspect-square w-full bg-gray-200 dark:bg-gray-800 mb-3 flex items-center justify-center">
                  <span className="text-[#2b2b2b] dark:text-[#f5f1e8]/50">Bilde</span>
                </div>
                <h3 className={`${playfair.className} text-lg font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-1`}>
                  Person #2
                </h3>
                <p className="text-[#2b2b2b]/70 dark:text-[#a3b8b0] text-sm mb-2">
                  Rolle #2
                </p>
                <p className="text-[#2b2b2b]/60 dark:text-[#a3b8b0]/60 text-xs">
                  Beskrivelse av person #2
                </p>
              </div>
            </div>
            
            <div className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 bg-white/5 dark:bg-black/20  p-5 relative">
              <div className="relative z-10">
                <div className="aspect-square w-full bg-gray-200 dark:bg-gray-800 mb-3 flex items-center justify-center">
                  <span className="text-[#2b2b2b] dark:text-[#f5f1e8]/50">Bilde</span>
                </div>
                <h3 className={`${playfair.className} text-lg font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-1`}>
                  Person #3
                </h3>
                <p className="text-[#2b2b2b]/70 dark:text-[#a3b8b0] text-sm mb-2">
                  Rolle #3
                </p>
                <p className="text-[#2b2b2b]/60 dark:text-[#a3b8b0]/60 text-xs">
                  Beskrivelse av person #3
                </p>
              </div>
            </div>
            
            <div className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 bg-white/5 dark:bg-black/20  p-5 relative">
              <div className="relative z-10">
                <div className="aspect-square w-full bg-gray-200 dark:bg-gray-800 mb-3 flex items-center justify-center">
                  <span className="text-[#2b2b2b] dark:text-[#f5f1e8]/50">Bilde</span>
                </div>
                <h3 className={`${playfair.className} text-lg font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-1`}>
                  Person #4
                </h3>
                <p className="text-[#2b2b2b]/70 dark:text-[#a3b8b0] text-sm mb-2">
                  Rolle #4
                </p>
                <p className="text-[#2b2b2b]/60 dark:text-[#a3b8b0]/60 text-xs">
                  Beskrivelse av person #4
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
