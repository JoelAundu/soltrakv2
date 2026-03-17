import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineLocationMarker, HiOutlineFilter } from 'react-icons/hi';
import { HiArrowRight, HiBriefcase } from 'react-icons/hi2';
import { IoDocumentsOutline } from 'react-icons/io5';
import PageHeader from '../components/layout/PageHeader';
import { jobs } from '../data/jobs';

const Career: React.FC = () => {
  const navigate = useNavigate();
  const [jobType, setJobType] = useState('All');
  const [workspace, setWorkspace] = useState('All');
  const [filtered, setFiltered] = useState(jobs);

  const handleSearch = () => {
    let result = jobs;
    if (jobType !== 'All') result = result.filter((j) => j.type === jobType);
    if (workspace !== 'All') result = result.filter((j) => j.workspace === workspace);
    setFiltered(result);
  };

  const typeBadge: Record<string, string> = {
    'Full Time': 'bg-[#1768a1]/10 text-[#1768a1] border-[#1768a1]/20 dark:bg-[#1768a1]/20 dark:text-[#72BCBF] dark:border-[#72BCBF]/20',
    'Part Time': 'bg-orange-50 text-orange-600 border-orange-200 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20',
    Contract:   'bg-purple-50 text-purple-600 border-purple-200 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20',
    Internship: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20',
  };
  const workspaceBadge: Record<string, string> = {
    Remote:   'bg-green-50 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20',
    Hybrid:   'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20',
    'On-site':'bg-gray-100 text-gray-700 border-gray-200 dark:bg-white/5 dark:text-gray-400 dark:border-white/10',
  };

  return (
    <>
      <PageHeader
        title="Join the Team"
        subtitle="Help us build Africa's leading solar asset monitoring platform. We're looking for talented people who are passionate about renewable energy and technology."
        backgroundImage="/assets/getting-started.png"
        badge="Careers"
      />

      <section className="section-padding bg-white dark:bg-[#0a1628]">
        <div className="container-custom max-w-5xl">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-[#1768a1]/10 dark:bg-[#1768a1]/20 text-[#1768a1] dark:text-[#72BCBF] text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Open Positions
            </span>
            <h2 className="section-heading text-gray-900 dark:text-white mb-4">
              Current <span className="gradient-text">Opportunities</span>
            </h2>
            <p className="section-subheading mx-auto">
              We're a hybrid team based in Cape Town. We offer competitive salaries, a collaborative culture, and the chance to do meaningful work in the renewable energy sector.
            </p>
          </motion.div>

          {/* Filter bar */}
          <div className="bg-gray-50 dark:bg-white/5 rounded-2xl ring-1 ring-gray-100 dark:ring-white/10 p-5 mb-8">
            <div className="flex flex-col tablet:flex-row items-center gap-4">
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm font-medium flex-shrink-0">
                <HiOutlineFilter className="w-4 h-4" />
                <span>Filter Jobs</span>
              </div>

              <div className="flex flex-col tablet:flex-row gap-3 flex-1 w-full">
                <div className="flex flex-col gap-1 flex-1">
                  <label htmlFor="jobType" className="text-xs font-semibold text-gray-400 uppercase tracking-wide px-1">
                    Job Type
                  </label>
                  <select
                    id="jobType"
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    className="border border-gray-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm
                      text-gray-700 dark:text-gray-200 bg-white dark:bg-[#0a1628]
                      focus:outline-none focus:ring-2 focus:ring-[#1768a1]/30 focus:border-[#1768a1] transition-all"
                  >
                    <option value="All">All Types</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1 flex-1">
                  <label htmlFor="workspace" className="text-xs font-semibold text-gray-400 uppercase tracking-wide px-1">
                    Workspace
                  </label>
                  <select
                    id="workspace"
                    value={workspace}
                    onChange={(e) => setWorkspace(e.target.value)}
                    className="border border-gray-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm
                      text-gray-700 dark:text-gray-200 bg-white dark:bg-[#0a1628]
                      focus:outline-none focus:ring-2 focus:ring-[#1768a1]/30 focus:border-[#1768a1] transition-all"
                  >
                    <option value="All">All Workspaces</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="On-site">On-site</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handleSearch}
                className="px-6 py-3 rounded-xl font-bold text-white text-sm flex-shrink-0 w-full tablet:w-auto
                  bg-gradient-to-r from-[#1768a1] to-[#72BCBF]
                  transition-all duration-300 hover:-translate-y-0.5
                  hover:shadow-[0_8px_25px_rgba(23,104,161,0.35)]"
              >
                Search
              </button>
            </div>
          </div>

          {/* Count */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Current Openings
              <span className="ml-2 text-sm font-normal text-gray-400">
                ({filtered.length} position{filtered.length !== 1 ? 's' : ''})
              </span>
            </h3>
          </div>

          {/* Job cards */}
          {filtered.length > 0 ? (
            <div className="flex flex-col gap-4">
              {filtered.map((job, i) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group bg-white dark:bg-gray-900/60 rounded-2xl ring-1 ring-gray-100 dark:ring-gray-800
                    p-6 tablet:p-7 flex flex-col tablet:flex-row items-start tablet:items-center justify-between gap-5
                    transition-all duration-300 hover:ring-[#1768a1]/30 dark:hover:ring-[#1768a1]/40
                    hover:shadow-[0_12px_40px_rgba(23,104,161,0.1)] hover:-translate-y-0.5"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0
                    bg-gradient-to-br from-[#1768a1]/10 to-[#72BCBF]/10
                    group-hover:from-[#1768a1]/20 group-hover:to-[#72BCBF]/20 transition-colors">
                    <HiBriefcase className="w-5 h-5 text-[#1768a1] dark:text-[#72BCBF]" />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="text-base tablet:text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="flex items-center gap-1 text-gray-400 text-xs">
                        <HiOutlineLocationMarker className="w-3.5 h-3.5" />
                        <span>{job.city}</span>
                      </div>
                      <span className="text-gray-200 dark:text-gray-700">·</span>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${typeBadge[job.type] ?? ''}`}>
                        {job.type}
                      </span>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${workspaceBadge[job.workspace] ?? ''}`}>
                        {job.workspace}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => navigate(`/career/${job.id}`)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white flex-shrink-0
                      bg-gradient-to-r from-[#1768a1] to-[#72BCBF] w-full tablet:w-auto justify-center
                      transition-all duration-300 hover:-translate-y-0.5
                      hover:shadow-[0_8px_20px_rgba(23,104,161,0.35)]"
                  >
                    View Role
                    <HiArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#1768a1]/10 to-[#72BCBF]/10 flex items-center justify-center mb-6">
                <IoDocumentsOutline size={44} className="text-[#1768a1]/60 dark:text-[#72BCBF]/60" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No openings right now</h3>
              <p className="text-gray-400 text-sm max-w-xs mb-8">
                We don't have any matching positions at the moment. Submit an open application and we'll keep your profile on file.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdrKzUIRkHznU7uLJ0-QV9eOa-KlRiN3hr6q9Uu4gScJs2h8g/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-bold text-white text-sm bg-gradient-to-r from-[#1768a1] to-[#72BCBF]
                  transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(23,104,161,0.35)]"
              >
                Submit Open Application
              </a>
            </div>
          )}

          {/* Don't see your role */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="mt-16 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-3xl p-8 tablet:p-12 text-center"
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
