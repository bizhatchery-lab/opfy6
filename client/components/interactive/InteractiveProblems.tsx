import React, { useState } from 'react';
import { Offering } from '@/data/services';

interface InteractiveProblemsProps {
  problems: string[];
  offerings?: Offering[];
  accentColor?: string;
}

export const InteractiveProblems: React.FC<InteractiveProblemsProps> = ({
  problems = [],
  offerings = [],
  accentColor = '#3b82f6',
}) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Map problems to offerings (simple index-based mapping)
  const getPairedOffering = (idx: number) => offerings[idx % offerings.length];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Problems */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-brand-text mb-6">
            The Challenges You Face
          </h3>
          <div className="space-y-3">
            {problems.map((problem, idx) => {
              const pairedOffering = getPairedOffering(idx);
              return (
                <div
                  key={idx}
                  className="relative p-4 rounded-lg border-2 border-gray-200 transition-all duration-300 cursor-default group dynamic-glow"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{
                    borderColor: hoveredIdx === idx ? accentColor : '#e5e7eb',
                    backgroundColor: hoveredIdx === idx ? 'rgba(59, 130, 246, 0.05)' : 'transparent',
                  }}
                >
                  {/* Animated glow */}
                  {hoveredIdx === idx && (
                    <div
                      className="absolute inset-0 rounded-lg opacity-10 pointer-events-none animate-pulse"
                      style={{ backgroundColor: accentColor }}
                    />
                  )}

                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-start gap-3">
                      <div
                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-sm transition-transform duration-300"
                        style={{
                          backgroundColor: accentColor,
                          transform: hoveredIdx === idx ? 'scale(1.1)' : 'scale(1)',
                        }}
                      >
                        ✓
                      </div>
                      <p className="text-brand-text font-semibold">{problem}</p>
                    </div>

                    {/* Hover hint */}
                    {hoveredIdx === idx && pairedOffering && (
                      <div className="mt-2 text-xs text-blue-600 font-medium opacity-75">
                        → See solution: {pairedOffering.name}
                      </div>
                    )}
                  </div>

                  {/* Dotted connector line (on hover) */}
                  {hoveredIdx === idx && (
                    <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-6 h-0.5 border-t-2 border-dashed opacity-30" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-brand-text mb-6">
            How We Solve It
          </h3>
          <div className="space-y-3">
            {offerings.map((offering, idx) => {
              const isHighlighted = hoveredIdx === idx;
              const Icon = offering.icon;

              return (
                <div
                  key={idx}
                  className="relative p-4 rounded-lg border-2 border-gray-200 transition-all duration-300 dynamic-glow"
                  style={{
                    borderColor: isHighlighted ? accentColor : '#e5e7eb',
                    backgroundColor: isHighlighted ? 'rgba(59, 130, 246, 0.08)' : 'transparent',
                    boxShadow: isHighlighted
                      ? `0 0 20px ${accentColor}20`
                      : 'none',
                  }}
                >
                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-start gap-3">
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300"
                        style={{
                          backgroundColor: accentColor,
                          transform: isHighlighted ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
                        }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-brand-text">{offering.name}</h4>
                        <p className="text-sm text-brand-text-soft mt-1">{offering.shortDesc}</p>
                      </div>
                    </div>

                    {/* Expanded detail on highlight */}
                    {isHighlighted && (
                      <div className="mt-3 pt-3 border-t border-gray-200 text-sm text-brand-text-soft animate-in fade-in slide-in-from-top duration-200">
                        <p className="italic">
                          {offering.whatToExpect}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
