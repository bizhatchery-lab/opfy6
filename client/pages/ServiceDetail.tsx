import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { ContactForm } from '@/components/ContactForm';
import { SERVICES } from '@/data/services';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { SEO_CONFIG } from '@/config/seo';
import { generateServiceSchema, generateOrganizationSchema } from '@/utils/structured-data';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return (
      <>
        <SEOHead
          title="Service Not Found"
          description="The service you're looking for doesn't exist."
          noindex={true}
        />
        <Layout>
        <section className="container-custom section-py text-center">
          <h1 className="text-3xl font-bold text-brand-text mb-4">Service Not Found</h1>
          <p className="text-brand-text-soft mb-8">The service you're looking for doesn't exist.</p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white border-2 border-brand-primary rounded-lg hover:bg-blue-700 hover:border-blue-700 transition-colors font-medium"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
        </Layout>
      </>
    );
  }

  const Icon = service.icon;
  const relatedServices = SERVICES.filter(s => s.id !== id).slice(0, 3);

  // Get SEO config for the specific service
  const serviceTemplate = SEO_CONFIG.serviceTemplate[id as keyof typeof SEO_CONFIG.serviceTemplate] || {
    title: service.title,
    description: service.description,
    keywords: service.features.join(', ') + ', ' + service.title,
  };

  const structuredData = [
    generateOrganizationSchema(),
    generateServiceSchema(id || '', service.title, service.description, service.features),
  ];

  return (
    <>
      <SEOHead
        title={serviceTemplate.title}
        description={serviceTemplate.description}
        keywords={serviceTemplate.keywords}
        url={`${SEO_CONFIG.defaults.url}/service/${id}`}
        structuredData={structuredData}
      />
      <Layout>
      {/* Hero */}
      <section className="bg-brand-bg py-8 md:py-16 lg:py-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center">
            {/* Image on top for mobile, left on desktop */}
            {service.imageUrl && (
              <div className="order-first lg:order-none rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover"
                />
              </div>
            )}

            {/* Text Content */}
            <div>
              <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="p-2 md:p-3 bg-brand-primary text-white rounded-lg flex-shrink-0 mt-1">
                  <Icon className="w-6 md:w-8 h-6 md:h-8" />
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text leading-tight">
                  {service.title}
                </h1>
              </div>
              <p className="text-base md:text-lg lg:text-xl text-brand-text-soft leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 md:py-16 lg:py-24 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Features */}
            <div className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-6 md:mb-8">
                What We Offer
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-brand-text">{feature}</h3>
                      <p className="text-sm text-brand-text-soft mt-1">
                        Comprehensive solution tailored to your needs
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose */}
            <div className="mb-8 md:mb-12 bg-brand-bg rounded-xl p-4 md:p-6 lg:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-brand-text mb-4 md:mb-6">
                Why Choose {service.title} with Us?
              </h2>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex gap-3">
                  <span className="text-brand-primary font-bold">✓</span>
                  <span className="text-brand-text">Expert team with years of industry experience</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-primary font-bold">✓</span>
                  <span className="text-brand-text">Transparent communication and regular updates</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-primary font-bold">✓</span>
                  <span className="text-brand-text">Customized solutions tailored to your business</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-primary font-bold">✓</span>
                  <span className="text-brand-text">Proven track record of delivering results</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-primary font-bold">✓</span>
                  <span className="text-brand-text">Dedicated support throughout your journey</span>
                </li>
              </ul>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-2xl font-bold text-brand-text mb-8">
                Our Process
              </h2>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Consultation', desc: 'We discuss your needs and goals' },
                  { step: '2', title: 'Assessment', desc: 'Thorough analysis of your current situation' },
                  { step: '3', title: 'Strategy', desc: 'Custom plan tailored to your business' },
                  { step: '4', title: 'Execution', desc: 'Implementation with regular updates' },
                  { step: '5', title: 'Results', desc: 'Delivery and ongoing support' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-text text-lg">{item.title}</h3>
                      <p className="text-brand-text-soft">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Contact Form */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 lg:p-6 shadow-sm">
              <h3 className="text-xl md:text-2xl lg:text-xl font-bold text-brand-text mb-3">
                Interested?
              </h3>
              <p className="text-sm md:text-base lg:text-xs text-brand-text-soft mb-4">
                Tell us about your needs and we'll get back to you shortly.
              </p>
              <ContactForm defaultService={id} variant="compact" />
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="bg-brand-bg py-8 md:py-16 lg:py-24 w-full">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-8 md:mb-12 text-center">
              Other Services You Might Need
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {relatedServices.map(relatedService => {
                const RelatedIcon = relatedService.icon;
                return (
                  <Link
                    key={relatedService.id}
                    to={`/service/${relatedService.id}`}
                    className="dynamic-glow service-card"
                  >
                    <RelatedIcon className="w-10 h-10 text-brand-primary mb-4" />
                    <h3 className="text-xl font-bold text-brand-text mb-2">
                      {relatedService.title}
                    </h3>
                    <p className="text-brand-text-soft text-sm mb-6">
                      {relatedService.description}
                    </p>
                    <div className="text-brand-primary font-semibold flex items-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
      </Layout>
    </>
  );
}
