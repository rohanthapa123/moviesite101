"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import Button from "./Button";

const Navbar = () => {
  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    console.log("Scrolling...", window.scrollY);
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
    ? "fixed top-0  h-[9vh]  z-50  bg-white/60 backdrop-blur-sm "
    : "w-full h-[9vh] absolute top-0 left-0 right-0 opacity-100 shadow-md shadow-slate-300 z-[200] bg-slate-900 ";

  return (
    <>
      <header className={`${headerClass}  ease-in transition-all sticky  `}>
        <div className=" w-full h-full flex flex-row justify-around items-center">
          <div className="">
            <figure className="">
              <Image
                src="/images/logo2.png"
                alt="Logo Image"
                height={40}
                width={50}
              />
            </figure>
          </div>

          <div className="">
            <input
              type="text"
              name="search_bar"
              className={`lg:w-96 w-48 h-8 p-4 rounded-md focus:outline-none text-slate-800 text-center focus:text-start`}
              placeholder={`Search movies.. 🔎`}
            />
            {/* <Button value="search" /> */}
          </div>
          <div>

            <ul className={`md:flex justify-end align-middle items-center gap-10  ${navState ? "text-black" : "text-white"} `}>
              <li>Movies</li>
              <li>Anime</li>
              <li>Drama</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
