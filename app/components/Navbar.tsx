"use client";
import React, { useEffect, useState } from "react";

const Navbar = () => {
    const [navSatate, setNavState] = useState(false);

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
    return (
        <>
            <header
                className={
                    !navSatate
                        ? "absolute top-7 left-0 right-0 opacity-100 z-[200]  bg-slate-300"
                        : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-50 blur-effect-theme  bg-slate-300"
                }
            >
                <nav className="flex items-center justify-between nike-container">
                    <div className="flex items-center">LOGO</div>
                </nav>
                <ul className="flex items-center justify-center gap-2">
                    <li className="grid items-center">item 1</li>
                    <li className="grid items-center">item 2</li>
                    <li className="grid items-center">
                        <button
                            type="button"
                            className="border-none outline-none active:scale-110 transition-all duration-300 relative"
                        >
                            item 3
                        </button>
                    </li>
                </ul>
            </header>
        </>
    );
};

export default Navbar;
