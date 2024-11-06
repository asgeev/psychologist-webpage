import { MetadataRoute } from 'next';
import { getPublicUrl } from '@/lib/utils';

export default function robots(): MetadataRoute.Robots {
  const publicUrl = getPublicUrl();

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [],
    },
    sitemap: `${publicUrl}/sitemap.xml`,
  };
}
