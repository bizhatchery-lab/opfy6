import { Layout } from '@/components/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Lightbulb } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { SEO_CONFIG } from '@/config/seo';
import { generateOrganizationSchema, generateCompanySchema } from '@/utils/structured-data';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Client-Focused',
      description: 'Your success is our success. We align our strategies with your business goals.'
    },
    {
      icon: Lightbulb,
      title: 'Innovative Solutions',
      description: 'We stay ahead of industry trends to provide cutting-edge solutions for your business.'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Our expert team is committed to delivering exceptional results and support.'
    },
  ];

  const seoConfig = SEO_CONFIG.pages.about;
  const structuredData = [
    generateOrganizationSchema(),
    generateCompanySchema(),
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
      {/* Hero */}
      <section className="bg-brand-bg pt-20 pb-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-4">
            About OperateForYou
          </h1>
          <p className="text-xl text-brand-text-soft max-w-2xl">
            We're a team of experts dedicated to helping businesses like yours grow and succeed.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container-custom section-py">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-6">
              Our Story
            </h2>
            <p className="text-brand-text-soft text-lg mb-4 leading-relaxed">
              OperateForYou was founded with a simple mission: to provide complete business solutions that help entrepreneurs and small businesses focus on what they do best—growing their business.
            </p>
            <p className="text-brand-text-soft text-lg mb-4 leading-relaxed">
              Over the years, we've helped hundreds of businesses navigate the complexities of digital marketing, web development, business registration, accounting, and financial solutions. Our approach is personalized, transparent, and results-driven.
            </p>
            <p className="text-brand-text-soft text-lg leading-relaxed">
              Today, we continue to evolve and innovate, ensuring that our clients always have access to the latest technologies and strategies to succeed in their markets.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
              alt="Our Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-brand-bg">
        <div className="container-custom section-py">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-brand-text-soft max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="dynamic-glow bg-white rounded-xl p-8 text-center border border-gray-100">
                  <Icon className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-brand-text mb-3">
                    {value.title}
                  </h3>
                  <p className="text-brand-text-soft leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-bg">
        <div className="container-custom section-py text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-brand-text-soft mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business thrive
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-white rounded-lg hover:bg-blue-700 transition-all font-medium hover:shadow-lg"
          >
            Start Your Journey
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
      </Layout>
    </>
  );
}
