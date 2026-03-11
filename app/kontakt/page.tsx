export default function Contact() {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-24">
        <header className="mb-10 sm:mb-14 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Kontakt oss
          </h1>
          <p className="mt-4 text-lg text-foreground/60 max-w-xl mx-auto leading-relaxed">
            Har du spørsmål eller innspill? Send oss en melding.
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

            <div>
              <label
                htmlFor="message"
                className="block text-[11px] font-mono tracking-[0.15em] uppercase text-foreground/50 mb-2"
              >
                Melding
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 bg-transparent border border-foreground/10 text-foreground focus:border-foreground/40 focus:outline-none resize-none"
                required
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-3 bg-foreground text-background text-sm tracking-wide border border-foreground hover:bg-transparent hover:text-foreground transition-colors duration-150"
              >
                Send melding
              </button>
            </div>
          </form>

          <div className="mt-14 pt-8 border-t border-foreground/10 grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[10px] font-mono tracking-[0.2em] uppercase text-foreground/50 mb-3">
                Besøksadresse
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Akerselva
                <br />
                0001 Oslo
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-mono tracking-[0.2em] uppercase text-foreground/50 mb-3">
                Andre henvendelser
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Telefon: 23 45 67 89
                <br />
                E-post: post@bedreoslo.no
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
