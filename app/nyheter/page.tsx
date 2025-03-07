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
      className={`relative ${inter.className} min-h-screen overflow-x-hidden`}
    >

      <div className="max-w-5xl mx-auto px-4 pb-16">
        {/* Page Header */}
        <header className="mb-8 md:mb-16">
          <h1 className={`${playfair.className} text-3xl sm:text-4xl md:text-6xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-4 md:mb-6`}>
            Nyheter og innlegg
          </h1>
          <div className="h-px bg-[#2b2b2b]/20 dark:bg-[#f5f1e8]/20 w-full my-4 md:my-6" />
          <p className="text-lg md:text-xl text-[#2b2b2b]/70 dark:text-[#a3b8b0] max-w-2xl">
            Følg med på det siste innen byutvikling og boligpolitikk i Oslo
          </p>
        </header>

        {/* Articles Grid */}
        <div className="grid gap-4 sm:gap-8">
          {allPosts.map((post) => (
            <Link 
              key={post.id}
              href={`/nyheter/${post.id}`}
              className="block group"
            >
              <article 
                className="border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 bg-[#efece5] dark:bg-black/20 backdrop-blur-sm p-4 sm:p-6 md:p-8 relative"
              >
                <div className="relative z-10">
                  <time className="block text-sm sm:text-base md:text-lg text-[#2b2b2b]/70 dark:text-[#a3b8b0] mb-2 sm:mb-4">
                    {new Date(post.date).toLocaleDateString('nb-NO', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <h2 className={`${playfair.className} text-lg sm:text-xl md:text-3xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-2 sm:mb-4 group-hover:underline`}>
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-sm sm:text-base md:text-lg text-[#2b2b2b]/70 dark:text-[#a3b8b0]">
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
