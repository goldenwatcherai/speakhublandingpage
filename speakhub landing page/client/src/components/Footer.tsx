/**
 * Footer — footer with brand, nav links, legal links, copyright
 * Design: #030712 bg, border-t #1e293b, centered on mobile, row on desktop
 */

import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-[#1e293b] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold text-white font-[family-name:var(--font-heading)]">
              Speakhub.Ai
            </span>
          </div>
          <div className="flex items-center gap-8">
            <a
              href="#booking"
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              Services
            </a>
            <a href="#features" className="text-slate-400 hover:text-white text-sm transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-slate-400 hover:text-white text-sm transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-slate-400 hover:text-white text-sm transition-colors">
              FAQ
            </a>
          </div>
          <p className="text-slate-500 text-sm">&copy; 2026 Speakhub.Ai. All rights reserved.</p>
        </div>
        <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-[#1e293b]">
          <Link
            href="/privacy-policy"
            className="text-[#94a3b8] hover:text-white text-sm transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-and-conditions"
            className="text-[#94a3b8] hover:text-white text-sm transition-colors"
          >
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
