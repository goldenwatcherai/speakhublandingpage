/**
 * FAQ — accordion section
 * Design: #0d1117 bg, glass cards, chevron toggle
 * Copy: AI voice receptionist Q&As
 */

import { useState } from "react";

const faqs = [
  {
    question: "Is this a real person or an AI?",
    answer:
      "It\u2019s an AI \u2014 a sophisticated one, trained specifically on your business. Most callers don\u2019t realize they\u2019re speaking with an AI because the conversation sounds completely natural. You have full control over whether and how to disclose it, and Speakhub.Ai configures deployments in line with your state\u2019s requirements.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most simple setups go live in 3\u20135 business days. More complex deployments \u2014 with multiple integrations, custom scripts, and CRM connections \u2014 typically take 1\u20133 weeks. Speakhub.Ai handles the entire build. You don\u2019t need any technical knowledge whatsoever.",
  },
  {
    question: "What if the AI can\u2019t answer something?",
    answer:
      "The AI is built with smart escalation paths. If a caller asks something outside its knowledge base, it gracefully acknowledges the gap and either transfers to a live team member or offers to take a message and schedule a callback. It never guesses or fabricates information.",
  },
  {
    question: "What integrations are supported?",
    answer:
      "The AI connects with Google Calendar, Outlook, Calendly, Acuity, GoHighLevel, HubSpot, Salesforce, Zoho, Twilio, RingCentral, Zapier, Make.com, and many more. Your current tech stack is reviewed during the strategy call to confirm exactly what gets connected.",
  },
  {
    question: "What types of businesses is this built for?",
    answer:
      "Any service-based business that receives inbound calls \u2014 law firms, HVAC and plumbing companies, real estate agencies, salons, spas, restaurants, insurance agencies, financial advisors, and more. If missed calls are costing you leads, there\u2019s a strong fit.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#0d1117] py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-[#94a3b8] text-lg">
            Straight answers about how Speakhub.Ai works and what to expect.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#0d1117]/80 border border-[#1e293b]/50 backdrop-blur-xl rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 text-white font-medium hover:bg-white/5 transition-colors"
              >
                <span className="text-left">{faq.question}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-[#94a3b8] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
