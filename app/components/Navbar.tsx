"use client";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  const headerClass = navState
    ? "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-50 blur-xl bg-slate-300 bg-slate-300 cursor-pointer"
    : "w-full h-[60px] absolute top-0 left-0 right-0 opacity-100 z-[200] bg-slate-300 cursor-pointer";

  return (
    <>
      <header className={headerClass}>
        <div className="absolute top-3">
          <figure className="text-black">LOGO</figure>
        </div>
        <ul className="flex justify-end items-center gap-10 text-black absolute top-4 right-0">
          <li>Movies</li>
          <li>Anime</li>
          <li>Drama</li>
          <div className="input-section">
            <input
              type="text"
              name="search_bar"
              className={`w-48 h-6 rounded-md focus:outline-none text-slate-800 text-center focus:text-start`}
              placeholder="Search movies.. 🔎 "
            />
          </div>
        </ul>
      </header>
    </>
  );
}
export default Navbar;