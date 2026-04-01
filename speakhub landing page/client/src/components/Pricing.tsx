/**
 * Pricing — 3-column pricing cards
 * Design: #030712 bg, glass cards, middle card highlighted with cyan ring + scale
 * Copy: AI voice receptionist tiers
 */

const plans = [
  {
    name: "Starter",
    description: "Ideal for solo operators and small teams",
    popular: false,
    features: [
      "24/7 AI call answering",
      "Appointment booking & confirmation",
      "FAQ & service inquiry handling",
      "Basic lead capture & logging",
      "Local or toll-free number included",
      "Up to 500 calls/month",
    ],
  },
  {
    name: "Professional",
    description: "Built for growing service businesses",
    popular: true,
    features: [
      "Everything in Starter",
      "Unlimited simultaneous calls",
      "Advanced lead qualification scripts",
      "Custom AI persona & brand voice",
      "Multi-calendar & CRM integration",
      "Post-call SMS/email automation",
      "Workflow trigger automation",
    ],
  },
  {
    name: "Enterprise",
    description: "For high-volume and multi-location operations",
    popular: false,
    features: [
      "Everything in Professional",
      "Multi-location call routing",
      "Multilingual AI configuration",
      "Custom escalation & transfer logic",
      "Dedicated account manager",
      "Ongoing transcript review & optimization",
      "Priority support & SLA guarantee",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#030712] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d1117]/80 border border-[#1e293b]/50 backdrop-blur-xl text-sm text-[#94a3b8] mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Straightforward Investment, Immediate ROI
          </h2>
          <p className="text-[#94a3b8] text-lg lg:text-xl max-w-2xl mx-auto">
            Every build is custom-scoped to your call volume, integrations, and business complexity. Here's what most clients choose.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-[#0d1117]/80 border backdrop-blur-xl rounded-xl p-8 relative transition-all duration-300 ${
                plan.popular
                  ? "border-[#1e293b]/50 ring-2 ring-[#06b6d4] scale-105 shadow-xl"
                  : "border-[#1e293b]/50 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#06b6d4] via-blue-500 to-[#3b82f6] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-[#94a3b8] text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-1 mb-8 border-[#1e293b] border-t pt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 py-2">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#94a3b8]">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className="block text-center bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] hover:opacity-90 text-white shadow-lg shadow-cyan-500/20 px-6 py-3.5 rounded-xl font-semibold transition-all duration-200"
              >
                Book a Free Strategy Call
              </a>
            </div>
          ))}
        </div>

        {/* Pricing note */}
        <p className="text-slate-500 text-sm text-center mt-8">
          Exact pricing is reviewed on your free strategy call. Most clients find the investment is a fraction of what they were spending on a human receptionist.
        </p>
      </div>
    </section>
  );
}
