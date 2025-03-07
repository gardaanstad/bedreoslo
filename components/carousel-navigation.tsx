"use client";

import { useState, useEffect } from 'react';

interface CarouselNavigationProps {
  totalSlides: number;
}

export default function CarouselNavigation({ totalSlides }: CarouselNavigationProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Listen for scroll events from the carousel
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === 'carouselIndexChange') {
        setCurrentIndex(e.data.index);
      }
    };
    
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);
  
  // Scroll to a specific slide
  const scrollToSlide = (index: number) => {
    window.postMessage({ type: 'carouselScrollTo', index }, '*');
  };
  
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => scrollToSlide(Math.max(0, currentIndex - 1))}
        className={`h-8 w-8 flex items-center justify-center border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 bg-white/30 dark:bg-black/20 focus:outline-none ${
          currentIndex === 0 
            ? 'text-[#2b2b2b]/30 dark:text-[#f5f1e8]/30 cursor-not-allowed' 
            : 'text-[#2b2b2b] dark:text-[#f5f1e8] hover:bg-[#1a472a]/10 dark:hover:bg-white/10'
        }`}
        aria-label="Previous slide"
        disabled={currentIndex === 0}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      
      <div className="flex items-center gap-1.5 min-w-[120px] justify-center">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`transition-all duration-200 ${
              index === currentIndex
                ? 'bg-[#1a472a] dark:bg-[#f5f1e8] w-6'
                : 'bg-[#2b2b2b]/20 dark:bg-[#f5f1e8]/20 w-2'
            } h-2`}
            aria-label={`Slide ${index + 1} ${index === currentIndex ? '(current)' : ''}`}
            role="status"
          />
        ))}
      </div>
      
      <button
        onClick={() => scrollToSlide(Math.min(totalSlides - 1, currentIndex + 1))}
        className={`h-8 w-8 flex items-center justify-center border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 bg-white/30 dark:bg-black/20 focus:outline-none ${
          currentIndex === totalSlides - 1 
            ? 'text-[#2b2b2b]/30 dark:text-[#f5f1e8]/30 cursor-not-allowed' 
            : 'text-[#2b2b2b] dark:text-[#f5f1e8] hover:bg-[#1a472a]/10 dark:hover:bg-white/10'
        }`}
        aria-label="Next slide"
        disabled={currentIndex === totalSlides - 1}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
} 