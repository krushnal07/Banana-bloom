"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-black dark:bg-white rounded-md flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Bananas are proof that nature loves packaging — biodegradable, nutritious, and shaped like a smile.",
    name: "Fruit Philosopher",
    title: "Banana Wisdom Vol. I",
  },
  {
    quote:
      "You can't buy happiness, but you can buy bananas — and that's pretty much the same thing.",
    name: "Anonymous",
    title: "Grocery Store Gospel",
  },
  {
    quote:
      "A banana a day keeps the cramp away. Nature's energy bar, no wrapper needed.",
    name: "Dr. Peel Good",
    title: "The Yellow Remedy",
  },
  {
    quote:
      "If life gives you bananas, just make a smoothie and carry on.",
    name: "Optimist Monkey",
    title: "Jungle Logic",
  },
  {
    quote:
      "Bananas: the only fruit that gets sweeter as it bruises. There’s a lesson in that.",
    name: "Life Coach Ape",
    title: "Soft Spots and Sweetness",
  },
  {
    quote:
      "Slip-ups happen. Even bananas have their peels.",
    name: "Slippy McSlide",
    title: "Fruit Failures and Recovery",
  },
];

export default InfiniteMovingCardsDemo;
