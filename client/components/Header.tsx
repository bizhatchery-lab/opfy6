import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { id: 'digital-marketing', label: 'Digital Marketing' },
    { id: 'web-development', label: 'Web Development' },
    { id: 'business-registration', label: 'Business Registration' },
    { id: 'accounting-taxation', label: 'Accounting & Taxation' },
    { id: 'finance-loan', label: 'Finance & Loan' },
  ];

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services', hasDropdown: true, items: services },
    { path: '/blog', label: 'Blog' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="header-sticky">
      <div className="container-custom h-20 flex items-center justify-between">
        {/* Logo and Slogan */}
        <Link to="/" className="flex items-center gap-4 flex-shrink-0 hover:opacity-80 transition-opacity">
          <img src="https://cdn.builder.io/api/v1/image/assets%2Fe855c778fc3e4b59839b13c5b558557d%2F3736476c84744af4a03c5cabc784c358?format=webp&width=800&height=1200" alt="OperateForYou" className="h-14 w-auto object-contain" />
          <div className="hidden md:block border-l border-brand-divider pl-4">
            <div className="text-xs font-medium text-brand-text-medium leading-tight">
              <div>Complete Business Solutions for</div>
              <div>Growth, Compliance & Marketing</div>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.path}>
              {link.hasDropdown ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className={`text-sm font-medium transition-colors hover:text-brand-accent ${isActive(link.path) ? 'text-brand-accent border-b-2 border-brand-accent' : 'text-brand-text'}`}>
                    {link.label}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48 bg-white border border-gray-100 rounded-lg shadow-lg">
                    {link.items?.map((item) => (
                      <DropdownMenuItem key={item.id} asChild>
                        <Link
                          to={`/service/${item.id}`}
                          className="flex items-center justify-between cursor-pointer hover:bg-brand-accent hover:text-white transition-colors"
                        >
                          {item.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-brand-accent ${
                    isActive(link.path)
                      ? 'text-brand-accent border-b-2 border-brand-accent'
                      : 'text-brand-text'
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+918233232100"
            className="flex items-center gap-2 px-4 py-2.5 bg-white border-2 border-gray-300 text-brand-text rounded-lg hover:bg-gray-100 hover:border-gray-400 transition-colors text-sm font-medium"
          >
            <Phone className="w-4 h-4" />
            <span>Call Us</span>
          </a>
          <Link
            to="/contact"
            className="flex items-center gap-2 px-5 py-2.5 bg-brand-primary text-white border-2 border-brand-primary rounded-lg hover:bg-blue-700 hover:border-blue-700 transition-colors text-sm font-medium shadow-sm hover:shadow-md"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-brand-text" />
          ) : (
            <Menu className="w-6 h-6 text-brand-text" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 p-6 space-y-4">
          {navLinks.map((link) => (
            <div key={link.path}>
              <Link
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm font-medium py-2 transition-colors ${
                  isActive(link.path)
                    ? 'text-brand-accent'
                    : 'text-brand-text hover:text-brand-accent'
                }`}
              >
                {link.label}
              </Link>
              {link.hasDropdown && (
                <div className="pl-4 space-y-2 mt-2">
                  {link.items?.map((item) => (
                    <Link
                      key={item.id}
                      to={`/service/${item.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs text-brand-text-soft hover:text-brand-accent py-1 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 border-t border-gray-100 space-y-3">
            <a
              href="tel:+918233232100"
              className="flex items-center gap-2 px-4 py-2.5 bg-white border-2 border-gray-300 text-brand-text rounded-lg hover:bg-gray-100 hover:border-gray-400 transition-colors text-sm font-medium w-full"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-primary text-white border-2 border-brand-primary rounded-lg hover:bg-blue-700 hover:border-blue-700 transition-colors text-sm font-medium w-full"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
