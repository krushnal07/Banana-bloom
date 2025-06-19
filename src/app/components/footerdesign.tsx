"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Bananas are always cool
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Leverage the power of bananas to create a beautiful life
      </p>
    </WavyBackground>
  );
}
export default WavyBackgroundDemo;
