/**
 * Terms & Conditions — full legal page
 * Design: #030712 bg, cyan section labels, slate body text
 * 11 sections with expanded professional legal prose
 */

import { Link } from "wouter";
import LegalLayout from "@/components/LegalLayout";

function SectionLabel({ number }: { number: string }) {
  return (
    <span className="text-xs font-semibold text-[#06b6d4] uppercase tracking-widest block mb-2">
      Section {number}
    </span>
  );
}

export default function TermsAndConditions() {
  return (
    <LegalLayout>
      <h1 className="text-4xl font-bold text-white mb-3 font-[family-name:var(--font-heading)]">
        Terms &amp; Conditions
      </h1>
      <p className="text-sm text-[#475569] mb-12">Effective Date: March 15, 2026</p>

      {/* Section 1 */}
      <section className="border-b border-[#1e293b] pb-8 mb-8">
        <SectionLabel number="01" />
        <h2 className="text-lg font-semibold text-white mb-4 font-[family-name:var(--font-heading)]">
          Service Description
        </h2>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          Speakhub.Ai provides AI voice receptionist solutions, automation consulting services, and automated SMS notifications related to scheduled consultations and appointments. Our services are designed to help businesses answer inbound calls, qualify leads, book appointments, and automate follow-up communications using advanced artificial intelligence technology.
        </p>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          All SMS messages sent by Speakhub.Ai are strictly transactional in nature. No promotional, marketing, or advertising messages will be sent via SMS at any time.
        </p>
        <p className="text-[#94a3b8] leading-relaxed">
          Services are delivered under a custom engagement that is scoped during a free strategy call. The strategy call is provided at no cost and with no obligation. No purchase is required to receive an initial consultation, and the scope, pricing, and timeline of any engagement are agreed upon mutually before any work begins.
        </p>
      </section>

      {/* Section 2 */}
      <section className="border-b border-[#1e293b] pb-8 mb-8">
        <SectionLabel number="02" />
        <h2 className="text-lg font-semibold text-white mb-4 font-[family-name:var(--font-heading)]">
          Message Frequency and Costs
        </h2>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          The frequency of SMS messages you receive from Speakhub.Ai varies based on the number of scheduled appointments and consultation activity associated with your account. Messages are sent only in connection with active bookings, confirmations, reminders, and follow-up communications.
        </p>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          Standard message and data rates may apply based on your mobile carrier and plan. Speakhub.Ai does not charge separately for SMS communications — any messaging costs incurred are determined solely by your carrier's standard rates.
        </p>
      </section>

      {/* Section 3 */}
      <section className="border-b border-[#1e293b] pb-8 mb-8">
        <SectionLabel number="03" />
        <h2 className="text-lg font-semibold text-white mb-4 font-[family-name:var(--font-heading)]">
          User Consent
        </h2>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          By providing your phone number when booking a consultation or submitting an inquiry through our website, you consent to receive automated SMS messages from Speakhub.Ai. These messages may include appointment confirmations, scheduling reminders, and follow-up communications related to your inquiry or engagement.
        </p>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          Consent to receive SMS messages is not required as a condition of purchasing or receiving any service from Speakhub.Ai. You may decline SMS communications and still engage with our services through alternative channels.
        </p>
        <p className="text-[#94a3b8] leading-relaxed">
          By providing a phone number, you represent and warrant that you are the account holder or an authorized user of the phone number provided, and that you have the authority to consent to receiving automated messages at that number.
        </p>
      </section>

      {/* Section 4 */}
      <section className="border-b border-[#1e293b] pb-8 mb-8">
        <SectionLabel number="04" />
        <h2 className="text-lg font-semibold text-white mb-4 font-[family-name:var(--font-heading)]">
          Opt-Out and Help
        </h2>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          You may unsubscribe from all SMS communications at any time by replying <strong className="text-white">STOP</strong> to any message received from Speakhub.Ai. Your opt-out request will be processed promptly, and you will receive a confirmation message acknowledging that you have been unsubscribed.
        </p>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          For assistance or additional information regarding our messaging, reply <strong className="text-white">HELP</strong> to any message. Our team will respond with relevant support information.
        </p>
        <p className="text-[#94a3b8] leading-relaxed">
          Opting out of SMS communications will not affect your access to Speakhub.Ai services, but it will discontinue all SMS communications. You may continue to interact with us through email, our website, or other available channels.
        </p>
      </section>

      {/* Section 5 */}
      <section className="border-b border-[#1e293b] pb-8 mb-8">
        <SectionLabel number="05" />
        <h2 className="text-lg font-semibold text-white mb-4 font-[family-name:var(--font-heading)]">
          Acceptable Use
        </h2>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          By using Speakhub.Ai's website and services, you agree to the following conditions of acceptable use:
        </p>
        <ul className="space-y-2 mt-3">
          <li className="text-[#94a3b8] leading-relaxed flex items-start gap-2">
            <span className="text-[#06b6d4] mt-0.5">→</span>
            <span>You will not submit false, misleading, or fraudulent information when booking a consultation, completing a form, or communicating with our team.</span>
          </li>
          <li className="text-[#94a3b8] leading-relaxed flex items-start gap-2">
            <span className="text-[#06b6d4] mt-0.5">→</span>
            <span>Our services are intended for legitimate business use only. Any use of our platform for unlawful, deceptive, or harmful purposes is strictly prohibited.</span>
          </li>
          <li className="text-[#94a3b8] leading-relaxed flex items-start gap-2">
            <span className="text-[#06b6d4] mt-0.5">→</span>
            <span>You will not attempt to interfere with, disrupt, or compromise the functionality, security, or integrity of our website or services.</span>
          </li>
        </ul>
        <p className="text-[#94a3b8] leading-relaxed mt-4">
          Speakhub.Ai reserves the right to decline, suspend, or terminate service to any individual or entity for any lawful reason, including but not limited to violations of these acceptable use terms.
        </p>
      </section>

      {/* Section 6 */}
      <section className="border-b border-[#1e293b] pb-8 mb-8">
        <SectionLabel number="06" />
        <h2 className="text-lg font-semibold text-white mb-4 font-[family-name:var(--font-heading)]">
          Privacy
        </h2>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          All personal information provided to Speakhub.Ai is handled in accordance with our Privacy Policy, which is available at{" "}
          <Link href="/privacy-policy" className="text-[#06b6d4] hover:text-white transition-colors font-medium">
            Privacy Policy
          </Link>
          . We encourage you to review the Privacy Policy carefully to understand how your information is collected, used, and protected.
        </p>
        <p className="text-[#94a3b8] leading-relaxed">
          Your data is not shared with third parties for marketing purposes under any circumstances. For full details on data sharing practices, please refer to the Privacy Policy.
        </p>
      </section>

      {/* Section 7 */}
      <section className="border-b border-[#1e293b] pb-8 mb-8">
        <SectionLabel number="07" />
        <h2 className="text-lg font-semibold text-white mb-4 font-[family-name:var(--font-heading)]">
          Disclaimers and Limitations of Liability
        </h2>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          All services provided by Speakhub.Ai are offered on an "as is" and "as available" basis, without warranties of any kind, whether express, implied, statutory, or otherwise. Speakhub.Ai expressly disclaims all implied warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
        </p>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          Speakhub.Ai is not responsible for third-party carrier delays, failures in SMS delivery, network outages, or interruptions to scheduling platforms, calendar services, or other tools outside our direct control. While we make reasonable efforts to ensure reliable service delivery, we cannot guarantee uninterrupted or error-free operation at all times.
        </p>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          To the maximum extent permitted by applicable law, Speakhub.Ai's total aggregate liability for any claim arising out of or related to these Terms, our services, or your use of our website shall not exceed the total amount paid by you to Speakhub.Ai for the applicable service during the thirty (30) days immediately preceding the event giving rise to the claim.
        </p>
        <p className="text-[#94a3b8] leading-relaxed">
          Results from AI voice receptionist deployments may vary by business, industry, call volume, and use case. Speakhub.Ai does not guarantee any specific revenue, lead generation, conversion, or business performance outcomes. Any projections, estimates, or examples shared during consultations are illustrative only and should not be construed as guarantees.
        </p>
      </section>

      {/* Section 8 */}
      <section className="border-b border-[#1e293b] pb-8 mb-8">
        <SectionLabel number="08" />
        <h2 className="text-lg font-semibold text-white mb-4 font-[family-name:var(--font-heading)]">
          Intellectual Property
        </h2>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          All content, branding, logos, trademarks, technology, software, designs, and materials associated with Speakhub.Ai and its website are the exclusive intellectual property of Speakhub.Ai and are protected by applicable intellectual property laws.
        </p>
        <p className="text-[#94a3b8] leading-relaxed">
          No content from this website or our services may be reproduced, distributed, modified, publicly displayed, or otherwise used without the prior written permission of Speakhub.Ai. Unauthorized use of any Speakhub.Ai intellectual property may result in legal action.
        </p>
      </section>

      {/* Section 9 */}
      <section className="border-b border-[#1e293b] pb-8 mb-8">
        <SectionLabel number="09" />
        <h2 className="text-lg font-semibold text-white mb-4 font-[family-name:var(--font-heading)]">
          Governing Law
        </h2>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Florida, United States, without regard to its conflict of law principles or provisions.
        </p>
        <p className="text-[#94a3b8] leading-relaxed">
          Any disputes, claims, or controversies arising out of or relating to these Terms, our services, or your use of the Speakhub.Ai website shall be resolved exclusively in the state or federal courts located in the State of Florida. By using our services, you consent to the personal jurisdiction of such courts.
        </p>
      </section>

      {/* Section 10 */}
      <section className="border-b border-[#1e293b] pb-8 mb-8">
        <SectionLabel number="10" />
        <h2 className="text-lg font-semibold text-white mb-4 font-[family-name:var(--font-heading)]">
          Changes to These Terms
        </h2>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          Speakhub.Ai reserves the right to update, modify, or replace these Terms and Conditions at any time at our sole discretion. Any changes will become effective immediately upon posting on this page with a revised Effective Date.
        </p>
        <p className="text-[#94a3b8] leading-relaxed">
          We encourage you to review these Terms periodically to stay informed of any updates. Your continued use of our services following the posting of any changes constitutes your acceptance of the updated Terms and Conditions.
        </p>
      </section>

      {/* Section 11 */}
      <section>
        <SectionLabel number="11" />
        <h2 className="text-lg font-semibold text-white mb-4 font-[family-name:var(--font-heading)]">
          Contact Information
        </h2>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          If you have any questions, concerns, or requests regarding these Terms and Conditions, please contact us:
        </p>
        <p className="text-[#94a3b8] leading-relaxed">
          Email: <a href="mailto:hello@speakhub.ai" className="text-[#06b6d4] hover:text-white transition-colors font-medium">hello@speakhub.ai</a>
        </p>
      </section>
    </LegalLayout>
  );
}
