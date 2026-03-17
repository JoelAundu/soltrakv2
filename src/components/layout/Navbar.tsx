import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiExternalLink } from 'react-icons/fi';
import ThemeToggle from '../ui/ThemeToggle';
import { useTheme } from '../../context/ThemeContext';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleScrollNav = (sectionId: string, expand?: boolean) => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId, expand);
      }, 300);
    } else {
      scrollToSection(sectionId, expand);
    }
  };

  const scrollToSection = (sectionId: string, expand?: boolean) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      if (expand) {
        window.dispatchEvent(new CustomEvent('expandContact'));
      }
    }
  };

  const navLinks = [
    { label: 'About Us', to: '/about' },
    { label: 'Our Platform', section: 'platform' },
    { label: 'Services', section: 'services' },
    { label: 'Get SOLTRAK', to: '/getting-started' },
    { label: 'Contact', section: 'contact', expand: true },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 navbar-glass
          ${scrolled
            ? isDark
              ? 'bg-[#0a1628]/90 border-b border-white/5 shadow-xl'
              : 'bg-white/90 border-b border-gray-200/60 shadow-md'
            : 'bg-transparent'
          }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 tablet:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={isDark ? '/assets/soltrak-white-logo.png' : '/assets/soltrak-logo.png'}
                alt="SOLTRAK"
                className="h-8 tablet:h-10 w-auto"
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden tablet:flex items-center gap-1">
              {navLinks.map((link) => (
                link.to ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                      ${isDark
                        ? 'text-gray-300 hover:text-white hover:bg-white/10'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => handleScrollNav(link.section!, link.expand)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer
                      ${isDark
                        ? 'text-gray-300 hover:text-white hover:bg-white/10'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                  >
                    {link.label}
                  </button>
                )
              ))}
            </div>

            {/* Right side */}
            <div className="hidden tablet:flex items-center gap-3">
              <ThemeToggle />
              <a
                href="https://app.soltrak.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 bg-[#1768a1] text-white text-sm font-semibold rounded-lg hover:bg-[#1E81C6] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Login
                <FiExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile controls */}
            <div className="flex tablet:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(prev => !prev)}
                className={`p-2 rounded-lg transition-colors ${isDark ? 'text-white hover:bg-white/10' : 'text-gray-900 hover:bg-gray-100'}`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 tablet:hidden
          ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 transition-transform duration-300
            ${isDark ? 'bg-[#0a1628]' : 'bg-white'}
            ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-800">
            <img
              src={isDark ? '/assets/soltrak-white-logo.png' : '/assets/soltrak-logo.png'}
              alt="SOLTRAK"
              className="h-8 w-auto"
            />
            <button
              onClick={() => setMobileOpen(false)}
              className={`p-2 rounded-lg ${isDark ? 'text-white hover:bg-white/10' : 'text-gray-900 hover:bg-gray-100'}`}
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          <div className="p-5 flex flex-col gap-2">
            {navLinks.map((link) => (
              link.to ? (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors
                    ${isDark ? 'text-gray-300 hover:text-white hover:bg-white/10' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => handleScrollNav(link.section!, link.expand)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors text-left
                    ${isDark ? 'text-gray-300 hover:text-white hover:bg-white/10' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`}
                >
                  {link.label}
                </button>
              )
            ))}

            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
              <a
                href="https://app.soltrak.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#1768a1] text-white font-semibold rounded-xl hover:bg-[#1E81C6] transition-colors"
              >
                Login to Platform
                <FiExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
