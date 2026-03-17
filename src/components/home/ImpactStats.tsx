import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    value: 157,
    suffix: ' MWp+',
    label: 'Assets Monitored',
    description: 'Megawatt-peak of solar capacity tracked across our platform',
  },
  {
    value: 199,
    suffix: '+',
    label: 'Tracked Assets',
    description: 'Individual solar installations actively monitored in real time',
  },
  {
    value: 2,
    prefix: '>R',
    suffix: 'M',
    label: 'Recoverable Claims',
    description: 'Identified in recoverable performance claims for our clients',
  },
  {
    value: 2200,
    suffix: '+',
    label: 'Assessments',
    description: 'Performance assessments completed across South Africa',
  },
];

function useCountUp(target: number, isVisible: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return count;
}

interface StatCardProps {
  stat: Stat;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ stat, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useCountUp(stat.value, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      <div className="text-5xl tablet:text-6xl font-black text-white mb-3 tracking-tight">
        {stat.prefix && <span className="text-[#72BCBF]">{stat.prefix}</span>}
        <span>{count.toLocaleString()}</span>
        <span className="text-[#1E81C6]">{stat.suffix}</span>
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{stat.label}</h3>
      <p className="text-gray-400 text-sm max-w-[200px] mx-auto leading-relaxed">{stat.description}</p>
    </motion.div>
  );
};

const ImpactStats: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-[#0a1628] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/assets/Pattern-Grid.png)',
            backgroundSize: '300px',
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      {/* Gradient accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1768a1]/20 blur-3xl rounded-full -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#72BCBF]/10 blur-3xl rounded-full translate-y-1/2" />

      <div className="relative container-custom">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#1768a1]/20 border border-[#1768a1]/30 text-[#72BCBF] text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Our Impact
          </span>
          <h2 className="section-heading text-white mb-4">
            Numbers that{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #1E81C6, #72BCBF)' }}>
              speak for themselves
            </span>
          </h2>
          <p className="section-subheading mx-auto text-gray-400">
            Measurable outcomes delivered for investors and asset owners across Southern Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 desktop:grid-cols-4 gap-10 tablet:gap-16">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
