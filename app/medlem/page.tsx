export default function Member() {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-24">
        <header className="mb-10 sm:mb-14 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Bli med på laget
          </h1>
          <p className="mt-4 text-lg text-foreground/60 max-w-lg mx-auto leading-relaxed">
            Medlemskap er gratis og uforpliktende.
          </p>
        </header>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-[11px] font-mono tracking-[0.15em] uppercase text-foreground/50 mb-2"
              >
                Navn
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-transparent border border-foreground/10 text-foreground focus:border-foreground/40 focus:outline-none"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-[11px] font-mono tracking-[0.15em] uppercase text-foreground/50 mb-2"
              >
                E-post
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-transparent border border-foreground/10 text-foreground focus:border-foreground/40 focus:outline-none"
                required
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-3 bg-foreground text-background text-sm tracking-wide border border-foreground hover:bg-transparent hover:text-foreground transition-colors duration-150"
              >
                Bli medlem
              </button>
            </div>
          </form>

          <div className="mt-14 pt-8 border-t border-foreground/10 grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[10px] font-mono tracking-[0.2em] uppercase text-foreground/50 mb-3">
                Som medlem får du
              </h3>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-foreground/35 mt-px">—</span>
                  Delta på medlemsmøter og workshops
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/35 mt-px">—</span>
                  Månedlig nyhetsbrev med analyser
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground/35 mt-px">—</span>
                  Påvirke våre politiske prioriteringer
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] font-mono tracking-[0.2em] uppercase text-foreground/50 mb-3">
                Viktig å vite
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Medlemskap er gratis og uforpliktende. Du kan melde deg ut når
                som helst.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
