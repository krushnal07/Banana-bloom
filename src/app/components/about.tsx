"use client";
import React from "react";

export function AboutUsWithContact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-white dark:text-white mb-6">
        🍌 About BananaBloom
      </h1>

      {/* About Section */}
      <div className="text-lg text-white dark:text-neutral-300 space-y-6">
        <p>
          Welcome to <strong>BananaBloom</strong> – your trusted source for exploring
          the beauty, health, and quality of bananas. From lush trees to ripe
          fruits, our mission is to help people discover and enjoy the full
          potential of nature’s most iconic fruit.
        </p>

        <p>
          Whether you're here to learn about banana quality, find healthy fruit,
          or simply enjoy the tropical vibe, we offer insights and images that
          bring the banana journey to life.
        </p>

        <p>
          Our work is rooted in sustainability, education, and accessibility —
          providing accurate, beautiful, and useful content to banana lovers
          everywhere.
        </p>

        <p>
          🍃 We also highlight banana leaves, uses in eco-packaging, and cultural
          relevance. Every detail matters to us, and we’re excited to grow with
          you.
        </p>
      </div>

      {/* Banana Tree Image */}
      {/* <div className="mt-10 text-center">
        <img
        //  src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Banana_tree.jpg"
        //  alt="Banana Tree"
        //  className="rounded-xl shadow-lg mx-auto max-w-full w-[90%]"
        />
        <p className="text-sm text-neutral-500 mt-2">
          A view from our inspiration – the banana tree in full bloom.
        </p>
      </div> */}

      {/* Contact Section */}
      <div className="mt-16 border-t pt-8">
        <h2 className="text-3xl font-semibold text-white dark:text-white text-center mb-6">
          📞 Contact Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-white dark:text-neutral-200">
          <div>
            <h3 className="font-medium text-lg mb-1">Email</h3>
            <p className="text-sm">krushnalpatil2955@gmail.com</p>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">Phone</h3>
            <p className="text-sm">9301811322</p>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">Location</h3>
            <p className="text-sm">Burhanpur,Madhya-Pradesh , India</p>
          </div>
        </div>

        <div className="text-center text-sm text-neutral-500 mt-8">
          &copy; {new Date().getFullYear()} BananaBloom. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default AboutUsWithContact;
