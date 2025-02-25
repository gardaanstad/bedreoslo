import { Playfair_Display, Inter } from 'next/font/google';
import Link from 'next/link';
import './styles/gradients.css';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import NewsCarousel from '../components/news-carousel';

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
  
  return (
    <main 
      className={`relative ${inter.className} min-h-screen overflow-x-hidden bg-[#f7f4ef] dark:bg-[#0a0a0a] pt-24`}
    >
      {/* Fixed Background Elements */}
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.15] dark:opacity-[0.08] -z-10" />
      <div 
        className="fixed inset-0 bg-gradient-to-b from-[#1a472a] to-transparent dark:from-black/40 dark:to-transparent opacity-[0.08] -z-10"
      />

      {/* Hero Section - Modified for mobile with no border and no background */}
      <section className="relative w-full px-4 pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden md:border md:bg-white/5 md:dark:bg-black/20 border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-6 sm:p-16">
            <div className="relative">
              <h1 className={`${playfair.className} text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[1.1] text-center gradient-text`}>
                For en by med plass til alle
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="relative w-full px-4 mt-8 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {/* Left/Center 2x2 Grid (2/3 width) */}
            <div className="col-span-2 grid grid-cols-2 gap-6">
              
              {/* Argumentene Tile */}
              <div className="relative group h-full">
                <Link
                  href="/historie"
                  className="block h-full border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-8 bg-white/5 dark:bg-black/20 flex flex-col"
                >
                  <span className="block text-sm text-[#2c5545] dark:text-[#f5f1e8] mb-4 uppercase tracking-widest">
                    Argumentene
                  </span>
                  <h2 className={`text-2xl font-bold text-[#2c5545] dark:text-[#f5f1e8] mb-4 ${playfair.className} group-hover:underline`}>
                    Hvorfor YIMBY?
                  </h2>
                  <p className="text-[#2c5545] dark:text-[#f5f1e8] mt-auto">
                    Hvordan YIMBY kan løse boligkrisen i Oslo.
                  </p>
                </Link>
              </div>

              {/* Bli Medlem Tile */}
              <div className="relative group h-full">
                <Link
                  href="/bli-medlem"
                  className="block h-full border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-8 bg-[#1a472a] flex flex-col"
                >
                  <span className="block text-sm text-[#f5f1e8]/80 mb-4 uppercase tracking-widest">
                    Bli medlem
                  </span>
                  <h2 className={`text-2xl font-bold text-[#f5f1e8] mb-4 ${playfair.className} group-hover:underline`}>
                    Bli med i kampen
                  </h2>
                  <p className="text-[#f5f1e8]/90 mt-auto">
                    Din stemme teller. Sammen kan vi skape en by med plass til alle.
                  </p>
                </Link>
              </div>
              
              {/* Om oss Tile */}
              <div className="relative group h-full">
                <Link
                  href="/om"
                  className="block h-full border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-8 bg-white/5 dark:bg-black/20 flex flex-col"
                >
                  <span className="block text-sm text-[#2c5545] dark:text-[#f5f1e8] mb-4 uppercase tracking-widest">
                    Om oss
                  </span>
                  <h2 className={`text-2xl font-bold text-[#2c5545] dark:text-[#f5f1e8] mb-4 ${playfair.className} group-hover:underline`}>
                    Hvem er Oslo YIMBY?
                  </h2>
                  <p className="text-[#2c5545] dark:text-[#f5f1e8] mt-auto">
                    Les om bevegelsen som vil løse boligkrisen i Oslo med vitenskapelig beviste metoder.
                  </p>
                </Link>
              </div>
              
              {/* Kontakt Tile */}
              <div className="relative group h-full">
                <Link
                  href="/kontakt"
                  className="block h-full border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-8 bg-white/5 dark:bg-black/20 flex flex-col"
                >
                  <span className="block text-sm text-[#2c5545] dark:text-[#f5f1e8] mb-4 uppercase tracking-widest">
                    Kontakt
                  </span>
                  <h2 className={`text-2xl font-bold text-[#2c5545] dark:text-[#f5f1e8] mb-4 ${playfair.className} group-hover:underline`}>
                    Ta kontakt med oss
                  </h2>
                  <p className="text-[#2c5545] dark:text-[#f5f1e8] mt-auto">
                    Har du spørsmål eller vil du bidra? Ta kontakt med Oslo YIMBY.
                  </p>
                </Link>
              </div>
            </div>

            {/* News Column - Right (1/3 width) */}
            <div className="relative h-full col-span-1">
              <div className="h-full border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-8 bg-white/5 dark:bg-black/20 flex flex-col">
                <Link href="/nyheter" className={`flex items-center justify-between text-2xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-6 ${playfair.className} hover:underline`}>
                  Nyheter og innlegg
                </Link>
                
                <div className="divide-y divide-[#1a472a]/20 dark:divide-[#f5f1e8]/10 flex-1">
                  {recentPosts.slice(0, 2).map((post, index) => (
                    <div key={post.id}>
                      <Link href={`/nyheter/${post.id}`}>
                        <article className={`${index === 0 ? 'pb-5' : 'pt-5'} group`}>
                          <time className="block text-sm text-[#2c5545] dark:text-[#a3b8b0]">
                            {new Date(post.date).toLocaleDateString('nb-NO', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </time>
                          <h3 className={`text-lg font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-1 hover:underline ${playfair.className} group-hover:underline`}>
                            {post.title}
                          </h3>
                          <p className="text-[#2c5545] dark:text-[#a3b8b0] text-sm">
                            {post.excerpt}
                          </p>
                        </article>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Improved spacing and consistency */}
          <div className="md:hidden flex flex-col gap-7">
            {/* Mobile YIMBY Introduction */}
            <div className="mt-0">
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <p className={`text-[#2c5545] dark:text-[#f5f1e8]/80 text-base leading-relaxed`}>
                  <span className="font-semibold">YIMBY</span> står for &ldquo;Yes In My Back Yard&rdquo; — vi som ønsker 
                  mer og tettere byutvikling i Oslo for å skape en mer bærekraftig, mangfoldig, og 
                  rimelig by.
                </p>
              </div>
            </div>
            
            {/* Emphasized Argumentene Card - improved with subtle clickable indicators */}
            <div>
              <Link
                href="/historie"
                className="block w-full border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 p-6 bg-[#1a472a]/10 dark:bg-[#1a472a]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a472a] relative overflow-hidden group transition-all duration-200 hover:bg-[#1a472a]/20 dark:hover:bg-[#1a472a]/30 hover:border-[#1a472a]/40 dark:hover:border-[#f5f1e8]/20 hover:shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#1a472a] dark:bg-[#1a472a] p-2.5 flex-shrink-0 transition-transform duration-200 group-hover:translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="transition-transform duration-200 group-hover:translate-x-0.5">
                    <span className="block text-sm text-[#2c5545] dark:text-[#f5f1e8]/80 mb-1 uppercase tracking-wider font-medium">
                      Forstå YIMBY
                    </span>
                    <h3 className={`text-xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-2 ${playfair.className} group-hover:underline`}>
                      Hvorfor trenger Oslo YIMBY?
                    </h3>
                    <p className="text-[#2c5545] dark:text-[#f5f1e8]/80 text-base">
                      Se våre forskningsbaserte løsninger på boligkrisen.
                    </p>
                  </div>
                </div>
                {/* Subtle chevron indicator that is always visible but more prominent on hover */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1a472a] dark:text-[#f5f1e8]/70 absolute bottom-4 right-4 opacity-30 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            {/* Simple fact or statistic element */}
            {/* <div className="py-2">
              <div className="border-l-4 border-[#1a472a]/40 dark:border-[#1a472a]/60 pl-4 py-1">
                <p className="text-[#2c5545] dark:text-[#f5f1e8]/80 text-base italic">
                  Oslo trenger <span className="font-semibold">25 000</span> nye boliger innen 2030 for å møte etterspørselen.
                </p>
              </div>
            </div> */}
            
            {/* News Carousel for mobile - now constrained to navbar width */}
            <div className="mt-2">
              <div className="flex items-center justify-between mb-4">
                <Link 
                href="/nyheter"
                className={`text-xl font-bold text-[#1a472a] dark:text-[#f5f1e8] ${playfair.className}`}>
                  Nyheter og innlegg
                </Link>
              </div>
              
              {/* Carousel wrapper with same width as navbar */}
              <div className="w-full">
                <NewsCarousel posts={recentPosts} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background texture enhancement */}
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.15] dark:opacity-[0.08] -z-10 mix-blend-multiply" />
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.1] dark:opacity-[0.05] -z-10 scale-150 mix-blend-overlay" />
    </main>
  );
}
