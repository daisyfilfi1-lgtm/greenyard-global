"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { SITE_NAME, PRIMARY_NAV } from "@/lib/constants";

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
      className={`sticky top-0 z-[var(--z-sticky)] transition-all duration-[var(--transition-base)] ${
        scrolled ? "glass-effect shadow-sm" : "bg-[#F5F5F0]"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-[#0D0D0D] shrink-0"
        >
          {SITE_NAME}
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
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-[var(--transition-fast)] ${
                      dropdownOpen
                        ? "text-[#00B894]"
                        : "text-[#0D0D0D] hover:text-[#00B894]"
                    }`}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-[var(--transition-fast)] ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors duration-[var(--transition-fast)] ${
                      active
                        ? "text-[#D4AF37]"
                        : "text-[#0D0D0D] hover:text-[#00B894]"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D4AF37] rounded-full" />
                    )}
                  </Link>
                )}

                {/* Mega dropdown */}
                {hasChildren && dropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-[#F5F5F0] rounded-lg shadow-xl border border-[#DEE2E6] p-2 mega-menu-active">
                    {item.children!.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className={`block px-4 py-3 rounded-md transition-colors duration-[var(--transition-fast)] ${
                          isActive(child.href)
                            ? "bg-[#E8F5F1] text-[#00B894]"
                            : "hover:bg-[#E8F5F1] text-[#0D0D0D]"
                        }`}
                      >
                        <div className="font-medium text-sm">{child.label}</div>
                        {child.description && (
                          <div className="text-xs text-[#6C757D] mt-0.5 leading-snug">
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
        <div className="hidden lg:flex items-center gap-3">
          <button
            className="p-2 text-[#6C757D] hover:text-[#0D0D0D] transition-colors"
            aria-label="Search products"
          >
            <Search size={18} />
          </button>
          <span className="text-sm font-medium text-[#6C757D] cursor-default select-none">
            EN
          </span>
          <Link
            href="/contact"
            className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-[#00B894] rounded-full hover:bg-[#00a080] transition-colors duration-[var(--transition-fast)] focus-ring"
          >
            Speak to an Engineer →
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-[#0D0D0D]"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[var(--z-overlay)] lg:hidden">
          <div
            className="absolute inset-0 bg-[#1A1A1A]"
          />
          <div className="relative z-10 flex flex-col h-full overflow-y-auto">
            {/* Close button */}
            <div className="flex items-center justify-between px-4 h-16">
              <span className="text-xl font-semibold tracking-tight text-[#F5F5F0]">
                {SITE_NAME}
              </span>
              <button
                className="p-2 text-[#F5F5F0]"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile nav links */}
            <nav className="flex-1 px-4 py-8 space-y-1" aria-label="Mobile navigation">
              {PRIMARY_NAV.map((item, index) => {
                const hasChildren = item.children && item.children.length > 0;
                return (
                  <div
                    key={item.label}
                    className="mobile-nav-link"
                    style={{ animationDelay: `${0.05 * (index + 1)}s` }}
                  >
                    {hasChildren ? (
                      <>
                        <div className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider mb-2 px-3 pt-4 first:pt-0">
                          {item.label}
                        </div>
                        <div className="space-y-1 pl-2">
                          {item.children!.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className={`block px-3 py-2.5 rounded-md text-sm transition-colors ${
                                isActive(child.href)
                                  ? "bg-[#00B894]/10 text-[#00B894]"
                                  : "text-[#F5F5F0] hover:bg-white/5"
                              }`}
                              onClick={() => setMobileOpen(false)}
                            >
                              <div className="font-medium">{child.label}</div>
                              {child.description && (
                                <div className="text-xs text-[#6C757D] mt-0.5">
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
                        className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                          isActive(item.href)
                            ? "bg-[#00B894]/10 text-[#00B894]"
                            : "text-[#F5F5F0] hover:bg-white/5"
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

            {/* Mobile CTA */}
            <div className="px-4 py-6 border-t border-white/10 space-y-4">
              <div className="flex items-center gap-4">
                <button
                  className="flex items-center gap-2 text-sm text-[#F5F5F0]/70"
                  aria-label="Search"
                >
                  <Search size={16} />
                  Search
                </button>
                <span className="text-sm text-[#F5F5F0]/70">EN</span>
              </div>
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-3 text-sm font-semibold text-white bg-[#00B894] rounded-full"
                onClick={() => setMobileOpen(false)}
              >
                Speak to an Engineer →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
