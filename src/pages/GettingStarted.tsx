import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCheck, FiZap, FiServer, FiRadio, FiBarChart2 } from 'react-icons/fi';
import PageHeader from '../components/layout/PageHeader';

const steps = [
  {
    step: '01',
    icon: FiRadio,
    title: 'Infrastructure Assessment',
    description:
      'Our team conducts a detailed review of your existing metering setup — grid meters, solar meters, inverters, and communication hardware. We identify what\'s in place and what, if anything, needs to be added.',
    color: '#1768a1',
  },
  {
    step: '02',
    icon: FiServer,
    title: 'Data Integration',
    description:
      'SOLTRAK integrates with your existing data sources — cloud inverter platforms (SolarEdge, Fronius, Huawei), utility meters, and telemetry custodians. No rip-and-replace. We work with what you have.',
    color: '#72BCBF',
  },
  {
    step: '03',
    icon: FiBarChart2,
    title: 'Platform Onboarding',
    description:
      'Your assets are configured on the SOLTRAK platform with your specific tariff structure, performance baselines, and reporting preferences. We validate data quality before going live.',
    color: '#f97316',
  },
  {
    step: '04',
    icon: FiZap,
    title: 'Go Live',
    description:
      'From day one you have real-time access to your dashboard and automated monthly reports. Our team monitors your assets and alerts you to any performance deviations or equipment faults.',
    color: '#1E81C6',
  },
];

const compatibility = [
  { category: 'Inverters', items: ['SolarEdge', 'Fronius', 'Huawei FusionSolar', 'SMA', 'ABB', 'Sungrow', 'Goodwe'] },
  { category: 'Meters', items: ['Schneider Electric', 'ABB', 'Landis+Gyr', 'Itron', 'Kamstrup', 'Iskra'] },
  { category: 'Protocols', items: ['REST API', 'MQTT', 'Modbus TCP/IP', 'DNP3', 'IEC 61850', 'SunSpec'] },
  { category: 'Platforms', items: ['SolarEdge Cloud', 'Sunny Portal (SMA)', 'Solar.web (Fronius)', 'FusionSolar', 'Sungrow iSolarCloud'] },
];

const GettingStarted: React.FC = () => {
  const stepsRef = useRef(null);
  const stepsInView = useInView(stepsRef, { once: true, margin: '-100px' });
  const compatRef = useRef(null);
  const compatInView = useInView(compatRef, { once: true, margin: '-100px' });

  return (
    <>
      <PageHeader
        title="Getting Started"
        subtitle="SOLTRAK is designed to integrate with your existing infrastructure — no rip-and-replace, no unnecessary hardware costs."
        backgroundImage="/assets/getting-started.png"
        badge="Onboarding"
      />

      {/* How it works */}
      <section className="section-padding bg-white dark:bg-[#0a1628]">
        <div className="container-custom">
          <motion.div
            ref={stepsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[#1768a1]/10 dark:bg-[#1768a1]/20 text-[#1768a1] dark:text-[#72BCBF] text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              How It Works
            </span>
            <h2 className="section-heading text-gray-900 dark:text-white mb-4">
              From assessment to{' '}
              <span className="gradient-text">live monitoring</span>
            </h2>
            <p className="section-subheading mx-auto">
              Typical onboarding takes 2–4 weeks. Our team handles the integration work — you just need to be ready to see the data.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="hidden desktop:block absolute left-[calc(50%-1px)] top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#1768a1]/40 via-[#72BCBF]/40 to-transparent" />

            <div className="flex flex-col gap-8 desktop:gap-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    animate={stepsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className={`grid grid-cols-1 desktop:grid-cols-2 gap-6 desktop:gap-12 items-center ${
                      !isEven ? 'desktop:direction-rtl' : ''
                    }`}
                  >
                    <div className={!isEven ? 'desktop:order-2' : ''}>
                      <div
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm font-bold mb-4"
                        style={{ background: `${step.color}15`, color: step.color }}
                      >
                        <span>Step {step.step}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
                    </div>

                    <div className={`flex ${isEven ? 'desktop:justify-end' : 'desktop:justify-start desktop:order-1'}`}>
                      <div
                        className="relative w-24 h-24 desktop:w-32 desktop:h-32 rounded-3xl flex items-center justify-center"
                        style={{ background: `${step.color}12`, border: `2px solid ${step.color}30` }}
                      >
                        <Icon className="w-10 h-10 desktop:w-14 desktop:h-14" style={{ color: step.color }} />
                        <div
                          className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black"
                          style={{ background: step.color }}
                        >
                          {step.step}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How SOLTRAK connects */}
      <section className="section-padding bg-gray-50 dark:bg-[#0d1f38]">
        <div className="container-custom">
          <div className="grid grid-cols-1 desktop:grid-cols-2 gap-12 items-start">
            {/* Left: copy */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#1768a1]/10 dark:bg-[#1768a1]/20 text-[#1768a1] dark:text-[#72BCBF] text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
                Infrastructure
              </span>
              <h2 className="text-3xl tablet:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Works with what you <span className="gradient-text">already have</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                SOLTRAK relies on supportive services to provide the best insights. Often, renewable energy assets are already equipped with most of the necessary telemetry. Our approach is to avoid burdening customers with additional hardware costs wherever possible.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Prospective clients who already use supported service providers can follow an accelerated onboarding process. Customers without on-site telemetry in place will require an onboarding assessment, after which SOLTRAK will recommend the most cost-effective path to full monitoring.
              </p>
              <ul className="space-y-3">
                {[
                  'No rip-and-replace — works with existing hardware',
                  'Accelerated onboarding for supported providers',
                  'Integrates with leading metering and inverter brands',
                  'Custom integrations available for enterprise clients',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-[#1768a1]/10 dark:bg-[#1768a1]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <FiCheck className="w-3 h-3 text-[#1768a1] dark:text-[#72BCBF]" />
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: compatibility grid */}
            <motion.div
              ref={compatRef}
              initial={{ opacity: 0, x: 30 }}
              animate={compatInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 gap-4"
            >
              {compatibility.map((group, gIndex) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={compatInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: gIndex * 0.1 }}
                  className="bg-white dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 rounded-2xl p-5"
                >
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#1768a1] dark:text-[#72BCBF] mb-3">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-3 py-1.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 rounded-lg"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a1628] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1768a1]/20 to-transparent pointer-events-none" />
        <div className="relative container-custom">
          <h2 className="text-3xl tablet:text-4xl font-bold text-white mb-4">
            Ready to start monitoring?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Our team will assess your current setup and provide a clear onboarding plan — at no cost.
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('expandContact'))}
            className="btn-primary"
          >
            Book a Free Assessment
          </button>
        </div>
      </section>
    </>
  );
};

export default GettingStarted;
