import { Layout } from '@/components/Layout';
import { ArrowRight, MapPin, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { generateOrganizationSchema } from '@/utils/structured-data';

export default function Careers() {
  const seoConfig = {
    title: 'Join Our Team - Careers at OperateForYou',
    description: 'Explore exciting career opportunities at OperateForYou. Join our team of talented professionals in Digital Marketing, Web Development, and Business Solutions.',
    keywords: 'careers, jobs, digital marketing jobs, web development jobs, employment opportunities',
  };
  const structuredData = generateOrganizationSchema();
  const jobListings = [
    {
      id: 1,
      title: 'Digital Marketing Executive',
      experience: '1–3 Years',
      location: 'Remote',
      description: 'Manage ads, SEO tasks, lead campaigns and performance tracking.',
    },
    {
      id: 2,
      title: 'SEO Specialist',
      experience: '2–4 Years',
      location: 'Hybrid',
      description: 'On-page, off-page SEO, audits, content optimization.',
    },
    {
      id: 3,
      title: 'Sales / Lead Conversion Manager',
      experience: '2+ Years',
      location: 'Onsite',
      description: 'Handle incoming leads and conversion strategy.',
    },
    {
      id: 4,
      title: 'Web Developer',
      experience: '1–3 Years',
      location: 'Remote/Hybrid',
      description: 'Build and maintain websites, landing pages, and web applications with modern frameworks.',
    },
    {
      id: 5,
      title: 'Prompt Engineer',
      experience: '0–2 Years',
      location: 'Remote',
      description: 'Craft and optimize AI prompts, develop AI workflows, and integrate LLMs into business solutions.',
    },
  ];

  return (
    <>
      <SEOHead
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        structuredData={structuredData}
      />
      <Layout>
      {/* Hero Section */}
      <section className="bg-brand-bg py-12 md:py-20 lg:py-28">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-text mb-4 md:mb-6 leading-tight">
              Build Your Career With Us
            </h1>
            <p className="text-base md:text-lg text-brand-text-soft leading-relaxed">
              Join Rankoholic Digital and work on real growth projects, performance marketing and scalable digital systems.
            </p>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="container-custom py-12 md:py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {jobListings.map((job) => (
            <div
              key={job.id}
              className="dynamic-glow bg-white rounded-lg border border-gray-100 p-6 md:p-8 hover:shadow-lg hover:border-brand-accent transition-all duration-200"
            >
              {/* Job Title */}
              <h3 className="text-xl md:text-2xl font-bold text-brand-text mb-4">
                {job.title}
              </h3>

              {/* Job Details */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-6 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-brand-accent flex-shrink-0" />
                  <span className="text-brand-text-soft">
                    <span className="font-semibold text-brand-text">Experience:</span> {job.experience}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-brand-accent flex-shrink-0" />
                  <span className="text-brand-text-soft">
                    <span className="font-semibold text-brand-text">Location:</span> {job.location}
                  </span>
                </div>
              </div>

              {/* Job Description */}
              <p className="text-sm md:text-base text-brand-text-soft mb-6 leading-relaxed">
                {job.description}
              </p>

              {/* Apply Button */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm md:text-base shadow-sm hover:shadow-md"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-bg py-12 md:py-16 lg:py-20">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-4 md:mb-6">
            Don't see a position that matches your skills?
          </h2>
          <p className="text-base md:text-lg text-brand-text-soft mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let's explore opportunities together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm md:text-base shadow-sm hover:shadow-md"
          >
            Send Your Resume
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
      </Layout>
    </>
  );
}
