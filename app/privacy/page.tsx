import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | GreenYard",
  description: "GreenYard privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EF]">
      <section className="bg-[#1A1A1A] py-20 lg:py-24">
        <div className="section-container text-center">
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-light text-white leading-tight tracking-[-0.02em] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#999999] max-w-lg mx-auto leading-relaxed">
            How we collect, use, and protect your information
          </p>
        </div>
      </section>

      <div className="section-container py-16 lg:py-24 max-w-3xl mx-auto">
        <div className="prose prose-lg max-w-none space-y-10 text-[#333333] leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">1. Information We Collect</h2>
            <p>
              When you contact GreenYard via our website form, we collect the information you provide: your name, work email, company name, and the details of your packaging requirements. We also collect standard web server logs including IP address, browser type, and pages visited for security and analytics purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">2. How We Use Your Information</h2>
            <p>We use the information collected to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Respond to your inquiries and provide product recommendations</li>
              <li>Send sampling requests and technical documentation you have requested</li>
              <li>Maintain business communication records for ongoing client relationships</li>
              <li>Improve our website and service offerings through aggregated analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">3. Information Sharing</h2>
            <p>
              <strong>We do not sell, trade, or rent your personal information to third parties.</strong> Your information is only shared internally within Ningbo GreenYard Sprayer Co., Ltd. for the purpose of serving your inquiry. We may share data with trusted service providers (e.g., email delivery services) solely for operational purposes, under strict confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">4. Data Security</h2>
            <p>
              We implement industry-standard security measures including SSL/TLS encryption for data in transit, access controls, and secure server infrastructure to protect your personal information from unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">5. Cookies</h2>
            <p>
              Our website may use essential cookies for functionality and analytics cookies to understand visitor behavior. You can control cookie preferences through your browser settings. We do not use cookies for advertising or tracking across third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">6. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction or deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Data portability</li>
            </ul>
            <p className="mt-4">To exercise these rights, contact us at <a href="mailto:info@cngreenyard.com" className="text-[#D4AF37] hover:underline">info@cngreenyard.com</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">7. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:<br />
              Ningbo GreenYard Sprayer Co., Ltd.<br />
              No.97-1 Fengyi Road, Lanjiang Street<br />
              Yuyao City, Zhejiang, China<br />
              Email: <a href="mailto:info@cngreenyard.com" className="text-[#D4AF37] hover:underline">info@cngreenyard.com</a><br />
              Phone: +86-574-6249 3001
            </p>
            <p className="mt-6 text-sm text-[#6B6B6B]">Last updated: May 2026</p>
          </section>
        </div>
      </div>
    </main>
  );
}
