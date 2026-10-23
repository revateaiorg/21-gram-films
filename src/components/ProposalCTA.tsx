import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const ProposalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-[#050403] relative overflow-hidden border-t border-white/5">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#39D98A]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#39D98A]" />
          <span className="text-[10px] font-mono text-[#39D98A] tracking-widest uppercase font-semibold">
            GET A PROPOSAL
          </span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[0.95] mb-6"
        >
          LET'S MAKE<br />
          SOMETHING<br />
          <span className="text-[#39D98A]">WITH WEIGHT.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base text-zinc-400 font-light max-w-xl mx-auto mb-8"
        >
          Tell us what you're building, what you're trying to change, or simply where you want your brand to go.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#39D98A] text-black font-mono font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_30px_rgba(57,217,138,0.35)] hover:shadow-[0_0_45px_rgba(57,217,138,0.55)] hover:scale-[1.02]"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#work"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0D0B09] border border-white/10 hover:border-[#39D98A]/50 text-white font-mono font-medium text-xs tracking-wider uppercase transition-all duration-300 hover:bg-white/5"
          >
            <span>VIEW OUR WORK</span>
          </a>
        </motion.div>

        <div className="text-[11px] font-mono text-zinc-500 tracking-wider">
          Web · Social · Films · Content | One team. One point of contact.
        </div>
      </div>
    </section>
  );
};

export default ProposalCTA;
