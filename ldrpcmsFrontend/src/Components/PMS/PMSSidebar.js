import React, { useState } from "react";

// Atoms
import { useAtom } from "jotai";
import { tempUserName, sideBarAtom } from "../../Variables";
import { NavLink } from "react-router-dom";

const PMSSidebar = () => {
    const [sideBar, setSideBar] = useAtom(sideBarAtom);
    const [tempUser, setTempUser] = useAtom(tempUserName);
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
            location: "/pms",
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
            location: "/pms/calendar",
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
            name: "Groups",
            location: "/pms/groups",
        },
        {
            svg: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M4.32698 6.63803L5.21799 7.09202L4.32698 6.63803ZM4.7682 20.2318L4.06109 19.5247H4.06109L4.7682 20.2318ZM18.362 16.673L18.816 17.564L18.816 17.564L18.362 16.673ZM19.673 15.362L20.564 15.816L20.564 15.816L19.673 15.362ZM19.673 6.63803L20.564 6.18404L20.564 6.18404L19.673 6.63803ZM18.362 5.32698L18.816 4.43597L18.816 4.43597L18.362 5.32698ZM5.63803 5.32698L6.09202 6.21799L5.63803 5.32698ZM7.70711 17.2929L7 16.5858L7.70711 17.2929ZM5 9.8C5 8.94342 5.00078 8.36113 5.03755 7.91104C5.07337 7.47262 5.1383 7.24842 5.21799 7.09202L3.43597 6.18404C3.18868 6.66937 3.09012 7.18608 3.04419 7.74817C2.99922 8.2986 3 8.97642 3 9.8H5ZM5 12V9.8H3V12H5ZM3 12V17H5V12H3ZM3 17V19.9136H5V17H3ZM3 19.9136C3 21.2054 4.56185 21.8524 5.4753 20.9389L4.06109 19.5247C4.40757 19.1782 5 19.4236 5 19.9136H3ZM5.4753 20.9389L8.41421 18L7 16.5858L4.06109 19.5247L5.4753 20.9389ZM15.2 16H8.41421V18H15.2V16ZM17.908 15.782C17.7516 15.8617 17.5274 15.9266 17.089 15.9624C16.6389 15.9992 16.0566 16 15.2 16V18C16.0236 18 16.7014 18.0008 17.2518 17.9558C17.8139 17.9099 18.3306 17.8113 18.816 17.564L17.908 15.782ZM18.782 14.908C18.5903 15.2843 18.2843 15.5903 17.908 15.782L18.816 17.564C19.5686 17.1805 20.1805 16.5686 20.564 15.816L18.782 14.908ZM19 12.2C19 13.0566 18.9992 13.6389 18.9624 14.089C18.9266 14.5274 18.8617 14.7516 18.782 14.908L20.564 15.816C20.8113 15.3306 20.9099 14.8139 20.9558 14.2518C21.0008 13.7014 21 13.0236 21 12.2H19ZM19 9.8V12.2H21V9.8H19ZM18.782 7.09202C18.8617 7.24842 18.9266 7.47262 18.9624 7.91104C18.9992 8.36113 19 8.94342 19 9.8H21C21 8.97642 21.0008 8.2986 20.9558 7.74817C20.9099 7.18608 20.8113 6.66937 20.564 6.18404L18.782 7.09202ZM17.908 6.21799C18.2843 6.40973 18.5903 6.71569 18.782 7.09202L20.564 6.18404C20.1805 5.43139 19.5686 4.81947 18.816 4.43597L17.908 6.21799ZM15.2 6C16.0566 6 16.6389 6.00078 17.089 6.03755C17.5274 6.07337 17.7516 6.1383 17.908 6.21799L18.816 4.43597C18.3306 4.18868 17.8139 4.09012 17.2518 4.04419C16.7014 3.99922 16.0236 4 15.2 4V6ZM8.8 6H15.2V4H8.8V6ZM6.09202 6.21799C6.24842 6.1383 6.47262 6.07337 6.91104 6.03755C7.36113 6.00078 7.94342 6 8.8 6V4C7.97642 4 7.2986 3.99922 6.74817 4.04419C6.18608 4.09012 5.66937 4.18868 5.18404 4.43597L6.09202 6.21799ZM5.21799 7.09202C5.40973 6.71569 5.71569 6.40973 6.09202 6.21799L5.18404 4.43597C4.43139 4.81947 3.81947 5.43139 3.43597 6.18404L5.21799 7.09202ZM8.41421 18V16C7.88378 16 7.37507 16.2107 7 16.5858L8.41421 18Z" fill="currentColor" />
                    <path d="M8 9L16 9" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 13L13 13" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            name: "Space",
            location: "/pms/space",
        },
        {
            svg: (
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <path d="M3 7c0-1.886 0-2.828.586-3.414C4.172 3 5.114 3 7 3h10c1.886 0 2.828 0 3.414.586C21 4.172 21 5.114 21 7v10c0 1.886 0 2.828-.586 3.414C19.828 21 18.886 21 17 21H7c-1.886 0-2.828 0-3.414-.586C3 19.828 3 18.886 3 17V7Z" stroke="currentColor" strokeWidth={2} />
                    <path fillRule="evenodd" clipRule="evenodd" d="M18 10h-5.343c-.818 0-1.226 0-1.594-.152-.368-.152-.657-.442-1.235-1.02l-.656-.656c-.578-.578-.868-.868-1.235-1.02C7.569 7 7.16 7 6.343 7H3v10c0 1.886 0 2.828.586 3.414C4.172 21 5.114 21 7 21h10c1.886 0 2.828 0 3.414-.586C21 19.828 21 18.886 21 17V7c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C19.398 10 18.932 10 18 10ZM7 15a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H7Z" fill="currentColor" />
                </svg>
            ),
            name: "PMS",
            location: "/pms/pms",
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
                        className={"transition-all duration-500 h-10 " + (link.location === currLocation ? "bg-primary-600" : "bg-white") + " flex items-center justify-center shadow-sm " + (sideBar ? "w-full px-3 rounded-lg" : "w-10 rounded-[20px]")}
                    >
                        <span className={link.location === currLocation ? "text-white" : "text-primary-600"}>{link.svg}</span>
                        <p className={"overflow-hidden " + (link.location === currLocation ? "text-white" : "text-primary-600") + " transition-all duration-500 " + (sideBar ? "lg:w-24 w-auto ml-2.5" : "w-0 ml-0")}>{link.name}</p>
                    </NavLink>
                ))}
            </div>

            {/* Profile Div */}
            <div className="w-full flex flex-col items-center justify-center gap-5 px-6">
                <NavLink to="/">
                    <div className={"bg-white shadow-sm flex items-center h-10 transition-all duration-500 cursor-pointer " + (sideBar ? "w-full px-3 rounded-lg" : "w-10 rounded-[20px]")}>
                        <div className={"bg-white flex items-center justify-center rounded-full overflow-hidden text-primary-600 transition-all duration-500 " + (sideBar ? "!w-7 !h-7" : "!w-10 !h-10")}>
                            <img src={process.env.REACT_APP_SERVER + "/api/main/avatarCreator?gender=" + tempUser.gender + "&name=" + tempUser.name} alt="" className=" w-full h-full aspect-square object-cover object-center rounded" id="profileImg" />
                        </div>
                        <div className={"flex items-center overflow-hidden transition-all duration-500 " + (sideBar ? "lg:w-20 w-auto ml-2 gap-1" : "w-0 ml-0 gap-0")}>
                            <svg viewBox="0 0 24 24" fill="none" className="!w-4 !h-4 text-primary-600">
                                <g clipPath="url(#a)">
                                    <path d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5Zm13-6v-3h-7v-2h7V8l5 4-5 4Z" fill="currentColor" />
                                </g>
                                <defs>
                                    <clipPath id="a">
                                        <path fill="#fff" d="M0 0h24v24H0z" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="text-primary-600 transition-all duration-500">Logout</p>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default PMSSidebar;
