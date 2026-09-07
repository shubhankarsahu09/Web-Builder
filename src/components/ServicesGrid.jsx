import React from 'react';
import { 
  Layout, DollarSign, Megaphone, ShoppingBag, Globe, Zap, 
  CheckCircle2, ArrowRight, Video, Sparkles, Sliders 
} from 'lucide-react';
import { servicesData } from '../data/creatorData';

const iconMap = {
  Layout: Layout,
  DollarSign: DollarSign,
  Megaphone: Megaphone,
  ShoppingBag: ShoppingBag,
  Globe: Globe,
  Zap: Zap,
};

export default function ServicesGrid({ onOpenModal }) {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 blur-[140px] -z-10 rounded-full" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-600/10 blur-[140px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>DESIGNED EXCLUSIVELY FOR CONTENT CREATORS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need To Showcase Work &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
              Close High-Dollar Sponsors
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            We don't build generic corporate templates. We build bespoke creator engines designed from the ground up for video producers, streamers, hardware reviewers, and digital influencers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Layout;
            return (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-[#101120] border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-xl hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  <div className="pt-2 space-y-2 border-t border-white/5">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={onOpenModal}
                    className="text-xs font-semibold text-purple-400 hover:text-white inline-flex items-center gap-1.5 transition-colors group-hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    <span>Request this module</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature comparison banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-[#121326] to-cyan-950/30 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <h4 className="text-xl font-bold text-white">
              Ready to replace your link in bio with an enterprise creator hub?
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl">
              From desk setup curators like <strong className="text-white">@setuprizx</strong> to top streamers and filmmakers, our custom web builds deliver an immediate return on investment.
            </p>
          </div>
          <button
            onClick={onOpenModal}
            className="flex-shrink-0 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:opacity-90 shadow-lg shadow-purple-900/40 transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Book a Creator Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
