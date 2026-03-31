import { MetadataRoute } from 'next';
import { SERVICES, INDUSTRIES } from '@/lib/constants';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://keysolglobal.com';

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/solutions',
    '/industries',
    '/case-studies',
    '/insights',
    '/contact',
    '/consultation',
    '/faq',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Service routes
  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}${service.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Industry routes
  const industryRoutes = INDUSTRIES.map((industry) => ({
    url: `${baseUrl}${industry.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes];
}
