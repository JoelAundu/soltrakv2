import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiBriefcase, FiMonitor, FiChevronDown, FiExternalLink } from 'react-icons/fi';
import PageHeader from '../components/layout/PageHeader';
import { jobs } from '../data/jobs';

const applyLinks: Record<string, string> = {
  'solar-energy-analyst': 'https://forms.gle/SiW2RN2CwVfFhpSi7',
};

interface JobCardProps {
  job: (typeof jobs)[0];
  index: number;
}

const JobCard: React.FC<JobCardProps> = ({ job, index }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const applyLink = applyLinks[job.id] || 'mailto:info@soltrak.co.za';

  const badgeColors: Record<string, string> = {
    'Full Time': 'bg-[#1768a1]/10 text-[#1768a1] dark:bg-[#1768a1]/20 dark:text-[#72BCBF]',
    'Part Time': 'bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400',
    Contract: 'bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400',
    Internship: 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400',
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden bg-white dark:bg-gray-900/60 hover:shadow-lg transition-all duration-300"
    >
      {/* Header */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 p-6 text-left hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
      >
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColors[job.type]}`}>
              {job.type}
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 flex items-center gap-1">
              <FiMonitor className="w-3 h-3" />
              {job.workspace}
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{job.title}</h3>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1.5">
              <FiMapPin className="w-4 h-4" />
              {job.location}
            </span>
            <span className="flex items-center gap-1.5">
              <FiBriefcase className="w-4 h-4" />
              {job.department}
            </span>
          </div>
        </div>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 mt-1"
        >
          <FiChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </button>

      {/* Expanded content */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-6">
              <div className="h-px bg-gray-100 dark:bg-gray-800 mb-6" />

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                {job.description}
              </p>

              <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                    Responsibilities
                  </h4>
                  <ul className="space-y-2.5">
                    {job.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 bg-[#1768a1] dark:bg-[#72BCBF] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                    Requirements
                  </h4>
                  <ul className="space-y-2.5">
                    {job.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 bg-[#72BCBF] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href={applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1768a1] text-white font-semibold rounded-xl hover:bg-[#1E81C6] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#1768a1]/30"
              >
                Apply for this Role
                <FiExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Career: React.FC = () => {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <>
      <PageHeader
        title="Join the Team"
        subtitle="Help us build Africa's leading solar asset monitoring platform. We're looking for talented people who are passionate about renewable energy and technology."
        backgroundImage="/assets/getting-started.png"
        badge="Careers"
      />

      <section className="section-padding bg-white dark:bg-[#0a1628]">
        <div className="container-custom">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 bg-[#1768a1]/10 dark:bg-[#1768a1]/20 text-[#1768a1] dark:text-[#72BCBF] text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Open Positions
            </span>
            <h2 className="section-heading text-gray-900 dark:text-white mb-4">
              Current{' '}
              <span className="gradient-text">Opportunities</span>
            </h2>
            <p className="section-subheading mx-auto">
              We're a hybrid team based in Cape Town. We offer competitive salaries, a collaborative culture, and the chance to do meaningful work in the renewable energy sector.
            </p>
          </motion.div>

          {jobs.length > 0 ? (
            <div className="flex flex-col gap-4 max-w-3xl mx-auto">
              {jobs.map((job, index) => (
                <JobCard key={job.id} job={job} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 dark:text-gray-600 text-lg mb-4">
                No open positions right now.
              </div>
              <p className="text-gray-500 dark:text-gray-600 text-sm mb-6">
                We're always interested in hearing from talented people. Send your CV to us and we'll be in touch when something comes up.
              </p>
              <a href="mailto:info@soltrak.co.za" className="btn-primary">
                Send your CV
              </a>
            </div>
          )}

          {/* Culture blurb */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="mt-20 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-3xl p-8 tablet:p-12 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Don't see your role?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
              If you're passionate about renewable energy, data, or software and think you'd be a good fit for the SOLTRAK team, reach out to us directly.
            </p>
            <a href="mailto:info@soltrak.co.za" className="btn-outline">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Career;
