import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { ContactForm } from '@/components/ContactForm';
import { SERVICES } from '@/data/services';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { SEO_CONFIG } from '@/config/seo';
import { generateServiceSchema, generateOrganizationSchema } from '@/utils/structured-data';
import { InteractiveHeroGraphic } from '@/components/interactive/InteractiveHeroGraphic';
import { InteractiveProblems } from '@/components/interactive/InteractiveProblems';
import { FlipCardGrid } from '@/components/interactive/FlipCard';
import { MetricsGauge } from '@/components/interactive/MetricsGauge';
import { InteractiveTimeline } from '@/components/interactive/InteractiveTimeline';
import { BeforeAfterChart } from '@/components/interactive/BeforeAfterChart';
import { InteractiveWhiteboard } from '@/components/interactive/InteractiveWhiteboard';
import { EnhancedCalculator } from '@/components/interactive/EnhancedCalculator';

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
            {/* Interactive Graphic or Image */}
            <div className="order-first lg:order-none">
              {service.heroGraphicType && service.heroGraphicType !== 'illustration' ? (
                <InteractiveHeroGraphic
                  type={service.heroGraphicType}
                  codeComment={service.heroCodeComment}
                  metrics={service.metrics}
                />
              ) : service.heroGraphicType === 'illustration' ? (
                <InteractiveHeroGraphic
                  type="illustration"
                />
              ) : service.imageUrl ? (
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover"
                  />
                </div>
              ) : null}
            </div>

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
              {service.shortIntro && (
                <p className="text-base md:text-lg lg:text-xl text-brand-text font-semibold mb-3 leading-relaxed">
                  {service.shortIntro}
                </p>
              )}
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
            {/* Interactive Problems & Solutions */}
            {service.topProblems && service.topProblems.length > 0 && service.offerings && service.offerings.length > 0 && (
              <div className="mb-8 md:mb-12 pb-8 md:pb-12 border-b border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-6 md:mb-8">
                  We Understand Your Challenges
                </h2>
                <InteractiveProblems
                  problems={service.topProblems}
                  offerings={service.offerings}
                  accentColor="#3b82f6"
                />
              </div>
            )}

            {/* Flip Cards - What We Offer */}
            {service.offerings && service.offerings.length > 0 ? (
              <div className="mb-8 md:mb-12 pb-8 md:pb-12 border-b border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-6 md:mb-8">
                  What We Deliver (Hover to Learn More)
                </h2>
                <FlipCardGrid
                  offerings={service.offerings}
                  accentColor="#3b82f6"
                />
              </div>
            ) : (
              <div className="mb-8 md:mb-12 pb-8 md:pb-12 border-b border-gray-200">
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
            )}

            {/* Deliverables & Metrics */}
            {(service.deliverables || service.metrics) && (
              <div className="mb-8 md:mb-12 pb-8 md:pb-12 border-b border-gray-200">
                {service.metrics && service.metrics.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-6 md:mb-8">
                      Our Impact by the Numbers
                    </h2>
                    <MetricsGauge
                      metrics={service.metrics}
                      accentColor="#3b82f6"
                    />
                  </div>
                )}

                {service.deliverables && service.deliverables.length > 0 && (
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-6 md:mb-8">
                      What You'll Receive
                    </h2>
                    <div className="space-y-3">
                      {service.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex gap-4 p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-sm font-bold">
                            ✓
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-brand-text">{deliverable.name}</h4>
                            <p className="text-sm text-brand-text-soft mt-1">{deliverable.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Interactive Process Timeline */}
            {service.processSteps && service.processSteps.length > 0 ? (
              <div className="mb-8 md:mb-12 pb-8 md:pb-12 border-b border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-6 md:mb-8">
                  Our Process (Click Steps for Insights)
                </h2>
                <InteractiveTimeline
                  steps={service.processSteps}
                  accentColor="#3b82f6"
                />
              </div>
            ) : (
              <div className="mb-8 md:mb-12 pb-8 md:pb-12 border-b border-gray-200">
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
            )}

            {/* Case Studies */}
            {service.caseStudies && service.caseStudies.length > 0 && (
              <div className="mb-8 md:mb-12 pb-8 md:pb-12 border-b border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-6 md:mb-8">
                  Real Results from Real Clients
                </h2>
                <BeforeAfterChart
                  caseStudies={service.caseStudies}
                  accentColor="#3b82f6"
                />
              </div>
            )}
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

      {/* Calculator Section */}
      {service.calculatorType && service.calculatorType !== 'none' && (
        <section className="py-8 md:py-16 lg:py-24 w-full">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <EnhancedCalculator
              type={service.calculatorType}
              disclaimer={service.calculatorHonestDisclaimer}
              accentColor="#3b82f6"
            />
          </div>
        </section>
      )}

      {/* Interactive CTA Section with Whiteboard */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-8 md:py-16 lg:py-24 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text mb-4">
                Ready to Transform?
              </h2>
              <p className="text-base md:text-lg text-brand-text-soft leading-relaxed mb-6">
                Let's sit down (virtually) and map out your success strategy. We'll collaborate, brainstorm, and create a roadmap tailored to your unique challenges.
              </p>
              <div className="flex gap-4">
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('[data-contact-form]')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Start Your Journey
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Interactive Whiteboard */}
            <InteractiveWhiteboard accentColor="#3b82f6" />
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
