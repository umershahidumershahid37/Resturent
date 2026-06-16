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
    <section className="bg-slate-100 py-14">
      {/* Cards component jaisa container padding */}
      <div className="sm:px-6 max-w-[93%] mx-auto px-6 md:px-0">
        
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold tracking-tight text-amber-400 sm:text-5xl">
            Gallery
          </h2>
          <p className="text-slate-600 mt-2">Ambiance and experiences</p>
        </div>

        <div className="relative">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {visibleImages.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-[32px] bg-white shadow-[0_26px_60px_rgba(15,23,42,0.12)]">
                <img
                  src={src}
                  alt={`gallery-${index}`}
                  className="h-72 w-full object-cover transition duration-500 hover:scale-105"
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
      </div>
    </section>
  );
};

export default Imeges;