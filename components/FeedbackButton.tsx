"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { getText } from "@/lib/data";
import FeedbackModal from "./FeedbackModal";

export default function FeedbackButton() {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-40 flex flex-col items-end group">
        {/* Pulsing ring indicators */}
        <div className="absolute bottom-0 right-0 flex items-center justify-center">
          <div className="absolute w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-primary-400 opacity-60 animate-ping"></div>
          <div className="absolute w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-primary-300 opacity-40 animate-pulse"></div>
        </div>
        
        {/* Desktop tooltip - appears on hover */}
        <div className="mb-2 hidden sm:block bg-primary-600 text-white px-3 py-1.5 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none relative">
          {getText("feedback.buttonText", lang)}
          <div className="absolute -bottom-1 right-6 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-primary-600"></div>
        </div>

        {/* Feedback Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center"
          style={{
            boxShadow: "0 0 20px rgba(236, 72, 153, 0.6), 0 0 40px rgba(236, 72, 153, 0.4), 0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          aria-label={getText("feedback.buttonText", lang)}
          title={getText("feedback.buttonText", lang)}
        >
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
          <span className="sr-only">{getText("feedback.buttonText", lang)}</span>
        </button>

        {/* Mobile label - always visible on mobile */}
        <div className="mt-2 sm:hidden bg-primary-600 text-white px-2.5 py-1 rounded-lg text-xs font-medium shadow-md whitespace-nowrap">
          {getText("feedback.buttonText", lang)}
        </div>
      </div>
      <FeedbackModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

