import React from 'react'
import { ArrowRight } from 'lucide-react'

const Landing = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1920"
          alt="Luxury Awadhi Charcoal Feast Background"
          className="w-full h-full object-cover scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-zinc-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(9,9,11,0.95)_90%)]" />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-zinc-950 to-transparent" />
      </div>

      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-amber-600/10 blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-yellow-600/5 blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-12">
        <div className="lg:col-span-7 text-center lg:text-left space-y-6 max-w-2xl mx-auto lg:mx-0">
          <div className="inline-flex items-center gap-3 bg-zinc-900/60 border border-amber-500/20 backdrop-blur-md px-4 py-1.5 rounded-full shadow-[inset_0_1px_12px_rgba(245,158,11,0.05)]">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-400">
              The Heritage Grandeur of Awadh
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl xl:text-7xl font-serif font-light tracking-wide leading-[1.1] text-zinc-50">
            Where Royal <span className="font-extrabold italic bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent drop-shadow-sm">Tradition</span> Meets Culinary Art
          </h2>

          <p className="text-zinc-400 text-sm md:text-base leading-relaxed tracking-wide font-light max-w-xl mx-auto lg:mx-0">
            Indulge in the legendary slow-cooked art of Dum Pukht. Every dish is a carefully preserved masterpiece from royal courts, simmered in heavy brass vessels over charcoal embers to unleash unrivaled, fragrant complexity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="#menu"
              className="group relative w-full sm:w-auto text-center px-8 py-4 bg-zinc-900 border border-amber-500/30 hover:border-amber-400/80 transition-all duration-300 rounded-none overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 w-0 bg-amber-500/5 transition-all duration-300 group-hover:w-full" />
              <span className="relative text-xs font-bold uppercase tracking-[0.2em] text-amber-400 group-hover:text-amber-300 flex items-center justify-center gap-2">
                Explore Royal Menu <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a
              href="#our-story"
              className="w-full sm:w-auto text-center px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-zinc-100 transition-colors duration-300"
            >
              Discover Our Story
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-12 border-t border-zinc-900/80 max-w-md mx-auto lg:mx-0">
            <div>
              <p className="text-xl md:text-2xl font-serif font-bold text-amber-400">100%</p>
              <p className="text-[9px] uppercase tracking-wider text-zinc-500 font-semibold mt-1">Slow Cooked</p>
            </div>
            <div className="border-x border-zinc-900 px-4">
              <p className="text-xl md:text-2xl font-serif font-bold text-amber-400">35+</p>
              <p className="text-[9px] uppercase tracking-wider text-zinc-500 font-semibold mt-1">Secret Spices</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-serif font-bold text-amber-400">Michelin</p>
              <p className="text-[9px] uppercase tracking-wider text-zinc-500 font-semibold mt-1">Standard Chefs</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 hidden lg:block relative">
          <div className="relative z-10 w-full aspect-[4/5] rounded-t-full border border-amber-500/20 p-3 bg-zinc-900/20 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="w-full h-full rounded-t-full overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=1200"
                alt="Fine Dining Signature Plate Layout"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
            </div>
          </div>

          <div className="absolute -bottom-6 -left-10 z-20 bg-zinc-900/90 border border-zinc-800 backdrop-blur-md p-5 shadow-2xl max-w-[220px]">
            <p className="text-amber-500 font-serif italic text-lg">Chef's Special</p>
            <p className="text-zinc-200 text-xs font-semibold uppercase tracking-wider mt-1">Dum Pukht Biryani</p>
            <p className="text-zinc-500 text-[11px] mt-1.5 leading-relaxed">Sealed in a hand-crafted clay pot, slow cooked for 6 hours.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
