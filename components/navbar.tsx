'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useEffect } from 'react';

const navLinks = [
  { name: 'Om oss', href: '/om' },
  { name: 'Nyheter', href: '/nyheter' },
  { name: 'Bli medlem', href: '/medlem' },
];

export default function Navbar() {
  const pathname = usePathname();
  const stickyRef = useRef<HTMLDivElement>(null);
  const wipeAreaRef = useRef<HTMLDivElement>(null);
  const oldNavRef = useRef<HTMLElement>(null);
  const newNavRef = useRef<HTMLElement>(null);
  const wipeLineRef = useRef<HTMLDivElement>(null);
  const topBorderRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sticky = stickyRef.current;
    const wipeArea = wipeAreaRef.current;
    const oldNav = oldNavRef.current;
    const newNav = newNavRef.current;
    const wipeLine = wipeLineRef.current;
    const topBorder = topBorderRef.current;
    const brand = brandRef.current;

    if (
      !sticky ||
      !wipeArea ||
      !oldNav ||
      !newNav ||
      !wipeLine ||
      !topBorder ||
      !brand
    )
      return;

    const fg = getComputedStyle(document.documentElement)
      .getPropertyValue('--foreground')
      .trim();

    let ticking = false;

    const update = () => {
      ticking = false;

      // Top border: darken as soon as the user scrolls (completes over ~50px)
      const scrollDarken = Math.min(1, window.scrollY / 50);
      topBorder.style.borderColor = `rgb(${fg} / ${0.1 + scrollDarken * 0.7})`;

      // Wipe progress: mapped to the Bedre Oslo brand section height
      const stickyRect = sticky.getBoundingClientRect();
      const brandRect = brand.getBoundingClientRect();
      if (brandRect.height === 0) return;

      // p=0 when brand top just reaches sticky bottom
      // p=1 when brand bottom reaches sticky bottom (fully scrolled behind)
      const p = Math.max(
        0,
        Math.min(1, (stickyRect.bottom - brandRect.top) / brandRect.height),
      );

      oldNav.style.clipPath = p > 0 ? `inset(0 0 ${p * 100}% 0)` : 'none';
      newNav.style.clipPath =
        p < 1 ? `inset(${(1 - p) * 100}% 0 0 0)` : 'none';

      wipeLine.style.top = `${(1 - p) * 100}%`;
      wipeLine.style.opacity = p < 1 ? '1' : '0';

      if (p > 0.5) {
        oldNav.setAttribute('inert', '');
        newNav.removeAttribute('inert');
      } else {
        newNav.setAttribute('inert', '');
        oldNav.removeAttribute('inert');
      }
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, []);

  const linkClass = (href: string) =>
    `text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-mono whitespace-nowrap ${
      pathname === href || pathname.startsWith(href + '/')
        ? 'text-foreground/80'
        : 'text-foreground/50 hover:text-foreground/80 transition-colors duration-150'
    }`;

  return (
    <>
      <div ref={stickyRef} className="sticky top-0 z-50 bg-background pt-3 sm:pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div ref={topBorderRef} className="border-t border-foreground/10" />

          <div ref={wipeAreaRef} className="relative">
            <nav
              ref={oldNavRef}
              className="flex items-center justify-center gap-4 sm:gap-8 py-2.5 sm:py-3"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkClass(link.href)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <nav
              ref={newNavRef}
              className="absolute inset-0 flex items-center justify-center gap-4 sm:gap-8 py-2.5 sm:py-3"
              style={{ clipPath: 'inset(100% 0 0 0)' }}
            >
              <Link
                href="/"
                className={`font-serif text-sm sm:text-base font-black tracking-tight leading-none ${
                  pathname === '/'
                    ? 'text-foreground/85'
                    : 'text-foreground/45 hover:text-foreground/85 transition-colors duration-150'
                }`}
              >
                Bedre Oslo
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkClass(link.href)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div
              ref={wipeLineRef}
              className="absolute left-0 right-0 border-t border-foreground/80 pointer-events-none"
              style={{ top: '100%', opacity: 1 }}
            />
          </div>

          <div className="border-t border-foreground/80 mt-[2px]" />
        </div>
      </div>

      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div ref={brandRef} className="text-center">
            <Link href="/" className="block w-fit mx-auto py-4 sm:py-6">
              <span className="font-serif text-[2.25rem] sm:text-5xl md:text-6xl font-black tracking-tight leading-none">
                Bedre Oslo
              </span>
              <p className="mt-1.5 text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-foreground/50 font-mono">
                For en by med plass til alle
              </p>
            </Link>
          </div>

          <div className="border-t border-foreground/15" />
        </div>
      </header>
    </>
  );
}
