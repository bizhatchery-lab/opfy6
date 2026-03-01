import React, { useEffect, useState } from 'react';

interface InteractiveHeroGraphicProps {
  type?: 'code-screenshot' | 'financial-dashboard' | 'illustration';
  codeComment?: string;
  metrics?: Array<{ label: string; value: string }>;
}

export const InteractiveHeroGraphic: React.FC<InteractiveHeroGraphicProps> = ({
  type = 'illustration',
  codeComment = '// Growing your business, step by step',
  metrics = [],
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  if (type === 'code-screenshot') {
    const displayComment = codeComment ? codeComment.replace('// ', '') : 'Growing your business, step by step';
    return (
      <div
        className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden bg-gray-900 shadow-lg group"
        onMouseMove={handleMouseMove}
      >
        {/* Code background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-black" />

        {/* Code snippet */}
        <div className="relative h-full p-6 md:p-8 font-mono text-sm md:text-base overflow-hidden">
          <div className="space-y-2 text-green-400">
            <div className="text-gray-500">{'// Your journey to success'}</div>
            <div className="text-green-400">const business = {'{'}</div>
            <div className="ml-4 text-white">{`challenge: '${displayComment}',`}</div>
            <div className="ml-4 text-white">solution: 'Strategic growth',</div>
            <div className="ml-4 text-white">timeline: '3-6 months',</div>
            <div className="ml-4 text-white">support: '24/7'</div>
            <div className="text-green-400">{'}'}</div>
          </div>

          {/* Animated glow cursor effect */}
          <div
            className="absolute pointer-events-none transition-all duration-75"
            style={{
              left: `${mousePos.x}px`,
              top: `${mousePos.y}px`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20" />
          </div>
        </div>

        {/* Border glow on hover */}
        <div className="absolute inset-0 rounded-2xl border border-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      </div>
    );
  }

  if (type === 'financial-dashboard') {
    const displayMetrics = metrics && metrics.length > 0
      ? metrics.slice(0, 2)
      : [
          { label: 'Client Satisfaction', value: '100%' },
          { label: 'Success Rate', value: '95%' },
        ];

    return (
      <div
        className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg group"
        onMouseMove={handleMouseMove}
      >
        <div className="relative h-full p-6 md:p-8 flex flex-col justify-center">
          {/* Dashboard title */}
          <div className="mb-8">
            <p className="text-gray-500 text-sm font-mono">Dashboard</p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Key Metrics</h3>
          </div>

          {/* Metrics bars */}
          <div className="space-y-6">
            {displayMetrics.map((metric, idx) => (
              <div key={idx} className="group/item cursor-default">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-700">{metric.label}</span>
                  <span className="text-lg font-bold text-blue-600">{metric.value}</span>
                </div>
                {/* Animated progress bar */}
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out group-hover/item:shadow-lg group-hover/item:shadow-blue-500/50"
                    style={{
                      width: metric.value === '100%' ? '100%' : '95%',
                      animation: 'slideIn 1.5s ease-out forwards',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Animated glow on mouse move */}
          <div
            className="absolute pointer-events-none transition-all duration-100"
            style={{
              left: `${mousePos.x}px`,
              top: `${mousePos.y}px`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="w-40 h-40 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-10" />
          </div>
        </div>

        <style>{`
          @keyframes slideIn {
            from { width: 0; }
            to { width: var(--target-width, 95%); }
          }
        `}</style>
      </div>
    );
  }

  // Illustration type - animated growing plant
  return (
    <div
      className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-b from-blue-50 to-green-50 shadow-lg group"
      onMouseMove={handleMouseMove}
    >
      {/* SVG illustration */}
      <svg
        viewBox="0 0 200 300"
        className="absolute inset-0 w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Soil */}
        <ellipse cx="100" cy="280" rx="80" ry="20" fill="#8B7355" opacity="0.6" />

        {/* Pot */}
        <path
          d="M 60 200 L 50 280 L 150 280 L 140 200 Z"
          fill="none"
          stroke="#A0826D"
          strokeWidth="2"
        />

        {/* Stem - grows with animation */}
        <line
          x1="100"
          y1="280"
          x2="100"
          y2="120"
          stroke="#4CAF50"
          strokeWidth="3"
          strokeLinecap="round"
          className="animate-grow origin-bottom"
        />

        {/* Left leaf */}
        <path
          d="M 100 180 Q 70 150 60 120"
          fill="none"
          stroke="#66BB6A"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.8"
          className="animate-fadeIn"
        />

        {/* Right leaf */}
        <path
          d="M 100 140 Q 130 110 140 80"
          fill="none"
          stroke="#66BB6A"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.8"
          className="animate-fadeIn"
        />

        {/* Top leaf */}
        <path
          d="M 100 120 Q 110 80 100 60"
          fill="none"
          stroke="#81C784"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.9"
          className="animate-fadeIn"
        />

        {/* Flower */}
        <circle cx="100" cy="60" r="8" fill="#FF6B6B" className="animate-pulse" />
        <circle cx="92" cy="52" r="4" fill="#FFB3BA" opacity="0.7" className="animate-pulse" />
        <circle cx="108" cy="52" r="4" fill="#FFB3BA" opacity="0.7" className="animate-pulse" />
        <circle cx="92" cy="68" r="4" fill="#FFB3BA" opacity="0.7" className="animate-pulse" />
        <circle cx="108" cy="68" r="4" fill="#FFB3BA" opacity="0.7" className="animate-pulse" />
      </svg>

      {/* Text overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-center text-gray-700 font-semibold px-4">Gradual, sustainable growth</p>
      </div>

      {/* Animated glow on mouse move */}
      <div
        className="absolute pointer-events-none transition-all duration-150"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-48 h-48 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-3xl opacity-15" />
      </div>

      <style>{`
        @keyframes grow {
          from { y2: 280; }
          to { y2: 120; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 0.8; }
        }
        .animate-grow {
          animation: grow 2s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 2.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
