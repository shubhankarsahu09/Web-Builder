import React, { useState } from 'react';
import { 
  ArrowRight, Check, CheckCircle2, ChevronRight, 
  ExternalLink, Laptop, Menu, Monitor, Play, ShieldCheck, Sparkles, TrendingUp, X 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  const [activeTab, setActiveTab] = useState('showcase'); // 'showcase' or 'advertising'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    handle: '',
    contact: '',
    creatorNiche: 'Tech & Desk Setups',
    primaryGoal: 'Both (Showcase + Brand Deals)'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 85,
      spread: 65,
      origin: { y: 0.65 }
    });
    setIsSubmitted(true);
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToForm = () => {
    setMobileMenuOpen(false);
    document.getElementById('creator-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] font-sans antialiased selection:bg-[#0071e3] selection:text-white">
      
      {/* Apple-style Translucent Blur Navbar */}
      <header className="sticky top-0 z-50 apple-blur-nav border-b border-black/[0.06] transition-all">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 text-sm sm:text-base font-semibold tracking-tight text-[#1d1d1f] shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="w-6 h-6 rounded-md bg-[#1d1d1f] text-white flex items-center justify-center text-xs font-bold shadow-xs">
              F
            </div>
            <span>Forge Creator</span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-[#6e6e73]">
            <button
              onClick={() => scrollToSection('home')}
              className="px-3 py-1.5 rounded-full hover:text-[#1d1d1f] hover:bg-black/[0.04] transition-all cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-3 py-1.5 rounded-full hover:text-[#1d1d1f] hover:bg-black/[0.04] transition-all cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('collaborators')}
              className="px-3 py-1.5 rounded-full hover:text-[#1d1d1f] hover:bg-black/[0.04] transition-all cursor-pointer"
            >
              Recent Collaborators
            </button>
          </nav>

          {/* Right Action & Mobile Hamburger */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={scrollToForm}
              className="text-xs sm:text-sm font-medium px-4 py-1.5 sm:py-2 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white transition-all cursor-pointer shadow-sm shadow-[#0071e3]/20 shrink-0 active:scale-95"
            >
              Start Build
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg text-[#1d1d1f] hover:bg-black/[0.05] transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-black/[0.08] px-4 pt-3 pb-5 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left px-3 py-2.5 rounded-xl text-sm font-medium text-[#1d1d1f] hover:bg-black/[0.04] transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left px-3 py-2.5 rounded-xl text-sm font-medium text-[#1d1d1f] hover:bg-black/[0.04] transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('collaborators')}
                className="text-left px-3 py-2.5 rounded-xl text-sm font-medium text-[#1d1d1f] hover:bg-black/[0.04] transition-colors"
              >
                Recent Collaborators
              </button>
            </div>

            <div className="pt-2 border-t border-black/[0.06]">
              <button
                onClick={scrollToForm}
                className="w-full py-2.5 rounded-xl text-sm font-semibold bg-[#0071e3] hover:bg-[#0077ed] text-white transition-all shadow-sm shadow-[#0071e3]/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Start Build</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-20 sm:pb-28 space-y-16 sm:space-y-24">
        
        {/* Apple-Style Hero */}
        <section id="home" className="text-center max-w-3xl mx-auto space-y-5 sm:space-y-6 scroll-mt-20">
          
          {/* Eyebrow badge */}
          <div className="inline-flex max-w-full items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-[#f5f5f7] border border-black/[0.06] text-[#6e6e73] animate-gentle-float">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] shrink-0" />
            <span className="truncate">Websites & Media Portals for <strong className="text-[#1d1d1f]">Top Creators</strong></span>
          </div>

          {/* Main Headline */}
          <div className="space-y-1.5 sm:space-y-2">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1d1d1f] leading-[1.12] sm:leading-[1.08]">
              Websites for creators.
            </h1>
            <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#86868b] leading-[1.14] sm:leading-[1.08]">
              Showcase work. Close brand deals.
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg md:text-xl text-[#6e6e73] max-w-xl mx-auto font-normal leading-relaxed pt-1 sm:pt-2 px-2 sm:px-0">
            We build bespoke digital portfolios and automated brand advertising hubs. Built and launched in 7 days.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 pt-2 sm:pt-3 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto justify-center px-6 py-3 rounded-full text-sm font-medium bg-[#0071e3] hover:bg-[#0077ed] text-white transition-all shadow-md shadow-[#0071e3]/15 cursor-pointer flex items-center gap-2 group active:scale-[0.98]"
            >
              <span>Build Your Website</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <a
              href="#showcase"
              className="w-full sm:w-auto justify-center px-6 py-3 rounded-full text-sm font-medium bg-[#f5f5f7] hover:bg-[#e8e8ed] text-[#1d1d1f] transition-all cursor-pointer flex items-center gap-1.5 active:scale-[0.98]"
            >
              <span>View Featured Showcase</span>
              <ChevronRight className="w-4 h-4 text-[#86868b]" />
            </a>
          </div>
        </section>

        {/* Featured Collaboration Card */}
        <section id="collaborators" className="space-y-4 scroll-mt-20">
          <div id="showcase" />
          <div className="text-center space-y-1 pb-1 sm:pb-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#0071e3]">Featured Showcase</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight">
              Curated Battlestation & Studio Hub
            </h2>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl border border-black/[0.08] shadow-[0_12px_44px_rgba(0,0,0,0.04)] overflow-hidden transition-all">
            
            {/* Top Toolbar / Segmented Control */}
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-black/[0.06] bg-[#fbfbfd] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-black/10 shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=150&q=80" 
                    alt="creator avatar" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1d1d1f]">studiocraft.space</div>
                  <div className="text-[11px] text-[#86868b]">Desk Aesthetics & Hardware Curation</div>
                </div>
              </div>

              {/* iOS-style Segmented Control */}
              <div className="w-full sm:w-auto bg-[#eeeeee] p-1 rounded-full flex items-center text-xs font-medium">
                <button
                  onClick={() => setActiveTab('showcase')}
                  className={`flex-1 sm:flex-initial text-center px-3 sm:px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                    activeTab === 'showcase' 
                      ? 'bg-white text-[#1d1d1f] shadow-sm font-semibold' 
                      : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                  }`}
                >
                  Work Showcase
                </button>
                <button
                  onClick={() => setActiveTab('advertising')}
                  className={`flex-1 sm:flex-initial text-center px-3 sm:px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                    activeTab === 'advertising' 
                      ? 'bg-white text-[#1d1d1f] shadow-sm font-semibold' 
                      : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                  }`}
                >
                  Advertising Hub
                </button>
              </div>
            </div>

            {/* Content Display */}
            {activeTab === 'showcase' ? (
              <div className="p-4 sm:p-6 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                <div className="md:col-span-7 relative rounded-xl sm:rounded-2xl overflow-hidden border border-black/5 shadow-sm group">
                  <img 
                    src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80" 
                    alt="Battlestation showcase" 
                    className="w-full h-52 xs:h-64 sm:h-72 md:h-80 object-cover transform group-hover:scale-102 transition-transform duration-500" 
                  />
                  <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 bg-black/60 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full text-white text-[11px] sm:text-xs font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#0071e3]" />
                    <span>Curated Battlestation Showcase</span>
                  </div>
                </div>

                <div className="md:col-span-5 space-y-3 sm:space-y-4">
                  <div className="space-y-0.5 sm:space-y-1">
                    <span className="text-xs font-semibold text-[#86868b] uppercase tracking-wider">Client Results</span>
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#1d1d1f] tracking-tight">+340%</div>
                    <p className="text-xs text-[#6e6e73]">Inbound sponsor conversion increase after launch</p>
                  </div>

                  <blockquote className="text-xs sm:text-sm text-[#424245] italic leading-relaxed border-l-2 border-[#0071e3] pl-3">
                    "Before this, we pitched brands with PDFs. Now, brands immediately treat us like an elite creative agency."
                  </blockquote>
                  
                  <div className="text-xs font-medium text-[#1d1d1f]">
                    — Studio Curator <span className="text-[#86868b] font-normal">• Verified Client</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-4 sm:p-6 md:p-10 space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#f5f5f7] border border-black/[0.04] space-y-1 text-center">
                    <div className="text-xs text-[#86868b]">Monthly Reach</div>
                    <div className="text-xl sm:text-2xl font-bold text-[#1d1d1f]">145,000+</div>
                    <div className="text-[11px] text-[#34c759] font-medium">Verified Audience</div>
                  </div>
                  <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#f5f5f7] border border-black/[0.04] space-y-1 text-center">
                    <div className="text-xs text-[#86868b]">Average Deal</div>
                    <div className="text-xl sm:text-2xl font-bold text-[#0071e3]">$4,800</div>
                    <div className="text-[11px] text-[#6e6e73]">Up from $1,200</div>
                  </div>
                  <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#f5f5f7] border border-black/[0.04] space-y-1 text-center">
                    <div className="text-xs text-[#86868b]">Brand Inquiries</div>
                    <div className="text-xl sm:text-2xl font-bold text-[#1d1d1f]">Automated</div>
                    <div className="text-[11px] text-[#6e6e73]">Filtered by budget</div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* 3 Clean Apple Bento Features */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 scroll-mt-20">
          <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-2.5 sm:space-y-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[#f5f5f7] flex items-center justify-center text-xs sm:text-sm font-semibold text-[#1d1d1f]">
              01
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#1d1d1f] tracking-tight">Showcase Your Work.</h3>
            <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
              4K visual galleries for videos, battlestations, and gear without algorithmic compression or ads.
            </p>
          </div>

          <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-2.5 sm:space-y-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[#f5f5f7] flex items-center justify-center text-xs sm:text-sm font-semibold text-[#0071e3]">
              02
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#1d1d1f] tracking-tight">Close Brand Sponsors.</h3>
            <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
              Live media kit and automated inquiry gate that filters out lowballers and closes 4-to-5 figure deals.
            </p>
          </div>

          <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-2.5 sm:space-y-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[#f5f5f7] flex items-center justify-center text-xs sm:text-sm font-semibold text-[#34c759]">
              03
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#1d1d1f] tracking-tight">Launched in 7 Days.</h3>
            <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
              Zero coding. We handle design, high-speed hosting, custom domain connection, and mobile polish.
            </p>
          </div>
        </section>

        {/* The Star of the Page: Apple-Style Minimal Form */}
        <section id="creator-form" className="max-w-xl mx-auto space-y-4 scroll-mt-20">
          <div className="text-center space-y-1 px-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#0071e3]">Get Started</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight">
              Request Your Creator Website
            </h2>
            <p className="text-xs sm:text-sm text-[#6e6e73]">
              Fill out this simple form and we'll send you a custom concept within 24 hours.
            </p>
          </div>

          <div className="bg-white p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-black/[0.08] shadow-[0_16px_48px_rgba(0,0,0,0.06)]">
            {isSubmitted ? (
              <div className="text-center py-6 sm:py-8 space-y-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#34c759]/10 text-[#34c759] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f]">We received your details!</h3>
                  <p className="text-xs sm:text-sm text-[#6e6e73] max-w-sm mx-auto">
                    We will review your channel and demographic metrics, and reply with a tailored concept within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-semibold text-[#0071e3] hover:underline pt-2 cursor-pointer"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                {/* Handle / Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#1d1d1f] block">
                    Your Name or Creator Handle
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="@yourhandle or Alex"
                    value={formData.handle}
                    onChange={(e) => setFormData({ ...formData, handle: e.target.value })}
                    className="w-full px-3.5 sm:px-4 py-3 rounded-xl bg-[#f5f5f7] border border-transparent focus:border-[#0071e3] focus:bg-white text-[#1d1d1f] text-base sm:text-sm outline-none transition-all placeholder-[#86868b]"
                  />
                </div>

                {/* Email / Instagram / Discord */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#1d1d1f] block">
                    Contact Email or Social Link
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="creator@email.com or @handle"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full px-3.5 sm:px-4 py-3 rounded-xl bg-[#f5f5f7] border border-transparent focus:border-[#0071e3] focus:bg-white text-[#1d1d1f] text-base sm:text-sm outline-none transition-all placeholder-[#86868b]"
                  />
                </div>

                {/* Creator Niche */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#1d1d1f] block">
                    What do you create?
                  </label>
                  <select
                    value={formData.creatorNiche}
                    onChange={(e) => setFormData({ ...formData, creatorNiche: e.target.value })}
                    className="w-full px-3.5 sm:px-4 py-3 rounded-xl bg-[#f5f5f7] border border-transparent focus:border-[#0071e3] focus:bg-white text-[#1d1d1f] text-base sm:text-sm outline-none transition-all cursor-pointer"
                  >
                    <option value="Tech & Desk Setups">Tech & Desk Setups</option>
                    <option value="Gaming & Streaming (Twitch / YouTube)">Gaming & Streaming (Twitch / YouTube)</option>
                    <option value="Cinematography & Video Production">Cinematography & Video Production</option>
                    <option value="Lifestyle, Tech & Fashion">Lifestyle, Tech & Fashion</option>
                    <option value="Brand Sponsor / Advertiser">Brand Sponsor / Advertiser</option>
                  </select>
                </div>

                {/* Primary Goal Pill Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#1d1d1f] block">
                    Primary Goal
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {['Showcase Work', 'Brand Deals & Ads', 'Both'].map((goal) => (
                      <button
                        key={goal}
                        type="button"
                        onClick={() => setFormData({ ...formData, primaryGoal: goal })}
                        className={`py-2.5 px-3 rounded-xl text-xs font-medium border transition-all cursor-pointer text-center min-h-[42px] flex items-center justify-center leading-tight active:scale-[0.98] ${
                          formData.primaryGoal === goal
                            ? 'bg-[#1d1d1f] text-white border-[#1d1d1f] shadow-sm'
                            : 'bg-[#f5f5f7] text-[#6e6e73] border-transparent hover:text-[#1d1d1f]'
                        }`}
                      >
                        {goal}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full text-sm font-semibold bg-[#0071e3] hover:bg-[#0077ed] text-white transition-all shadow-md shadow-[#0071e3]/20 flex items-center justify-center gap-2 cursor-pointer group active:scale-[0.99]"
                  >
                    <span>Send Inquiry & Get Concept</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-3 text-[11px] text-[#86868b] text-center">
                    <span className="flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-[#34c759]" /> 24-hr turnaround
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-[#34c759]" /> Free wireframe preview
                    </span>
                  </div>
                </div>

              </form>
            )}
          </div>
        </section>

      </main>

      {/* Apple-Style Minimal Footer */}
      <footer className="border-t border-black/[0.06] bg-[#f5f5f7] py-6 sm:py-8 text-center text-xs text-[#86868b]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-2">
          <p>© {new Date().getFullYear()} Forge Creator Sites. All rights reserved.</p>
          <p>Bespoke digital portfolios and automated brand advertising hubs.</p>
        </div>
      </footer>

    </div>
  );
}
