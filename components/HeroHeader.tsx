import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
  preload: true,
});

interface SeriffHeaderProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
}

export default function HeroHeader({ children}: SeriffHeaderProps) {
  return (
    <h1 className={`${playfair.className} text-5xl md:text-[min(7.2vw,7rem)] font-bold tracking-tight leading-[1.1] text-center gradient-text`}>
      {children}
    </h1>
  );
} 