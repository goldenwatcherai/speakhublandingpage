/**
 * Privacy Policy — full legal page
 * Design: #030712 bg, cyan section labels, slate body text
 * 10 sections with expanded professional legal prose
 */

import LegalLayout from "@/components/LegalLayout";

function SectionLabel({ number }: { number: string }) {
  return (
    <span className="text-xs font-semibold text-[#06b6d4] uppercase tracking-widest block mb-2">
      Section {number}
    </span>
  );
}

export default function PrivacyPolicy() {
  return (
    <LegalLayout>
      <h1 className="text-4xl font-bold text-white mb-3 font-[family-name:var(--font-heading)]">
        Privacy Policy
      </h1>
      <p className="text-sm text-[#475569] mb-12">Effective Date: March 15, 2026</p>

      {/* Section 1 */}
      <section className="border-b border-[#1e293b] pb-8 mb-8">
        <SectionLabel number="01" />
        <h2 className="text-lg font-semibold text-white mb-4 font-[family-name:var(--font-heading)]">
          Information We Collect
        </h2>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          Speakhub.Ai collects only the personal information necessary to deliver our services and respond to your inquiries. The types of information we may collect include:
        </p>
        <ul className="space-y-2 mt-3">
          <li className="text-[#94a3b8] leading-relaxed flex items-start gap-2">
            <span className="text-[#06b6d4] mt-0.5">→</span>
            <span>Full name and phone number provided when scheduling a consultation or completing a booking form on our website.</span>
          </li>
          <li className="text-[#94a3b8] leading-relaxed flex items-start gap-2">
            <span className="text-[#06b6d4] mt-0.5">→</span>
            <span>Email address, if voluntarily provided during communication, form submission, or correspondence with our team.</span>
          </li>
          <li className="text-[#94a3b8] leading-relaxed flex items-start gap-2">
            <span className="text-[#06b6d4] mt-0.5">→</span>
            <span>Basic inquiry details submitted through our website contact forms, including the nature of your business and the services you are interested in.</span>
          </li>
        </ul>
        <p className="text-[#94a3b8] leading-relaxed mt-4">
          Speakhub.Ai does not collect payment or financial information through this website. Any payment processing, if applicable, is handled through secure third-party platforms that maintain their own privacy and security standards. Additionally, this website does not use tracking cookies for advertising or remarketing purposes. Any cookies used are strictly functional and necessary for the operation of the site.
        </p>
      </section>

      {/* Section 2 */}
      <section className="border-b border-[#1e293b] pb-8 mb-8">
        <SectionLabel number="02" />
        <h2 className="text-lg font-semibold text-white mb-4 font-[family-name:var(--font-heading)]">
          How We Use Your Information
        </h2>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          The personal information we collect is used exclusively for the following purposes:
        </p>
        <ul className="space-y-2 mt-3">
          <li className="text-[#94a3b8] leading-relaxed flex items-start gap-2">
            <span className="text-[#06b6d4] mt-0.5">→</span>
            <span>To send automated SMS messages confirming appointments, delivering reminders, and following up after consultations.</span>
          </li>
          <li className="text-[#94a3b8] leading-relaxed flex items-start gap-2">
            <span className="text-[#06b6d4] mt-0.5">→</span>
            <span>To respond to inquiries submitted through our website, booking forms, or other communication channels.</span>
          </li>
          <li className="text-[#94a3b8] leading-relaxed flex items-start gap-2">
            <span className="text-[#06b6d4] mt-0.5">→</span>
            <span>To improve our services through internal operational review and analysis of service delivery patterns.</span>
          </li>
        </ul>
        <p className="text-[#94a3b8] leading-relaxed mt-4">
          Your information is never used for unsolicited marketing, promotional campaigns, or advertising of any kind. All communications from Speakhub.Ai are strictly transactional in nature and directly related to services you have requested or consultations you have scheduled.
        </p>
      </section>

      {/* Section 3 */}
      <section className="border-b border-[#1e293b] pb-8 mb-8">
        <SectionLabel number="03" />
        <h2 className="text-lg font-semibold text-white mb-4 font-[family-name:var(--font-heading)]">
          Data Sharing
        </h2>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          Speakhub.Ai does not sell, trade, rent, or otherwise share your personal information with third parties for marketing or advertising purposes under any circumstances.
        </p>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          Your data may be shared only with service providers that are strictly necessary to operate our platform and deliver our services. These may include SMS delivery providers, calendar and scheduling tools, and customer relationship management platforms. All such third-party providers operate under confidentiality obligations and are contractually required to use your data solely for the purpose of supporting Speakhub.Ai's service delivery.
        </p>
        <p className="text-[#94a3b8] leading-relaxed">
          Any third-party tools or platforms integrated with our services comply with applicable data protection standards, including industry-recognized security practices and, where applicable, relevant privacy regulations.
        </p>
      </section>

      {/* Section 4 */}
      <section className="border-b border-[#1e293b] pb-8 mb-8">
        <SectionLabel number="04" />
        <h2 className="text-lg font-semibold text-white mb-4 font-[family-name:var(--font-heading)]">
          Consent for SMS Messages
        </h2>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          By providing your phone number on our booking form or website, you expressly consent to receive automated SMS messages from Speakhub.Ai. These messages are transactional in nature and may include:
        </p>
        <ul className="space-y-2 mt-3">
          <li className="text-[#94a3b8] leading-relaxed flex items-start gap-2">
            <span className="text-[#06b6d4] mt-0.5">→</span>
            <span>Appointment confirmations and scheduling updates.</span>
          </li>
          <li className="text-[#94a3b8] leading-relaxed flex items-start gap-2">
            <span className="text-[#06b6d4] mt-0.5">→</span>
            <span>Appointment reminders sent in advance of your scheduled consultation.</span>
          </li>
          <li className="text-[#94a3b8] leading-relaxed flex items-start gap-2">
            <span className="text-[#06b6d4] mt-0.5">→</span>
            <span>Post-consultation follow-up communications related to your inquiry or engagement.</span>
          </li>
        </ul>
        <p className="text-[#94a3b8] leading-relaxed mt-4">
          Standard message and data rates may apply depending on your mobile carrier and plan. Consent to receive SMS messages is not a condition of purchasing or receiving any service from Speakhub.Ai.
        </p>
      </section>

      {/* Section 5 */}
      <section className="border-b border-[#1e293b] pb-8 mb-8">
        <SectionLabel number="05" />
        <h2 className="text-lg font-semibold text-white mb-4 font-[family-name:var(--font-heading)]">
          Opt-Out
        </h2>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          You may opt out of all SMS messages at any time by replying <strong className="text-white">STOP</strong> to any message you receive from Speakhub.Ai. Upon receiving your opt-out request, we will process it promptly and you will receive no further SMS messages following confirmation of your request.
        </p>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          If you need help or have questions about our messaging, you may reply <strong className="text-white">HELP</strong> to any message to receive assistance and additional information.
        </p>
        <p className="text-[#94a3b8] leading-relaxed">
          Opting out of SMS communications does not affect your ability to use, access, or receive services from Speakhub.Ai. You may continue to engage with us through other communication channels, including email and our website, regardless of your SMS preferences.
        </p>
      </section>

      {/* Section 6 */}
      <section className="border-b border-[#1e293b] pb-8 mb-8">
        <SectionLabel number="06" />
        <h2 className="text-lg font-semibold text-white mb-4 font-[family-name:var(--font-heading)]">
          Data Retention
        </h2>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          Personal information collected by Speakhub.Ai is retained only for as long as necessary to fulfill the purpose for which it was collected, or as required by applicable law. Once the information is no longer needed for its original purpose and no legal obligation requires its continued storage, it will be securely deleted or anonymized.
        </p>
        <p className="text-[#94a3b8] leading-relaxed">
          You may request the deletion of your personal information at any time by contacting us at the email address provided in the Contact Us section below. We will make reasonable efforts to process deletion requests promptly and will confirm completion of the request.
        </p>
      </section>

      {/* Section 7 */}
      <section className="border-b border-[#1e293b] pb-8 mb-8">
        <SectionLabel number="07" />
        <h2 className="text-lg font-semibold text-white mb-4 font-[family-name:var(--font-heading)]">
          Security
        </h2>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          Speakhub.Ai employs industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or misuse. These measures include encryption of data in transit, secure storage practices, and access controls that restrict personal data to authorized personnel only.
        </p>
        <p className="text-[#94a3b8] leading-relaxed">
          While we take reasonable precautions to safeguard your information, no method of electronic transmission or data storage is guaranteed to be completely secure. We cannot ensure or warrant the absolute security of any information you transmit to us, and you do so at your own risk.
        </p>
      </section>

      {/* Section 8 */}
      <section className="border-b border-[#1e293b] pb-8 mb-8">
        <SectionLabel number="08" />
        <h2 className="text-lg font-semibold text-white mb-4 font-[family-name:var(--font-heading)]">
          Children's Privacy
        </h2>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          Speakhub.Ai services are intended exclusively for business owners, professionals, and adults. We do not knowingly collect, solicit, or store personal information from individuals under the age of 18.
        </p>
        <p className="text-[#94a3b8] leading-relaxed">
          If we become aware that personal information has been submitted by or on behalf of a minor, we will take prompt steps to delete that information from our records. If you believe a minor has provided us with personal information, please contact us immediately at the email address listed in the Contact Us section below.
        </p>
      </section>

      {/* Section 9 */}
      <section className="border-b border-[#1e293b] pb-8 mb-8">
        <SectionLabel number="09" />
        <h2 className="text-lg font-semibold text-white mb-4 font-[family-name:var(--font-heading)]">
          Changes to This Policy
        </h2>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          Speakhub.Ai reserves the right to update or modify this Privacy Policy at any time to reflect changes in our practices, legal requirements, or operational needs. Any updates will be reflected by a revised Effective Date displayed at the top of this page.
        </p>
        <p className="text-[#94a3b8] leading-relaxed">
          We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information. Your continued use of our services following the posting of any changes constitutes your acceptance of the revised Privacy Policy.
        </p>
      </section>

      {/* Section 10 */}
      <section>
        <SectionLabel number="10" />
        <h2 className="text-lg font-semibold text-white mb-4 font-[family-name:var(--font-heading)]">
          Contact Us
        </h2>
        <p className="text-[#94a3b8] leading-relaxed mb-4">
          If you have any questions, concerns, or requests related to this Privacy Policy or the handling of your personal information, please do not hesitate to contact us:
        </p>
        <p className="text-[#94a3b8] leading-relaxed">
          Email: <a href="mailto:hello@speakhub.ai" className="text-[#06b6d4] hover:text-white transition-colors font-medium">hello@speakhub.ai</a>
        </p>
      </section>
    </LegalLayout>
  );
}
