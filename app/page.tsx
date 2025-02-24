import { Playfair_Display, Inter } from 'next/font/google';
import Link from 'next/link';
import './styles/gradients.css';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import HeroTile from '../components/hero-tile';

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

  // Sort posts by date and take the 3 most recent
  return allPostsData
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);
}

export default async function Home() {
  return (
    <main 
      className={`relative ${inter.className} min-h-screen overflow-x-hidden bg-[#f7f4ef] dark:bg-[#0a0a0a] pt-24`}
    >
      {/* Fixed Background Elements */}
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.15] dark:opacity-[0.08] -z-10" />
      <div 
        className="fixed inset-0 bg-gradient-to-b from-[#1a472a] to-transparent dark:from-black/40 dark:to-transparent opacity-[0.08] -z-10"
      />

      {/* Hero Section */}
      <HeroTile />

      {/* Main Content Grid */}
      <section className="relative w-full px-4 mt-8 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="md:col-span-4 space-y-8">
            {/* Argumentene */}
            <div className="relative group">
              <Link
                href="/historie"
                className="block h-full border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-8 bg-white/5 dark:bg-black/20"
              >
                <span className="block text-sm text-[#2c5545] dark:text-[#f5f1e8] mb-4 uppercase tracking-widest">
                  Argumentene
                </span>
                <h2 className={`text-2xl font-bold text-[#2c5545] dark:text-[#f5f1e8] mb-4 ${playfair.className} group-hover:underline`}>
                  Hvorfor YIMBY?
                </h2>
                <p className="text-[#2c5545] dark:text-[#f5f1e8]">
                  Argumentene for YIMBY og hvordan det kan løse boligmangelen i Oslo.
                </p>
              </Link>
            </div>

            {/* Bli Medlem */}
            <div className="relative group">
              <Link
                href="/bli-medlem"
                className="block h-full border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-8 bg-[#1a472a]"
              >
                <span className="block text-sm text-[#f5f1e8]/80 mb-4 uppercase tracking-widest">
                  Bli medlem
                </span>
                <h2 className={`text-2xl font-bold text-[#f5f1e8] mb-4 ${playfair.className} group-hover:underline`}>
                  Bli med i kampen
                </h2>
                <p className="text-[#f5f1e8]/90">
                  Din stemme teller. Sammen kan vi skape en by med plass til alle.
                </p>
              </Link>
            </div>
          </div>

          {/* Middle Column */}
          <div className="md:col-span-4 space-y-8">
            {/* Om oss */}
            <div className="relative group">
              <Link
                href="/om"
                className="block h-full border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-8 bg-white/5 dark:bg-black/20"
              >
                <span className="block text-sm text-[#2c5545] dark:text-[#f5f1e8] mb-4 uppercase tracking-widest">
                  Om oss
                </span>
                <h2 className={`text-2xl font-bold text-[#2c5545] dark:text-[#f5f1e8] mb-4 ${playfair.className} group-hover:underline`}>
                  Hvem er Oslo YIMBY?
                </h2>
                <p className="text-[#2c5545] dark:text-[#f5f1e8]">
                  Les om bevegelsen som vil løse boligkrisen i Oslo med beviste metoder.
                </p>
              </Link>
            </div>

            {/* Placeholder Tile */}
            <div className="relative group">
              <Link
                href="/kontakt"
                className="block h-full border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-8 bg-white/5 dark:bg-black/20"
              >
                <span className="block text-sm text-[#2c5545] dark:text-[#f5f1e8] mb-4 uppercase tracking-widest">
                  Kontakt
                </span>
                <h2 className={`text-2xl font-bold text-[#2c5545] dark:text-[#f5f1e8] mb-4 ${playfair.className} group-hover:underline`}>
                  Ta kontakt med oss
                </h2>
                <p className="text-[#2c5545] dark:text-[#f5f1e8]">
                  Har du spørsmål eller vil du bidra? Ta kontakt med Oslo YIMBY.
                </p>
              </Link>
            </div>
          </div>

          {/* News Column - Right */}
          <div className="md:col-span-4">
            <div className="h-full border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-8 bg-white/5 dark:bg-black/20 flex flex-col">
              <Link href="/nyheter" className={`flex items-center justify-between text-2xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-6 group ${playfair.className}`}>
                <span className="group-hover:underline">Nyheter og innlegg</span>
              </Link>
              <div className="divide-y divide-[#1a472a]/10 dark:divide-[#f5f1e8]/10 flex-1">
                {(await getRecentPosts()).slice(0, 2).map((post, index) => (
                  <div key={post.id}>
                    <Link href={`/nyheter/${post.id}`}>
                      <article className={`${index === 0 ? 'pb-5' : 'pt-5'} group`}>
                        <time className="block text-sm text-[#2c5545] dark:text-[#a3b8b0]">{new Date(post.date).toLocaleDateString('nb-NO', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}</time>
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
      </section>

      {/* Background texture enhancement */}
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.15] dark:opacity-[0.08] -z-10 mix-blend-multiply" />
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.1] dark:opacity-[0.05] -z-10 scale-150 mix-blend-overlay" />
    </main>
  );
}
