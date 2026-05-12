'use client';

import Link from "next/link";
import { SITE_NAME, PRIMARY_NAV, SOLUTIONS_NAV } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

const PRODUCT_LINKS = PRIMARY_NAV.find((n) => n.label === "Products")?.children ?? [];
const SOLUTION_LINKS = SOLUTIONS_NAV.children ?? [];
const ABOUT_LINKS = PRIMARY_NAV.find((n) => n.label === "About")?.children ?? [];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useI18n();

  return (
    <footer className="bg-[#1A1A1A] text-[#F5F7F6]">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-[#757575] uppercase tracking-wider mb-4">
              {t.footer.products}
            </h3>
            <ul className="space-y-2.5">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F5F7F6]/70 hover:text-[#F5F7F6] transition-colors duration-[var(--transition-fast)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-[#757575] uppercase tracking-wider mb-4">
              {t.footer.solutions}
            </h3>
            <ul className="space-y-2.5">
              {SOLUTION_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F5F7F6]/70 hover:text-[#F5F7F6] transition-colors duration-[var(--transition-fast)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-[#757575] uppercase tracking-wider mb-4">
              {t.footer.company}
            </h3>
            <ul className="space-y-2.5">
              {ABOUT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F5F7F6]/70 hover:text-[#F5F7F6] transition-colors duration-[var(--transition-fast)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-[#757575] uppercase tracking-wider mb-4">
              {t.footer.connect}
            </h3>
            <div className="space-y-3 text-sm text-[#F5F7F6]/70">
              <p className="leading-relaxed whitespace-pre-line">
                {t.footer.address}
              </p>
              <p>
                <a
                  href="mailto:info@cngreenyard.com"
                  className="hover:text-[#F5F7F6] transition-colors duration-[var(--transition-fast)]"
                >
                  info@cngreenyard.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+8657462493001"
                  className="hover:text-[#F5F7F6] transition-colors duration-[var(--transition-fast)]"
                >
                  +86-574-6249 3001
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/8657462493001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5F7F6] transition-colors duration-[var(--transition-fast)]"
                >
                  WhatsApp: +86-574-6249 3001
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Certifications row */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <p className="text-xs text-[#757575] text-center tracking-wider">
            {t.footer.certifications}
          </p>
        </div>

        {/* Social links placeholder */}
        <div className="mt-4 flex justify-center gap-4">
          <span className="text-xs text-[#757575]">LinkedIn</span>
          <span className="text-[#F5F7F6]/20" aria-hidden="true">|</span>
          <span className="text-xs text-[#757575]">YouTube</span>
          <span className="text-[#F5F7F6]/20" aria-hidden="true">|</span>
          <span className="text-xs text-[#757575]">Alibaba</span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-xs text-[#F5F7F6]/50">
          <p>
            {t.footer.copyright.replace('{year}', String(currentYear))}
          </p>
          <Link
            href="/privacy"
            className="hover:text-[#F5F7F6]/80 transition-colors duration-[var(--transition-fast)]"
          >
            {t.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
