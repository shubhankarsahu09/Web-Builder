import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { pricingPlans } from '../data/creatorData';

export default function PricingSection({ onOpenModal }) {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-[#07070e]">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-600/10 blur-[150px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-500/20 border border-purple-500/40 text-purple-300">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>TRANSPARENT CREATOR PACKAGES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Invest in a Website That <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Pays For Itself</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            One extra high-tier brand sponsor or hardware deal covers the entire cost of your website. Flat-rate pricing with zero hidden fees.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => {
            return (
              <div 
                key={index}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 shadow-2xl relative ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#1c1a3b] to-[#121327] border-2 border-purple-500 ring-2 ring-purple-500/30 scale-[1.02] shadow-purple-950/80 z-10'
                    : 'bg-[#101122] border border-white/10 hover:border-purple-500/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-extrabold px-4 py-1 rounded-full shadow-lg uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    {!plan.popular && (
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                        {plan.badge}
                      </span>
                    )}
                    <h3 className="text-2xl font-bold text-white mt-3">{plan.name}</h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">{plan.description}</p>
                  </div>

                  <div className="pt-2 border-t border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono-code">{plan.price}</span>
                      <span className="text-xs text-slate-400">/{plan.period}</span>
                    </div>
                    <span className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Turnkey delivery & zero recurring code lock-in
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                      Everything Included:
                    </span>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                          <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-purple-400' : 'text-emerald-400'}`} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => onOpenModal(plan.name)}
                    className={`w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white shadow-purple-900/50 hover:shadow-purple-700/70'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    Free 20-min strategy session included
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Quote callout */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm text-slate-400">
            Need a custom talent roster portal, multi-creator network site, or custom 3D web experience?{' '}
            <button 
              onClick={() => onOpenModal('Custom Enterprise / Collective')}
              className="text-purple-300 hover:text-white font-bold underline cursor-pointer"
            >
              Talk with our senior engineering architects →
            </button>
          </p>
        </div>

      </div>
    </section>
  );
}
