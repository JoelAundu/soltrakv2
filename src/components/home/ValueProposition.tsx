import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiEye, FiBarChart2, FiUsers, FiShield } from 'react-icons/fi';

const values = [
  {
    icon: FiEye,
    title: 'Complete Transparency',
    description: 'Every watt, every hour. SOLTRAK gives you independent, verifiable insight into your solar asset\'s actual performance — not just what the O&M contractor reports.',
    color: '#1768a1',
    gradient: 'from-[#1768a1]/10 to-[#1E81C6]/5',
  },
  {
    icon: FiBarChart2,
    title: 'Precise Performance Tracking',
    description: 'Industry-standard KPIs including Performance Ratio, Plant Availability, and Energy Yield, calculated from raw metering data and validated against meteorological baselines.',
    color: '#72BCBF',
    gradient: 'from-[#72BCBF]/10 to-[#72BCBF]/5',
  },
  {
    icon: FiUsers,
    title: 'Investor-Centric Design',
    description: 'Purpose-built for institutional investors and asset owners who need clear, audit-ready reports to protect their returns and fulfil their fiduciary obligations.',
    color: '#f97316',
    gradient: 'from-orange-500/10 to-orange-400/5',
  },
  {
    icon: FiShield,
    title: 'Independent Verification',
    description: 'SOLTRAK operates independently of your O&M contractor, providing an unbiased third-party view of performance — critical for dispute resolution and claims recovery.',
    color: '#1E81C6',
    gradient: 'from-[#1E81C6]/10 to-[#1768a1]/5',
  },
];

interface CardProps {
  item: typeof values[0];
  index: number;
}

const Card: React.FC<CardProps> = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white dark:bg-gray-900/60 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:border-[#1768a1]/30 dark:hover:border-[#1768a1]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#1768a1]/10"
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
          style={{ backgroundColor: `${item.color}15` }}
        >
          <Icon className="w-6 h-6" style={{ color: item.color }} />
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{item.description}</p>

        {/* Bottom accent line */}
        <div
          className="mt-6 h-0.5 w-12 rounded-full transition-all duration-500 group-hover:w-20"
          style={{ backgroundColor: item.color }}
        />
      </div>
    </motion.div>
  );
};

const ValueProposition: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-gray-50 dark:bg-[#0d1f38]">
      <div className="container-custom">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-[#1768a1]/10 dark:bg-[#1768a1]/20 text-[#1768a1] dark:text-[#72BCBF] text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Why SOLTRAK
          </span>
          <h2 className="section-heading text-gray-900 dark:text-white mb-4">
            Built for the{' '}
            <span className="gradient-text">people who matter</span>
          </h2>
          <p className="section-subheading mx-auto">
            We designed SOLTRAK for asset owners, investors, and analysts who can't afford to rely on incomplete data or unverified reports.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-6">
          {values.map((item, index) => (
            <Card key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
