import { Layout } from '@/components/Layout';
import { SEOHead } from '@/components/SEOHead';
import { SEO_CONFIG } from '@/config/seo';

export default function Terms() {
  const seoConfig = SEO_CONFIG.pages.terms;

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
          <h1 className="text-4xl font-bold text-brand-text mb-8">Terms of Service</h1>

          <div className="prose prose-lg max-w-none text-brand-text-soft space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using the OperateForYou website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on OperateForYou's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">3. Disclaimer</h2>
              <p>
                The materials on OperateForYou's website are provided on an 'as is' basis. OperateForYou makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">4. Limitations</h2>
              <p>
                In no event shall OperateForYou or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on OperateForYou's website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on OperateForYou's website could include technical, typographical, or photographic errors. OperateForYou does not warrant that any of the materials on its website are accurate, complete, or current. OperateForYou may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">6. Links</h2>
              <p>
                OperateForYou has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by OperateForYou of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">7. Modifications</h2>
              <p>
                OperateForYou may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-text mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
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
