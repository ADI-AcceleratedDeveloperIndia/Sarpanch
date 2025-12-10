"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getData, getText } from "@/lib/data";
import Link from "next/link";

export default function ContactPage() {
  const { lang } = useLanguage();
  const data = getData();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="section-title" lang={lang}>
        {getText("contactPage.pageTitle", lang)}
      </h1>

      <div className="mb-8">
        {/* Contact Information */}
        <div className="card">
          <h2 className="text-2xl font-bold mb-6 text-earth-900" lang={lang}>
            {getText("contactPage.contactInformation", lang)}
          </h2>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-earth-900 mb-1" lang={lang}>
                {getText("contactPage.sarpanch", lang)}
              </p>
            </div>
            <div>
              <p className="font-semibold text-earth-900 mb-1" lang={lang}>
                {getText("contactPage.whatsapp", lang)}
              </p>
              <Link
                href="https://wa.me/919505009699"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700"
              >
                +91 95050 09699
              </Link>
            </div>
            <div>
              <p className="font-semibold text-earth-900 mb-1" lang={lang}>
                {getText("contactPage.officeHours", lang)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="card">
        <h2 className="text-2xl font-bold mb-4 text-earth-900" lang={lang}>
          {getText("contactPage.location", lang)}
        </h2>
        {data.contactPage.mapEmbed !== "GOOGLE_MAPS_EMBED_PLACEHOLDER" ? (
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <iframe
              src={data.contactPage.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        ) : (
          <div className="w-full h-64 bg-earth-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <p className="text-earth-600 mb-4" lang={lang}>
                {getText("contactPage.mapPlaceholder", lang)}
              </p>
              <Link
                href={data.contactPage.mapSearch}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                {getText("homeContent.mapCta", lang)}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


