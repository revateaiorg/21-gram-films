import React from 'react';
import { CONTENT_SHOWCASE_DATA } from '../data/siteData';
import { Eye, Film, Globe, Camera, Play, ArrowUpRight, BadgeCheck } from 'lucide-react';

const typeIcon: Record<string, React.ElementType> = {
  reel: Play,
  film: Film,
  website: Globe,
  shoot: Camera,
};

// Doubled for a seamless marquee loop
const MARQUEE_ITEMS = [...CONTENT_SHOWCASE_DATA, ...CONTENT_SHOWCASE_DATA];

export const ContentShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B0907] relative overflow-hidden border-t border-white/5">
      <style>{`
        @keyframes showcase-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-showcase-marquee {
          animation: showcase-marquee 42s linear infinite;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-mono text-[#39D98A] tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39D98A] animate-pulse" />
              social &amp; media reel
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-none">
              Real work.<br />
              <span className="text-[#39D98A]">Real stories.</span>
            </h2>
          </div>
          <a
            href="#work"
            className="group inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-[#39D98A] transition-colors w-fit"
          >
            content engine × 21gram films
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

     
    </section>
  );
};

export default ContentShowcase;