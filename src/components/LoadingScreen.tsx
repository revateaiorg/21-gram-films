import React, { useState, useEffect, useRef, useCallback } from 'react';

const VIDEO_URLS = [
  '/videos/reel1.mp4',
  '/videos/reel2.mp4',
  '/videos/reel3.mp4',
  '/videos/reel4.mp4',
  '/videos/reel5.mp4',
  '/videos/reel6.mp4',
];

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadComplete }) => {
  const [displayProgress, setDisplayProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const progressTargetRef = useRef(0);
  const animFrameRef = useRef<number>(0);
  const hasCompletedRef = useRef(false);

  const handleComplete = useCallback(() => {
    if (hasCompletedRef.current) return;
    hasCompletedRef.current = true;
    progressTargetRef.current = 100;

    // Small delay so user sees 100%, then start exit animation
    setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        onLoadComplete();
      }, 700);
    }, 400);
  }, [onLoadComplete]);

  // Smoothly animate the displayed number towards progressTargetRef
  useEffect(() => {
    const animate = () => {
      setDisplayProgress((prev) => {
        const target = progressTargetRef.current;
        if (prev >= target) {
          if (target >= 100 && !hasCompletedRef.current) {
            handleComplete();
          }
          return target;
        }
        const diff = target - prev;
        // Smooth logarithmic step
        const step = Math.max(0.4, diff * 0.08);
        const next = Math.min(prev + step, target);
        if (next >= 100 && !hasCompletedRef.current) {
          handleComplete();
        }
        return next;
      });
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [handleComplete]);

  useEffect(() => {
    const totalVideos = VIDEO_URLS.length;
    const progressMap: Record<number, number> = {};
    VIDEO_URLS.forEach((_, i) => {
      progressMap[i] = 0;
    });

    // Start with a small visual nudge (e.g. 5%) so it doesn't look stuck at 0
    progressTargetRef.current = 8;

    const updateTotalProgress = () => {
      const sum = Object.values(progressMap).reduce((acc, v) => acc + v, 0);
      const computedPct = Math.round((sum / totalVideos) * 100);
      progressTargetRef.current = Math.max(progressTargetRef.current, Math.min(computedPct, 100));
    };

    const promises = VIDEO_URLS.map((url, index) => {
      return new Promise<void>((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';

        xhr.onprogress = (event) => {
          if (event.lengthComputable && event.total > 0) {
            progressMap[index] = event.loaded / event.total;
            updateTotalProgress();
          }
        };

        xhr.onload = () => {
          progressMap[index] = 1;
          updateTotalProgress();
          resolve();
        };

        xhr.onerror = () => {
          progressMap[index] = 1;
          updateTotalProgress();
          resolve();
        };

        xhr.onabort = () => {
          progressMap[index] = 1;
          updateTotalProgress();
          resolve();
        };

        xhr.send();
      });
    });

    Promise.all(promises).then(() => {
      progressTargetRef.current = 100;
    });

    // Fallback timer: if network is slow or hanging, finish gracefully
    const safetyTimer = setTimeout(() => {
      progressTargetRef.current = 100;
    }, 12000);

    return () => clearTimeout(safetyTimer);
  }, []);

  const displayNum = Math.round(displayProgress);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050403] transition-all duration-700 ease-in-out ${
        isExiting ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
      style={{ pointerEvents: isExiting ? 'none' : 'auto' }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 60%, rgba(57, 217, 138, 0.04) 0%, transparent 60%)',
        }}
      />

      {/* Logo / Brand */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Brand name */}
        <div className="flex flex-col items-center gap-1">
          <span
            className="text-white font-heading font-black text-3xl md:text-4xl tracking-tight"
            style={{ letterSpacing: '-0.03em' }}
          >
            21 GRAM
          </span>
          <span className="text-zinc-500 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase">
            Films & Media
          </span>
        </div>

        {/* Percentage counter */}
        <div className="relative flex items-baseline gap-1">
          <span
            className="font-heading font-black tabular-nums text-transparent bg-clip-text"
            style={{
              fontSize: 'clamp(56px, 12vw, 120px)',
              letterSpacing: '-0.04em',
              lineHeight: 1,
              backgroundImage:
                'linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.5) 100%)',
            }}
          >
            {displayNum}
          </span>
          <span
            className="font-heading font-bold text-transparent bg-clip-text"
            style={{
              fontSize: 'clamp(20px, 4vw, 40px)',
              backgroundImage:
                'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 100%)',
            }}
          >
            %
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-48 md:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300 ease-out"
            style={{
              width: `${displayNum}%`,
              background:
                'linear-gradient(90deg, #39D98A 0%, #67F2A9 100%)',
              boxShadow: '0 0 12px rgba(57, 217, 138, 0.5)',
            }}
          />
        </div>

        {/* Loading text */}
        <span className="text-zinc-600 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase animate-pulse">
          Loading reels
        </span>
      </div>

      {/* Corner decoration - top left */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10">
        <div className="w-6 h-6 border-l border-t border-white/10" />
      </div>

      {/* Corner decoration - bottom right */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10">
        <div className="w-6 h-6 border-r border-b border-white/10" />
      </div>
    </div>
  );
};

export default LoadingScreen;
