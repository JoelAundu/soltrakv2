import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiLock, FiEye, FiSliders, FiDownload } from 'react-icons/fi';
import PageHeader from '../components/layout/PageHeader';

const highlights = [
  {
    icon: FiLock,
    title: 'Data Security',
    description: 'Your data is encrypted and stored securely at all times using enterprise-grade infrastructure.',
    color: '#1768a1',
  },
  {
    icon: FiEye,
    title: 'Transparency',
    description: 'We are clear about what data we collect, why we collect it, and how it is used.',
    color: '#72BCBF',
  },
  {
    icon: FiSliders,
    title: 'Your Control',
    description: 'You have rights over your personal information and can request access, correction, or deletion at any time.',
    color: '#f97316',
  },
];

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include your name, email address, phone number, and information about your solar assets.

We also collect usage data automatically, including your IP address, browser type, pages visited, and interactions with our platform. This helps us improve the SOLTRAK experience.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to provide, maintain, and improve our services; to process transactions and send related information; to send technical notices and support messages; to respond to your comments and questions; and to monitor and analyse usage patterns.

We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as required by law.`,
  },
  {
    title: '3. Data Security',
    content: `SOLTRAK employs industry-standard security measures to protect your information from unauthorised access, disclosure, alteration, or destruction. This includes end-to-end encryption, secure data storage, role-based access controls, and regular security audits.

Our infrastructure is hosted on ISO 27001-compliant cloud services. Despite these measures, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: '4. Data Retention',
    content: `We retain your personal information for as long as your account is active or as needed to provide you services. You may request deletion of your personal data at any time by contacting us at info@soltrak.co.za.

Performance and operational data associated with your solar assets is retained for the duration of your contract and for a period thereafter as required for audit and compliance purposes.`,
  },
  {
    title: '5. Your Rights',
    content: `Under applicable data protection legislation, you have the right to: access the personal data we hold about you; request correction of inaccurate data; request deletion of your personal data; object to processing of your personal data; and request restriction of processing.

To exercise any of these rights, please contact us at info@soltrak.co.za. We will respond to your request within 30 days.`,
  },
  {
    title: '6. Cookies',
    content: `We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.

We use essential cookies for site functionality, analytics cookies to understand how you interact with our platform, and preference cookies to remember your settings.`,
  },
  {
    title: '7. Contact Us',
    content: `If you have any questions about this Privacy Policy, please contact us:

Email: info@soltrak.co.za
Phone: 021 300 0485
Address: Old Warehouse Building, 2nd Floor, Black River Park, Fir Street, Observatory, Cape Town, 7925`,
  },
];

const PrivacyPolicy: React.FC = () => {
  const highlightsRef = useRef(null);
  const highlightsInView = useInView(highlightsRef, { once: true, margin: '-100px' });

  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="We take your privacy seriously. Here's how we collect, use, and protect your information."
        backgroundImage="/assets/private-p.png"
        badge="Legal"
      />

      {/* Highlights */}
      <section className="section-padding bg-white dark:bg-[#0a1628]">
        <div className="container-custom">
          <div
            ref={highlightsRef}
            className="grid grid-cols-1 tablet:grid-cols-3 gap-6 mb-16"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={highlightsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className="text-center p-8 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: `${item.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Last updated + Download */}
          <div className="flex flex-col tablet:flex-row items-start tablet:items-center justify-between gap-4 mb-12 p-5 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl">
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Privacy Policy</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">Last updated: April 10, 2025</p>
            </div>
            <a
              href="/assets/Website Privacy Policy - Soltrak 2025_04_10 (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1768a1] text-white text-sm font-semibold rounded-xl hover:bg-[#1E81C6] transition-all duration-200"
            >
              <FiDownload className="w-4 h-4" />
              Download PDF
            </a>
          </div>

          {/* Policy content */}
          <div className="max-w-3xl flex flex-col gap-10">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{section.title}</h2>
                <div className="space-y-3">
                  {section.content.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {index < sections.length - 1 && (
                  <div className="mt-8 h-px bg-gray-100 dark:bg-gray-800" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
