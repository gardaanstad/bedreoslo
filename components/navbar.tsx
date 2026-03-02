'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Om oss', href: '/om' },
  { name: 'Nyheter', href: '/nyheter' },
  { name: 'Bli medlem', href: '/medlem' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="border-t border-foreground/10 mt-3 sm:mt-4" />

        <nav className="flex items-center justify-center gap-4 sm:gap-8 py-2.5 sm:py-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-mono ${
                pathname === link.href ||
                pathname.startsWith(link.href + '/')
                  ? 'text-foreground'
                  : 'text-foreground/50 hover:text-foreground/70'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="border-t-[3px] border-double border-foreground/80" />

        <div className="py-4 sm:py-6 text-center">
          <Link href="/">
            <span className="font-serif text-[2.25rem] sm:text-5xl md:text-6xl font-black tracking-tight leading-none">
              Bedre Oslo
            </span>
          </Link>
          <p className="mt-1.5 text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-foreground/50 font-mono">
            For en by med plass til alle
          </p>
        </div>

        <div className="border-t border-foreground/15" />
      </div>
    </header>
  );
}
