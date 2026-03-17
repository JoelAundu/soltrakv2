import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiMapPin } from 'react-icons/fi';

interface Project {
  id: number;
  name: string;
  capacity: string;
  location: string;
  province: string;
  description: string;
  image: string;
  thumb: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Eastgate Mall',
    capacity: '1,219 kWp',
    location: 'Eastgate, Johannesburg',
    province: 'Gauteng',
    description: 'A flagship rooftop solar installation at one of South Africa\'s premier retail destinations. Comprehensive performance monitoring with real-time irradiance correction and grid export verification.',
    image: '/assets/eastgate.png',
    thumb: '/assets/eastgate.png',
  },
  {
    id: 2,
    name: 'Stampmill Industrial Park',
    capacity: '900 kWp',
    location: 'Johannesburg',
    province: 'Gauteng',
    description: 'Industrial-scale solar deployment across a multi-building complex. SOLTRAK provides granular inverter-level monitoring and automated underperformance alerting for the O&M team.',
    image: '/assets/Thumb5.png',
    thumb: '/assets/Thumb5.png',
  },
  {
    id: 3,
    name: 'Phumulani Mall',
    capacity: '1,297 kWp',
    location: 'Tembisa',
    province: 'Gauteng',
    description: 'Community-serving retail centre with a large rooftop solar array. Monthly performance reports delivered to investors with full audit trail and PR benchmarking against modelled expectations.',
    image: '/assets/Thumb6.png',
    thumb: '/assets/Thumb6.png',
  },
  {
    id: 4,
    name: 'South Coast Mall',
    capacity: '1,243 kWp',
    location: 'Shelly Beach',
    province: 'KwaZulu-Natal',
    description: 'Coastal solar installation with unique humidity and salt-mist conditions requiring specialised performance modelling. SOLTRAK\'s environment-adjusted analytics ensure accurate KPI reporting year-round.',
    image: '/assets/Thumb7.png',
    thumb: '/assets/Thumb7.png',
  },
];

const INTERVAL = 5000;

const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const goToSlide = useCallback((index: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setFading(false);
      setProgressKey(prev => prev + 1);
    }, 400);
  }, []);

  const next = useCallback(() => {
    goToSlide((currentIndex + 1) % projects.length);
  }, [currentIndex, goToSlide]);

  const prev = useCallback(() => {
    goToSlide((currentIndex - 1 + projects.length) % projects.length);
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(next, INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, next]);

  const current = projects[currentIndex];

  return (
    <section ref={sectionRef} className="section-padding bg-white dark:bg-[#0a1628]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-[#1768a1]/10 dark:bg-[#1768a1]/20 text-[#1768a1] dark:text-[#72BCBF] text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Portfolio
          </span>
          <h2 className="section-heading text-gray-900 dark:text-white mb-4">
            Projects we{' '}
            <span className="gradient-text">monitor</span>
          </h2>
          <p className="section-subheading mx-auto text-gray-600 dark:text-gray-400">
            From retail centres to industrial parks — SOLTRAK monitors solar assets across South Africa's diverse commercial property landscape.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Progress bar */}
          {!isPaused && (
            <div className="absolute top-0 left-0 right-0 h-1 bg-black/30 z-10">
              <div
                key={progressKey}
                className="h-full bg-[#1768a1]"
                style={{
                  animation: `portfolio-progress ${INTERVAL}ms linear forwards`,
                }}
              />
            </div>
          )}

          {/* Main image */}
          <div className="relative aspect-[16/9] tablet:aspect-[21/9]">
            <img
              src={current.image}
              alt={current.name}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${fading ? 'opacity-0' : 'opacity-100'}`}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Content overlay */}
            <div className={`absolute bottom-0 left-0 right-0 p-6 tablet:p-10 transition-opacity duration-500 ${fading ? 'opacity-0' : 'opacity-100'}`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-[#72BCBF] text-sm font-semibold mb-2">
                    <FiMapPin className="w-4 h-4" />
                    {current.location}, {current.province}
                  </span>
                  <h3 className="text-2xl tablet:text-3xl font-bold text-white">{current.name}</h3>
                  <p className="text-[#1E81C6] font-semibold mt-1">{current.capacity}</p>
                  <p className="text-gray-300 text-sm mt-3 max-w-lg hidden tablet:block leading-relaxed">
                    {current.description}
                  </p>
                </div>

                {/* Navigation arrows */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
                    aria-label="Previous"
                  >
                    <FiChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
                    aria-label="Next"
                  >
                    <FiChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="bg-gray-900 p-4 flex gap-3 overflow-x-auto scrollbar-hide">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-24 tablet:w-32 h-16 tablet:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex
                    ? 'border-[#1768a1] opacity-100 scale-105'
                    : 'border-transparent opacity-50 hover:opacity-80'
                }`}
              >
                <img src={project.thumb} alt={project.name} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
