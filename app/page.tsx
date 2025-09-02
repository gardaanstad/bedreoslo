import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Carousel from '@/components/carousel';
import CarouselNavigation from '@/components/carousel-navigation';
import SeriffHeader from '@/components/SeriffHeader';
import HeroHeader from '@/components/HeroHeader';

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

  // Sort posts by date and take the 5 most recent for the mobile carousel
  return allPostsData
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 5);
}

export default async function Home() {
  const recentPosts = await getRecentPosts();

  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative md:pb-8">
            <div className="md:flex md:flex-col md:items-center">
              <div className="w-full">
                <HeroHeader>
                  For en by med plass til alle
                </HeroHeader>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Politikk */}
      <section className="relative w-full px-4 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-24 md:space-y-32">
            {/* Boligpolitikk - Left aligned */}
            <div className="md:flex md:items-start md:gap-12">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <h2
                  className={`text-3xl sm:text-4xl text-[#2b2b2b] dark:text-[#f5f1e8] font-serif`}
                >
                  Boligpolitikk
                </h2>
                <p className="mt-4 text-lg text-[#2b2b2b]/70 dark:text-[#a3b8b0]">
                  Oslo trenger drastiske tiltak for å løse boligkrisen.
                </p>
              </div>
              <div className="md:w-2/3 space-y-8">
                <div className="p-8 bg-transparent dark:bg-black/20 backdrop-blur-sm border border-[#1a472a]/20 dark:border-[#f5f1e8]/10">
                  <div className="text-lg text-[#2b2b2b]/90 dark:text-[#a3b8b0] leading-relaxed space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="w-6 h-6 bg-[#1a472a] font-mono text-white flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                          1
                        </span>
                        <div>
                          <h3 className="text-[#2b2b2b] dark:text-[#f5f1e8]">
                            Bygg tettere og høyere
                          </h3>
                          <p className="text-[#2b2b2b]/90 dark:text-[#a3b8b0] mt-1">
                            Opphev småhusplanen og la utbyggere bygge tettere og
                            høyere i hele byen. Dette vil gi flere boliger der
                            folk vil bo.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <span className="w-6 h-6 bg-[#1a472a] font-mono text-white flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                          2
                        </span>
                        <div>
                          <h3 className="text-[#2b2b2b] dark:text-[#f5f1e8]">
                            Forenkle reguleringsprosessen
                          </h3>
                          <p className="text-[#2b2b2b]/90 dark:text-[#a3b8b0] mt-1">
                            Dagens reguleringsprosess tar ofte 7-10 år. Dette
                            må forenkles for å øke byggetakten.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <span className="w-6 h-6 bg-[#1a472a] font-mono text-white flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                          3
                        </span>
                        <div>
                          <h3 className="text-[#2b2b2b] dark:text-[#f5f1e8]">
                            Fortett rundt kollektivknutepunkter
                          </h3>
                          <p className="text-[#2b2b2b]/90 dark:text-[#a3b8b0] mt-1">
                            Hver t-banestasjon bør ha høy tetthet av boliger.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Samferdselspolitikk - Right aligned */}
            <div className="md:flex md:flex-row-reverse md:items-start md:gap-12">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <h2
                  className={`text-3xl sm:text-4xl text-[#2b2b2b] dark:text-[#f5f1e8] font-serif`}
                >
                  Samferdselspolitikk
                </h2>
                <p className="mt-4 text-lg text-[#2b2b2b]/70 dark:text-[#a3b8b0]">
                  Vi trenger en omlegging av hvordan vi bruker gatene
                  våre, fra å prioritere biler til å prioritere mennesker.
                </p>
              </div>
              <div className="md:w-2/3 space-y-8">
                <div className="p-8 bg-transparent dark:bg-black/20 backdrop-blur-sm border border-[#1a472a]/20 dark:border-[#f5f1e8]/10">
                  <div className="text-lg text-[#2b2b2b]/90 dark:text-[#a3b8b0] leading-relaxed space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="w-6 h-6 bg-[#1a472a] font-mono text-white flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                          1
                        </span>
                        <div>
                          <h3 className="text-[#2b2b2b] dark:text-[#f5f1e8]">
                            Prioriter gående og syklende
                          </h3>
                          <p className="text-[#2b2b2b]/90 dark:text-[#a3b8b0] mt-1">
                            Utvid fortau og sykkelfelt på bekostning av
                            parkeringsplasser og kjørefelt.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <span className="w-6 h-6 bg-[#1a472a] font-mono text-white flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                          2
                        </span>
                        <div>
                          <h3 className="text-[#2b2b2b] dark:text-[#f5f1e8]">
                            Bedre kollektivtilbud
                          </h3>
                          <p className="text-[#2b2b2b]/90 dark:text-[#a3b8b0] mt-1">
                            Øk frekvensen på t-bane, trikk og buss. Invester i ny infrastruktur.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <span className="w-6 h-6 bg-[#1a472a] font-mono text-white flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                          3
                        </span>
                        <div>
                          <h3 className="text-[#2b2b2b] dark:text-[#f5f1e8]">
                            Reduser gjennomkjøring
                          </h3>
                          <p className="text-[#2b2b2b]/90 dark:text-[#a3b8b0] mt-1">
                            Steng boliggater for gjennomkjøring og gjør sentrum bilfritt.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Byutvikling - Left aligned */}
            <div className="md:flex md:items-start md:gap-12">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <h2
                  className={`text-3xl sm:text-4xl text-[#2b2b2b] dark:text-[#f5f1e8] font-serif`}
                >
                  Byutvikling
                </h2>
                <p className="mt-4 text-lg text-[#2b2b2b]/70 dark:text-[#a3b8b0]">
                  God byutvikling handler om mer enn bare bygninger.
                </p>
              </div>
              <div className="md:w-2/3 space-y-8">
                <div className="p-8 bg-transparent dark:bg-black/20 backdrop-blur-sm border border-[#1a472a]/20 dark:border-[#f5f1e8]/10">
                  <div className="text-lg text-[#2b2b2b]/90 dark:text-[#a3b8b0] leading-relaxed space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="w-6 h-6 bg-[#1a472a] font-mono text-white flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                          1
                        </span>
                        <div>
                          <h3 className="text-[#2b2b2b] dark:text-[#f5f1e8]">
                            Aktive førsteetasjer
                          </h3>
                          <p className="text-[#2b2b2b]/90 dark:text-[#a3b8b0] mt-1">
                            Krav om næringslokaler i førsteetasje i sentrale
                            strøk for å skape levende gater.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <span className="w-6 h-6 bg-[#1a472a] font-mono text-white flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                          2
                        </span>
                        <div>
                          <h3 className="text-[#2b2b2b] dark:text-[#f5f1e8]">
                            Flere møteplasser
                          </h3>
                          <p className="text-[#2b2b2b]/90 dark:text-[#a3b8b0] mt-1">
                            Utvid og oppgrader parker, torg og andre offentlige
                            rom.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <span className="w-6 h-6 bg-[#1a472a] font-mono text-white flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                          3
                        </span>
                        <div>
                          <h3 className="text-[#2b2b2b] dark:text-[#f5f1e8]">
                            Grønnere by
                          </h3>
                          <p className="text-[#2b2b2b]/90 dark:text-[#a3b8b0] mt-1">
                            Plant flere gatetrær og lag grønne korridorer gjennom
                            byen.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="relative w-full px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link
              href="/nyheter"
              className="flex items-center group"
            >
              <SeriffHeader size="lg" className="group-hover:underline">
                Nyheter og innlegg
              </SeriffHeader>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-4 opacity-70 mt-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <div className="h-px bg-[#2b2b2b]/20 dark:bg-[#f5f1e8]/20 w-full mt-4" />
          </div>

          {/* Desktop News Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.slice(0, 3).map((post) => (
              <Link
                key={post.id}
                href={`/nyheter/${post.id}`}
                className="block group p-6 bg-transparent dark:bg-black/20 backdrop-blur-sm border border-[#1a472a]/20 dark:border-[#f5f1e8]/10"
              >
                <article>
                  <time className="text-xs text-[#2b2b2b]/80 dark:text-[#a3b8b0] font-medium uppercase tracking-wider">
                    {new Date(post.date).toLocaleDateString('nb-NO', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <h3
                    className={`font-serif text-xl mt-2 mb-2 text-[#2b2b2b] dark:text-[#f5f1e8] group-hover:underline`}
                  >
                    {post.title}
                  </h3>
                  <p className="text-[#2b2b2b]/80 dark:text-[#a3b8b0] text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                </article>
              </Link>
            ))}
          </div>

          {/* Mobile News Carousel */}
          <div className="md:hidden">
            <Carousel posts={recentPosts} />
            <div className="mt-4 flex justify-center items-center">
              <CarouselNavigation totalSlides={recentPosts.length} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}