'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Mail, Phone, MapPin, Send, ArrowRight, Loader2, CheckCircle } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

function ContactForm() {
  const { t } = useI18n();
  const searchParams = useSearchParams();
  const [formState, setFormState] = useState<'idle' | 'loading' | 'sent'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  // Pre-fill message from URL query param (e.g. from product page RFQ button)
  useEffect(() => {
    const subject = searchParams.get('subject');
    if (subject) {
      setFormData(prev => ({
        ...prev,
        message: `[${subject}]\n\nPlease provide volume pricing and lead times for the following products:\n\n`,
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to send');
      setFormState('sent');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch {
      alert('Failed to send message. Please email us at info@cngreenyard.com');
      setFormState('idle');
    }
  };

  if (formState === 'sent') {
    return (
      <main className="min-h-screen bg-[#F7F4EF] flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="w-16 h-16 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <h1 className="text-2xl font-semibold text-[#0D0D0D] mb-3">{t.contact.sent}</h1>
          <p className="text-[#6B6B6B] mb-8 leading-relaxed">{t.contact.sentMessage}</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#D4AF37] text-[#1A1A1A] font-medium text-sm hover:bg-[#E8D58A] transition-all rounded-lg"
          >
            {t.contact.backHome}
            <ArrowRight size={16} />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F4EF]">
      <section className="bg-[#1A1A1A] py-20 lg:py-24">
        <div className="section-container text-center">
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-light text-white leading-tight tracking-[-0.02em] mb-4">
            {t.contact.heroTitle}
          </h1>
          <p className="text-[#999999] max-w-lg mx-auto leading-relaxed">
            {t.contact.heroSubtitle}
          </p>
        </div>
      </section>

      <div className="section-container py-16 lg:py-24">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#0D0D0D] mb-2">
                    {t.contact.name} *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    className="w-full px-4 py-3 bg-white border border-[#E5E0D8] rounded-lg text-sm text-[#0D0D0D] placeholder:text-[#999999] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#0D0D0D] mb-2">
                    {t.contact.email} *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    className="w-full px-4 py-3 bg-white border border-[#E5E0D8] rounded-lg text-sm text-[#0D0D0D] placeholder:text-[#999999] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 transition-all"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[#0D0D0D] mb-2">
                  {t.contact.company}
                </label>
                <input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))}
                  className="w-full px-4 py-3 bg-white border border-[#E5E0D8] rounded-lg text-sm text-[#0D0D0D] placeholder:text-[#999999] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 transition-all"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#0D0D0D] mb-2">
                  {t.contact.requirements} *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                  className="w-full px-4 py-3 bg-white border border-[#E5E0D8] rounded-lg text-sm text-[#0D0D0D] placeholder:text-[#999999] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 transition-all resize-none"
                  placeholder="Tell us about your product, target volume, pack type, sustainability needs…"
                />
              </div>
              <button
                type="submit"
                disabled={formState === 'loading'}
                className="inline-flex items-center gap-2 px-10 py-4 bg-[#D4AF37] text-[#1A1A1A] font-medium text-sm hover:bg-[#E8D58A] transition-all rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {formState === 'loading' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    {t.contact.sending}
                  </>
                ) : (
                  <>
                    {t.contact.send}
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-[0.1em] mb-4">
                {t.contact.details}
              </h3>
              <div className="space-y-4">
                <a href="mailto:info@cngreenyard.com" className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37] transition-colors">
                    <Mail size={18} className="text-[#D4AF37] group-hover:text-[#1A1A1A] transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#0D0D0D]">Email</p>
                    <p className="text-sm text-[#6B6B6B]">info@cngreenyard.com</p>
                  </div>
                </a>
                <a href="tel:+8657462493001" className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37] transition-colors">
                    <Phone size={18} className="text-[#D4AF37] group-hover:text-[#1A1A1A] transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#0D0D0D]">Phone</p>
                    <p className="text-sm text-[#6B6B6B]">+86-574-6249 3001</p>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#0D0D0D]">{t.contact.headquarters}</p>
                    <p className="text-sm text-[#6B6B6B] leading-relaxed">
                      No.97-1 Fengyi Road, Lanjiang Street<br />
                      Yuyao City, Zhejiang, China
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[#E5E0D8] pt-8">
              <h3 className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-[0.1em] mb-4">
                {t.contact.responseTime}
              </h3>
              <div className="bg-white border border-[#E5E0D8] rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-[#0D0D0D]">{t.contact.responseTitle}</span>
                </div>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">
                  {t.contact.responseNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactForm />
    </Suspense>
  );
}
