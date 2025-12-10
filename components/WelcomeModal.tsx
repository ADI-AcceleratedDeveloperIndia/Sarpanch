"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "./LanguageProvider";
import { getText } from "@/lib/data";

interface WelcomeModalProps {
  onEnter: () => void;
}

export default function WelcomeModal({ onEnter }: WelcomeModalProps) {
  const { lang } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already entered
    const hasEntered = localStorage.getItem("welcomeEntered");
    if (!hasEntered) {
      setIsVisible(true);
    } else {
      onEnter(); // Auto-enter if already entered before
    }
  }, [onEnter]);

  const handleEnter = () => {
    localStorage.setItem("welcomeEntered", "true");
    setIsVisible(false);
    onEnter();
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-modal-title"
    >
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 text-center">
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

