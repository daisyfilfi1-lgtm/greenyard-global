'use client';

import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { useNav } from "@/lib/i18n/useNav";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const navItems = useNav();
  const currentYear = new Date().getFullYear();
  const { t } = useI18n();

  const PRODUCT_LINKS = navItems.find((n) => n.label === (t.nav.products || 'Products'))?.children ?? [];
  const SOLUTION_LINKS = navItems.find((n) => n.label === (t.nav.solutions || 'Solutions by Industry'))?.children ?? [];
  const ABOUT_LINKS = navItems.find((n) => n.label === (t.nav.about || 'About'))?.children ?? [];

  return (
    <footer className="bg-[#1A1A1A] text-[#F7F4EF]">
      <div className="section-container section-padding">
        {/* Brand section */}
        <div className="mb-12 pb-8 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold text-[#F7F4EF]">
              <span className="text-[#D4AF37]">{SITE_NAME.charAt(0)}</span>
              {SITE_NAME.slice(1)}
            </span>
            <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
          </div>
          <p className="mt-3 text-sm text-[#999999] max-w-md leading-relaxed">
            One Earth. Precision Engineering. Premium packaging solutions for global brands.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Products */}
          <div>
            <h3 className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-[0.1em] mb-5">
              {t.footer.products}
            </h3>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#B3B3B3] hover:text-[#F7F4EF] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-[0.1em] mb-5">
              {t.footer.solutions}
            </h3>
            <ul className="space-y-3">
              {SOLUTION_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#B3B3B3] hover:text-[#F7F4EF] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-[0.1em] mb-5">
              {t.footer.company}
            </h3>
            <ul className="space-y-3">
              {ABOUT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#B3B3B3] hover:text-[#F7F4EF] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-[0.1em] mb-5">
              {t.footer.connect}
            </h3>
            <div className="space-y-3 text-sm text-[#B3B3B3]">
              <p className="leading-relaxed whitespace-pre-line">
                {t.footer.address}
              </p>
              <p>
                <a
                  href="mailto:info@cngreenyard.com"
                  className="hover:text-[#D4AF37] transition-colors duration-200"
                >
                  info@cngreenyard.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+8657462493001"
                  className="hover:text-[#D4AF37] transition-colors duration-200"
                >
                  +86-574-6249 3001
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/+8657462493001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition-colors duration-200"
                >
                  WhatsApp: +86-574-6249 3001
                </a>
              </p>
            </div>
          </div>

          {/* Certifications & Social */}
          <div>
            <h3 className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-[0.1em] mb-5">
              Certifications
            </h3>
            <div className="flex flex-wrap gap-2">
              {['ISO 15378', 'FDA', 'REACH', 'RoHS'].map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1.5 bg-[#006B5E]/10 border border-[#006B5E]/30 rounded-full text-xs text-[#006B5E] font-medium"
                >
                  {cert}
                </span>
              ))}
            </div>
            
            <div className="mt-6">
              <h3 className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-[0.1em] mb-3">
                Follow Us
              </h3>
              <div className="flex gap-3">
                <a href="https://www.youtube.com/@greenyard" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#999999] hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/greenyard" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#999999] hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://greenyard.en.alibaba.com/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#999999] hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.5 4H5.5C4.67 4 4 4.67 4 5.5v13c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-13C20 4.67 19.33 4 18.5 4zM7 7h3v3H7V7zm0 5h3v3H7v-3zm5-5h5v3h-5V7zm0 5h5v3h-5v-3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-xs text-[#6B6B6B]">
          <p>
            {t.footer.copyright.replace('{year}', String(currentYear))}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-[#F7F4EF] transition-colors duration-200"
            >
              {t.footer.privacy}
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#F7F4EF] transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
