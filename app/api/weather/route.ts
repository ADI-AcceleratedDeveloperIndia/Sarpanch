import { NextRequest, NextResponse } from "next/server";

interface WeatherCache {
  data: any;
  timestamp: number;
}

const cache: Map<string, WeatherCache> = new Map();
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  if (!lat || !lon) {
    return NextResponse.json(
      { error: "Latitude and longitude are required" },
      { status: 400 }
    );
  }

  const cacheKey = `${lat},${lon}`;
  const cached = cache.get(cacheKey);

  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return NextResponse.json(cached.data);
  }

  try {
    // Using Open-Meteo API (free, no API key required)
    const baseUrl = "https://api.open-meteo.com/v1/forecast";
    const params = new URLSearchParams({
      latitude: lat,
      longitude: lon,
      current: "temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m",
      hourly: "temperature_2m,weather_code",
      daily: "temperature_2m_max,temperature_2m_min,weather_code",
      timezone: "auto",
    });

    const response = await fetch(`${baseUrl}?${params}`);
    if (!response.ok) {
      throw new Error("Weather API request failed");
    }

    const data = await response.json();

    // Transform Open-Meteo format to our format
    const weatherCodeMap: Record<number, string> = {
      0: "Clear",
      1: "Mainly Clear",
      2: "Partly Cloudy",
      3: "Overcast",
      45: "Foggy",
      48: "Foggy",
      51: "Light Drizzle",
      53: "Moderate Drizzle",
      55: "Dense Drizzle",
      61: "Light Rain",
      63: "Moderate Rain",
      65: "Heavy Rain",
      71: "Light Snow",
      73: "Moderate Snow",
      75: "Heavy Snow",
      80: "Light Rain Showers",
      81: "Moderate Rain Showers",
      82: "Heavy Rain Showers",
      85: "Light Snow Showers",
      86: "Heavy Snow Showers",
      95: "Thunderstorm",
      96: "Thunderstorm with Hail",
      99: "Thunderstorm with Hail",
    };

    const currentCode = data.current?.weather_code || 0;
    const hourlyData = data.hourly?.time?.slice(0, 24).map((time: string, idx: number) => ({
      time: new Date(time).toLocaleTimeString("en-US", { hour: "numeric" }),
      temperature: Math.round(data.hourly.temperature_2m[idx]),
      condition: weatherCodeMap[data.hourly.weather_code[idx]] || "Unknown",
    })) || [];

    const dailyData = data.daily?.time?.slice(0, 7).map((date: string, idx: number) => ({
      date: new Date(date).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
      maxTemp: Math.round(data.daily.temperature_2m_max[idx]),
      minTemp: Math.round(data.daily.temperature_2m_min[idx]),
      condition: weatherCodeMap[data.daily.weather_code[idx]] || "Unknown",
    })) || [];

    const transformed = {
      current: {
        temperature: Math.round(data.current?.temperature_2m || 0),
        condition: weatherCodeMap[currentCode] || "Unknown",
        humidity: Math.round(data.current?.relative_humidity_2m || 0),
        windSpeed: Math.round((data.current?.wind_speed_10m || 0) * 3.6), // Convert m/s to km/h
      },
      hourly: hourlyData,
      daily: dailyData,
    };

    cache.set(cacheKey, {
      data: transformed,
      timestamp: Date.now(),
    });

    return NextResponse.json(transformed);
  } catch (error) {
    console.error("Weather API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch weather data" },
      { status: 500 }
    );
  }
}





