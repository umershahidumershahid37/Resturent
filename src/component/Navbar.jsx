import React from "react";
import { ShoppingBag, User, Heart, Calendar } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/AboutUs" },
    { name: "Menu", to: "/Menu" },
    { name: "Deals", to: "/Deals" },
    { name: "Gallery", to: "/Gallery" }, // Yahan path match kiya hai
    { name: "Reservations", to: "/Reservation" },
    { name: "Contact", to: "/Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/90 backdrop-blur-xl py-4 border-b border-amber-500/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
      <div className="max-w-[93%] mx-auto px-6 md:px-0 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png" 
            alt="Dum Pukht House logo"
            className="h-14 w-14 rounded-full object-cover border border-amber-500/40"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-serif font-extrabold uppercase text-zinc-100">
              Dum Pukht
            </h1>
            <p className="text-[10px] uppercase tracking-[0.4em] text-amber-500">
              House
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/Reservation"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] bg-amber-500 text-zinc-950 rounded-sm shadow-lg"
          >
            <Calendar className="w-5 h-5" />
            Book A Table
          </Link>

          <div className="hidden lg:flex items-center gap-4 border-l border-zinc-800 pl-6 text-zinc-400">
            <button className="p-2 hover:text-amber-400">
              <User className="w-6 h-6" />
            </button>
            <button className="p-2 hover:text-amber-400">
              <Heart className="w-6 h-6" />
            </button>
            <button className="relative p-2 hover:text-amber-400">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 text-[8px] font-bold bg-amber-500 text-zinc-950 w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center gap-10 mt-3 px-6 md:px-12 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-300">
        {links.map((link) => (
          <Link key={link.name} to={link.to} className="hover:text-amber-400 transition-colors duration-300">
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;