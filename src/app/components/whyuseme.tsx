"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Banana Powder",
    description:
      "Banana powder is made by drying and grinding ripe bananas. It's rich in potassium, natural sugars, and dietary fiber—perfect for smoothies, baby food, and baking. A nutritious boost with a naturally sweet flavor.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://i.postimg.cc/kX3XZXQj/Whats-App-Image-2025-06-13-at-12-02-33-5831bc6b.jpg"
          alt="Banana Powder"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Raw Banana",
    description:
      "Raw bananas are firm, starchy, and ideal for cooking. Common in savory dishes, they're packed with fiber and resistant starch, aiding digestion and blood sugar control. A staple in many tropical cuisines.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://i.postimg.cc/PJttxQmV/image.png"
          alt="Raw Banana"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Ripe Banana",
    description:
      "Ripe bananas are sweet, soft, and nutrient-rich—perfect for snacking or adding to cereals, smoothies, or desserts. They're high in potassium, vitamin B6, and natural energy-boosting sugars.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://i.postimg.cc/gk2zb4cn/image.png"
          alt="Ripe Banana"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Banana in Your Daily Life",
    description:
      "Whether it's breakfast, workout fuel, or a natural sweetener for recipes, bananas adapt to your needs. Their versatility, affordability, and nutritional profile make them an everyday superfruit.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--green-300),var(--yellow-400))] text-black font-semibold text-lg">
        Everyday Banana Benefits
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}

export default StickyScrollRevealDemo;
