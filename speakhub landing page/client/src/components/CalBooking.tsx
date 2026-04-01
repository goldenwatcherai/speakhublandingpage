/**
 * CalBooking — Cal.com inline embed booking section
 * Uses @calcom/embed-react to embed the scheduling widget
 * Cal link: speakhub.ai/discover
 */

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalBooking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          dark: {
            "cal-brand": "#06b6d4",
          },
          light: {
            "cal-brand": "#06b6d4",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section id="booking" className="bg-[#0d1117] py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Book Your Free Strategy Call
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Pick a time that works for you. We'll walk through your current call
            flow and show you exactly how an AI receptionist would work for your
            business.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden border border-[#1e293b]/50" style={{ minHeight: 500 }}>
          <Cal
            calLink="speakhub.ai/discover"
            style={{ width: "100%", height: "100%", overflow: "auto", minHeight: 500 }}
            config={{
              layout: "month_view",
              theme: "dark",
            }}
          />
        </div>
      </div>
    </section>
  );
}
