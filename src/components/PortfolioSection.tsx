import React, { useEffect, useRef, useState } from 'react';
import { CONTENT_SHOWCASE_DATA } from '../data/siteData';
import { Eye, Film, Globe, Camera, Play } from 'lucide-react';
import type { MediaItem } from '../types';

const typeIcon: Record<string, React.ElementType> = {
  reel: Play,
  film: Film,
  website: Globe,
  shoot: Camera,
};

// Doubled for a seamless CSS marquee loop
const MARQUEE_ITEMS = [...CONTENT_SHOWCASE_DATA, ...CONTENT_SHOWCASE_DATA];

/**
 * Converts any Google Drive sharing/download URL into the best-effort
 * direct video streaming URL.
 *
 * Google Drive flow for public files:
 *   /file/d/FILE_ID/view  →  uc?export=download&id=FILE_ID&confirm=t
 *   uc?export=download&id=FILE_ID  →  (add confirm=t to skip virus-scan gate)
 */
function toDriveVideoUrl(url: string): string {
  // Already processed
  if (url.includes('confirm=t')) return url;

  let fileId: string | null = null;

  // Format: /file/d/FILE_ID/
  const fileMatch = url.match(/\/file\/d\/([^/?&]+)/);
  if (fileMatch) fileId = fileMatch[1];

  // Format: ?id=FILE_ID or &id=FILE_ID
  if (!fileId) {
    const idMatch = url.match(/[?&]id=([^&]+)/);
    if (idMatch) fileId = idMatch[1];
  }

  if (fileId) {
    return `https://drive.google.com/uc?export=download&id=${fileId}&confirm=t`;
  }

  return url;
}

const ReelCard: React.FC<{ item: MediaItem; cardKey: string }> = ({ item }) => {
  const Icon = typeIcon[item.type] || Play;
  const videoSrc = item.videoUrl ? toDriveVideoUrl(item.videoUrl) : null;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // React doesn't always set the muted attribute, which blocks autoplay
    v.muted = true;
    v.defaultMuted = true;
    v.play().catch(() => {
      /* autoplay blocked or file unplayable: thumbnail stays visible */
    });
  }, [videoSrc]);

  return (
    <div className="group relative shrink-0 w-[220px] sm:w-[260px] lg:w-[300px] aspect-[9/16] rounded-2xl bg-black border border-white/10 hover:border-[#39D98A]/50 transition-all duration-300 overflow-hidden">
      {/* Layer 0: thumbnail (fallback / shown while the video buffers) */}
      <img
        src={item.thumbnail}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Layer 1: video sits ON TOP of the thumbnail */}
      {videoSrc && !videoFailed && (
        <video
          ref={videoRef}
          src={videoSrc}
          poster={item.thumbnail}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          className="absolute inset-0 w-full h-full object-cover z-[1]"
          onError={() => setVideoFailed(true)}
        />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/40 pointer-events-none z-10" />

      {/* Corner brackets */}
      <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#39D98A]/0 group-hover:border-[#39D98A]/60 transition-all duration-500 z-20" />
      <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#39D98A]/0 group-hover:border-[#39D98A]/60 transition-all duration-500 z-20" />

      {/* Top row: type icon + views */}
      <div className="absolute top-3.5 left-3.5 right-3.5 flex justify-between items-center z-20">
        {/* <span className="w-8 h-8 rounded-full bg-black/60 border border-white/10 backdrop-blur-md flex items-center justify-center text-[#39D98A]">
          <Icon className="w-3.5 h-3.5" />
        </span> */}
        {/* {item.views && (
          <span className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-200 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
            <Eye className="w-3 h-3" />
            {item.views}
          </span>
        )} */}
      </div>

      {/* Bottom: title + client credit */}
      <a
        href={item.embedUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-0 left-0 right-0 p-4 z-20 block"
      >
        <h3 className="font-heading font-bold text-base sm:text-lg text-white leading-tight mb-1 group-hover:text-[#39D98A] transition-colors">
          {item.title}
        </h3>
        <p className="text-[11px] text-zinc-400 font-light mb-3">
          {item.category.charAt(0) + item.category.slice(1).toLowerCase()} · {item.year}
        </p>
        <div className="flex items-center gap-2 pt-3 border-t border-white/10">
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(item.client ?? '21G')}&size=32&background=1a1a1a&color=39D98A&bold=true&font-size=0.45&rounded=true`}
            alt={item.client ?? '21gram'}
            className="w-6 h-6 rounded-full border border-white/20 object-cover shrink-0"
          />
          <span className="text-[10px] font-mono text-zinc-300 truncate">
            {item.client ?? '21gram studio'}
          </span>
        </div>
      </a>
    </div>
  );
};

export const PortfolioSection: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-[#0B0907] relative overflow-hidden border-t border-white/5">
      <style>{`
        @keyframes portfolio-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-portfolio-marquee {
          animation: portfolio-marquee 42s linear infinite;
        }
      `}</style>

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-mono text-[#39D98A] tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39D98A] animate-pulse" />
              featured portfolio
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[0.98]">
              Work<br />
              <span className="text-[#39D98A]">with</span> weight.
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-light leading-relaxed">
            A selection of brands we've helped shape across digital, content and high-impact film production.
          </p>
        </div>
      </div>

      {/* Single marquee strip */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none bg-gradient-to-r from-[#0B0907] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none bg-gradient-to-l from-[#0B0907] to-transparent" />

        <div className="overflow-hidden group/marquee">
          <div className="flex gap-5 w-max animate-portfolio-marquee group-hover/marquee:[animation-play-state:paused] px-6">
            {MARQUEE_ITEMS.map((item, idx) => (
              <ReelCard
                key={`${item.id}-${idx}`}
                cardKey={`${item.id}-${idx}`}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;