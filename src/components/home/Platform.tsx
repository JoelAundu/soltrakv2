import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiLayers, FiClock, FiBell, FiInfo } from 'react-icons/fi';

const features = [
  {
    icon: FiLayers,
    title: 'Consolidated Monitoring',
    points: [
      'Installer-agnostic tracking',
      'Facility tariff & Opex-specific reporting',
      'Established performance principles',
    ],
  },
  {
    icon: FiClock,
    title: 'On-Demand Access',
    points: [
      'Accelerated onboarding process',
      'Available for any asset type',
      'Accessible 24/7 from anywhere',
    ],
  },
  {
    icon: FiBell,
    title: 'Alerts & Notifications',
    points: [
      'Major equipment failure alerts',
      'Alerts categorised by severity',
      'Immediate action empowerment',
    ],
  },
];

const metrics = [
  { label: 'Energy Production', icon: '⚡', description: 'Total kWh generated over any period' },
  { label: 'Expected vs Measured', icon: '📊', description: 'Actual output vs modelled baseline' },
  { label: 'Revenue Savings', icon: '💰', description: 'Rand value of energy produced' },
  { label: 'Performance Ratio', icon: '📈', description: 'Industry-standard efficiency metric' },
  { label: 'Carbon Savings', icon: '🌱', description: 'CO₂ emissions avoided in tonnes' },
  { label: 'Plant Availability', icon: '🔋', description: 'Uptime percentage vs scheduled hours' },
];

const Platform: React.FC = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const imgInView = useInView(imgRef, { once: true, margin: '-100px' });

  return (
    <section id="platform" className="section-padding bg-white dark:bg-[#0a1628] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#72BCBF]/5 dark:bg-[#72BCBF]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="relative container-custom">
        {/* Section header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#1768a1]/10 dark:bg-[#1768a1]/20 text-[#1768a1] dark:text-[#72BCBF] text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Our Platform
          </span>
          <h2 className="section-heading text-gray-900 dark:text-white mb-4">
            The{' '}
            <span className="gradient-text">SOLTRAK Platform</span>
          </h2>
          <p className="section-subheading mx-auto">
            Available anywhere, anytime — SOLTRAK updates plant data in real time and displays information at daily, weekly, monthly, or annual intervals.
          </p>
        </motion.div>

        {/* Feature columns */}
        <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-[#1768a1]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#1768a1]/10 dark:bg-[#1768a1]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-[#1768a1] dark:text-[#72BCBF]" />
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.points.map((point) => (
                    <li key={point} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 justify-center">
                      <span className="w-1 h-1 rounded-full bg-[#72BCBF] flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Platform image + metrics */}
        <div className="grid grid-cols-1 desktop:grid-cols-2 gap-12 items-center">
          {/* Left: Platform image */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, x: -50 }}
            animate={imgInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#1768a1]/20 to-[#72BCBF]/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-[#1768a1]/20 shadow-2xl">
              <img
                src="/assets/soltrak-platform.png"
                alt="SOLTRAK Platform"
                className="w-full h-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/Platform-Mockup-3.png';
                }}
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#1768a1] text-white px-4 py-2 rounded-xl shadow-xl text-sm font-semibold">
              Live Data · Updated Every 5min
            </div>
          </motion.div>

          {/* Right: Metrics grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={imgInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Platform Metrics</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-8">
              Every metric that matters to your investment, available on demand.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={imgInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.08 + 0.3 }}
                  className="group relative bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-xl p-4 hover:border-[#1768a1]/30 hover:bg-[#1768a1]/5 dark:hover:bg-[#1768a1]/10 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{metric.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">{metric.label}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5 leading-relaxed">{metric.description}</p>
                    </div>
                  </div>

                  {/* Tooltip indicator */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FiInfo className="w-3 h-3 text-gray-400" />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={imgInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6"
            >
              <a
                href="https://app.soltrak.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View Live Platform
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
