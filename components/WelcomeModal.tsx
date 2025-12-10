"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "./LanguageProvider";
import { getText } from "@/lib/data";

// Global flag to track if modal was shown in this page load
declare global {
  var welcomeModalShown: boolean | undefined;
}

interface WelcomeModalProps {
  onEnter: () => void;
  onClose: () => void;
}

export default function WelcomeModal({ onEnter, onClose }: WelcomeModalProps) {
  const { lang } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show modal on every page load/refresh (not on client-side navigation)
    // Use global variable to track if shown in this page load
    if (typeof window !== "undefined" && !window.welcomeModalShown) {
      setIsVisible(true);
      window.welcomeModalShown = true;
    } else {
      // If navigating (not refreshing), don't show modal, but resume audio if it was playing
      const audioPlaying = localStorage.getItem("audioPlaying") === "true";
      if (audioPlaying) {
        onEnter();
      }
    }

    // Clear flag on page unload (refresh)
    const handleBeforeUnload = () => {
      if (typeof window !== "undefined") {
        window.welcomeModalShown = false;
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [onEnter]);

  const handleEnter = () => {
    setIsVisible(false);
    onEnter();
  };

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isVisible) {
        handleClose();
      }
    };
    if (isVisible) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-modal-title"
    >
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 text-center relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-earth-400 hover:text-earth-600 text-2xl font-bold transition-colors"
          aria-label={getText("common.ariaClose", lang)}
        >
          ×
        </button>

        <h1
          id="welcome-modal-title"
          className="text-4xl md:text-5xl font-bold text-primary-600 mb-6"
          lang={lang}
        >
          {lang === "te" ? "స్వాగతం" : "Welcome"}
        </h1>
        <p className="text-lg text-earth-700 mb-8" lang={lang}>
          {lang === "te"
            ? "రామారంపేట గ్రామ పోర్టల్‌కు స్వాగతం"
            : "Welcome to Ramarampeta Village Portal"}
        </p>
        <button
          onClick={handleEnter}
          className="w-full bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          aria-label={lang === "te" ? "ప్రవేశించండి" : "Enter"}
        >
          {lang === "te" ? "ప్రవేశించండి" : "Enter"}
        </button>
      </div>
    </div>
  );
}

