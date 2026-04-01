/**
 * LegalLayout — shared layout for Privacy Policy and Terms & Conditions pages
 * Design: matches main landing page — #030712 bg, Space Grotesk headings, Inter body
 * Navbar: brand left, "Back to Home" CTA right
 * Footer: copyright + links to privacy/terms
 */

import { Link } from "wouter";

interface LegalLayoutProps {
  children: React.ReactNode;
}

export default function LegalLayout({ children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#030712]">
      {/* Navbar */}
      <nav className="bg-[#030712] border-b border-[#1e293b] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white font-[family-name:var(--font-heading)]">
            Speakhub.Ai
          </Link>
          <Link
            href="/"
            className="bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-all duration-200"
          >
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Page content */}
      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 pb-24 w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#030712] border-t border-[#1e293b] py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#475569] text-sm mb-3">&copy; 2026 Speakhub.Ai. All rights reserved.</p>
          <div className="flex items-center justify-center gap-6">
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
    </div>
  );
}
