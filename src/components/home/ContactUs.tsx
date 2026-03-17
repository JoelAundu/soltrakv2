import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiSend, FiChevronDown, FiExternalLink } from 'react-icons/fi';
import axios from 'axios';
import toast from 'react-hot-toast';

const LAMBDA_ENDPOINT =
  'https://r8kvk4m6jg.execute-api.eu-west-1.amazonaws.com/default/SoltrakContactForm';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormData>({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Listen for expand event from hero "Request Demo" button
  useEffect(() => {
    const handler = () => {
      setExpanded(true);
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    };
    window.addEventListener('expandContact', handler);
    return () => window.removeEventListener('expandContact', handler);
  }, []);

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await axios.post(LAMBDA_ENDPOINT, form);
      toast.success('Message sent! We\'ll be in touch shortly.');
      setForm({ name: '', phone: '', email: '', message: '' });
      setErrors({});
    } catch {
      toast.error('Something went wrong. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="section-padding bg-[#0a1628] relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'url(/assets/Pattern-Grid.png)',
          backgroundSize: '300px',
          backgroundRepeat: 'repeat',
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#1768a1]/40 to-transparent" />

      <div className="relative container-custom">
        <div className="grid grid-cols-1 desktop:grid-cols-2 gap-12 desktop:gap-20 items-start">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#1768a1]/20 border border-[#1768a1]/30 text-[#72BCBF] text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Get in Touch
            </span>
            <h2 className="section-heading text-white mb-4">
              Let's{' '}
              <span className="gradient-text">talk</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              Ready to take control of your solar asset performance? Reach out to our team and we'll show you how SOLTRAK can work for your portfolio.
            </p>

            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1768a1]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiPhone className="w-4 h-4 text-[#72BCBF]" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Phone</p>
                  <a href="tel:0213000485" className="text-white font-medium hover:text-[#72BCBF] transition-colors">
                    021 300 0485
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1768a1]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiMail className="w-4 h-4 text-[#72BCBF]" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:info@soltrak.co.za" className="text-white font-medium hover:text-[#72BCBF] transition-colors">
                    info@soltrak.co.za
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1768a1]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="w-4 h-4 text-[#72BCBF]" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Address</p>
                  <address className="text-white font-medium not-italic text-sm leading-relaxed">
                    Old Warehouse Building, 2nd Floor<br />
                    Black River Park, Fir Street<br />
                    Observatory, Cape Town, 7925
                  </address>
                  <a
                    href="https://maps.google.com/?q=Black+River+Park+Observatory+Cape+Town"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#72BCBF] text-xs mt-2 hover:underline"
                  >
                    Get Directions <FiExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Expandable form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
              {/* Form toggle header */}
              <button
                onClick={() => setExpanded((v) => !v)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors duration-200"
              >
                <div>
                  <p className="text-white font-bold text-lg">Send us a message</p>
                  <p className="text-gray-500 text-sm mt-0.5">We typically respond within 24 hours</p>
                </div>
                <motion.div
                  animate={{ rotate: expanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <form onSubmit={handleSubmit} className="px-6 pb-6 flex flex-col gap-4">
                      <div className="h-px bg-white/10 mb-2" />

                      {/* Name */}
                      <div>
                        <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5">
                          Name <span className="text-[#72BCBF]">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={`w-full bg-white/10 border rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#1768a1] transition-colors ${
                            errors.name ? 'border-red-500/60' : 'border-white/15'
                          }`}
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5">
                          Phone <span className="text-gray-600">(optional)</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+27 00 000 0000"
                          className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#1768a1] transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5">
                          Email <span className="text-[#72BCBF]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className={`w-full bg-white/10 border rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#1768a1] transition-colors ${
                            errors.email ? 'border-red-500/60' : 'border-white/15'
                          }`}
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5">
                          Message <span className="text-[#72BCBF]">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Tell us about your portfolio and what you're looking to achieve..."
                          className={`w-full bg-white/10 border rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#1768a1] transition-colors resize-none ${
                            errors.message ? 'border-red-500/60' : 'border-white/15'
                          }`}
                        />
                        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[#1768a1] text-white font-semibold rounded-xl hover:bg-[#1E81C6] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#1768a1]/30 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <FiSend className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
