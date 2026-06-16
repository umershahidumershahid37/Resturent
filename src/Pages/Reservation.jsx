import React from 'react'

const Reservation = () => {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 pt-28 pb-16">
      <div className=" lg:px-8 mt-14 max-w-[95%] mx-auto px-6 md:px-0 ">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.35em]  text-slate-950 font-semibold">Reserve a table</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-amber-500 ">Book your table at Dum Pukht House</h1>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600 leading-8">
            Choose your date, time, and party size, and our team will prepare a warm welcome for you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-amber-500 mb-5">Reservation details</h2>
            <div className="space-y-5 text-slate-600">
              <div>
                <h3 className="text-lg font-medium text-slate-900">Premium dining experience</h3>
                <p className="mt-2">Enjoy our signature biryani, slow-cooked curries, and handcrafted desserts in a cozy ambience.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-900">Private groups</h3>
                <p className="mt-2">We can accommodate private parties, family gatherings, and special celebrations.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-900">Easy booking</h3>
                <p className="mt-2">Fill the form and our staff will confirm your reservation quickly.</p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl bg-amber-50 border border-amber-200 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-600 font-semibold">Need help?</p>
              <p className="mt-3 text-slate-700">Call us at <span className="font-semibold text-slate-950">+92 300 1234567</span> for urgent bookings or special requests.</p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700">Phone</label>
                <input
                  type="tel"
                  placeholder="03xx-xxxxxxx"
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-slate-700">Date</label>
                  <input
                    type="date"
                    className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700">Time</label>
                  <input
                    type="time"
                    className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700">Guests</label>
                <select className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100">
                  <option>2 people</option>
                  <option>4 people</option>
                  <option>6 people</option>
                  <option>8 people</option>
                  <option>10+ people</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700">Special requests</label>
                <textarea
                  rows="4"
                  placeholder="Any special request?"
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 resize-none"
                />
              </div>

              <button className="w-full rounded-3xl bg-amber-500 px-6 py-3 text-sm font-bold uppercase tracking-[0.25em] text-slate-950 transition hover:bg-amber-400">
                Confirm reservation
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Reservation
