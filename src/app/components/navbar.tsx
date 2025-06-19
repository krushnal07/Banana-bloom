"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
//import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Banana Types">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/ripe-banana">Ripe Banana</HoveredLink>
            <HoveredLink href="/raw-banana">Raw Banana</HoveredLink>
            <HoveredLink href="/banana-powder">Banana Powder</HoveredLink>
            <HoveredLink href="/banana-leaf">Banana Leaf</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Banana Powder"
              href="/banana-powder"
              src="https://i.postimg.cc/kX3XZXQj/Whats-App-Image-2025-06-13-at-12-02-33-5831bc6b.jpg"
              description="Perfect for smoothies, baking, and baby food."
            />
            <ProductItem
              title="Raw Banana"
              href="/raw-banana"
              src="https://i.postimg.cc/PJttxQmV/image.png"
              description="Ideal for cooking – fiber-rich and versatile."
            />
            <ProductItem
              title="Ripe Banana"
              href="/ripe-banana"
              src="https://i.postimg.cc/gk2zb4cn/image.png"
              description="Sweet, soft, and energy-boosting snack."
            />
            <ProductItem
              title="Banana Chips"
              href="/banana-chips"
              src="https://www.shutterstock.com/image-photo/crispy-banana-chips-snack-600nw-2257186873.jpg"
              description="Crispy and flavorful tropical snack."
            />
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Usage">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/cooking">Cooking</HoveredLink>
            <HoveredLink href="/snacking">Snacking</HoveredLink>
            <HoveredLink href="/healthcare">Health Benefits</HoveredLink>
            <HoveredLink href="/traditional-use">Traditional Uses</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
