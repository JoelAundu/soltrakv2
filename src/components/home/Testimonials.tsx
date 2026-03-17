import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const testimonials = [
  {
    quote:
      'I am very pleased with the SOLTRAK service. The team are knowledgeable and proactive — issues are flagged before we even know about them. It\'s given us genuine confidence in our solar investment.',
    name: 'Asset Owner',
    title: 'Commercial & Industrial Portfolio',
    initials: 'AO',
    color: '#1768a1',
  },
  {
    quote:
      "It's all about accountability, and that's exactly what SOLTRAK provides. For the first time, we have independent data to hold our O&M contractor to the terms of their contract. That's worth more than any software feature.",
    name: 'Portfolio Manager',
    title: 'South African Energy Investor',
    initials: 'PM',
    color: '#72BCBF',
  },
  {
    quote:
      'SOLTRAK has transformed how we monitor and manage our energy assets. The monthly reports are clear, investor-ready, and flag every underperformance event with root-cause analysis. Our board loves it.',
    name: 'Facilities Director',
    title: 'Retail Property Group',
    initials: 'FD',
    color: '#f97316',
  },
  {
    quote:
      'Working with SOLTRAK has been a revelation. We identified over R400,000 in recoverable performance claims in the first six months alone. The platform pays for itself many times over.',
    name: 'Operations Manager',
    title: 'Industrial Asset Owner',
    initials: 'OM',
    color: '#1E81C6',
  },
  {
    quote:
      "The level of control and insight SOLTRAK provides is unmatched in the South African market. We've gone from flying blind to having real-time visibility over every asset in our portfolio.",
    name: 'Energy Manager',
    title: 'Commercial Property Fund',
    initials: 'EM',
    color: '#1768a1',
  },
  {
    quote:
      'I have found SOLTRAK to be a critical component of our renewable energy strategy. Independent verification gives our investment committee the confidence to approve additional solar projects.',
    name: 'Investment Director',
    title: 'Renewable Energy Portfolio',
    initials: 'ID',
    color: '#72BCBF',
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (index: number, dir: number) => {
      setDirection(dir);
      setCurrent(index);
    },
    []
  );

  const next = useCallback(() => {
    go((current + 1) % testimonials.length, 1);
  }, [current, go]);

  const prev = useCallback(() => {
    go((current - 1 + testimonials.length) % testimonials.length, -1);
  }, [current, go]);

  useEffect(() => {
    timerRef.current = setInterval(next, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next]);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 6000);
  };

  const handleNext = () => {
    next();
    resetTimer();
  };

  const handlePrev = () => {
    prev();
    resetTimer();
  };

  const t = testimonials[current];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <section className="section-padding bg-gray-50 dark:bg-[#0d1f38] relative overflow-hidden">
      {/* Quote decoration */}
      <div className="absolute top-16 left-12 text-[200px] leading-none text-[#1768a1]/5 dark:text-[#1768a1]/10 font-serif select-none pointer-events-none">
        "
      </div>

      <div className="relative container-custom">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-[#1768a1]/10 dark:bg-[#1768a1]/20 text-[#1768a1] dark:text-[#72BCBF] text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Client Stories
          </span>
          <h2 className="section-heading text-gray-900 dark:text-white mb-4">
            What our{' '}
            <span className="gradient-text">clients say</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Card */}
          <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900/70 border border-gray-100 dark:border-gray-800 shadow-xl min-h-[280px] flex flex-col justify-between p-10 tablet:p-14">
            {/* Accent bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ background: `linear-gradient(90deg, ${t.color}, transparent)` }}
            />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <blockquote className="text-lg tablet:text-xl text-gray-700 dark:text-gray-300 leading-relaxed italic mb-8">
                  "{t.quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{t.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{t.title}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-[#1768a1] hover:text-[#1768a1] transition-all duration-200 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    go(index, index > current ? 1 : -1);
                    resetTimer();
                  }}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: index === current ? 24 : 8,
                    height: 8,
                    background: index === current ? '#1768a1' : '#d1d5db',
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-[#1768a1] hover:text-[#1768a1] transition-all duration-200 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
