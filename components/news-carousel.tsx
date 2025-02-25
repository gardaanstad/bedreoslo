"use client";

import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import Carousel from './carousel';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

interface PostData {
  id: string;
  title: string;
  date: string;
  excerpt?: string;
  author?: string;
}

interface NewsCarouselProps {
  posts: PostData[];
}

const NewsItem = ({ post }: { post: PostData }) => (
  <div className="h-full">
    <Link href={`/nyheter/${post.id}`} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a472a] dark:focus-visible:ring-[#f5f1e8]">
      <article className="group h-full p-6 relative border border-[#1a472a]/20 dark:border-[#f5f1e8]/10">
        <time className="block text-xs font-medium text-[#2c5545] dark:text-[#a3b8b0] mb-3 uppercase tracking-wider">
          {new Date(post.date).toLocaleDateString('nb-NO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        <h3 className={`text-xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-3 ${playfair.className} line-clamp-2`}>
          {post.title}
        </h3>
        <p className="text-[#2c5545] dark:text-[#a3b8b0] text-sm line-clamp-2">
          {post.excerpt}
        </p>
        
        {/* Simplified "Read more" link to match TileCarousel */}
        <div className="mt-auto pt-3 flex items-center">
          <span className="text-sm font-medium text-[#1a472a] dark:text-[#f5f1e8]">
            Les mer
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-[#1a472a] dark:text-[#f5f1e8]" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </article>
    </Link>
  </div>
);

export default function NewsCarousel({ posts }: NewsCarouselProps) {
  return (
    <div className="mb-8">
      <Carousel 
        className="h-[210px]" 
        showArrows={true}
        showDots={true}
        autoPlay={false}
        gapBetweenSlides={false}
      >
        {posts.map((post) => (
          <NewsItem key={post.id} post={post} />
        ))}
      </Carousel>
    </div>
  );
} 