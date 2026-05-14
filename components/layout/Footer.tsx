'use client';

import Link from "next/link";
import { SITE_NAME, PRIMARY_NAV } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

const PRODUCT_LINKS = PRIMARY_NAV.find((n) => n.label === "Products")?.children ?? [];
const SOLUTION_LINKS = PRIMARY_NAV.find((n) => n.label === "Solutions by Industry")?.children ?? [];
const ABOUT_LINKS = PRIMARY_NAV.find((n) => n.label === "About")?.children ?? [];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useI18n();

  return (
    <footer className="bg-[#1A1A1A] text-[#F5F5F0]">
      <div className="section-container section-padding">
        {/* Brand section */}
        <div className="mb-12 pb-8 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold text-[#F5F5F0]">
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
            <h3 className="text-xs font-semibold text-[#6C757D] uppercase tracking-[0.1em] mb-5">
              {t.footer.products}
            </h3>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#B3B3B3] hover:text-[#F5F5F0] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-xs font-semibold text-[#6C757D] uppercase tracking-[0.1em] mb-5">
              {t.footer.solutions}
            </h3>
            <ul className="space-y-3">
              {SOLUTION_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#B3B3B3] hover:text-[#F5F5F0] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold text-[#6C757D] uppercase tracking-[0.1em] mb-5">
              {t.footer.company}
            </h3>
            <ul className="space-y-3">
              {ABOUT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#B3B3B3] hover:text-[#F5F5F0] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold text-[#6C757D] uppercase tracking-[0.1em] mb-5">
              {t.footer.connect}
            </h3>
            <div className="space-y-3 text-sm text-[#B3B3B3]">
              <p className="leading-relaxed whitespace-pre-line">
                {t.footer.address}
              </p>
              <p>
                <a
                  href="mailto:info@cngreenyard.com"
                  className="hover:text-[#00B894] transition-colors duration-200"
                >
                  info@cngreenyard.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+8657462493001"
                  className="hover:text-[#00B894] transition-colors duration-200"
                >
                  +86-574-6249 3001
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/8657462493001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00B894] transition-colors duration-200"
                >
                  WhatsApp: +86-574-6249 3001
                </a>
              </p>
            </div>
          </div>

          {/* Certifications & Social */}
          <div>
            <h3 className="text-xs font-semibold text-[#6C757D] uppercase tracking-[0.1em] mb-5">
              Certifications
            </h3>
            <div className="flex flex-wrap gap-2">
              {['ISO 15378', 'FDA', 'REACH', 'RoHS'].map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-[#999999]"
                >
                  {cert}
                </span>
              ))}
            </div>
            
            <div className="mt-6">
              <h3 className="text-xs font-semibold text-[#6C757D] uppercase tracking-[0.1em] mb-3">
                Follow Us
              </h3>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#999999] hover:text-[#00B894] hover:border-[#00B894]/30 transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#999999] hover:text-[#00B894] hover:border-[#00B894]/30 transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#999999] hover:text-[#00B894] hover:border-[#00B894]/30 transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-xs text-[#6C757D]">
          <p>
            {t.footer.copyright.replace('{year}', String(currentYear))}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-[#F5F5F0] transition-colors duration-200"
            >
              {t.footer.privacy}
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#F5F5F0] transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
