import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';
import Image from 'next/image';

interface PostData {
  id: string;
  contentHtml: string;
  title: string;
  date: string;
  excerpt?: string;
  author?: string;
  image?: string;
}

async function getPost(id: string): Promise<PostData> {
  const fullPath = path.join(process.cwd(), 'posts', `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    author: data.author,
    image: data.image,
  };
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .filter((f) => f.endsWith('.md'))
    .map((filename) => ({
      id: filename.replace(/\.md$/, ''),
    }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <main>
      <article className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-24">
        <nav className="flex items-center gap-1.5 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-mono mb-4">
          <Link
            href="/"
            className="text-foreground/40 hover:text-foreground/70 transition-colors duration-150"
          >
            Hjem
          </Link>
          <span className="text-foreground/25">/</span>
          <Link
            href="/nyheter"
            className="text-foreground/40 hover:text-foreground/70 transition-colors duration-150"
          >
            Nyheter
          </Link>
          <span className="text-foreground/25">/</span>
        </nav>

        <header className="mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-xl text-foreground/60 max-w-2xl mb-6 leading-relaxed">
              {post.excerpt}
            </p>
          )}

          <div className="border-t border-foreground/10 pt-4 flex items-center gap-3 text-sm text-foreground/50 font-mono">
            <time>
              {new Date(post.date).toLocaleDateString('nb-NO', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {post.author && (
              <>
                <span className="text-foreground/10">&middot;</span>
                <span>{post.author}</span>
              </>
            )}
          </div>

          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[60vh] object-cover mt-8"
            />
          )}
        </header>

        <div
          className="prose prose-lg max-w-none
            prose-headings:font-serif prose-headings:font-bold
            prose-p:text-foreground/75 prose-p:leading-[1.8]
            prose-a:text-accent prose-a:underline prose-a:underline-offset-2 prose-a:decoration-1
            prose-strong:text-foreground
            prose-li:text-foreground/75
            prose-blockquote:border-foreground/10
            prose-blockquote:text-foreground/70
            prose-blockquote:font-serif prose-blockquote:not-italic"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
  );
}
