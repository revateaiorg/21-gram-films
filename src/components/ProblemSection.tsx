import React from 'react';
import { motion } from 'framer-motion';
import { Film, Monitor, TrendingUp } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const cards = [
    {
      index: "01",
      tag: "CONTENT",
      title: "Stories worth watching.",
      subtitle: "Films, reels, brand content and visual assets designed around your brand rather than produced just to fill a feed.",
      icon: Film,
      metric: "94%",
      metricLabel: "Higher audience engagement"
    },
    {
      index: "02",
      tag: "DIGITAL",
      title: "Experiences worth using.",
      subtitle: "Websites and digital experiences designed to look exceptional and turn attention into action.",
      icon: Monitor,
      metric: "3.2x",
      metricLabel: "Average conversion rate"
    },
    {
      index: "03",
      tag: "GROWTH",
      title: "Work worth measuring.",
      subtitle: "Social, SEO, campaigns and digital systems that connect creative work to measurable outcomes.",
      icon: TrendingUp,
      metric: "12M+",
      metricLabel: "Organic impressions delivered"
    }
  ];

  return (
    <section className="py-24 bg-[#050403] relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#39D98A]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Faint structural grid, gives the section a "system" feel without adding noise */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#39D98A] tracking-widest mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#39D98A] animate-pulse" />
            the problem we solve
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[0.98]"
          >
            Good content<br />
            <span className="text-[#39D98A]">deserves</span> a bigger stage.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-sm sm:text-base text-zinc-400 font-light"
          >
            Beautiful work means very little if nobody sees it, remembers it or acts on it.
          </motion.p>
        </div>

        {/* Single orchestrated reveal for the row, rather than each card animating independently */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10"
        >
          {cards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.index}
                className="group relative bg-[#0A0908] p-8 sm:p-9 flex flex-col justify-between overflow-hidden transition-colors duration-500 hover:bg-[#0D0B09]"
              >
                {/* Ghost numeral watermark — sits behind the content, brightens slightly on hover */}
                <span className="pointer-events-none absolute -top-6 -right-2 font-heading font-black text-[7rem] leading-none text-white/[0.03] group-hover:text-[#39D98A]/[0.06] transition-colors duration-500 select-none">
                  {card.index}
                </span>

                {/* Corner brackets — HUD framing, only the two "active" corners */}
                <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#39D98A]/0 group-hover:border-[#39D98A]/60 transition-all duration-500" />
                <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#39D98A]/0 group-hover:border-[#39D98A]/60 transition-all duration-500" />

                {/* Scanline accent — a thin gradient line that sweeps in from the left on hover */}
                <span className="absolute top-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-[#39D98A] via-[#39D98A]/40 to-transparent transition-all duration-700 ease-out" />

                <div className="relative">
                  <div className="flex items-center gap-2.5 mb-8">
                    <div className="w-8 h-8 rounded-lg bg-[#39D98A]/10 border border-[#39D98A]/20 flex items-center justify-center text-[#39D98A] group-hover:bg-[#39D98A]/15 group-hover:shadow-[0_0_16px_rgba(57,217,138,0.25)] transition-all duration-500">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500 tracking-[0.2em]">
                      {card.index} / {card.tag}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white mb-3 tracking-wide">
                    {card.title}
                  </h3>

                  <p className="text-sm text-zinc-400 font-light leading-relaxed">
                    {card.subtitle}
                  </p>
                </div>

                {/* Metric footer — large gradient number, in the spirit of the reference */}
                <div className="relative mt-10 pt-6 border-t border-white/[0.06]">
                  <div
                    className="font-heading font-extrabold text-4xl sm:text-5xl leading-none bg-clip-text text-transparent"
                    style={{
                      backgroundImage: 'linear-gradient(180deg, #6BEAAE 0%, #39D98A 55%, rgba(57,217,138,0.35) 100%)',
                    }}
                  >
                    {card.metric}
                  </div>
                  <span className="mt-2 block text-[10px] font-mono text-zinc-500 tracking-wider">
                    {card.metricLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default ProblemSection;