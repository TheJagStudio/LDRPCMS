import React, { useEffect, useState } from "react";

const Navbar = () => {
    const [scroll, setScroll] = useState(true);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 300) {
                setScroll(false);
                console.log(window.scrollY);
            } else {
                setScroll(true);
            }
        });
    }, []);

    return (
        <header className={"w-screen z-40 fixed top-0 left-0 flex items-center justify-between transition-all duration-300 " + (scroll ? "text-white bg-transparent lg:px-40 h-24 backdrop-blur-lg" : "text-textColor-700 bg-white shadow-xl lg:px-20 h-16")}>
            <div className="flex items-center justify-center gap-3">
                <button className="w-8 h-8">
                    <svg fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>
                <h2 className="text-2xl font-bold">LDRP ITR</h2>
            </div>
            <div className="w-64 relative border rounded-full">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-textColor-500 absolute top-1/2 -translate-y-1/2 left-3">
                    <circle cx={11} cy={11} r={6} stroke="currentColor" />
                    <path d="M11 8a3 3 0 0 0-3 3m12 9-3-3" stroke="currentColor" strokeLinecap="round" />
                </svg>
                <input type="text" placeholder="Search..." className="w-full  p-3 pl-12 bg-transparent shadowCustom text-sm outline-none " />
            </div>
            <ul className="flex items-center justify-center gap-6">
                <li className="font-light">About</li>
                <li className="font-light">Services</li>
                <li className="font-light">Reviews</li>
                <li className="font-light">Contacts</li>
            </ul>
            <a href="/" className={(scroll ? "" : "border border-textColor-600") + " p-2.5 px-4 rounded bg-white/10"}>
                Get In Touch
            </a>
        </header>
    );
};

export default Navbar;
