import React, { useState } from "react";

// Atoms
import { useAtom } from "jotai";
import { tempUserName, sideBarAtom } from "../../Variables";

// Components
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [sideBar, setSideBar] = useAtom(sideBarAtom);
    const [tempUser, setTempUser] = useAtom(tempUserName);
    const [activeTab, setActiveTab] = useState("All");
    const [search, setSearch] = useState([
        {
            suggestion: "lorem ipsumlorem ipsumlorem=psumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
            type: "PMS",
            link: "/superadmin/pms",
        },
        {
            suggestion: "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
            type: "Attendance",
            link: "/superadmin",
        },
        {
            suggestion: "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlo ipsumlorem ipsumlorem ipsum",
            type: "Calendar",
            link: "/superadmin/calendar",
        },
        {
            suggestion: "lorem ipsumlorem ipsumlorem ipsumlorem",
            type: "Chat",
            link: "/superadmin/space",
        },
    ]);
    return (
        <div className="h-24 z-40 w-full fixed top-0 left-0 flex items-center justify-center border-b border-borderColor bg-bgColor">
            <div className="w-full px-6 flex items-center justify-between">
                <div className="flex items-center gap-20">
                    <div className="flex items-center gap-8">
                        <div
                            onClick={() => {
                                setSideBar(!sideBar);
                            }}
                            className="bg-white p-3 rounded-full shadow cursor-pointer"
                        >
                            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-textColor-400">
                                <path className={(sideBar ? "translate-x-2 -translate-y-0.5 rotate-45" : "") + " transition-all"} d="M5 7h14M5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                                <path className={(sideBar ? " scale-x-0" : "") + " transition-all"} d="M5 12h14M5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                                <path className={(sideBar ? "-translate-x-2 translate-y-2 -rotate-45" : "") + " transition-all"} d="M5 17h14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                            </svg>
                        </div>
                        <a href="/" className="font-bold text-textColor-600">
                            LDRP ITR
                        </a>
                    </div>
                    <div className="lg:flex hidden items-center gap-6">
                        <ul className="flex items-center gap-5 text-sm text-textColor-500">
                            <li>
                                <a href="/">Dashboard</a>
                            </li>
                            <li>
                                <a href="/">About Us</a>
                            </li>
                            <li>
                                <a href="/">News</a>
                            </li>
                            <li>
                                <a href="/">User Policy</a>
                            </li>
                            <li>
                                <a href="/">Contacts</a>
                            </li>
                        </ul>
                        <div>
                            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-textColor-500">
                                <circle cx={12} cy={12} r={1} stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                                <circle cx={6} cy={12} r={1} stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                                <circle cx={18} cy={12} r={1} stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-96 relative hidden lg:block">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-textColor-500 absolute top-1/2 -translate-y-1/2 left-3">
                        <circle cx={11} cy={11} r={6} stroke="currentColor" />
                        <path d="M11 8a3 3 0 0 0-3 3m12 9-3-3" stroke="currentColor" strokeLinecap="round" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full rounded-full p-3 pl-12 bg-white shadow text-sm outline-none"
                        onClick={() => {
                            document.getElementById("searchModal").classList.toggle("scale-y-0");
                            document.getElementById("searchModal").classList.toggle("opacity-0");
                        }}
                    />
                    <div
                        id="searchModal"
                        className="w-full absolute top-14 left-0 scale-y-0 opacity-0 origin-top bg-white rounded-lg shadowCustom overflow-hidden transition-all duration-300"
                        onMouseLeave={() => {
                            window.searchModalTimeout = setTimeout(() => {
                                document.getElementById("searchModal").classList.add("scale-y-0");
                                document.getElementById("searchModal").classList.add("opacity-0");
                            }, 1500);
                        }}
                        onMouseEnter={() => {
                            clearTimeout(window.searchModalTimeout);
                        }}
                    >
                        <ul className="w-full bg-textColor-100 flex items-center gap-1 px-2">
                            <TabNavItem title="All" id="All" classes={"py-2.5 px-3 text-center text-center border-b-2 transition-all font-semibold cursor-pointer text-sm " + (activeTab === "All" ? "border-primary-600 text-primary-600" : "border-transparent text-textColor-400")} activeTab={activeTab} setActiveTab={setActiveTab} />
                            <TabNavItem title="PMS" id="PMS" classes={"py-2.5 px-3 text-center text-center border-b-2 transition-all font-semibold cursor-pointer text-sm " + (activeTab === "PMS" ? "border-primary-600 text-primary-600" : "border-transparent text-textColor-400")} activeTab={activeTab} setActiveTab={setActiveTab} />
                            <TabNavItem title="Attendance" id="Attendance" classes={"py-2.5 px-3 text-center text-center border-b-2 transition-all font-semibold cursor-pointer text-sm " + (activeTab === "Attendance" ? "border-primary-600 text-primary-600" : "border-transparent text-textColor-400")} activeTab={activeTab} setActiveTab={setActiveTab} />
                            <TabNavItem title="Calendar" id="Calendar" classes={"py-2.5 px-3 text-center text-center border-b-2 transition-all font-semibold cursor-pointer text-sm " + (activeTab === "Calendar" ? "border-primary-600 text-primary-600" : "border-transparent text-textColor-400")} activeTab={activeTab} setActiveTab={setActiveTab} />
                            <TabNavItem title="Chat" id="Chat" classes={"py-2.5 px-3 text-center text-center border-b-2 transition-all font-semibold cursor-pointer text-sm " + (activeTab === "Chat" ? "border-primary-600 text-primary-600" : "border-transparent text-textColor-400")} activeTab={activeTab} setActiveTab={setActiveTab} />
                        </ul>
                        <div className="w-full bg-white pt-2.5">
                            {search.map((item, index) => (
                                <div key={index} className={"flex items-start gap-2 text-sm text-textColor-500 px-4 border-boderColor last-of-type:border-none cursor-pointer hover:bg-textColor-100 transition-all duration-300 " + (activeTab === item.type || activeTab === "All" ? "scale-100 py-2 border-b" : "py-0 scale-0 h-0 border-none")}>
                                    {item.type === "PMS" && (
                                        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                                            <path d="M3 7c0-1.886 0-2.828.586-3.414C4.172 3 5.114 3 7 3h10c1.886 0 2.828 0 3.414.586C21 4.172 21 5.114 21 7v10c0 1.886 0 2.828-.586 3.414C19.828 21 18.886 21 17 21H7c-1.886 0-2.828 0-3.414-.586C3 19.828 3 18.886 3 17V7Z" stroke="currentColor" strokeWidth={2} />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M18 10h-5.343c-.818 0-1.226 0-1.594-.152-.368-.152-.657-.442-1.235-1.02l-.656-.656c-.578-.578-.868-.868-1.235-1.02C7.569 7 7.16 7 6.343 7H3v10c0 1.886 0 2.828.586 3.414C4.172 21 5.114 21 7 21h10c1.886 0 2.828 0 3.414-.586C21 19.828 21 18.886 21 17V7c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C19.398 10 18.932 10 18 10ZM7 15a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H7Z" fill="currentColor" />
                                        </svg>
                                    )}
                                    {item.type === "Calendar" && (
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x={3} y={6} width={18} height={15} rx={2} stroke="currentColor" strokeWidth={2} />
                                            <path d="M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10H3Z" fill="currentColor" />
                                            <path d="M7 3L7 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                                            <path d="M17 3L17 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                                            <rect x={7} y={12} width={4} height={2} rx={0.5} fill="currentColor" />
                                            <rect x={7} y={16} width={4} height={2} rx={0.5} fill="currentColor" />
                                            <rect x={13} y={12} width={4} height={2} rx={0.5} fill="currentColor" />
                                            <rect x={13} y={16} width={4} height={2} rx={0.5} fill="currentColor" />
                                        </svg>
                                    )}
                                    {item.type === "Chat" && (
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                                            <path d="M4.32698 6.63803L5.21799 7.09202L4.32698 6.63803ZM4.7682 20.2318L4.06109 19.5247H4.06109L4.7682 20.2318ZM18.362 16.673L18.816 17.564L18.816 17.564L18.362 16.673ZM19.673 15.362L20.564 15.816L20.564 15.816L19.673 15.362ZM19.673 6.63803L20.564 6.18404L20.564 6.18404L19.673 6.63803ZM18.362 5.32698L18.816 4.43597L18.816 4.43597L18.362 5.32698ZM5.63803 5.32698L6.09202 6.21799L5.63803 5.32698ZM7.70711 17.2929L7 16.5858L7.70711 17.2929ZM5 9.8C5 8.94342 5.00078 8.36113 5.03755 7.91104C5.07337 7.47262 5.1383 7.24842 5.21799 7.09202L3.43597 6.18404C3.18868 6.66937 3.09012 7.18608 3.04419 7.74817C2.99922 8.2986 3 8.97642 3 9.8H5ZM5 12V9.8H3V12H5ZM3 12V17H5V12H3ZM3 17V19.9136H5V17H3ZM3 19.9136C3 21.2054 4.56185 21.8524 5.4753 20.9389L4.06109 19.5247C4.40757 19.1782 5 19.4236 5 19.9136H3ZM5.4753 20.9389L8.41421 18L7 16.5858L4.06109 19.5247L5.4753 20.9389ZM15.2 16H8.41421V18H15.2V16ZM17.908 15.782C17.7516 15.8617 17.5274 15.9266 17.089 15.9624C16.6389 15.9992 16.0566 16 15.2 16V18C16.0236 18 16.7014 18.0008 17.2518 17.9558C17.8139 17.9099 18.3306 17.8113 18.816 17.564L17.908 15.782ZM18.782 14.908C18.5903 15.2843 18.2843 15.5903 17.908 15.782L18.816 17.564C19.5686 17.1805 20.1805 16.5686 20.564 15.816L18.782 14.908ZM19 12.2C19 13.0566 18.9992 13.6389 18.9624 14.089C18.9266 14.5274 18.8617 14.7516 18.782 14.908L20.564 15.816C20.8113 15.3306 20.9099 14.8139 20.9558 14.2518C21.0008 13.7014 21 13.0236 21 12.2H19ZM19 9.8V12.2H21V9.8H19ZM18.782 7.09202C18.8617 7.24842 18.9266 7.47262 18.9624 7.91104C18.9992 8.36113 19 8.94342 19 9.8H21C21 8.97642 21.0008 8.2986 20.9558 7.74817C20.9099 7.18608 20.8113 6.66937 20.564 6.18404L18.782 7.09202ZM17.908 6.21799C18.2843 6.40973 18.5903 6.71569 18.782 7.09202L20.564 6.18404C20.1805 5.43139 19.5686 4.81947 18.816 4.43597L17.908 6.21799ZM15.2 6C16.0566 6 16.6389 6.00078 17.089 6.03755C17.5274 6.07337 17.7516 6.1383 17.908 6.21799L18.816 4.43597C18.3306 4.18868 17.8139 4.09012 17.2518 4.04419C16.7014 3.99922 16.0236 4 15.2 4V6ZM8.8 6H15.2V4H8.8V6ZM6.09202 6.21799C6.24842 6.1383 6.47262 6.07337 6.91104 6.03755C7.36113 6.00078 7.94342 6 8.8 6V4C7.97642 4 7.2986 3.99922 6.74817 4.04419C6.18608 4.09012 5.66937 4.18868 5.18404 4.43597L6.09202 6.21799ZM5.21799 7.09202C5.40973 6.71569 5.71569 6.40973 6.09202 6.21799L5.18404 4.43597C4.43139 4.81947 3.81947 5.43139 3.43597 6.18404L5.21799 7.09202ZM8.41421 18V16C7.88378 16 7.37507 16.2107 7 16.5858L8.41421 18Z" fill="currentColor" />
                                            <path d="M8 9L16 9" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8 13L13 13" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                    {item.type === "Attendance" && (
                                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M7 11c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2s2 .9 2 2v1c0 1.1-.9 2-2 2zm-2 6.993L9 18c.55 0 1-.45 1-1v-2c0-1.65-1.35-3-3-3s-3 1.35-3 3v2c0 .552.448.993 1 .993zM19 18h-6a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2zm0-4h-6a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2zm0-4h-6a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2z" />
                                            <path fill="currentColor" d="M22 2H2C.9 2 0 2.9 0 4v16c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 17.5c0 .28-.22.5-.5.5h-19c-.28 0-.5-.22-.5-.5v-15c0-.28.22-.5.5-.5h19c.28 0 .5.22.5.5v15z" />
                                        </svg>
                                    )}
                                    <NavLink to={item.link} className="w-[calc(100%-1.5rem)]">
                                        {item.suggestion}
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <div
                            className="lg:w-7 lg:h-7 w-10 h-10 bg-white flex items-center justify-center rounded-full overflow-hidden shadow-sm text-primary-600 cursor-pointer"
                            onClick={(event) => {
                                let corrs = event.currentTarget.getBoundingClientRect();
                                let newDiv = document.createElement("div");
                                newDiv.classList.add("z-50", "fixed", "bg-black/40", "flex", "items-center", "justify-center", "transition-all", "duration-300", "select-none");
                                newDiv.style.top = corrs.top + "px";
                                newDiv.style.left = corrs.left + "px";
                                newDiv.style.width = corrs.width + "px";
                                newDiv.style.height = corrs.height + "px";
                                newDiv.style.scale = 1;
                                newDiv.setAttribute("id", "profileModalImg");
                                newDiv.addEventListener("click", () => {
                                    newDiv.classList.add("scale-0");
                                    setTimeout(() => {
                                        newDiv.remove();
                                    }, 300);
                                });
                                let newImg = document.createElement("img");
                                newImg.classList.add("sm:w-1/3", "w-full", "sm:h-auto", "h-auto", "bg-white", "rounded-lg", "transition-all", "duration-300", "aspect-square");
                                newImg.src = process.env.REACT_APP_SERVER + "/api/main/avatarCreator?gender=" + tempUser.gender + "&name=" + tempUser.name;
                                newImg.alt = "profileImage";
                                newDiv.appendChild(newImg);
                                document.getElementById("profileModel").appendChild(newDiv);
                                setTimeout(() => {
                                    document.getElementById("profileModalImg").style.scale = 1;
                                    document.getElementById("profileModalImg").style.top = 0;
                                    document.getElementById("profileModalImg").style.left = 0;
                                    document.getElementById("profileModalImg").style.width = "100vw";
                                    document.getElementById("profileModalImg").style.height = "100vh";
                                }, 100);
                            }}
                        >
                            <img src={process.env.REACT_APP_SERVER + "/api/main/avatarCreator?gender=" + tempUser.gender + "&name=" + tempUser.name} className="w-full h-full object-cover object-center" alt="" />
                        </div>
                        <p className="text-textColor-500 text-sm font-bold lg:block hidden">{tempUser.name}</p>
                    </div>
                    {/* Profile Model */}
                    <div id="profileModel"></div>

                    <div className="relative">
                        <div
                            className="bg-white p-3 rounded-full shadow cursor-pointer"
                            onClick={() => {
                                document.getElementById("notificationModal").classList.toggle("scale-y-0");
                                document.getElementById("notificationModal").classList.toggle("opacity-0");
                            }}
                        >
                            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-textColor-400">
                                <path d="M6.502 6.975a5.525 5.525 0 0 1 10.995 0l.287 2.866c.018.175.026.262.037.348a8 8 0 0 0 1.19 3.325l.192.291.861 1.292c.787 1.18 1.18 1.769 1.008 2.244-.033.09-.078.175-.135.252-.3.407-1.009.407-2.426.407H5.489c-1.417 0-2.126 0-2.426-.407a1 1 0 0 1-.134-.252c-.173-.475.22-1.065 1.006-2.244l.862-1.292.192-.291a8 8 0 0 0 1.19-3.325c.01-.086.02-.173.037-.348l.286-2.866Z" fill="currentColor" />
                                <path d="M10.068 20.63c.114.106.365.2.715.267.349.067.777.103 1.217.103.44 0 .868-.036 1.217-.103.35-.067.6-.161.715-.268" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                            </svg>
                        </div>
                        <div
                            id="notificationModal"
                            className="w-full min-w-[450px] max-w-[450px] absolute top-14 right-0 scale-y-0 opacity-0 origin-top bg-white rounded-lg shadowCustom overflow-hidden transition-all duration-300"
                            onMouseLeave={() => {
                                window.notificationModalTimeout = setTimeout(() => {
                                    document.getElementById("notificationModal").classList.add("scale-y-0");
                                    document.getElementById("notificationModal").classList.add("opacity-0");
                                }, 1500);
                            }}
                            onMouseEnter={() => {
                                clearTimeout(window.notificationModalTimeout);
                            }}
                        >
                            <ul className="w-full bg-textColor-100 flex items-center gap-1 px-2">
                                <TabNavItem title="All" id="All" classes={"py-2.5 px-3 text-center text-center border-b-2 transition-all font-semibold cursor-pointer text-sm " + (activeTab === "All" ? "border-primary-600 text-primary-600" : "border-transparent text-textColor-400")} activeTab={activeTab} setActiveTab={setActiveTab} />
                                <TabNavItem title="PMS" id="PMS" classes={"py-2.5 px-3 text-center text-center border-b-2 transition-all font-semibold cursor-pointer text-sm " + (activeTab === "PMS" ? "border-primary-600 text-primary-600" : "border-transparent text-textColor-400")} activeTab={activeTab} setActiveTab={setActiveTab} />
                                <TabNavItem title="Attendance" id="Attendance" classes={"py-2.5 px-3 text-center text-center border-b-2 transition-all font-semibold cursor-pointer text-sm " + (activeTab === "Attendance" ? "border-primary-600 text-primary-600" : "border-transparent text-textColor-400")} activeTab={activeTab} setActiveTab={setActiveTab} />
                                <TabNavItem title="Calendar" id="Calendar" classes={"py-2.5 px-3 text-center text-center border-b-2 transition-all font-semibold cursor-pointer text-sm " + (activeTab === "Calendar" ? "border-primary-600 text-primary-600" : "border-transparent text-textColor-400")} activeTab={activeTab} setActiveTab={setActiveTab} />
                                <TabNavItem title="Chat" id="Chat" classes={"py-2.5 px-3 text-center text-center border-b-2 transition-all font-semibold cursor-pointer text-sm " + (activeTab === "Chat" ? "border-primary-600 text-primary-600" : "border-transparent text-textColor-400")} activeTab={activeTab} setActiveTab={setActiveTab} />
                            </ul>
                            <div className="w-full bg-white pt-2.5">
                                {search.map((item, index) => (
                                    <div key={index} className={"flex items-start gap-2 text-sm text-textColor-500 px-4 border-boderColor last-of-type:border-none cursor-pointer hover:bg-textColor-100 transition-all duration-300 " + (activeTab === item.type || activeTab === "All" ? "scale-100 py-2 border-b" : "py-0 scale-0 h-0 border-none")}>
                                        {item.type === "PMS" && (
                                            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                                                <path d="M3 7c0-1.886 0-2.828.586-3.414C4.172 3 5.114 3 7 3h10c1.886 0 2.828 0 3.414.586C21 4.172 21 5.114 21 7v10c0 1.886 0 2.828-.586 3.414C19.828 21 18.886 21 17 21H7c-1.886 0-2.828 0-3.414-.586C3 19.828 3 18.886 3 17V7Z" stroke="currentColor" strokeWidth={2} />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M18 10h-5.343c-.818 0-1.226 0-1.594-.152-.368-.152-.657-.442-1.235-1.02l-.656-.656c-.578-.578-.868-.868-1.235-1.02C7.569 7 7.16 7 6.343 7H3v10c0 1.886 0 2.828.586 3.414C4.172 21 5.114 21 7 21h10c1.886 0 2.828 0 3.414-.586C21 19.828 21 18.886 21 17V7c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C19.398 10 18.932 10 18 10ZM7 15a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H7Z" fill="currentColor" />
                                            </svg>
                                        )}
                                        {item.type === "Calendar" && (
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x={3} y={6} width={18} height={15} rx={2} stroke="currentColor" strokeWidth={2} />
                                                <path d="M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10H3Z" fill="currentColor" />
                                                <path d="M7 3L7 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                                                <path d="M17 3L17 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                                                <rect x={7} y={12} width={4} height={2} rx={0.5} fill="currentColor" />
                                                <rect x={7} y={16} width={4} height={2} rx={0.5} fill="currentColor" />
                                                <rect x={13} y={12} width={4} height={2} rx={0.5} fill="currentColor" />
                                                <rect x={13} y={16} width={4} height={2} rx={0.5} fill="currentColor" />
                                            </svg>
                                        )}
                                        {item.type === "Chat" && (
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                                                <path d="M4.32698 6.63803L5.21799 7.09202L4.32698 6.63803ZM4.7682 20.2318L4.06109 19.5247H4.06109L4.7682 20.2318ZM18.362 16.673L18.816 17.564L18.816 17.564L18.362 16.673ZM19.673 15.362L20.564 15.816L20.564 15.816L19.673 15.362ZM19.673 6.63803L20.564 6.18404L20.564 6.18404L19.673 6.63803ZM18.362 5.32698L18.816 4.43597L18.816 4.43597L18.362 5.32698ZM5.63803 5.32698L6.09202 6.21799L5.63803 5.32698ZM7.70711 17.2929L7 16.5858L7.70711 17.2929ZM5 9.8C5 8.94342 5.00078 8.36113 5.03755 7.91104C5.07337 7.47262 5.1383 7.24842 5.21799 7.09202L3.43597 6.18404C3.18868 6.66937 3.09012 7.18608 3.04419 7.74817C2.99922 8.2986 3 8.97642 3 9.8H5ZM5 12V9.8H3V12H5ZM3 12V17H5V12H3ZM3 17V19.9136H5V17H3ZM3 19.9136C3 21.2054 4.56185 21.8524 5.4753 20.9389L4.06109 19.5247C4.40757 19.1782 5 19.4236 5 19.9136H3ZM5.4753 20.9389L8.41421 18L7 16.5858L4.06109 19.5247L5.4753 20.9389ZM15.2 16H8.41421V18H15.2V16ZM17.908 15.782C17.7516 15.8617 17.5274 15.9266 17.089 15.9624C16.6389 15.9992 16.0566 16 15.2 16V18C16.0236 18 16.7014 18.0008 17.2518 17.9558C17.8139 17.9099 18.3306 17.8113 18.816 17.564L17.908 15.782ZM18.782 14.908C18.5903 15.2843 18.2843 15.5903 17.908 15.782L18.816 17.564C19.5686 17.1805 20.1805 16.5686 20.564 15.816L18.782 14.908ZM19 12.2C19 13.0566 18.9992 13.6389 18.9624 14.089C18.9266 14.5274 18.8617 14.7516 18.782 14.908L20.564 15.816C20.8113 15.3306 20.9099 14.8139 20.9558 14.2518C21.0008 13.7014 21 13.0236 21 12.2H19ZM19 9.8V12.2H21V9.8H19ZM18.782 7.09202C18.8617 7.24842 18.9266 7.47262 18.9624 7.91104C18.9992 8.36113 19 8.94342 19 9.8H21C21 8.97642 21.0008 8.2986 20.9558 7.74817C20.9099 7.18608 20.8113 6.66937 20.564 6.18404L18.782 7.09202ZM17.908 6.21799C18.2843 6.40973 18.5903 6.71569 18.782 7.09202L20.564 6.18404C20.1805 5.43139 19.5686 4.81947 18.816 4.43597L17.908 6.21799ZM15.2 6C16.0566 6 16.6389 6.00078 17.089 6.03755C17.5274 6.07337 17.7516 6.1383 17.908 6.21799L18.816 4.43597C18.3306 4.18868 17.8139 4.09012 17.2518 4.04419C16.7014 3.99922 16.0236 4 15.2 4V6ZM8.8 6H15.2V4H8.8V6ZM6.09202 6.21799C6.24842 6.1383 6.47262 6.07337 6.91104 6.03755C7.36113 6.00078 7.94342 6 8.8 6V4C7.97642 4 7.2986 3.99922 6.74817 4.04419C6.18608 4.09012 5.66937 4.18868 5.18404 4.43597L6.09202 6.21799ZM5.21799 7.09202C5.40973 6.71569 5.71569 6.40973 6.09202 6.21799L5.18404 4.43597C4.43139 4.81947 3.81947 5.43139 3.43597 6.18404L5.21799 7.09202ZM8.41421 18V16C7.88378 16 7.37507 16.2107 7 16.5858L8.41421 18Z" fill="currentColor" />
                                                <path d="M8 9L16 9" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M8 13L13 13" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                        {item.type === "Attendance" && (
                                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M7 11c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2s2 .9 2 2v1c0 1.1-.9 2-2 2zm-2 6.993L9 18c.55 0 1-.45 1-1v-2c0-1.65-1.35-3-3-3s-3 1.35-3 3v2c0 .552.448.993 1 .993zM19 18h-6a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2zm0-4h-6a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2zm0-4h-6a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2z" />
                                                <path fill="currentColor" d="M22 2H2C.9 2 0 2.9 0 4v16c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 17.5c0 .28-.22.5-.5.5h-19c-.28 0-.5-.22-.5-.5v-15c0-.28.22-.5.5-.5h19c.28 0 .5.22.5.5v15z" />
                                            </svg>
                                        )}
                                        <NavLink to={item.link} className="w-[calc(100%-1.5rem)]">
                                            {item.suggestion}
                                        </NavLink>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
