import type { MetadataRoute } from 'next';

const BASE = 'https://agriturismooddone.com';
const LOCALES = ['it', 'en'] as const;
const ROUTES = [
  { path: '', changeFrequency: 'weekly' as const, priority: 1.0 },
  { path: '/alloggi', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/ristorante', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/bike-tour', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/attivita', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/offerte', changeFrequency: 'weekly' as const, priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.flatMap(({ path, changeFrequency, priority }) =>
    LOCALES.map((locale) => ({
      url: `${BASE}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    }))
  );
}
