import React, { useState } from 'react';
import { 
  Sparkles, Check, ExternalLink, ShieldCheck, ArrowRight, 
  Layers, DollarSign, MousePointer, Flame, Star, Cpu, Monitor, Sliders, CheckCircle2, Copy 
} from 'lucide-react';
import { setuprizxCollabData } from '../data/creatorData';

export default function CollabSpotlight({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState('gallery');
  const [selectedGear, setSelectedGear] = useState(setuprizxCollabData.gearItems[0]);
  const [copiedCode, setCopiedCode] = useState(false);

  const copyDiscountCode = () => {
    navigator.clipboard?.writeText('SETUPRIZX15');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="setuprizx" className="py-24 relative overflow-hidden bg-[#0a0a14] border-y border-purple-500/20">
      {/* Background accents */}
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-purple-600/10 blur-[130px] -z-10 rounded-full" />
      <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-cyan-600/10 blur-[130px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-500/20 border border-purple-500/40 text-purple-300">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>OFFICIAL CLIENT COLLABORATION CASE STUDY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Elevating <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">@setuprizx</span> Into a Hardware Sponsorship Titan
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We collaborated closely with <strong className="text-white font-semibold">@setuprizx</strong> to build their flagship web experience—transforming raw desk aesthetics into an automated commercial ecosystem with 
            <span className="text-purple-300 font-semibold"> +340% inbound sponsor conversion</span>.
          </p>
        </div>

        {/* 4 Pillars Grid (What We Engineered For Setuprizx) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {setuprizxCollabData.metrics.map((m, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-[#111222]/80 border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-lg group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 group-hover:bg-purple-500/10 rounded-bl-full transition-colors" />
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 mb-1">
                {m.value}
              </div>
              <div className="text-sm font-bold text-white mb-1">{m.label}</div>
              <div className="text-xs text-purple-300/80">{m.change}</div>
            </div>
          ))}
        </div>

        {/* Interactive Collab Experience Showcase */}
        <div className="bg-[#111222] border border-purple-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-purple-950/60">
          
          {/* Top Control Bar with Navigation Tabs */}
          <div className="p-4 sm:p-6 bg-[#16172e] border-b border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                <Monitor className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-white">setuprizx Digital Architecture</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    LIVE CLIENT SYSTEM
                  </span>
                </div>
                <p className="text-xs text-slate-400">Click tabs below to test the exact modules we developed for setuprizx</p>
              </div>
            </div>

            {/* Interactive Module Tabs */}
            <div className="flex flex-wrap items-center gap-2 bg-[#0c0d18] p-1.5 rounded-xl border border-white/10">
              <button
                onClick={() => setActiveTab('gallery')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'gallery'
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Battlestation Gallery</span>
              </button>

              <button
                onClick={() => setActiveTab('gearrack')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'gearrack'
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Shop The Setup (Gear Rack)</span>
              </button>

              <button
                onClick={() => setActiveTab('mediakit')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'mediakit'
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <DollarSign className="w-3.5 h-3.5" />
                <span>Live Sponsor Deck & Rates</span>
              </button>

              <button
                onClick={() => setActiveTab('brandbooking')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'brandbooking'
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>Brand Inquiry Funnel</span>
              </button>
            </div>
          </div>

          {/* Tab 1: Battlestation Gallery */}
          {activeTab === 'gallery' && (
            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
              <div className="lg:col-span-7 relative group rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={setuprizxCollabData.setupImage} 
                  alt="setuprizx setup showcase" 
                  className="w-full h-80 sm:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-xs text-purple-300">
                      <Sparkles className="w-3 h-3 text-purple-400" />
                      <span>Curated by @setuprizx • Architectural Dark Walnut Edition</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      The Minimalist Ultrawide Creator Station
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                      Featured in 4 tech brand campaigns. Built with zero-cable conduit management, matte black acoustic slat wall panels, and dynamic temperature-tuned backlighting.
                    </p>
                  </div>
                </div>

                {/* Hotspot pins */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 bg-purple-600/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/40 shadow-lg animate-pulse flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>49" Curved OLED</span>
                </div>
                <div className="absolute bottom-1/4 left-1/3 bg-cyan-600/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/40 shadow-lg flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>Machined 75% Board</span>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Engineered Feature</span>
                  <h4 className="text-2xl font-bold text-white mt-1">High-Definition Visual Portfolio</h4>
                  <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                    Unlike Instagram compression, our custom image delivery engine renders setuprizx's desk builds in razor-sharp 4K HDR with sub-second loading speeds.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-white block text-sm">Interactive Hardware Pins</strong>
                      Followers can hover or click directly on monitors, chairs, and keycaps to view specifications and purchase links.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-white block text-sm">Automated Sponsor Tagging</strong>
                      When BenQ or Razer sponsors a battlestation, their logo and campaign tracking links are prominently integrated.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-white block text-sm">Lighting Ambience Toggle</strong>
                      Allows visitors to toggle between day aesthetic and neon RGB night mode with a single switch.
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenModal}
                  className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-purple-900/40"
                >
                  <span>Build a Showcase Like This For Me</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Tab 2: Shop The Setup (Gear Rack) */}
          {activeTab === 'gearrack' && (
            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
              <div className="lg:col-span-5 space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Monetization Engine</span>
                  <h4 className="text-2xl font-bold text-white">Interactive 'Shop The Setup'</h4>
                  <p className="text-sm text-slate-300">
                    Creators lose thousands every month when fans ask "Where did you get that?". We built an interactive gear selector with tracked affiliate links and brand sponsor codes.
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  {setuprizxCollabData.gearItems.map((gear, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedGear(gear)}
                      className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                        selectedGear.name === gear.name 
                          ? 'bg-purple-600/20 border-purple-500 text-white shadow-md' 
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-xs sm:text-sm">{gear.name}</div>
                        <div className="text-[11px] text-slate-400">{gear.category} • Sponsored by {gear.sponsor}</div>
                      </div>
                      <span className="text-xs px-2 py-1 rounded bg-white/10 text-purple-300">
                        Select
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#141527] border border-purple-500/30 rounded-2xl p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-semibold text-purple-400 uppercase tracking-wide">Featured Hardware Item</span>
                    <h5 className="text-xl font-bold text-white mt-0.5">{selectedGear.name}</h5>
                    <p className="text-xs text-slate-400">Category: {selectedGear.category} | Official Partner: {selectedGear.sponsor}</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                    <Cpu className="w-6 h-6" />
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[11px] text-slate-400 block">Sponsor Deal Type</span>
                    <span className="text-xs font-bold text-white">Hardware + Affiliate</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[11px] text-slate-400 block">Creator Discount</span>
                    <span className="text-xs font-bold text-emerald-400">15% OFF for Fans</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 col-span-2 sm:col-span-1">
                    <span className="text-[11px] text-slate-400 block">Click Tracking</span>
                    <span className="text-xs font-bold text-cyan-400">UTM & Pixel Active</span>
                  </div>
                </div>

                {/* Interactive Promo code banner */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-purple-950/60 to-indigo-950/60 border border-purple-500/40 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-bold text-white">Exclusive Setuprizx Audience Promo</div>
                    <div className="text-[11px] text-slate-300">Use code at partner checkout for 15% discount</div>
                  </div>
                  <button
                    onClick={copyDiscountCode}
                    className="w-full sm:w-auto px-3.5 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? 'Copied to Clipboard!' : 'SETUPRIZX15'}</span>
                  </button>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-white/10">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <Check className="w-3.5 h-3.5" /> 14,800+ Verified clicks generated
                  </span>
                  <span className="text-purple-300">Direct affiliate revenue attribution</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Live Media Kit & Rates */}
          {activeTab === 'mediakit' && (
            <div className="p-6 sm:p-8 space-y-8 animate-fadeIn">
              <div className="max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Automated Pitch Deck</span>
                <h4 className="text-2xl font-bold text-white mt-1">Live, Always-Updated Creator Media Kit</h4>
                <p className="text-sm text-slate-300 mt-2">
                  Brands hate static PDFs that get outdated in 2 weeks. The setuprizx media kit automatically updates engagement, subscriber counts, and ad slot availability.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Rate Card 1 */}
                <div className="p-6 rounded-2xl bg-[#141528] border border-white/10 hover:border-purple-500/50 transition-all flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300">
                      Tier 1 • Product Integration
                    </span>
                    <h5 className="text-lg font-bold text-white">Desk Gear Showcase Tag</h5>
                    <div className="text-2xl font-extrabold text-emerald-400">$1,800 <span className="text-xs text-slate-400 font-normal">/ campaign</span></div>
                    <p className="text-xs text-slate-300">
                      Dedicated clickable tag on all primary battlestation images + 30-day top gear list placement + story blast.
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-white/10">
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-purple-400" /> 145K guaranteed view reach</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-purple-400" /> Tracked UTM affiliate link</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-purple-400" /> Permanent archive on website</li>
                  </ul>
                  <button 
                    onClick={onOpenModal}
                    className="w-full py-2.5 rounded-lg bg-white/10 hover:bg-purple-600 text-white text-xs font-semibold transition-all cursor-pointer"
                  >
                    Inquire For Your Brand
                  </button>
                </div>

                {/* Rate Card 2 (Featured) */}
                <div className="p-6 rounded-2xl bg-gradient-to-b from-[#1c1a3b] to-[#121327] border-2 border-purple-500 shadow-xl shadow-purple-950/60 flex flex-col justify-between space-y-4 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider">
                    Most Requested by Brands
                  </div>
                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      Tier 2 • Dedicated Spotlight
                    </span>
                    <h5 className="text-lg font-bold text-white">Full Battlestation Hero Feature</h5>
                    <div className="text-2xl font-extrabold text-purple-300">$3,500 <span className="text-xs text-slate-400 font-normal">/ feature</span></div>
                    <p className="text-xs text-slate-300">
                      Complete custom battlestation build engineered around your hardware product, high-res photo set, Instagram Reel & YouTube Short.
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-white/10">
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Full hero banner placement (14 days)</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Dedicated 4K video walkthrough</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Full rights for brand reposting & ad usage</li>
                  </ul>
                  <button 
                    onClick={onOpenModal}
                    className="w-full py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all cursor-pointer shadow-md shadow-purple-600/40"
                  >
                    Request Hero Feature
                  </button>
                </div>

                {/* Rate Card 3 */}
                <div className="p-6 rounded-2xl bg-[#141528] border border-white/10 hover:border-purple-500/50 transition-all flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300">
                      Tier 3 • Annual Residency
                    </span>
                    <h5 className="text-lg font-bold text-white">Exclusive Hardware Partner</h5>
                    <div className="text-2xl font-extrabold text-cyan-400">$9,500 <span className="text-xs text-slate-400 font-normal">/ quarter</span></div>
                    <p className="text-xs text-slate-300">
                      Category exclusivity (e.g. exclusive monitor or keyboard partner), 6 dedicated setups, co-branded giveaways, and continuous website banner presence.
                    </p>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-white/10">
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan-400" /> 100% Category Exclusivity</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan-400" /> Permanent Logo on Setuprizx Header</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan-400" /> Monthly analytics & conversion reporting</li>
                  </ul>
                  <button 
                    onClick={onOpenModal}
                    className="w-full py-2.5 rounded-lg bg-white/10 hover:bg-cyan-600 text-white text-xs font-semibold transition-all cursor-pointer"
                  >
                    Inquire For Partnership
                  </button>
                </div>

              </div>
            </div>
          )}

          {/* Tab 4: Brand Inquiry Funnel */}
          {activeTab === 'brandbooking' && (
            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Automated Qualification</span>
                  <h4 className="text-2xl font-bold text-white mt-1">Say Goodbye to Endless DM Haggling</h4>
                  <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                    Instead of low-effort emails offering "free mousepads in exchange for 3 posts", our brand inquiry portal filters out tire-kickers and collects verified budgets, timelines, and legal contacts before you even jump on a call.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs">1</div>
                    <div className="text-xs">
                      <strong className="text-white block text-sm">Budget Threshold Gating</strong>
                      Only inquiries with approved minimum budgets ($1,500+) get priority routing.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs">2</div>
                    <div className="text-xs">
                      <strong className="text-white block text-sm">Automated Brief Upload</strong>
                      Brands attach their campaign brief, talking points, and creative guidelines up-front.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">3</div>
                    <div className="text-xs">
                      <strong className="text-white block text-sm">Direct Calendar Scheduling</strong>
                      Synchronizes with your Google Calendar or Cal.com so sponsors book briefing calls instantly.
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Form Mockup */}
              <div className="lg:col-span-6 bg-[#15162a] border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <h5 className="font-bold text-white text-sm">Brand Campaign Ingestion Form (Live Demo)</h5>
                  <span className="text-[11px] text-emerald-400 font-mono-code">SETUPRIZX-INBOX-GATE</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Company / Brand Name</label>
                    <input 
                      type="text" 
                      readOnly 
                      value="Keychron Peripherals & Hardware Inc." 
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">Allocated Budget</label>
                      <input 
                        type="text" 
                        readOnly 
                        value="$3,500 - $5,000 USD" 
                        className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-emerald-400 font-semibold text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">Target Launch Window</label>
                      <input 
                        type="text" 
                        readOnly 
                        value="Q4 Holiday Season" 
                        className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Requested Deliverables</label>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-[11px] px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        ✓ Hero Battlestation Feature
                      </span>
                      <span className="text-[11px] px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        ✓ Dedicated Gear Tag
                      </span>
                      <span className="text-[11px] px-2.5 py-1 rounded bg-white/10 text-slate-300">
                        ✓ Affiliate Promo Code
                      </span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={onOpenModal}
                      className="w-full py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold transition-all cursor-pointer shadow-md"
                    >
                      Get This Automated Pipeline For Your Channel
                    </button>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* Testimonial Quote Banner from setuprizx */}
          <div className="p-6 sm:p-8 bg-[#15162a] border-t border-white/10 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-purple-500/60 shadow-lg flex-shrink-0">
              <img 
                src={setuprizxCollabData.avatar} 
                alt="setuprizx avatar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2 flex-grow text-center md:text-left">
              <p className="text-sm sm:text-base text-slate-200 italic font-normal">
                "{setuprizxCollabData.quote}"
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className="font-bold text-white text-sm">@setuprizx</span>
                <span className="text-slate-500">•</span>
                <span className="text-xs text-purple-400">Desk Setup & Battlestation Creator</span>
                <span className="text-slate-500">•</span>
                <span className="text-xs text-emerald-400 font-medium">Verified Client Collab</span>
              </div>
            </div>
            <button
              onClick={onOpenModal}
              className="flex-shrink-0 px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all cursor-pointer shadow-md"
            >
              Get Started Like Setuprizx
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
