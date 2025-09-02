"use client";

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';

interface PostData {
  id: string;
  title: string;
  date: string;
  excerpt?: string;
  author?: string;
}

interface CarouselProps {
  posts: PostData[];
  className?: string;
  showDots?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
}

const NewsItem = ({ post }: { post: PostData }) => (
  <div className="h-full w-full flex justify-center">
    {/* Match the content width */}
    <div className="h-full w-full max-w-7xl px-4">
      <Link href={`/nyheter/${post.id}`} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a472a] dark:focus-visible:ring-[#f5f1e8]">
        <article className="group h-full border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 flex flex-col p-6 bg-[#efece5] dark:bg-black/20">
          <div className="flex-grow">
            <time className="block text-xs font-medium text-[#2b2b2b]/70 dark:text-[#a3b8b0] uppercase tracking-wider">
              {new Date(post.date).toLocaleDateString('nb-NO', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <h3 className={`text-xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] font-serif line-clamp-2 pt-2`}>
              {post.title}
            </h3>
            <p className="text-[#2b2b2b] dark:text-[#a3b8b0] text-sm line-clamp-2 pt-2">
              {post.excerpt}
            </p>
          </div>
          
          <div className="flex items-center pt-4 text-[#2b2b2b] dark:text-[#f5f1e8] opacity-70 group-hover:opacity-100">
            <span className="text-sm">Les mer</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </article>
      </Link>
    </div>
  </div>
);

export default function Carousel({
  posts,
  className = '',
  autoPlay = false,
  autoPlayInterval = 5000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Update active slide when scrolling occurs
  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;
    
    const scrollPosition = scrollContainerRef.current.scrollLeft;
    const slideWidth = scrollContainerRef.current.clientWidth;
    const newIndex = Math.round(scrollPosition / slideWidth);
    
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
      // Notify other components about the index change
      window.postMessage({ type: 'carouselIndexChange', index: newIndex }, '*');
    }
  }, [currentIndex]);

  // Clear any existing autoplay timeout
  const clearAutoplayTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  // Scroll to a specific slide and handle autoplay
  const scrollToSlide = useCallback((index: number) => {
    if (!scrollContainerRef.current) return;
    
    const slideWidth = scrollContainerRef.current.clientWidth;
    scrollContainerRef.current.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth'
    });
    
    setCurrentIndex(index);
    
    // Handle autoplay
    clearAutoplayTimeout();
    if (autoPlay) {
      timeoutRef.current = setTimeout(() => {
        const nextIndex = (index + 1) % posts.length;
        scrollToSlide(nextIndex);
      }, autoPlayInterval);
    }
  }, [autoPlay, autoPlayInterval, clearAutoplayTimeout, posts.length]);

  // Setup scroll event listener and autoplay
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    // Initial autoplay setup
    if (autoPlay) {
      timeoutRef.current = setTimeout(() => {
        scrollToSlide((currentIndex + 1) % posts.length);
      }, autoPlayInterval);
    }
    
    // Listen for messages to scroll to a specific slide
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === 'carouselScrollTo') {
        scrollToSlide(e.data.index);
      }
    };
    
    window.addEventListener('message', handleMessage);
    
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
      clearAutoplayTimeout();
      window.removeEventListener('message', handleMessage);
    };
  }, [currentIndex, posts.length, autoPlay, autoPlayInterval, handleScroll, scrollToSlide, clearAutoplayTimeout]);

  return (
    <div className="mb-4 relative mx-[-1rem] w-[100vw] overflow-hidden">
      <div className={`relative h-[210px] ${className}`}>
        {/* Main scrollable container */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide snap-x snap-mandatory no-scrollbar w-full h-full flex"
          style={{ 
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {posts.map((post, index) => (
            <div 
              key={index} 
              className="min-w-full w-full h-full flex-shrink-0 snap-center"
            >
              <NewsItem post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 