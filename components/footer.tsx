import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 sm:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="border-t-2 border-foreground/80" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-10 sm:py-14">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-serif text-xl font-bold tracking-tight"
            >
              Bedre Oslo
            </Link>
            <p className="text-foreground/50 text-sm mt-2 leading-relaxed max-w-[220px]">
              For en by med plass til alle.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-foreground/50 font-mono mb-4">
              Organisasjon
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/om"
                  className="text-sm text-foreground/60 hover:text-foreground"
                >
                  Om oss
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-sm text-foreground/60 hover:text-foreground"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="/medlem"
                  className="text-sm text-foreground/60 hover:text-foreground"
                >
                  Bli medlem
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-foreground/50 font-mono mb-4">
              Innhold
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/nyheter"
                  className="text-sm text-foreground/60 hover:text-foreground"
                >
                  Nyheter
                </Link>
              </li>
              <li>
                <Link
                  href="/ressurser"
                  className="text-sm text-foreground/60 hover:text-foreground"
                >
                  Ressurser
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-foreground/50 font-mono mb-4">
              Følg oss
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://twitter.com/bedreoslo"
                  className="text-sm text-foreground/60 hover:text-foreground"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://facebook.com/bedreoslo"
                  className="text-sm text-foreground/60 hover:text-foreground"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com/bedreoslo"
                  className="text-sm text-foreground/60 hover:text-foreground"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-foreground/10 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-foreground/35">
          <span>&copy; {currentYear} Bedre Oslo</span>
          <Link
            href="https://github.com/gardaanstad/bedreoslo"
            className="hover:text-foreground/60"
          >
            Kildekode ↗
          </Link>
        </div>

        <div className="border-t border-foreground/10 mb-3 sm:mb-4" />
      </div>
    </footer>
  );
}
