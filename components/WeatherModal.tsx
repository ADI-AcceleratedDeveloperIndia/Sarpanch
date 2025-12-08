"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "./LanguageProvider";
import { getText } from "@/lib/data";

interface WeatherData {
  current: {
    temperature: number;
    condition: string;
    humidity: number;
    windSpeed: number;
  };
  hourly: Array<{
    time: string;
    temperature: number;
    condition: string;
  }>;
  daily: Array<{
    date: string;
    maxTemp: number;
    minTemp: number;
    condition: string;
  }>;
}

interface WeatherModalProps {
  isOpen: boolean;
  onClose: () => void;
  lat?: number;
  lon?: number;
}

export default function WeatherModal({ isOpen, onClose, lat, lon }: WeatherModalProps) {
  const { lang } = useLanguage();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && lat && lon) {
      fetchWeather();
    }
  }, [isOpen, lat, lon]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
      if (!response.ok) throw new Error("Failed to fetch weather");
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load weather");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="weather-modal-title"
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-earth-200 px-6 py-4 flex justify-between items-center">
          <h2 id="weather-modal-title" className="text-2xl font-bold text-earth-900">
            {getText("weather.button", lang)}
          </h2>
          <button
            onClick={onClose}
            className="text-earth-500 hover:text-earth-700 text-2xl font-bold"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          {loading && (
            <div className="text-center py-8">
              <p className="text-earth-600">{getText("weather.loading", lang)}</p>
            </div>
          )}

          {error && (
            <div className="text-center py-8">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          {weather && !loading && (
            <div className="space-y-6">
              {/* Current Conditions */}
              <div className="card">
                <h3 className="text-lg font-semibold mb-4">
                  {getText("weather.current", lang)}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-3xl font-bold text-primary-600">
                      {weather.current.temperature}°C
                    </p>
                    <p className="text-earth-600">{weather.current.condition}</p>
                  </div>
                  <div className="text-sm text-earth-600 space-y-1">
                    <p lang={lang}>{getText("weather.humidity", lang)}: {weather.current.humidity}%</p>
                    <p lang={lang}>{getText("weather.wind", lang)}: {weather.current.windSpeed} km/h</p>
                  </div>
                </div>
              </div>

              {/* Hourly Forecast */}
              <div className="card">
                <h3 className="text-lg font-semibold mb-4">
                  {getText("weather.hourly", lang)}
                </h3>
                <div className="overflow-x-auto">
                  <div className="flex space-x-4">
                    {weather.hourly.slice(0, 8).map((hour, idx) => (
                      <div key={idx} className="flex-shrink-0 text-center">
                        <p className="text-sm text-earth-600">{hour.time}</p>
                        <p className="text-lg font-semibold">{hour.temperature}°C</p>
                        <p className="text-xs text-earth-500">{hour.condition}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 7-Day Forecast */}
              <div className="card">
                <h3 className="text-lg font-semibold mb-4">
                  {getText("weather.weekly", lang)}
                </h3>
                <div className="space-y-3">
                  {weather.daily.map((day, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center py-2 border-b border-earth-100 last:border-0"
                    >
                      <div>
                        <p className="font-medium">{day.date}</p>
                        <p className="text-sm text-earth-600">{day.condition}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{day.maxTemp}°C</p>
                        <p className="text-sm text-earth-500">{day.minTemp}°C</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

