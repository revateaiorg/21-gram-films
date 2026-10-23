import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_DATA } from '../data/siteData';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-[#050403] relative overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono text-[#39D98A] tracking-widest uppercase mb-3 block">
              // HOW WE WORK
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-none">
              A CLEAR<br />
              <span className="text-[#39D98A]">PROCESS.</span>
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-light leading-relaxed">
            Four predictable stages from initial briefing to live deployment. No surprises, no handoff friction.
          </p>
        </div>

        {/* 4 Process Timeline Cards with Thin Connecting Lines */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          
          {/* Subtle Horizontal Desktop Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none -translate-y-12" />

          {PROCESS_DATA.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="group p-6 rounded-2xl bg-[#0D0B09] border border-white/10 hover:border-[#39D98A]/50 transition-all duration-300 relative z-10 flex flex-col justify-between hover:bg-[#11100D]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-heading font-black text-[#39D98A]">
                    {step.number}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#39D98A]/40 group-hover:bg-[#39D98A] transition-colors" />
                </div>

                <h3 className="font-heading font-extrabold text-lg text-white mb-1 uppercase tracking-wide group-hover:text-[#39D98A] transition-colors">
                  {step.title}
                </h3>
                <div className="text-[10px] font-mono text-zinc-500 mb-3 uppercase tracking-wider">
                  {step.subtitle}
                </div>

                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom indicator */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>PHASE {step.number}</span>
                <span className="text-[#39D98A] opacity-0 group-hover:opacity-100 transition-opacity">→ READY</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
