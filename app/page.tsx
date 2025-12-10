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

  const sarpanchPhoto = "/photos/sarpanch.png";
  const sarpanchHusbandPhoto = "/photos/sarpanchhusband.png";

  // Approximate coordinates for Ramarampeta
  // TODO: Update with exact coordinates
  const villageLat = 16.5;
  const villageLon = 78.5;

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/photos/background.png"
            alt="Background"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

            {/* Side by side circular photos */}
            <div className="flex items-center justify-start gap-4 sm:gap-6 md:gap-8">
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-xl mb-2 sm:mb-3">
                  <Image
                    src={sarpanchPhoto}
                    alt={lang === "te" ? data.hero.sarpanch.name_te : data.hero.sarpanch.name_en}
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                  />
                </div>
                <p className="text-xs sm:text-sm md:text-base font-semibold text-white text-center whitespace-nowrap" lang={lang}>
                  {lang === "te" ? data.hero.sarpanch.name_te : data.hero.sarpanch.name_en}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-xl mb-2 sm:mb-3">
                  <Image
                    src={sarpanchHusbandPhoto}
                    alt={lang === "te" ? data.hero.actingLeader.name_te : data.hero.actingLeader.name_en}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <p className="text-xs sm:text-sm md:text-base font-semibold text-white text-center whitespace-nowrap" lang={lang}>
                  {lang === "te" ? data.hero.actingLeader.name_te : data.hero.actingLeader.name_en}
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


