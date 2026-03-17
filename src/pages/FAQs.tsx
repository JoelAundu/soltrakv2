import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import PageHeader from '../components/layout/PageHeader';
import { generalFaqs, technicalFaqs } from '../data/faqs';

interface AccordionItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, index, isOpen, onToggle }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? 'border-[#1768a1]/40 dark:border-[#1768a1]/50 shadow-lg shadow-[#1768a1]/5'
          : 'border-gray-100 dark:border-gray-800'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 tablet:p-6 text-left bg-white dark:bg-gray-900/60 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
      >
        <span className="font-semibold text-gray-900 dark:text-white text-sm tablet:text-base leading-snug">
          {question}
        </span>
        <span
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            isOpen ? 'bg-[#1768a1] text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
          }`}
        >
          {isOpen ? <FiMinus className="w-4 h-4" /> : <FiPlus className="w-4 h-4" />}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-5 tablet:px-6 pb-5 tablet:pb-6 bg-white dark:bg-gray-900/60">
              <div className="h-px bg-gray-100 dark:bg-gray-800 mb-4" />
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface FAQGroupProps {
  title: string;
  badge: string;
  faqs: { question: string; answer: string }[];
}

const FAQGroup: React.FC<FAQGroupProps> = ({ title, badge, faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <span className="inline-block px-3 py-1 bg-[#1768a1]/10 dark:bg-[#1768a1]/20 text-[#1768a1] dark:text-[#72BCBF] text-xs font-semibold uppercase tracking-widest rounded-full mb-3">
          {badge}
        </span>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
      </motion.div>

      <div className="flex flex-col gap-3">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            index={index}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

const FAQs: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Navigate your sustainable energy path with confidence. Insightful answers to your most pressing questions."
        backgroundImage="/assets/about-us.png"
        badge="Knowledge Base"
      />

      <section className="section-padding bg-white dark:bg-[#0a1628]">
        <div className="container-custom max-w-3xl">
          <div className="flex flex-col gap-14">
            <FAQGroup
              badge="General"
              title="General Questions"
              faqs={generalFaqs}
            />
            <FAQGroup
              badge="Technical"
              title="Technical Questions"
              faqs={technicalFaqs}
            />
          </div>

          {/* Still have questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="mt-16 bg-gradient-to-br from-[#1768a1] to-[#0f4c7a] rounded-3xl p-10 text-center text-white"
          >
            <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="text-white/70 mb-6 text-sm max-w-md mx-auto">
              Our team is happy to answer any questions you have about SOLTRAK, our onboarding process, or the technical details of our platform.
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('expandContact'))}
              className="inline-flex items-center gap-2 px-7 py-3 bg-white text-[#1768a1] font-bold rounded-xl hover:bg-gray-50 transition-all duration-200"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FAQs;
