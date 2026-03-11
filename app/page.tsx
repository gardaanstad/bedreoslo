import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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

  return allPostsData
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);
}

const policies = [
  {
    title: 'Boligpolitikk',
    subtitle: 'Oslo trenger drastiske tiltak for å løse boligkrisen.',
    href: '/boligkrisen',
    points: [
      {
        title: 'Bygg tettere og høyere',
        desc: 'Opphev småhusplanen og la utbyggere bygge tettere i hele byen.',
      },
      {
        title: 'Forenkle reguleringsprosessen',
        desc: 'Dagens prosess tar 7–10 år. Det må forenkles drastisk.',
      },
      {
        title: 'Fortett rundt kollektivknutepunkter',
        desc: 'Hver t-banestasjon bør ha høy tetthet av boliger.',
      },
    ],
  },
  {
    title: 'Samferdsel',
    subtitle: 'Gater for mennesker, ikke bare biler.',
    href: '/byrom',
    points: [
      {
        title: 'Prioriter gående og syklende',
        desc: 'Utvid fortau og sykkelfelt på bekostning av parkeringsplasser.',
      },
      {
        title: 'Bedre kollektivtilbud',
        desc: 'Øk frekvensen på t-bane, trikk og buss.',
      },
      {
        title: 'Reduser gjennomkjøring',
        desc: 'Steng boliggater for gjennomkjøring og gjør sentrum bilfritt.',
      },
    ],
  },
  {
    title: 'Byutvikling',
    subtitle: 'God byutvikling handler om mer enn bygninger.',
    href: '/byrom',
    points: [
      {
        title: 'Aktive førsteetasjer',
        desc: 'Krav om næringslokaler i sentrale strøk for levende gater.',
      },
      {
        title: 'Flere møteplasser',
        desc: 'Utvid og oppgrader parker, torg og offentlige rom.',
      },
      {
        title: 'Grønnere by',
        desc: 'Plant flere gatetrær og lag grønne korridorer gjennom byen.',
      },
    ],
  },
];

export default async function Home() {
  const recentPosts = await getRecentPosts();

  return (
    <main>
      {/* Lead */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-12 sm:pb-16">
        <div className="grid md:grid-cols-12 gap-8 md:gap-0">
          <div className="md:col-span-6 md:pr-10 md:border-r md:border-foreground/10">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tight mb-12">
              For en by med
              <br />
              plass til alle
            </h1>
            <div className="flex gap-3">
              <Link
                href="/medlem"
                className="px-6 py-2.5 bg-foreground text-background text-sm tracking-wide border border-foreground hover:underline"
              >
                Bli medlem
              </Link>
              <Link
                href="/om"
                className="px-6 py-2.5 border border-foreground/50 text-sm tracking-wide text-foreground/80 hover:underline"
              >
                Om oss
              </Link>
            </div>
          </div>

          <div className="md:col-span-4 md:pl-10">
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                Vi tror at byen tilhører alle, ikke bare de som allerede har
                kommet inn på boligmarkedet. Oslo har potensial til å bli en av
                Europas mest levende og inkluderende byer, men det krever
                politisk vilje og modige valg.
              </p>
              <p>
                Bedre Oslo jobber for en bypolitikk basert på forskning, sunn
                fornuft og respekt for mennesker som ønsker å bo i byen sin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-0 sm:pb-8">
        <div className="border-t-2 border-foreground/80 pt-6 sm:pt-8">
          <div className="grid md:grid-cols-3">
            {policies.map((policy, idx) => (
              <Link
                key={policy.title}
                href={policy.href}
                className={`group flex flex-col py-6 md:py-0 ${idx > 0 ? 'border-t md:border-t-0 md:border-l border-foreground/10 md:pl-8' : ''} ${idx < policies.length - 1 ? 'md:pr-8' : ''}`}
              >
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/50">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1 mb-2 group-hover:underline underline-offset-2 decoration-1">
                  {policy.title}
                </h3>
                <p className="text-sm text-foreground/60 mb-5 leading-relaxed">
                  {policy.subtitle}
                </p>
                <div className="space-y-3 flex-1">
                  {policy.points.map((point, i) => (
                    <div key={point.title} className="flex items-start gap-2">
                      <span className="text-foreground/50 font-serif text-sm mt-px">
                        {i + 1}.
                      </span>
                      <div>
                        <h4 className="text-sm font-medium">{point.title}</h4>
                        <p className="text-xs text-foreground/60 mt-0.5 leading-relaxed">
                          {point.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <span className="inline-block mt-5 text-sm text-foreground/60 group-hover:text-foreground transition-colors duration-150">
                  Les mer →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pullquote */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="border-t border-b border-foreground/15 py-10 sm:py-14 text-center">
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-[2.5rem] md:leading-[1.25] leading-snug">
              &ldquo;Gode byer bygges ikke ved å si nei til
              utvikling, men ved å si ja til
              mennesker.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 pt-0 sm:pt-8">
        <Link href="/nyheter" className="group flex items-end justify-between mb-4">
          <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1 group-hover:underline underline-offset-4 decoration-1">
            Siste nytt
          </h3>
          <span className="hidden sm:block text-sm text-foreground/50 group-hover:text-foreground/75 transition-colors duration-150">
            Se alle →
          </span>
        </Link>

        <div className="border-t-2 border-foreground/80" />

        <div className="grid md:grid-cols-3">
          {recentPosts.map((post, i) => (
            <Link
              key={post.id}
              href={`/nyheter/${post.id}`}
              className={`group block py-6 ${i > 0 ? 'border-t md:border-t-0 md:border-l border-foreground/10 md:pl-8' : ''} ${i < recentPosts.length - 1 ? 'md:pr-8' : ''}`}
            >
              <time className="font-mono text-[10px] text-foreground/50 tracking-wider uppercase">
                {new Date(post.date).toLocaleDateString('nb-NO', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <h3 className="font-serif text-lg font-bold mt-2 mb-2 group-hover:underline underline-offset-2 decoration-1">
                {post.title}
              </h3>
              <p className="text-sm text-foreground/60 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>

        <div className="sm:hidden mt-4 text-center">
          <Link
            href="/nyheter"
            className="text-sm text-foreground/50 hover:text-foreground/75 transition-colors duration-150"
          >
            Se alle nyheter →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-24 sm:pb-32 text-center">
        <div className="border-t border-foreground/15 pt-12 sm:pt-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Bli en del av bevegelsen
          </h2>
          <p className="text-lg text-foreground/60 mb-8 max-w-lg mx-auto leading-relaxed">
            Sammen kan vi gjøre Oslo til en by som fungerer for alle.
          </p>
          <Link
            href="/medlem"
            className="inline-block px-8 py-3 bg-foreground text-background text-sm tracking-wide border border-foreground hover:underline"
          >
            Meld deg inn
          </Link>
        </div>
      </section>
    </main>
  );
}
