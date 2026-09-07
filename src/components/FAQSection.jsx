import React, { useState } from 'react';
import { Sparkles, ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { faqItems } from '../data/creatorData';

export default function FAQSection({ onOpenModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#07070d]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-500/20 border border-purple-500/40 text-purple-300">
            <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
            <span>ANSWERS FOR CREATORS & AGENCIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Questions</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Everything you need to know about building your creator showcase site, advertising portals, and our workflow.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-[#121326] border-purple-500/50 shadow-lg shadow-purple-950/40' 
                    : 'bg-[#0e0f1e] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-bold text-base sm:text-lg text-white">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-purple-600/30 text-purple-300' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-[#111226] to-cyan-950/30 border border-purple-500/30 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">Have a special question about your channel or agency?</h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Chat directly with our web architect team. We will review your current socials, YouTube, or desk setup and give you custom layout recommendations for free.
          </p>
          <button
            onClick={onOpenModal}
            className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:opacity-90 shadow-lg shadow-purple-900/40 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Ask a Question or Request a Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
