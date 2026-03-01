import { useState, useEffect } from 'react';
import { SERVICES } from '@/data/services';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  defaultService?: string;
  variant?: 'default' | 'compact';
  onSuccess?: () => void;
}

export function ContactForm({ defaultService, variant = 'default', onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService || '',
    subcategory: '',
    company: '',
    budget: '',
    message: '',
    _honey: '',
  });

  const [ipAddress, setIpAddress] = useState<string>('');
  const [budgetInput, setBudgetInput] = useState<string>('0');

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  // Fetch IP address on component mount
  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (err) {
        console.error('Failed to fetch IP address:', err);
        setIpAddress('Unknown');
      }
    };
    fetchIpAddress();
  }, []);

  const selectedService = SERVICES.find(s => s.id === formData.service);
  const subcategories = selectedService?.subcategories || [];

  // Check if the selected service allows budget display
  const isBudgetVisibleService = formData.service === 'web-development' || formData.service === 'digital-marketing';

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
      errors.phone = 'Please enter a valid phone number';
    }

    if (!formData.service) {
      errors.service = 'Please select a service';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'service' && { subcategory: '' }), // Reset subcategory when service changes
    }));

    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Non-linear mapping: percent (0-100) -> budget (0-1000000)
  const mapPercentToBudget = (percent: number): number => {
    const p = percent / 100;
    let mapped = 0;

    if (p <= 0.65) {
      mapped = Math.pow(p / 0.65, 2) * 500000;
    } else {
      mapped = 500000 + Math.pow((p - 0.65) / 0.35, 2) * 500000;
    }

    // Round to nearest 1000
    return Math.round(mapped / 1000) * 1000;
  };

  // Inverse mapping: budget (0-1000000) -> percent (0-100)
  const mapBudgetToPercent = (budget: number): number => {
    if (budget <= 0) return 0;
    if (budget >= 1000000) return 100;

    if (budget <= 500000) {
      return (Math.sqrt(budget / 500000) * 0.65) * 100;
    } else {
      const upper = budget - 500000;
      return (0.65 + (Math.sqrt(upper / 500000) * 0.35)) * 100;
    }
  };

  const handleBudgetSliderChange = (value: string) => {
    const percent = parseInt(value, 10);
    const actualBudget = mapPercentToBudget(percent);
    const budgetStr = actualBudget.toString();

    setBudgetInput(budgetStr);
    setFormData(prev => ({ ...prev, budget: budgetStr }));
  };

  const handleBudgetInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^\d]/g, '');

    // If empty, set to 0
    if (value === '') {
      value = '0';
    } else {
      // Clamp value to 0 to 1000000
      const numValue = parseInt(value, 10);
      if (numValue < 0) {
        value = '0';
      } else if (numValue > 1000000) {
        value = '1000000';
      } else {
        value = numValue.toString();
      }
    }

    setBudgetInput(value);
    setFormData(prev => ({ ...prev, budget: value }));
  };

  const formatCurrency = (value: string | number): string => {
    const num = typeof value === 'string' ? parseInt(value) : value;
    return '₹' + num.toLocaleString('en-IN');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot
    if (formData._honey) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Set budget to 'Na' if service is not Web Development or Digital Marketing
      const budgetValue = isBudgetVisibleService ? (formData.budget || '') : 'Na';

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        subcategory: formData.subcategory || '',
        budget: budgetValue,
        company: formData.company || '',
        message: formData.message,
        source: 'operateforyou.com',
        ip_address: ipAddress,
        user_agent: navigator.userAgent,
      };

      const response = await fetch(
        'https://operateforyou.com/form-proxy.php',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'cors',
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Store lead in localStorage
      const timestamp = new Date().getTime();
      const leads = JSON.parse(localStorage.getItem('operateForYouLeads') || '[]');
      leads.push({ ...payload, id: timestamp });
      localStorage.setItem('operateForYouLeads', JSON.stringify(leads));

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: defaultService || '',
        subcategory: '',
        company: '',
        budget: '',
        message: '',
        _honey: '',
      });
      setBudgetInput('0');

      if (onSuccess) {
        onSuccess();
      }

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Unable to submit form at the moment. Please try again or contact us at hello@operateforyou.com or WhatsApp: +91 8233232100');
    } finally {
      setLoading(false);
    }
  };

  const containerClass = variant === 'compact' ? 'bg-gray-50 rounded-lg p-6' : 'bg-white';

  return (
    <div className={containerClass}>
      {success && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
          <div>
            <p className="text-green-800 font-medium text-sm">Thank you for contacting OperateForYou!</p>
            <p className="text-green-700 text-xs">Our team will reach out to you within 24 hours.</p>
          </div>
        </div>
      )}

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
          <div>
            <p className="text-red-800 font-medium text-sm">Something went wrong</p>
            <p className="text-red-700 text-xs">{error}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Honeypot field */}
        <input
          type="text"
          name="_honey"
          value={formData._honey}
          onChange={handleChange}
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-brand-text mb-1">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={`w-full px-4 py-3 border rounded-lg font-sans text-brand-text placeholder-gray-400 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all ${
              fieldErrors.name ? 'border-red-300' : 'border-gray-300'
            }`}
          />
          {fieldErrors.name && (
            <p className="mt-1 text-sm text-red-600">{fieldErrors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-brand-text mb-1">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={`w-full px-4 py-3 border rounded-lg font-sans text-brand-text placeholder-gray-400 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all ${
              fieldErrors.email ? 'border-red-300' : 'border-gray-300'
            }`}
          />
          {fieldErrors.email && (
            <p className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-brand-text mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className={`w-full px-4 py-3 border rounded-lg font-sans text-brand-text placeholder-gray-400 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all ${
              fieldErrors.phone ? 'border-red-300' : 'border-gray-300'
            }`}
          />
          {fieldErrors.phone && (
            <p className="mt-1 text-sm text-red-600">{fieldErrors.phone}</p>
          )}
        </div>

        {/* Service */}
        <div>
          <label className="block text-sm font-medium text-brand-text mb-1">
            Service Needed *
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg font-sans text-brand-text bg-white focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all ${
              fieldErrors.service ? 'border-red-300' : 'border-gray-300'
            }`}
          >
            <option value="">Select a service...</option>
            {SERVICES.map(service => (
              <option key={service.id} value={service.id}>
                {service.title}
              </option>
            ))}
          </select>
          {fieldErrors.service && (
            <p className="mt-1 text-sm text-red-600">{fieldErrors.service}</p>
          )}
        </div>

        {/* Subcategory */}
        {subcategories.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-brand-text mb-1">
              Specific Service
            </label>
            <select
              name="subcategory"
              value={formData.subcategory}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg font-sans text-brand-text bg-white focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all"
            >
              <option value="">Select (optional)</option>
              {subcategories.map(subcat => (
                <option key={subcat} value={subcat}>
                  {subcat}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Company Name */}
        <div>
          <label className="block text-sm font-medium text-brand-text mb-1">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter your company name (optional)"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg font-sans text-brand-text placeholder-gray-400 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all"
          />
        </div>

        {/* Budget Range - Only visible for Web Development and Digital Marketing */}
        {isBudgetVisibleService && (
          <div>
            <label className="block text-sm font-medium text-brand-text mb-1">
              Budget Range (optional)
            </label>
            <div className="space-y-2">
              <div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={Math.round(mapBudgetToPercent(parseInt(formData.budget || '0', 10)))}
                  onChange={(e) => handleBudgetSliderChange(e.target.value)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹0</span>
                  <span>₹10,00,000</span>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-xs font-medium text-brand-text whitespace-nowrap">Value:</span>
                <input
                  type="text"
                  value={formatCurrency(budgetInput)}
                  onChange={handleBudgetInputChange}
                  placeholder="₹0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg font-sans text-brand-text text-sm focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all"
                />
              </div>
            </div>
          </div>
        )}

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-brand-text mb-1">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about your needs..."
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg font-sans text-brand-text placeholder-gray-400 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all resize-none"
          />
        </div>

        {/* Submit Button */}
        {!success && (
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-brand-primary text-white border-2 border-brand-primary rounded-lg font-medium transition-colors disabled:bg-gray-300 disabled:text-gray-600 disabled:border-gray-300 disabled:cursor-not-allowed shadow-sm hover:shadow-md hover:bg-blue-700 hover:border-blue-700"
          >
            {loading ? 'Submitting...' : 'Submit Enquiry'}
          </button>
        )}
      </form>
    </div>
  );
}
