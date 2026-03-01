import { Layout } from '@/components/Layout';
import { ContactForm } from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { SEO_CONFIG } from '@/config/seo';
import { generateOrganizationSchema } from '@/utils/structured-data';

export default function Contact() {
  const seoConfig = SEO_CONFIG.pages.contact;
  const structuredData = generateOrganizationSchema();

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
            Get In Touch
          </h1>
          <p className="text-xl text-brand-text-soft max-w-2xl">
            Have questions? We'd love to hear from you. Let's discuss how we can help your business grow.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container-custom section-py">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-brand-text mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <a
                  href="tel:+918233232100"
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                    <Phone className="w-6 h-6 text-brand-accent group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-text">Phone</p>
                    <p className="text-brand-text-soft group-hover:text-brand-accent transition-colors">
                      +91 8233232100
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:hello@operateforyou.com"
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                    <Mail className="w-6 h-6 text-brand-accent group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-text">Email</p>
                    <p className="text-brand-text-soft group-hover:text-brand-accent transition-colors">
                      hello@operateforyou.com
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-text">Location</p>
                    <p className="text-brand-text-soft">Delhi NCR, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="dynamic-glow bg-brand-accent/10 rounded-lg p-6">
              <h4 className="font-semibold text-brand-text mb-2">Response Time</h4>
              <p className="text-sm text-brand-text-soft">
                We typically respond to inquiries within 24 hours during business days.
              </p>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918233232100?text=Hi%2C%20I%27m%20interested%20in%20OperateForYou%27s%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 bg-[#25D366] text-white border-2 border-[#25D366] rounded-lg hover:bg-[#128C7E] hover:border-[#128C7E] hover:shadow-lg transition-all font-medium w-full justify-center md:w-auto"
              aria-label="Chat with us on WhatsApp"
            >
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form & Image */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="rounded-xl overflow-hidden shadow-lg hidden lg:block">
                <img
                  src="https://images.pexels.com/photos/7994325/pexels-photo-7994325.jpeg?w=500&h=600&fit=crop"
                  alt="Contact Us"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white rounded-xl border border-gray-100 p-8 md:p-10">
                <h2 className="text-2xl font-bold text-brand-text mb-2">Send Us a Message</h2>
                <p className="text-brand-text-soft mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary text-white">
        <div className="container-custom section-py text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you choose to call, email, or use WhatsApp, we're here to help you succeed.
          </p>
          <a
            href="tel:+918233232100"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-primary border-2 border-white rounded-lg hover:bg-gray-100 hover:border-gray-200 transition-all font-bold text-lg shadow-lg hover:shadow-xl"
          >
            <Phone className="w-5 h-5" />
            Call Us Now
          </a>
        </div>
      </section>
      </Layout>
    </>
  );
}
