import React, { useState } from 'react';
import { Info } from 'lucide-react';

interface CalculatorProps {
  type: 'ads-budget-estimator' | 'loan-emi';
  disclaimer?: string;
  accentColor?: string;
}

export const EnhancedCalculator: React.FC<CalculatorProps> = ({
  type,
  disclaimer,
  accentColor = '#3b82f6',
}) => {
  const [adSpend, setAdSpend] = useState(50000);
  const [loanAmount, setLoanAmount] = useState(500000);
  const [tenure, setTenure] = useState(60); // months

  if (type === 'ads-budget-estimator') {
    const estimatedLeads = Math.round((adSpend / 10000) * 3); // ~3 leads per 10k
    const estimatedCostPerLead = Math.round(adSpend / estimatedLeads);

    return (
      <div className="w-full bg-white rounded-xl border border-gray-200 p-6 md:p-8">
        <h3 className="text-2xl font-bold text-brand-text mb-6">
          Budget → Expected Leads Calculator
        </h3>

        <div className="space-y-6">
          {/* Ad Spend Slider */}
          <div className="group">
            <div className="flex justify-between items-center mb-3">
              <label className="font-semibold text-brand-text">
                Monthly Ad Spend (What If?)
              </label>
              <span className="text-2xl font-bold" style={{ color: accentColor }}>
                ₹{adSpend.toLocaleString('en-IN')}
              </span>
            </div>

            <input
              type="range"
              min="10000"
              max="1000000"
              step="10000"
              value={adSpend}
              onChange={(e) => setAdSpend(parseInt(e.target.value))}
              className="w-full h-3 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, ${accentColor} 0%, ${accentColor} ${(adSpend / 1000000) * 100}%, #e5e7eb ${(adSpend / 1000000) * 100}%, #e5e7eb 100%)`,
              }}
            />

            <div className="flex justify-between text-xs text-brand-text-soft mt-2">
              <span>₹10,000</span>
              <span>₹1,000,000</span>
            </div>

            {/* Hover detail */}
            <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-brand-text-soft">
              Drag slider to see how budget affects potential leads
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-2 gap-4 p-4 bg-blue-50 rounded-lg">
            <div>
              <p className="text-xs text-brand-text-soft uppercase mb-1">Estimated Leads/Month</p>
              <p className="text-3xl font-bold" style={{ color: accentColor }}>
                {estimatedLeads}
              </p>
            </div>
            <div>
              <p className="text-xs text-brand-text-soft uppercase mb-1">Cost Per Lead</p>
              <p className="text-3xl font-bold" style={{ color: accentColor }}>
                ₹{estimatedCostPerLead.toLocaleString('en-IN')}
              </p>
            </div>
          </div>

          {/* Honest Disclaimer */}
          <div className="p-4 border-l-4 rounded-lg bg-yellow-50" style={{ borderColor: accentColor }}>
            <div className="flex gap-3">
              <Info className="w-5 h-5 flex-shrink-0" style={{ color: accentColor }} />
              <div className="text-sm">
                <p className="font-semibold text-brand-text mb-1">Reality Check</p>
                <p className="text-brand-text-soft">
                  {disclaimer || "These are estimates based on similar early-stage clients. Actual results vary significantly by industry, market, creative quality, and targeting. Some industries see 5-10 leads, others get 20+. We'll refine based on your actual performance data."}
                </p>
              </div>
            </div>
          </div>

          {/* What affects results */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold text-brand-text mb-3">Variables That Impact Results:</p>
            <ul className="space-y-2 text-sm text-brand-text-soft">
              <li>• Industry (SaaS vs Local = wildly different CAC)</li>
              <li>• Market saturation in your niche</li>
              <li>• Quality of your landing page & offer</li>
              <li>• Targeting precision & audience size</li>
              <li>• Ad creative & messaging</li>
              <li>• Competition & bid landscape</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'loan-emi') {
    const ratePerMonth = 0.75; // 9% annual = 0.75% monthly (example)
    const emi = loanAmount * (ratePerMonth / 100 * Math.pow(1 + ratePerMonth / 100, tenure)) / (Math.pow(1 + ratePerMonth / 100, tenure) - 1);
    const totalPayable = emi * tenure;
    const totalInterest = totalPayable - loanAmount;

    return (
      <div className="w-full bg-white rounded-xl border border-gray-200 p-6 md:p-8">
        <h3 className="text-2xl font-bold text-brand-text mb-6">
          Loan EMI Calculator
        </h3>

        <div className="space-y-6">
          {/* Loan Amount Slider */}
          <div className="group">
            <div className="flex justify-between items-center mb-3">
              <label className="font-semibold text-brand-text">
                Loan Amount
              </label>
              <span className="text-2xl font-bold" style={{ color: accentColor }}>
                ₹{loanAmount.toLocaleString('en-IN')}
              </span>
            </div>

            <input
              type="range"
              min="100000"
              max="5000000"
              step="100000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(parseInt(e.target.value))}
              className="w-full h-3 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, ${accentColor} 0%, ${accentColor} ${(loanAmount / 5000000) * 100}%, #e5e7eb ${(loanAmount / 5000000) * 100}%, #e5e7eb 100%)`,
              }}
            />

            <div className="flex justify-between text-xs text-brand-text-soft mt-2">
              <span>₹1,00,000</span>
              <span>₹50,00,000</span>
            </div>
          </div>

          {/* Tenure Slider */}
          <div className="group">
            <div className="flex justify-between items-center mb-3">
              <label className="font-semibold text-brand-text">
                Loan Tenure (What If?)
              </label>
              <span className="text-2xl font-bold" style={{ color: accentColor }}>
                {tenure} months
              </span>
            </div>

            <input
              type="range"
              min="12"
              max="120"
              step="6"
              value={tenure}
              onChange={(e) => setTenure(parseInt(e.target.value))}
              className="w-full h-3 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, ${accentColor} 0%, ${accentColor} ${(tenure / 120) * 100}%, #e5e7eb ${(tenure / 120) * 100}%, #e5e7eb 100%)`,
              }}
            />

            <div className="flex justify-between text-xs text-brand-text-soft mt-2">
              <span>1 year</span>
              <span>10 years</span>
            </div>

            <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-brand-text-soft">
              Longer tenure = lower EMI but more interest paid
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-3 gap-3 p-4 bg-blue-50 rounded-lg">
            <div>
              <p className="text-xs text-brand-text-soft uppercase mb-1">Monthly EMI</p>
              <p className="text-2xl font-bold" style={{ color: accentColor }}>
                ₹{Math.round(emi).toLocaleString('en-IN')}
              </p>
            </div>
            <div>
              <p className="text-xs text-brand-text-soft uppercase mb-1">Total Interest</p>
              <p className="text-2xl font-bold text-red-600">
                ₹{Math.round(totalInterest).toLocaleString('en-IN')}
              </p>
            </div>
            <div>
              <p className="text-xs text-brand-text-soft uppercase mb-1">Total Payable</p>
              <p className="text-2xl font-bold" style={{ color: accentColor }}>
                ₹{Math.round(totalPayable).toLocaleString('en-IN')}
              </p>
            </div>
          </div>

          {/* Honest Disclaimer */}
          <div className="p-4 border-l-4 rounded-lg bg-yellow-50" style={{ borderColor: accentColor }}>
            <div className="flex gap-3">
              <Info className="w-5 h-5 flex-shrink-0" style={{ color: accentColor }} />
              <div className="text-sm">
                <p className="font-semibold text-brand-text mb-1">This is an Estimate</p>
                <p className="text-brand-text-soft">
                  {disclaimer || "Actual EMI may vary based on your credit score, lender, processing fees, insurance, and final approved loan amount. Interest rates range from 8-15% depending on loan type and credit profile. Talk to us for personalized quotes from multiple lenders."}
                </p>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold text-brand-text mb-3">Money-Saving Tips:</p>
            <ul className="space-y-2 text-sm text-brand-text-soft">
              <li>✓ Higher down payment = lower loan amount = less interest</li>
              <li>✓ Better credit score = lower interest rate</li>
              <li>✓ Shorter tenure = less interest (but higher EMI)</li>
              <li>✓ Prepayment options let you reduce interest mid-term</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
