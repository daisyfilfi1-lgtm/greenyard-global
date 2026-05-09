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
      className={`sticky top-0 z-[var(--z-sticky)] transition-all ${
        scrolled ? "bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]" : "bg-white"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-[#0F3D26] shrink-0"
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
                    className={`flex items-center gap-1 px-3 py-2 text-sm transition-colors ${
                      dropdownOpen
                        ? "text-[#0F3D26]"
                        : "text-[#333333] hover:text-[#0F3D26]"
                    }`}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative px-3 py-2 text-sm transition-colors ${
                      active
                        ? "text-[#0F3D26]"
                        : "text-[#333333] hover:text-[#0F3D26]"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute bottom-0 left-3 right-3 h-px bg-[#0F3D26]" />
                    )}
                  </Link>
                )}

                {/* Mega dropdown */}
                {hasChildren && dropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#EAECEB] p-2 mega-menu-active rounded-[4px]">
                    {item.children!.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className={`block px-4 py-3 rounded-md transition-colors ${
                          isActive(child.href)
                            ? "bg-[#EAECEB] text-[#0F3D26]"
                            : "hover:bg-[#EAECEB] text-[#333333]"
                        }`}
                      >
                        <div className="text-sm">{child.label}</div>
                        {child.description && (
                          <div className="text-xs text-[#757575] mt-0.5 leading-snug">
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
        <div className="hidden lg:flex items-center gap-4">
          <button
            className="p-1.5 text-[#757575] hover:text-[#1A1A1A] transition-colors"
            aria-label="Search products"
          >
            <Search size={16} />
          </button>
          <span className="text-xs text-[#757575] tracking-wider">EN</span>
          <div className="w-px h-4 bg-[#EAECEB]" />
          <Link
            href="/contact"
            className="text-sm text-[#333333] hover:text-[#0F3D26] transition-colors font-medium"
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
                <span className="text-sm text-[#F5F7F6]/70">EN</span>
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
