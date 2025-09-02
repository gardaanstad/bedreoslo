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
  
  const processedContent = await remark()
    .use(html)
    .process(content);
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
  
  return filenames.map((filename) => ({
    id: filename.replace(/\.md$/, ''),
  }));
}

type Props = {
  params: Promise<{ id: string }>
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const post = await getPost(id);
  
  return (
    <main 
      className={`relative min-h-screen overflow-x-hidden`}
    >
      <div 
        className="fixed inset-0 bg-gradient-to-b from-[#2b2b2b] to-transparent dark:from-black/40 dark:to-transparent opacity-[0.08] -z-10"
      />

      <article className="max-w-5xl mx-auto px-4 pb-16">
        {/* Back Link */}
        <Link 
          href="/nyheter" 
          className="text-[#2b2b2b]/70 dark:text-[#a3b8b0] mb-8 block hover:underline text-lg"
        >
          ← Tilbake
        </Link>

        {/* Article Header */}
        <header className="mb-16">
          <h1 className={`font-serif text-4xl sm:text-6xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-6`}>
            {post.title}
          </h1>
          
          {post.excerpt && (
            <p className="text-xl sm:text-2xl text-[#2b2b2b]/80 dark:text-[#a3b8b0] max-w-3xl mb-8">
              {post.excerpt}
            </p>
          )}

          <div className="flex items-center gap-3 text-lg text-[#2b2b2b]/70 dark:text-[#a3b8b0]">
            <time>
              {new Date(post.date).toLocaleDateString('nb-NO', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            {post.author && (
              <>
                <span>•</span>
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

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-3xl
            prose-headings:font-playfair prose-headings:text-[#2b2b2b] dark:prose-headings:text-[#f5f1e8]
            prose-p:text-[#2b2b2b]/90 dark:prose-p:text-[#a3b8b0] prose-p:leading-relaxed
            prose-a:text-[#2b2b2b] dark:prose-a:text-[#f5f1e8] prose-a:underline
            prose-strong:text-[#2b2b2b] dark:prose-strong:text-[#f5f1e8]
            prose-li:text-[#2b2b2b]/90 dark:prose-li:text-[#a3b8b0]
            prose-blockquote:border-[#2b2b2b]/20 dark:prose-blockquote:border-[#f5f1e8]/20
            prose-blockquote:text-[#2b2b2b]/70 dark:prose-blockquote:text-[#a3b8b0]"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
  );
}