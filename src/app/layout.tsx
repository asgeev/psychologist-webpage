import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/organisms/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ewa Szymczyk - Psycholog',
  description: 'Strona internetowa - psycholog Ewa Szymczyk',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.className} antialiased`}>
        <div className="mx-4">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
