import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Reservation = () => {
  return (
    <>

      {/* NAVBAR */}
      {/* <Navbar /> */}

      {/* PAGE */}
      <main className="bg-[#faf8f4]">

        <div className="max-w-[1400px] mx-auto px-6 py-20">

          {/* HEADER */}

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.35em] text-amber-500 font-semibold">
              Reserve a table
            </p>

            <h1 className="mt-5 text-5xl font-black text-slate-950">
              Book your table at Dum Pukht House
            </h1>

            <p className="mt-6 max-w-[700px] mx-auto text-slate-600 leading-8">
              Choose your date, time, and party size,
              and our team will prepare a warm welcome
              for you.
            </p>

          </div>

          {/* CONTENT */}

          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">

            {/* LEFT */}

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

              <h2 className="text-2xl font-semibold text-amber-500 mb-5">
                Reservation details
              </h2>

              <div className="space-y-5 text-slate-600">

                <div>

                  <h3 className="text-lg font-medium text-slate-900">
                    Premium dining experience
                  </h3>

                  <p className="mt-2">
                    Enjoy our signature biryani,
                    slow-cooked curries, and handcrafted
                    desserts in a cozy ambience.
                  </p>

                </div>

                <div>

                  <h3 className="text-lg font-medium text-slate-900">
                    Private groups
                  </h3>

                  <p className="mt-2">
                    We can accommodate private parties,
                    family gatherings, and celebrations.
                  </p>

                </div>

                <div>

                  <h3 className="text-lg font-medium text-slate-900">
                    Easy booking
                  </h3>

                  <p className="mt-2">
                    Fill the form and our staff will
                    confirm your reservation quickly.
                  </p>

                </div>

              </div>

              <div className="mt-8 rounded-3xl bg-amber-50 border border-amber-200 p-6">

                <p className="uppercase tracking-[0.35em] text-amber-600 font-semibold">
                  Need help?
                </p>

                <p className="mt-3 text-slate-700">
                  Call us at
                  <span className="font-semibold text-black">
                    {" "}
                    +92 300 1234567
                  </span>
                </p>

              </div>

            </div>

            {/* RIGHT */}

            <div className="rounded-[2rem] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">

              <form className="space-y-6">

                <div>

                  <label className="block text-sm font-semibold text-slate-700">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-amber-500"
                  />

                </div>

                <div>

                  <label className="block text-sm font-semibold text-slate-700">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-amber-500"
                  />

                </div>

                <div>

                  <label className="block text-sm font-semibold text-slate-700">
                    Phone
                  </label>

                  <input
                    type="tel"
                    placeholder="03xx-xxxxxxx"
                    className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-amber-500"
                  />

                </div>

                <div className="grid sm:grid-cols-2 gap-5">

                  <div>

                    <label className="block text-sm font-semibold">
                      Date
                    </label>

                    <input
                      type="date"
                      className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3"
                    />

                  </div>

                  <div>

                    <label className="block text-sm font-semibold">
                      Time
                    </label>

                    <input
                      type="time"
                      className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3"
                    />

                  </div>

                </div>

                <div>

                  <label className="block text-sm font-semibold">
                    Guests
                  </label>

                  <select className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3">

                    <option>2 people</option>
                    <option>4 people</option>
                    <option>6 people</option>
                    <option>8 people</option>
                    <option>10+ people</option>

                  </select>

                </div>

                <div>

                  <label className="block text-sm font-semibold">
                    Special requests
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Any special request?"
                    className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 resize-none"
                  />

                </div>

                <button
                  className="
                  w-full
                  rounded-3xl
                  bg-amber-500
                  px-6
                  py-4
                  uppercase
                  font-bold
                  tracking-[0.2em]
                  hover:bg-amber-400
                  "
                >
                  Confirm reservation
                </button>

              </form>

            </div>

          </div>

        </div>

      </main>

      {/* FOOTER */}
      <Footer />

    </>
  );
};

export default Reservation;