import React from 'react';
import { 
  ShieldAlert, Sparkles, TrendingUp, CheckCircle2, XCircle, 
  ArrowRight, DollarSign, Globe, Lock, Users 
} from 'lucide-react';

export default function CreatorBenefits({ onOpenModal }) {
  const comparisonRows = [
    {
      feature: "First Impression on 5-Figure Sponsors",
      linktree: "Looks like an amateur side hustle",
      customSite: "Commands respect as a professional media studio"
    },
    {
      feature: "Hardware & Gear Affiliate Showcase",
      linktree: "Boring plain text link list with low clickthrough",
      customSite: "Interactive 4K battlestation hotspots (like @setuprizx)"
    },
    {
      feature: "Brand Sponsorship Booking",
      linktree: "Messy DMs & lost emails with lowballers",
      customSite: "Automated budget qualifier, brief upload & calendar gate"
    },
    {
      feature: "Verified Analytics & Demographics",
      linktree: "Static outdated PDF screenshots",
      customSite: "Live interactive Media Kit with dynamic CPM calculator"
    },
    {
      feature: "Audience & Email Ownership",
      linktree: "Third-party platform owns user data",
      customSite: "100% direct ownership of newsletter list & customer traffic"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#090a14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-500/20 border border-purple-500/40 text-purple-300">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>THE CREATOR BUSINESS SHIFT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Why Linktree Is Costing You{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-rose-400 to-amber-400">
              Thousands Every Month
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            When hardware brands like Razer, BenQ, or Keychron scout creators, they compare professional agencies against social accounts. Here is why creators like <strong className="text-white">@setuprizx</strong> transitioned to a custom site.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-[#101124] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-12 bg-[#16172e] p-4 sm:p-6 border-b border-white/10 text-xs sm:text-sm font-bold text-white">
            <div className="col-span-4 sm:col-span-5 text-slate-300">KEY CREATOR CAPABILITY</div>
            <div className="col-span-4 sm:col-span-3 text-rose-400 flex items-center gap-1.5">
              <XCircle className="w-4 h-4" />
              <span>Generic Bio Links</span>
            </div>
            <div className="col-span-4 text-purple-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>Bespoke Creator Site</span>
            </div>
          </div>

          <div className="divide-y divide-white/5">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 sm:p-6 items-center text-xs sm:text-sm hover:bg-white/[0.02] transition-colors">
                <div className="col-span-4 sm:col-span-5 font-semibold text-white pr-2">
                  {row.feature}
                </div>
                <div className="col-span-4 sm:col-span-3 text-slate-400 pr-2">
                  <span className="line-through opacity-80">{row.linktree}</span>
                </div>
                <div className="col-span-4 font-semibold text-purple-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{row.customSite}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom stats callout */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
            <div className="text-3xl font-extrabold text-white mb-1">3.4x</div>
            <div className="text-xs text-purple-300 font-semibold">Average Sponsor Deal Lift</div>
            <p className="text-[11px] text-slate-400 mt-1">Creators command premium rates with dedicated media kit validation</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
            <div className="text-3xl font-extrabold text-white mb-1">100%</div>
            <div className="text-xs text-cyan-300 font-semibold">Audience Data Ownership</div>
            <p className="text-[11px] text-slate-400 mt-1">Build your private email list immune to algorithmic bans</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
            <div className="text-3xl font-extrabold text-white mb-1">7 Days</div>
            <div className="text-xs text-emerald-300 font-semibold">Turnaround Time</div>
            <p className="text-[11px] text-slate-400 mt-1">From initial concept briefing to live deployment on custom domain</p>
          </div>
        </div>

      </div>
    </section>
  );
}
