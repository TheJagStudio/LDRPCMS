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
                <svg viewBox="0 0 32 32" className="w-6 h-6">
                    <path d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm0 30C8.28 30 2 23.72 2 16S8.28 2 16 2s14 6.28 14 14-6.28 14-14 14zm6.47-21.848-3.722 2.324-2.486 1.55a3.977 3.977 0 0 1 3.712 3.712l1.55-2.484 2.324-3.724a1 1 0 0 0-1.378-1.378zm-10.444 8.11-1.55 2.486-2.324 3.724A.996.996 0 0 0 9 24c.184 0 .368-.05.53-.152l3.722-2.324 2.486-1.55a3.979 3.979 0 0 1-3.712-3.712zm4.236-4.236C16.174 12.02 16.09 12 16 12c-2.21 0-4 1.79-4 4 0 .09.02.174.026.262a3.979 3.979 0 0 0 3.712 3.712c.088.006.172.026.262.026 2.21 0 4-1.79 4-4 0-.09-.02-.174-.026-.262a3.979 3.979 0 0 0-3.712-3.712zM14 16c0-1.102.898-2 2-2s2 .898 2 2-.898 2-2 2-2-.898-2-2z" fill="currentColor" />
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
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                    <path d="M4.82698 7.13803L5.27248 7.36502L4.82698 7.13803ZM5.2682 18.7318L5.62175 19.0854H5.62175L5.2682 18.7318ZM17.862 16.173L17.635 15.7275L17.862 16.173ZM19.173 14.862L18.7275 14.635L19.173 14.862ZM19.173 7.13803L18.7275 7.36502V7.36502L19.173 7.13803ZM17.862 5.82698L18.089 5.38148V5.38148L17.862 5.82698ZM6.13803 5.82698L6.36502 6.27248L6.13803 5.82698ZM7.20711 16.7929L7.56066 17.1464L7.20711 16.7929ZM5 10.3C5 9.45167 5.00039 8.84549 5.03921 8.37032C5.07756 7.90099 5.15089 7.60366 5.27248 7.36502L4.38148 6.91103C4.17609 7.31413 4.08593 7.75771 4.04253 8.28889C3.99961 8.81423 4 9.46817 4 10.3H5ZM5 11.5V10.3H4V11.5H5ZM4 11.5V16.5H5V11.5H4ZM4 16.5V18.4136H5V16.5H4ZM4 18.4136C4 19.26 5.02329 19.6838 5.62175 19.0854L4.91465 18.3782C4.91754 18.3753 4.92812 18.368 4.94323 18.3654C4.9556 18.3632 4.96421 18.3654 4.96913 18.3674C4.97406 18.3695 4.98164 18.374 4.98888 18.3843C4.99771 18.3968 5 18.4095 5 18.4136H4ZM5.62175 19.0854L7.56066 17.1464L6.85355 16.4393L4.91465 18.3782L5.62175 19.0854ZM14.7 16H7.91421V17H14.7V16ZM17.635 15.7275C17.3963 15.8491 17.099 15.9224 16.6297 15.9608C16.1545 15.9996 15.5483 16 14.7 16V17C15.5318 17 16.1858 17.0004 16.7111 16.9575C17.2423 16.9141 17.6859 16.8239 18.089 16.6185L17.635 15.7275ZM18.7275 14.635C18.4878 15.1054 18.1054 15.4878 17.635 15.7275L18.089 16.6185C18.7475 16.283 19.283 15.7475 19.6185 15.089L18.7275 14.635ZM19 11.7C19 12.5483 18.9996 13.1545 18.9608 13.6297C18.9224 14.099 18.8491 14.3963 18.7275 14.635L19.6185 15.089C19.8239 14.6859 19.9141 14.2423 19.9575 13.7111C20.0004 13.1858 20 12.5318 20 11.7H19ZM19 10.3V11.7H20V10.3H19ZM18.7275 7.36502C18.8491 7.60366 18.9224 7.90099 18.9608 8.37032C18.9996 8.84549 19 9.45167 19 10.3H20C20 9.46817 20.0004 8.81423 19.9575 8.28889C19.9141 7.75771 19.8239 7.31413 19.6185 6.91103L18.7275 7.36502ZM17.635 6.27248C18.1054 6.51217 18.4878 6.89462 18.7275 7.36502L19.6185 6.91103C19.283 6.25247 18.7475 5.71703 18.089 5.38148L17.635 6.27248ZM14.7 6C15.5483 6 16.1545 6.00039 16.6297 6.03921C17.099 6.07756 17.3963 6.15089 17.635 6.27248L18.089 5.38148C17.6859 5.17609 17.2423 5.08593 16.7111 5.04253C16.1858 4.99961 15.5318 5 14.7 5V6ZM9.3 6H14.7V5H9.3V6ZM6.36502 6.27248C6.60366 6.15089 6.90099 6.07756 7.37032 6.03921C7.84549 6.00039 8.45167 6 9.3 6V5C8.46817 5 7.81423 4.99961 7.28889 5.04253C6.75771 5.08593 6.31413 5.17609 5.91103 5.38148L6.36502 6.27248ZM5.27248 7.36502C5.51217 6.89462 5.89462 6.51217 6.36502 6.27248L5.91103 5.38148C5.25247 5.71703 4.71703 6.25247 4.38148 6.91103L5.27248 7.36502ZM7.56066 17.1464C7.65443 17.0527 7.78161 17 7.91421 17V16C7.51639 16 7.13486 16.158 6.85355 16.4393L7.56066 17.1464Z" fill="currentColor" />
                    <path d="M8.5 9.5L15.5 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.5 12.5L13.5 12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            name: "HOD",
            location: "/HOD",
        },
        {
            svg: (
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <path d="M21 6L15.7071 11.2929C15.3166 11.6834 14.6834 11.6834 14.2929 11.2929L12.7071 9.70711C12.3166 9.31658 11.6834 9.31658 11.2929 9.70711L7 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 3V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H21" stroke="currentColor" strokeLinecap="round" />
                </svg>
            ),
            name: "Analytics",
            location: "/analytics",
        },
        {
            svg: (
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                    <path d="M21 20H3" stroke="currentColor" strokeLinecap="round" />
                    <path d="M10 16V10C10 8.89543 9.10457 8 8 8V8C6.89543 8 6 8.89543 6 10V16" stroke="currentColor" strokeLinecap="round" />
                    <path d="M18 16V6C18 4.89543 17.1046 4 16 4V4C14.8954 4 14 4.89543 14 6V16" stroke="currentColor" strokeLinecap="round" />
                </svg>
            ),
            name: "Charts",
            location: "/charts",
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
                        className={"transition-all duration-500 h-10 " + (currLocation === link.location ? "bg-primary-600" : "bg-white") + " flex items-center justify-center shadow-sm " + (sideBar ? "w-full px-3 rounded-lg" : "w-10 rounded-[20px]")}
                    >
                        <span className={currLocation === link.location ? "text-white" : "text-primary-600"}>{link.svg}</span>
                        <p className={"overflow-hidden " + (currLocation === link.location ? "text-white" : "text-primary-600") + " transition-all duration-500 " + (sideBar ? "lg:w-24 w-auto ml-2.5" : "w-0 ml-0")}>{link.name}</p>
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
