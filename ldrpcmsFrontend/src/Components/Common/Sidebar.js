import React, { useState } from "react";

// Atoms
import { useAtom } from "jotai";
import { sideBarAtom } from "../../Variables";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const [sideBar, setSideBar] = useAtom(sideBarAtom);
    const [currLocation, setCurrLocation] = useState("/" + window.location.pathname.split("/").pop());
    const sidebarLinks = [
        {
            svg: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x={4} y={4} width={6} height={7} rx={1} fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
                    <rect x={4} y={15} width={6} height={5} rx={1} fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
                    <rect x={14} y={4} width={6} height={5} rx={1} fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
                    <rect x={14} y={13} width={6} height={7} rx={1} fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
                </svg>
            ),
            name: "Home",
            location: "/",
        },
        {
            svg: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x={3} y={6} width={18} height={15} rx={2} stroke="currentColor" strokeWidth={2} />
                    <path d="M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10H3Z" fill="currentColor" />
                    <path d="M7 3L7 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                    <path d="M17 3L17 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                    <rect x={7} y={12} width={4} height={2} rx={0.5} fill="currentColor" />
                    <rect x={7} y={16} width={4} height={2} rx={0.5} fill="currentColor" />
                    <rect x={13} y={12} width={4} height={2} rx={0.5} fill="currentColor" />
                    <rect x={13} y={16} width={4} height={2} rx={0.5} fill="currentColor" />
                </svg>
            ),
            name: "Calendar",
            location: "/calendar",
        },
        {
            svg: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={12} cy={8} r={3} stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                    <path d="M15.268 8a2 2 0 1 1 3.464 2 2 2 0 0 1-3.464-2Zm-10 0a2 2 0 1 1 3.464 2 2 2 0 0 1-3.464-2Z" stroke="currentColor" strokeWidth={2} />
                    <path d="m16.882 18-.98.197.16.803h.82v-1Zm3.838-1.096.943-.334-.943.334Zm-5.94-2.194-.604-.796-1.157.879 1.234.767.528-.85ZM19.868 17h-2.985v2h2.985v-2Zm-.09.238a.208.208 0 0 1-.005-.103.217.217 0 0 1 .043-.097c.032-.04.059-.038.052-.038v2c1.146 0 2.274-1.08 1.796-2.43l-1.885.668ZM17 15c1.642 0 2.403 1.181 2.778 2.238l1.885-.668C21.198 15.259 19.948 13 17 13v2Zm-1.614.507C15.77 15.215 16.282 15 17 15v-2c-1.162 0-2.097.362-2.824.914l1.21 1.593Zm-1.133.053c1.039.646 1.474 1.772 1.648 2.637l1.96-.394c-.217-1.083-.824-2.867-2.552-3.942l-1.056 1.699Zm-5.033-.85.527.85 1.234-.767-1.157-.879-.605.796Zm-5.94 2.194.942.334-.942-.334ZM7.118 18v1h.82l.16-.803-.98-.197ZM7 15c.718 0 1.23.215 1.614.507l1.21-1.593C9.097 13.362 8.162 13 7 13v2Zm-2.778 2.238C4.597 16.181 5.358 15 7 15v-2c-2.948 0-4.198 2.259-4.663 3.57l1.885.668ZM4.132 17c-.006 0 .02-.002.053.038a.218.218 0 0 1 .043.097.21.21 0 0 1-.006.103l-1.885-.668C1.86 17.92 2.987 19 4.133 19v-2Zm2.986 0H4.133v2h2.985v-2Zm.98 1.197c.175-.865.61-1.991 1.65-2.637l-1.058-1.7c-1.728 1.075-2.335 2.86-2.553 3.942l1.96.394Z" fill="currentColor" />
                    <path d="M12 14c3.572 0 4.592 2.551 4.883 4.009.109.541-.33.991-.883.991H8c-.552 0-.992-.45-.883-.991C7.408 16.55 8.428 14 12 14Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                </svg>
            ),
            name: "Users",
            location: "/users",
        },
        {
            svg: (
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <path d="M21 6L15.7071 11.2929C15.3166 11.6834 14.6834 11.6834 14.2929 11.2929L12.7071 9.70711C12.3166 9.31658 11.6834 9.31658 11.2929 9.70711L7 14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 3V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H21" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                </svg>
            ),
            name: "PMS",
            location: "/pms",
        },
        {
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 32 32">
                    <path d="M31 4h-3V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h3v5a1 1 0 0 0 1 1h9l3.293 3.293a.997.997 0 0 0 1.414 0L22 28h9a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 2v20h-8.828L18 29.172 14.828 26H6V6h24zM2 20V2h24v3H6a1 1 0 0 0-1 1v14H2zm8-8h16v1H10v-1zm0 3h16v1H10v-1zm0 3h16v1H10v-1z" fill="currentColor" />
                </svg>
            ),
            name: "Space",
            location: "/space",
        },
    ];

    return (
        <div className={"h-[calc(100vh-6rem)] bg-bgColor fixed top-24  flex flex-col items-start justify-between py-6  border-r border-borderColor noScrollbar transition-all duration-500 overflow-hidden z-10  " + (sideBar ? "w-full lg:w-48" : "w-0 lg:w-24 px-0 lg:px-3")}>
            {/* Icons Div */}
            <div className="w-full flex flex-col items-center justify-center gap-5 px-6">
                {sidebarLinks.map((link, i) => (
                    <NavLink
                        onClick={() => {
                            setCurrLocation(link.location);
                        }}
                        to={link.location}
                        key={i}
                        className={"transition-all duration-500 h-10 " + ((currLocation !== "/" ? link.location.includes(currLocation) : link.location === currLocation) ? "bg-primary-600" : "bg-white") + " flex items-center justify-center shadow-sm " + (sideBar ? "w-full px-3 rounded-lg" : "w-10 rounded-[20px]")}
                    >
                        <span className={(currLocation !== "/" ? link.location.includes(currLocation) : link.location === currLocation) ? "text-white" : "text-primary-600"}>{link.svg}</span>
                        <p className={"overflow-hidden " + ((currLocation !== "/" ? link.location.includes(currLocation) : link.location === currLocation) ? "text-white" : "text-primary-600") + " transition-all duration-500 " + (sideBar ? "lg:w-24 w-auto ml-2.5" : "w-0 ml-0")}>{link.name}</p>
                    </NavLink>
                ))}
            </div>

            {/* Profile Div */}
            <div className="w-full flex flex-col items-center justify-center gap-5">
                {/* Navigation */}
                <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-sm text-primary-600">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-primary-600">
                        <path d="M12 6L12 18" stroke="currentColor" strokeLinecap="round" />
                        <path d="M18 12L6 12" stroke="currentColor" strokeLinecap="round" />
                    </svg>
                </div>
                {/* Person 1 */}
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full overflow-hidden shadow-sm text-primary-600">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className="w-full h-full object-cover object-center" alt="" />
                </div>
                {/* Person 2 */}
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full overflow-hidden shadow-sm text-primary-600">
                    <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="w-full h-full object-cover object-center" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
