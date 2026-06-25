import type React from 'react';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css';
import { Providers } from './providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'AI Toolkit | Professional Content Tools',
    template: '%s | AI Toolkit',
  },
  description:
    'Advanced AI-powered tools for paraphrasing, summarizing, grammar checking and more. Production-ready content solutions for creators.',
  keywords: [
    'AI Paraphraser',
    'AI Summarizer',
    'AI Humanizer',
    'Grammar Checker',
    'AI Writing Assistant',
  ],
  authors: [{ name: 'AI Toolkit' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aitoolkit.com',
    title: 'AI Toolkit | Professional Content Tools',
    description:
      'Advanced AI-powered tools for paraphrasing, summarizing, grammar checking and more.',
    siteName: 'AI Toolkit',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Toolkit | Professional Content Tools',
    description:
      'Advanced AI-powered tools for paraphrasing, summarizing, grammar checking and more.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-black text-white antialiased min-h-screen flex flex-col`}
      >
        <Providers>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster position="top-right" theme="dark" closeButton />
        </Providers>
      </body>
    </html>
  );
}
