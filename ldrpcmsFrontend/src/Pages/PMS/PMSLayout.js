import React from "react";
import { Outlet } from "react-router-dom";

// Atoms
import { useAtom } from "jotai";
import { sideBarAtom } from "../../Variables";

// Components
import Navbar from "../../Components/Common/Navbar";
import PMSSidebar from "../../Components/PMS/PMSSidebar";

const PMSLayout = () => {
    const [sideBar, setSideBar] = useAtom(sideBarAtom);
    return (
        <div>
            {/* <img src="/images/homePage.png" alt="Placeholder" className="-z-50 opacity-75 absolute top-0 left-0" /> */}
            <Navbar />
            <div className="w-full h-full min-h-[calc(100vh-6rem)] flex flex-nowrap mt-24">
                <PMSSidebar />
                <div className={"transition-all duration-500 " + (sideBar ? "lg:w-[calc(100%-12rem)] lg:ml-48" : "w-full lg:w-[calc(100%-6rem)] lg:ml-24")}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default PMSLayout;
