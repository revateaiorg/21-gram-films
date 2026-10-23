import { CheckCircle2 } from 'lucide-react';

export const FeaturedProject: React.FC = () => {
  return (
    <section className="py-24 bg-[#050403] relative overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#39D98A] animate-ping" />
          <span className="text-xs font-mono text-[#39D98A] tracking-widest uppercase">
            // FEATURED CASE STUDY — iBel Infra
          </span>
        </div>

        {/* Asymmetrical Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Headline & Metadata (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-2xl bg-[#0D0B09] border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#39D98A]/5 blur-3xl pointer-events-none" />

            <div>
              <div className="text-[11px] font-mono text-zinc-500 mb-2">CLIENT SPOTLIGHT</div>
              <h2 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight uppercase leading-none mb-4">
                BUILT TO BE<br />
                <span className="text-[#39D98A]">SEEN.</span>
              </h2>

              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-8">
                A visual content system designed to turn spaces, details and environments into premium digital assets for iBel Infra.
              </p>

              {/* Deliverables / Services */}
              <div className="space-y-3 pt-6 border-t border-white/5">
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest block mb-2">
                  SERVICES DELIVERED:
                </span>
                {[
                  "Interior Architectural Shoot",
                  "Exterior Lighting Cinematography",
                  "4K Aerial Drone Surveys",
                  "Social Content & Reels Engine"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs text-zinc-300 font-body">
                    <CheckCircle2 className="w-4 h-4 text-[#39D98A] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400 mb-2">
                <span>CAMPAIGN REACH</span>
                <span className="text-[#39D98A] font-bold">100% DELIVERED</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-[#1FBF73] to-[#39D98A] rounded-full" />
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visuals Asymmetrical Composition (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Main Cinematic Image (Spans 2 cols) */}
            <div className="sm:col-span-2 relative h-[320px] rounded-2xl overflow-hidden border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop" 
                alt="iBel Infra Architecture" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div>
                  <span className="text-[10px] font-mono text-[#39D98A] uppercase">01 // INTERIOR SPACES</span>
                  <div className="text-sm font-heading font-bold text-white">Spatial Lighting & Texture</div>
                </div>
                <div className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300">
                  4K STILL
                </div>
              </div>
            </div>

            {/* Sub Image 1 */}
            <div className="relative h-[200px] rounded-2xl overflow-hidden border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop" 
                alt="iBel Exterior Shoot" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-3 left-3 text-[10px] font-mono text-zinc-300">
                02 // EXTERIOR ELEVATION
              </div>
            </div>

            {/* Sub Image 2 */}
            <div className="relative h-[200px] rounded-2xl overflow-hidden border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop" 
                alt="iBel Aerial Footage" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-3 left-3 text-[10px] font-mono text-[#39D98A]">
                03 // AERIAL CINEMATOGRAPHY
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedProject;
