/**
 * AgentCarousel — Hero agent carousel section
 * Design: Soft gradient bg (white → lavender → purple), 4 agent profile cards
 * Center card: large, sharp, prominent with white frame + drop shadow
 * Side cards: smaller, blurred, faded (50% opacity), tucked behind center
 * Auto-rotates every 4s, arrow buttons + dot indicators
 * Responsive: side cards hidden on mobile
 */

import { useState, useEffect, useCallback } from "react";

const agents = [
  {
    name: "Julia - Receptionist Agent",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663426961619/HttwHtQ4LPRVmeWsiL3bsM/julia-receptionist_e8c1ca15.png",
  },
  {
    name: "Sarah - Sales Agent",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663426961619/HttwHtQ4LPRVmeWsiL3bsM/sarah-sales_14837fea.png",
  },
  {
    name: "Emma - Support Agent",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663426961619/HttwHtQ4LPRVmeWsiL3bsM/emma-support_a709d165.png",
  },
  {
    name: "John - Tech Support Agent",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663426961619/HttwHtQ4LPRVmeWsiL3bsM/john-techsupport-2NBKcdaUswqKmSxCh7XUcw.webp",
  },
];

export default function AgentCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % agents.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + agents.length) % agents.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  const prevIndex = (current - 1 + agents.length) % agents.length;
  const nextIndex = (current + 1) % agents.length;

  return (
    <section
      className="w-full py-20 lg:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #030712 0%, #0a0c1a 15%, #0c1a2e 40%, #0d1f3a 60%, #0a0c1a 85%, #030712 100%)",
      }}
    >
      {/* Subtle purple glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Section heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d1f3a]/80 border border-cyan-500/20 backdrop-blur-xl text-sm text-cyan-300 mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Meet Your AI Team
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 font-[family-name:var(--font-heading)]">
            AI Agents Built for Your Business
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Each agent is custom-trained on your business, your scripts, and your
            workflows — so every call sounds like your best employee.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center" style={{ minHeight: 460 }}>
          {/* Previous card — hidden on mobile */}
          <div
            className="hidden md:block absolute z-10 transition-all duration-500 ease-in-out"
            style={{ left: "2%", opacity: 0.5, filter: "blur(1px)" }}
          >
            <div className="w-[200px] rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm shadow-lg">
              <div className="h-[280px] overflow-hidden">
                <img
                  src={agents[prevIndex].image}
                  alt={agents[prevIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="py-3 px-4 bg-white/10 backdrop-blur-sm">
                <p className="text-white/70 text-sm font-medium text-center truncate">
                  {agents[prevIndex].name}
                </p>
              </div>
            </div>
          </div>

          {/* Center card — always visible */}
          <div className="relative z-20 transition-all duration-500 ease-in-out">
            {/* Info badge */}
            <div className="absolute -top-3 -left-3 z-30 w-7 h-7 rounded-full bg-white shadow-lg flex items-center justify-center">
              <span className="text-[#0d1f3a] text-xs font-bold">i</span>
            </div>

            <div className="w-[280px] sm:w-[300px] rounded-2xl overflow-hidden bg-white shadow-2xl shadow-cyan-900/30">
              <div className="h-[370px] sm:h-[400px] overflow-hidden">
                <img
                  src={agents[current].image}
                  alt={agents[current].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="py-4 px-5 bg-white">
                <p className="text-[#0d1f3a] text-base font-semibold text-center">
                  {agents[current].name}
                </p>
              </div>
            </div>
          </div>

          {/* Next card — hidden on mobile */}
          <div
            className="hidden md:block absolute z-10 transition-all duration-500 ease-in-out"
            style={{ right: "2%", opacity: 0.5, filter: "blur(1px)" }}
          >
            <div className="w-[200px] rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm shadow-lg">
              <div className="h-[280px] overflow-hidden">
                <img
                  src={agents[nextIndex].image}
                  alt={agents[nextIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="py-3 px-4 bg-white/10 backdrop-blur-sm">
                <p className="text-white/70 text-sm font-medium text-center truncate">
                  {agents[nextIndex].name}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Controls: arrows + dots */}
        <div className="flex items-center justify-center gap-5 mt-8">
          {/* Left arrow */}
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all duration-200"
            aria-label="Previous agent"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {agents.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-cyan-400 w-6"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to agent ${index + 1}`}
              />
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all duration-200"
            aria-label="Next agent"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
