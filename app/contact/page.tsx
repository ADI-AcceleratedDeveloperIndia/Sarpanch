"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { getData, getText } from "@/lib/data";
import Link from "next/link";

export default function ContactPage() {
  const { lang } = useLanguage();
  const data = getData();
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", message: "" });
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="section-title" lang={lang}>
        {getText("contactPage.pageTitle", lang)}
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
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

        {/* Contact Form */}
        <div className="card">
          <h2 className="text-2xl font-bold mb-6 text-earth-900" lang={lang}>
            {getText("contactPage.sendMessage", lang)}
          </h2>
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
              <p lang={lang}>{getText("contactPage.thankYou", lang)}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-earth-700 mb-1" lang={lang}>
                  {getText("contactPage.name", lang)}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-earth-700 mb-1" lang={lang}>
                  {getText("contactPage.message", lang)}
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder={getText("contactPage.formPlaceholder", lang)}
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full" lang={lang}>
                {getText("contactPage.sendMessageButton", lang)}
              </button>
            </form>
          )}
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


