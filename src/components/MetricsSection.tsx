import React from 'react';
import { motion } from 'framer-motion';
import { METRICS_DATA } from '../data/siteData';

export const MetricsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B0907] relative overflow-hidden border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#39D98A] tracking-widest uppercase block mb-2">
            // TRACK RECORD
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight uppercase">
            REAL NUMBERS. REAL WEIGHT.
          </h2>
        </div>

        {/* Numbers Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y sm:divide-y-0 divide-white/5">
          {METRICS_DATA.map((metric, idx) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="pt-6 sm:pt-0 flex flex-col justify-between items-center text-center p-4 group"
            >
              <div className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl text-white group-hover:text-[#39D98A] transition-colors duration-300 tracking-tight">
                {metric.value}
              </div>

              <div className="mt-4">
                <div className="text-xs font-mono font-bold text-[#39D98A] tracking-wider uppercase mb-1">
                  {metric.label}
                </div>
                {metric.description && (
                  <p className="text-[11px] font-body text-zinc-400 font-light max-w-[180px] mx-auto">
                    {metric.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MetricsSection;
