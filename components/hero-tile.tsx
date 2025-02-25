import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

export default function HeroTile() {
  return (
    <section className="relative w-full px-4 pt-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-6 sm:p-16 bg-white/5 dark:bg-black/20">
          <div className="relative">
            <h1 className={`${playfair.className} text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[1.1] text-center gradient-text`}>
              For en by med<br />plass til alle
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
} 