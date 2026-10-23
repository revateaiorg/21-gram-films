import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '../data/siteData';

// Custom Graphics for each Bento Card

const WebDesignGraphic = () => (
  <div className="relative w-full h-48 md:h-56 overflow-hidden bg-[#0a0a0a] rounded-t-2xl flex items-center justify-center p-6 border-b border-white/5">
    {/* Glowing background orb */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-32 h-32 bg-[#39D98A]/20 blur-[50px] rounded-full" />
    </div>
    
    {/* Abstract wireframe/browser mock */}
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-[340px] aspect-[16/9] border border-white/10 rounded-xl bg-white/[0.02] backdrop-blur-sm shadow-2xl overflow-hidden flex flex-col"
    >
      <div className="h-6 border-b border-white/10 flex items-center px-3 gap-1.5 bg-white/[0.03]">
        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
      </div>
      <div className="p-4 flex-1 flex flex-col gap-3">
        <div className="w-1/3 h-4 rounded bg-white/10" />
        <motion.div 
          animate={{ width: ["100%", "85%", "100%"] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-12 rounded bg-[#39D98A]/10 border border-[#39D98A]/20 relative overflow-hidden"
        >
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent w-[200%] animate-[shimmer_2s_infinite_-1s]" />
        </motion.div>
        <div className="flex gap-2">
          <div className="w-1/2 h-10 rounded bg-white/5" />
          <div className="w-1/2 h-10 rounded bg-white/5" />
        </div>
      </div>
    </motion.div>
  </div>
);

const BackendGraphic = () => (
  <div className="relative w-full h-48 md:h-56 overflow-hidden bg-[#0a0a0a] rounded-t-2xl flex items-center justify-center p-6 border-b border-white/5 perspective-1000">
    <div className="absolute top-4 right-4 flex items-center gap-2">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39D98A] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39D98A]"></span>
      </span>
      <span className="text-[10px] font-mono text-[#39D98A]">99.9%</span>
    </div>
    
    <div className="flex flex-col gap-3 w-3/4 max-w-[160px]">
      {[1, 2, 3].map((i) => (
        <motion.div 
          key={i}
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="h-8 border border-white/10 rounded bg-gradient-to-r from-white/[0.05] to-transparent relative shadow-[0_0_15px_rgba(0,0,0,0.5)]"
          style={{ transform: "rotateX(20deg) rotateY(-10deg)" }}
        >
          <div className="absolute left-3 top-1/2 -translate-y-1/2 flex gap-1.5">
            <div className={`w-1 h-1 rounded-full ${i === 2 ? 'bg-amber-400' : 'bg-[#39D98A]'}`} />
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <div className="w-1 h-1 rounded-full bg-white/20" />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

// const SocialMediaGraphic = () => (
//   <div className="relative w-full h-48 md:h-56 overflow-hidden bg-[#0a0a0a] rounded-t-2xl flex items-center justify-center p-6 border-b border-white/5">
//     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#39D98A]/10 via-transparent to-transparent opacity-50" />
    
//     <div className="relative grid grid-cols-2 gap-3 w-3/4 max-w-[180px]">
//        <motion.div 
//          animate={{ y: [0, -5, 0] }} 
//          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//          className="aspect-square rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-3 flex flex-col justify-between backdrop-blur-md"
//        >
//          <div className="w-5 h-5 rounded-full bg-[#39D98A]/20 flex items-center justify-center">
//             <div className="w-2 h-2 bg-[#39D98A] rounded-sm" />
//          </div>
//          <div>
//             <div className="text-[10px] text-zinc-500 font-mono">REACH</div>
//             <div className="text-white font-bold text-sm">2.4M</div>
//          </div>
//        </motion.div>
       
//        <motion.div 
//          animate={{ y: [0, 5, 0] }} 
//          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//          className="aspect-square rounded-xl bg-gradient-to-br from-[#39D98A]/20 to-[#39D98A]/5 border border-[#39D98A]/30 p-3 flex flex-col justify-between backdrop-blur-md mt-4"
//        >
//          <div className="w-full flex gap-1 items-end h-6">
//             <div className="w-1/4 h-[40%] bg-[#39D98A]/50 rounded-sm" />
//             <div className="w-1/4 h-[70%] bg-[#39D98A]/70 rounded-sm" />
//             <div className="w-1/4 h-[100%] bg-[#39D98A] rounded-sm" />
//          </div>
//          <div className="text-[10px] font-mono text-[#39D98A] mt-2 block">
//             VIRAL
//          </div>
//        </motion.div>
//     </div>
//   </div>
// );

const SocialMediaGraphic = () => {
  // Nodes arranged around a center hub at (150, 112)
  const satellites = [
    { x: 215, y: 112, r: 6, active: true },
    { x: 182.5, y: 55.7, r: 4, active: false },
    { x: 117.5, y: 55.7, r: 5, active: true },
    { x: 85, y: 112, r: 4, active: false },
    { x: 117.5, y: 168.3, r: 6, active: true },
    { x: 182.5, y: 168.3, r: 4, active: false },
  ];

  const chips = [
    { label: "LIKE", left: "18%", delay: 0 },
    { label: "SHARE", left: "48%", delay: 1.3 },
    { label: "REPOST", left: "74%", delay: 2.6 },
  ];

  return (
    <div className="relative w-full h-48 md:h-56 overflow-hidden bg-[#0a0a0a] rounded-t-2xl border-b border-white/5">
      {/* ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-40 h-40 bg-[#39D98A]/10 blur-[60px] rounded-full" />
      </div>

      {/* network graph */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 224" fill="none">
        {/* radar pulses from the hub */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={`ring-${i}`}
            cx="150"
            cy="112"
            r="10"
            stroke="#39D98A"
            strokeWidth="1"
            fill="none"
            initial={{ opacity: 0 }}
            whileInView={{ r: [10, 95], opacity: [0.6, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: "easeOut" }}
          />
        ))}

        {/* connecting lines */}
        {satellites.map((s, i) => (
          <motion.line
            key={`line-${i}`}
            x1="150"
            y1="112"
            x2={s.x}
            y2={s.y}
            stroke="#39D98A"
            strokeOpacity={s.active ? 0.4 : 0.15}
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: "easeOut" }}
          />
        ))}

        {/* satellite nodes */}
        {satellites.map((s, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={s.x}
            cy={s.y}
            r={s.r}
            fill={s.active ? "#39D98A" : "#39D98A66"}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 + i * 0.1, duration: 0.4, ease: "backOut" }}
            style={s.active ? { filter: "drop-shadow(0 0 6px #39D98A)" } : undefined}
          />
        ))}

        {/* center hub */}
        <motion.circle
          cx="150"
          cy="112"
          r="7"
          fill="#39D98A"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: "drop-shadow(0 0 10px #39D98A)" }}
        />
      </svg>

      {/* floating engagement chips */}
      {chips.map((c, i) => (
        <motion.div
          key={i}
          className="absolute bottom-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-sm text-[10px] font-mono text-[#39D98A] tracking-wide"
          style={{ left: c.left }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -130, opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: c.delay, ease: "easeOut" }}
        >
          <span className="w-1 h-1 rounded-full bg-[#39D98A]" />
          {c.label}
        </motion.div>
      ))}

      {/* stat readout */}
      <div className="absolute top-5 left-6 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
        Reach
      </div>
      <div className="absolute top-5 right-6 text-[10px] font-mono text-[#39D98A]">2.4M</div>
    </div>
  );
};

