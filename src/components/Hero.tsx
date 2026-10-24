import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import GradientBlinds from './GradientBlinds';
import ReelsMarquee from './ReelsMarquee';
import { HERO_DATA } from '../data/siteData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-[#050403]">

      {/* Background WebGL React Bits Component: GradientBlinds */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-60">
        <GradientBlinds
          dpr={1}
          gradientColors={['#39D98A', '#0D6B43', '#050403', '#1FBF73', '#67F2A9']}
          angle={15}
          noise={0.2}
          blindCount={14}
          blindMinWidth={40}
          spotlightRadius={0.6}
          spotlightSoftness={1}
          spotlightOpacity={1.2}
          mouseDampening={0.12}
          distortAmount={0.35}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>

      {/* Dark Vignette Overlay for Crisp Readability */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-b from-[#050403]/80 via-transparent to-[#050403]" />

      {/* Main Hero Header Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-8 md:pt-14 flex flex-col items-center">

        {/* Top Location & Category Metadata */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#39D98A] animate-ping" />
          <span className="hidden sm:block text-[11px] font-mono text-zinc-300 tracking-widest uppercase">
            {HERO_DATA.location}
          </span>
          <span className="hidden sm:block text-zinc-600">|</span>
          <span className="text-[11px] font-mono sm:text-[#39D98A] tracking-widest uppercase font-semibold">
            {HERO_DATA.tagline}
          </span>
        </motion.div>

        {/* Primary Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.95] max-w-5xl text-balance"
        >
          MARKETING & FILMS<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
            WITH <tr />
          </span>
          <span className="text-[#39D98A] relative inline-block">
            WEIGHT.
            <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#39D98A] to-transparent opacity-60" />
          </span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-sm sm:text-base md:text-lg text-zinc-200 max-w-2xl font-body font-light leading-relaxed text-balance"
        >
          {HERO_DATA.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#39D98A] text-black font-mono font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_30px_rgba(57,217,138,0.35)] hover:shadow-[0_0_45px_rgba(57,217,138,0.55)] hover:scale-[1.02]"
          >
            <span>{HERO_DATA.primaryCTA}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#work"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0D0B09] border border-white/10 hover:border-[#39D98A]/50 text-white font-mono font-medium text-xs tracking-wider uppercase transition-all duration-300 hover:bg-white/5"
          >
            {/* <Film className="w-3.5 h-3.5 text-[#39D98A]" /> */}
            <span>{HERO_DATA.secondaryCTA}</span>
          </a>
        </motion.div>

      </div>

      {/* Infinite Reels Marquee with Concave Effect */}
      <div className="relative z-20 mt-10 md:mt-16">
        <ReelsMarquee />
      </div>

    </section>
  );
};

export default Hero;
