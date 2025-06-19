import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      {/* <HoverEffect items={projects} /> */}
    </div>
  );
}

export const projects = [
  {
    title: "Banana Powder",
    description:
      "Made from dehydrated ripe bananas, this powder is perfect for smoothies, baby food, and natural baking. Nutrient-rich and shelf-stable.",
    link: "#",
  },
  {
    title: "Raw Banana",
    description:
      "A starchy green fruit used in savory dishes like chips and curries. High in fiber and resistant starch—ideal for cooking.",
    link: "#",
  },
  {
    title: "Ripe Banana",
    description:
      "Naturally sweet, soft, and packed with potassium and energy. Great as a snack, in desserts, or blended into smoothies.",
    link: "#",
  },
  {
    title: "Banana Chips",
    description:
      "Crunchy, delicious, and made by frying or baking slices of raw banana. A perfect on-the-go snack with a tropical twist.",
    link: "#",
  },
  {
    title: "Banana Smoothie",
    description:
      "A refreshing and energizing drink made with ripe bananas, milk, and your favorite add-ons like oats or peanut butter.",
    link: "#",
  },
  {
    title: "Banana Leaf",
    description:
      "Used in cooking and as natural serving plates in many cultures. Eco-friendly, aromatic, and biodegradable.",
    link: "#",
  },
];

export default CardHoverEffectDemo;
