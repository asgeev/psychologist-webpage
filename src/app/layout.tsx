import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/organisms/Header';
import { getPublicUrl } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

const publicUrl = getPublicUrl();

export const metadata: Metadata = {
  title: 'Ewa Szymczyk - Psycholog dziecięcy i młodzieży',
  description: 'Psycholog dziecięcy i młodzieży Ewa Szymczyk',
  metadataBase: new URL(publicUrl),
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    'Ewa',
    'Szymczyk',
    'Ewa Szymczyk',
    'psycholog',
    'psycholog dziecięcy',
    'psycholog lublin',
    'psycholog dziecięcy lublin',
    'psycholog dla młodzieży',
    'terapia',
    'lublin',
  ],
  openGraph: {
    title: 'Ewa Szymczyk - psycholog dziecięcy i młodzieży',
    description: 'Psycholog dziecięcy i młodzieży Ewa Szymczyk',
    url: publicUrl,
    siteName: 'Ewa Szymczyk',
    images: [
      {
        url: '/ewa.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
