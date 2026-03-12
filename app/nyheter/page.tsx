import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface PostData {
  id: string;
  title: string;
  date: string;

  excerpt?: string;
  author?: string;
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

        excerpt: data.excerpt,
        author: data.author,
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default async function NewsPage() {
  const allPosts = await getAllPosts();

  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-24">
        <header className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Nyheter og innlegg
          </h1>
        </header>

        <div className="border-t border-foreground/80 divide-y divide-foreground/10">
          {allPosts.map((post) => (
            <Link
              key={post.id}
              href={`/nyheter/${post.id}`}
              className="group block py-6"
            >
                <time className="font-mono text-[10px] text-foreground/50 tracking-wider uppercase">
                  {new Date(post.date).toLocaleDateString('nb-NO', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                  {post.author && (
                    <> · {post.author}</>
                  )}
                </time>
                <h2 className="font-serif text-lg font-bold mt-1 mb-1 group-hover:underline underline-offset-2 decoration-1">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-sm text-foreground/60 line-clamp-3 leading-relaxed">
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