const FilmsGraphic = () => (
  <div className="relative w-full h-48 md:h-56 overflow-hidden bg-[#0a0a0a] rounded-t-2xl flex items-center justify-center p-6 border-b border-white/5">
     <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity grayscale" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop')" }} />
     <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
     
     <motion.div 
       whileHover={{ scale: 1.1 }}
       className="relative w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center cursor-pointer group z-10"
     >
        <div className="absolute inset-0 rounded-full bg-[#39D98A]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
     </motion.div>
  </div>
);

const SeoGraphic = () => (
  <div className="relative w-full h-48 md:h-56 overflow-hidden bg-[#0a0a0a] rounded-t-2xl p-6 border-b border-white/5">

    {/* Subtle bottom-fade grid, no harsh lines */}
    <div
      className="absolute inset-0 opacity-40"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        maskImage: 'linear-gradient(to top, black, transparent)',
        WebkitMaskImage: 'linear-gradient(to top, black, transparent)',
      }}
    />

    {/* Labels */}
    <div className="absolute top-5 left-6 text-[10px] font-mono text-zinc-500 tracking-wider uppercase">
      Organic Traffic
    </div>
    <div className="absolute top-5 right-6 text-[10px] font-mono text-[#39D98A] tracking-wider">
      +248%
    </div>

    {/* Chart */}
    <div className="relative w-full h-full flex items-center">
      <svg className="w-full h-28" viewBox="0 0 300 100" preserveAspectRatio="none" fill="none">
        <defs>
          <linearGradient id="seoLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#39D98A" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#39D98A" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="seoFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#39D98A" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#39D98A" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Gradient fill under the curve */}
        <motion.path
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          d="M0,85 C60,80 90,55 150,50 C210,45 240,20 300,12 L300,100 L0,100 Z"
          fill="url(#seoFill)"
        />

        {/* Smooth single-direction growth line */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          d="M0,85 C60,80 90,55 150,50 C210,45 240,20 300,12"
          stroke="url(#seoLine)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Start point */}
        <motion.circle
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          cx="0" cy="85" r="3.5"
          fill="#3f3f3f"
        />

        {/* End point, glowing */}
        <motion.circle
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.4, ease: "backOut" }}
          cx="300" cy="12" r="5"
          fill="#39D98A"
          style={{ filter: "drop-shadow(0 0 8px #39D98A)" }}
        />
      </svg>
    </div>

    {/* Bottom axis labels */}
    <div className="absolute bottom-5 left-6 text-[10px] font-mono text-zinc-600">DAY 1</div>
    <div className="absolute bottom-5 right-6 text-[10px] font-mono text-zinc-600">DAY 90</div>
  </div>
);


