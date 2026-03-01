import { COMPANY } from '@/config/company';

// Organization schema for LocalBusiness
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY.name,
    description: COMPANY.description,
    url: COMPANY.website,
    telephone: COMPANY.contact.phone,
    email: COMPANY.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Delhi NCR',
      addressLocality: COMPANY.location.city,
      addressRegion: COMPANY.location.state,
      postalCode: '110001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY.location.latitude,
      longitude: COMPANY.location.longitude,
    },
    image: COMPANY.logo,
    sameAs: [
      COMPANY.social.facebook,
      COMPANY.social.linkedin,
      COMPANY.social.twitter,
      COMPANY.social.instagram,
    ].filter(Boolean),
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: COMPANY.location.city,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      telephone: COMPANY.contact.phone,
      email: COMPANY.contact.email,
      areaServed: 'IN',
      availableLanguageID: ['en', 'hi'],
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00',
      },
    ],
  };
}

// Professional Service schema
export function generateProfessionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: COMPANY.name,
    description: COMPANY.description,
    url: COMPANY.website,
    telephone: COMPANY.contact.phone,
    email: COMPANY.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: COMPANY.location.city,
      addressRegion: COMPANY.location.state,
      addressCountry: 'IN',
    },
    sameAs: [
      COMPANY.social.facebook,
      COMPANY.social.linkedin,
      COMPANY.social.twitter,
    ].filter(Boolean),
  };
}

// Service schema for individual services
export function generateServiceSchema(
  serviceId: string,
  serviceName: string,
  description: string,
  features: string[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY.name,
      url: COMPANY.website,
    },
    areaServed: {
      '@type': 'City',
      name: COMPANY.location.city,
    },
    serviceType: serviceName,
    url: `${COMPANY.website}/service/${serviceId}`,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${serviceName} Offerings`,
      itemListElement: features.map((feature, index) => ({
        '@type': 'Offer',
        position: index + 1,
        name: feature,
      })),
    },
  };
}

// FAQ Page schema
export function generateFAQPageSchema(faqItems: Array<{ id: string; question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

// Breadcrumb schema
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
  baseUrl: string = COMPANY.website
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

// Website schema
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: COMPANY.name,
    url: COMPANY.website,
    description: COMPANY.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${COMPANY.website}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// Article schema (for blog posts)
export function generateArticleSchema(
  title: string,
  description: string,
  imageUrl: string,
  authorName: string = COMPANY.name,
  datePublished: string = new Date().toISOString(),
  dateModified?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: imageUrl,
    author: {
      '@type': 'Organization',
      name: authorName,
      url: COMPANY.website,
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY.name,
      logo: {
        '@type': 'ImageObject',
        url: COMPANY.logo,
      },
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
  };
}

// Company/Organization schema
export function generateCompanySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.name,
    alternateName: COMPANY.tagline,
    description: COMPANY.description,
    url: COMPANY.website,
    logo: COMPANY.logo,
    image: COMPANY.logo,
    telephone: COMPANY.contact.phone,
    email: COMPANY.contact.email,
    foundingDate: '2020',
    sameAs: [
      COMPANY.social.facebook,
      COMPANY.social.linkedin,
      COMPANY.social.twitter,
      COMPANY.social.instagram,
    ].filter(Boolean),
    address: {
      '@type': 'PostalAddress',
      addressLocality: COMPANY.location.city,
      addressRegion: COMPANY.location.state,
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      telephone: COMPANY.contact.phone,
      email: COMPANY.contact.email,
    },
  };
}

// Helper to inject JSON-LD script into head
export function injectJsonLd(jsonLd: Record<string, any>) {
  if (typeof window === 'undefined') return; // Skip on server-side

  const scriptId = 'json-ld-schema';
  
  // Remove existing schema script if present
  const existing = document.getElementById(scriptId);
  if (existing) {
    existing.remove();
  }

  // Create and inject new script
  const script = document.createElement('script');
  script.id = scriptId;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}

// Helper to inject multiple JSON-LD schemas
export function injectMultipleJsonLd(schemas: Array<Record<string, any>>) {
  if (schemas.length === 0) return;

  if (typeof window === 'undefined') return;

  const scriptId = 'json-ld-schemas';
  
  // Remove existing schema script if present
  const existing = document.getElementById(scriptId);
  if (existing) {
    existing.remove();
  }

  // Wrap multiple schemas in @graph
  const wrappedSchema = {
    '@context': 'https://schema.org',
    '@graph': schemas.map(schema => {
      // Remove the @context from individual schemas if present
      const { '@context': _context, ...rest } = schema;
      return rest;
    }),
  };

  // Create and inject script
  const script = document.createElement('script');
  script.id = scriptId;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(wrappedSchema);
  document.head.appendChild(script);
}
