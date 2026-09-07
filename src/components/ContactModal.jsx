import React, { useState, useEffect } from 'react';
import { X, Sparkles, Check, ArrowRight, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactModal({ isOpen, onClose, initialData }) {
  const [userType, setUserType] = useState('creator'); // 'creator' or 'brand'
  const [formData, setFormData] = useState({
    name: '',
    handle: '',
    email: '',
    platform: 'YouTube & TikTok',
    budget: '$1,399 (Pro Creator Tier)',
    niche: 'Desk Setup & Battlestation (like @setuprizx)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialData) {
      if (typeof initialData === 'string') {
        setFormData(prev => ({ ...prev, budget: initialData }));
      } else if (typeof initialData === 'object') {
        if (initialData.niche) {
          setFormData(prev => ({
            ...prev,
            niche: initialData.niche,
            message: `Selected Theme: ${initialData.theme}. Modules: ${Object.keys(initialData.modules || {}).filter(k => initialData.modules[k]).join(', ')}`
          }));
        }
      }
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#111224] border border-purple-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-950/80 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-950/50">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Brief Received! You're in Good Company.
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Just like our collaboration with <strong className="text-purple-300">@setuprizx</strong>, our lead web architect is reviewing your channel and preparing custom wireframe recommendations.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-md mx-auto text-left text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Next 24 Hours:</span>
              </div>
              <p>1. We review your social media and audience engagement metrics.</p>
              <p>2. We email you an interactive layout prototype preview & calendar invite.</p>
              <p>3. If approved, your custom creator site launches within 7 business days.</p>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm transition-all cursor-pointer shadow-lg shadow-purple-900/40"
            >
              Done & Return to Showcase
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* Header */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full text-[11px] font-bold bg-purple-500/20 border border-purple-500/40 text-purple-300">
                <Sparkles className="w-3 h-3 text-purple-400" />
                <span>POWERED BY FORGECRAFT CREATOR SITES</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Let's Build Your Dream <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Creator Hub</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Join creators like <strong className="text-white">@setuprizx</strong> who doubled their sponsor deal capacity with a custom digital presence.
              </p>
            </div>

            {/* Persona Switcher */}
            <div className="flex bg-[#0c0d18] p-1 rounded-xl border border-white/10">
              <button
                type="button"
                onClick={() => setUserType('creator')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  userType === 'creator'
                    ? 'bg-purple-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                I am a Creator / Streamer
              </button>
              <button
                type="button"
                onClick={() => setUserType('brand')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  userType === 'brand'
                    ? 'bg-cyan-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                I am a Brand / Advertiser
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    {userType === 'creator' ? 'Your Name / Creator Handle' : 'Contact Name & Company'} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={userType === 'creator' ? '@yourname or First Name' : 'e.g. Alex @ HardwareBrand'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="creator@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    {userType === 'creator' ? 'Primary Social Channels' : 'Target Deliverable Format'}
                  </label>
                  <select
                    value={formData.platform}
                    onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#17182c] border border-white/10 text-white text-xs focus:outline-none focus:border-purple-500 cursor-pointer"
                  >
                    <option value="Desk Setup & Battlestation (like @setuprizx)">Desk Setup & Battlestation (like @setuprizx)</option>
                    <option value="YouTube & TikTok">YouTube & TikTok</option>
                    <option value="Twitch & Live Streaming">Twitch & Live Streaming</option>
                    <option value="Cinematography & Film">Cinematography & Film</option>
                    <option value="Multi-Platform Creator Network">Multi-Platform Creator Network</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    {userType === 'creator' ? 'Project Tier / Budget' : 'Campaign Budget'}
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#17182c] border border-white/10 text-white text-xs focus:outline-none focus:border-purple-500 cursor-pointer"
                  >
                    <option value="$699 (Starter Creator Hub)">$699 (Starter Creator Hub)</option>
                    <option value="$1,399 (Pro Creator Tier - like @setuprizx)">$1,399 (Pro Creator Tier - like @setuprizx)</option>
                    <option value="$2,799 (Creator Empire & Store)">$2,799 (Creator Empire & Store)</option>
                    <option value="Custom Enterprise / Agency">Custom Enterprise / Agency</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Link to your channel / current socials & goals
                </label>
                <textarea
                  rows="3"
                  placeholder="e.g. youtube.com/@mychannel or instagram.com/myhandle. I want an interactive gear rack and media kit to pitch hardware sponsors."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-xl shadow-purple-900/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Creator Discovery Brief</span>
                </button>
                <div className="flex items-center justify-center gap-4 mt-3 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-400" /> 100% Confidential
                  </span>
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-400" /> Rapid 24hr Response
                  </span>
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-400" /> Free Architecture Mockup
                  </span>
                </div>
              </div>
            </form>

          </div>
        )}

      </div>
    </div>
  );
}
