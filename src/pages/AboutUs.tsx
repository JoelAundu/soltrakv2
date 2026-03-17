import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PageHeader from '../components/layout/PageHeader';
import { leadership, teamMembers } from '../data/team';

const storyCards = [
  {
    icon: '/assets/accomplish.png',
    label: 'MISSION',
    text: 'To provide clear and comprehensive insights into the performance of operating renewable energy assets across Africa, built on a clear, bankable contractual framework.',
    color: '#1768a1',
  },
  {
    icon: '/assets/cooperation.png',
    label: 'AFFILIATION',
    text: 'SOLTRAK is affiliated with SOLINK, a specialized renewable energy consulting company that helps C&I companies take renewable energy projects from feasibility to commissioning.',
    color: '#72BCBF',
  },
  {
    icon: '/assets/certificate.png',
    label: 'TRACK RECORD',
    text: 'SOLTRAK has contracted to report on over 150 active solar PV assets. Our live platform brings pertinent metrics to asset owners from anywhere in the world at the touch of a button.',
    color: '#f97316',
  },
];

interface TeamCardProps {
  member: { name: string; title: string; image: string; bio: string };
  index: number;
  isLeader?: boolean;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, index, isLeader }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
    >
      {/* Photo */}
      <div className={`relative overflow-hidden bg-gray-100 dark:bg-gray-800 ${isLeader ? 'aspect-[4/5]' : 'aspect-square'}`}>
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1768a1]/20 to-[#72BCBF]/20"><span class="text-3xl font-bold text-[#1768a1]">${member.name[0]}</span></div>`;
            }
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Bio on hover */}
        {isLeader && (
          <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
            <p className="text-white text-xs leading-relaxed line-clamp-4">{member.bio}</p>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-bold text-gray-900 dark:text-white text-sm">{member.name}</h3>
        <p className="text-[#1768a1] dark:text-[#72BCBF] text-xs mt-0.5 font-medium">{member.title}</p>
      </div>
    </motion.div>
  );
};

const AboutUs: React.FC = () => {
  const storySectionRef = useRef(null);
  const teamSectionRef = useRef(null);
  const storyInView = useInView(storySectionRef, { once: true, margin: '-100px' });
  const teamInView = useInView(teamSectionRef, { once: true, margin: '-100px' });

  return (
    <>
      <PageHeader
        title="About SOLTRAK"
        subtitle="Africa's leading independent solar asset performance monitoring platform — built for investors, not installers."
        backgroundImage="/assets/about-us.png"
        badge="Our Story"
      />

      {/* Mission / Story */}
      <section className="section-padding bg-white dark:bg-[#0a1628]">
        <div className="container-custom">
          <motion.div
            ref={storySectionRef}
            initial={{ opacity: 0, y: 30 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 bg-[#1768a1]/10 dark:bg-[#1768a1]/20 text-[#1768a1] dark:text-[#72BCBF] text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Who We Are
            </span>
            <h2 className="section-heading text-gray-900 dark:text-white mb-4">
              Our{' '}
              <span className="gradient-text">Story</span>
            </h2>
            <p className="section-subheading mx-auto">
              SOLTRAK was founded on a simple insight: solar asset owners deserve independent, unbiased visibility into how their investments perform — not just what their O&M contractors choose to share.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6">
            {storyCards.map((card, index) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 40 }}
                animate={storyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-3xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${card.color}15` }}
                >
                  <img src={card.icon} alt={card.label} className="w-8 h-8 object-contain" />
                </div>

                <span
                  className="text-xs font-bold uppercase tracking-widest mb-3 block"
                  style={{ color: card.color }}
                >
                  {card.label}
                </span>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{card.text}</p>

                <div
                  className="mt-6 h-0.5 w-10 rounded-full"
                  style={{ background: card.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-gray-50 dark:bg-[#0d1f38]">
        <div className="container-custom">
          <motion.div
            ref={teamSectionRef}
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 bg-[#1768a1]/10 dark:bg-[#1768a1]/20 text-[#1768a1] dark:text-[#72BCBF] text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Our Team
            </span>
            <h2 className="section-heading text-gray-900 dark:text-white mb-4" id="team">
              The people behind{' '}
              <span className="gradient-text">SOLTRAK</span>
            </h2>
            <p className="section-subheading mx-auto">
              A multidisciplinary team of energy professionals, software engineers, and financial experts united by a shared mission.
            </p>
          </motion.div>

          {/* Directors */}
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-600 mb-6">
            Leadership
          </h3>
          <div className="grid grid-cols-2 tablet:grid-cols-3 gap-5 mb-14">
            {leadership.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} isLeader />
            ))}
          </div>

          {/* Team */}
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-600 mb-6">
            Team
          </h3>
          <div className="grid grid-cols-3 tablet:grid-cols-4 desktop:grid-cols-6 gap-4">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1768a1]/20 to-transparent pointer-events-none" />
        <div className="relative container-custom text-center">
          <h2 className="text-3xl tablet:text-4xl font-bold text-white mb-4">
            Ready to work with us?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Join over 199 assets already benefiting from independent SOLTRAK monitoring.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#contact"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('expandContact'));
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              Get in Touch
            </a>
            <a
              href="https://app.soltrak.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
            >
              View Platform
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
