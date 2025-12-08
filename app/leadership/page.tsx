"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getData, getText, getNestedText } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import wardsData from "@/data/wards.json";

export default function LeadershipPage() {
  const { lang } = useLanguage();
  const data = getData();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="section-title" lang={lang}>
        {getText("leadershipPage.pageTitle", lang)}
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Sarpanch Card */}
        <div className="card">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-earth-200 flex-shrink-0">
              <Image
                src="/placeholders/sarpanch1.png"
                alt={getNestedText(data.leadershipPage[lang === "te" ? "sarpanchCard_te" : "sarpanchCard_en"], lang).name}
                width={80}
                height={80}
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <h2 className="text-xl font-bold text-earth-900" lang={lang}>
                {getNestedText(data.leadershipPage[lang === "te" ? "sarpanchCard_te" : "sarpanchCard_en"], lang).title}
              </h2>
              <p className="text-earth-700" lang={lang}>
                {getNestedText(data.leadershipPage[lang === "te" ? "sarpanchCard_te" : "sarpanchCard_en"], lang).name}
              </p>
            </div>
          </div>
          <p className="text-earth-700 leading-relaxed" lang={lang}>
            {getNestedText(data.leadershipPage[lang === "te" ? "sarpanchCard_te" : "sarpanchCard_en"], lang).message}
          </p>
        </div>

        {/* Acting Leader Card */}
        <div className="card">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-earth-200 flex-shrink-0">
              <Image
                src="/placeholders/leader1.png"
                alt={getNestedText(data.leadershipPage[lang === "te" ? "actingCard_te" : "actingCard_en"], lang).name}
                width={80}
                height={80}
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <h2 className="text-xl font-bold text-earth-900" lang={lang}>
                {getNestedText(data.leadershipPage[lang === "te" ? "actingCard_te" : "actingCard_en"], lang).title}
              </h2>
              <p className="text-earth-700" lang={lang}>
                {getNestedText(data.leadershipPage[lang === "te" ? "actingCard_te" : "actingCard_en"], lang).name}
              </p>
            </div>
          </div>
          <p className="text-earth-700 leading-relaxed" lang={lang}>
            {getNestedText(data.leadershipPage[lang === "te" ? "actingCard_te" : "actingCard_en"], lang).desc}
          </p>
        </div>
      </div>

      {/* Ward Members Section */}
      <div className="card">
        <h2 className="text-2xl font-bold mb-4" lang={lang}>
          {getText("leadershipPage.wardMembers", lang)}
        </h2>
        <p className="text-earth-700 mb-6" lang={lang}>
          {getText("leadershipPage.wardIntro", lang)}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {wardsData.wards.map((ward) => (
            <Link
              key={ward.id}
              href={`/ward/${ward.id}`}
              className="p-4 border border-earth-200 rounded-lg hover:bg-earth-50 cursor-pointer transition-colors text-center"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden bg-earth-200 mx-auto mb-3">
                <Image
                  src={ward.photo}
                  alt={lang === "te" ? ward.memberName_te : ward.memberName_en}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <p className="text-sm font-medium text-earth-900 mb-1" lang={lang}>
                {getText("leadershipPage.wardNumber", lang).replace("{number}", String(ward.id))}
              </p>
              <p className="text-xs text-earth-600" lang={lang}>
                {lang === "te" ? ward.memberName_te : ward.memberName_en}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}


