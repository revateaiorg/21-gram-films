import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Share2, Send, CheckCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    lookingFor: 'Web Design & Films',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        lookingFor: 'Web Design & Films',
        message: ''
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0B0907] relative overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Information (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-mono text-[#39D98A] tracking-widest uppercase mb-3 block">
                // INITIATE CONTACT
              </span>
              <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight uppercase leading-none mb-6">
                LET'S<br />
                <span className="text-[#39D98A]">TALK.</span>
              </h2>

              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-10">
                Ready to give your brand true weight? Direct contact details or quick form below.
              </p>

              {/* Direct Info List */}
              <div className="space-y-6">
                
                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-[#39D98A] group-hover:border-[#39D98A]/30 transition-all shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">EMAIL</div>
                    <a href="mailto:21gramfilms@gmail.com" className="text-sm font-heading font-semibold text-white hover:text-[#39D98A] transition-colors">
                      21gramfilms@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-[#39D98A] group-hover:border-[#39D98A]/30 transition-all shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">PHONE / WHATSAPP</div>
                    <div className="text-sm font-heading font-semibold text-white flex flex-col gap-0.5">
                      <a href="tel:+916382969592" className="hover:text-[#39D98A] transition-colors">+91 63829 69592</a>
                      <a href="tel:+918056279834" className="hover:text-[#39D98A] transition-colors">+91 80562 79834</a>
                    </div>
                  </div>
                </div>

                {/* Studio Location */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-[#39D98A] group-hover:border-[#39D98A]/30 transition-all shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">CHENNAI STUDIO</div>
                    <p className="text-xs font-body text-zinc-300 font-light leading-relaxed">
                      Near Nagathamman Kovil, Saligramam,<br />
                      Chennai, India
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-[#39D98A] group-hover:border-[#39D98A]/30 transition-all shrink-0">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">INSTAGRAM</div>
                    <a href="https://instagram.com/21gram.films" target="_blank" rel="noopener noreferrer" className="text-sm font-heading font-semibold text-white hover:text-[#39D98A] transition-colors">
                      @21gram.films
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Side: Form (7 Cols) */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-[#0D0B09] border border-white/10 relative">
            <h3 className="font-heading font-bold text-xl text-white mb-6 uppercase tracking-wider">
              PROJECT ENQUIRY
            </h3>

            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#39D98A]/20 border border-[#39D98A] flex items-center justify-center text-[#39D98A] mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-heading font-bold text-white mb-2">ENQUIRY RECEIVED</h4>
                <p className="text-xs text-zinc-400 font-mono">
                  We will get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono text-zinc-400 uppercase mb-1 block">NAME *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#39D98A] focus:outline-none text-xs text-white placeholder-zinc-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-zinc-400 uppercase mb-1 block">COMPANY</label>
                    <input 
                      type="text" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Brand or agency name"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#39D98A] focus:outline-none text-xs text-white placeholder-zinc-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono text-zinc-400 uppercase mb-1 block">EMAIL *</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#39D98A] focus:outline-none text-xs text-white placeholder-zinc-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-zinc-400 uppercase mb-1 block">PHONE / WHATSAPP</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91 00000 00000"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#39D98A] focus:outline-none text-xs text-white placeholder-zinc-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono text-zinc-400 uppercase mb-1 block">WHAT ARE YOU LOOKING FOR?</label>
                  <select
                    value={formData.lookingFor}
                    onChange={(e) => setFormData({...formData, lookingFor: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-[#0D0B09] border border-white/10 focus:border-[#39D98A] focus:outline-none text-xs text-white transition-colors"
                  >
                    <option value="Web Design & Films">Web Design & Brand Films</option>
                    <option value="Films & Shoots Only">Brand Films & In-House Shoots</option>
                    <option value="Social Media Reels">Social Media & Reels Package</option>
                    <option value="SEO & Web Architecture">SEO & Digital Infrastructure</option>
                    <option value="Full Retainer">Full Creative Retainer</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-mono text-zinc-400 uppercase mb-1 block">MESSAGE</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your brand goals, timeline, or scope..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#39D98A] focus:outline-none text-xs text-white placeholder-zinc-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#39D98A] text-black font-mono font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#67F2A9] transition-all shadow-[0_0_20px_rgba(57,217,138,0.25)] mt-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>SEND ENQUIRY</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
