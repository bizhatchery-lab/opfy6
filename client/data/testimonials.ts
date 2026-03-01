export interface Testimonial {
  id: string;
  name: string;
  company: string;
  service: string;
  feedback: string;
  result: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    company: 'TechStart Solutions',
    service: 'Digital Marketing',
    feedback: 'OperateForYou completely transformed our online presence. Their strategic approach to digital marketing increased our leads by 300% in just 6 months.',
    result: '300% increase in leads',
    avatar: 'RK'
  },
  {
    id: '2',
    name: 'Priya Singh',
    company: 'Fashion Boutique Delhi',
    service: 'Web Development',
    feedback: 'The web development team delivered an exceptional e-commerce platform. Our sales have never been better. Professional, timely, and brilliant execution.',
    result: '250% increase in online sales',
    avatar: 'PS'
  },
  {
    id: '3',
    name: 'Amit Patel',
    company: 'Patel Enterprises',
    service: 'Business Registration',
    feedback: 'The registration process was seamless. OperateForYou handled all the documentation and compliance requirements. Highly professional team!',
    result: 'Compliant business setup',
    avatar: 'AP'
  },
  {
    id: '4',
    name: 'Neha Verma',
    company: 'Audit & Associates',
    service: 'Accounting & Taxation',
    feedback: 'Their accounting expertise saved us significant tax burden. Regular compliance reports and proactive financial advice keep us worry-free.',
    result: '₹45 Lakh tax savings',
    avatar: 'NV'
  },
  {
    id: '5',
    name: 'Vikram Shah',
    company: 'Growth Capital',
    service: 'Finance & Loan',
    feedback: 'Exceptional support in securing business financing. Their guidance through the loan process was invaluable. Highly recommended!',
    result: '₹50 Lakh business loan approved',
    avatar: 'VS'
  }
];
