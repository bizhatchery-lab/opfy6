import { Layout } from '@/components/Layout';
import { SEOHead } from '@/components/SEOHead';

export default function Disclaimer() {
  const seoConfig = {
    title: 'Disclaimer - OperateForYou',
    description: 'Read the disclaimer for OperateForYou services. Important information about how we provide our business solutions.',
    keywords: 'disclaimer',
  };

  return (
    <>
      <SEOHead
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        robots="index, nofollow"
      />
      <Layout>
      <section className="container-custom section-py">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-brand-text mb-8">Disclaimer</h1>

          <div className="prose prose-lg max-w-none text-brand-text-soft space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">1. General Disclaimer</h2>
              <p>
                The information provided on the OperateForYou website and through its services is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">2. Professional Advice Disclaimer</h2>
              <p>
                The content on our website is not intended to be professional advice. Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">3. Business Outcomes Disclaimer</h2>
              <p>
                Results may vary based on individual circumstances. While OperateForYou strives to deliver quality services and solutions, we cannot guarantee specific business outcomes or results. The success of any service depends on various factors including, but not limited to, market conditions, implementation quality, and business context.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">4. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of these external sites. Your use of third-party websites is at your own risk and subject to their terms of service and privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">5. No Warranty</h2>
              <p>
                The website and all materials are provided on an "as-is" and "as-available" basis without any warranties or representations. OperateForYou disclaims all implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, OperateForYou shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses resulting from your use or inability to use the website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">7. Financial & Legal Advice</h2>
              <p>
                Nothing on this website should be construed as financial, legal, tax, or accounting advice. We recommend consulting with qualified professionals before making business or financial decisions. OperateForYou is not a substitute for professional legal, tax, or financial advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">8. Compliance Responsibility</h2>
              <p>
                While we provide guidance on compliance matters, users are solely responsible for ensuring their compliance with all applicable laws and regulations. Laws vary by jurisdiction, and it is your responsibility to verify applicability to your situation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">9. Changes to Disclaimer</h2>
              <p>
                We may update this disclaimer at any time without notice. Your continued use of the website constitutes your acceptance of the updated disclaimer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">10. Contact Us</h2>
              <p>
                If you have any questions about this Disclaimer, please contact us at:
              </p>
              <ul className="space-y-2">
                <li>Email: hello@operateforyou.com</li>
                <li>Phone: +91 8233232100</li>
                <li>Address: Delhi NCR, India</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
      </Layout>
    </>
  );
}
