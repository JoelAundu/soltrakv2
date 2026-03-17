import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-2 rounded-lg transition-all duration-300
        ${isDark
          ? 'bg-white/10 text-yellow-300 hover:bg-white/20'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        } ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <FiSun className="w-5 h-5 transition-all duration-300 rotate-0" />
        ) : (
          <FiMoon className="w-5 h-5 transition-all duration-300 rotate-0" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
