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
          <div className="hidden md:block">
            {/* Desktop YIMBY Introduction */}
            <div className="mb-10">
              <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
                <p className={`text-[#2c5545] dark:text-[#f5f1e8]/90 text-lg leading-relaxed text-center`}>
                  <span className="font-semibold">YIMBY</span> står for &ldquo;Yes In My Back Yard&rdquo; — vi som ønsker 
                  mer og tettere byutvikling i Oslo for å skape en mer bærekraftig, mangfoldig, og 
                  rimelig by.
                </p>
              </div>
            </div>
            
            {/* Main Grid - Redesigned newspaper-style layout */}
            <div className="grid grid-cols-12 gap-6">
              {/* Left Column - Main content and feature */}
              <div className="col-span-8">
                {/* Featured Article - Main coverage */}
                <div className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 bg-white/5 dark:bg-black/20 p-6 mb-6">
                  <div className="flex gap-8">
                    {/* Left - Title and intro */}
                    <Link 
                        href="/argument" 
                        className="w-1/2 group"
                      >
                        <span className="text-sm text-[#1a472a] dark:text-[#f5f1e8]/70 font-medium uppercase tracking-wider">Hovedsak</span>
                        <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mt-2 mb-4 leading-tight group-hover:underline`}>
                          Hvorfor trenger Oslo YIMBY?
                        </h2>
                        <p className="text-[#2c5545] dark:text-[#f5f1e8]/80 text-base leading-relaxed mb-4">
                          Boligprisene i Oslo har steget med 110% siden 2010, mens lønningene bare har økt med 32%. 
                          Boligkrisen rammer særlig unge og marginaliserte grupper. YIMBY fokuserer på forskningsbaserte løsninger for å øke boligtilbudet.
                        </p>
                    </Link>
                    
                    {/* Right - Highlight box */}
                    <div className="w-1/2 bg-[#1a472a]/10 dark:bg-[#1a472a]/20 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className={`${playfair.className} text-xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-4`}>Grunnlaget vårt</h3>
                        <ul className="space-y-3 text-[#2c5545] dark:text-[#f5f1e8]/80">
                          <li className="flex items-start">
                            <span className="inline-block w-6 h-6 bg-[#1a472a] text-white flex-shrink-0 flex items-center justify-center mr-2">1</span>
                            <span>Økt boligbygging gjør eksisterende boliger <strong>billigere</strong></span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-6 h-6 bg-[#1a472a] text-white flex-shrink-0 flex items-center justify-center mr-2">2</span>
                            <span>Tettere byutvikling <strong>reduserer</strong> klimagassutslipp</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-6 h-6 bg-[#1a472a] text-white flex-shrink-0 flex items-center justify-center mr-2">3</span>
                            <span>Unge og lavinntektsgrupper blir rammet <strong>hardest</strong> av boligkrisen</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Action Links - Incorporating functionality from the removed tiles */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                  {/* Bli Medlem */}
                  <div className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 g-white/5 dark:bg-black/20 p-6">
                    <Link
                      href="/bli-medlem"
                      className="group flex flex-col h-full"
                    >
                      <span className="block text-sm text-[#2c5545] dark:text-[#f5f1e8]/70 uppercase tracking-wider mb-2 font-medium">
                        Bli medlem
                      </span>
                      <h3 className={`text-xl font-bold text-[#2c5545] dark:text-[#f5f1e8] mb-2 leading-tight ${playfair.className} group-hover:underline`}>
                        Bli med i kampen
                      </h3>
                      <p className="text-[#2c5545] dark:text-[#f5f1e8]/80 text-sm mb-auto">
                        Din stemme teller. Sammen kan vi skape en by med plass til alle.
                      </p>
                      <span className="inline-flex items-center text-[#2c5545] dark:text-[#f5f1e8] text-sm font-medium mt-4">
                        Meld deg inn
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                  
                  {/* Contact and About Links */}
                  <div className="border border-[#1a472a]/20 dark:border-[#f5f1e8]/10 bg-white/5 dark:bg-black/20 p-6 flex flex-col justify-between">
                    <Link
                      href="/om"
                      className="group mb-6"
                    >
                      <span className="block text-sm text-[#2c5545] dark:text-[#f5f1e8]/70 uppercase tracking-wider mb-1 font-medium">
                        Om oss
                      </span>
                      <h3 className={`text-lg font-bold text-[#2c5545] dark:text-[#f5f1e8] mb-1 leading-tight ${playfair.className} group-hover:underline`}>
                        Hvem er Oslo YIMBY?
                      </h3>
                    </Link>
                    
                    <div className="border-t border-[#1a472a]/20 dark:border-[#f5f1e8]/10 pt-6">
                      <Link
                        href="/kontakt"
                        className="group"
                      >
                        <span className="block text-sm text-[#2c5545] dark:text-[#f5f1e8]/70 uppercase tracking-wider mb-1 font-medium">
                          Kontakt
                        </span>
                        <h3 className={`text-lg font-bold text-[#2c5545] dark:text-[#f5f1e8] mb-1 leading-tight ${playfair.className} group-hover:underline`}>
                          Ta kontakt med oss
                        </h3>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* News Column - Right Side */}
              <div className="col-span-4 border-l border-[#1a472a]/20 dark:border-[#f5f1e8]/10 pl-6">
                <div className="mb-4 pb-4 border-b border-[#1a472a]/20 dark:border-[#f5f1e8]/10">
                  <Link 
                    href="/nyheter" 
                    className={`flex items-center justify-between text-xl font-bold text-[#1a472a] dark:text-[#f5f1e8] ${playfair.className} hover:underline`}
                  >
                    Nyheter og innlegg
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                
                <div className="space-y-6">
                  {recentPosts.slice(0, 4).map((post) => (
                    <Link key={post.id} href={`/nyheter/${post.id}`} className="block group">
                      <article>
                        <time className="text-xs text-[#2c5545] dark:text-[#a3b8b0] font-medium uppercase tracking-wider">
                          {new Date(post.date).toLocaleDateString('nb-NO', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                        <h3 className={`text-lg font-bold text-[#1a472a] dark:text-[#f5f1e8] mt-1 mb-2 leading-tight ${playfair.className} group-hover:underline`}>
                          {post.title}
                        </h3>
                        <p className="text-[#2c5545] dark:text-[#a3b8b0] text-sm line-clamp-2">
                          {post.excerpt}
                        </p>
                      </article>
                    </Link>
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
                href="/argument"
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
