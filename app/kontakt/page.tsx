'use client';

import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500'],
});

export default function Contact() {
  return (
    <main 
      className={`relative ${inter.className} min-h-screen overflow-x-hidden`}
    >
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <header className="mb-16 md:flex md:flex-col md:items-center">
          <h1 className={`${playfair.className} text-5xl sm:text-7xl font-bold text-[#2b2b2b] dark:text-[#f5f1e8] leading-[1.1] text-center`}>
            Kontakt oss
          </h1>
          <p className="mt-6 text-xl text-[#2b2b2b]/70 dark:text-[#a3b8b0] text-center max-w-2xl">
            Har du spørsmål eller innspill? Send oss en melding, så svarer vi så fort vi kan.
          </p>
        </header>

        {/* Form Section */}
        <div className="max-w-2xl mx-auto">
          <div className="p-8 sm:p-12 bg-[#efece5] dark:bg-black/20 border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10">
            <form className="space-y-8">
              <div className="space-y-2">
                <label htmlFor="name" className={`block ${playfair.className} text-lg text-[#2b2b2b] dark:text-[#f5f1e8]`}>
                  Navn
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 bg-white/80 dark:bg-[#1a1a1a] border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 text-[#2b2b2b] dark:text-[#f5f1e8] focus:border-[#1a472a] dark:focus:border-[#1a472a] focus:outline-none text-lg"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className={`block ${playfair.className} text-lg text-[#2b2b2b] dark:text-[#f5f1e8]`}>
                  E-post
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 bg-white/80 dark:bg-[#1a1a1a] border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 text-[#2b2b2b] dark:text-[#f5f1e8] focus:border-[#1a472a] dark:focus:border-[#1a472a] focus:outline-none text-lg"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className={`block ${playfair.className} text-lg text-[#2b2b2b] dark:text-[#f5f1e8]`}>
                  Melding
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full p-3 bg-white/80 dark:bg-[#1a1a1a] border border-[#2b2b2b]/20 dark:border-[#f5f1e8]/10 text-[#2b2b2b] dark:text-[#f5f1e8] focus:border-[#1a472a] dark:focus:border-[#1a472a] focus:outline-none text-lg resize-none"
                  required
                ></textarea>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="px-12 py-3 bg-[#1a472a] text-white font-medium hover:bg-[#1a472a]/90 transition-colors text-lg"
                >
                  Send melding
                </button>
              </div>
            </form>
          </div>

          <div className="flex gap-12 pt-12">
            <div className="flex-1">
              <h3 className={`${playfair.className} text-lg font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-3`}>
                Besøksadresse
              </h3>
              <p className="text-[#2b2b2b]/70 dark:text-[#a3b8b0]">
                Akerselva<br />
                0001 Oslo
              </p>
            </div>
            <div className="flex-1">
              <h3 className={`${playfair.className} text-lg font-bold text-[#2b2b2b] dark:text-[#f5f1e8] mb-3`}>
                Andre henvendelser
              </h3>
              <p className="text-[#2b2b2b]/70 dark:text-[#a3b8b0]">
                Telefon: 23 45 67 89<br />
                E-post: post@bedreoslo.no
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
