import React, { useRef, useEffect, useCallback } from 'react';
import { Play } from 'lucide-react';

interface ReelCard {
  id: string;
  title: string;
  client: string;
  tag: string;
  video: string;
}

const REEL_ITEMS: ReelCard[] = [
  {
    id: "r1",
    title: "AERIAL & STRUCTURAL",
    client: "iBel Infra",
    tag: "BRAND FILM",
    video: "/videos/reel1.mp4"
  },
  {
    id: "r2",
    title: "HIGH-TEMPO REELS",
    client: "Raack Academy",
    tag: "REEL PRODUCTION",
    video: "/videos/reel2.mp4"
  },
  {
    id: "r3",
    title: "DIGITAL ARCHITECTURE",
    client: "Set Square Structurals",
    tag: "WEB & SEO",
    video: "/videos/reel3.mp4"
  },
  {
    id: "r4",
    title: "COMMERCIAL CAMPAIGN",
    client: "Little Spartans",
    tag: "FILMS & ADS",
    video: "/videos/reel4.mp4"
  },
  {
    id: "r5",
    title: "CULINARY CINEMATOGRAPHY",
    client: "PR Bites",
    tag: "FOOD & BRAND",
    video: "/videos/reel5.mp4"
  },
  {
    id: "r6",
    title: "LIFESTYLE SHOOTS",
    client: "Urban Threads",
    tag: "FASHION",
    video: "/videos/reel6.mp4"
  }
];

// Triple the items for seamless infinite loop
const MARQUEE_ITEMS = [...REEL_ITEMS, ...REEL_ITEMS, ...REEL_ITEMS];

export const ReelsMarquee: React.FC = () => {
  const stripRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const lastCheckTimeRef = useRef<number>(0);

  const updateCardScales = useCallback(() => {
    const strip = stripRef.current;
    const container = containerRef.current;
    if (!strip || !container) return;

    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;
    const containerHalfWidth = containerRect.width / 2;

    const now = performance.now();
    const shouldCheckVisibility = now - lastCheckTimeRef.current > 250;
    if (shouldCheckVisibility) {
      lastCheckTimeRef.current = now;
    }

    const cards = strip.children;
    const winWidth = window.innerWidth;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i] as HTMLElement;
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;

      // Normalized distance from container center (0 = center, 1 = edge)
      const distFromCenter = Math.abs(cardCenter - containerCenter) / containerHalfWidth;
      const clampedDist = Math.min(distFromCenter, 1.25);

      // Concave effect: small at center (0.75), large at edges (1.0)
      const minScale = 0.65;
      const maxScale = 1.0;
      const easedT = clampedDist * clampedDist;
      const scale = minScale + (maxScale - minScale) * Math.min(easedT * 1.2, 1);
      const yOffset = (1 - scale) * 22;

      card.style.transform = `scale(${scale.toFixed(3)}) translateY(${yOffset.toFixed(1)}px)`;

      // Throttled play/pause check so video decode calls don't block rAF
      if (shouldCheckVisibility) {
        const videoEl = card.querySelector('video');
        if (videoEl) {
          const isVisible = cardRect.right > -50 && cardRect.left < winWidth + 50;
          if (isVisible && videoEl.paused) {
            videoEl.play().catch(() => { });
          } else if (!isVisible && !videoEl.paused) {
            videoEl.pause();
          }
        }
      }
    }

    rafRef.current = requestAnimationFrame(updateCardScales);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(updateCardScales);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateCardScales]);

  return (
    <div className="w-full overflow-hidden py-4" ref={containerRef}>
      {/* Fade edges */}
      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, #050403 0%, transparent 100%)',
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to left, #050403 0%, transparent 100%)',
          }}
        />

        {/* Marquee strip */}
        <div
          ref={stripRef}
          className="marquee-strip flex items-center gap-1 md:gap-1"
          style={{
            width: 'max-content',
          }}
        >
          {MARQUEE_ITEMS.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="marquee-reel-card shrink-0 w-[170px] md:w-[225px] lg:w-[280px] rounded-2xl overflow-hidden bg-[#0D0B09] border border-white/10 cursor-pointer group will-change-transform"
              style={{ aspectRatio: '9/16' }}
            >
              {/* Card image */}
              <div className="relative w-full h-full overflow-hidden">
                <video
                  src={item.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />

                {/* Top tag badge */}
                {/* <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-sm text-[9px] tracking-wider text-zinc-300 uppercase font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#39D98A] animate-pulse" />
                  {item.tag}
                </div> */}

                {/* Play icon on hover */}
                {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#39D98A] text-black flex items-center justify-center shadow-lg shadow-[#39D98A]/30 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                </div> */}

                {/* Bottom info */}
                {/* <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="text-[9px] font-mono text-[#39D98A] tracking-wider uppercase font-semibold">
                    {item.client}
                  </div>
                  <div className="text-[11px] font-heading font-semibold text-white tracking-wide mt-0.5 line-clamp-1">
                    {item.title}
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReelsMarquee;