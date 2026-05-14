"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { SITE_NAME, PRIMARY_NAV } from "@/lib/constants";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = useCallback(
    (href: string) => {
      if (href === "#") return false;
      return pathname === href || pathname.startsWith(href + "/");
    },
    [pathname]
  );

  return (
    <header
      className={`sticky top-0 z-[var(--z-sticky)] transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.06)]" : "bg-white"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-[#0D0D0D] shrink-0 flex items-center gap-2"
        >
          <span className="text-[#D4AF37]">{SITE_NAME.charAt(0)}</span>
          {SITE_NAME.slice(1)}
          <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
          {PRIMARY_NAV.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const active = !hasChildren && isActive(item.href);
            const dropdownOpen = activeDropdown === item.label;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {hasChildren ? (
                  <button
                    className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium transition-all ${
                      dropdownOpen
                        ? "text-[#0D0D0D]"
                        : "text-[#333333] hover:text-[#0D0D0D]"
                    }`}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2.5 text-sm font-medium transition-all ${
                      active
                        ? "text-[#0D0D0D]"
                        : "text-[#333333] hover:text-[#0D0D0D]"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#D4AF37]" />
                    )}
                  </Link>
                )}

                {/* Mega dropdown */}
                {hasChildren && dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-[0_8px_28px_rgba(0,0,0,0.1)] border border-[#EAECEB] p-3 mega-menu-active rounded-[12px]">
                    <div className="absolute -top-1 left-8 w-16 h-2 bg-white border border-t-0 border-x-0 border-[#EAECEB] rounded-b-md" />
                    {item.children!.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className={`block px-4 py-3 rounded-lg transition-all ${
                          isActive(child.href)
                            ? "bg-[#E8F5F1] text-[#00B894]"
                            : "hover:bg-[#F5F5F0] text-[#333333]"
                        }`}
                      >
                        <div className="text-sm font-medium">{child.label}</div>
                        {child.description && (
                          <div className="text-xs text-[#6C757D] mt-1 leading-relaxed">
                            {child.description}
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Utility area */}
        <div className="hidden lg:flex items-center gap-6">
          <button
            className="p-2 text-[#6C757D] hover:text-[#0D0D0D] transition-all hover:bg-[#F5F5F0] rounded-lg"
            aria-label="Search products"
          >
            <Search size={18} />
          </button>
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-[#00B894] text-white text-sm font-medium hover:bg-[#00A37E] transition-all rounded-lg hover:-translate-y-0.5 shadow-md hover:shadow-lg"
          >
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-[#1A1A1A]"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[var(--z-overlay)] lg:hidden">
          <div className="absolute inset-0 bg-[#1A1A1A]" />
          <div className="relative z-10 flex flex-col h-full overflow-y-auto">
            <div className="flex items-center justify-between px-4 h-16">
              <span className="text-lg font-semibold text-[#F5F7F6]">
                {SITE_NAME}
              </span>
              <button
                className="p-2 text-[#F5F7F6]"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 px-4 py-8 space-y-1" aria-label="Mobile navigation">
              {PRIMARY_NAV.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                return (
                  <div key={item.label} className="mobile-nav-link">
                    {hasChildren ? (
                      <>
                        <div className="text-xs font-medium text-[#757575] uppercase tracking-wider mb-2 px-3 pt-4 first:pt-0">
                          {item.label}
                        </div>
                        <div className="space-y-1 pl-2">
                          {item.children!.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className={`block px-3 py-2.5 text-sm transition-colors ${
                                isActive(child.href)
                                  ? "bg-[#0F3D26]/10 text-[#0F3D26]"
                                  : "text-[#F5F7F6] hover:bg-white/5"
                              }`}
                              onClick={() => setMobileOpen(false)}
                            >
                              <div className="font-medium">{child.label}</div>
                              {child.description && (
                                <div className="text-xs text-[#757575] mt-0.5">
                                  {child.description}
                                </div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block px-3 py-2.5 text-sm transition-colors ${
                          isActive(item.href)
                            ? "bg-[#0F3D26]/10 text-[#0F3D26]"
                            : "text-[#F5F7F6] hover:bg-white/5"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="px-4 py-6 border-t border-white/10 space-y-4">
              <div className="flex items-center gap-4">
                <button
                  className="flex items-center gap-2 text-sm text-[#F5F7F6]/70"
                  aria-label="Search"
                >
                  <Search size={16} />
                  Search
                </button>
                <LanguageSwitcher />
              </div>
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-3 text-sm font-medium bg-[#0F3D26] text-white hover:bg-[#0B2D1C] transition-colors rounded-[4px]"
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
