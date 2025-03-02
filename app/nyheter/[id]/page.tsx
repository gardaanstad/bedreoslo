import { Playfair_Display, Inter } from 'next/font/google';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
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
  contentHtml: string;
  title: string;
  date: string;
  excerpt?: string;
  author?: string;
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
      className={`relative ${inter.className} min-h-screen overflow-x-hidden bg-[#f7f4ef] dark:bg-[#0a0a0a] pt-40`}
    >
      {/* Fixed Background Elements */}
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.15] dark:opacity-[0.08] -z-10" />
      <div 
        className="fixed inset-0 bg-gradient-to-b from-[#2b2b2b] to-transparent dark:from-black/40 dark:to-transparent opacity-[0.08] -z-10"
      />

      <article className="max-w-5xl mx-auto px-4 pb-16">
        {/* Back Link */}
        <Link 
          href="/nyheter" 
          className="text-[#2b2b2b]/70 dark:text-[#a3b8b0] mb-8 block hover:underline text-lg"
        >
          ← Tilbake til nyheter
        </Link>

        {/* Article Header */}
        <header className="mb-16">
          <h1 className={`${playfair.className} text-4xl sm:text-6xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-6`}>
            {post.title}
          </h1>
          <div className="h-px bg-[#2b2b2b]/20 dark:bg-[#f5f1e8]/20 w-full my-6" />
          <div className="flex items-center gap-3 text-xl text-[#2b2b2b]/70 dark:text-[#a3b8b0]">
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