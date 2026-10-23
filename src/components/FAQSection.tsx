import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_DATA } from '../data/siteData';
import { Plus, Minus } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#0B0907] relative overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-[#39D98A] tracking-widest uppercase mb-3 block">
            // FREQUENTLY ASKED
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
            EVERYTHING YOU<br />
            <span className="text-[#39D98A]">NEED TO KNOW.</span>
          </h2>
        </div>

        {/* Accordions List */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-6 transition-colors">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between text-left group gap-4 py-2"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="text-xs font-mono font-bold text-[#39D98A] shrink-0">
                      {faq.number}
                    </span>
                    <span className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-[#39D98A] transition-colors tracking-wide">
                      {faq.question}
                    </span>
                  </div>

                  <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen ? 'bg-[#39D98A] text-black border-[#39D98A]' : 'text-zinc-400 group-hover:border-[#39D98A]/50 group-hover:text-[#39D98A]'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 pb-2 pl-8 sm:pl-12 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-2xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
