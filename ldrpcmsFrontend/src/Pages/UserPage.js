import React, { useEffect, useRef, useState } from "react";
import { Grid, _ } from "gridjs-react";
import { RowSelection } from "gridjs/plugins/selection";
import { NavLink } from "react-router-dom";

const Actions = () => {
    return (
        <div className="flex items-center gap-3 w-fit mx-auto">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-primary-500 cursor-pointer transition-all duration-200 hover:text-yellow-500">
                <path fillRule="evenodd" clipRule="evenodd" d="M17.204 10.796 19 9c.545-.545.818-.818.963-1.112a2 2 0 0 0 0-1.776C19.818 5.818 19.545 5.545 19 5c-.546-.545-.818-.818-1.112-.964a2 2 0 0 0-1.776 0c-.294.146-.567.419-1.112.964l-1.82 1.819a10.9 10.9 0 0 0 4.023 3.977Zm-5.477-2.523-6.87 6.87c-.426.426-.638.638-.778.9-.14.26-.199.555-.317 1.145l-.615 3.077c-.067.332-.1.498-.005.593.094.095.26.061.593-.005l3.077-.616c.59-.117.884-.176 1.145-.316.262-.14.474-.352.9-.777l6.889-6.89a12.901 12.901 0 0 1-4.02-3.98Z" fill="currentColor" />
            </svg>
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-primary-500 cursor-pointer transition-all duration-200 hover:text-blue-500">
                <circle cx={12} cy={12} r={3} stroke="currentColor" strokeWidth={2} />
                <path d="M20.188 10.934c.388.472.582.707.582 1.066 0 .359-.194.594-.582 1.066C18.768 14.79 15.636 18 12 18c-3.636 0-6.768-3.21-8.188-4.934-.388-.472-.582-.707-.582-1.066 0-.359.194-.594.582-1.066C5.232 9.21 8.364 6 12 6c3.636 0 6.768 3.21 8.188 4.934Z" stroke="currentColor" strokeWidth={2} />
            </svg>
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-primary-500 cursor-pointer transition-all duration-200 hover:text-red-500">
                <path fillRule="evenodd" clipRule="evenodd" d="M21 6H3v3a2 2 0 0 1 2 2v4c0 2.828 0 4.243.879 5.121C6.757 21 8.172 21 11 21h2c2.828 0 4.243 0 5.121-.879C19 19.243 19 17.828 19 15v-4a2 2 0 0 1 2-2V6Zm-10.5 5a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0v-5Zm5 0a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0v-5Z" fill="currentColor" />
                <path d="M10.068 3.37c.114-.106.365-.2.715-.267A6.68 6.68 0 0 1 12 3c.44 0 .868.036 1.217.103.35.067.6.161.715.268" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
            </svg>
        </div>
    );
};

const UserImage = ({ name, gender }) => {
    return <img src={"https://api.dicebear.com/6.x/micah/svg?seed=" + name + "&baseColor=f9c9b6&eyes=eyes,eyesShadow,round&facialHairColor=000000,transparent&facialHairProbability=20&hair=" + (gender === "female" ? "dannyPhantom,full,pixie" : "fonze,mrT,mrClean,turban") + "&mouth=laughing,smile,smirk"} alt="avatar" className="rounded-md border bg-primary-100 border-primary-800 w-10 h-10" />;
};

