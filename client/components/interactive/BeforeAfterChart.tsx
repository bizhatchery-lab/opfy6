import React, { useState, useEffect } from 'react';
import { CaseStudy, CaseStudyMetric } from '@/data/services';

interface MetricBarProps {
  metric: CaseStudyMetric;
  accentColor?: string;
  animated?: boolean;
}

const MetricBar: React.FC<MetricBarProps> = ({
  metric,
  accentColor = '#3b82f6',
  animated = true,
}) => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (animated) {
      setShowAnimation(true);
    }
  }, [animated]);

  // Try to parse numeric values
  const parseValue = (val: string | number): number => {
    if (typeof val === 'number') return val;
    const numStr = val.toString().replace(/[^0-9.+]/g, '');
    const num = parseFloat(numStr);
    return isNaN(num) ? 0 : num;
  };

  const beforeVal = parseValue(metric.before);
  const afterVal = parseValue(metric.after);
  const maxVal = Math.max(beforeVal, afterVal);
  const beforePercent = (beforeVal / maxVal) * 100;
  const afterPercent = (afterVal / maxVal) * 100;

  return (
    <div className="mb-6">
      {/* Label */}
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold text-brand-text text-sm md:text-base">
          {metric.label}
        </h4>
      </div>

      {/* Before and After bars */}
      <div className="grid grid-cols-2 gap-4">
        {/* Before */}
        <div>
          <p className="text-xs text-brand-text-soft mb-2">Before</p>
          <div className="relative h-8 md:h-10 bg-gray-100 rounded overflow-hidden">
            <div
              className="h-full bg-gray-400 transition-all duration-1000 ease-out flex items-center px-2"
              style={{
                width: showAnimation ? `${beforePercent}%` : '0%',
              }}
            >
              <span className="text-white font-bold text-xs md:text-sm whitespace-nowrap">
                {metric.before}
              </span>
            </div>
          </div>
        </div>

        {/* After */}
        <div>
          <p className="text-xs text-brand-text-soft mb-2">After</p>
          <div className="relative h-8 md:h-10 bg-gray-100 rounded overflow-hidden">
            <div
              className="h-full bg-gradient-to-r transition-all duration-1000 ease-out flex items-center px-2"
              style={{
                backgroundImage: `linear-gradient(90deg, ${accentColor}, ${accentColor}cc)`,
                width: showAnimation ? `${afterPercent}%` : '0%',
              }}
            >
              <span className="text-white font-bold text-xs md:text-sm whitespace-nowrap">
                {metric.after}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Improvement indicator */}
      {showAnimation && (
        <div className="mt-2 flex items-center gap-2 text-sm">
          <span className="text-green-600 font-semibold">↑ Improvement</span>
          <span className="text-xs text-brand-text-soft">
            ({Math.round(((afterVal - beforeVal) / beforeVal) * 100)}% increase)
          </span>
        </div>
      )}
    </div>
  );
};

interface BeforeAfterChartProps {
  caseStudies: CaseStudy[];
  accentColor?: string;
}

export const BeforeAfterChart: React.FC<BeforeAfterChartProps> = ({
  caseStudies = [],
  accentColor = '#3b82f6',
}) => {
  const [activeIdx, setActiveIdx] = useState(0);

  if (caseStudies.length === 0) {
    return (
      <div className="text-center py-8 text-brand-text-soft">
        No case studies available
      </div>
    );
  }

  const activeCase = caseStudies[activeIdx];

  return (
    <div className="w-full">
      {/* Carousel controls */}
      {caseStudies.length > 1 && (
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {caseStudies.map((caseStudy, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className="flex-shrink-0 px-4 py-2 rounded-lg border-2 transition-all duration-300 whitespace-nowrap text-sm md:text-base font-semibold"
              style={{
                borderColor: activeIdx === idx ? accentColor : '#e5e7eb',
                backgroundColor: activeIdx === idx ? `${accentColor}15` : 'transparent',
                color: activeIdx === idx ? accentColor : '#6b7280',
              }}
            >
              {caseStudy.clientName}
            </button>
          ))}
        </div>
      )}

      {/* Case study content */}
      <div className="bg-gray-50 rounded-xl p-6 md:p-8">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-brand-text mb-2">
            {activeCase.clientName}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-brand-text-soft uppercase font-semibold mb-1">
                Challenge
              </p>
              <p className="text-sm md:text-base text-brand-text">
                {activeCase.problem}
              </p>
            </div>
            <div>
              <p className="text-xs text-brand-text-soft uppercase font-semibold mb-1">
                Solution
              </p>
              <p className="text-sm md:text-base text-brand-text">
                {activeCase.solution}
              </p>
            </div>
          </div>
        </div>

        {/* Metrics visualization */}
        <div className="border-t border-gray-200 pt-6">
          <h4 className="font-bold text-brand-text mb-6">Results Achieved</h4>
          <div className="space-y-6">
            {activeCase.resultMetrics.map((metric, idx) => (
              <MetricBar
                key={idx}
                metric={metric}
                accentColor={accentColor}
                animated={true}
              />
            ))}
          </div>
        </div>

        {/* Honest footer */}
        <div
          className="mt-6 p-4 rounded-lg border-l-4 text-sm"
          style={{
            borderColor: accentColor,
            backgroundColor: `${accentColor}08`,
          }}
        >
          <p className="text-brand-text-soft italic">
            Results may vary based on market, execution, and business maturity. These are real results from actual clients in similar industries.
          </p>
        </div>
      </div>
    </div>
  );
};
