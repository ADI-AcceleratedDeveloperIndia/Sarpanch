"use client";

import { createContext, useContext, useState, useEffect, useRef, ReactNode } from "react";

interface AudioContextType {
  isPlaying: boolean;
  startAudio: () => void;
  stopAudio: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio element
  useEffect(() => {
    if (typeof window !== "undefined") {
      const audio = new Audio("/gramamwebaudio.mp3");
      audio.loop = true;
      audio.preload = "auto";
      audioRef.current = audio;

      // Check if audio should be playing from localStorage
      const shouldPlay = localStorage.getItem("audioPlaying") === "true";
      if (shouldPlay) {
        setIsPlaying(true);
        audio.play().catch((error) => {
          console.log("Audio autoplay prevented:", error);
        });
      }

      return () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current = null;
        }
      };
    }
  }, []);

  const startAudio = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          localStorage.setItem("audioPlaying", "true");
        })
        .catch((error) => {
          console.log("Audio play failed:", error);
        });
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      localStorage.setItem("audioPlaying", "false");
    }
  };

  // Keep audio playing during navigation
  useEffect(() => {
    if (isPlaying && audioRef.current && audioRef.current.paused) {
      audioRef.current.play().catch((error) => {
        console.log("Audio resume failed:", error);
      });
    }
  }, [isPlaying]);

  return (
    <AudioContext.Provider value={{ isPlaying, startAudio, stopAudio }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}

