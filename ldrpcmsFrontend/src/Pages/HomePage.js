import React, { useState } from "react";

// Components
import SidebarRight from "../Components/Home/SidebarRight";
import DashboardOverview from "../Components/Home/DashboardOverview";
import DashboardAttendance from "../Components/Home/DashboardAttendance";
import TabNavItem from "../Components/Common/TabNavItem";
import TabContent from "../Components/Common/TabContent";

const HomePage = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <div className="flex flex-nowrap w-full h-full">
            <div className="w-full lg:w-[78%] ">
                <div className="w-full h-32 flex flex-wrap items-center justify-between p-2 px-8 lg:p-9">
                    <div className="flex gap-4 w-full lg:w-fit">
                        <svg width={24} height={24} className="text-textColor-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x={4} y={4} width={6} height={7} rx={1} fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
                            <rect x={4} y={15} width={6} height={5} rx={1} fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
                            <rect x={14} y={4} width={6} height={5} rx={1} fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
                            <rect x={14} y={13} width={6} height={7} rx={1} fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
                        </svg>
                        <div className="relative">
                            <p className="absolute -top-6 -left-4 text-6xl text-textColor-100/80 font-bold -z-10 select-none">{activeTab === "tab1" ? "Overview" : "Attendance"}</p>
                            <p className="font-bold text-textColor-500">Dashboard</p>
                        </div>
                    </div>
                    <ul className="w-fit h-12 border-2 border-borderColor rounded-full flex flex-nowrap overflow-hidden shadow-inner cursor-pointer">
                        <TabNavItem title="Overview" id="tab1" classes={"w-28 py-2.5 text-center text-center text-textColor-500 border-r-2 border-borderColor transition-all " + (activeTab == "tab1" ? "bg-white font-bold" : "")} activeTab={activeTab} setActiveTab={setActiveTab} />
                        <TabNavItem title="Attendance" id="tab2" classes={"w-28 py-2.5 text-center text-center text-textColor-500 transition-all " + (activeTab == "tab2" ? "bg-white font-bold" : "")} activeTab={activeTab} setActiveTab={setActiveTab} />
                    </ul>
                    <button className="bg-primary-500 text-white flex flex-nowrap items-center px-3 py-2 gap-2 rounded-full w-fit h-12 purpleBtnShadow hover:-translate-y-1 transition-all group">
                        <svg className="w-6 h-6 group-hover:rotate-180 transition-all" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 6a1 1 0 0 1-1-1v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 1 1 2 0v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 0 1-1 1Z" fill="currentColor" />
                        </svg>
                        <span className="hidden lg:flex">Add Widget</span>
                    </button>
                </div>
                <TabContent id="tab1" activeTab={activeTab}>
                    <DashboardOverview />
                </TabContent>
                <TabContent id="tab2" activeTab={activeTab}>
                    <DashboardAttendance />
                </TabContent>
            </div>
            <SidebarRight />
        </div>
    );
};

export default HomePage;
