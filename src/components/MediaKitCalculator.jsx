import React, { useState } from 'react';
import { 
  Calculator, DollarSign, TrendingUp, Users, CheckCircle2, 
  Sparkles, ArrowRight, ShieldCheck, PieChart, BarChart2 
} from 'lucide-react';

export default function MediaKitCalculator({ onOpenModal }) {
  const [audienceSize, setAudienceSize] = useState(150000); // 150k followers/views
  const [engagementRate, setEngagementRate] = useState(7.5); // 7.5%
  const [selectedDeliverables, setSelectedDeliverables] = useState({
    videoIntegration: true,
    setupPlacement: true,
    gearTag: true,
    socialBlast: false,
    newsletter: false
  });

  const deliverablesConfig = {
    videoIntegration: { label: "Dedicated Video Walkthrough / Review", basePrice: 2400, desc: "Full 60s-90s integration or dedicated video" },
    setupPlacement: { label: "Desk Battlestation / Studio Placement", basePrice: 1600, desc: "Permanent product placement on curated setup" },
    gearTag: { label: "Interactive Gear Rack Tag & Promo Code", basePrice: 950, desc: "Clickable hotspot on creator website with discount code" },
    socialBlast: { label: "Multi-Platform Social Blast (Reels / TikTok)", basePrice: 850, desc: "Cross-posted vertical short-form content" },
    newsletter: { label: "Newsletter Sponsor Banner & Blast", basePrice: 650, desc: "Dedicated header slot sent to direct email list" }
  };

  const toggleDeliverable = (key) => {
    setSelectedDeliverables(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Calculation multipliers based on audience size and engagement
  const audienceFactor = audienceSize / 100000;
  const engagementFactor = engagementRate / 5;

  let totalPackagePrice = 0;
  Object.keys(selectedDeliverables).forEach(key => {
    if (selectedDeliverables[key]) {
      totalPackagePrice += deliverablesConfig[key].basePrice * (0.6 + 0.4 * audienceFactor) * (0.8 + 0.2 * engagementFactor);
    }
  });

  const roundedPackagePrice = Math.round(totalPackagePrice / 50) * 50;
  const estimatedMonthlyDeals = Math.round((roundedPackagePrice * 2.8) / 100) * 100;
  const estimatedReach = Math.round(audienceSize * (engagementRate / 100) * 3.4);

  return (
    <section id="calculator" className="py-24 relative overflow-hidden bg-[#07070f]">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-indigo-600/10 blur-[140px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
            <Calculator className="w-3.5 h-3.5 text-emerald-400" />
            <span>INTERACTIVE ADVERTISING ENGINE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Creator Media Kit & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Ad Rate Calculator</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            This is the exact interactive rate card module we embed into your website. Brands love the instant pricing transparency, and creators stop undercharging for their influence.
          </p>
        </div>

        {/* Calculator Workstation */}
        <div className="bg-[#101124] border border-emerald-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-emerald-950/40 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Inputs (Left) */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Slider 1: Total Reach */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-white flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>Total Audience Size (Cross-Platform)</span>
                </label>
                <span className="text-lg font-black text-emerald-400 font-mono-code">
                  {audienceSize.toLocaleString()} <span className="text-xs text-slate-400 font-normal">followers/views</span>
                </span>
              </div>

              <input 
                type="range"
                min="20000"
                max="1000000"
                step="10000"
                value={audienceSize}
                onChange={(e) => setAudienceSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />

              <div className="flex justify-between text-[11px] text-slate-500 font-mono-code">
                <span>20K (Emerging)</span>
                <span>150K (Established)</span>
                <span>500K</span>
                <span>1M+ (S-Tier)</span>
              </div>
            </div>

            {/* Slider 2: Engagement Rate */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-white flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <span>Average Audience Engagement Rate</span>
                </label>
                <span className="text-lg font-black text-cyan-400 font-mono-code">
                  {engagementRate}%
                </span>
              </div>

              <input 
                type="range"
                min="2.0"
                max="15.0"
                step="0.5"
                value={engagementRate}
                onChange={(e) => setEngagementRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />

              <div className="flex justify-between text-[11px] text-slate-500 font-mono-code">
                <span>2.0% (Average)</span>
                <span>7.5% (High Affinity)</span>
                <span>15.0% (Hyper Viral)</span>
              </div>
            </div>

            {/* Deliverables Checkboxes */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-purple-400 block">
                Select Deliverables For Brand Campaign Bundle:
              </label>

              <div className="space-y-2.5">
                {Object.keys(deliverablesConfig).map((key) => {
                  const item = deliverablesConfig[key];
                  const isChecked = selectedDeliverables[key];
                  return (
                    <button
                      key={key}
                      onClick={() => toggleDeliverable(key)}
                      className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                        isChecked 
                          ? 'bg-emerald-500/10 border-emerald-500/40 text-white' 
                          : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                          isChecked ? 'bg-emerald-500 border-emerald-400 text-black' : 'border-slate-600 bg-transparent'
                        }`}>
                          {isChecked && <CheckCircle2 className="w-4 h-4" />}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-semibold text-white">{item.label}</div>
                          <div className="text-[11px] text-slate-400">{item.desc}</div>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-emerald-400 font-mono-code flex-shrink-0">
                        {isChecked ? 'SELECTED' : '+ ADD'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Results Card (Right) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#171933] to-[#0e0f1e] p-6 sm:p-8 rounded-2xl border border-emerald-500/30 space-y-6 shadow-xl">
            <div className="space-y-1 pb-4 border-b border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Campaign Estimate</span>
              <h3 className="text-xl font-bold text-white">Recommended Brand Rate</h3>
              <p className="text-xs text-slate-400">Calculated with tier CPM, audience affinity & platform engagement</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-400">Recommended Deliverables Package:</span>
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-white font-mono-code">
                ${roundedPackagePrice.toLocaleString()}
              </div>
              <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> High-converting rate benchmark
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-xs text-slate-400">Monthly Sponsor Potential</div>
                <div className="text-lg font-bold text-purple-400 font-mono-code">${estimatedMonthlyDeals.toLocaleString()}+</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-xs text-slate-400">Est. Campaign Engagements</div>
                <div className="text-lg font-bold text-cyan-400 font-mono-code">{estimatedReach.toLocaleString()}</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-slate-300 space-y-1">
              <div className="font-bold text-emerald-300">Why this closes deals faster:</div>
              <div>When sponsors click your website rate card, they don't haggle because the value, CPM, and exact deliverable metrics are laid out clearly.</div>
            </div>

            <button
              onClick={onOpenModal}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-black font-extrabold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-950/50"
            >
              <span>Embed This Calculator On My Site</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
