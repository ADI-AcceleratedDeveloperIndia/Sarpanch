"use client";

import WelcomeModal from "./WelcomeModal";
import { useAudio } from "./AudioProvider";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { startAudio } = useAudio();

  const handleEnter = () => {
    startAudio();
  };

  return (
    <>
      <WelcomeModal onEnter={handleEnter} />
      {children}
    </>
  );
}

