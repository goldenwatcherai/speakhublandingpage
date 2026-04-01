/**
 * Navbar — sticky top navigation
 * Design: #030712 bg, border #1e293b, cyan→blue gradient CTA
 * Typography: Space Grotesk for brand, Inter for links
 */

import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-[#030712]/95 border-b border-[#1e293b] sticky top-0 z-50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <span className="text-xl font-bold text-white font-[family-name:var(--font-heading)]">
              Speakhub.Ai
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
            >
              Features
            </a>
            <a
              href="#industries"
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
            >
              Industries
            </a>
            <a
              href="#pricing"
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
            >
              FAQ
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="#booking"
              className="bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] hover:opacity-90 text-white shadow-lg shadow-cyan-500/20 px-3 py-2 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap"
            >
              Book a Call
              <span className="hidden sm:inline"> — Free Strategy</span>
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-slate-400 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#1e293b] pt-4 flex flex-col gap-4">
            <a
              href="#features"
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Features
            </a>
            <a
              href="#industries"
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Industries
            </a>
            <a
              href="#pricing"
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              FAQ
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
