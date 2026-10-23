import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 bg-[#050403] relative border-t border-white/5 text-zinc-400">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-12 border-b border-white/5 gap-8">

          {/* Left: Brand */}
          <div className="flex items-center gap-3">
            {/* <div className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center">
              <span className="text-xs font-mono font-bold text-[#39D98A]">21</span>
            </div> */}
            {/* <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base text-white tracking-widest leading-none">
                21GRAM FILMS
              </span>
              <span className="text-[9px] font-mono text-zinc-500 tracking-widest mt-1">
                CHENNAI, INDIA
              </span>
            </div> */}
            <a
              href="#"
              className="relative z-10 flex items-center gap-2 group text-left"
            >
              <div className="w-8 h-8 md:w-10 md:h-9 rounded-md flex items-center justify-center">
                <img
                  src="/src/assets/logo.png"
                  alt="21 Gram Films & Digital"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-sm sm:text-xl tracking-widest text-white leading-none">
                  21GRAM
                </span>

                <span className="text-[10px] font-mono text-zinc-400 tracking-widest leading-none mt-0.5">
                  FILMS & DIGITAL
                </span>
              </div>
            </a>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap gap-6 text-[11px] font-mono tracking-widest uppercase">
            <a href="#services" className="hover:text-[#39D98A] transition-colors">WEB</a>
            <a href="#services" className="hover:text-[#39D98A] transition-colors">SOCIAL</a>
            <a href="#services" className="hover:text-[#39D98A] transition-colors">FILMS</a>
            <a href="#services" className="hover:text-[#39D98A] transition-colors">CONTENT</a>
            <a href="#services" className="hover:text-[#39D98A] transition-colors">SEO</a>
          </div>

          {/* Right Social & Back to Top */}
          <div className="flex items-center gap-6 text-[11px] font-mono tracking-wider">
            <a href="https://instagram.com/21gram.films" target="_blank" rel="noopener noreferrer" className="hover:text-[#39D98A] transition-colors uppercase">
              INSTAGRAM
            </a>
            <a href="mailto:21gramfilms@gmail.com" className="hover:text-[#39D98A] transition-colors uppercase">
              EMAIL
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-[#39D98A] hover:text-black transition-all text-zinc-400"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-zinc-600 gap-4">
          <div>
            © 2026 21GRAM FILMS. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6">
            <a href="https://www.21gramfilms.com/" className="hover:text-zinc-400 transition-colors">21gramfilms.com</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>

      <div className="w-full overflow-hidden relative" style={{ height: 'clamp(100px, 18vw, 280px)' }}>
        <div className="absolute bottom-0 left-0 w-full flex items-end justify-center">
          <span
            className="font-black uppercase leading-none select-none whitespace-nowrap"
            style={{
              fontSize: 'clamp(80px, 20vw, 350px)',
              letterSpacing: '-0.02em',
              color: 'white',
              WebkitTextStroke: '2px rgba(255,255,255,0.15)',
              textShadow: '0 0 40px rgba(255,255,255,0.03)',
              transform: 'translateY(25%)',
              maskImage: 'linear-gradient(to bottom, white 0%, transparent 85%)',
              WebkitMaskImage: 'linear-gradient(to bottom, white 0%, transparent 85%)',
            }}
          >
            21 Gram
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
