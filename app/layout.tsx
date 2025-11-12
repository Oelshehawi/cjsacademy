import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import CalendlyScript from './components/CalendlyScript';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CJS Academy - Elite Golf Coaching',
  description:
    'Transform your golf game with personalized instruction from PGA professionals at CJS Academy. Book your lesson today.',
  openGraph: {
    title: 'CJS Academy - Elite Golf Coaching',
    description:
      'Transform your golf game with personalized instruction from PGA professionals at CJS Academy.',
    images: ['/cjslogo.png'],
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
