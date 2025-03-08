import { Inter } from 'next/font/google';
import Link from 'next/link';
import './styles/gradients.css';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Carousel from '@/components/carousel';
import CarouselNavigation from '@/components/carousel-navigation';
import SeriffHeader from '@/components/SeriffHeader';
import ReadMoreLink from '@/components/ReadMoreLink';
import TileTitle from '@/components/TileTitle';
import Tile from '@/components/Tile';
import HeroHeader from '@/components/HeroHeader';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  preload: true,
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
  
  return (
    <main className={`relative ${inter.className} min-h-screen overflow-x-hidden`}>
      
      {/* Hero Section */}
      <section className="relative w-full px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative md:pb-8">
            <div className="md:flex md:flex-col md:items-center">
              <div className="w-full">
                <HeroHeader>
                  For en by med plass til alle
                </HeroHeader>
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
                {/* Featured Article - Combined Om oss and Politikk */}
                <Tile size="large" className="mb-8" isGroup={false}>
                  <div className="flex relative">
                    {/* Left - Om oss */}
                    <Link href="/om" className="block group w-1/2 pr-8">
                      <TileTitle>Om oss</TileTitle>
                      <SeriffHeader size="xl" className="mb-4 group-hover:underline">
                        Hva er Bedre Oslo?
                      </SeriffHeader>
                      <p className="text-[#2b2b2b] dark:text-[#f5f1e8]/80 text-base leading-relaxed mb-4">
                        Vi er en organisasjon som jobber for at Oslo blir en bedre by for alle, ved hjelp av forskningsbaserte løsninger og politisk påvirkning.
                      </p>
                    </Link>
                    
                    {/* Center divider */}
                    <div className="absolute left-1/2 -translate-x-px h-full w-px bg-[#2b2b2b]/20 dark:bg-[#f5f1e8]/10" />
                    
                    {/* Right - Politikk highlights */}
                    <Link href="/politikk" className="block group w-1/2 pl-8">
                      <TileTitle>Politikk</TileTitle>
                      <SeriffHeader size="xl" className="mb-6 group-hover:underline">
                        Våre kjernesaker
                      </SeriffHeader>
                      <ul className="space-y-6 text-[#2b2b2b] dark:text-[#f5f1e8]">
                        <li className="flex items-start gap-4">
                          <span className="text-2xl font-medium text-[#2b2b2b] dark:text-[#f5f1e8] flex-shrink-0 -mt-1">1</span>
                          <span className="leading-tight">Bygg flere boliger, både private og sosiale</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-2xl font-medium text-[#2b2b2b] dark:text-[#f5f1e8] flex-shrink-0 -mt-1">2</span>
                          <span className="leading-tight">Gjør gater tryggere for gående og syklende</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-2xl font-medium text-[#2b2b2b] dark:text-[#f5f1e8] flex-shrink-0 -mt-1">3</span>
                          <span className="leading-tight">Forbedre kollektivtilbudet med flere avganger og bedre dekning</span>
                        </li>
                      </ul>
                    </Link>
                  </div>
                </Tile>
                
                {/* Action Links */}
                <div className="grid grid-cols-2 gap-8 mb-6">
                  {/* Boligkrise */}
                  <Tile href="/boligkrisen" className="h-full">
                    <div className="h-full flex flex-col">
                      <TileTitle>Fremhevet sak</TileTitle>
                      <SeriffHeader size="sm" className="mb-1 group-hover:underline">
                        Boligkrisen i Oslo
                      </SeriffHeader>
                    </div>
                  </Tile>

                  {/* Ressurser */}
                  <Tile href="/ressurser" className="h-full">
                    <div className="h-full flex flex-col">
                      <TileTitle>Ressurser</TileTitle>
                      <SeriffHeader size="sm" className="mb-1 group-hover:underline">
                        Forskning og nyttige lenker
                      </SeriffHeader>
                    </div>
                  </Tile>
                </div>
              </div>
              
              {/* News Column - Right Side */}
              <div className="col-span-4 border-l border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 pl-8">
                <div className="mb-6 pb-6 border-b border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10">
                  <Link 
                    href="/nyheter" 
                    className="flex items-center justify-between group"
                  >
                    <SeriffHeader size="lg" className="group-hover:underline">
                      Nyheter og innlegg
                    </SeriffHeader>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 opacity-70 mt-1" fill="none" viewBox="0 0 24 24" stroke="#2b2b2b">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                
                <div className="space-y-8">
                  {recentPosts.slice(0, 3).map((post) => (
                    <Link key={post.id} href={`/nyheter/${post.id}`} className="block group">
                      <article>
                        <time className="text-xs text-[#2b2b2b] dark:text-[#a3b8b0] font-medium uppercase tracking-wider">
                          {new Date(post.date).toLocaleDateString('nb-NO', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                        <SeriffHeader size="sm" className="mt-1 mb-2 group-hover:underline">
                          {post.title}
                        </SeriffHeader>
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

            {/* [Mobile] Politikk tile */}
            <Tile href="/politikk">
              <TileTitle>Politikk</TileTitle>
              <SeriffHeader size="sm" className="mb-4 group-hover:underline">
                Våre kjernesaker
              </SeriffHeader>
              <ul className="space-y-4 text-[#2b2b2b] dark:text-[#f5f1e8] text-sm mb-4">
                <li className="flex items-start gap-3">
                  <span className="text-lg font-medium text-[#2b2b2b] dark:text-[#f5f1e8] flex-shrink-0 -mt-1">1</span>
                  <span className="leading-tight">Bygg flere boliger, både private og sosiale</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg font-medium text-[#2b2b2b] dark:text-[#f5f1e8] flex-shrink-0 -mt-1">2</span>
                  <span className="leading-tight">Gjør gater tryggere for gående og syklende</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg font-medium text-[#2b2b2b] dark:text-[#f5f1e8] flex-shrink-0 -mt-1">3</span>
                  <span className="leading-tight">Forbedre kollektivtilbudet med flere avganger og bedre dekning</span>
                </li>
              </ul>
              <ReadMoreLink text="Les mer om politikken vår" />
            </Tile>

            {/* [Mobile] Om oss tile */}
            <Tile href="/om">
              <TileTitle>Om oss</TileTitle>
              <SeriffHeader size="sm" className="mb-1 group-hover:underline">
                Hva er Bedre Oslo?
              </SeriffHeader>
              <ReadMoreLink text="Les mer om Bedre Oslo" className="mt-4" />
            </Tile>

            {/* [Mobile] News Section */}
            <div>
              <div className="mt-6 mb-4">
                <Link 
                  href="/nyheter"
                  className="flex items-center justify-between group">
                    <SeriffHeader size="lg" className="group-hover:underline">
                      Nyheter og innlegg
                    </SeriffHeader>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 opacity-70 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
              </div>

              {/* [Mobile] News carousel */}
              <div className="w-full h-full flex flex-col gap-0">
                <div className="flex-grow min-h-0">
                  <Carousel posts={recentPosts} />
                </div>
                <div className="flex justify-center items-center">
                  <CarouselNavigation totalSlides={recentPosts.length} />
                </div>
              </div>
            </div>
            
            {/* [Mobile] Action Links Grid */}
            <div className="flex flex-col gap-6">

              {/* Boligkrise */}
              <Tile href="/boligkrisen">
                <TileTitle>Fremhevet sak</TileTitle>
                <SeriffHeader size="sm" className="mb-1 group-hover:underline">
                  Boligkrisen i Oslo
                </SeriffHeader>
                <ReadMoreLink className="mt-4" />
              </Tile>

              {/* Ressurser */}
              <Tile href="/ressurser">
                <TileTitle>Ressurser</TileTitle>
                <SeriffHeader size="sm" className="mb-1 group-hover:underline">
                  Forskning og nyttige lenker
                </SeriffHeader>
                <ReadMoreLink className="mt-4" />
              </Tile>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
