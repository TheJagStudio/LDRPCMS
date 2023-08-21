import React, { useState } from "react";

const CreateUser = () => {
    let isProfileImgSet = false;
    const [gender, setGender] = useState("male");
    const [username, setUsername] = useState("John Doe");
    const [userType, setUserType] = useState("HOD");
    return (
        <div className="flex flex-col w-full h-full mt-8 px-5">
            <div className="w-full md:mb-0 mb-6">
                <div className="w-full h-full flex flex-wrap sm:gap-0 gap-5 items-center justify-between p-2 lg:p-9">
                    <div className="flex gap-4">
                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-textColor-500">
                            <circle cx={10} cy={8} r={5} fill="currentColor" />
                            <path d="M19 10L19 16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                            <path d="M22 13L16 13" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                            <path d="M17.1421 20.3825C17.6038 20.278 17.8806 19.7981 17.676 19.3713C17.1242 18.2203 16.2173 17.2088 15.0419 16.4465C13.5955 15.5085 11.8232 15 10 15C8.17681 15 6.40455 15.5085 4.95811 16.4465C3.78266 17.2088 2.87577 18.2202 2.32396 19.3713C2.11935 19.7981 2.39623 20.278 2.85786 20.3825C7.55976 21.4474 12.4402 21.4474 17.1421 20.3825Z" fill="currentColor" />
                        </svg>
                        <div className="relative">
                            <p className="absolute -top-5 -left-4 text-6xl text-textColor-100/80 font-bold -z-10 select-none w-max">{userType}</p>
                            <p className="font-bold text-textColor-500">Add User</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-[95%] mx-auto h-fit bg-white rounded-2xl shadow-md mb-10 flex md:flex-row flex-col items-start justify-center">
                <div className="flex flex-col w-full md:w-1/3 h-full p-8 md:border-r md:border-borderColor">
                    <h1 className="text-textColor-600 font-bold text-lg mb-5">Account Image</h1>
                    <div className={" w-full h-auto aspect-square bg-textColor-100 rounded-lg flex flex-col items-center justify-center p-6 relative mb-3"}>
                        <img src={process.env.REACT_APP_SERVER + "/api/main/avatarCreator?gender=" + gender + "&name=" + username} alt="" className=" w-full h-full aspect-square object-cover object-center rounded" id="profileImg" />
                    </div>
                </div>
                <div className="flex flex-col w-full md:w-2/3 p-8 pb-10">
                    <div className="w-full flex gap-6 flex-col mb-8">
                        <h1 className="text-textColor-600 font-bold text-lg mb-2">Basic Information</h1>
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <div className="flex flex-col">
                                <label htmlFor="username" className="ml-4 mb-2 font-medium text-textColor-600">
                                    Username
                                </label>
                                <input
                                    onKeyUp={(event) => {
                                        if (event.currentTarget.value === "") {
                                            setUsername("John Doe");
                                        } else {
                                            setUsername(event.currentTarget.value);
                                        }
                                    }}
                                    id="username"
                                    type="text"
                                    className="border rounded-full p-2.5 px-4 outline-none text-textColor-500 shadowCustom"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="ml-4 mb-2 font-medium text-textColor-600">
                                    Email
                                </label>
                                <input id="email" type="text" className="border rounded-full p-2.5 px-4 outline-none text-textColor-500 shadowCustom" />
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <div className="flex flex-col">
                                <label htmlFor="username" className="ml-4 mb-2 font-medium text-textColor-600">
                                    Role
                                </label>
                                <select
                                    onChange={(event) => {
                                        setUserType(event.currentTarget.value);
                                    }}
                                    value={userType}
                                    className="border rounded-full p-2.5 px-4 outline-none text-textColor-500 shadowCustom"
                                >
                                    <option value="HOD">HOD</option>
                                    <option value="Faculty">Faculty</option>
                                    <option value="Lab Asst">Lab Asst</option>
                                    <option value="Student">Student</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="gender" className="ml-4 mb-2 font-medium text-textColor-600">
                                    Gender
                                </label>
                                <select
                                    id="gender"
                                    onChange={(event) => {
                                        setGender(event.currentTarget.value);
                                    }}
                                    className="border rounded-full p-2.5 px-4 outline-none text-textColor-500 shadowCustom"
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <div className="flex flex-col">
                                <label htmlFor="username" className="ml-4 mb-2 font-medium text-textColor-600">
                                    New Password
                                </label>
                                <input id="password" type="password" className="border rounded-full p-2.5 px-4 outline-none text-textColor-500 shadowCustom" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="ml-4 mb-2 font-medium text-textColor-600">
                                    Confirm Password
                                </label>
                                <input id="password" type="password" className="border rounded-full p-2.5 px-4 outline-none text-textColor-500 shadowCustom" />
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <div className="flex flex-col">
                                <label htmlFor="username" className="ml-4 mb-2 font-medium text-textColor-600">
                                    First Name
                                </label>
                                <input
                                    onKeyUp={(event) => {
                                        if (event.currentTarget.value === "") {
                                            setUsername("John Doe");
                                        } else {
                                            setUsername(event.currentTarget.value);
                                        }
                                    }}
                                    id="firstName"
                                    type="text"
                                    className="border rounded-full p-2.5 px-4 outline-none text-textColor-500 shadowCustom"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="username" className="ml-4 mb-2 font-medium text-textColor-600">
                                    Last Name
                                </label>
                                <input
                                    onKeyUp={(event) => {
                                        if (event.currentTarget.value === "") {
                                            setUsername("John Doe");
                                        } else {
                                            setUsername(event.currentTarget.value);
                                        }
                                    }}
                                    id="lastName"
                                    type="text"
                                    className="border rounded-full p-2.5 px-4 outline-none text-textColor-500 shadowCustom"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-end">
                        <button className="transition-all duration-300 hover:-translate-y-1 purpleBtnShadow bg-primary-600 text-white rounded-full px-8 py-3 font-medium">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateUser;
