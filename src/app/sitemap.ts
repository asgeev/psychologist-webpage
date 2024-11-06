import type { MetadataRoute } from 'next';
import { getPublicUrl } from '@/lib/utils';

export default function sitemap(): MetadataRoute.Sitemap {
  const publicUrl = getPublicUrl();

  return [
    {
      url: `${publicUrl}/#o-mnie`,
      lastModified: new Date(),
    },
    {
      url: `${publicUrl}/#oferta`,
      lastModified: new Date(),
    },
    {
      url: `${publicUrl}/#cennik`,
      lastModified: new Date(),
    },
    {
      url: `${publicUrl}/#faq`,
      lastModified: new Date(),
    },
    {
      url: `${publicUrl}/#kontakt`,
      lastModified: new Date(),
    },
  ];
}
