import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist. Let's get you back on track."
        noindex={true}
      />
      <Layout>
      <section className="flex items-center justify-center min-h-screen bg-brand-bg">
        <div className="container-custom text-center py-24">
          <div className="mb-8">
            <h1 className="text-7xl md:text-9xl font-bold text-brand-accent mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-brand-text-soft max-w-md mx-auto mb-8">
              Sorry, the page you're looking for doesn't exist. Let's get you back on track.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-primary text-white rounded-lg hover:bg-blue-700 transition-all font-medium"
            >
              Back to Home
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-300 text-brand-text rounded-lg hover:border-brand-accent transition-colors font-medium"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
      </Layout>
    </>
  );
};

export default NotFound;
