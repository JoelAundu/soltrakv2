import React from 'react';
import { Link } from 'react-router-dom';
import { FiLinkedin, FiTwitter, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a1628] text-white overflow-hidden">
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(/assets/Pattern-Grid.png)',
          backgroundSize: '400px',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="desktop:col-span-1">
            <img src="/assets/soltrak-white-logo.png" alt="SOLTRAK" className="h-10 w-auto mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Africa's leading solar asset performance monitoring platform. Track, verify, and optimize with precision.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#1768a1] hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#1768a1] hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <FiTwitter className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@soltrak.co.za"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#1768a1] hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <FiMail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'Our Team', to: '/about#team' },
                { label: 'Careers', to: '/career' },
                { label: 'Getting Started', to: '/getting-started' },
                { label: 'FAQs', to: '/faqs' },
              ].map(item => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {[
                'Performance Monitoring',
                'O&M Verification',
                'Investor Reporting',
                'Independent Audits',
                'Data Analytics',
                'API Integration',
              ].map(item => (
                <li key={item}>
                  <span className="text-gray-400 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <FiPhone className="w-4 h-4 text-[#72BCBF] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">021 300 0485</span>
              </li>
              <li className="flex items-start gap-3">
                <FiMail className="w-4 h-4 text-[#72BCBF] mt-0.5 flex-shrink-0" />
                <a href="mailto:info@soltrak.co.za" className="text-gray-400 hover:text-white text-sm transition-colors">
                  info@soltrak.co.za
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="w-4 h-4 text-[#72BCBF] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Cape Town, South Africa</span>
              </li>
            </ul>

            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Terms of Service</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col tablet:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {year} SOLTRAK. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with precision for Africa's solar industry.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
