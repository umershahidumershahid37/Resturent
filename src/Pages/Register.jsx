import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  User,
} from "lucide-react";
import Footer from "../component/Footer";

const Register = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-black">

      {/* MAIN CONTENT */}
      <div className="flex flex-1">

        {/* LEFT SIDE - FORM */}
        <div className="flex items-center justify-center p-6 bg-gradient-to-br from-zinc-950 to-black flex-1">

          <div className="w-full max-w-[450px] rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">

            <div className="text-center">
              <h2 className="text-4xl font-bold text-white">Register</h2>
              <p className="mt-2 text-zinc-400 text-sm">
                Create your account
              </p>
            </div>

            <form className="mt-8 space-y-5">

              {/* NAME */}
              <div>
                <label className="text-zinc-300 text-sm">Full Name</label>
                <div className="relative mt-2">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl bg-zinc-900/80 border border-zinc-700 py-3 pl-11 pr-4 text-white text-sm focus:border-amber-400 outline-none"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-zinc-300 text-sm">Email</label>
                <div className="relative mt-2">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl bg-zinc-900/80 border border-zinc-700 py-3 pl-11 pr-4 text-white text-sm focus:border-amber-400 outline-none"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label className="text-zinc-300 text-sm">Password</label>
                <div className="relative mt-2">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
                  <input
                    type={show ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full rounded-xl bg-zinc-900/80 border border-zinc-700 py-3 pl-11 pr-12 text-white text-sm focus:border-amber-400 outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500"
                  >
                    {show ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* BUTTON */}
              <button className="w-full rounded-xl py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase tracking-wider flex justify-center items-center gap-2 text-sm transition">
                Create Account
                <ArrowRight size={18} />
              </button>

              {/* LOGIN LINK */}
              <p className="text-center text-zinc-500 text-sm">
                Already have account?
                <Link to="/login" className="text-amber-400 ml-2">
                  Login
                </Link>
              </p>

            </form>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex relative overflow-hidden flex-1">

          <img
            src="/login-bg.jpg"
            alt="Restaurant"
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

          <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-amber-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 p-16 flex flex-col justify-center">

            <p className="uppercase tracking-[0.4em] text-amber-400 font-bold text-sm">
              Join Us
            </p>

            <h1 className="text-[64px] leading-[70px] font-black mt-6 text-white">
              Dum <br />
              Pukht <br />
              House
            </h1>

            <p className="mt-6 text-white/80 text-base max-w-[420px] leading-7">
              Create your account and start booking tables instantly.
            </p>

          </div>
        </div>

      </div>

      {/* FOOTER */}
     <Footer/>

    </div>
  );
};

export default Register;