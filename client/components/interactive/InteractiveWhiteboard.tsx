import React, { useRef, useEffect, useState } from 'react';
import { Zap, TrendingUp, FileText, Handshake } from 'lucide-react';

interface InteractiveWhiteboardProps {
  accentColor?: string;
}

const ICONS = [
  { Icon: Handshake, label: 'Partnership' },
  { Icon: TrendingUp, label: 'Growth' },
  { Icon: FileText, label: 'Strategy' },
  { Icon: Zap, label: 'Action' },
];

export const InteractiveWhiteboard: React.FC<InteractiveWhiteboardProps> = ({
  accentColor = '#3b82f6',
}) => {
  const canvasRef = useRef<SVGSVGElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [drawnIcons, setDrawnIcons] = useState<number[]>([]);

  useEffect(() => {
    // Randomly draw and erase icons continuously
    const interval = setInterval(() => {
      const randomIcon = Math.floor(Math.random() * ICONS.length);
      
      // Add icon
      setDrawnIcons(prev => {
        if (prev.length < 4) return [...prev, randomIcon];
        return prev;
      });

      // Remove icon after 3 seconds
      setTimeout(() => {
        setDrawnIcons(prev => prev.slice(1));
      }, 3000);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden bg-white border-2 border-gray-200 shadow-lg group"
      onMouseMove={handleMouseMove}
    >
      {/* Whiteboard background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />

      {/* Grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#333" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Drawn icons section */}
      <svg
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Draw connections between icons */}
        {drawnIcons.length > 1 && (
          <>
            {drawnIcons.slice(0, -1).map((_, idx) => {
              const x1 = 80 + idx * 60;
              const y1 = 120;
              const x2 = x1 + 60;
              const y2 = 120;
              return (
                <line
                  key={`line-${idx}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={accentColor}
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.6"
                  className="animate-dash"
                />
              );
            })}
          </>
        )}

        {/* Icon placeholders */}
        {drawnIcons.map((iconIdx, position) => {
          const x = 80 + position * 60;
          const y = 120;
          return (
            <g key={`icon-${position}`} className="animate-fadeInScale">
              <circle
                cx={x}
                cy={y}
                r="20"
                fill={accentColor}
                opacity="0.2"
              />
              <text
                x={x}
                y={y + 5}
                textAnchor="middle"
                fill={accentColor}
                fontSize="24"
                fontWeight="bold"
              >
                {position + 1}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Glow effect on mouse move */}
      <div
        className="absolute pointer-events-none transition-all duration-200"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className="w-32 h-32 rounded-full blur-2xl opacity-20"
          style={{ backgroundColor: accentColor }}
        />
      </div>

      {/* Center text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-brand-text font-semibold text-lg">
            Let's brainstorm together
          </p>
          <p className="text-brand-text-soft text-sm mt-1">
            Interactive strategy session
          </p>
        </div>
      </div>

      {/* Border glow on hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500 group-hover:shadow-lg transition-all duration-300" style={{ boxShadow: `inset 0 0 20px ${accentColor}20` }} />

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes dash {
          to {
            stroke-dashoffset: 10;
          }
        }
        .animate-fadeInScale {
          animation: fadeInScale 0.4s ease-out forwards;
        }
        .animate-dash {
          animation: dash 0.5s linear infinite;
        }
      `}</style>
    </div>
  );
};
