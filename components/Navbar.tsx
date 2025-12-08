"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";
import { getData, getText } from "@/lib/data";

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const pathname = usePathname();
  const data = getData();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { key: "home", path: "/" },
    { key: "lead", path: "/leadership" },
    { key: "works", path: "/works" },
    { key: "gallery", path: "/gallery" },
    { key: "history", path: "/history" },
    { key: "announce", path: "/announcements" },
    { key: "contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary-700">
              {getText("village", lang)}
            </span>
            <span className="text-sm text-earth-600 hidden sm:inline">
              {getText("mandal", lang)}
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.key}
                  href={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary-100 text-primary-700"
                      : "text-earth-700 hover:bg-earth-100"
                  }`}
                >
                  {getText(`nav.${item.key}`, lang)}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLang}
              className="px-3 py-1.5 text-sm font-medium text-primary-700 hover:bg-primary-50 rounded-md transition-colors border border-primary-300"
              aria-label="Toggle language"
            >
              {lang === "en" ? "తెలుగు" : "English"}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-earth-700 hover:bg-earth-100 rounded-md"
              aria-label="Menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-earth-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.key}
                  href={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? "bg-primary-100 text-primary-700"
                      : "text-earth-700 hover:bg-earth-100"
                  }`}
                >
                  {getText(`nav.${item.key}`, lang)}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

