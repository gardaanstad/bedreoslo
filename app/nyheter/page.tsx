import { Playfair_Display, Inter } from 'next/font/google';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

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
}

async function getAllPosts(): Promise<PostData[]> {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const { data } = matter(fileContents);

      return {
        id,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export default async function NewsPage() {
  const allPosts = await getAllPosts();
  
  return (
    <main 
      className={`relative ${inter.className} min-h-screen overflow-x-hidden bg-[#f7f4ef] dark:bg-[#0a0a0a] pt-40`}
    >
      {/* Fixed Background Elements */}
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.15] dark:opacity-[0.08] -z-10" />
      <div 
        className="fixed inset-0 bg-gradient-to-b from-[#1a472a] to-transparent dark:from-black/40 dark:to-transparent opacity-[0.08] -z-10"
      />

      <div className="max-w-5xl mx-auto px-4 pb-16">
        {/* Page Header */}
        <header className="mb-16 text-center">
          <h1 className={`${playfair.className} text-4xl sm:text-6xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-6`}>
            Nyheter og oppdateringer
          </h1>
          <p className="text-xl text-[#2c5545] dark:text-[#a3b8b0] max-w-2xl mx-auto">
            Følg med på det siste innen byutvikling og boligpolitikk i Oslo
          </p>
        </header>

        {/* Articles Grid */}
        <div className="grid gap-8">
          {allPosts.map((post) => (
            <Link 
              key={post.id}
              href={`/nyheter/${post.id}`}
              className="block group"
            >
              <article 
                className="border border-[#1a472a]/10 dark:border-[#f5f1e8]/10 bg-white/5 dark:bg-black/20 backdrop-blur-sm p-8 relative"
              >
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.1] mix-blend-overlay" />
                <div className="relative z-10">
                  <time className="block text-lg text-[#2c5545] dark:text-[#a3b8b0] mb-4">
                    {new Date(post.date).toLocaleDateString('nb-NO', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <h2 className={`${playfair.className} text-2xl sm:text-3xl font-bold text-[#1a472a] dark:text-[#f5f1e8] mb-4 group-hover:underline`}>
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-lg text-[#2c5545] dark:text-[#a3b8b0]">
                      {post.excerpt}
                    </p>
                  )}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
