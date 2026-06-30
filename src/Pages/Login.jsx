import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
} from "lucide-react";

const Login = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex min-h-screen">

      {/* LEFT SIDE */}
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
            Welcome Back
          </p>

          <h1 className="text-[64px] leading-[70px] font-black mt-6 text-white">
            Dum <br />
            Pukht <br />
            House
          </h1>

          <p className="mt-6 text-white/80 text-base max-w-[420px] leading-7">
            Reserve tables, manage bookings and enjoy premium dining experiences.
          </p>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center p-6 bg-gradient-to-br from-zinc-950 to-black flex-1">

        <div className="w-full max-w-[450px] rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">

          {/* HEADER */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">Login</h2>
            <p className="mt-2 text-zinc-400 text-sm">
              Sign in to continue
            </p>
          </div>

          {/* FORM */}
          <form className="mt-8 space-y-5">

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

            {/* OPTIONS */}
            <div className="flex justify-between text-sm">
              <label className="flex gap-2 text-zinc-400">
                <input type="checkbox" />
                Remember me
              </label>

              <button type="button" className="text-amber-400">
                Forgot?
              </button>
            </div>

            {/* LOGIN BUTTON */}
            <button className="w-full rounded-xl py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase tracking-wider flex justify-center items-center gap-2 text-sm transition">
              Login
              <ArrowRight size={18} />
            </button>

            {/* SOCIAL */}
            <div className="grid grid-cols-2 gap-3">
              <button className="py-3 rounded-xl border border-zinc-700 text-white text-sm hover:border-amber-500">
                Google
              </button>

              <button className="py-3 rounded-xl border border-zinc-700 text-white text-sm hover:border-amber-500">
                Facebook
              </button>
            </div>

            {/* REGISTER */}
            <p className="text-center text-zinc-500 text-sm">
              Don't have account?
              <Link to="/register" className="text-amber-400 ml-2">
                Register
              </Link>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;