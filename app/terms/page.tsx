import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | GreenYard",
  description: "Terms and conditions for using GreenYard website and services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EF]">
      <section className="bg-[#1A1A1A] py-20 lg:py-24">
        <div className="section-container text-center">
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-light text-white leading-tight tracking-[-0.02em] mb-4">
            Terms of Service
          </h1>
          <p className="text-[#999999] max-w-lg mx-auto leading-relaxed">
            Terms and conditions governing the use of our website and services
          </p>
        </div>
      </section>

      <div className="section-container py-16 lg:py-24 max-w-3xl mx-auto">
        <div className="prose prose-lg max-w-none space-y-10 text-[#333333] leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the GreenYard website (greenyardglobal.netlify.app), you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">2. Website Use</h2>
            <p>
              The content on this website is for general information and business inquiry purposes only. You may browse, contact us, and request product information. You agree not to misuse the website, including but not limited to: submitting false information, attempting unauthorized access, or disrupting website operations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">3. Intellectual Property</h2>
            <p>
              All content on this website — including text, images, logos, product photography, and design — is the property of Ningbo GreenYard Sprayer Co., Ltd. and is protected by applicable intellectual property laws. Product images may not be reproduced without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">4. Product Information</h2>
            <p>
              Product specifications, images, and descriptions on this website are provided for reference. Actual products may vary. All orders are subject to separate commercial agreements, including specifications, pricing, and delivery terms confirmed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">5. Limitation of Liability</h2>
            <p>
              GreenYard provides this website on an "as is" basis. We make no warranties regarding the accuracy or completeness of website content. To the fullest extent permitted by law, GreenYard shall not be liable for any damages arising from the use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">6. Governing Law</h2>
            <p>
              These terms are governed by the laws of the People's Republic of China. Any disputes shall be resolved through negotiation in good faith, and if necessary, through the competent courts in Zhejiang Province, China.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#0D0D0D] mb-4">7. Changes to Terms</h2>
            <p>
              We reserve the right to update these terms at any time. Continued use of the website after changes constitutes acceptance of the updated terms.
            </p>
            <p className="mt-8 text-sm text-[#6B6B6B]">Last updated: May 2026</p>
          </section>
        </div>
      </div>
    </main>
  );
}
