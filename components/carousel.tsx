"use client";

import { useState, useRef, useEffect, ReactNode } from 'react';

interface CarouselProps {
  children: ReactNode[];
  className?: string;
  showDots?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
  gapBetweenSlides?: boolean;
}

export default function Carousel({
  children,
  className = '',
  showDots = true,
  autoPlay = false,
  autoPlayInterval = 5000,
  showArrows = true,
  gapBetweenSlides = true,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Update active slide when scrolling occurs
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const scrollPosition = scrollContainerRef.current.scrollLeft;
    const slideWidth = scrollContainerRef.current.clientWidth;
    const newIndex = Math.round(scrollPosition / slideWidth);
    
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  // Scroll to a specific slide
  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    
    const slideWidth = scrollContainerRef.current.clientWidth;
    scrollContainerRef.current.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth'
    });
    
    setCurrentIndex(index);
    resetAutoplay();
  };

  const handleNext = () => {
    const nextIndex = Math.min(currentIndex + 1, children.length - 1);
    scrollToSlide(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = Math.max(currentIndex - 1, 0);
    scrollToSlide(prevIndex);
  };

  const resetAutoplay = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    if (autoPlay) {
      timeoutRef.current = setTimeout(() => {
        const nextIndex = (currentIndex + 1) % children.length;
        scrollToSlide(nextIndex);
      }, autoPlayInterval);
    }
  };

  // Setup scroll event listener and autoplay
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    resetAutoplay();
    
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, children.length, autoPlay, autoPlayInterval]);

  return (
    <div className={`relative ${className}`}>
      {/* Main scrollable container - now without side padding */}
      <div 
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide snap-x snap-mandatory no-scrollbar w-full h-full flex"
        style={{ 
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {children.map((child, index) => (
          <div 
            key={index} 
            className={`min-w-full w-full h-full flex-shrink-0 snap-center ${gapBetweenSlides ? 'px-2' : ''}`}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Combined navigation controls and dots at the bottom */}
      <div className="absolute -bottom-10 left-0 right-0 flex justify-center items-center gap-4 z-10 md:hidden">
        {showArrows && children.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className={`h-8 w-8 flex items-center justify-center focus:outline-none ${
                currentIndex === 0 
                  ? 'text-[#1a472a]/30 dark:text-white/30 cursor-not-allowed' 
                  : 'text-[#1a472a] dark:text-white hover:bg-[#1a472a]/10 dark:hover:bg-white/10'
              }`}
              aria-label="Previous slide"
              disabled={currentIndex === 0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            
            {showDots && children.length > 1 && (
              <div className="flex items-center gap-2">
                {children.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSlide(index)}
                    className={`h-[4px] transition-all duration-200 ${
                      index === currentIndex
                        ? 'bg-[#1a472a] dark:bg-white w-6'
                        : 'bg-[#1a472a]/30 dark:bg-white/30 w-6'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
            
            <button
              onClick={handleNext}
              className={`h-8 w-8 flex items-center justify-center focus:outline-none ${
                currentIndex === children.length - 1 
                  ? 'text-[#1a472a]/30 dark:text-white/30 cursor-not-allowed' 
                  : 'text-[#1a472a] dark:text-white hover:bg-[#1a472a]/10 dark:hover:bg-white/10'
              }`}
              aria-label="Next slide"
              disabled={currentIndex === children.length - 1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
} 