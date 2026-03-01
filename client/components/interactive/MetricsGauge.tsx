import React, { useEffect, useState } from 'react';
import { MetricItem } from '@/data/services';

interface MetricsGaugeProps {
  metrics: MetricItem[];
  accentColor?: string;
}

const parsePercentage = (value: string): number => {
  const numStr = value.replace('%', '').replace('+', '');
  const num = parseInt(numStr, 10);
  return isNaN(num) ? 0 : Math.min(num, 100);
};

export const MetricsGauge: React.FC<MetricsGaugeProps> = ({
  metrics = [],
  accentColor = '#3b82f6',
}) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {metrics.map((metric, idx) => {
          const percentage = parsePercentage(metric.value);

          return (
            <div key={idx} className="group cursor-default">
              {/* Header */}
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold text-brand-text transition-colors group-hover:text-blue-600">
                  {metric.label}
                </h4>
                <span
                  className="text-lg font-bold transition-colors"
                  style={{ color: accentColor }}
                >
                  {metric.value}
                </span>
              </div>

              {/* Gauge/Progress Bar */}
              <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden transition-all duration-300 group-hover:h-4 group-hover:shadow-md" style={{ boxShadow: 'var(--shadow, none)' }}>
                {/* Animated fill */}
                <div
                  className="h-full bg-gradient-to-r rounded-full transition-all duration-1000 ease-out"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${accentColor}, ${accentColor}dd)`,
                    width: animated ? `${percentage}%` : '0%',
                    boxShadow: `0 0 10px ${accentColor}40`,
                  }}
                />
              </div>

              {/* Tooltip/Description */}
              {metric.description && (
                <p className="text-xs text-brand-text-soft mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {metric.description}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Summary section if we have enough metrics */}
      {metrics.length > 0 && (
        <div
          className="mt-8 p-4 rounded-lg border-l-4 transition-all duration-300 hover:shadow-md"
          style={{
            borderColor: accentColor,
            backgroundColor: `${accentColor}08`,
          }}
        >
          <p className="text-sm text-brand-text-soft italic">
            These metrics represent our commitment to excellence and measurable results. All data is based on actual client outcomes from similar projects.
          </p>
        </div>
      )}
    </div>
  );
};
