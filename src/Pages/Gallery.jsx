import React from 'react'
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
  ]

  return (
    <>
      <main className="min-h-screen bg-slate-100 text-slate-900 pt-28 pb-16">
        <div className=" lg:px-8 mt-14 max-w-[93%] mx-auto px-6 md:px-0">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-500 font-semibold">Restaurant Gallery</p>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-950">Explore our dining experience</h1>
            <p className="mt-4 max-w-2xl mx-auto text-slate-600 leading-8">
              Discover the atmosphere, cuisine, and hospitality at Dum Pukht House through our curated photo gallery.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {images.map((image, index) => (  // ✅ index add kiya
              <div key={index} className="group overflow-hidden rounded-[2rem] bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.label}
                    className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>
                </div>
                <div className="p-5">
                  <p className="text-sm uppercase tracking-[0.35em] text-amber-500 font-semibold">Featured</p>
                  <h2 className="mt-3 text-lg font-semibold text-slate-950">{image.label}</h2>
                  <p className="mt-2 text-sm text-slate-600">A beautiful moment from our restaurant highlighted for guests.</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] bg-zinc-950 px-8 py-12 text-white shadow-[0_20px_80px_rgba(15,23,42,0.25)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-amber-400 font-semibold">Visit us</p>
                <h2 className="mt-3 text-3xl font-bold">Plan your next experience with us</h2>
                <p className="mt-4 max-w-2xl text-slate-300 leading-7">
                  Book a table, celebrate special moments, and enjoy premium Pakistani cuisine in a warm atmosphere.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-900/80 px-6 py-5">
                  <p className="text-sm uppercase tracking-[0.35em] text-amber-400 font-semibold">Location</p>
                  <p className="mt-3 text-lg font-semibold">Gulberg, Lahore</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 px-6 py-5">
                  <p className="text-sm uppercase tracking-[0.35em] text-amber-400 font-semibold">Hours</p>
                  <p className="mt-3 text-lg font-semibold">12PM - 11PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer /> {/* ✅ Footer ab main ke bahar hai */}
    </>
  )
}

export default Gallery