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
        { name: 'Vår historie', href: '/historie' },
        { name: 'Hvem er vi', href: '/om' },
        { name: 'Kontakt', href: '/kontakt' },
      ],
    },
    {
      title: 'Ressurser',
      links: [
        { name: 'Nyheter', href: '/nyheter' },
        { name: 'Bli medlem', href: '/sign-in' },
        { name: 'Personvern', href: '/personvern' },
      ],
    },
    {
      title: 'Følg oss',
      links: [
        { name: 'Twitter', href: 'https://twitter.com/osloyimby' },
        { name: 'Facebook', href: 'https://facebook.com/osloyimby' },
        { name: 'Instagram', href: 'https://instagram.com/osloyimby' },
      ],
    },
  ];

  return (
    <footer className="relative w-full bg-[#1a472a] dark:bg-[#1a472a]">
      {/* Background noise overlay */}
      {/* <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[1] mix-blend-overlay pointer-events-none" /> */}

      <div className="relative w-full max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <Link 
              href="/" 
              className={`${playfair.className} text-[#f5f1e8] text-xl tracking-tight transition-all duration-300 hover:opacity-80`}
            >
              Oslo YIMBY
            </Link>
            <p className="text-[#f5f1e8]/80 text-sm max-w-xs">
              Vi jobber for en mer inkluderende byutvikling i Oslo, med plass til alle som ønsker å bo her.
            </p>
          </div>

          {/* Navigation sections */}
          {sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className={`${playfair.className} text-[#f5f1e8] font-semibold`}>
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#f5f1e8]/80 text-sm hover:text-[#f5f1e8] transition-colors duration-200"
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
          <div className="text-[#f5f1e8]/60 text-sm">
            © {currentYear} Oslo YIMBY. Alle rettigheter reservert.
          </div>
        </div>
      </div>
    </footer>
  );
} 