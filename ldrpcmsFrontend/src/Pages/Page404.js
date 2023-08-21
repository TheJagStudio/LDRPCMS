import React from "react";
import { NavLink } from "react-router-dom";

const Page404 = () => {
    return (
        <main className="grid w-screen h-screen grid-cols-1 place-items-center overflow-hidden hue-rotate-[10deg]" style={{ backgroundImage: 'url("/static/svg/ufobg.svg")', backgroundSize: "cover", backgroundRepeat: "no-reapet", backgroundPosition: "center" }}>
            <div className="max-w-[26rem] text-center">
                <div className="w-full">
                    <img className="w-full hue-rotate-[10deg]" src="/static/svg/ufo.svg" alt="ufo" />
                </div>
                <div className="-hue-rotate-[10deg] mb-8">
                    <p className="pt-4 text-7xl font-bold text-primary-950">404</p>
                    <p className="pt-4 text-xl font-semibold text-primary-950">Oops. This Page Not Found.</p>
                    <p className="pt-2 text-primary-600">This page you are looking not available</p>
                </div>

                <NavLink to={"/"} className="py-3 bg-primary-600 -hue-rotate-[10deg] text-base rounded-lg px-5 font-medium text-white hover:bg-primary-500 hover:shadow-lg hover:shadow-primary/50 focus:bg-primary-focus focus:shadow-lg focus:shadow-primary/50 active:bg-primary-focus/90">
                    Back To Home
                </NavLink>
            </div>
        </main>
    );
};

export default Page404;
