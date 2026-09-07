import React, { useState } from 'react';
import { 
  Sparkles, Check, Monitor, Gamepad2, Video, Shirt, 
  Palette, Layers, Eye, ArrowRight, Shield, Zap, ShoppingBag, DollarSign, Radio 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function InteractiveBuilder({ onOpenModalWithConfig }) {
  const [niche, setNiche] = useState('setup');
  const [colorTheme, setColorTheme] = useState('violet');
  const [modules, setModules] = useState({
    mediaKit: true,
    gearRack: true,
    liveFeed: true,
    sponsorBooking: true,
    merchShop: false
  });

  const niches = [
    {
      id: 'setup',
      name: 'Battlestations & Hardware (like @setuprizx)',
      icon: Monitor,
      creatorTitle: 'Desk Aesthetics & Tech Curator',
      headline: 'The Ultimate Minimalist Battlestation & Workstation Hub',
      bannerImage: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      sampleTag: 'Featured Partner: @setuprizx Collab Style'
    },
    {
      id: 'gaming',
      name: 'Pro Streamer & Gaming Creator',
      icon: Gamepad2,
      creatorTitle: 'Twitch Partner & FPS Competitor',
      headline: 'Live Broadcasts, Tournament Clips & Team Roster',
      bannerImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
      sampleTag: 'Real-time Twitch API Integration'
    },
    {
      id: 'video',
      name: 'Filmmaker & Video Essayist',
      icon: Video,
      creatorTitle: 'Cinematography & YouTube Essays',
      headline: '4K Cinematic Showreels & Commercial Brand Productions',
      bannerImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
      sampleTag: 'Direct Brand Commercial Booking'
    },
    {
      id: 'lifestyle',
      name: 'Lifestyle, Tech & Fashion',
      icon: Shirt,
      creatorTitle: 'Digital Fashion & Tech Influencer',
      headline: 'Curated Lookbooks, Brand Collabs & Daily Essentials',
      bannerImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      sampleTag: 'Tracked Lookbook & Affiliate Hub'
    }
  ];

  const themes = [
    { id: 'violet', name: 'Cyber Obsidian', border: 'border-purple-500', bg: 'from-purple-900/40 to-slate-900', accent: 'text-purple-400', glow: 'shadow-purple-900/40' },
    { id: 'emerald', name: 'Battlestation Matrix', border: 'border-emerald-500', bg: 'from-emerald-900/40 to-slate-900', accent: 'text-emerald-400', glow: 'shadow-emerald-900/40' },
    { id: 'cyan', name: 'Electric Cyan', border: 'border-cyan-500', bg: 'from-cyan-900/40 to-slate-900', accent: 'text-cyan-400', glow: 'shadow-cyan-900/40' },
    { id: 'sunset', name: 'Neon Amber', border: 'border-amber-500', bg: 'from-amber-900/40 to-slate-900', accent: 'text-amber-400', glow: 'shadow-amber-900/40' }
  ];

  const currentNiche = niches.find(n => n.id === niche);
  const currentTheme = themes.find(t => t.id === colorTheme);

  const toggleModule = (key) => {
    setModules(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleLaunchBuild = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });
    onOpenModalWithConfig({
      niche: currentNiche.name,
      theme: currentTheme.name,
      modules
    });
  };

  return (
    <section id="customizer" className="py-24 relative overflow-hidden bg-[#080811]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-500/20 border border-purple-500/40 text-purple-300">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>INTERACTIVE SITE CONFIGURATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Preview Your Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Creator Hub Concept</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Experiment with layouts, color aesthetics, and monetization features in real-time. See how your creator brand will look before we write a single line of production code.
          </p>
        </div>

        {/* Builder Workstation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel (Left) */}
          <div className="lg:col-span-5 space-y-6 bg-[#111222] p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl">
            
            {/* Step 1: Creator Niche */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
                <span>1. Select Your Creator Niche</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {niches.map((n) => {
                  const Icon = n.icon;
                  return (
                    <button
                      key={n.id}
                      onClick={() => setNiche(n.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-2.5 ${
                        niche === n.id
                          ? 'bg-purple-600/20 border-purple-500 text-white shadow-md shadow-purple-900/30'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span className="text-xs font-semibold leading-snug">{n.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Visual Theme */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                <span>2. Choose Color Aesthetic</span>
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setColorTheme(t.id)}
                    className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between text-xs font-semibold ${
                      colorTheme === t.id
                        ? `${t.border} bg-white/10 text-white shadow`
                        : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>{t.name}</span>
                    <span className={`w-3 h-3 rounded-full ${
                      t.id === 'violet' ? 'bg-purple-500' :
                      t.id === 'emerald' ? 'bg-emerald-500' :
                      t.id === 'cyan' ? 'bg-cyan-500' : 'bg-amber-500'
                    }`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Modules Toggle */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <span>3. Toggle Interactive Modules</span>
              </label>
              <div className="space-y-2">
                <button
                  onClick={() => toggleModule('mediaKit')}
                  className={`w-full p-2.5 rounded-xl border flex items-center justify-between text-xs transition-all cursor-pointer ${
                    modules.mediaKit ? 'bg-purple-500/15 border-purple-500/40 text-white' : 'bg-white/5 border-white/10 text-slate-400'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-purple-400" />
                    <span>Live Interactive Media Kit & Rate Card</span>
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${modules.mediaKit ? 'bg-purple-500 text-white' : 'bg-white/10 text-slate-400'}`}>
                    {modules.mediaKit ? 'ACTIVE' : 'OFF'}
                  </span>
                </button>

                <button
                  onClick={() => toggleModule('gearRack')}
                  className={`w-full p-2.5 rounded-xl border flex items-center justify-between text-xs transition-all cursor-pointer ${
                    modules.gearRack ? 'bg-cyan-500/15 border-cyan-500/40 text-white' : 'bg-white/5 border-white/10 text-slate-400'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-cyan-400" />
                    <span>Shop The Setup / Gear Rack (like @setuprizx)</span>
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${modules.gearRack ? 'bg-cyan-500 text-white' : 'bg-white/10 text-slate-400'}`}>
                    {modules.gearRack ? 'ACTIVE' : 'OFF'}
                  </span>
                </button>

                <button
                  onClick={() => toggleModule('sponsorBooking')}
                  className={`w-full p-2.5 rounded-xl border flex items-center justify-between text-xs transition-all cursor-pointer ${
                    modules.sponsorBooking ? 'bg-emerald-500/15 border-emerald-500/40 text-white' : 'bg-white/5 border-white/10 text-slate-400'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <span>Direct Brand Inquiry & Calendar Funnel</span>
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${modules.sponsorBooking ? 'bg-emerald-500 text-white' : 'bg-white/10 text-slate-400'}`}>
                    {modules.sponsorBooking ? 'ACTIVE' : 'OFF'}
                  </span>
                </button>

                <button
                  onClick={() => toggleModule('liveFeed')}
                  className={`w-full p-2.5 rounded-xl border flex items-center justify-between text-xs transition-all cursor-pointer ${
                    modules.liveFeed ? 'bg-rose-500/15 border-rose-500/40 text-white' : 'bg-white/5 border-white/10 text-slate-400'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-rose-400" />
                    <span>Live Stream / Latest Video Sync</span>
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${modules.liveFeed ? 'bg-rose-500 text-white' : 'bg-white/10 text-slate-400'}`}>
                    {modules.liveFeed ? 'ACTIVE' : 'OFF'}
                  </span>
                </button>

                <button
                  onClick={() => toggleModule('merchShop')}
                  className={`w-full p-2.5 rounded-xl border flex items-center justify-between text-xs transition-all cursor-pointer ${
                    modules.merchShop ? 'bg-amber-500/15 border-amber-500/40 text-white' : 'bg-white/5 border-white/10 text-slate-400'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-amber-400" />
                    <span>Merch & Digital Preset Storefront</span>
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${modules.merchShop ? 'bg-amber-500 text-white' : 'bg-white/10 text-slate-400'}`}>
                    {modules.merchShop ? 'ACTIVE' : 'OFF'}
                  </span>
                </button>
              </div>
            </div>

            {/* Launch CTA */}
            <div className="pt-2">
              <button
                onClick={handleLaunchBuild}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:opacity-90 shadow-lg shadow-purple-900/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Order This Custom Configuration</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-center text-slate-400 mt-2">
                Delivered in 7-10 business days with full domain & hosting setup
              </p>
            </div>

          </div>

          {/* Real-time Dynamic Mockup (Right) */}
          <div className="lg:col-span-7">
            <div className={`rounded-3xl border-2 ${currentTheme.border} bg-[#0c0d18] overflow-hidden shadow-2xl ${currentTheme.glow}`}>
              
              {/* Fake Browser Chrome */}
              <div className="bg-[#141526] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/70" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                  <span className="text-xs font-mono-code text-slate-400 ml-2">
                    https://yourname.creatorhub.space
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${currentTheme.accent} bg-white/5`}>
                    THEME: {currentTheme.name.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Live Preview Canvas */}
              <div className={`p-6 sm:p-8 space-y-6 bg-gradient-to-b ${currentTheme.bg}`}>
                
                {/* Hero Mock */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs bg-white/10 text-white backdrop-blur-md">
                    <Sparkles className="w-3 h-3 text-purple-300" />
                    <span>{currentNiche.sampleTag}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    {currentNiche.headline}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300">
                    Official creator portfolio, live media kit, and sponsor partnership portal for {currentNiche.creatorTitle}.
                  </p>
                </div>

                {/* Banner Photo */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 h-56">
                  <img 
                    src={currentNiche.bannerImage} 
                    alt="Preview" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-xs font-bold text-white">4K Curated Production Showcase</span>
                      <span className="text-xs px-2.5 py-1 rounded bg-purple-600 text-white font-medium">Explore Gallery</span>
                    </div>
                  </div>
                </div>

                {/* Dynamic Modules Display */}
                <div className="space-y-3 pt-2">
                  
                  {/* Module: Media Kit */}
                  {modules.mediaKit && (
                    <div className="p-4 rounded-xl bg-white/5 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                          <DollarSign className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Live Media Kit & Rate Card Active</div>
                          <div className="text-[11px] text-slate-400">Verified reach: 180,000+ • 4 active sponsor slots open</div>
                        </div>
                      </div>
                      <span className="text-xs px-3 py-1 rounded-lg bg-purple-600/40 text-purple-200 border border-purple-400/30 font-medium">
                        View Rates ($1,500+)
                      </span>
                    </div>
                  )}

                  {/* Module: Gear Rack */}
                  {modules.gearRack && (
                    <div className="p-4 rounded-xl bg-white/5 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                          <Monitor className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Shop The Setup & Hardware Rack</div>
                          <div className="text-[11px] text-slate-400">Interactive gear tags with discount codes (like @setuprizx)</div>
                        </div>
                      </div>
                      <span className="text-xs px-3 py-1 rounded-lg bg-cyan-600/40 text-cyan-200 border border-cyan-400/30 font-medium">
                        15% Off Code Active
                      </span>
                    </div>
                  )}

                  {/* Module: Sponsor Booking */}
                  {modules.sponsorBooking && (
                    <div className="p-4 rounded-xl bg-white/5 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                          <Zap className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Direct Brand Deal Gate & Calendar</div>
                          <div className="text-[11px] text-slate-400">Automated sponsor qualification, brief submission & invoice routing</div>
                        </div>
                      </div>
                      <span className="text-xs px-3 py-1 rounded-lg bg-emerald-600/40 text-emerald-200 border border-emerald-400/30 font-medium">
                        Instant Booking
                      </span>
                    </div>
                  )}

                  {/* Module: Live Feed */}
                  {modules.liveFeed && (
                    <div className="p-4 rounded-xl bg-white/5 border border-rose-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center">
                          <Radio className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Live Broadcast & Video Auto-Sync</div>
                          <div className="text-[11px] text-slate-400">Synced directly with YouTube & Twitch stream status</div>
                        </div>
                      </div>
                      <span className="flex items-center gap-1 text-[11px] text-rose-400 font-bold">
                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                        LIVE READY
                      </span>
                    </div>
                  )}

                  {/* Module: Merch Shop */}
                  {modules.merchShop && (
                    <div className="p-4 rounded-xl bg-white/5 border border-amber-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                          <ShoppingBag className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Creator Storefront & Digital Drops</div>
                          <div className="text-[11px] text-slate-400">Integrated Shopify / Printful / Stripe checkouts</div>
                        </div>
                      </div>
                      <span className="text-xs px-3 py-1 rounded-lg bg-amber-600/40 text-amber-200 border border-amber-400/30 font-medium">
                        Shop Open
                      </span>
                    </div>
                  )}

                </div>

                <div className="pt-4 text-center border-t border-white/10">
                  <button
                    onClick={handleLaunchBuild}
                    className="inline-flex items-center gap-2 text-xs font-bold text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Click To Build This Exact Prototype With Us</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
