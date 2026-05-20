import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, JetBrains_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import StructuredData from '@/components/StructuredData/StructuredData';
import '../globals.css';

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--serif',
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://agriturismooddone.com'),
  title: {
    default: 'Agriturismo Oddone — Valle Sabbia, Brescia',
    template: '%s — Agriturismo Oddone',
  },
  description: 'Agriturismo di famiglia a 720 m sul livello del mare, in Valle Sabbia (Brescia). Sei appartamenti, ristorante di territorio, tour MTB guidati con guide AMI certificate e attività outdoor.',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    alternateLocale: ['en_US'],
    siteName: 'Agriturismo Oddone',
    title: 'Agriturismo Oddone — Valle Sabbia, Brescia',
    description: 'Agriturismo di famiglia in Valle Sabbia. Sei appartamenti, ristorante di territorio e tour MTB guidati.',
    images: [{ url: '/images/bike-vista.jpg', width: 1200, height: 630, alt: 'Agriturismo Oddone — Valle Sabbia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agriturismo Oddone — Valle Sabbia, Brescia',
    description: 'Agriturismo di famiglia in Valle Sabbia. Sei appartamenti, ristorante di territorio e tour MTB guidati.',
    images: ['/images/bike-vista.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://agriturismooddone.com/it',
    languages: {
      'it': 'https://agriturismooddone.com/it',
      'en': 'https://agriturismooddone.com/en',
    },
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <StructuredData />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
