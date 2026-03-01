import React, { useState, useRef, useEffect } from 'react';
import { ProcessStep } from '@/data/services';

interface InteractiveTimelineProps {
  steps: ProcessStep[];
  accentColor?: string;
}

export const InteractiveTimeline: React.FC<InteractiveTimelineProps> = ({
  steps = [],
  accentColor = '#3b82f6',
}) => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const windowHeight = window.innerHeight;

      // Calculate visibility: how much of the timeline is in view
      const visiblePart = Math.min(elementBottom, windowHeight) - Math.max(elementTop, 0);
      const totalHeight = elementBottom - elementTop;
      const progress = Math.max(0, Math.min(100, (visiblePart / totalHeight) * 100));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <div className="relative">
        {/* Timeline steps */}
        <div className="space-y-8 md:space-y-10">
          {steps.map((step, idx) => {
            const isExpanded = expandedIdx === idx;

            return (
              <div key={idx} className="relative flex gap-6 md:gap-8">
                {/* Timeline connector (vertical line) */}
                <div className="absolute left-5 md:left-6 top-12 bottom-0 w-0.5 md:w-1 transition-all duration-300 group" style={{ backgroundColor: '#e5e7eb' }}>
                  {/* Fill effect based on scroll */}
                  {idx < steps.length - 1 && (
                    <div
                      className="absolute top-0 left-0 w-full transition-all duration-500"
                      style={{
                        height: `${(scrollProgress - (idx * 15)) * 3}%`,
                        backgroundColor: accentColor,
                        opacity: scrollProgress > idx * 15 ? 1 : 0,
                      }}
                    />
                  )}
                </div>

                {/* Step dot */}
                <div className="relative flex-shrink-0">
                  <button
                    onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                    className="relative w-11 h-11 md:w-12 md:h-12 rounded-full border-4 transition-all duration-300 flex items-center justify-center font-bold text-white hover:scale-110 focus:outline-none"
                    style={{
                      borderColor: accentColor,
                      backgroundColor: isExpanded || scrollProgress > idx * 15 ? accentColor : '#ffffff',
                      color: isExpanded || scrollProgress > idx * 15 ? '#ffffff' : accentColor,
                      boxShadow: isExpanded ? `0 0 20px ${accentColor}40` : 'none',
                    }}
                  >
                    {idx + 1}
                  </button>
                </div>

                {/* Step content */}
                <div className="flex-1 pt-1">
                  <button
                    onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                    className="w-full text-left transition-all duration-300 hover:opacity-75"
                  >
                    <h3 className="text-lg md:text-xl font-bold text-brand-text mb-1">
                      {step.name}
                    </h3>
                    <p className="text-sm md:text-base text-brand-text-soft leading-relaxed">
                      {step.description}
                    </p>
                  </button>

                  {/* Expanded detail with stat */}
                  {isExpanded && step.honestStat && (
                    <div
                      className="mt-4 p-4 rounded-lg border-l-4 animate-in fade-in slide-in-from-top-2 duration-200"
                      style={{
                        borderColor: accentColor,
                        backgroundColor: `${accentColor}08`,
                      }}
                    >
                      <p className="text-sm font-semibold text-brand-text mb-1">
                        💡 Insight from experience:
                      </p>
                      <p className="text-sm text-brand-text-soft italic">
                        {step.honestStat}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Final checkmark */}
        {steps.length > 0 && (
          <div className="mt-8 md:mt-10 flex gap-6 md:gap-8">
            <div className="relative flex-shrink-0">
              <div
                className="w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center text-lg md:text-xl font-bold text-white transition-all duration-500"
                style={{
                  backgroundColor: scrollProgress > 85 ? accentColor : '#e5e7eb',
                  color: scrollProgress > 85 ? '#ffffff' : '#9ca3af',
                }}
              >
                ✓
              </div>
            </div>
            <div className="pt-1">
              <h3 className="font-bold text-brand-text text-lg md:text-xl">
                Success Achieved
              </h3>
              <p className="text-sm md:text-base text-brand-text-soft">
                You're ready to scale and grow your business
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Progress indicator text */}
      <div className="mt-8 text-center text-xs md:text-sm text-brand-text-soft">
        Scroll to see the journey unfold ↓
      </div>
    </div>
  );
};
