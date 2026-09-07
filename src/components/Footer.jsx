import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check, Heart, Monitor, ShieldCheck, Mail } from 'lucide-react';

export default function Footer({ onOpenModal, onOpenCollab }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#05050a] border-t border-white/10 pt-20 pb-12 relative overflow-hidden text-slate-400">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-950/20 blur-[160px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Call to Action Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-950/60 via-[#131427] to-cyan-950/50 border border-purple-500/30 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>OFFICIAL ARCHITECT FOR @SETUPRIZX & TOP CREATORS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              Ready to turn your content into a high-ticket business?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              Get a custom showcase site, automated media kit, and direct sponsor booking engine launched in 7 to 10 days.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenModal}
              className="px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-xl shadow-purple-900/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Build My Creator Site</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenCollab}
              className="px-6 py-4 rounded-xl font-semibold text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Monitor className="w-4 h-4 text-purple-400" />
              <span>@setuprizx Case Study</span>
            </button>
          </div>
        </div>

        {/* Links & Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/5 text-xs">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 p-[1px]">
                <div className="w-full h-full bg-[#0d0d16] rounded-xl flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                </div>
              </div>
              <span className="text-lg font-bold text-white font-display">
                FORGECRAFT <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">CREATOR</span>
              </span>
            </a>
            
            <p className="text-slate-400 leading-relaxed max-w-sm">
              We design and develop high-converting portfolio websites, interactive media kits, and brand advertising booking portals for YouTube creators, Twitch streamers, filmmakers, and desk setup curators.
            </p>

            <div className="pt-2">
              <div className="p-3 rounded-xl bg-white/5 border border-purple-500/20 flex items-center gap-3">
                <Monitor className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <div>
                  <div className="font-bold text-white text-xs">Recent Collaboration</div>
                  <div className="text-[11px] text-slate-400">Official Web Architect for <strong className="text-purple-300">@setuprizx</strong></div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: What We Build */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">Solutions</div>
            <ul className="space-y-2">
              <li><a href="#showcase" className="hover:text-purple-300 transition-colors">Creator Work Showcase</a></li>
              <li><a href="#setuprizx" onClick={onOpenCollab} className="text-purple-300 hover:text-white transition-colors">@setuprizx Battlestation Hub</a></li>
              <li><a href="#services" className="hover:text-purple-300 transition-colors">Interactive Media Kits</a></li>
              <li><a href="#calculator" className="hover:text-purple-300 transition-colors">Ad Rate Calculator</a></li>
              <li><a href="#customizer" className="hover:text-purple-300 transition-colors">Shop The Setup Gear Racks</a></li>
              <li><a href="#services" className="hover:text-purple-300 transition-colors">Sponsor Booking Funnels</a></li>
            </ul>
          </div>

          {/* Column 3: Platform */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">Company</div>
            <ul className="space-y-2">
              <li><a href="#pricing" className="hover:text-purple-300 transition-colors">Pricing & Packages</a></li>
              <li><a href="#customizer" className="hover:text-purple-300 transition-colors">Interactive Site Simulator</a></li>
              <li><a href="#faq" className="hover:text-purple-300 transition-colors">FAQ & Answers</a></li>
              <li><button onClick={onOpenModal} className="text-left hover:text-purple-300 transition-colors cursor-pointer">Start a Build</button></li>
              <li><button onClick={onOpenModal} className="text-left hover:text-purple-300 transition-colors cursor-pointer">Brand Sponsor Inquiries</button></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">Creator Blueprint</div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Get our monthly breakdown of high-converting creator websites and brand deal strategies.
            </p>
            {subscribed ? (
              <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                <span>Subscribed! Check your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-purple-500"
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  Join Creator Letter
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} FORGECRAFT CREATOR SITES. All rights reserved.</span>
            <span>•</span>
            <span>Proudly built in official collaboration with @setuprizx.</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Brand Assets</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