const UserPage = () => {
    const [selectAll, setSelectAll] = useState(false);
    const [activeUserType, setActiveUserType] = useState("All Users");
    const userTypes = ["All Users", "HOD", "Faculty", "Lab Asst", "Student"];
    return (
        <div className="flex flex-col w-full h-full">
            <div className="w-full">
                <div className="w-full h-full flex flex-wrap sm:gap-0 gap-5 items-center justify-between p-2 px-8 lg:p-9">
                    <div className="flex gap-4">
                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-textColor-500">
                            <path d="M19.6515 19.4054C20.2043 19.2902 20.5336 18.7117 20.2589 18.2183C19.6533 17.1307 18.6993 16.1749 17.4788 15.4465C15.907 14.5085 13.9812 14 12 14C10.0188 14 8.09292 14.5085 6.52112 15.4465C5.30069 16.1749 4.34666 17.1307 3.74108 18.2183C3.46638 18.7117 3.79562 19.2902 4.34843 19.4054C9.39524 20.4572 14.6047 20.4572 19.6515 19.4054Z" fill="currentColor" />
                            <circle cx={12} cy={8} r={5} fill="currentColor" />
                        </svg>
                        <div className="relative">
                            <p className="absolute -top-6 -left-4 text-6xl text-textColor-100/80 font-bold -z-10 select-none w-max">{activeUserType}</p>
                            <p className="font-bold text-textColor-500">Users</p>
                        </div>
                    </div>
                    <div className="flex flex-nowrap overflow-x-scroll lg:overflow-hidden noScrollbar gap-10 lg:items-center lg:justify-center h-16">
                        {userTypes.map((item, index) => (
                            <button
                                className={"h-full text-lg sm:text-xl whitespace-nowrap border-b-2 " + (activeUserType === item ? "text-primary-600 border-primary-600 font-semibold" : "text-textColor-500 border-transparent")}
                                key={index}
                                onClick={() => {
                                    setActiveUserType(item);
                                }}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    <NavLink to="/users/adduser" className="bg-primary-500 text-white flex flex-nowrap items-center px-3 py-2 gap-2 rounded-full w-fit h-12 purpleBtnShadow hover:-translate-y-1 transition-all group">
                        <svg className="w-6 h-6 group-hover:rotate-180 transition-all" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 6a1 1 0 0 1-1-1v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 1 1 2 0v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 0 1-1 1Z" fill="currentColor" />
                        </svg>
                        <span className="hidden lg:flex">Add New Users</span>
                    </NavLink>
                </div>
            </div>
            <div className="w-full lg:w-[95%] mx-auto h-fit bg-white rounded-2xl shadow-md mb-10 overflow-hidden">
                <div className="flex flex-nowrap items-center justify-between m-4 mx-3.5">
                    <div className="flex flex-nowrap items-center gap-4">
                        <button
                            onClick={() => {
                                setSelectAll(!selectAll);
                            }}
                            className="bg-primary-500 text-white flex flex-nowrap items-center px-2 py-1 gap-2 rounded-full w-fit h-8 purpleBtnShadow hover:-translate-y-1 transition-all group "
                        >
                            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-.232-5.36 5-6-1.536-1.28-4.3 5.159-2.225-2.226-1.414 1.414 3 3 .774.774.701-.84Z" fill="currentColor" />
                            </svg>
                            <span>Select All</span>
                        </button>
                    </div>
                </div>
                <Grid
                    columns={[
                        {
                            id: "myCheckbox",
                            name: "Select",
                            data: () => selectAll,
                            plugin: {
                                component: RowSelection,
                            },
                        },
                        "Avatar",
                        "Name",
                        "Email",
                        "Role",
                        "Actions",
                    ]}
                    data={[
                        [_(<UserImage gender="male" name="Jagrat Patel" />), "Jagrat Patel", "jagrat@patel.com", "HOD", _(<Actions />)],
                        [_(<UserImage gender="male" name="Jaivin Barot" />), "Jaivin Barot", "jaivin@barot.com", "HOD", _(<Actions />)],
                        [_(<UserImage gender="male" name="Shubham Bhogayata" />), "Shubham Bhogayata", "shubham@bhogayata.com", "HOD", _(<Actions />)],
                        [_(<UserImage gender="male" name="Parth Padhiyar" />), "Parth Padhiyar", "parth@padhiyar.com", "HOD", _(<Actions />)],
                    ]}
                    search={false}
                    pagination={true}
                    sort={true}
                    resizable={true}
                    fixedHeader={true}
                />
            </div>
        </div>
    );
};

export default UserPage;
