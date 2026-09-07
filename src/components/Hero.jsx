import React from 'react';
import { ArrowRight, Play, CheckCircle2, TrendingUp, Sparkles, Star, Award, Laptop, Eye, ShoppingCart } from 'lucide-react';
import { featuredCreatorData } from '../data/creatorData';

export default function Hero({ onOpenModal, onOpenCollab }) {
  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-purple-600/20 via-indigo-600/20 to-cyan-500/10 blur-[130px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-700/15 blur-[120px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-2/3 left-10 w-80 h-80 bg-cyan-600/10 blur-[100px] -z-10 pointer-events-none rounded-full" />

      {/* Grid background texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Collab Tag */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <button
            onClick={onOpenCollab}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-cyan-500/20 border border-purple-500/40 text-purple-200 hover:text-white hover:border-purple-400 hover:scale-[1.02] transition-all shadow-lg shadow-purple-950/40 cursor-pointer group"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Bespoke Web Architecture for <strong className="text-white">Top Creators</strong></span>
            <span className="bg-purple-500/30 px-2 py-0.5 rounded-full text-[11px] text-purple-200 border border-purple-400/30">
              New Case Study
            </span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            We Build Websites That Turn Creators Into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400">
              6-Figure Media Brands
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Stop losing premium brand deals and sponsor budgets to messy Linktrees and generic Google Drive media kits. 
            We build <strong className="text-white font-semibold">bespoke showcase hubs</strong> for your best videos, streams, and battlestations—complete with 
            <strong className="text-purple-300 font-semibold"> live interactive media kits</strong> and <strong className="text-cyan-300 font-semibold">automated advertising pipelines</strong>.
          </p>

          {/* Social Proof Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Showcase Videos, Gear & Work</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>Direct Brand Advertising Portals</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Interactive Live Media Kits</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-xl shadow-purple-900/40 hover:shadow-purple-700/60 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Build Your Creator Site</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenCollab}
              className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <Laptop className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
              <span>See Featured Showcase</span>
            </button>
          </div>
        </div>

        {/* Interactive Visual Hero Mockup Showcase */}
        <div className="mt-16 lg:mt-20 relative max-w-5xl mx-auto">
          {/* Glowing outline wrapper */}
          <div className="p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-purple-500/30 via-indigo-500/10 to-transparent border border-purple-500/30 shadow-2xl shadow-purple-950/80">
            <div className="rounded-xl sm:rounded-2xl bg-[#0d0d17] border border-white/10 overflow-hidden shadow-2xl">
              
              {/* Browser chrome header */}
              <div className="bg-[#131322] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono-code text-slate-400 hidden sm:inline-block">
                    https://studiocraft.creatorhub.space
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    <Sparkles className="w-3 h-3 text-purple-400" />
                    Built by FORGECRAFT
                  </span>
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>

              {/* Inner Mockup View */}
              <div className="p-4 sm:p-8 bg-gradient-to-b from-[#0f101f] to-[#0a0a14]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Left Column: Creator Identity & Work Highlights */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-purple-500/50 shadow-lg shadow-purple-900/40">
                        <img 
                          src={featuredCreatorData.avatar} 
                          alt="Studio Creator" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-white">{featuredCreatorData.creatorName}</h3>
                          <span className="px-2 py-0.5 rounded bg-purple-500/20 border border-purple-500/30 text-[11px] font-semibold text-purple-300">
                            VERIFIED CREATOR
                          </span>
                        </div>
                        <p className="text-sm text-slate-400">Desk Aesthetics & Hardware Battlestations • 145K Monthly Reach</p>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="font-semibold text-slate-200">FEATURED BATTLESTATION SHOWCASE</span>
                        <span className="text-emerald-400 flex items-center gap-1">
                          <TrendingUp className="w-3.5 h-3.5" /> +340% Sponsor Conversion
                        </span>
                      </div>
                      
                      <div className="relative rounded-lg overflow-hidden group">
                        <img 
                          src={featuredCreatorData.setupImage} 
                          alt="curated battlestation" 
                          className="w-full h-48 sm:h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-white font-bold text-sm sm:text-base">Cyberpunk 2077 x Minimalist Walnut Setup</p>
                              <p className="text-xs text-purple-300">Sponsored by DisplayPartner & KeyForge</p>
                            </div>
                            <span className="px-3 py-1 bg-purple-600/90 hover:bg-purple-500 text-white text-xs font-semibold rounded-lg backdrop-blur-sm transition-colors flex items-center gap-1">
                              <Eye className="w-3.5 h-3.5" /> View Setup
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quick interactive gear tags */}
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300">
                        ⚡ 49" OLED Curved
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                        ⌨️ Machined 75% Mechanical
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                        💡 Ambient Hex RGB
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-300">
                        🎙️ Studio Condenser Mic
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Live Media Kit & Advertising Rate Card */}
                  <div className="lg:col-span-5 bg-[#141526]/80 rounded-xl p-5 border border-purple-500/30 space-y-4 shadow-xl">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div>
                        <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Live Advertising Portal</span>
                        <h4 className="text-base font-bold text-white">Sponsor Booking & Rates</h4>
                      </div>
                      <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-medium">
                        Q3 Booking Open
                      </span>
                    </div>

                    {/* Verified Metrics Grid */}
                    <div className="grid grid-cols-2 gap-2.5 text-center">
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                        <div className="text-lg font-bold text-white">145,000+</div>
                        <div className="text-[11px] text-slate-400">Monthly Impressions</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                        <div className="text-lg font-bold text-purple-400">9.4%</div>
                        <div className="text-[11px] text-slate-400">Avg Engagement Rate</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                        <div className="text-lg font-bold text-cyan-400">38+</div>
                        <div className="text-[11px] text-slate-400">Hardware Brands</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                        <div className="text-lg font-bold text-emerald-400">82%</div>
                        <div className="text-[11px] text-slate-400">Tech & PC Audience</div>
                      </div>
                    </div>

                    {/* Sponsor packages mockup */}
                    <div className="space-y-2 pt-1">
                      <div className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-between text-xs">
                        <div>
                          <div className="font-semibold text-white">Dedicated Battlestation Feature</div>
                          <div className="text-slate-400 text-[11px]">Hero placement + affiliate link + reel</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-emerald-400">$3,500</div>
                          <div className="text-[10px] text-slate-500">Available</div>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-between text-xs">
                        <div>
                          <div className="font-semibold text-white">Interactive Gear Tag Placement</div>
                          <div className="text-slate-400 text-[11px]">30-day top slot + discount code embed</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-emerald-400">$1,800</div>
                          <div className="text-[10px] text-slate-500">Available</div>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={onOpenCollab}
                      className="w-full py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-purple-900/30"
                    >
                      <span>Explore the Full Showcase Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Floating Accolade Badges */}
          <div className="hidden md:flex items-center gap-3 absolute -bottom-6 -left-6 bg-[#161726]/90 backdrop-blur-xl border border-purple-500/30 px-4 py-3 rounded-2xl shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
              <Star className="w-5 h-5 fill-purple-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">340% Higher Sponsor Conversion</p>
              <p className="text-[11px] text-slate-400">Validated across creator cohort launches</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3 absolute -bottom-6 -right-6 bg-[#161726]/90 backdrop-blur-xl border border-cyan-500/30 px-4 py-3 rounded-2xl shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Award className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Full Brand Deal Automation</p>
              <p className="text-[11px] text-slate-400">Brief, vetting, pricing, & booking in 1 place</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
