"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getData, getText, getNestedText } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function WorksPage() {
  const { lang } = useLanguage();
  const data = getData();
  const whatsappUrl = "https://wa.me/919505009699";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="section-title" lang={lang}>
        {getText("worksPage.pageTitle", lang)}
      </h1>
      <p className="section-subtitle" lang={lang}>
        {getText("worksPage.intro", lang)}
      </p>

      {/* Ongoing Works */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-earth-900" lang={lang}>
          {getText("worksPage.ongoingWorks", lang)}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.worksPage.ongoing.map((work, idx) => (
            <div key={idx} className="card">
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-earth-200">
                <Image
                  src={work.image}
                  alt={lang === "te" ? work.title_te : work.title_en}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-earth-900" lang={lang}>
                {lang === "te" ? work.title_te : work.title_en}
              </h3>
              <p className="text-earth-700" lang={lang}>
                {lang === "te" ? work.desc_te : work.desc_en}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Completed Works */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-earth-900" lang={lang}>
          {getText("worksPage.completedWorks", lang)}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.worksPage.completed.map((work, idx) => (
            <div key={idx} className="card">
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-earth-200">
                <Image
                  src={work.image}
                  alt={lang === "te" ? work.title_te : work.title_en}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-earth-900" lang={lang}>
                {lang === "te" ? work.title_te : work.title_en}
              </h3>
              <p className="text-earth-700" lang={lang}>
                {lang === "te" ? work.desc_te : work.desc_en}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Report Issue CTA */}
      <div className="card bg-primary-50 border-primary-200">
        <p className="text-lg text-earth-800 mb-4" lang={lang}>
          {getText("worksPage.reportIssue", lang)}
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


