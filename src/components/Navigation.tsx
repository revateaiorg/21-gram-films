import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/logo.png';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '#work' },
    { name: 'SERVICES', href: '#services' },
    { name: 'SYSTEM', href: '#system' },
    { name: 'PROCESS', href: '#process' },
    { name: 'PHILOSOPHY', href: '#philosophy' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* =========================================================
          DESKTOP / MAIN NAVIGATION
      ========================================================== */}
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div
          className={`
      w-full
      flex
      justify-center
      pointer-events-none
      transition-all duration-500 ease-out
      ${scrolled ? 'pt-4 px-4 sm:px-6 lg:px-8' : ''}
    `}
        >
          <div
            className={`
    relative
    w-full
    pointer-events-auto
    flex
    items-center
    justify-between

    transition-[max-width,padding,margin,background-color,box-shadow,border-radius,backdrop-filter]
    duration-500
    ease-out

    ${scrolled
                ? `
          max-w-7xl
          px-4 sm:px-8
          py-3 sm:py-3.5
          rounded-full
          bg-[#0B0907]/80
          backdrop-blur-2xl
          border border-white/10
          shadow-[0_8px_40px_rgba(0,0,0,0.6)]
        `
                : `
          max-w-7xl
          px-4 sm:px-8
          py-4 sm:py-6
          rounded-none
          bg-transparent
          border border-transparent
          shadow-none
        `
              }
  `}
          >

            {/* Ambient glow — only visible when floating */}
            {/* <div
            className={`
              absolute inset-0 overflow-hidden rounded-[28px]
              pointer-events-none
              transition-opacity duration-700
              ${scrolled ? 'opacity-100' : 'opacity-0'}
            `}
          >
            <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#39D98A]/20 blur-[100px]" />
          </div> */}

            {/* =====================================================
              LOGO
          ====================================================== */}
            <a
              href="#"
              className="relative z-10 flex items-center gap-2 group text-left"
            >
              <div className="w-8 h-8 md:w-10 md:h-9 rounded-md flex items-center justify-center">
                <img
                  src={logoImg}
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

            {/* =====================================================
              DESKTOP NAV LINKS
          ====================================================== */}
            <nav
              className={`
              relative z-10
              hidden md:flex items-center gap-8
              px-6 py-2.5
              rounded-full
              transition-all duration-500
              ${scrolled
                  ? 'bg-transparent border border-transparent'
                  : 'bg-white/[0.03] backdrop-blur-sm border border-white/5'
                }
            `}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                  text-[13px]
                  font-mono
                  font-medium
                  tracking-widest
                  text-zinc-300
                  hover:text-[#39D98A]
                  transition-colors
                  relative
                  py-2 px-1
                  group
                "
                >
                  {link.name}

                  <span
                    className="
                    absolute
                    bottom-0
                    left-0
                    w-0
                    h-[1.5px]
                    bg-[#39D98A]
                    group-hover:w-full
                    transition-all
                    duration-300
                  "
                  />
                </a>
              ))}
            </nav>

            {/* =====================================================
              RIGHT CTA
          ====================================================== */}
            <div className="relative z-10 hidden md:flex items-center">
              <a
                href="#contact"
                className="
                group
                relative
                inline-flex
                items-center
                gap-2
                px-8
                py-4
                rounded-full
                bg-black/60
                border
                border-[#39D98A]/40
                text-white
                hover:bg-[#39D98A]
                hover:text-black
                transition-all
                duration-300
                shadow-[0_0_15px_rgba(57,217,138,0.15)]
                hover:shadow-[0_0_25px_rgba(57,217,138,0.4)]
              "
              >
                <span className="text-[13px] font-mono font-bold tracking-wider">
                  LET'S TALK
                </span>

                <ArrowUpRight
                  className="
                  w-3.5
                  h-3.5
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                  transition-transform
                "
                />
              </a>
            </div>

            {/* =====================================================
              MOBILE MENU BUTTON
          ====================================================== */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="
              relative
              z-10
              md:hidden
              p-2.5
              rounded-xl              
              text-white
              hover:text-[#39D98A]
              transition-colors
            "
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#39D98A]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================
          FULLSCREEN MOBILE NAVIGATION
      ========================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              fixed
              inset-0
              z-40
              bg-[#050403]/98
              backdrop-blur-2xl
              flex
              flex-col
              justify-between
              p-8
              pt-28
              md:hidden
            "
          >
            <div
              className="
                absolute
                top-1/3
                left-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-72
                h-72
                rounded-full
                bg-[#39D98A]/10
                blur-[90px]
                pointer-events-none
              "
            />

            <div className="flex flex-col gap-6 relative z-10">
              <span className="text-xs font-mono text-[#39D98A] tracking-widest uppercase">
                // NAVIGATION
              </span>

              <nav className="flex flex-col gap-4">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    className="
                      text-2xl
                      font-heading
                      font-bold
                      text-white
                      hover:text-[#39D98A]
                      tracking-wider
                      transition-colors
                    "
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
            </div>

            <div
              className="
                relative
                z-10
                pt-6
                border-t
                border-white/10
                flex
                flex-col
                gap-4
              "
            >
              <div className="text-xs font-mono text-zinc-400">
                CHENNAI, INDIA — DIGITAL × FILMS
              </div>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="
                  w-full
                  text-center
                  py-3.5
                  rounded-full
                  bg-[#39D98A]
                  text-black
                  font-mono
                  font-bold
                  text-xs
                  tracking-wider
                  uppercase
                  shadow-[0_0_20px_rgba(57,217,138,0.3)]
                "
              >
                START A PROJECT →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;