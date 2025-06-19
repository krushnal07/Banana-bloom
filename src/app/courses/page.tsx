"use client";
import React from "react";
import { BackgroundGradient } from "@/app/components/ui/background-gradient";

const bananaQualities = [
  {
    image:" https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
    title: "Fresh Banana",
    description:
      "Bright yellow, firm texture, and a mildly sweet taste. Ideal for direct consumption and smoothies.",
    tag: "Best Quality",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Bananas_white_background.jpg",
    title: "Ripe Banana",
    description:
      "Soft, very sweet, and slightly spotted skin. Perfect for baking, milkshakes, or quick energy boosts.",
    tag: "Sweet & Soft",
  },
  {
    image: "",
    title: "Overripe Banana",
    description:
      "Brown-spotted or black skin, mushy texture. Best used in banana bread, pancakes, or composting.",
    tag: "For Recipes",
  },
];

export function ExploreBananaQuality() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-black dark:text-white">
        Explore Banana Quality
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bananaQualities.map((banana, index) => (
          <BackgroundGradient
            key={index}
            className="rounded-[22px] max-w-sm p-4 sm:p-6 bg-white dark:bg-zinc-900"
          >
            <img
              src={banana.image}
              alt={banana.title}
              height="200"
              width="400"
              className="object-contain"
            />
            <p className="text-lg font-semibold mt-4 mb-2 text-black dark:text-white">
              {banana.title}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {banana.description}
            </p>
            <button className="rounded-full pl-4 pr-2 py-1 text-white flex items-center space-x-2 bg-yellow-600 mt-4 text-xs font-bold dark:bg-yellow-700">
              <span>Check now</span>
              <span className="bg-yellow-800 rounded-full text-[0.6rem] px-2 py-0 text-white">
                {banana.tag}
              </span>
            </button>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
}

export default ExploreBananaQuality;
