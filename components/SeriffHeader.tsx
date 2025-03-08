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

export default function SeriffHeader({ children, className = '', size = 'md' }: SeriffHeaderProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl',
    xl: 'text-3xl md:text-4xl',
    hero: 'text-4xl md:text-[4.5rem] md:whitespace-nowrap'
  };

  return (
    <h1 className={`${playfair.className} font-bold leading-tight text-[#2b2b2b] dark:text-[#f5f1e8] ${sizeClasses[size]} ${className}`}>
      {children}
    </h1>
  );
} 