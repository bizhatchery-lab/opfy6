import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { ContactForm } from '@/components/ContactForm';
import { SERVICES } from '@/data/services';
import { INDUSTRIES } from '@/data/industries';
import { TESTIMONIALS } from '@/data/testimonials';
import { SEOHead } from '@/components/SEOHead';
import { SEO_CONFIG } from '@/config/seo';
import { generateOrganizationSchema, generateWebsiteSchema } from '@/utils/structured-data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ChevronRight, ArrowRight, CheckCircle2, TrendingUp, Shield, Clock } from 'lucide-react';

export default function Index() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Auto-slide testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle manual click
  const handleTestimonialClick = (index: number) => {
    setTestimonialIndex(index);
  };

  const faqItems = [
    {
      id: 'faq-1',
      question: 'What services does OperateForYou provide?',
      answer: 'We offer comprehensive business solutions including Digital Marketing, Web Development, Business Registration, Accounting & Taxation, and Finance & Loan assistance. Each service is tailored to meet your specific business needs.',
    },
    {
      id: 'faq-2',
      question: 'How long does it take to see results?',
      answer: 'Results vary by service. Digital marketing typically shows initial results within 3-6 months, web development projects are usually completed in 4-12 weeks, and registration services are often completed within 2-4 weeks. We provide regular updates throughout the process.',
    },
    {
      id: 'faq-3',
      question: 'Do you offer customized solutions?',
      answer: 'Absolutely! All our services are customized based on your business requirements, industry, budget, and goals. We conduct a thorough assessment before proposing solutions.',
    },
    {
      id: 'faq-4',
      question: 'What is your pricing model?',
      answer: 'Our pricing varies by service complexity and scope. We offer flexible engagement models including project-based, retainer, and performance-based pricing. Contact us for a customized quote.',
    },
    {
      id: 'faq-5',
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we provide ongoing support and maintenance for all our services. We offer various support packages to ensure your business continues to thrive.',
    },
    {
      id: 'faq-6',
      question: 'How do I get started?',
      answer: 'Simply fill out our contact form or call us at +91 8233232100. Our team will schedule a consultation to understand your needs and propose the best solution.',
    },
  ];

  const trustMetrics = [
    { icon: TrendingUp, label: 'Business Growth' },
    { icon: Shield, label: 'Transparent Communication' },
    { icon: Clock, label: 'On-time Delivery' },
    { icon: CheckCircle2, label: 'Industry Expertise' },
    { icon: ArrowRight, label: 'Dedicated Support' },
    { icon: TrendingUp, label: 'Client-first Approach' },
  ];

  const seoConfig = SEO_CONFIG.pages.home;
  const structuredData = [
    generateOrganizationSchema(),
    generateWebsiteSchema(),
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
      <section className="bg-brand-bg py-8 md:py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Left Side */}
            <div className="dynamic-glow rounded-2xl bg-white p-6 md:p-12 shadow-sm border border-gray-100">
              <h1 className="text-3xl md:text-5xl font-bold text-brand-text mb-3 md:mb-4 leading-tight">
                Complete Business Solutions for Your Growth
              </h1>
              <p className="text-base md:text-lg text-brand-text-soft mb-6 md:mb-8 leading-relaxed">
                From digital marketing to web development, business registration to accounting, we provide end-to-end solutions to help your business thrive in today's competitive market.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-lg border-2 border-brand-primary hover:bg-blue-700 hover:border-blue-700 transition-all hover:shadow-lg font-medium text-sm md:text-base"
                >
                  Get Started Today
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-brand-text rounded-lg hover:border-brand-primary hover:bg-gray-100 transition-colors font-medium text-sm md:text-base"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Business Solutions"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="container-custom py-8 md:py-16 lg:py-24">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-brand-text mb-3 md:mb-4">
            Why Choose OperateForYou?
          </h2>
          <p className="text-sm md:text-lg text-brand-text-soft max-w-2xl mx-auto">
            We prioritize your success with reliable, transparent services designed to help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6 lg:gap-4">
          {trustMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="dynamic-glow bg-white rounded-xl p-2 md:p-6 lg:p-4 border border-gray-100 hover:border-brand-accent transition-colors text-center"
              >
                <div className="flex justify-center mb-2 md:mb-3 lg:mb-2">
                  <Icon className="w-5 md:w-8 lg:w-8 h-5 md:h-8 lg:h-8 text-brand-accent" />
                </div>
                <h3 className="text-xs md:text-sm lg:text-base font-semibold text-brand-text line-clamp-2">{metric.label}</h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-brand-bg py-8 md:py-16 lg:py-24 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-brand-text mb-3 md:mb-4">
              Our Services
            </h2>
            <p className="text-sm md:text-lg text-brand-text-soft max-w-2xl">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 auto-rows-fr">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  to={service.id === 'not-sure' ? '/contact' : `/service/${service.id}`}
                  className="dynamic-glow group flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-brand-accent"
                >
                  {/* Service Image - Compact with gradient fade effect */}
                  {service.imageUrl && (
                    <div className="relative w-full flex-shrink-0 overflow-hidden" style={{ height: '120px' }}>
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
                        <span className="absolute top-2 right-2 text-xs font-bold bg-brand-accent text-white px-2 py-1 rounded-full shadow-md">
                          Popular
                        </span>
                      )}
                    </div>
                  )}

                  {/* Card Content - Compact spacing */}
                  <div className="flex flex-col flex-1 p-3 sm:p-4 md:p-5">
                    {/* Icon - Reduced size */}
                    <div className="mb-2 md:mb-2.5 flex-shrink-0">
                      <Icon className="w-6 md:w-8 h-6 md:h-8 text-brand-primary" />
                    </div>

                    {/* Title - Tighter spacing */}
                    <h3 className="text-sm md:text-base font-bold text-brand-text mb-1.5 md:mb-2 group-hover:text-brand-primary transition-colors leading-tight flex-shrink-0">
                      {service.title}
                    </h3>

                    {/* Description - Reduced margin */}
                    <p className="text-brand-text-soft text-xs md:text-sm mb-2 md:mb-3 leading-snug flex-grow">
                      {service.description}
                    </p>

                    {/* Features - Desktop only, compact spacing */}
                    <ul className="space-y-1.5 mb-3 md:mb-4 hidden md:flex md:flex-col flex-shrink-0">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-xs text-brand-text-soft flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-secondary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button - Compact */}
                    <button className="w-full px-3 py-2 bg-gray-100 text-brand-primary border-2 border-gray-300 rounded-lg hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-200 font-medium text-xs group-hover:shadow-md flex items-center justify-center gap-1.5 flex-shrink-0">
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="container-custom py-6 md:py-10 lg:py-14">
        <div className="flex flex-col">
          {/* Section Header */}
          <div className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-brand-text mb-2 md:mb-3">
              Industries we scale with confidence
            </h2>
            <p className="text-xs md:text-sm text-brand-text-soft leading-relaxed max-w-2xl">
              Our strategies are tailored for industries where leads, conversions and ROI matter the most.
            </p>
          </div>

          {/* Single Row Layout - 3 columns on all screens */}
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3 lg:gap-4">
            {INDUSTRIES.map((industry) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.id}
                  className="dynamic-glow bg-white rounded-md p-2.5 md:p-3 border border-gray-100 hover:border-brand-accent transition-all duration-200 flex flex-col items-start group"
                >
                  <div className="mb-1.5 md:mb-2">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-brand-primary" />
                  </div>
                  <h4 className="text-xs md:text-sm font-bold text-brand-text mb-1 line-clamp-2">
                    {industry.title}
                  </h4>
                  <p className="text-xs text-brand-text-soft leading-tight line-clamp-2">
                    {industry.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container-custom py-8 md:py-16 lg:py-24">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-brand-text mb-2 md:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-sm md:text-lg text-brand-text-soft max-w-2xl mx-auto">
            Real results from businesses we've helped grow
          </p>
        </div>

        <div className="dynamic-glow bg-gradient-to-br from-brand-primary to-blue-700 rounded-2xl p-6 md:p-12 text-white overflow-hidden">
          <div key={testimonialIndex} className="flex justify-between items-start mb-6 md:mb-8 min-h-40 md:min-h-48 animate-fade">
            <div>
              <p className="text-base md:text-xl leading-relaxed mb-4 md:mb-6 min-h-20 md:min-h-24">
                "{TESTIMONIALS[testimonialIndex].feedback}"
              </p>
              <div>
                <p className="font-bold text-base md:text-lg">{TESTIMONIALS[testimonialIndex].name}</p>
                <p className="text-blue-100 text-xs md:text-sm">{TESTIMONIALS[testimonialIndex].company}</p>
                <p className="text-blue-200 text-xs md:text-sm mt-1">{TESTIMONIALS[testimonialIndex].result}</p>
              </div>
            </div>
            <div className="flex-shrink-0 text-4xl md:text-6xl opacity-20 hidden md:block">❝</div>
          </div>

          <div className="flex gap-3 justify-center">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => handleTestimonialClick(index)}
                className={`h-2 rounded-full transition-all border border-white ${
                  index === testimonialIndex
                    ? 'bg-white w-6 md:w-8 animate-pulse'
                    : 'bg-transparent w-2 hover:bg-white/40'
                }`}
                title={`Testimonial ${index + 1}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="bg-brand-bg py-8 md:py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-brand-text mb-2 md:mb-4">
              Get Started Today
            </h2>
            <p className="text-sm md:text-lg text-brand-text-soft max-w-2xl mx-auto">
              Fill out the form below and our team will get back to you within 24 hours
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container-custom py-8 md:py-16 lg:py-24">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-brand-text mb-2 md:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-lg text-brand-text-soft max-w-2xl mx-auto">
            Get answers to common questions about our services
          </p>
        </div>

        <div className="dynamic-glow max-w-3xl mx-auto bg-white rounded-xl border border-gray-100 p-4 md:p-8">
          <Accordion type="single" collapsible>
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-b border-gray-200 last:border-0">
                <AccordionTrigger className="text-base md:text-lg font-semibold text-brand-text hover:text-brand-primary py-3 md:py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs md:text-base text-brand-text-soft leading-relaxed pb-3 md:pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-6 md:mt-12">
          <p className="text-xs md:text-base text-brand-text-soft mb-4 md:mb-6">
            Still have questions? Let's talk!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-2 md:py-3 bg-brand-primary text-white rounded-lg border-2 border-brand-primary hover:bg-blue-700 hover:border-blue-700 transition-all hover:shadow-lg font-medium text-sm md:text-base"
          >
            Contact Us Today
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
      </Layout>
    </>
  );
}
