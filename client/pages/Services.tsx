import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { SERVICES } from '@/data/services';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { SEO_CONFIG } from '@/config/seo';
import { generateProfessionalServiceSchema, generateOrganizationSchema } from '@/utils/structured-data';

export default function Services() {
  const seoConfig = SEO_CONFIG.pages.services;
  const structuredData = [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
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
            Our Services
          </h1>
          <p className="text-xl text-brand-text-soft max-w-2xl">
            Comprehensive business solutions designed to help your company grow and succeed.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container-custom section-py">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map(service => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                to={service.id === 'not-sure' ? '/contact' : `/service/${service.id}`}
                className="dynamic-glow service-card-compact group flex flex-col overflow-hidden"
              >
                {/* Service Image - Compact with gradient fade effect */}
                {service.imageUrl && (
                  <div className="relative w-full flex-shrink-0 overflow-hidden rounded-lg -m-8 mb-4 mx-8 mt-8" style={{ height: '140px' }}>
                    {/* Image with blur effect on bottom */}
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Gradient fade overlay - transparent to white */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/40 pointer-events-none"></div>
                    {/* Blur effect on bottom portion - smaller and more subtle */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/5 backdrop-blur-xs pointer-events-none"></div>
                    {(service.id === 'digital-marketing' || service.id === 'web-development') && (
                      <span className="absolute top-2 right-2 text-xs font-bold bg-brand-accent text-white px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                )}

                {/* Icon */}
                <div className="flex items-start justify-between mb-2">
                  <Icon className="w-10 h-10 text-brand-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-brand-text mb-2 group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-brand-text-soft mb-4 leading-snug">
                  {service.description}
                </p>

                {/* Features - Compact spacing */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="text-sm text-brand-text-soft flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-secondary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full px-4 py-2.5 bg-gray-100 text-brand-primary border-2 border-gray-300 rounded-lg hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all font-medium group-hover:shadow-md flex items-center justify-center gap-2">
                  Explore Service
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-brand-bg">
        <div className="container-custom section-py text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            Why Choose OperateForYou?
          </h2>
          <p className="text-lg text-brand-text-soft max-w-2xl mx-auto mb-12">
            We combine expertise, innovation, and dedication to deliver exceptional results
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Expert Team', desc: 'Experienced professionals in every service area' },
              { title: 'Custom Solutions', desc: 'Tailored approaches for your unique needs' },
              { title: 'Proven Results', desc: 'Track record of delivering measurable outcomes' },
            ].map((item, idx) => (
              <div key={idx} className="dynamic-glow bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-brand-text mb-3">{item.title}</h3>
                <p className="text-brand-text-soft">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-custom section-py text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-brand-text-soft mb-8 max-w-2xl mx-auto">
          Let's discuss which service is right for your business
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-white border-2 border-brand-primary rounded-lg hover:bg-blue-700 hover:border-blue-700 transition-all font-medium hover:shadow-lg"
        >
          Schedule Consultation
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
      </Layout>
    </>
  );
}
