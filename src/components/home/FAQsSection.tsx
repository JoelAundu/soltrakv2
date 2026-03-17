import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { generalFaqs } from '../../data/faqs';

interface AccordionItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, index, isOpen, onToggle }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? 'border-[#1768a1]/40 dark:border-[#1768a1]/50 shadow-lg shadow-[#1768a1]/10'
          : 'border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 tablet:p-6 text-left bg-white dark:bg-gray-900/60 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200"
      >
        <span className="font-semibold text-gray-900 dark:text-white text-sm tablet:text-base leading-snug pr-2">
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

const FAQsSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-white dark:bg-[#0a1628] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#1768a1]/5 rounded-full blur-3xl translate-y-1/3 translate-x-1/4 pointer-events-none" />

      <div className="relative container-custom">
        <div className="grid grid-cols-1 desktop:grid-cols-3 gap-12 desktop:gap-16">
          {/* Left: Heading */}
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="desktop:col-span-1"
          >
            <span className="inline-block px-4 py-1.5 bg-[#1768a1]/10 dark:bg-[#1768a1]/20 text-[#1768a1] dark:text-[#72BCBF] text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              FAQs
            </span>
            <h2 className="text-3xl tablet:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked{' '}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8">
              Everything you need to know about SOLTRAK, our platform, and how we can help you protect your solar investment.
            </p>
            <Link
              to="/faqs"
              className="inline-flex items-center gap-2 text-[#1768a1] dark:text-[#72BCBF] font-semibold text-sm hover:underline"
            >
              View all FAQs →
            </Link>
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="desktop:col-span-2 flex flex-col gap-3"
          >
            {generalFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
