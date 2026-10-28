import type { MetadataRoute } from 'next';
import { getProjects } from '@/lib/projects';

export const revalidate = 3600;

const SITE_URL = 'https://ucyenyen.dev';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();
  return [
    { url: SITE_URL, priority: 1 },
    { url: `${SITE_URL}/projects`, priority: 0.9 },
    { url: `${SITE_URL}/services`, priority: 0.7 },
    ...projects.map((p) => ({ url: `${SITE_URL}/projects/${p.href}`, priority: 0.8 })),
  ];
}
