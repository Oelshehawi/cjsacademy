import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import CalendlyScript from './components/CalendlyScript';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cjsgolfacademy.ca'),
  title: 'CJS Academy - Elite Golf Coaching',
  description:
    'Transform your golf game with personalized instruction from PGA professionals at CJS Academy. Book your lesson today.',
  openGraph: {
    url: 'https://www.cjsgolfacademy.ca',
    type: 'website',
    locale: 'en_CA',
    siteName: 'CJS Academy - Elite Golf Coaching',
    title: 'CJS Academy - Elite Golf Coaching',
    description:
      'Transform your golf game with personalized instruction from PGA professionals at CJS Academy. Book your lesson today.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CJS Academy - Elite Golf Coaching',
    description:
      'Transform your golf game with personalized instruction from PGA professionals at CJS Academy. Book your lesson today.',
    images: ['/cjslogo2.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <link
          href='https://assets.calendly.com/assets/external/widget.css'
          rel='stylesheet'
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <CalendlyScript />
        {children}
      </body>
    </html>
  );
}
