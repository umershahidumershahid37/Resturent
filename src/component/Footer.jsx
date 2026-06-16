import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 ht-2">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">
              Dum Pukht House
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-400">
              Experience refined Pakistani dining with rich flavors, elegant service, and a welcoming atmosphere for every guest.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-400">
              <span>Mon - Sat: 12PM - 11PM</span>
              <span className="mx-2 hidden md:inline">•</span>
              <span>Sunday Closed</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                <li><a href="#home" className="transition hover:text-white">Home</a></li>
                <li><a href="#our-story" className="transition hover:text-white">Story</a></li>
                <li><a href="#menu" className="transition hover:text-white">Menu</a></li>
                <li><a href="#reservation" className="transition hover:text-white">Reservation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">
                Contact
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                <li> 📍 Gulberg, Lahore</li>
                <li> 📞 +92 300 1234567</li>
                <li> ✉️ info@dumpukht.pk</li>
                <li> 🌐 www.dumpukht.pk</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 bg-slate-900/90 py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-slate-500">
          <p>© 2026 Dum Pukht House. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="transition hover:text-white">Privacy</a>
            <a href="#" className="transition hover:text-white">Terms</a>
            <a href="#" className="transition hover:text-white">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
