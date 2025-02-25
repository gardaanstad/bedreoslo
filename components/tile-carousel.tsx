"use client";

import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import Carousel from './carousel';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

interface TileProps {
  href: string;
  label: string;
  title: string;
  description: string;
  bgColor?: string;
  textColor?: string;
  labelColor?: string;
}

const Tile = ({ 
  href, 
  label, 
  title, 
  description, 
  bgColor = 'bg-white/5 dark:bg-black/10', 
  textColor = 'text-[#2c5545] dark:text-[#f5f1e8]', 
  labelColor = 'text-[#2c5545] dark:text-[#f5f1e8]',
}: TileProps) => (
  <div className="h-full">
    <Link
      href={href}
      className={`block h-full border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-6 ${bgColor} flex flex-col relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a472a] dark:focus-visible:ring-[#f5f1e8]`}
    >
      <span className={`block text-xs ${labelColor} mb-3 uppercase tracking-widest font-medium`}>
        {label}
      </span>
      <h2 className={`text-xl font-bold ${textColor} mb-3 ${playfair.className} line-clamp-2`}>
        {title}
      </h2>
      <p className={`${textColor} text-sm line-clamp-2`}>
        {description}
      </p>
      
      {/* Simplified "Read more" indicator */}
      <div className="mt-auto pt-3 flex items-center">
        <span className="text-sm font-medium text-[#1a472a] dark:text-[#f5f1e8]">
          Les mer
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-[#1a472a] dark:text-[#f5f1e8]" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </Link>
  </div>
);

export default function TileCarousel() {
  const tiles = [
    {
      href: '/historie',
      label: 'Argumentene',
      title: 'Hvorfor YIMBY?',
      description: 'Hvordan YIMBY kan løse boligkrisen i Oslo.',
      bgColor: 'bg-white/5 dark:bg-black/10',
      textColor: 'text-[#2c5545] dark:text-[#f5f1e8]',
      labelColor: 'text-[#2c5545] dark:text-[#f5f1e8]'
    },
    {
      href: '/om',
      label: 'Om oss',
      title: 'Hvem er Oslo YIMBY?',
      description: 'Les om bevegelsen som vil løse boligkrisen i Oslo med vitenskapelig beviste metoder.',
      bgColor: 'bg-white/5 dark:bg-black/10',
      textColor: 'text-[#2c5545] dark:text-[#f5f1e8]',
      labelColor: 'text-[#2c5545] dark:text-[#f5f1e8]'
    },
    {
      href: '/kontakt',
      label: 'Kontakt',
      title: 'Ta kontakt med oss',
      description: 'Har du spørsmål eller vil du bidra? Ta kontakt med Oslo YIMBY.',
      bgColor: 'bg-white/5 dark:bg-black/10',
      textColor: 'text-[#2c5545] dark:text-[#f5f1e8]',
      labelColor: 'text-[#2c5545] dark:text-[#f5f1e8]'
    }
  ];

  return (
    <div className="py-3 mb-8">
      <Carousel 
        className="h-[210px]" 
        showArrows={true} 
        showDots={true}
        autoPlay={false}
      >
        {tiles.map((tile, index) => (
          <Tile key={index} {...tile} />
        ))}
      </Carousel>
    </div>
  );
} 