"use client";

import { useLanguage } from "./LanguageProvider";
import { getText } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="bg-earth-800 text-earth-200 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 text-sm md:text-base">
          <span lang={lang}>{getText("footer.line", lang)}</span>
          <Link
            href="https://www.aideveloperindia.store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center hover:opacity-80 transition-opacity"
          >
            <Image
              src="/A logo.png"
              alt={getText("footer.logoAlt", lang)}
              width={120}
              height={40}
              className="h-8 w-auto"
              unoptimized
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}


