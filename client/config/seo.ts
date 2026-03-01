import { COMPANY } from './company';

export const SEO_CONFIG = {
  // Default meta tags
  defaults: {
    title: `${COMPANY.name} - ${COMPANY.tagline}`,
    description: COMPANY.description,
    keywords: [
      'digital marketing',
      'digital marketing agency Delhi NCR',
      'web development',
      'web development company',
      'business registration',
      'GST registration',
      'accounting services',
      'finance consulting',
      'loan assistance',
      'business solutions',
    ].join(', '),
    image: COMPANY.logo,
    url: COMPANY.website,
  },

  // Page-specific SEO data
  pages: {
    home: {
      title: 'OperateForYou - Digital Marketing, Web Development & Business Solutions in Delhi NCR',
      description: 'Complete business solutions including Digital Marketing, Web Development, GST Registration, Accounting, and Finance assistance for startups and businesses.',
      keywords: 'digital marketing agency, web development, business registration, GST registration, accounting, finance consulting, Delhi NCR',
    },
    about: {
      title: 'About OperateForYou - Your Business Growth Partner in Delhi NCR',
      description: 'Learn about OperateForYou - a trusted business solutions provider offering digital marketing, web development, and compliance services.',
      keywords: 'about us, business solutions, digital marketing services, web development agency',
    },
    services: {
      title: 'Our Services - Digital Marketing, Web Development & Business Solutions',
      description: 'Explore our comprehensive range of services: Digital Marketing, Web Development, Business Registration, Accounting, GST Filing, and Finance Consulting.',
      keywords: 'digital marketing services, web development, business registration, GST filing, accounting services, finance consulting',
    },
    contact: {
      title: 'Contact OperateForYou - Get Expert Business Solutions Today',
      description: 'Get in touch with OperateForYou for digital marketing, web development, and business consulting. Phone: +91 8233232100 | Email: hello@operateforyou.com',
      keywords: 'contact us, digital marketing contact, web development agency, business consultation',
    },
    blog: {
      title: 'Blog - Digital Marketing Tips, Business Insights & Industry News',
      description: 'Read the latest articles on digital marketing strategies, business growth, GST compliance, and financial planning.',
      keywords: 'digital marketing blog, business tips, GST guidance, finance tips, web development insights',
    },
    privacy: {
      title: 'Privacy Policy - OperateForYou',
      description: 'Read our privacy policy to understand how we protect your data and information.',
      keywords: 'privacy policy',
    },
    terms: {
      title: 'Terms & Conditions - OperateForYou',
      description: 'Review our terms and conditions for using OperateForYou services.',
      keywords: 'terms and conditions',
    },
  },

  // Service-specific SEO templates
  serviceTemplate: {
    'digital-marketing': {
      title: 'Digital Marketing Services in Delhi NCR | SEO, Social Media, PPC | OperateForYou',
      description: 'Professional digital marketing agency offering SEO optimization, social media management, PPC campaigns, and content marketing in Delhi NCR.',
      keywords: 'digital marketing, digital marketing agency, SEO services, social media marketing, PPC campaigns, content marketing, Delhi NCR',
    },
    'web-development': {
      title: 'Web Development Services in Delhi NCR | Responsive Websites | OperateForYou',
      description: 'Custom web development services including responsive website design, e-commerce solutions, and web application development in Delhi NCR.',
      keywords: 'web development, website design, e-commerce development, web applications, responsive websites, Delhi NCR',
    },
    'business-registration': {
      title: 'Business Registration Services in Delhi NCR | Company Registration | OperateForYou',
      description: 'Complete business registration services including company incorporation, proprietorship, partnership registration in Delhi NCR.',
      keywords: 'business registration, company registration, proprietorship registration, partnership formation, Delhi NCR',
    },
    'accounting-taxation': {
      title: 'Accounting & Taxation Services in Delhi NCR | GST Filing | OperateForYou',
      description: 'Professional accounting and taxation services including GST registration, GST filing, income tax returns, and bookkeeping.',
      keywords: 'accounting services, GST registration, GST filing, income tax, bookkeeping, tax planning, Delhi NCR',
    },
    'gst-services': {
      title: 'GST Registration & Filing Services in Delhi NCR | Compliance Support | OperateForYou',
      description: 'Complete GST registration, GST filing, returns management, and GST compliance services for businesses in Delhi NCR.',
      keywords: 'GST registration, GST filing, GST returns, GST compliance, GSTR forms, Delhi NCR',
    },
    'finance-loan': {
      title: 'Loan & Finance Consulting Services in Delhi NCR | OperateForYou',
      description: 'Expert finance and loan consulting services helping businesses access funding, loans, and financial solutions.',
      keywords: 'finance consulting, business loans, loan assistance, financial planning, business funding, Delhi NCR',
    },
  },

  // Structured data defaults
  structuredData: {
    '@context': 'https://schema.org',
  },
};

export default SEO_CONFIG;
