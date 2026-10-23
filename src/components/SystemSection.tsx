import React from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, Rocket } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export const SystemSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "DISCOVER",
      icon: Search,
      description: "We understand the business, audience, objective and story before we create anything.",
      highlights: ["Competitor Analysis", "Brand Positioning", "Audience Mapping", "Core Narrative"]
    },
    {
      number: "02",
      title: "CREATE",
      icon: Sparkles,
      description: "Strategy, design, production, development and editing come together under one roof.",
      highlights: ["Cinematography", "UX/UI & Code", "Motion Graphics", "Sound & Color"]
    },
    {
      number: "03",
      title: "AMPLIFY",
      icon: Rocket,
      description: "We launch the work, measure what happens and keep improving what performs.",
      highlights: ["Multi-Channel Push", "Technical SEO", "Conversion Optimization", "Monthly Analytics"]
    }
  ];

  return (
    <section id="system" className="py-24 bg-[#050403] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#39D98A] tracking-widest uppercase mb-3 block">
            // THE 21GRAM SYSTEM
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[0.98]">
            FROM FIRST IDEA<br />
            TO <span className="text-[#39D98A]">FINAL FRAME.</span>
          </h2>
          <p className="mt-4 text-sm text-zinc-400 font-light">
            A frictionless creative pipeline designed to eliminate agency bloat and maximize visual weight.
          </p>
        </div>

        {/* 3 Pipeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * idx }}
              >
                <SpotlightCard
                  spotlightColor="rgba(57, 217, 138, 0.25)"
                  className="group p-8 rounded-2xl bg-[#0D0B09] border border-white/10 hover:border-[#39D98A]/40 transition-all duration-300 relative overflow-hidden h-full"
                >
                  {/* Subtle top glow bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#39D98A]/0 to-transparent group-hover:via-[#39D98A] transition-all duration-500" />

                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl font-heading font-black text-[#39D98A]">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-[#39D98A] group-hover:border-[#39D98A]/30 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-heading font-extrabold text-2xl text-white mb-3 tracking-wide group-hover:text-[#39D98A] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-8">
                    {step.description}
                  </p>

                  {/* Micro Highlights */}
                  <div className="pt-6 border-t border-white/5 flex flex-col gap-2">
                    {step.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-[11px] font-mono text-zinc-400">
                        <div className="w-1 h-1 rounded-full bg-[#39D98A]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SystemSection;