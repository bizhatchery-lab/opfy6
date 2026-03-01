import { RequestHandler } from 'express';
import { COMPANY_CONSTANTS } from '../../shared/constants';

const BASE_URL = COMPANY_CONSTANTS.website;

// Define static pages with their priority and change frequency
const STATIC_PAGES = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/about', priority: 0.9, changefreq: 'monthly' },
  { path: '/services', priority: 0.9, changefreq: 'weekly' },
  { path: '/contact', priority: 0.8, changefreq: 'monthly' },
  { path: '/blog', priority: 0.8, changefreq: 'daily' },
  { path: '/careers', priority: 0.7, changefreq: 'monthly' },
  { path: '/privacy', priority: 0.5, changefreq: 'yearly' },
  { path: '/terms', priority: 0.5, changefreq: 'yearly' },
  { path: '/disclaimer', priority: 0.5, changefreq: 'yearly' },
];

// Service IDs - should match services data
const SERVICE_IDS = [
  'digital-marketing',
  'web-development',
  'business-registration',
  'accounting-taxation',
  'finance-loan',
];

export const handleSitemap: RequestHandler = (_req, res) => {
  const entries: string[] = [];

  // Add static pages
  STATIC_PAGES.forEach((page) => {
    const url = new URL(page.path, BASE_URL).href;
    entries.push(`
  <url>
    <loc>${escapeXml(url)}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`);
  });

  // Add service detail pages
  SERVICE_IDS.forEach((serviceId) => {
    const url = new URL(`/service/${serviceId}`, BASE_URL).href;
    entries.push(`
  <url>
    <loc>${escapeXml(url)}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`);
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('')}
</urlset>`;

  res.type('application/xml').send(sitemap);
};

// Helper to escape special XML characters
function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
