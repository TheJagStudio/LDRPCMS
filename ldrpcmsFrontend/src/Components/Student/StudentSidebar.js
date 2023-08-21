import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Atoms
import { useAtom } from "jotai";
import { tempUserName, sideBarAtom } from "../../Variables";


const StudentSidebar = () => {
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
            name: "Dashboard",
            location: "/student",
        },
        {
            svg: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M19.7274 20.4471C19.2716 19.1713 18.2672 18.0439 16.8701 17.2399C15.4729 16.4358 13.7611 16 12 16C10.2389 16 8.52706 16.4358 7.12991 17.2399C5.73276 18.0439 4.72839 19.1713 4.27259 20.4471" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                    <circle cx={12} cy={8} r={4} stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                </svg>
            ),
            name: "Profile",
            location: "/student/profile",
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
            location: "/student/calendar",
        },
        {
            svg: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <circle cx={12} cy={8} r={3} stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                    <path d="M15.268 8a2 2 0 1 1 3.464 2 2 2 0 0 1-3.464-2Zm-10 0a2 2 0 1 1 3.464 2 2 2 0 0 1-3.464-2Z" stroke="currentColor" strokeWidth={2} />
                    <path d="m16.882 18-.98.197.16.803h.82v-1Zm3.838-1.096.943-.334-.943.334Zm-5.94-2.194-.604-.796-1.157.879 1.234.767.528-.85ZM19.868 17h-2.985v2h2.985v-2Zm-.09.238a.208.208 0 0 1-.005-.103.217.217 0 0 1 .043-.097c.032-.04.059-.038.052-.038v2c1.146 0 2.274-1.08 1.796-2.43l-1.885.668ZM17 15c1.642 0 2.403 1.181 2.778 2.238l1.885-.668C21.198 15.259 19.948 13 17 13v2Zm-1.614.507C15.77 15.215 16.282 15 17 15v-2c-1.162 0-2.097.362-2.824.914l1.21 1.593Zm-1.133.053c1.039.646 1.474 1.772 1.648 2.637l1.96-.394c-.217-1.083-.824-2.867-2.552-3.942l-1.056 1.699Zm-5.033-.85.527.85 1.234-.767-1.157-.879-.605.796Zm-5.94 2.194.942.334-.942-.334ZM7.118 18v1h.82l.16-.803-.98-.197ZM7 15c.718 0 1.23.215 1.614.507l1.21-1.593C9.097 13.362 8.162 13 7 13v2Zm-2.778 2.238C4.597 16.181 5.358 15 7 15v-2c-2.948 0-4.198 2.259-4.663 3.57l1.885.668ZM4.132 17c-.006 0 .02-.002.053.038a.218.218 0 0 1 .043.097.21.21 0 0 1-.006.103l-1.885-.668C1.86 17.92 2.987 19 4.133 19v-2Zm2.986 0H4.133v2h2.985v-2Zm.98 1.197c.175-.865.61-1.991 1.65-2.637l-1.058-1.7c-1.728 1.075-2.335 2.86-2.553 3.942l1.96.394Z" fill="currentColor" />
                    <path d="M12 14c3.572 0 4.592 2.551 4.883 4.009.109.541-.33.991-.883.991H8c-.552 0-.992-.45-.883-.991C7.408 16.55 8.428 14 12 14Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                </svg>
            ),
            name: "Group",
            location: "/student/group",
        },
        {
            svg: (
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <g clip-path="url(#clip0_3415_12454)">
                        <path d="M19.535 3.12202L17.879 1.46402C17.4157 0.998333 16.8646 0.629159 16.2576 0.377864C15.6507 0.126569 14.9999 -0.00185599 14.343 2.02654e-05H8C6.67441 0.00160812 5.40356 0.528902 4.46622 1.46624C3.52888 2.40358 3.00159 3.67443 3 5.00002V19C3.00159 20.3256 3.52888 21.5965 4.46622 22.5338C5.40356 23.4711 6.67441 23.9984 8 24H16C17.3256 23.9984 18.5964 23.4711 19.5338 22.5338C20.4711 21.5965 20.9984 20.3256 21 19V6.65702C21.0016 6.0002 20.873 5.34959 20.6215 4.74281C20.37 4.13604 20.0007 3.58515 19.535 3.12202ZM18.121 4.53602C18.2628 4.67734 18.3898 4.83282 18.5 5.00002H16V2.50002C16.1669 2.61134 16.3227 2.7386 16.465 2.88002L18.121 4.53602ZM19 19C19 19.7957 18.6839 20.5587 18.1213 21.1213C17.5587 21.684 16.7956 22 16 22H8C7.20435 22 6.44129 21.684 5.87868 21.1213C5.31607 20.5587 5 19.7957 5 19V5.00002C5 4.20437 5.31607 3.44131 5.87868 2.8787C6.44129 2.31609 7.20435 2.00002 8 2.00002H14V5.00002C14 5.53045 14.2107 6.03916 14.5858 6.41423C14.9609 6.78931 15.4696 7.00002 16 7.00002H19V19ZM16 9.00002C16.2652 9.00002 16.5196 9.10538 16.7071 9.29291C16.8946 9.48045 17 9.73481 17 10C17 10.2652 16.8946 10.5196 16.7071 10.7071C16.5196 10.8947 16.2652 11 16 11H8C7.73478 11 7.48043 10.8947 7.29289 10.7071C7.10536 10.5196 7 10.2652 7 10C7 9.73481 7.10536 9.48045 7.29289 9.29291C7.48043 9.10538 7.73478 9.00002 8 9.00002H16ZM17 14C17 14.2652 16.8946 14.5196 16.7071 14.7071C16.5196 14.8947 16.2652 15 16 15H8C7.73478 15 7.48043 14.8947 7.29289 14.7071C7.10536 14.5196 7 14.2652 7 14C7 13.7348 7.10536 13.4805 7.29289 13.2929C7.48043 13.1054 7.73478 13 8 13H16C16.2652 13 16.5196 13.1054 16.7071 13.2929C16.8946 13.4805 17 13.7348 17 14ZM16.808 17.413C16.9634 17.6269 17.0279 17.8936 16.9872 18.1548C16.9466 18.416 16.8041 18.6505 16.591 18.807C15.5778 19.529 14.3778 19.9432 13.135 20C12.4089 19.9965 11.7048 19.7501 11.135 19.3C10.807 19.075 10.682 19 10.435 19C9.76643 19.1035 9.13562 19.3769 8.603 19.794C8.39175 19.9446 8.13024 20.0072 7.87369 19.9686C7.61715 19.93 7.38565 19.7932 7.22808 19.5871C7.07052 19.381 6.99922 19.1217 7.02925 18.864C7.05927 18.6063 7.18827 18.3704 7.389 18.206C8.27018 17.522 9.32828 17.1036 10.439 17C11.1051 17.0107 11.7491 17.2409 12.271 17.655C12.5089 17.869 12.8152 17.9913 13.135 18C13.9527 17.9388 14.739 17.6594 15.412 17.191C15.6266 17.0355 15.8942 16.9715 16.1559 17.0131C16.4177 17.0547 16.6522 17.1986 16.808 17.413Z" fill="currentColor" />
                    </g>
                    <defs>
                        <clipPath>
                            <rect width="24" height="24" fill="currentColor" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            name: "Request",
            location: "/student/request-form",
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
            location: "/student/space",
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

export default StudentSidebar;
