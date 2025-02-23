import { Playfair_Display, Inter } from 'next/font/google';
import Link from 'next/link';
import './styles/gradients.css';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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
      <section className="relative w-full px-4 pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-16 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
            <div className="relative">
              <h1 className={`${playfair.className} text-6xl sm:text-8xl font-bold tracking-tight leading-[1.1] text-center gradient-text`}>
                For en by med<br />plass til alle
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="relative w-full px-4 mt-8 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest News */}
          <div className="lg:col-span-2 h-full">
            <div className="h-full border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-8 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
              <Link href="/nyheter" className={`text-3xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-8 block hover:underline ${playfair.className}`}>
                Nyheter og innlegg
              </Link>
              <div className="space-y-8">
                {(await getRecentPosts()).map((post) => (
                  <article key={post.id} className="border-b border-[#1a472a]/10 dark:border-[#f5f1e8]/10 pb-8 last:border-0">
                    <Link href={`/nyheter/${post.id}`}>
                      <h3 className={`text-xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-2 hover:underline ${playfair.className}`}>
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-[#2c5545] dark:text-[#a3b8b0] mb-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-[#2c5545] dark:text-[#a3b8b0]">
                      <span>{post.author}</span>
                      <span>•</span>
                      <time>{new Date(post.date).toLocaleDateString('nb-NO', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</time>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 space-y-8">
            {/* Our Story */}
            <div>
              <Link
                href="/historie"
                className="block h-full border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-8 bg-white/5 dark:bg-black/20 backdrop-blur-sm group"
              >
                <span className="block text-sm text-[#2c5545] dark:text-[#a3b8b0] mb-4 uppercase tracking-widest">
                  Vår historie
                </span>
                <h2 className={`text-2xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-4 ${playfair.className} group-hover:underline`}>
                  Boligkrisen i Oslo
                </h2>
                <p className="text-[#2c5545] dark:text-[#a3b8b0]">
                  Les om hvordan boligmangelen påvirker Oslo og hvordan vi kan løse krisen sammen.
                </p>
              </Link>
            </div>

            {/* About Us */}
            <div>
              <Link
                href="/om"
                className="block h-full border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-8 bg-white/5 dark:bg-black/20 backdrop-blur-sm group"
              >
                <span className="block text-sm text-[#2c5545] dark:text-[#a3b8b0] mb-4 uppercase tracking-widest">
                  Om oss
                </span>
                <h2 className={`text-2xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-4 ${playfair.className} group-hover:underline`}>
                  Hvem er YIMBY Oslo?
                </h2>
                <p className="text-[#2c5545] dark:text-[#a3b8b0]">
                  Vi er en grasrotbevegelse som jobber for en mer inkluderende byutvikling i Oslo.
                </p>
              </Link>
            </div>

            {/* Join Us */}
            <div className="relative group">
              <Link
                href="/bli-medlem"
                className="block h-full border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 p-8 bg-[#1a472a] backdrop-blur-sm"
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
        </div>
      </section>

      {/* Background texture enhancement */}
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.15] dark:opacity-[0.08] -z-10 mix-blend-multiply" />
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.1] dark:opacity-[0.05] -z-10 scale-150 mix-blend-overlay" />
    </main>
  );
}
