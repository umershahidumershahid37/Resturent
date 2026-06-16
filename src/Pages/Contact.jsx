import React from 'react'

const Contact = () => {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 pt-28 pb-16">
      <div className="lg:px-8 mt-14 max-w-[97%] mx-auto px-6 md:px-0">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.35em]  text-slate-950font-semibold">Get in touch</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-amber-500 ">Contact Dum Pukht House</h1>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600 leading-8">
            Have a question, reservation request, or special event inquiry? Our team is ready to help with warm hospitality and fast response.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-500 font-semibold">Visit us</p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-950">Our location</h2>
              <p className="mt-3 text-slate-600 leading-7">
                Gulberg, Lahore
                <br />
                Near Liberty Market, opposite Central Park.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs uppercase tracking-[0.35em] text-amber-500 font-semibold">Phone</p>
                <p className="mt-3 text-lg font-semibold text-slate-950">+92 300 1234567</p>
                <p className="mt-2 text-slate-600">Call to reserve your table instantly.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs uppercase tracking-[0.35em] text-amber-500 font-semibold">Email</p>
                <p className="mt-3 text-lg font-semibold text-slate-950">info@dumpukht.pk</p>
                <p className="mt-2 text-slate-600">Send us your message and we will reply soon.</p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-500 font-semibold">Opening Hours</p>
              <ul className="mt-4 space-y-3 text-slate-600">
                <li className="flex justify-between"><span>Monday - Saturday</span><span className="font-semibold text-slate-950">12PM - 11PM</span></li>
                <li className="flex justify-between"><span>Sunday</span><span className="font-semibold text-slate-950">Closed</span></li>
              </ul>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-500 font-semibold">Send us a message</p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-950">Contact form</h2>
            <p className="mt-3 text-slate-600 leading-7">Share your reservation details or ask about private dining and catering.</p>

            <form className="mt-8 space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell us what you need..."
                  className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-100 outline-none resize-none"
                />
              </div>

              <button className="w-full rounded-3xl bg-amber-500 px-6 py-3 text-sm font-bold uppercase tracking-[0.25em] text-slate-950 transition hover:bg-amber-400">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
