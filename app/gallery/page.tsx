"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getData, getText, getNestedText } from "@/lib/data";
import Image from "next/image";

export default function GalleryPage() {
  const { lang } = useLanguage();
  const data = getData();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="section-title" lang={lang}>
        {getText("galleryPage.pageTitle", lang)}
      </h1>
      <p className="section-subtitle" lang={lang}>
        {getText("galleryPage.intro", lang)}
      </p>

      {/* Photo Gallery */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-earth-900" lang={lang}>
          {getText("galleryPage.photos", lang)}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.placeholders.photos.map((photo, idx) => (
            <div key={idx} className="card p-0 overflow-hidden">
              <div className="relative w-full h-64 bg-earth-200">
                <Image
                  src={photo}
                  alt={
                    lang === "te" 
                      ? (data.galleryPage.photoCaptions_te[idx] || data.galleryPage.photoCaptions_en[idx] || getText("galleryPage.galleryPhotoFallback", lang).replace("{number}", String(idx + 1)))
                      : (data.galleryPage.photoCaptions_en[idx] || getText("galleryPage.galleryPhotoFallback", lang).replace("{number}", String(idx + 1)))
                  }
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-4">
                <p className="text-earth-700" lang={lang}>
                  {lang === "te"
                    ? data.galleryPage.photoCaptions_te[idx] ||
                      data.galleryPage.photoCaptions_en[idx]
                    : data.galleryPage.photoCaptions_en[idx]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Gallery */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-earth-900" lang={lang}>
          {getText("galleryPage.videos", lang)}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.placeholders.videos.map((video, idx) => (
            <div key={idx} className="card">
              <div className="relative w-full h-64 bg-earth-200 rounded-lg overflow-hidden mb-4">
                {video.youtubeId !== "YOUTUBE_ID_1" ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={lang === "te" ? video.title_te : video.title_en}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-earth-500">
                    <p lang={lang}>{getText("galleryPage.youtubePlaceholder", lang)}</p>
                  </div>
                )}
              </div>
              <h3 className="text-lg font-semibold text-earth-900" lang={lang}>
                {lang === "te" ? video.title_te : video.title_en}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

