"use client";
import { useState, useEffect } from "react";

const Warning = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={() => setShow(false)}
    >
      <div
        className="mx-4 rounded-2xl bg-white p-10 shadow-2xl text-center max-w-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-5xl mb-4"></div>
        <h2 className="text-xl font-bold text-gray-800 mb-10">
          Best Viewed on Larger Screen
        </h2>
        <p className="text-gray-500 text-sm mb-8">
          For the best experience, please open this on a desktop or laptop.
        </p>
        <button
          onClick={() => setShow(false)}
          className="w-full rounded-xl bg-gray-900 text-white py-3 text-sm font-medium hover:bg-gray-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Warning;
