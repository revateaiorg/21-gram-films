import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Video, Repeat, Sparkles, LineChart } from 'lucide-react';

export const BentoSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#050403] relative overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#39D98A] tracking-widest uppercase mb-3 block">
            // STRATEGIC EXECUTION
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[0.98]">
            WE DON'T JUST<br />
            MAKE IT LOOK GOOD.<br />
            <span className="text-[#39D98A]">WE MAKE IT WORK.</span>
          </h2>
          <p className="mt-5 text-sm sm:text-base text-zinc-400 font-light max-w-xl mx-auto">
            Creative gets attention. Strategy gives it somewhere to go.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Large Image-Led (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 rounded-2xl bg-[#0D0B09] border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#39D98A]/40 transition-all min-h-[320px]"
          >
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" 
                alt="Web architecture" 
                className="w-full h-full object-cover opacity-25 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B09] via-[#0D0B09]/80 to-transparent" />
            </div>

            <div className="relative z-10 flex justify-between items-center mb-12">
              <span className="text-xs font-mono text-[#39D98A] tracking-wider uppercase font-semibold">
                01 // HIGH CONVERSION
              </span>
              <Monitor className="w-5 h-5 text-zinc-400" />
            </div>

            <div className="relative z-10">
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-wide uppercase mb-2">
                A WEBSITE THAT CONVERTS
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-md">
                Sub-second load times, intuitive user flows, and clear strategic calls-to-action that capture demand.
              </p>
            </div>
          </motion.div>

          {/* Bento Card 2: Typography-Led (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-5 rounded-2xl bg-[#0D0B09] border border-white/10 p-8 flex flex-col justify-between hover:border-[#39D98A]/40 transition-all min-h-[320px] relative"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-xs font-mono text-[#39D98A] tracking-wider uppercase font-semibold">
                02 // ENGAGEMENT
              </span>
              <Video className="w-5 h-5 text-zinc-400" />
            </div>

            <div>
              <div className="text-4xl font-heading font-black text-[#39D98A] mb-2">
                85%+
              </div>
              <h3 className="font-heading font-extrabold text-xl text-white tracking-wide uppercase mb-2">
                CONTENT THAT GETS WATCHED
              </h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Reels, brand shorts, and video assets scripted to retain viewer hook rate within the first 2 seconds.
              </p>
            </div>
          </motion.div>

          {/* Bento Card 3: Metric-Led (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="md:col-span-4 rounded-2xl bg-[#0D0B09] border border-white/10 p-8 flex flex-col justify-between hover:border-[#39D98A]/40 transition-all min-h-[280px]"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-mono text-[#39D98A] tracking-wider uppercase font-semibold">
                03 // CONSISTENCY
              </span>
              <Repeat className="w-5 h-5 text-zinc-400" />
            </div>

            <div>
              <h3 className="font-heading font-extrabold text-xl text-white tracking-wide uppercase mb-2">
                SOCIAL THAT STAYS CONSISTENT
              </h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Predictable monthly release schedules ensuring your brand voice is never silent.
              </p>
            </div>
          </motion.div>

          {/* Bento Card 4: Film & Production (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 rounded-2xl bg-[#0D0B09] border border-white/10 p-8 flex flex-col justify-between hover:border-[#39D98A]/40 transition-all min-h-[280px]"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-mono text-[#39D98A] tracking-wider uppercase font-semibold">
                04 // MEMORY
              </span>
              <Sparkles className="w-5 h-5 text-zinc-400" />
            </div>

            <div>
              <h3 className="font-heading font-extrabold text-xl text-white tracking-wide uppercase mb-2">
                FILMS THAT BUILD MEMORY
              </h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Cinematic lighting and editorial pacing that elevate your product from a commodity to a landmark.
              </p>
            </div>
          </motion.div>

          {/* Bento Card 5: Compound Growth (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="md:col-span-4 rounded-2xl bg-[#0D0B09] border border-white/10 p-8 flex flex-col justify-between hover:border-[#39D98A]/40 transition-all min-h-[280px]"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-mono text-[#39D98A] tracking-wider uppercase font-semibold">
                05 // SEARCH
              </span>
              <LineChart className="w-5 h-5 text-zinc-400" />
            </div>

            <div>
              <h3 className="font-heading font-extrabold text-xl text-white tracking-wide uppercase mb-2">
                SEO THAT COMPOUNDS
              </h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Technical search optimization that keeps inbound organic traffic growing long after campaign launch.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default BentoSection;
