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
            Bedre Oslo er en grasrotbevegelse for alle som ønsker seg en mer inkluderende, 
            bærekraftig og mangfoldig by. Vi ønsker oss en by hvor det er plass til alle, 
            uavhengig av hvor lenge de har bodd her eller hvor mye penger de har.
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
                    <h4 className="text-lg text-[#f7f4ef] mb-2">Inkludering fremfor ekskludering</h4>
                    <p className="text-[#f7f4ef]/95">Vi ønsker velkommen en Oslo-region som har plass til flere, istedenfor å hegne om våre egne privilegier og interesser.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className=" w-8 h-8 bg-[#f7f4ef] text-[#1a472a] flex-shrink-0 flex items-center justify-center mr-4">2</span>
                  <div>
                    <h4 className="text-lg text-[#f7f4ef] mb-2">Forskningsbasert tilnærming</h4>
                    <p className="text-[#f7f4ef]/95">Vi tror på at byutvikling og boligpolitikk bør baseres på den beste tilgjengelige forskningen, ikke følelser eller særinteresser.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 bg-[#f7f4ef] text-[#1a472a] flex-shrink-0 flex items-center justify-center mr-4">3</span>
                  <div>
                    <h4 className="text-lg text-[#f7f4ef] mb-2">Bærekraftig byutvikling</h4>
                    <p className="text-[#f7f4ef]/95">Tette, mangfoldige byer med god kollektivtransport er nødvendig for å redusere klimagassutslipp og fossilavhengighet.</p>
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
                    Politisk påvirkning
                  </h3>
                  <p className="text-[#2b2b2b]/70 dark:text-[#a3b8b0]">
                    Vi engasjerer oss i høringer, deltar på folkemøter, skriver leserinnlegg, og 
                    møter politikere for å fremme mer omfattende og inkluderende byutvikling.
                  </p>
                </Link>
              </div>
            </div>
            
            <div className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 bg-white/5 dark:bg-black/20  p-6 relative">
              <div className="relative z-10">
                <Link href="/aktiviteter/kunnskap" className="group block h-full">
                  <h3 className={`${playfair.className} text-xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-3 group-hover:underline`}>
                    Kunnskapsdeling
                  </h3>
                  <p className="text-[#2b2b2b]/70 dark:text-[#a3b8b0]">
                    Vi arrangerer seminarer, lager faktaark, og deler forskningsbasert kunnskap om 
                    boligmarkedet, byutvikling, og løsninger på boligmangelen.
                  </p>
                </Link>
              </div>
            </div>
            
            <div className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 bg-white/5 dark:bg-black/20  p-6 relative">
              <div className="relative z-10">
                <Link href="/aktiviteter/fellesskap" className="group block h-full">
                  <h3 className={`${playfair.className} text-xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-3 group-hover:underline`}>
                    Fellesskap
                  </h3>
                  <p className="text-[#2b2b2b]/70 dark:text-[#a3b8b0]">
                    Vi skaper et fellesskap for alle som ønsker seg en mer inkluderende by, og 
                    samarbeider med andre organisasjoner med lignende mål.
                  </p>
                </Link>
              </div>
            </div>
            
            <div className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 bg-white/5 dark:bg-black/20  p-6 relative">
              <div className="relative z-10">
                <Link href="/aktiviteter/media" className="group block h-full">
                  <h3 className={`${playfair.className} text-xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-3 group-hover:underline`}>
                    Mediearbeid
                  </h3>
                  <p className="text-[#2b2b2b]/70 dark:text-[#a3b8b0]">
                    Vi skriver kronikker, stiller til intervjuer, og er aktive på sosiale medier for 
                    å fremme en mer nyansert og kunnskapsbasert debatt om byutvikling.
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
                  Er dere en politisk organisasjon?
                </h3>
                <p className="text-[#2b2b2b]/70 dark:text-[#a3b8b0]">
                  Vi er partipolitisk uavhengige, men jobber med politiske spørsmål knyttet til byutvikling, 
                  boligpolitikk og arealplanlegging. Vi samarbeider med politikere fra hele det politiske spekteret 
                  som deler vårt mål om en mer inkluderende by.
                </p>
              </div>
            </div>
            
            <div className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 bg-white/5 dark:bg-black/20  p-8 relative">
              <div className="relative z-10">
                <h3 className={`${playfair.className} text-xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-3`}>
                  Hvordan finansieres dere?
                </h3>
                <p className="text-[#2b2b2b]/70 dark:text-[#a3b8b0]">
                  Vi finansieres gjennom medlemskontingenter og frivillige donasjoner. Vi mottar ingen støtte 
                  fra utbyggere eller kommersielle aktører for å bevare vår uavhengighet og integritet i diskusjoner 
                  om byutvikling.
                </p>
              </div>
            </div>
            
            <div className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 bg-white/5 dark:bg-black/20  p-8 relative">
              <div className="relative z-10">
                <h3 className={`${playfair.className} text-xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-3`}>
                  Kan jeg bidra uten å være medlem?
                </h3>
                <p className="text-[#2b2b2b]/70 dark:text-[#a3b8b0]">
                  Ja, vi tar gjerne imot bidrag fra ikke-medlemmer også. Du kan delta på åpne 
                  arrangementer eller bidra med din kompetanse ved behov. Vi setter pris på alle som vil 
                  støtte arbeidet for en bedre by.
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
            Bedre Oslo består av et nettverk av frivillige med ulik bakgrunn og kompetanse. Vi er studenter, 
            arkitekter, økonomer, samfunnsplanleggere, og interesserte samfunnsborgere.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Board member examples - placeholder images */}
            <div className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 bg-white/5 dark:bg-black/20  p-5 relative">
              <div className="relative z-10">
                <div className="aspect-square w-full bg-gray-200 dark:bg-gray-800 mb-3 flex items-center justify-center">
                  <span className="text-[#2b2b2b] dark:text-[#f5f1e8]/50">Bilde</span>
                </div>
                <h3 className={`${playfair.className} text-lg font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-1`}>
                  Mari Paulsen
                </h3>
                <p className="text-[#2b2b2b]/70 dark:text-[#a3b8b0] text-sm mb-2">
                  Leder
                </p>
                <p className="text-[#2b2b2b]/60 dark:text-[#a3b8b0]/60 text-xs">
                  Samfunnsøkonom og byentusiast
                </p>
              </div>
            </div>
            
            <div className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 bg-white/5 dark:bg-black/20  p-5 relative">
              <div className="relative z-10">
                <div className="aspect-square w-full bg-gray-200 dark:bg-gray-800 mb-3 flex items-center justify-center">
                  <span className="text-[#2b2b2b] dark:text-[#f5f1e8]/50">Bilde</span>
                </div>
                <h3 className={`${playfair.className} text-lg font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-1`}>
                  Jonas Eriksen
                </h3>
                <p className="text-[#2b2b2b]/70 dark:text-[#a3b8b0] text-sm mb-2">
                  Nestleder
                </p>
                <p className="text-[#2b2b2b]/60 dark:text-[#a3b8b0]/60 text-xs">
                  Arkitekt og urbanist
                </p>
              </div>
            </div>
            
            <div className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 bg-white/5 dark:bg-black/20  p-5 relative">
              <div className="relative z-10">
                <div className="aspect-square w-full bg-gray-200 dark:bg-gray-800 mb-3 flex items-center justify-center">
                  <span className="text-[#2b2b2b] dark:text-[#f5f1e8]/50">Bilde</span>
                </div>
                <h3 className={`${playfair.className} text-lg font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-1`}>
                  Sara Ahmed
                </h3>
                <p className="text-[#2b2b2b]/70 dark:text-[#a3b8b0] text-sm mb-2">
                  Styremedlem
                </p>
                <p className="text-[#2b2b2b]/60 dark:text-[#a3b8b0]/60 text-xs">
                  Byplanlegger og sosiolog
                </p>
              </div>
            </div>
            
            <div className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 bg-white/5 dark:bg-black/20  p-5 relative">
              <div className="relative z-10">
                <div className="aspect-square w-full bg-gray-200 dark:bg-gray-800 mb-3 flex items-center justify-center">
                  <span className="text-[#2b2b2b] dark:text-[#f5f1e8]/50">Bilde</span>
                </div>
                <h3 className={`${playfair.className} text-lg font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-1`}>
                  Lars Johansen
                </h3>
                <p className="text-[#2b2b2b]/70 dark:text-[#a3b8b0] text-sm mb-2">
                  Styremedlem
                </p>
                <p className="text-[#2b2b2b]/60 dark:text-[#a3b8b0]/60 text-xs">
                  Økonom og boligforsker
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
