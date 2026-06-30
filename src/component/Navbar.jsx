import React, { useState } from "react";
import {
  ShoppingBag,
  User,
  Heart,
  Calendar,
  Menu,
  X,
} from "lucide-react";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/AboutUs" },
    { name: "Menu", to: "/Menu" },
    { name: "Deals", to: "/Deals" },
    { name: "Gallery", to: "/Gallery" },
    { name: "Reservations", to: "/Reservation" },
    { name: "Contact", to: "/Contact" },
  ];

  return (
    <nav className="bg-zinc-950">

      {/* TOP */}

      <div className="flex justify-between items-center px-6 md:px-12 py-2">

        {/* LOGO */}

        <Link to="/">
          <div>

            <h1 className="text-[40px] font-black text-amber-500">
              Dum Pukht
            </h1>

            <p className="text-[12px] tracking-[6px] text-white">
              House
            </p>

          </div>
        </Link>

        {/* RIGHT */}

        <div className="flex items-center gap-4">

          {/* BOOK + LOGIN */}

          <div className="hidden lg:flex items-center gap-3">

            <Link
              to="/Reservation"
              className="
              inline-flex
              items-center
              gap-2
              px-5
              py-3
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              bg-amber-500
              text-zinc-950
              rounded-sm
              shadow-lg
              "
            >
              <Calendar className="w-5 h-5" />
              Book A Table
            </Link>

            <Link
              to="/Login"
              className="
              px-5
              py-3
              border
              border-amber-500
              text-amber-500
              rounded-sm
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              hover:bg-amber-500
              hover:text-black
              transition
              "
            >
              Login
            </Link>

          </div>

          {/* ICONS */}

          <div className="hidden lg:flex items-center gap-4 border-l border-zinc-800 pl-6 text-zinc-400">

            <button className="p-2 hover:text-amber-400">
              <User className="w-6 h-6" />
            </button>

            <button className="p-2 hover:text-amber-400">
              <Heart className="w-6 h-6" />
            </button>

            <button className="relative p-2 hover:text-amber-400">

              <ShoppingBag size={15} />

              <span
                className="
                absolute
                -top-1
                -right-1
                text-[8px]
                font-bold
                bg-amber-500
                text-zinc-950
                w-4
                h-4
                rounded-full
                flex
                items-center
                justify-center
                "
              >
                0
              </span>

            </button>

          </div>

          {/* MOBILE ICON */}

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={32} /> : <Menu size={32} />}
          </button>

        </div>

      </div>

      {/* DESKTOP NAV */}

      <div
        className="
        hidden
        md:flex
        items-center
        justify-center
        gap-10
        mt-8
        pb-4
        px-6
        md:px-12
        text-[11px]
        font-bold
        uppercase
        tracking-[0.25em]
        text-slate-300
        "
      >

        {links.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            className="hover:text-amber-400"
          >
            {link.name}
          </Link>
        ))}

      </div>

      {/* MOBILE DROPDOWN */}

      <div
        className={`
        md:hidden
        overflow-hidden
        transition-all
        duration-300
        bg-zinc-950
        ${open ? "max-h-[600px]" : "max-h-0"}
        `}
      >

        <div className="flex flex-col px-8 py-8 gap-6">

          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setOpen(false)}
              className="
              text-slate-300
              uppercase
              text-sm
              hover:text-amber-400
              "
            >
              {link.name}
            </Link>
          ))}

          {/* MOBILE LOGIN */}

          <Link
            to="/Login"
            onClick={() => setOpen(false)}
            className="
            bg-amber-500
            text-black
            py-3
            rounded
            text-center
            font-bold
            uppercase
            "
          >
            Login
          </Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;