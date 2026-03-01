import { Zap, Globe, Building2, Calculator, Banknote, HelpCircle } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  description: string;
  features: string[];
  subcategories?: string[];
  whatsappText: string;
  imageUrl?: string;
}

export const SERVICES: Service[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    icon: Zap,
    description: 'Grow your online presence with strategic digital marketing solutions tailored for your business.',
    features: [
      'SEO Optimization',
      'Social Media Management',
      'PPC Campaigns',
      'Content Marketing',
      'Brand Building'
    ],
    subcategories: [
      'SEO',
      'Social Media',
      'Google Ads',
      'Branding',
      'Social Media Handling',
      'GMB Optimization'
    ],
    imageUrl: 'https://images.pexels.com/photos/15635241/pexels-photo-15635241.jpeg?w=600&h=400&fit=crop',
    whatsappText: 'I\'m interested in Digital Marketing services. Can you help me grow my online presence?'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    icon: Globe,
    description: 'Custom web applications built with cutting-edge technology to drive your business forward.',
    features: [
      'Responsive Websites',
      'E-commerce Solutions',
      'Web Apps',
      'Mobile Apps',
      'API Development'
    ],
    subcategories: [
      'Website',
      'E-commerce',
      'Mobile App',
      'Web App'
    ],
    imageUrl: 'https://images.pexels.com/photos/159299/graphic-design-studio-tracfone-programming-html-159299.jpeg?w=600&h=400&fit=crop',
    whatsappText: 'I\'m interested in Web Development services. Can you help me build a website?'
  },
  {
    id: 'business-registration',
    title: 'Business Registration',
    icon: Building2,
    description: 'Streamline your business registration process with expert guidance and support.',
    features: [
      'Company Registration',
      'GST Registration',
      'MSME Registration',
      'LLP Formation',
      'Compliance Support'
    ],
    subcategories: [
      'LLP',
      'Private Limited',
      'GST',
      'MSME'
    ],
    imageUrl: 'https://images.pexels.com/photos/9064715/pexels-photo-9064715.jpeg?w=600&h=400&fit=crop',
    whatsappText: 'I\'m interested in Business Registration services. Can you help me register my business?'
  },
  {
    id: 'accounting-taxation',
    title: 'Accounting & Taxation',
    icon: Calculator,
    description: 'Expert accounting and tax services to keep your finances in order and compliant.',
    features: [
      'Tax Filing',
      'GST Compliance',
      'Financial Reporting',
      'Audit Services',
      'Payroll Management'
    ],
    subcategories: [
      'GST Filing',
      'Income Tax',
      'Auditing',
      'Payroll'
    ],
    imageUrl: 'https://images.pexels.com/photos/8439748/pexels-photo-8439748.jpeg?w=600&h=400&fit=crop',
    whatsappText: 'I\'m interested in Accounting & Taxation services. Can you help with my finances?'
  },
  {
    id: 'finance-loan',
    title: 'Finance & Loan',
    icon: Banknote,
    description: 'Access financial solutions and loan assistance tailored to your business needs.',
    features: [
      'Business Loans',
      'Personal Loans',
      'Credit Solutions',
      'Funding Assistance',
      'Financial Planning'
    ],
    subcategories: [
      'Business Loan',
      'Personal Loan',
      'Credit Card',
      'Funding'
    ],
    imageUrl: 'https://images.pexels.com/photos/7414208/pexels-photo-7414208.jpeg?w=600&h=400&fit=crop',
    whatsappText: 'I\'m interested in Finance & Loan services. Can you help me with financing options?'
  },
  {
    id: 'not-sure',
    title: 'Not Sure / Need Guidance',
    icon: HelpCircle,
    description: 'Not sure which service you need? Our experts can guide you through the best solution.',
    features: [
      'Free Consultation',
      'Business Assessment',
      'Personalized Recommendations',
      'Expert Guidance',
      'No Obligation'
    ],
    imageUrl: 'https://images.pexels.com/photos/8292854/pexels-photo-8292854.jpeg?w=600&h=400&fit=crop',
    whatsappText: 'I\'m not sure which service I need. Can you help me find the right solution?'
  }
];

export const SERVICE_MAP = new Map(SERVICES.map(s => [s.id, s]));

export function getService(id: string): Service | undefined {
  return SERVICE_MAP.get(id);
}
