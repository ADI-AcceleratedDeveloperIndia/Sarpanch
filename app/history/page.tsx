"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getText } from "@/lib/data";

export default function HistoryPage() {
  const { lang } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="section-title" lang={lang}>
        {getText("historyPage.pageTitle", lang)}
      </h1>
      <div className="card">
        <p className="text-lg text-earth-700 leading-relaxed whitespace-pre-line" lang={lang}>
          {getText("historyPage.content", lang)}
        </p>
      </div>
    </div>
  );
}





