import { Zap, Globe, Building2, Calculator, Banknote, HelpCircle } from 'lucide-react';

// ============================================
// DATA TYPES (CMS-like model)
// ============================================

export interface MetricItem {
  label: string;
  value: string;
  description?: string;
}

export interface Deliverable {
  name: string;
  description: string;
}

export interface ProcessStep {
  name: string;
  description: string;
  honestStat?: string;
}

export interface CaseStudyMetric {
  label: string;
  before: string | number;
  after: string | number;
}

export interface CaseStudy {
  clientName: string;
  problem: string;
  solution: string;
  resultMetrics: CaseStudyMetric[];
}

export interface Offering {
  name: string;
  icon: React.ComponentType<any>;
  shortDesc: string;
  whatToExpect: string;
}

export interface Service {
  // Basic fields
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  description: string;
  features: string[];
  subcategories?: string[];
  whatsappText: string;
  imageUrl?: string;

  // New CMS fields for interactive features
  tagline?: string;
  shortIntro?: string; // Partner-like tone for hero
  heroGraphicType?: 'code-screenshot' | 'financial-dashboard' | 'illustration'; // Type of hero graphic
  heroCodeComment?: string; // For code-screenshot type
  
  topProblems?: string[]; // Interactive problem bullets
  offerings?: Offering[]; // "What We Offer" - flip cards
  deliverables?: Deliverable[]; // What to expect in accordion
  metrics?: MetricItem[]; // Metrics with progress bars/gauges
  
  industryFilters?: string[]; // Filter chips
  processSteps?: ProcessStep[]; // Interactive timeline
  caseStudies?: CaseStudy[]; // Before/after charts
  
  calculatorType?: 'ads-budget-estimator' | 'loan-emi' | 'none';
  calculatorHonestDisclaimer?: string; // Honesty disclaimer
}

// ============================================
// SERVICE DATA
// ============================================

