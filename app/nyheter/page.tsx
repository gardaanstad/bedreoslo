import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';

interface PostData {
  id: string;
  title: string;
  date: string;
  image?: string;
  excerpt?: string;
}

async function getAllPosts(): Promise<PostData[]> {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        id,
        title: data.title,
        date: data.date,
        image: data.image,
        excerpt: data.excerpt,
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default async function NewsPage() {
  const allPosts = await getAllPosts();

  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-24">
        <header className="mb-10 sm:mb-14">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Nyheter og innlegg
          </h1>
          <div className="border-t border-foreground/15 my-4" />
          <p className="text-lg text-foreground/60 max-w-2xl">
            Følg med på det siste innen byutvikling og boligpolitikk i Oslo
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border-t-2 border-t-foreground/80 border border-foreground/10">
          {allPosts.map((post) => (
            <Link
              key={post.id}
              href={`/nyheter/${post.id}`}
              className="group block p-6 bg-background"
            >
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={600}
                  className="aspect-[4/3] w-full object-cover mb-4"
                />
              )}
              <time className="font-mono text-[10px] text-foreground/50 tracking-wider uppercase">
                {new Date(post.date).toLocaleDateString('nb-NO', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <h2 className="font-serif text-lg font-bold mt-2 group-hover:underline underline-offset-2 decoration-1">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="text-sm text-foreground/60 mt-2 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
