import React, { useState } from 'react';
import { Sparkles, Menu, X, ArrowRight, ShieldCheck, Monitor } from 'lucide-react';

export default function Navbar({ onOpenModal, onOpenCollab }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top Collab Announcement Bar */}
      <div className="bg-gradient-to-r from-purple-950/90 via-indigo-950/90 to-purple-950/90 border-b border-purple-500/20 text-xs sm:text-sm py-2 px-4 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-hidden text-slate-300">
            <span className="flex h-2 w-2 relative flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="font-semibold text-purple-300 flex-shrink-0">RECENT COLLABORATION:</span>
            <span className="truncate">
              We teamed up with <strong className="text-white font-medium">@setuprizx</strong> to build their aesthetic battlestation & sponsor showcase hub!
            </span>
          </div>
          <button
            onClick={onOpenCollab}
            className="flex-shrink-0 text-purple-300 hover:text-white font-medium inline-flex items-center gap-1 transition-colors group cursor-pointer text-xs underline underline-offset-4"
          >
            <span>View Collab Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-9 z-40 bg-[#08080f]/85 backdrop-blur-xl border-b border-white/10 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-500 p-[1px] shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all">
              <div className="w-full h-full bg-[#0d0d16] rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 font-display">
                FORGECRAFT <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">CREATOR</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase text-slate-400 font-mono-code">
                Bespoke Sites & Media Kits
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#showcase" className="hover:text-purple-300 transition-colors">Creator Work</a>
            <button 
              onClick={onOpenCollab}
              className="text-purple-300 hover:text-white flex items-center gap-1.5 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/30 transition-colors cursor-pointer"
            >
              <Monitor className="w-3.5 h-3.5 text-purple-400" />
              <span>@setuprizx Collab</span>
            </button>
            <a href="#services" className="hover:text-purple-300 transition-colors">What We Build</a>
            <a href="#calculator" className="hover:text-purple-300 transition-colors">Ad Calculator</a>
            <a href="#customizer" className="hover:text-purple-300 transition-colors">Site Builder Demo</a>
            <a href="#pricing" className="hover:text-purple-300 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-purple-300 transition-colors">FAQ</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Trusted by Top Creators</span>
            </div>
            <button
              onClick={onOpenModal}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-xl group bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-500 hover:text-white text-white shadow-lg shadow-purple-900/30 hover:shadow-purple-700/50 transition-all duration-300 cursor-pointer"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-200 bg-transparent rounded-xl flex items-center gap-2 group-hover:bg-opacity-0">
                <span>Build My Creator Site</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white border border-white/10"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="md:hidden border-b border-white/10 bg-[#0c0c16]/95 backdrop-blur-2xl px-6 py-6 space-y-4">
            <div className="flex flex-col space-y-3 text-base font-medium text-slate-200">
              <a 
                href="#showcase" 
                onClick={() => setMobileOpen(false)}
                className="hover:text-purple-400 py-1"
              >
                Creator Work & Showcase
              </a>
              <button 
                onClick={() => { setMobileOpen(false); onOpenCollab(); }}
                className="text-left text-purple-300 hover:text-purple-200 py-1 flex items-center gap-2"
              >
                <Monitor className="w-4 h-4 text-purple-400" />
                <span>Featured Collab: @setuprizx</span>
              </button>
              <a 
                href="#services" 
                onClick={() => setMobileOpen(false)}
                className="hover:text-purple-400 py-1"
              >
                What We Build (Websites & Ad Portals)
              </a>
              <a 
                href="#calculator" 
                onClick={() => setMobileOpen(false)}
                className="hover:text-purple-400 py-1"
              >
                Media Kit & Ad Rate Calculator
              </a>
              <a 
                href="#customizer" 
                onClick={() => setMobileOpen(false)}
                className="hover:text-purple-400 py-1"
              >
                Interactive Live Site Customizer
              </a>
              <a 
                href="#pricing" 
                onClick={() => setMobileOpen(false)}
                className="hover:text-purple-400 py-1"
              >
                Transparent Pricing
              </a>
              <a 
                href="#faq" 
                onClick={() => setMobileOpen(false)}
                className="hover:text-purple-400 py-1"
              >
                Frequently Asked Questions
              </a>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => { setMobileOpen(false); onOpenModal(); }}
                className="w-full py-3 px-4 rounded-xl font-semibold text-center text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2"
              >
                <span>Build My Creator Site</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
