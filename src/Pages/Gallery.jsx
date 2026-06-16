import React from 'react';
import Footer from '../component/Footer';

const Gallery = () => {
  const images = [
    { src: '/gallery1.png', label: 'Elegant dining room' },
    { src: '/gallery2.png', label: 'Chef special platter' },
    { src: '/gallery3.png', label: 'Fine dining setup' },
    { src: '/gallery4.png', label: 'Traditional flavors' },
    { src: '/gallery5.png', label: 'Fresh ingredients' },
    { src: '/gallery6.png', label: 'Warm restaurant interior' },
    { src: '/gallery7.png', label: 'Signature desserts' },
    { src: '/gallery8.png', label: 'Happy guests' },
  ];

  return (
    <>
      <main className="min-h-screen bg-slate-50 text-slate-900 pt-28 pb-16 mt-14">
        <div className="max-w-[95%] mx-auto px-4">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-500 font-bold">Restaurant Gallery</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-slate-950">Explore our dining experience</h1>
            <p className="mt-6 max-w-2xl mx-auto text-slate-600 leading-relaxed text-lg">
              Discover the atmosphere, cuisine, and hospitality at Dum Pukht House through our curated photo gallery.
            </p>
          </div>

          {/* Gallery Grid - Yahan grid-cols-2 ya 3 b karsakte hain agr images bari hon */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {images.map((image, index) => (
              <div key={index} className="group overflow-hidden rounded-[2rem] bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.label}
                    // Yahan height [550px] kar di hai
                    className="h-[200px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>
                </div>
                <div className="p-7">
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-500 font-bold">Featured</p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-950">{image.label}</h2>
                  <p className="mt-2 text-sm text-slate-600">A beautiful moment from our restaurant highlighted for guests.</p>
                </div>
              </div>
            ))}
          </div>

          {/* Info Banner */}
          <div className="mt-24 rounded-[2rem] bg-slate-950 px-10 py-16 text-white shadow-2xl">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-amber-400 font-bold">Visit us</p>
                <h2 className="mt-3 text-4xl font-bold">Plan your next experience with us</h2>
                <p className="mt-4 max-w-xl text-slate-400 leading-7 text-lg">
                  Book a table, celebrate special moments, and enjoy premium Pakistani cuisine in a warm atmosphere.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="rounded-3xl bg-slate-900 px-8 py-6 border border-slate-800">
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-400 font-bold">Location</p>
                  <p className="mt-2 text-lg font-semibold">Gulberg, Lahore</p>
                </div>
                <div className="rounded-3xl bg-slate-900 px-8 py-6 border border-slate-800">
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-400 font-bold">Hours</p>
                  <p className="mt-2 text-lg font-semibold">12PM - 11PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;