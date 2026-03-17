import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  badge?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, backgroundImage, badge }) => {
  return (
    <section className="relative min-h-[50vh] tablet:min-h-[60vh] flex items-end pb-16 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/70 to-[#0a1628]/40" />

      {/* Content */}
      <div className="relative container-custom w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {badge && (
            <span className="inline-block px-3 py-1 bg-[#1768a1]/80 text-white text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              {badge}
            </span>
          )}
          <h1 className="text-4xl tablet:text-5xl desktop:text-6xl font-bold text-white leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg tablet:text-xl text-gray-300 max-w-2xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
