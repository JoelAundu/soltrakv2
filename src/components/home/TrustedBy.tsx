import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const logos = [
  { src: '/assets/polyok.png', alt: 'Polyok' },
  { src: '/assets/oldmutual.png', alt: 'Old Mutual' },
  { src: '/assets/growpoint.png', alt: 'Growthpoint' },
  { src: '/assets/liberty.png', alt: 'Liberty' },
  { src: '/assets/Redefine.png', alt: 'Redefine' },
];

// Double the array for seamless infinite loop
const doubledLogos = [...logos, ...logos];

const TrustedBy: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section className={`py-14 ${isDark ? 'bg-[#0a1628] border-y border-white/5' : 'bg-gray-50 border-y border-gray-100'}`}>
      <div className="container-custom mb-8">
        <p className={`text-center text-sm font-semibold uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
          Trusted by leading property funds & investors
        </p>
      </div>

      {/* Carousel track */}
      <div className="trusted-track overflow-hidden">
        <div className="flex animate-scroll-trusted gap-0" style={{ width: 'max-content' }}>
          {doubledLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 tablet:mx-14 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`h-8 tablet:h-10 w-auto object-contain transition-all duration-300
                  ${isDark ? 'brightness-0 invert opacity-50 hover:opacity-80' : 'brightness-0 opacity-80 hover:opacity-100'}`}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
