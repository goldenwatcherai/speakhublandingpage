/**
 * Features — 6-card grid
 * Design: #0d1117 bg, glass-morphism cards with cyan→blue gradient icons
 * Copy: AI voice receptionist capabilities
 */

const features = [
  {
    title: "Answers Every Call Instantly",
    description:
      "Never sends a caller to voicemail. Your AI picks up within 1\u20132 rings, around the clock, 365 days a year \u2014 no exceptions.",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </>
    ),
    delay: "0s",
  },
  {
    title: "Books Appointments Automatically",
    description:
      "Syncs with your live calendar. Books, reschedules, and confirms appointments in real time with no human involvement and zero double-bookings.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    ),
    delay: "0.1s",
  },
  {
    title: "Qualifies Every Lead",
    description:
      "Asks the right questions, identifies serious buyers, and captures their details \u2014 so you only spend time on prospects worth calling back.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    ),
    delay: "0.2s",
  },
  {
    title: "Handles Unlimited Calls at Once",
    description:
      "No busy signals, no hold queues, no frustrated callers. Every person who calls gets an immediate, professional answer no matter how busy you are.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
    delay: "0.3s",
  },
  {
    title: "Logs Everything to Your CRM",
    description:
      "Every call is transcribed, tagged by intent, and automatically pushed to GoHighLevel, HubSpot, Salesforce, or your CRM of choice.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    ),
    delay: "0.4s",
  },
  {
    title: "Seamless Human Handoff",
    description:
      "When a caller needs a real person, the AI transfers them gracefully \u2014 introducing the caller and context before connecting, so nothing feels dropped.",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </>
    ),
    delay: "0.5s",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#0d1117] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d1117]/80 border border-[#1e293b]/50 backdrop-blur-xl text-sm text-[#94a3b8] mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Your Business, Always Open
          </h2>
          <p className="text-[#94a3b8] text-lg lg:text-xl max-w-2xl mx-auto">
            Every inbound call handled professionally — whether it's 2 PM or 2 AM, your busiest day of the year, or when your whole team is unavailable.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#0d1117]/80 border border-[#1e293b]/50 backdrop-blur-xl rounded-xl p-8 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: feature.delay }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#06b6d4] via-blue-500 to-[#3b82f6] rounded-lg flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {feature.icon}
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-[#94a3b8] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
