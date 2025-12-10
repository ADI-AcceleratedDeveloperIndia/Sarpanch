"use client";

import { useEffect } from "react";
import WelcomeModal from "./WelcomeModal";
import { useAudio } from "./AudioProvider";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { startAudio } = useAudio();

  // Mark that navigation has occurred (for detecting refresh vs navigation)
  useEffect(() => {
    sessionStorage.setItem("hasNavigated", "true");
  }, []);

  const handleEnter = () => {
    startAudio();
  };

  const handleClose = () => {
    // Just close the modal, don't start audio
    // Audio playing state is already cleared in WelcomeModal
  };

  return (
    <>
      <WelcomeModal onEnter={handleEnter} onClose={handleClose} />
      {children}
    </>
  );
}

