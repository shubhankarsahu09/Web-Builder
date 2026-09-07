import React from 'react';
import { Sparkles, Star, CheckCircle2, Quote, ShieldCheck } from 'lucide-react';
import { creatorTestimonials } from '../data/creatorData';

export default function Testimonials({ onOpenCollab }) {
  return (
    <section className="py-24 relative overflow-hidden bg-[#090913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-500/20 border border-purple-500/40 text-purple-300">
            <Star className="w-3.5 h-3.5 fill-purple-400 text-purple-400" />
            <span>CREATOR SOCIAL PROOF</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Trusted By Creators Who Take Their{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Business Seriously
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Hear how our custom website builds helped creators like <strong className="text-white">@setuprizx</strong> upgrade their brand presence and close bigger sponsorship checks.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {creatorTestimonials.map((t, index) => {
            const isSetuprizx = t.handle === '@setuprizx';
            return (
              <div
                key={index}
                className={`p-8 rounded-3xl flex flex-col justify-between space-y-6 transition-all duration-300 shadow-xl ${
                  isSetuprizx
                    ? 'bg-gradient-to-b from-[#1c1a3b] to-[#121327] border-2 border-purple-500 shadow-purple-950/80 scale-[1.02] relative'
                    : 'bg-[#101124] border border-white/10 hover:border-purple-500/30'
                }`}
              >
                {isSetuprizx && (
                  <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    Official Collab Partner
                  </div>
                )}

                <div className="space-y-4">
                  {/* Rating stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-purple-400/40" />

                  <p className="text-slate-200 text-sm sm:text-base italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl overflow-hidden border border-purple-500/40">
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm flex items-center gap-1">
                        <span>{t.name}</span>
                        {t.verified && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />}
                      </div>
                      <div className="text-xs text-slate-400">{t.role}</div>
                      <div className="text-[11px] text-purple-400 font-mono-code">{t.handle}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/20 block">
                      {t.stats}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
