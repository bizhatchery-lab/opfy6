import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { injectJsonLd, injectMultipleJsonLd } from '@/utils/structured-data';
import { COMPANY } from '@/config/company';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
  structuredData?: Record<string, any> | Array<Record<string, any>>;
  author?: string;
  publishDate?: string;
  modifiedDate?: string;
  robots?: string;
  noindex?: boolean;
}

export function SEOHead({
  title,
  description,
  keywords = '',
  image = COMPANY.logo,
  url = COMPANY.website,
  type = 'website',
  ogTitle = title,
  ogDescription = description,
  ogImage = image,
  twitterTitle = title,
  twitterDescription = description,
  twitterImage = image,
  canonical = url,
  structuredData,
  author = COMPANY.name,
  publishDate,
  modifiedDate,
  robots = 'index, follow',
  noindex = false,
}: SEOHeadProps) {
  useEffect(() => {
    // Inject structured data if provided
    if (structuredData) {
      if (Array.isArray(structuredData)) {
        // Use injectMultipleJsonLd for arrays to support multiple schemas
        injectMultipleJsonLd(structuredData);
      } else {
        injectJsonLd(structuredData);
      }
    }
  }, [structuredData]);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      {robots && <meta name="robots" content={noindex ? 'noindex, nofollow' : robots} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={COMPANY.name} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content={twitterImage} />
      <meta name="twitter:creator" content="@operateforyou" />

      {/* Article Meta Tags (if applicable) */}
      {publishDate && <meta property="article:published_time" content={publishDate} />}
      {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      <meta property="article:author" content={author} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      <meta name="theme-color" content={COMPANY.brandColor} />
    </Helmet>
  );
}

export default SEOHead;
