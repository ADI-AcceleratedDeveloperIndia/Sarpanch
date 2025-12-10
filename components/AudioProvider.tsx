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
      // Clear audio playing state on every page load/refresh
      // Audio should only play when Enter button is explicitly clicked
      // This ensures audio stops on page refresh
      localStorage.setItem("audioPlaying", "false");
      
      // Set up cleanup on page unload to ensure audio stops on refresh
      const handleBeforeUnload = () => {
        localStorage.setItem("audioPlaying", "false");
      };
      window.addEventListener("beforeunload", handleBeforeUnload);
      
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
        // Make sure first audio is stopped
        if (firstAudioRef.current) {
          firstAudioRef.current.pause();
        }
        // Now play the second audio
        if (secondAudioRef.current) {
          secondAudioRef.current.currentTime = 0; // Start from beginning
          secondAudioRef.current.play().catch((error) => {
            console.log("Second audio play failed:", error);
          });
        }
      };

      firstAudio.addEventListener("ended", handleFirstAudioEnd);

      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
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
      // Stop first audio if it's playing
      firstAudioRef.current.pause();
      // Reset first audio to beginning
      firstAudioRef.current.currentTime = 0;
      
      // Play only the first audio - second will start automatically when first ends
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
      // Only resume second audio if first audio has completely finished
      if (secondAudioRef.current && secondAudioRef.current.paused) {
        // Check if first audio has ended before playing second audio
        if (firstAudioRef.current) {
          const firstAudio = firstAudioRef.current;
          // Only play second audio if first audio has ended (currentTime >= duration - small threshold)
          if (firstAudio.currentTime >= firstAudio.duration - 0.1 || firstAudio.ended) {
            secondAudioRef.current.play().catch((error) => {
              console.log("Second audio resume failed:", error);
            });
          }
        }
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

