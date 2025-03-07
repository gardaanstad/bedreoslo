import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Om oss',
      links: [
        { name: 'Om oss', href: '/om' },
        { name: 'Politikk', href: '/politikk' },
        { name: 'Kontakt', href: '/kontakt' },
      ],
    },
    {
      title: 'Ressurser',
      links: [
        { name: 'Nyheter', href: '/nyheter' },
        { name: 'Ressurser', href: '/ressurser' },
        { name: 'Bli medlem', href: '/medlem' },
      ],
    },
    {
      title: 'Følg oss',
      links: [
        { name: 'Twitter', href: 'https://twitter.com/bedreoslo' },
        { name: 'Facebook', href: 'https://facebook.com/bedreoslo' },
        { name: 'Instagram', href: 'https://instagram.com/bedreoslo' },
      ],
    },
  ];

  return (
    <footer className="relative w-full bg-[#1a472a] dark:bg-[#1a472a]">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand section */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1 space-y-4">
            <Link 
              href="/" 
              className={`${playfair.className} text-[#f5f1e8] text-2xl tracking-tight hover:underline`}
            >
              Bedre Oslo
            </Link>
            <p className="text-[#f5f1e8] text-sm leading-relaxed max-w-xs">
              Vi jobber for en mer inkluderende byutvikling i Oslo.
            </p>
          </div>

          {/* Navigation sections */}
          {sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className={`${playfair.className} text-[#f5f1e8] text-2xl tracking-tight`}>
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#f5f1e8] text-sm hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-[#f5f1e8]/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-[#f5f1e8]/80 text-sm text-center sm:text-left">
              © {currentYear} Bedre Oslo. Alle rettigheter reservert.
            </div>
            <Link
              href="https://github.com/gardaanstad/bedreoslo"
              className="text-[#f5f1e8]/80 text-sm hover:underline flex items-center gap-2"
            >
              <span>Kildekode</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 