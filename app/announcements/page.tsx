"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getData, getText } from "@/lib/data";
import Link from "next/link";

export default function AnnouncementsPage() {
  const { lang } = useLanguage();
  const data = getData();
  const whatsappUrl = "https://wa.me/919505009699";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="section-title" lang={lang}>
        {getText("announcementsPage.pageTitle", lang)}
      </h1>
      <p className="section-subtitle" lang={lang}>
        {getText("announcementsPage.intro", lang)}
      </p>

      <div className="space-y-4 mb-8">
        {data.announcementsPage.items.map((item, idx) => (
          <div key={idx} className="card">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
              <p className="text-earth-800 leading-relaxed flex-1" lang={lang}>
                {lang === "te" ? item.te : item.en}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="card bg-primary-50 border-primary-200">
        <p className="text-earth-800 mb-4" lang={lang}>
          {getText("announcementsPage.cta", lang)}
        </p>
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-block"
        >
          {getText("nav.contact", lang)}
        </Link>
      </div>
    </div>
  );
}





