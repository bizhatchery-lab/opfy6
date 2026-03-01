import {
  Building2,
  BookOpen,
  TrendingUp,
  Heart,
  MapPin,
  Rocket,
} from 'lucide-react';

export interface Industry {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export const INDUSTRIES: Industry[] = [
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: 'High-ticket lead generation & calling support',
    icon: Building2,
  },
  {
    id: 'education',
    title: 'Education',
    description: 'Student enquiries, admissions & funnel marketing',
    icon: BookOpen,
  },
  {
    id: 'finance',
    title: 'Finance & CA Firms',
    description: 'Qualified leads for services & consultations',
    icon: TrendingUp,
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Patient acquisition & local visibility',
    icon: Heart,
  },
  {
    id: 'travel',
    title: 'Travel & Hospitality',
    description: 'Seasonal demand capture & bookings',
    icon: MapPin,
  },
  {
    id: 'startups',
    title: 'Startups & MSMEs',
    description: 'Growth systems from launch to scale',
    icon: Rocket,
  },
];