const graphicComponents = [
  WebDesignGraphic,
  BackendGraphic,
  SocialMediaGraphic,
  FilmsGraphic,
  SeoGraphic
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#050403] to-[#0B0907] relative overflow-hidden border-t border-white/5">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#39D98A]/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono text-[#39D98A] tracking-widest uppercase mb-3 block">
              // WHAT WE DO
            </span>
            <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[0.98]">
              ONE CREATIVE TEAM.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39D98A] to-emerald-600">MORE THAN ONE</span> CAPABILITY.
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-sm font-light leading-relaxed">
            From the first idea to the final frame — strategy, digital, content and production working seamlessly together.
          </p>
        </div>

        {/* Bento Grid Layout - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES_DATA.map((service, idx) => {
            const isWide = idx === 0; // First item is wide
            const Graphic = graphicComponents[idx];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`group flex flex-col rounded-2xl bg-[#0D0B09]/80 backdrop-blur-xl border border-white/10 overflow-hidden hover:border-[#39D98A]/40 transition-all duration-500 shadow-xl ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Visual Graphic Section */}
                {Graphic && <Graphic />}
                
                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col flex-1 justify-between bg-gradient-to-b from-transparent to-black/40">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-xs font-mono font-bold text-black px-2 py-0.5 rounded-sm bg-[#39D98A]">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="font-heading font-extrabold text-xl lg:text-2xl text-white mb-3 tracking-wide group-hover:text-[#39D98A] transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-sm lg:text-[15px] text-zinc-400 font-light leading-relaxed mb-8 max-w-lg">
                      {service.description}
                    </p>
                  </div>

                  {/* Service Tags */}
                  <div className="flex flex-wrap gap-2 pt-5 border-t border-white/10 mt-auto">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium tracking-wide uppercase text-zinc-300 px-2.5 py-1 rounded bg-white/[0.03] border border-white/10 group-hover:bg-[#39D98A]/5 group-hover:border-[#39D98A]/20 group-hover:text-white transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
