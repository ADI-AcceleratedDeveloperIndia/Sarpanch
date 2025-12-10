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
  const firstAudioRef = useRef<HTMLAudioElement | null>(null);
  const secondAudioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio elements
  useEffect(() => {
    if (typeof window !== "undefined") {
      // First audio (gramamwebaudio.mp3) - plays once, then triggers second audio
      const firstAudio = new Audio("/gramamwebaudio.mp3");
      firstAudio.preload = "auto";
      firstAudio.loop = false; // Don't loop the first audio
      firstAudioRef.current = firstAudio;

      // Second audio (maleaudiofeedback.mp3) - loops continuously
      const secondAudio = new Audio("/maleaudiofeedback.mp3");
      secondAudio.loop = true;
      secondAudio.preload = "auto";
      secondAudioRef.current = secondAudio;

      // When first audio ends, play second audio
      const handleFirstAudioEnd = () => {
        if (secondAudioRef.current) {
          secondAudioRef.current.play().catch((error) => {
            console.log("Second audio play failed:", error);
          });
        }
      };

      firstAudio.addEventListener("ended", handleFirstAudioEnd);

      // Check if audio should be playing from localStorage
      const shouldPlay = localStorage.getItem("audioPlaying") === "true";
      if (shouldPlay) {
        setIsPlaying(true);
        // Only play first audio, second will start when first ends
        firstAudio.play().catch((error) => {
          console.log("Audio autoplay prevented:", error);
        });
      }

      return () => {
        firstAudio.removeEventListener("ended", handleFirstAudioEnd);
        if (firstAudioRef.current) {
          firstAudioRef.current.pause();
          firstAudioRef.current = null;
        }
        if (secondAudioRef.current) {
          secondAudioRef.current.pause();
          secondAudioRef.current = null;
        }
      };
    }
  }, []);

  const startAudio = () => {
    // Stop any currently playing audio
    if (secondAudioRef.current) {
      secondAudioRef.current.pause();
      secondAudioRef.current.currentTime = 0;
    }
    
    if (firstAudioRef.current) {
      // Reset first audio to beginning
      firstAudioRef.current.currentTime = 0;
      
      firstAudioRef.current
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
    if (firstAudioRef.current) {
      firstAudioRef.current.pause();
      firstAudioRef.current.currentTime = 0;
    }
    if (secondAudioRef.current) {
      secondAudioRef.current.pause();
      secondAudioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    localStorage.setItem("audioPlaying", "false");
  };

  // Keep audio playing during navigation
  useEffect(() => {
    if (isPlaying) {
      // Check if first audio has ended (currentTime is close to duration)
      if (firstAudioRef.current) {
        const firstAudio = firstAudioRef.current;
        // If first audio hasn't ended yet, resume it
        if (firstAudio.paused && firstAudio.currentTime > 0 && firstAudio.currentTime < firstAudio.duration - 0.5) {
          firstAudio.play().catch((error) => {
            console.log("First audio resume failed:", error);
          });
        }
      }
      // If second audio is paused, resume it (it should be looping)
      if (secondAudioRef.current && secondAudioRef.current.paused) {
        secondAudioRef.current.play().catch((error) => {
          console.log("Second audio resume failed:", error);
        });
      }
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