export const SERVICES: Service[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    icon: Zap,
    description: 'Grow your online presence with strategic digital marketing solutions tailored for your business.',
    tagline: 'Get Visible. Get Conversions. Sustainably.',
    shortIntro: 'Helping you navigate the messy middle of client acquisition without burning cash.',
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
    whatsappText: 'I\'m interested in Digital Marketing services. Can you help me grow my online presence?',
    
    // Hero section
    heroGraphicType: 'financial-dashboard',
    heroCodeComment: '// Finding clients shouldn\'t be this hard',
    
    // Problems & Solutions
    topProblems: [
      'High CAC (Customer Acquisition Cost)',
      'Low organic visibility',
      'Inconsistent brand presence',
      'Poor ROI on ad spend',
      'Outdated marketing tactics'
    ],
    offerings: [
      {
        name: 'SEO',
        icon: Zap,
        shortDesc: 'Organic visibility',
        whatToExpect: 'We audit, optimize, and you\'ll see traction in ~3 months. It\'s a marathon, not a sprint.'
      },
      {
        name: 'Paid Campaigns',
        icon: Zap,
        shortDesc: 'Quick wins',
        whatToExpect: 'Setup, testing, optimization. You\'ll see leads in the first week, scaling after 2-3 weeks.'
      },
      {
        name: 'Social Media',
        icon: Zap,
        shortDesc: 'Brand voice',
        whatToExpect: 'Strategy, content calendar, consistent posting. Engagement growth visible in month 1.'
      }
    ],
    deliverables: [
      { name: 'SEO Audit', description: 'Complete technical and content audit' },
      { name: 'Keyword Strategy', description: 'Researched, competitor-aware keyword roadmap' },
      { name: 'On-Page Optimization', description: 'Title, meta, headers, schema implementation' },
      { name: 'Link Building', description: 'Ethical, contextual backlink acquisition' },
      { name: 'Content Plan', description: 'Monthly content calendar and topics' },
      { name: 'Monthly Reporting', description: 'Traffic, rankings, conversion metrics' }
    ],
    metrics: [
      { label: 'Successful Campaigns', value: '50+', description: 'Active campaigns with measurable results' },
      { label: 'Avg ROI Improvement', value: '250%', description: 'Conservative estimate for first 6 months' },
      { label: 'Client Retention', value: '90%', description: 'Clients who stay 12+ months' }
    ],
    industryFilters: ['E-commerce', 'SaaS', 'B2B', 'Local Business', 'Healthcare'],
    processSteps: [
      {
        name: 'Audit & Analysis',
        description: 'Deep dive into your current marketing and competition',
        honestStat: 'Usually reveals 50-70% of quick wins'
      },
      {
        name: 'Strategy',
        description: 'Build a realistic, phased roadmap',
        honestStat: 'Solid strategy reduces ad spend waste by ~20%'
      },
      {
        name: 'Implementation',
        description: 'Execute campaigns and optimizations',
        honestStat: 'Results visible in 2-4 weeks, growth in 8-12 weeks'
      },
      {
        name: 'Optimization',
        description: 'A/B testing, refinement, scaling',
        honestStat: 'Continuous improvement compounds results'
      }
    ],
    caseStudies: [
      {
        clientName: 'E-commerce Startup',
        problem: 'Low organic search visibility',
        solution: 'SEO audit, technical fixes, content strategy',
        resultMetrics: [
          { label: 'Organic Traffic', before: '500/mo', after: '4,200/mo' },
          { label: 'Ranking Keywords', before: '12', after: '127' },
          { label: 'Revenue (Organic)', before: '₹15,000', after: '₹1,20,000' }
        ]
      },
      {
        clientName: 'B2B SaaS',
        problem: 'High CAC, unclear lead source ROI',
        solution: 'Paid campaign optimization, landing page testing',
        resultMetrics: [
          { label: 'Cost per Lead', before: '₹2,500', after: '₹800' },
          { label: 'Conversion Rate', before: '2%', after: '6.5%' },
          { label: 'Monthly Leads', before: '10', after: '45' }
        ]
      }
    ],
    calculatorType: 'ads-budget-estimator',
    calculatorHonestDisclaimer: 'Estimate based on similar early-stage clients. Actual results vary by industry, market, and execution.'
  },

  {
    id: 'web-development',
    title: 'Web Development',
    icon: Globe,
    description: 'Custom web applications built with cutting-edge technology to drive your business forward.',
    tagline: 'Fast. Secure. Future-Proof.',
    shortIntro: 'Building web products that actually work, load fast, and don\'t become nightmares to maintain.',
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
    whatsappText: 'I\'m interested in Web Development services. Can you help me build a website?',
    
    // Hero section
    heroGraphicType: 'code-screenshot',
    heroCodeComment: '// Code that doesn\'t make you want to refactor everything',
    
    topProblems: [
      'Slow, outdated websites',
      'Poor user experience',
      'High bounce rates',
      'Maintenance nightmares',
      'Not mobile-friendly'
    ],
    offerings: [
      {
        name: 'Responsive Sites',
        icon: Globe,
        shortDesc: 'Works everywhere',
        whatToExpect: 'Fast load times (< 2s), mobile-optimized, SEO-ready. Built on modern tech (React, Next.js).'
      },
      {
        name: 'E-commerce Stores',
        icon: Globe,
        shortDesc: 'Sell online',
        whatToExpect: 'Payment integration, inventory management, analytics. Integration with Shopify/WooCommerce or custom.'
      },
      {
        name: 'Web Apps',
        icon: Globe,
        shortDesc: 'Custom solutions',
        whatToExpect: 'User authentication, real-time features, scalable backend. 2-4 month build for MVPs.'
      }
    ],
    deliverables: [
      { name: 'Requirements & Design', description: 'Wireframes, mockups, tech stack selection' },
      { name: 'Frontend Development', description: 'Responsive, accessible UI with React/Vue' },
      { name: 'Backend/APIs', description: 'Scalable server, database, authentication' },
      { name: 'Testing & QA', description: 'Unit tests, E2E tests, performance testing' },
      { name: 'Deployment', description: 'Live hosting, CI/CD pipelines, monitoring' },
      { name: 'Handoff & Support', description: '30-day support, documentation, training' }
    ],
    metrics: [
      { label: 'Projects Delivered', value: '80+', description: 'Live, production-ready websites' },
      { label: 'Avg Page Speed', value: '< 2.5s', description: 'Core Web Vitals optimized' },
      { label: 'Client Satisfaction', value: '95%', description: 'Projects delivered on time/budget' }
    ],
    industryFilters: ['E-commerce', 'SaaS', 'Startups', 'Agencies', 'SMBs'],
    processSteps: [
      {
        name: 'Discovery',
        description: 'Understand requirements, users, and tech',
        honestStat: '1-2 weeks of planning saves months of rework'
      },
      {
        name: 'Design & Planning',
        description: 'Wireframes, mockups, architecture',
        honestStat: 'Good design = 40% faster development'
      },
      {
        name: 'Development',
        description: 'Build frontend, backend, integrate',
        honestStat: '2-4 months for MVP, 4-8 months for full features'
      },
      {
        name: 'Testing & Launch',
        description: 'QA, performance tuning, deployment',
        honestStat: 'Proper testing prevents 80% of production issues'
      }
    ],
    caseStudies: [
      {
        clientName: 'B2B SaaS Platform',
        problem: 'Slow, outdated platform, losing users',
        solution: 'Complete rewrite with React, Node.js, optimized DB',
        resultMetrics: [
          { label: 'Load Time', before: '8.5s', after: '1.2s' },
          { label: 'User Retention', before: '45%', after: '78%' },
          { label: 'Subscription Churn', before: '8%/mo', after: '2%/mo' }
        ]
      },
      {
        clientName: 'E-commerce Startup',
        problem: 'Manual order processing, no real analytics',
        solution: 'Custom e-commerce platform with analytics dashboard',
        resultMetrics: [
          { label: 'Orders/Month', before: '50', after: '400' },
          { label: 'Revenue', before: '₹2L', after: '₹25L' },
          { label: 'Process Time/Order', before: '30 min', after: '2 min' }
        ]
      }
    ],
    calculatorType: 'none'
  },

  {
    id: 'business-registration',
    title: 'Business Registration',
    icon: Building2,
    description: 'Streamline your business registration process with expert guidance and support.',
    tagline: 'Legal. Compliant. Effortless.',
    shortIntro: 'Turning bureaucratic headaches into simple, done-for-you paperwork.',
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
    whatsappText: 'I\'m interested in Business Registration services. Can you help me register my business?',
    
    // Hero section
    heroGraphicType: 'illustration',
    
    topProblems: [
      'Complex compliance requirements',
      'Unclear registration process',
      'Multiple registrations needed',
      'Fear of missing deadlines',
      'High legal consultation costs'
    ],
    offerings: [
      {
        name: 'Company Registration',
        icon: Building2,
        shortDesc: 'Legal entity setup',
        whatToExpect: 'DIN, CIN, MOA, AOA. Approval in 5-7 working days from filing.'
      },
      {
        name: 'GST Registration',
        icon: Building2,
        shortDesc: 'Tax registration',
        whatToExpect: 'GSTIN issued in 3-5 working days. ITR compliance setup.'
      },
      {
        name: 'Compliance',
        icon: Building2,
        shortDesc: 'Stay compliant',
        whatToExpect: 'Annual filings, ROC compliance, tax deadlines tracked and managed.'
      }
    ],
    deliverables: [
      { name: 'Document Preparation', description: 'MOA, AOA, DIN application, GST forms' },
      { name: 'Application Filing', description: 'Electronic submission to authorities' },
      { name: 'Follow-ups', description: 'Communication with govt for approvals' },
      { name: 'Certificate Delivery', description: 'CIN, GSTIN, registration certificates' },
      { name: 'Bank Account Setup', description: 'Guidance on opening business account' },
      { name: 'Compliance Calendar', description: 'Annual filing dates and requirements' }
    ],
    metrics: [
      { label: 'Registrations Done', value: '300+', description: 'Successful business formations' },
      { label: 'Approval Rate', value: '99%', description: 'First-time approvals' },
      { label: 'Avg Processing Time', value: '7 days', description: 'From filing to approval' }
    ],
    industryFilters: ['Startups', 'Freelancers', 'SMBs', 'Partnerships', 'Imports/Exports'],
    processSteps: [
      {
        name: 'Consultation',
        description: 'Understand your business type and needs',
        honestStat: 'Choosing right entity saves 40% on future taxes'
      },
      {
        name: 'Document Prep',
        description: 'Prepare all required forms and documents',
        honestStat: '90% of rejections are due to document errors'
      },
      {
        name: 'Filing',
        description: 'Submit electronically to authorities',
        honestStat: 'E-filing is faster: 3-5 days vs 15+ days postal'
      },
      {
        name: 'Approval & Certificate',
        description: 'Receive official certificates',
        honestStat: 'We chase follow-ups, you focus on business'
      }
    ],
    caseStudies: [
      {
        clientName: 'Tech Startup (3 founders)',
        problem: 'No idea how to register, worried about taxes',
        solution: 'Private Limited registration + GST setup + compliance roadmap',
        resultMetrics: [
          { label: 'Time Spent', before: 'Unknown', after: '5 hours total' },
          { label: 'Setup Cost', before: '₹50,000 (if hired separately)', after: '₹25,000' },
          { label: 'Confidence Level', before: 'Low', after: 'High' }
        ]
      },
      {
        clientName: 'Freelancer',
        problem: 'Operating without GST, worried about compliance',
        solution: 'GST registration + tax filing setup',
        resultMetrics: [
          { label: 'GSTIN Status', before: 'None', after: 'Active' },
          { label: 'Tax Savings', before: '0', after: '₹8,000/year' },
          { label: 'Compliance Risk', before: 'High', after: 'Zero' }
        ]
      }
    ],
    calculatorType: 'none'
  },

  {
    id: 'accounting-taxation',
    title: 'Accounting & Taxation',
    icon: Calculator,
    description: 'Expert accounting and tax services to keep your finances in order and compliant.',
    tagline: 'Numbers That Make Sense.',
    shortIntro: 'Making accounting less scary and taxes less painful. We handle the boring stuff so you focus on growth.',
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
    whatsappText: 'I\'m interested in Accounting & Taxation services. Can you help with my finances?',
    
    // Hero section
    heroGraphicType: 'financial-dashboard',
    
    topProblems: [
      'Cash flow confusion',
      'GST compliance stress',
      'Tax season panic',
      'Messy financial records',
      'Payroll complexity'
    ],
    offerings: [
      {
        name: 'Monthly Accounting',
        icon: Calculator,
        shortDesc: 'Clean books',
        whatToExpect: 'Invoicing, expense tracking, bank reconciliation. You get monthly P&L, balance sheet.'
      },
      {
        name: 'Tax Filing',
        icon: Calculator,
        shortDesc: 'Compliance',
        whatToExpect: 'ITR, GST returns filed on time. We optimize deductions, save you money on taxes.'
      },
      {
        name: 'Payroll',
        icon: Calculator,
        shortDesc: 'Employee payments',
        whatToExpect: 'Salary processing, TDS, statutory filings. On-time, accurate, zero compliance risk.'
      }
    ],
    deliverables: [
      { name: 'Monthly Bank Reconciliation', description: 'All transactions matched, verified' },
      { name: 'GST/VAT Filing', description: 'GSTR-1, GSTR-3B filed on time' },
      { name: 'Income Tax Return', description: 'ITR prepared with deduction optimization' },
      { name: 'Financial Statements', description: 'P&L, Balance Sheet, Cash Flow statement' },
      { name: 'Payroll Processing', description: 'Monthly salary, TDS, statutory compliance' },
      { name: 'Quarterly Reporting', description: 'Financial health dashboard' }
    ],
    metrics: [
      { label: 'Businesses Managed', value: '150+', description: 'Active accounting clients' },
      { label: 'Tax Saved', value: '₹2.5 Cr+', description: 'Aggregate deductions optimized' },
      { label: 'Filing Accuracy', value: '100%', description: 'Zero rejections, first-time approvals' }
    ],
    industryFilters: ['SMBs', 'Startups', 'E-commerce', 'Freelancers', 'Nonprofits'],
    processSteps: [
      {
        name: 'Bank Setup',
        description: 'Connect your bank accounts for auto-sync',
        honestStat: 'Automation reduces manual work by 70%'
      },
      {
        name: 'Expense Categorization',
        description: 'Organize expenses for deductions',
        honestStat: 'Good categorization = 15-20% tax savings'
      },
      {
        name: 'Monthly Reconciliation',
        description: 'Verify every transaction',
        honestStat: 'Early reconciliation catches errors early'
      },
      {
        name: 'Tax Planning & Filing',
        description: 'File returns, optimize deductions',
        honestStat: 'Proactive planning > reactive filings'
      }
    ],
    caseStudies: [
      {
        clientName: 'E-commerce Business',
        problem: 'Confused cash flow, missing GST deadlines',
        solution: 'Monthly accounting + GST automation + cash flow dashboard',
        resultMetrics: [
          { label: 'Filing Accuracy', before: '80%', after: '100%' },
          { label: 'Cash Flow Visibility', before: 'None', after: 'Real-time' },
          { label: 'Tax Liability', before: 'Unknown', after: 'Clear monthly forecast' }
        ]
      },
      {
        clientName: '10-person SaaS Startup',
        problem: 'Payroll chaos, no tax planning',
        solution: 'Automated payroll + accounting + quarterly tax planning',
        resultMetrics: [
          { label: 'Payroll Processing Time', before: '8 hours/mo', after: '30 min/mo' },
          { label: 'Tax Optimized', before: 'No', after: 'Yes (saving ₹3L+/year)' },
          { label: 'Compliance Risk', before: 'High', after: 'Zero' }
        ]
      }
    ],
    calculatorType: 'none'
  },

  {
    id: 'finance-loan',
    title: 'Finance & Loan',
    icon: Banknote,
    description: 'Access financial solutions and loan assistance tailored to your business needs.',
    tagline: 'Funding Made Simple.',
    shortIntro: 'Helping you access capital without the runaround. We know the lenders, you focus on growth.',
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
    whatsappText: 'I\'m interested in Finance & Loan services. Can you help me with financing options?',
    
    // Hero section
    heroGraphicType: 'financial-dashboard',
    
    topProblems: [
      'Hard to find right loan type',
      'Complex application process',
      'High interest rates',
      'Unclear EMI calculations',
      'Collateral & documentation hassle'
    ],
    offerings: [
      {
        name: 'Business Loans',
        icon: Banknote,
        shortDesc: 'Grow capital',
        whatToExpect: 'Quick approval (7-10 days), flexible repayment. Interest from 9-15% depending on profile.'
      },
      {
        name: 'Personal Loans',
        icon: Banknote,
        shortDesc: 'Instant funds',
        whatToExpect: 'Unsecured, no collateral needed. Approval in 24 hours, funds in 48 hours.'
      },
      {
        name: 'Credit Solutions',
        icon: Banknote,
        shortDesc: 'Build credit',
        whatToExpect: 'Credit card counseling, limit negotiation, score improvement tips.'
      }
    ],
    deliverables: [
      { name: 'Loan Assessment', description: 'Evaluate your eligibility and best options' },
      { name: 'Document Preparation', description: 'Organize all required paperwork' },
      { name: 'Lender Matching', description: 'Connect with best-fit lenders' },
      { name: 'Application Support', description: 'Guide through complete process' },
      { name: 'Negotiation', description: 'Negotiate rates and terms' },
      { name: 'Post-Approval Support', description: 'Disbursement and account setup' }
    ],
    metrics: [
      { label: 'Loans Processed', value: '200+', description: 'Successful loan approvals' },
      { label: 'Approval Rate', value: '85%', description: 'Eligible applicants approved' },
      { label: 'Avg Savings', value: '₹50K+', description: 'Per loan due to negotiation' }
    ],
    industryFilters: ['Startups', 'SMBs', 'Freelancers', 'Growth-stage companies', 'Expansion'],
    processSteps: [
      {
        name: 'Assessment',
        description: 'Understand your financial need and profile',
        honestStat: 'Most people don\'t know all their options'
      },
      {
        name: 'Lender Research',
        description: 'Find 3-5 best-fit lenders for you',
        honestStat: 'Right lender = 2-3% lower rates'
      },
      {
        name: 'Application',
        description: 'Submit to lenders, track progress',
        honestStat: 'Multiple applications increase approval odds'
      },
      {
        name: 'Approval & Setup',
        description: 'Finalize terms, get funds disbursed',
        honestStat: 'Process takes 7-21 days on average'
      }
    ],
    caseStudies: [
      {
        clientName: 'Manufacturing Startup',
        problem: 'Needed ₹50L for equipment, didn\'t know how',
        solution: 'Matched with SIDBI, guided through application',
        resultMetrics: [
          { label: 'Loan Approved', before: 'No', after: '₹50L @ 8.5%' },
          { label: 'Processing Time', before: '-', after: '10 days' },
          { label: 'Business Growth', before: '0%', after: '120% next year' }
        ]
      },
      {
        clientName: 'Freelancer',
        problem: 'Needed ₹5L for laptop and setup, bad credit',
        solution: 'Found alternative personal loan, rebuilt credit',
        resultMetrics: [
          { label: 'Loan Approved', before: 'Denied', after: '₹5L @ 12%' },
          { label: 'Credit Score', before: '580', after: '720 (6 months)' },
          { label: 'Monthly EMI', before: '-', after: '₹9,500' }
        ]
      }
    ],
    calculatorType: 'loan-emi'
  },

  {
    id: 'not-sure',
    title: 'Not Sure / Need Guidance',
    icon: HelpCircle,
    description: 'Not sure which service you need? Our experts can guide you through the best solution.',
    tagline: 'Free Consultation. No Pressure.',
    shortIntro: 'Lost? We\'ll help you find the right path without any sales pitch.',
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
