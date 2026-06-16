import React, { useState } from 'react';

const Imeges = () => {
  const images = [
    '/gallery1.png',
    '/gallery2.png',
    '/gallery3.png',
    '/gallery4.png',
    '/gallery5.png',
    '/gallery6.png',
    '/gallery7.png',
    '/gallery8.png',
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 4) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 4 + images.length) % images.length);
  };

  const visibleImages = [
    images[current],
    images[(current + 1) % images.length],
    images[(current + 2) % images.length],
    images[(current + 3) % images.length],
  ];

  return (
    <section className="w-full py-12 bg-slate-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-amber-400">Gallery</h2>
        <p className="text-gray-600 mt-2">Ambiance and experiences</p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleImages.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-3xl bg-white shadow-xl">
              <img
                src={src}
                alt={`gallery-${index}`}
                className="h-[300px] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-slate-800/75 px-4 py-3 text-white shadow-lg hover:bg-slate-900 transition"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-slate-800/75 px-4 py-3 text-white shadow-lg hover:bg-slate-900 transition"
        >
          ›
        </button>

        <div className="mt-6 flex justify-center gap-3">
          {images.map((_, index) => {
            const isActive = [
              current,
              (current + 1) % images.length,
              (current + 2) % images.length,
              (current + 3) % images.length,
            ].includes(index);
            return (
              <span
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 w-3 rounded-full cursor-pointer transition ${isActive ? 'bg-slate-900' : 'bg-slate-400'}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Imeges;
