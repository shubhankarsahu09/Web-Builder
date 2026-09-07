import React, { useState } from 'react';
import { 
  Sparkles, ExternalLink, ArrowRight, Eye, TrendingUp, 
  Users, CheckCircle2, Star, ShieldCheck, X 
} from 'lucide-react';
import { portfolioProjects, setuprizxCollabData } from '../data/creatorData';

export default function PortfolioShowcase({ onOpenCollab, onOpenModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Tech & Setups', 'Gaming & Streaming', 'Video & Film', 'Fashion & Lifestyle', 'Music & Audio'];

  const filteredProjects = selectedCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === selectedCategory);

  return (
    <section id="showcase" className="py-24 relative overflow-hidden bg-[#0a0a14]">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/10 blur-[150px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-500/20 border border-purple-500/40 text-purple-300">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>PORTFOLIO OF CREATOR SHOWCASES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Websites Built For <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">High-Impact Creators</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Explore recent custom websites engineered for content creators, hardware curators like <strong className="text-white">@setuprizx</strong>, streamers, and filmmakers.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/30'
                  : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isSetuprizx = project.id === 'setuprizx';
            return (
              <div
                key={project.id}
                className={`rounded-2xl overflow-hidden bg-[#121325] border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 shadow-xl ${
                  isSetuprizx 
                    ? 'border-purple-500/60 shadow-purple-950/70 relative ring-1 ring-purple-500/40' 
                    : 'border-white/10 hover:border-purple-500/40'
                }`}
              >
                {/* Top Image Preview with Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121325] via-black/20 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-black/70 backdrop-blur-md text-white border border-white/20">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        COLLAB SPOTLIGHT
                      </span>
                    )}
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                      {project.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="font-bold font-mono-code">{project.handle}</span>
                    <span className="text-purple-300 text-[11px] flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-emerald-400" />
                      {project.stats.deals} Deals
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.features.map((feat, idx) => (
                      <span 
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/5 text-center">
                    <div>
                      <div className="text-xs font-bold text-white">{project.stats.views}</div>
                      <div className="text-[10px] text-slate-400">Monthly</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-purple-400">{project.stats.sponsors}</div>
                      <div className="text-[10px] text-slate-400">Partners</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-emerald-400">{project.stats.deals}</div>
                      <div className="text-[10px] text-slate-400">Sponsor Lift</div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-1">
                    {isSetuprizx ? (
                      <button
                        onClick={onOpenCollab}
                        className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-purple-900/30"
                      >
                        <span>View @setuprizx Deep Dive</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-purple-400" />
                        <span>Case Study Breakdown</span>
                      </button>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Modal for Project Detail */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-[#121326] border border-purple-500/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {activeModalProject.category}
                </span>
                <span className="text-xs text-slate-400 font-mono-code">{activeModalProject.handle}</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">{activeModalProject.title}</h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">{activeModalProject.description}</p>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 h-64">
                <img 
                  src={activeModalProject.image} 
                  alt={activeModalProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                <div>
                  <div className="text-base font-bold text-white">{activeModalProject.stats.views}</div>
                  <div className="text-xs text-slate-400">Monthly Traffic</div>
                </div>
                <div>
                  <div className="text-base font-bold text-purple-400">{activeModalProject.stats.sponsors}</div>
                  <div className="text-xs text-slate-400">Brand Partners</div>
                </div>
                <div>
                  <div className="text-base font-bold text-emerald-400">{activeModalProject.stats.deals}</div>
                  <div className="text-xs text-slate-400">Inbound Close Rate</div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400">Integrated Modules</h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.features.map((f, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-200">
                      ✓ {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    setActiveModalProject(null);
                    onOpenModal();
                  }}
                  className="flex-1 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all cursor-pointer shadow-lg shadow-purple-900/30 text-center"
                >
                  Build a Similar Site For My Channel
                </button>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-3 rounded-xl bg-white/10 text-slate-300 hover:text-white text-xs font-semibold cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
