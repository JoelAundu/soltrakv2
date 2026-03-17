import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { HiArrowLeft, HiBriefcase, HiCheckCircle } from 'react-icons/hi2';
import { jobs } from '../data/jobs';
import PageHeader from '../components/layout/PageHeader';

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xs font-bold tracking-widest uppercase text-[#1768a1] dark:text-[#72BCBF] mb-4 flex items-center gap-2">
    <span className="inline-block w-4 h-0.5 rounded-full bg-gradient-to-r from-[#1768a1] to-[#72BCBF]" />
    {children}
  </h2>
);

const BulletItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
    <HiCheckCircle className="w-4 h-4 text-[#72BCBF] flex-shrink-0 mt-0.5" />
    <span>{text}</span>
  </li>
);


const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0a1628] flex flex-col items-center justify-center px-4 py-20">
        <div className="w-20 h-20 rounded-3xl bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-6">
          <HiBriefcase className="w-8 h-8 text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Job Not Found</h2>
        <p className="text-gray-500 dark:text-gray-400 text-center max-w-sm mb-8">
          We couldn't find the position you're looking for. It may have been filled or removed.
        </p>
        <button
          onClick={() => navigate('/career')}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-[#1768a1] dark:text-[#72BCBF] text-sm
            bg-[#1768a1]/10 dark:bg-[#1768a1]/20 hover:bg-[#1768a1]/20 dark:hover:bg-[#1768a1]/30 transition-colors"
        >
          <HiArrowLeft className="w-4 h-4" />
          Back to Careers
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#060e1a]">

      <PageHeader
        title={job.title}
        subtitle={`${job.city}  ·  ${job.type}  ·  ${job.workspace}`}
        backgroundImage="/assets/getting-started.png"
        badge="Careers"
      />

      {/* Back link */}
      <div className="max-w-4xl mx-auto px-4 tablet:px-6 pt-8">
        <button
          onClick={() => navigate('/career')}
          className="flex items-center gap-2 text-[#1768a1] dark:text-[#72BCBF] hover:underline text-sm font-medium transition-colors"
        >
          <HiArrowLeft className="w-4 h-4" />
          Back to Careers
        </button>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 tablet:px-6 py-12">
        <div className="flex flex-col desktop:flex-row gap-8">

          {/* Main content */}
          <div className="flex-1 space-y-6">

            {/* Overview */}
            <div className="bg-gradient-to-r from-[#1768a1]/5 to-[#72BCBF]/5 dark:from-[#1768a1]/10 dark:to-[#72BCBF]/10
              rounded-2xl p-7 border-l-4 border-[#1768a1]">
              <SectionHeading>Overview</SectionHeading>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{job.overview}</p>
            </div>

            {/* About Us */}
            {job.aboutUs && (
              <div className="bg-white dark:bg-gray-900/60 rounded-2xl p-7 ring-1 ring-gray-100 dark:ring-gray-800">
                <SectionHeading>About SOLTRAK</SectionHeading>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed whitespace-pre-line">{job.aboutUs}</p>
              </div>
            )}

            {/* Responsibilities */}
            <div className="bg-white dark:bg-gray-900/60 rounded-2xl p-7 ring-1 ring-gray-100 dark:ring-gray-800">
              <SectionHeading>Responsibilities</SectionHeading>
              <ul className="space-y-2.5">
                {job.responsibilities.map((item, i) => <BulletItem key={i} text={item} />)}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white dark:bg-gray-900/60 rounded-2xl p-7 ring-1 ring-gray-100 dark:ring-gray-800">
              <SectionHeading>What's In It For You</SectionHeading>
              <ul className="space-y-2.5">
                {job.benefits.map((item, i) => <BulletItem key={i} text={item} />)}
              </ul>
            </div>

            {/* Qualifications */}
            <div className="bg-white dark:bg-gray-900/60 rounded-2xl p-7 ring-1 ring-gray-100 dark:ring-gray-800">
              <SectionHeading>Qualifications</SectionHeading>
              <ul className="space-y-2.5">
                {job.qualification.map((item, i) => <BulletItem key={i} text={item} />)}
              </ul>
            </div>

            {/* Beneficial */}
            {job.beneficial && job.beneficial.length > 0 && (
              <div className="bg-white dark:bg-gray-900/60 rounded-2xl p-7 ring-1 ring-gray-100 dark:ring-gray-800">
                <SectionHeading>Beneficial</SectionHeading>
                <ul className="space-y-2.5">
                  {job.beneficial.map((item, i) => <BulletItem key={i} text={item} />)}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            {job.techStack && job.techStack.length > 0 && (
              <div className="bg-white dark:bg-gray-900/60 rounded-2xl p-7 ring-1 ring-gray-100 dark:ring-gray-800">
                <SectionHeading>Tech Stack</SectionHeading>
                <ul className="space-y-2.5">
                  {job.techStack.map((item, i) => <BulletItem key={i} text={item} />)}
                </ul>
              </div>
            )}

            {/* Physical Requirements */}
            {job.physicalRequirements && job.physicalRequirements.length > 0 && (
              <div className="bg-white dark:bg-gray-900/60 rounded-2xl p-7 ring-1 ring-gray-100 dark:ring-gray-800">
                <SectionHeading>Requirements</SectionHeading>
                <ul className="space-y-2.5">
                  {job.physicalRequirements.map((item, i) => <BulletItem key={i} text={item} />)}
                </ul>
              </div>
            )}
          </div>

          {/* Sticky sidebar */}
          <div className="w-full desktop:w-72 flex-shrink-0">
            <div className="bg-white dark:bg-gray-900/60 rounded-2xl ring-1 ring-gray-100 dark:ring-gray-800 p-6 sticky top-24 space-y-5">
              <h3 className="text-base font-bold text-gray-900 dark:text-white">Position Details</h3>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Location</span>
                  <span className="text-gray-800 dark:text-gray-200 font-medium text-right">{job.city}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Type</span>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">{job.type}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Workspace</span>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">{job.workspace}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Department</span>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">{job.department}</span>
                </div>
                {job.remuneration && (
                  <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
                    <p className="text-xs text-gray-400 mb-1">Remuneration</p>
                    <p className="text-gray-800 dark:text-gray-200 text-sm font-medium leading-relaxed">{job.remuneration}</p>
                  </div>
                )}
              </div>

              <div className="h-px bg-gray-100 dark:bg-gray-800" />

              <a
                href={job.howToApplyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-3.5 rounded-xl font-bold text-white text-sm text-center
                  bg-gradient-to-r from-[#1768a1] to-[#72BCBF]
                  transition-all duration-300 hover:-translate-y-0.5
                  hover:shadow-[0_10px_25px_rgba(23,104,161,0.4)]"
              >
                Apply Now
              </a>
              <button
                onClick={() => navigate('/career')}
                className="w-full px-4 py-3 rounded-xl font-semibold text-gray-500 dark:text-gray-400 text-sm
                  bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              >
                ← Back to Careers
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default JobDetail;
