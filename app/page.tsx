"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { getData, getText, getNestedText } from "@/lib/data";
import WeatherModal from "@/components/WeatherModal";

export default function HomePage() {
  const { lang } = useLanguage();
  const data = getData();
  const [weatherModalOpen, setWeatherModalOpen] = useState(false);

  // TODO: Replace placeholder images with actual village photos
  const sarpanchPhoto = "/placeholders/sarpanch1.png";
  const villagePhoto = "/placeholders/village1.png";

  // Approximate coordinates for Somarampet, Illanthakunta
  // TODO: Update with exact coordinates
  const villageLat = 16.5;
  const villageLon = 78.5;

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 to-primary-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4" lang={lang}>
                {getText("hero.title", lang)}
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-primary-100" lang={lang}>
                {getText("hero.subtitle", lang)}
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setWeatherModalOpen(true)}
                  className="btn-secondary bg-white text-primary-700 hover:bg-primary-50"
                >
                  {getText("weather.button", lang)}
                </button>
              </div>
            </div>

            {/* Overlapping circular photos */}
            <div className="relative h-64 md:h-80 flex items-center justify-center">
              <div className="relative z-10">
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl mb-3">
                  <Image
                    src={sarpanchPhoto}
                    alt={lang === "te" ? data.hero.sarpanch.name_te : data.hero.sarpanch.name_en}
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                  />
                </div>
                <p className="text-sm md:text-base font-semibold text-white text-center" lang={lang}>
                  {lang === "te" ? data.hero.sarpanch.name_te : data.hero.sarpanch.name_en}
                </p>
              </div>
              <div className="absolute right-0 top-8">
                <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl mb-3">
                  <Image
                    src={villagePhoto}
                    alt={getText("village", lang)}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <p className="text-xs md:text-sm font-semibold text-white text-center" lang={lang}>
                  {/* Name will be added here later */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-6 border-b border-earth-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base md:text-lg text-earth-700" lang={lang}>
            {getText("hero.quickStats", lang)}
          </p>
        </div>
      </section>

      {/* Sarpanch Message */}
      <section className="py-8 bg-earth-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card">
            <h2 className="text-2xl font-bold mb-3 text-earth-900" lang={lang}>
              {lang === "te" ? data.hero.sarpanch.name_te : data.hero.sarpanch.name_en}
            </h2>
            <p className="text-base md:text-lg text-earth-700 leading-relaxed" lang={lang}>
              {lang === "te" ? data.hero.sarpanch.message_te : data.hero.sarpanch.message_en}
            </p>
          </div>
        </div>
      </section>

      {/* Intro Content */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base md:text-lg text-earth-700 leading-relaxed mb-6" lang={lang}>
            {getText("homeContent.intro", lang)}
          </p>

          <div className="card text-center">
            <a
              href={data.contactPage.mapSearch}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              {getText("homeContent.mapCta", lang)}
            </a>
          </div>
        </div>
      </section>

      <WeatherModal
        isOpen={weatherModalOpen}
        onClose={() => setWeatherModalOpen(false)}
        lat={villageLat}
        lon={villageLon}
      />
    </>
  );
}


