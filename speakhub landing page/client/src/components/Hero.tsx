/**
 * Hero — main landing section
 * Design: #030712 bg, cyan/blue gradient orbs, centered text, dual CTA buttons
 * Copy: AI voice receptionist messaging
 */

export default function Hero() {
  return (
    <section className="bg-[#030712] relative overflow-hidden">
      {/* Background gradient orbs — cyan/blue */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-500 via-blue-500 to-blue-700 rounded-full opacity-15 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-600 via-cyan-500 to-cyan-300 rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-36 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          {/* Badge — microphone icon */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#06b6d4] via-blue-500 to-[#3b82f6] text-white text-sm font-medium mb-8 shadow-lg">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1a4 4 0 014 4v6a4 4 0 01-8 0V5a4 4 0 014-4zm-1 17.93V21h-2v2h6v-2h-2v-2.07A8.001 8.001 0 0020 11h-2a6 6 0 01-12 0H4a8.001 8.001 0 007 6.93z" />
            </svg>
            <span>AI Voice Receptionist &bull; 24/7 &bull; Never Miss a Lead</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            Stop Losing Leads<br />to Missed Calls
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-[#94a3b8] mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Speakhub.Ai builds custom AI voice receptionists that answer every call, qualify your leads, and book appointments automatically — 24 hours a day, without a human receptionist.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#booking"
              className="bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] hover:opacity-90 text-white shadow-lg shadow-cyan-500/20 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 flex items-center gap-2 group"
            >
              Book Your Free Strategy Call
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#features"
              className="bg-[#1e293b] hover:bg-[#334155] text-white border border-[#1e293b] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200"
            >
              Hear It In Action
            </a>
          </div>

          {/* Inline stats strip */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-10">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-slate-500 text-xs mt-1">Always Answering</div>
            </div>
            <div className="w-px h-8 bg-[#1e293b]" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">&infin;</div>
              <div className="text-slate-500 text-xs mt-1">Simultaneous Calls</div>
            </div>
            <div className="w-px h-8 bg-[#1e293b]" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">&lt; 2s</div>
              <div className="text-slate-500 text-xs mt-1">Average Answer Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
