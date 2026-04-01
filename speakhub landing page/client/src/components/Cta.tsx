/**
 * CTA — call-to-action section
 * Design: #030712 bg with cyan/blue gradient overlay + large blur orb
 * Copy: AI voice receptionist urgency messaging
 */

export default function Cta() {
  return (
    <section className="bg-[#030712] py-24 lg:py-32 relative overflow-hidden">
      {/* Background effects — cyan/blue */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-600 to-blue-800 opacity-15" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-b from-cyan-400 via-blue-500 to-blue-700 rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative animate-fade-up">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Your Next Customer Is Calling Right Now
        </h2>
        <p className="text-lg lg:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Every missed call is a lead your competitor just picked up. Book a free strategy call and we'll show you exactly what an AI receptionist would look like for your business — no pressure, no commitment.
        </p>
        <a
          href="#booking"
          className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-100 transition-all duration-200 shadow-xl group"
        >
          Book My Free Strategy Call
          <svg
            className="w-5 h-5 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
