"use client";
import { useState, useEffect } from "react";

const images = [
  "/slideshow/img1.jpg",
  "/slideshow/img2.jpg",
  "/slideshow/img3.jpg",
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[400px] h-[300px] overflow-hidden">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Buttons */}
      <button
        onClick={() =>
          setIndex((index - 1 + images.length) % images.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1"
      >
        ❮
      </button>

      <button
        onClick={() =>
          setIndex((index + 1) % images.length)
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1"
      >
        ❯
      </button>
    </div>
  );
}