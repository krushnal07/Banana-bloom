"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

const products = [
  {
    image: "https://i.postimg.cc/kX3XZXQj/Whats-App-Image-2025-06-13-at-12-02-33-5831bc6b.jpg",
    title: "Organic Banana Powder",
    description:
      "Made from carefully dried and ground ripe bananas, our banana powder is perfect for smoothies, baby food, and natural baking. Rich in potassium, fiber, and flavor.",
    price: "$15",
  },
  {
    image: "https://i.postimg.cc/PJttxQmV/image.png",
    title: "Fresh Raw Bananas",
    description:
      "Harvested at peak firmness, raw bananas are ideal for cooking. A great source of resistant starch and fiber, perfect for savory dishes like banana curry or chips.",
    price: "$10 / kg",
  },
  {
    image: "https://i.postimg.cc/gk2zb4cn/image.png",
    title: "Naturally Ripe Bananas",
    description:
      "Sweet, soft, and full of nutrients—our ripe bananas are a delicious and healthy snack. Great for direct consumption or baking your next banana bread masterpiece.",
    price: "$8 / dozen",
  },
];

export function BackgroundGradientDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-6">
      {products.map((product, index) => (
        <BackgroundGradient
          key={index}
          className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"
        >
          <img
            src={product.image}
            alt={product.title}
            height="300"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            {product.title}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {product.description}
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              {product.price}
            </span>
          </button>
        </BackgroundGradient>
      ))}
    </div>
  );
}

export default BackgroundGradientDemo;
