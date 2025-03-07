import { Playfair_Display, Inter } from 'next/font/google';
import Link from 'next/link';
import './styles/gradients.css';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Carousel from '@/components/carousel';
import CarouselNavigation from '@/components/carousel-navigation';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500'],
});

interface PostData {
  id: string;
  title: string;
  date: string;
  excerpt?: string;
  author?: string;
}

async function getRecentPosts(): Promise<PostData[]> {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        id,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        author: data.author,
      };
    });

  // Sort posts by date and take the 5 most recent for mobile
  return allPostsData
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 5);
}

export default async function Home() {
  const recentPosts = await getRecentPosts();
  
  const highlightContent = (
    <>
      <h3 className={`${playfair.className} text-xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-6`}>
        Kort oppsummert
      </h3>
      <ul className="space-y-6 text-[#2b2b2b] dark:text-[#f5f1e8]">
        <li className="flex items-start gap-4">
          <span className={`${playfair.className} text-2xl font-medium text-[#2b2b2b] dark:text-[#f5f1e8] flex-shrink-0 -mt-1`}>1</span>
          <span className="leading-tight">Bygg flere boliger, både private og sosiale</span>
        </li>
        <li className="flex items-start gap-4">
          <span className={`${playfair.className} text-2xl font-medium text-[#2b2b2b] dark:text-[#f5f1e8] flex-shrink-0 -mt-1`}>2</span>
          <span className="leading-tight">Gjør gater tryggere for gående og syklende</span>
        </li>
        <li className="flex items-start gap-4">
          <span className={`${playfair.className} text-2xl font-medium text-[#2b2b2b] dark:text-[#f5f1e8] flex-shrink-0 -mt-1`}>3</span>
          <span className="leading-tight">Forbedre kollektivtilbudet med flere avganger og bedre dekning</span>
        </li>
      </ul>
    </>
  );

  return (
    <main 
      className={`relative ${inter.className} min-h-screen overflow-x-hidden bg-[#f7f4ef] dark:bg-[#141414] pt-28`}
    >
      
      {/* Hero Section */}
      <section className="relative w-full px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative pt-8 md:pt-12 md:pb-8">
            <div className="md:flex md:flex-col md:items-center">
              <div className="w-full">
                <h1 className={`${playfair.className} text-5xl md:text-[min(7.2vw,7rem)] font-bold tracking-tight leading-[1.1] text-center gradient-text`}>
                  For en by med plass til alle
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="relative w-full px-4 mt-12 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:block">
            {/* Main Grid */}
            <div className="grid grid-cols-12 gap-8">
              {/* Left Column - Om oss, politikk, ressurser */}
              <div className="col-span-8">
                {/* Featured Article - Om oss */}
                <div className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 p-8 mb-8 bg-[#efece5] dark:bg-black/20">
                  <div className="flex gap-10">
                    {/* Left - Title and intro */}
                    <Link 
                        href="/om" 
                        className="w-1/2 group"
                      >
                        <span className="text-sm text-[#2b2b2b] dark:text-[#f5f1e8]/70 font-medium uppercase tracking-wider">Om oss</span>
                        <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mt-2 mb-4 leading-tight group-hover:underline`}>
                          Hva mener vi med &ldquo;Bedre Oslo&rdquo;?
                        </h2>
                        <p className="text-[#2b2b2b] dark:text-[#f5f1e8]/80 text-base leading-relaxed mb-4">
                          Oslo er den beste byen i Norge, men det er likevel forbedringspotensial. Boligmarkedet er ute av kontroll, bilkjøring skader mennesker og byliv, og kapasiteten på kollektivt er sprengt.
                        </p>
                    </Link>
                    
                    {/* Right - Highlight box */}
                    <div className="w-1/2 bg-[#1a472a]/5 dark:bg-[#1a472a]/10 border border-[#1a472a]/20 dark:border-[#1a472a]/80 p-8 flex flex-col justify-between">
                      <div>
                        {highlightContent}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Action Links */}
                <div className="grid grid-cols-2 gap-8 mb-6">
                  {/* Boligkrise & Byrom */}
                  <Link
                    href="/politikk"
                    className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 p-8 group block bg-[#efece5] dark:bg-black/20"
                  >
                    <span className="block text-sm text-[#2b2b2b] dark:text-[#f5f1e8]/70 uppercase tracking-wider mb-1 font-medium">
                      Politikk
                    </span>
                    <h3 className={`text-lg font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-1 leading-tight ${playfair.className} group-hover:underline`}>
                      Hvilke konkrete tiltak står vi for?
                    </h3>
                  </Link>

                  {/* Ressurser */}
                  <Link
                    href="/ressurser"
                    className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 p-8 group block bg-[#efece5] dark:bg-black/20"
                  >
                    <span className="block text-sm text-[#2b2b2b] dark:text-[#f5f1e8]/70 uppercase tracking-wider mb-1 font-medium">
                      Ressurser
                    </span>
                    <h3 className={`text-lg font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-1 leading-tight ${playfair.className} group-hover:underline`}>
                      Forskning og nyttige lenker
                    </h3>
                  </Link>
                </div>
              </div>
              
              {/* News Column - Right Side */}
              <div className="col-span-4 border-l border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 pl-8">
                <div className="mb-6 pb-6 border-b border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10">
                  <Link 
                    href="/nyheter" 
                    className={`flex items-center justify-between text-xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] ${playfair.className} hover:underline`}
                  >
                    Nyheter og innlegg
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                
                <div className="space-y-8">
                  {recentPosts.slice(0, 4).map((post) => (
                    <Link key={post.id} href={`/nyheter/${post.id}`} className="block group">
                      <article>
                        <time className="text-xs text-[#2b2b2b] dark:text-[#a3b8b0] font-medium uppercase tracking-wider">
                          {new Date(post.date).toLocaleDateString('nb-NO', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                        <h3 className={`text-lg font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mt-1 mb-2 leading-tight ${playfair.className} group-hover:underline`}>
                          {post.title}
                        </h3>
                        <p className="text-[#2b2b2b] dark:text-[#a3b8b0] text-sm line-clamp-2">
                          {post.excerpt}
                        </p>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col gap-6">
            {/* Mobile featured article */}
            <div className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 p-6 bg-[#efece5] dark:bg-black/20">
              {/* Mobile main content */}
              <Link 
                href="/om" 
                className="block group"
              >
                <h2 className={`${playfair.className} text-2xl sm:text-3xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] leading-tight group-hover:underline`}>
                  Hva mener vi med &ldquo;Bedre Oslo&rdquo;?
                </h2>
              </Link>
              
              {/* Mobile highlight banner */}
              <div className="relative -mx-[calc(2.5rem+1px)] my-5 bg-[#1a472a]/5 dark:bg-[#1a472a]/10 border-y border-[#1a472a]/20 dark:border-[#1a472a]/80 p-6 backdrop-blur-md">
                {highlightContent}
              </div>
              
              <p className="text-[#2b2b2b] dark:text-[#f5f1e8]/80 text-base leading-relaxed">
                Oslo er den beste byen i Norge, men det er likevel forbedringspotensial. Boligmarkedet er sinnsykt, bilkjøring skader mennesker og byliv, og kollektivtrafikken går ikke ofte nok.
              </p>
              
              <Link
                href="/om" 
                className="block group"
              >
                <div className="flex items-center mt-4 text-[#2b2b2b] dark:text-[#f5f1e8] opacity-70 group-hover:opacity-100">
                  <span className="text-sm">Les mer om Bedre Oslo</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </div>
            
            {/* Action Links Grid */}
            <div className="flex flex-col gap-6">
              {/* Politikk */}
              <Link
                href="/politikk"
                className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 p-6 group block bg-[#efece5] dark:bg-black/20"
              >
                <span className="block text-sm text-[#2b2b2b] dark:text-[#f5f1e8]/70 uppercase tracking-wider mb-1 font-medium">
                  Politikk
                </span>
                <h3 className={`text-lg font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-1 leading-tight ${playfair.className} group-hover:underline`}>
                  Hvilke konkrete tiltak står vi for?
                </h3>
                <div className="flex items-center mt-4 text-[#2b2b2b] dark:text-[#f5f1e8] opacity-70 group-hover:opacity-100">
                  <span className="text-sm">Les mer</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>

              {/* Ressurser */}
              <Link
                href="/ressurser"
                className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 p-6 group block bg-[#efece5] dark:bg-black/20"
              >
                <span className="block text-sm text-[#2b2b2b] dark:text-[#f5f1e8]/70 uppercase tracking-wider mb-1 font-medium">
                  Ressurser
                </span>
                <h3 className={`text-lg font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-1 leading-tight ${playfair.className} group-hover:underline`}>
                  Forskning og nyttige lenker
                </h3>
                <div className="flex items-center mt-4 text-[#2b2b2b] dark:text-[#f5f1e8] opacity-70 group-hover:opacity-100">
                  <span className="text-sm">Les mer</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </div>
            
            {/* News Section */}
            <div className="mt-2 mb-8">
              <div className="border-b border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 mb-4 pb-4">
                <Link 
                  href="/nyheter"
                  className={`flex items-center justify-between text-xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] ${playfair.className} hover:underline`}>
                    Nyheter og innlegg
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
              </div>

              {/* The carousel section */}
              <div className="w-full h-full flex flex-col gap-3">
                <div className="flex-grow min-h-0">
                  <Carousel posts={recentPosts} />
                </div>
                <div className="md:hidden flex justify-center items-center gap-3 px-4">
                  <CarouselNavigation totalSlides={recentPosts.length} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
