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
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary-500 hover:bg-primary-600 text-white shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center group animate-pulse hover:animate-none"
        style={{
          animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          boxShadow: "0 0 20px rgba(236, 72, 153, 0.6), 0 0 40px rgba(236, 72, 153, 0.4)",
        }}
        aria-label={getText("feedback.buttonText", lang)}
        title={getText("feedback.buttonText", lang)}
      >
        <svg
          className="w-8 h-8 md:w-10 md:h-10"
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
      <FeedbackModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

