import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiFileText, FiMonitor, FiBarChart2, FiArrowRight, FiCheck } from 'react-icons/fi';

const services = [
  {
    icon: FiFileText,
    title: 'O&M Contract Support',
    description:
      'A legally robust framework that protects your investment. Our contract templates include balanced terms, updated scope of work definitions, and enforceable underperformance penalties — giving you leverage when it matters most.',
    highlights: [
      'Balanced contractual terms',
      'Underperformance penalty clauses',
      'Updated scope of work definitions',
      'Dispute resolution frameworks',
    ],
    gradient: 'linear-gradient(135deg, #f97316, #ef4444)',
    accentColor: '#f97316',
    imageIcon: '/assets/document-text.png',
  },
  {
    icon: FiMonitor,
    title: 'SOLTRAK Platform',
    description:
      'Live monitoring with real-time metrics, comparison tools, and automated notifications. Available anywhere, anytime — SOLTRAK updates plant data continuously and presents it at daily, weekly, monthly, or annual intervals.',
    highlights: [
      'Real-time performance metrics',
      'Automated fault alerts',
      'Installer-agnostic integration',
      '24/7 on-demand access',
    ],
    gradient: 'linear-gradient(135deg, #0f4c7a, #1768a1)',
    accentColor: '#1768a1',
    imageIcon: '/assets/monitor.png',
  },
  {
    icon: FiBarChart2,
    title: 'Independent Reporting',
    description:
      'Monthly and annual performance reports with energy production, revenue savings, and carbon emissions data. Independent, unbiased, and audit-ready for your board or investment committee.',
    highlights: [
      'Monthly & annual reports',
      'Revenue & carbon metrics',
      'Investor-grade audit trail',
      'Performance ratio benchmarking',
    ],
    gradient: 'linear-gradient(135deg, #1E81C6, #72BCBF)',
    accentColor: '#72BCBF',
    imageIcon: '/assets/status-up.png',
  },
];

interface ServiceCardProps {
  service: (typeof services)[0];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col bg-white dark:bg-gray-900/60 rounded-3xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      {/* Gradient top bar */}
      <div
        className="h-1.5 w-full flex-shrink-0"
        style={{ background: service.gradient }}
      />

      {/* Icon header */}
      <div className="p-8 pb-0">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `${service.accentColor}15`,
            border: `1px solid ${service.accentColor}30`,
          }}
        >
          <Icon className="w-7 h-7" style={{ color: service.accentColor }} />
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
      </div>

      {/* Highlights */}
      <div className="p-8 pt-6 flex-1">
        <ul className="space-y-2.5">
          {service.highlights.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: `${service.accentColor}20` }}
              >
                <FiCheck className="w-3 h-3" style={{ color: service.accentColor }} />
              </span>
              <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom glow on hover */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `inset 0 0 60px ${service.accentColor}08` }}
      />
    </motion.div>
  );
};

const Services: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-[#0d1f38] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1768a1]/5 dark:bg-[#1768a1]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="relative container-custom">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#1768a1]/10 dark:bg-[#1768a1]/20 text-[#1768a1] dark:text-[#72BCBF] text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Our Solutions
          </span>
          <h2 className="section-heading text-gray-900 dark:text-white mb-4">
            Built for{' '}
            <span className="gradient-text">Renewable Asset Owners</span>
          </h2>
          <p className="section-subheading mx-auto">
            Three integrated services that cover every dimension of solar asset performance — from contract to report.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Download brochure CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <a
            href="https://prod-soltrak-public-data.s3.eu-west-1.amazonaws.com/brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1768a1] text-white font-semibold rounded-xl hover:bg-[#1E81C6] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#1768a1]/30"
          >
            <img src="/assets/document-download.png" alt="" className="w-4 h-4 brightness-0 invert" />
            Download Brochure
            <FiArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
