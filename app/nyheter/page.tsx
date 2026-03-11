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
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Nyheter og innlegg
          </h1>
        </header>

        <div className="border-t-2 border-foreground/80 pt-5 divide-y divide-foreground/10">
          {allPosts.map((post) => (
            <Link
              key={post.id}
              href={`/nyheter/${post.id}`}
              className="group block py-3"
            >
                <h2 className="font-serif text-[15px] sm:text-base font-bold leading-snug group-hover:underline underline-offset-2 decoration-1">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-sm text-foreground/50 mt-1 line-clamp-1">
                    {post.excerpt}
                  </p>
                )}
                <div className="flex items-center gap-1.5 mt-1 font-mono text-[10px] text-foreground/40 tracking-wider">
                  <time>
                    {new Date(post.date).toLocaleDateString('nb-NO', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </time>
                  {post.author && (
                    <>
                      <span className="text-foreground/20">&middot;</span>
                      <span>{post.author}</span>
                    </>
                  )}
                </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
