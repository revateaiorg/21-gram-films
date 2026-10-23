import React from 'react';
import { motion } from 'framer-motion';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-32 bg-[#050403] relative overflow-hidden border-t border-white/5">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#39D98A]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono text-[#39D98A] tracking-widest uppercase mb-4"
        >
          // OUR PHILOSOPHY
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[0.95] mb-12"
        >
          WHY <span className="text-[#39D98A]">21GRAM?</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-8 text-base sm:text-xl lg:text-2xl text-zinc-300 font-light leading-relaxed max-w-3xl mx-auto font-body"
        >
          <p className="text-white font-medium">
            Because the best creative doesn't just fill a screen.<br />
            <span className="text-[#39D98A]">It leaves something behind.</span>
          </p>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            21 grams is the weight the human body was famously said to lose at the moment the soul leaves it.
            Whether the number is literal or legend, the idea stayed with us.
          </p>

          <div className="py-4">
            <div className="w-16 h-[1px] bg-[#39D98A]/40 mx-auto" />
          </div>

          <p className="text-zinc-200 text-lg sm:text-2xl font-heading font-extrabold uppercase tracking-wide">
            "SOMETHING INTANGIBLE CAN STILL HAVE WEIGHT."
          </p>

          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-light">
            That is what we want every frame, every campaign, every website, and every piece of content to have.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default PhilosophySection;
