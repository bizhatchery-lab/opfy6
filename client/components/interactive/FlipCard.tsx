import React, { useState } from 'react';
import { Offering } from '@/data/services';

interface FlipCardProps {
  offering: Offering;
  accentColor?: string;
}

export const FlipCard: React.FC<FlipCardProps> = ({
  offering,
  accentColor = '#3b82f6',
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = offering.icon;

  return (
    <div
      className="relative h-64 cursor-pointer perspective group dynamic-glow"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{
        perspective: '1000px',
      }}
    >
      {/* Container with 3D flip */}
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full p-6 rounded-xl border-2 border-gray-200 bg-white flex flex-col justify-between"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          {/* Hover glow effect */}
          <div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              backgroundColor: accentColor,
            }}
          />

          <div className="relative z-10">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: accentColor }}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-brand-text mb-2">{offering.name}</h3>
            <p className="text-brand-text-soft text-sm">{offering.shortDesc}</p>
          </div>

          {/* Hint text */}
          <div className="relative z-10 text-xs font-medium transition-opacity duration-300 group-hover:opacity-100 opacity-50" style={{ color: accentColor }}>
            Hover to learn more →
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full p-6 rounded-xl border-2 flex items-center justify-center"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderColor: accentColor,
            backgroundColor: 'rgba(59, 130, 246, 0.02)',
          }}
        >
          <div className="text-center">
            <h4 className="font-semibold text-brand-text mb-3">What to Expect</h4>
            <p className="text-sm text-brand-text-soft leading-relaxed">
              {offering.whatToExpect}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FlipCardGrid: React.FC<{
  offerings: Offering[];
  accentColor?: string;
}> = ({ offerings, accentColor = '#3b82f6' }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {offerings.map((offering, idx) => (
        <FlipCard
          key={idx}
          offering={offering}
          accentColor={accentColor}
        />
      ))}
    </div>
  );
};
