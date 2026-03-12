import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="border-t border-foreground/80" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-8 sm:py-14">
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
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-foreground/50 font-mono mb-2">
              Organisasjon
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/om"
                  className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-150"
                >
                  Om oss
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-150"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="/medlem"
                  className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-150"
                >
                  Bli medlem
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-foreground/50 font-mono mb-2">
              Innhold
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/nyheter"
                  className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-150"
                >
                  Nyheter
                </Link>
              </li>
              <li>
                <Link
                  href="/ressurser"
                  className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-150"
                >
                  Ressurser
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-foreground/50 font-mono mb-2">
              Følg oss
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://twitter.com/bedreoslo"
                  className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-150"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://facebook.com/bedreoslo"
                  className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-150"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com/bedreoslo"
                  className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-150"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-foreground/10 py-4 flex sm:flex-row justify-between items-center gap-2 text-[11px] text-foreground/35">
          <span>&copy; {currentYear} Bedre Oslo</span>
          <Link
            href="https://github.com/gardaanstad/bedreoslo"
            className="hover:text-foreground/60 transition-colors duration-150"
          >
            Kildekode
            <Image src="/GitHub.svg" alt="GitHub" width={14} height={14} className="inline-block opacity-50 ml-1.5" />
          </Link>
        </div>

        <div className="border-t border-foreground/10 mb-3 sm:mb-4" />
      </div>
    </footer>
  );
}
