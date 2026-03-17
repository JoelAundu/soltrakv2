import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiAlertTriangle, FiFileText, FiEyeOff, FiChevronRight } from 'react-icons/fi';

const tabs = [
  {
    id: 'agreement',
    icon: FiFileText,
    label: 'O&M Agreements',
    problem: 'Agreements Written Against You',
    description:
      'Most O&M contracts are drafted by installers or O&M contractors — not independent counsel. The result? Vague performance guarantees, broad exclusions, and clauses that make underperformance nearly impossible to prove or claim.',
    bullets: [
      'Guaranteed yields defined using optimistic irradiance assumptions',
      'Force majeure clauses that shield contractors from almost any shortfall',
      'No independent measurement or verification obligations',
      'Rollover terms that auto-renew without performance review',
    ],
    solution: 'SOLTRAK provides O&M contract templates built with asset owners\' interests at the centre — with clear, measurable performance baselines and enforceable penalty structures.',
    color: '#f97316',
  },
  {
    id: 'reports',
    icon: FiFileText,
    label: 'O&M Reports',
    problem: 'Reports That Obscure the Truth',
    description:
      'When O&M contractors self-report performance, the data is often incomplete, cherry-picked, or presented in formats that make genuine analysis impossible. Underperformance gets buried in technical jargon.',
    bullets: [
      'No standardised KPIs — each contractor uses different metrics',
      'Performance Ratio rarely calculated or disclosed correctly',
      'Energy shortfalls attributed to weather without independent verification',
      'Investors lack the technical knowledge to interrogate the numbers',
    ],
    solution: 'SOLTRAK\'s independent monthly reports apply industry-standard KPIs, satellite-verified irradiance data, and plain-language analysis that any investor can understand and act on.',
    color: '#1768a1',
  },
  {
    id: 'visibility',
    icon: FiEyeOff,
    label: 'Visibility',
    problem: 'No Real-Time Visibility',
    description:
      'Asset owners are often the last to know when something goes wrong. Without independent monitoring, you rely on your O&M contractor to tell you about faults — creating an obvious conflict of interest.',
    bullets: [
      'Faults detected days or weeks after they occur',
      'No independent access to raw generation or metering data',
      'Downtime attributed to grid issues without verification',
      'Investors unable to benchmark performance against similar assets',
    ],
    solution: 'SOLTRAK gives you direct, real-time access to your asset\'s data — independent of the O&M contractor — with automated alerts, live dashboards, and continuous performance benchmarking.',
    color: '#72BCBF',
  },
];

const MarketChallenges: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const active = tabs[activeTab];

  return (
    <section className="section-padding bg-[#0a1628] relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(114,188,191,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(114,188,191,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1768a1]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container-custom">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            <FiAlertTriangle className="w-3.5 h-3.5" />
            The Problem
          </span>
          <h2 className="section-heading text-white mb-4">
            Market{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #f97316, #ef4444)' }}>
              Challenges
            </span>
          </h2>
          <p className="section-subheading mx-auto text-gray-400">
            Why does tracking solar asset performance seem so difficult? Conventional market dynamics create systemic blind spots that cost investors millions every year.
          </p>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {tabs.map((tab, index) => {
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'text-white shadow-lg'
                    : 'text-gray-400 bg-white/5 hover:bg-white/10 hover:text-white'
                }`}
                style={
                  activeTab === index
                    ? { background: `${tab.color}30`, border: `1px solid ${tab.color}60`, color: tab.color }
                    : {}
                }
              >
                <TabIcon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Tab content */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 desktop:grid-cols-2 gap-8"
            >
              {/* Left: Problem */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-5"
                  style={{ background: `${active.color}20`, color: active.color }}
                >
                  <FiAlertTriangle className="w-3 h-3" />
                  The Problem
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{active.problem}</h3>
                <p className="text-gray-400 leading-relaxed mb-6 text-sm">{active.description}</p>

                <ul className="space-y-3">
                  {active.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ background: active.color }}
                      />
                      <span className="text-gray-400 text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Solution */}
              <div
                className="relative rounded-3xl p-8 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${active.color}15, ${active.color}05)`,
                  border: `1px solid ${active.color}30`,
                }}
              >
                {/* Decorative corner */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-20"
                  style={{ background: `radial-gradient(circle, ${active.color}, transparent)` }}
                />

                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-5"
                  style={{ background: `${active.color}30`, color: active.color }}
                >
                  <FiChevronRight className="w-3 h-3" />
                  SOLTRAK's Solution
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">How We Fix It</h3>
                <p className="text-gray-300 leading-relaxed text-sm">{active.solution}</p>

                {/* Visual metric illustration */}
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {[
                    { label: 'Independent', value: '100%' },
                    { label: 'Real-time', value: '< 5min' },
                    { label: 'Assets', value: '199+' },
                    { label: 'Uptime', value: '99.9%' },
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl p-4 text-center"
                      style={{ background: `${active.color}10`, border: `1px solid ${active.color}20` }}
                    >
                      <div className="text-2xl font-black text-white mb-1">{metric.value}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MarketChallenges;
