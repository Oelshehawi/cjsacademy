import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import GoogleAnalytics from './components/GoogleAnalytics';
import { Navbar } from './components/Navbar/Navbar';
import { HeroAnimationProvider } from './components/HeroAnimationContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cjsgolfacademy.ca'),
  title: 'CJS Academy - Golf Coaching',
  description:
    'Transform your golf game with personalized instruction from CPGA professionals at CJS Academy. Book your lesson today.',
  openGraph: {
    url: 'https://www.cjsgolfacademy.ca',
    type: 'website',
    locale: 'en_CA',
    siteName: 'CJS Golf Academy',
    title: 'CJS Academy - Golf Coaching',
    description:
      'Transform your golf game with personalized instruction from CPGA professionals at CJS Academy. Book your lesson today.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CJS Academy - Golf Coaching',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CJS Academy - Golf Coaching',
    description:
      'Transform your golf game with personalized instruction from CPGA professionals at CJS Academy. Book your lesson today.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CJS Academy - Golf Coaching',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${inter.className} antialiased`}>
        <GoogleAnalytics />
        <HeroAnimationProvider>
          <Navbar />
          {children}
        </HeroAnimationProvider>
      </body>
    </html>
  );
}
