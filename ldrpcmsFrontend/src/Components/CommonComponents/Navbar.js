import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAtom } from "jotai";
import { userInfo } from "../../Variables";

const Navbar = () => {
    const [scroll, setScroll] = useState(true);
    const [userInfoAtom, setUserInfoAtom] = useAtom(userInfo);
    const [role, setRole] = useState("/superadmin");
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 300) {
                setScroll(false);
            } else {
                setScroll(true);
            }
        });
        // let data = localStorage.getItem("user");
        // let Temprole = data.role;
        // if (Temprole === "Admin") {
        //     setRole("/superadmin");
        // } else if (Temprole === "HOD") {
        //     setRole("/admin");
        // } else if (Temprole === "Faculty") {
        //     setRole("/faculty");
        // } else if (Temprole === "Student") {
        //     setRole("/student");
        // }
    }, []);

    return (
        <header className={"w-screen z-40 fixed top-0 left-0 flex items-center justify-between transition-all duration-300 " + (scroll ? "text-white bg-transparent xl:px-40 lg:px-20 md:px-14 px-5 h-24 backdrop-blur-lg" : "text-textColor-700 bg-white shadow-xl px-5 lg:px-20 h-16")}>
            <div className="flex items-center justify-center gap-3">
                <button
                    onClick={() => {
                        document.getElementById("mobileMenu").classList.remove("-translate-x-full");
                    }}
                    className="w-8 h-8 block md:hidden"
                >
                    <svg fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>
                <h2 className="text-2xl font-bold">LDRP ITR</h2>
            </div>
            <div className="w-64 relative  rounded-full lg:flex hidden">
                {/* <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-textColor-500 absolute top-1/2 -translate-y-1/2 left-3">
                    <circle cx={11} cy={11} r={6} stroke="currentColor" />
                    <path d="M11 8a3 3 0 0 0-3 3m12 9-3-3" stroke="currentColor" strokeLinecap="round" />
                </svg>
                <input type="text" placeholder="Search..." className="w-full  p-3 pl-12 bg-transparent shadowCustom text-sm outline-none " /> */}
            </div>
            <ul className=" items-center justify-center gap-6 hidden md:flex">
                <li className="font-light cursor-pointer">About</li>
                <li className="font-light cursor-pointer">Services</li>
                <li className="font-light cursor-pointer">Gallery</li>
                {/* <li className="font-light cursor-pointer">Our Team</li> */}
                <NavLink to="/superadmin" className="font-light cursor-pointer">
                    Dashboard
                </NavLink>
            </ul>
            <div id="mobileMenu" className="-translate-x-full fixed top-0 left-0 flex px-10 flex-col gap-3 text-xl items-center justify-center w-full h-screen bg-white transition-all duration-300">
                <button
                    className="absolute top-10 right-10"
                    onClick={() => {
                        document.getElementById("mobileMenu").classList.add("-translate-x-full");
                    }}
                >
                    <svg width={25} height={25} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.64 1.27 7.5 6.13l4.84-4.84A.92.92 0 0 1 13 1a1 1 0 0 1 1 1 .9.9 0 0 1-.27.66L8.84 7.5l4.89 4.89A.9.9 0 0 1 14 13a1 1 0 0 1-1 1 .92.92 0 0 1-.69-.27L7.5 8.87l-4.85 4.85A.92.92 0 0 1 2 14a1 1 0 0 1-1-1 .9.9 0 0 1 .27-.66L6.16 7.5 1.27 2.61A.9.9 0 0 1 1 2a1 1 0 0 1 1-1c.24.003.47.1.64.27z" />
                    </svg>
                </button>
                <NavLink to="/" className="font-medium py-2 rounded-lg hover:bg-primary-300 w-full text-center cursor-pointer text-black">
                    About
                </NavLink>
                <NavLink to="/" className="font-medium py-2 rounded-lg hover:bg-primary-300 w-full text-center cursor-pointer text-black">
                    Services
                </NavLink>
                <NavLink to="/" className="font-medium py-2 rounded-lg hover:bg-primary-300 w-full text-center cursor-pointer text-black">
                    Gallery
                </NavLink>
                {/* {userInfoAtom?.username !== "" && (
                    <NavLink to={role} className="font-medium py-2 rounded-lg hover:bg-primary-300 w-full text-center cursor-pointer text-black">
                        Dashboard
                    </NavLink>
                )} */}
            </div>
            {userInfoAtom?.username !== "" ? (
                <div className="flex items-center gap-2">
                    <div className="lg:w-7 lg:h-7 w-10 h-10 bg-white flex items-center justify-center rounded-full overflow-hidden shadow-sm text-primary-600 cursor-pointer">
                        <img src={process.env.REACT_APP_SERVER + "/api/main/avatarCreator?gender=" + userInfoAtom.gender + "&name=" + userInfoAtom.first_name + userInfoAtom.last_name} className="w-full h-full object-cover object-center" alt="" />
                    </div>
                    <p className="text-white text-sm font-bold lg:block hidden">{userInfoAtom.first_name + " " + userInfoAtom.last_name}</p>
                </div>
            ) : (
                <NavLink to="/login" className={(scroll ? "" : "border border-textColor-600") + " p-2.5 px-4 rounded bg-white/10"}>
                    Login
                </NavLink>
            )}
        </header>
    );
};

export default Navbar;
