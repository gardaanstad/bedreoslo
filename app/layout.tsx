import type { Metadata } from 'next';
import { Geist_Mono, Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Bedre Oslo',
  description: 'Vi kjemper for en by med plass til alle',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${geistMono.variable} antialiased scrollbar-gutter-stable overflow-y-scroll overflow-x-hidden`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}