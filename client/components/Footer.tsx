import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  const services = [
    { label: 'Digital Marketing', path: '/service/digital-marketing' },
    { label: 'Web Development', path: '/service/web-development' },
    { label: 'Business Registration', path: '/service/business-registration' },
    { label: 'Accounting & Taxation', path: '/service/accounting-taxation' },
    { label: 'Finance & Loan Assistance', path: '/service/finance-loan' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Disclaimer', path: '/disclaimer' },
  ];

  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com/operateforyou', label: 'Facebook', type: 'icon' },
    { icon: null, url: 'https://x.com/operateforyou', label: 'X', type: 'svg' },
    { icon: Youtube, url: 'https://youtube.com/@operateforyou', label: 'YouTube', type: 'icon' },
    { icon: Linkedin, url: 'https://linkedin.com/company/operateforyou', label: 'LinkedIn', type: 'icon' },
    { icon: Instagram, url: 'https://instagram.com/operateforyou', label: 'Instagram', type: 'icon' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-custom py-8 md:py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6">
          {/* Column 1: Logo & Description */}
          <div>
            <Link to="/" className="mb-4 hover:opacity-80 transition-opacity inline-block">
              <div className="flex items-center justify-center gap-1 p-1 h-[38px]" style={{ backgroundColor: 'rgba(55, 65, 81, 0.5)', borderRadius: '10px', overflow: 'hidden' }}>
                <img src="https://cdn.builder.io/api/v1/image/assets%2F33c55feb7bb542699c50b2b385d21d9f%2Ffb6fb834270f414b9c5cd5f21643fcc1" alt="OperateForYou" className="h-10 w-auto object-contain brightness-0 invert" />
                <img src="https://cdn.builder.io/api/v1/image/assets%2F33c55feb7bb542699c50b2b385d21d9f%2F11b71ac627234a73ab8fdf09d5c02add" alt="OperateForYou" className="h-28 w-auto object-contain brightness-0 invert translate-y-1" style={{ transform: 'translateX(-9px) translateY(3px)' }} />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              Your trusted partner for digital marketing, web development, business registration, and financial services in India.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800 p-2 rounded-full hover:bg-brand-primary transition-colors text-white"
                    title={social.label}
                  >
                    {social.type === 'svg' ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.693-5.829 6.693h-3.31l7.732-8.835L.424 2.25h6.678l4.921 6.306L17.518 2.25h.726zm-1.106 17.793h1.828L5.631 4.126H3.622l13.516 15.917z" />
                      </svg>
                    ) : (
                      Icon && <Icon className="w-4 h-4" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="pt-1">
            <h4 className="text-base font-semibold mb-3 text-white">Quick Links</h4>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-brand-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="pt-1">
            <h4 className="text-base font-semibold mb-3 text-white">Services</h4>
            <ul className="space-y-1.5">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-brand-accent text-sm transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="pt-1">
            <h4 className="text-base font-semibold mb-3 text-white">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Delhi NCR, India</span>
              </li>
              <li className="flex gap-3 items-start">
                <Phone className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                <a href="tel:+918233232100" className="text-gray-300 hover:text-brand-accent text-sm transition-colors">
                  +91 82332 32100
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <Mail className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                <a href="mailto:hello@operateforyou.com" className="text-gray-300 hover:text-brand-accent text-sm transition-colors">
                  hello@operateforyou.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-4 md:pt-5">
          {/* Legal Links */}
          <div className="flex flex-col md:flex-row md:justify-end gap-4 md:gap-6 mb-2 md:mb-3">
            {legalLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-400 hover:text-brand-accent text-xs transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-left text-white text-xs md:text-sm leading-relaxed mt-2">
            <p className="flex items-center gap-2 whitespace-nowrap text-white">
              &copy; {currentYear}. Built with
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ff4d4f"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ verticalAlign: 'middle' }}
                className="flex-shrink-0"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              by our team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
