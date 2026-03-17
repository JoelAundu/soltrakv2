import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'orange' | 'teal' | 'gray';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', className = '' }) => {
  const variants = {
    primary: 'bg-[#1768a1]/10 text-[#1768a1] dark:bg-[#1768a1]/20 dark:text-[#72BCBF]',
    orange: 'bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400',
    teal: 'bg-teal-100 text-teal-700 dark:bg-[#72BCBF]/20 dark:text-[#72BCBF]',
    gray: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
