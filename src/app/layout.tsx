import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Loader } from '@/components/Loader';
import { CustomCursor } from '@/components/CustomCursor';
import { GridBackground } from '@/components/GridBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Faris — SaaS Builder, Backend Architect & AI Specialist',
  description: 'Faris Ruknuddin is a SaaS builder, backend architect, and AI specialist focused on scalable software systems, automation, and production AI workflows.',
  keywords: [
    'AI Engineer',
    'AI Specialist',
    'Backend Engineer',
    'SaaS Developer',
    'SaaS Builder',
    'Backend Architecture',
    'Node.js Developer',
    'Python Developer',
    'AI Automation',
    'Prompt Engineering',
    'AI Context Orchestration',
    'AWS',
    'GCP',
    'Full Stack Development'
  ],
  authors: [{ name: 'Faris Ruknuddin' }],
  openGraph: {
    title: 'Faris — SaaS Builder, Backend Architect & AI Specialist',
    description: 'I architect scalable backends, engineer custom SaaS platforms, and orchestrate complex AI workflows from scratch.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/assets/faris-profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Faris Ruknuddin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faris — SaaS Builder, Backend Architect & AI Specialist',
    description: 'I architect scalable backends, engineer custom SaaS platforms, and orchestrate complex AI workflows from scratch.',
    images: ['/assets/faris-profile.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased relative min-h-screen">
        <Loader />
        <CustomCursor />
        <GridBackground />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
