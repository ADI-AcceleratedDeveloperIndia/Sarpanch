"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getText } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import wardsData from "@/data/wards.json";

export default function WardPage() {
  const { lang } = useLanguage();
  const params = useParams();
  const wardId = parseInt(params.id as string);
  const ward = wardsData.wards.find((w) => w.id === wardId);

  if (!ward) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4" lang={lang}>
          {lang === "te" ? "వార్డు కనుగొనబడలేదు" : "Ward not found"}
        </h1>
        <Link href="/leadership" className="btn-primary inline-block">
          {lang === "te" ? "నాయకత్వం పేజీకి తిరిగి వెళ్ళండి" : "Back to Leadership"}
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <Link
        href="/leadership"
        className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        {getText("leadershipPage.pageTitle", lang)}
      </Link>

      {/* Ward Member Photo and Name */}
      <div className="text-center mb-8">
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-earth-200 mx-auto mb-4 border-4 border-primary-200 shadow-xl">
          <Image
            src={ward.photo}
            alt={lang === "te" ? ward.memberName_te : ward.memberName_en}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-earth-900 mb-2" lang={lang}>
          {getText("leadershipPage.wardNumber", lang).replace("{number}", String(ward.id))}
        </h1>
        <p className="text-xl text-earth-700 mb-2" lang={lang}>
          {lang === "te" ? ward.memberName_te : ward.memberName_en}
        </p>
      </div>

      {/* About Ward */}
      <div className="card mb-8">
        <h2 className="text-2xl font-bold mb-4 text-earth-900" lang={lang}>
          {lang === "te" ? "వార్డు గురించి" : "About Ward"}
        </h2>
        <p className="text-base md:text-lg text-earth-700 leading-relaxed" lang={lang}>
          {lang === "te" ? ward.about_te : ward.about_en}
        </p>
      </div>

      {/* Ward Photos Section */}
      <div className="card">
        <h2 className="text-2xl font-bold mb-4 text-earth-900" lang={lang}>
          {lang === "te" ? "వార్డు ఫోటోలు" : "Ward Photos"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative w-full h-48 rounded-lg overflow-hidden bg-earth-200">
            <div className="flex items-center justify-center h-full text-earth-500">
              <p lang={lang}>
                {lang === "te" ? "ఫోటో జోడించబడుతుంది" : "Photo will be added"}
              </p>
            </div>
          </div>
          <div className="relative w-full h-48 rounded-lg overflow-hidden bg-earth-200">
            <div className="flex items-center justify-center h-full text-earth-500">
              <p lang={lang}>
                {lang === "te" ? "ఫోటో జోడించబడుతుంది" : "Photo will be added"}
              </p>
            </div>
          </div>
        </div>
        <p className="text-sm text-earth-600 mt-4 italic" lang={lang}>
          {lang === "te" 
            ? "వార్డు ఫోటోలు త్వరలో జోడించబడతాయి" 
            : "Ward photos will be added soon"}
        </p>
      </div>
    </div>
  );
}

