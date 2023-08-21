import React, { useState } from "react";

const StudentProfile = () => {
    const [username, setUsername] = useState("ldrp123");
    const [email, setEmail] = useState("ldrp@gmail.com");
    const [firstName, setFirstName] = useState("ldrp123");
    const [lastName, setLastName] = useState("ldrp123");

    return (
        <div className="flex flex-nowrap w-full h-full lg:px-0 md:px-10 px-6">
            <div className="w-full relative">
                <div className="w-full h-32 flex flex-wrap items-center justify-between sm:gap-0 gap-8 mt-12 mb-6 sm:mt-4 lg:mt-0 sm:mb-0 lg:p-9">
                    <div className="flex gap-4 w-full sm:w-fit">
                        <svg width={24} height={24} className="text-textColor-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x={4} y={4} width={6} height={7} rx={1} fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
                            <rect x={4} y={15} width={6} height={5} rx={1} fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
                            <rect x={14} y={4} width={6} height={5} rx={1} fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
                            <rect x={14} y={13} width={6} height={7} rx={1} fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
                        </svg>
                        <div className="relative">
                            <p className="absolute -top-6 -left-4 text-6xl text-textColor-100/80 font-bold -z-10 select-none">Student</p>
                            <p className="font-bold text-textColor-500">Profile</p>
                        </div>
                    </div>
                    <div class="sm:w-fit w-full flex justify-between gap-3 sm:pl-8">
                        <div class="bg-white p-3 px-6 sm:px-8 h-fit rounded-xl col-span-2 lg:col-span-1 flex flex-col items-center justify-center gap-1 shadowCustom">
                            <p class="text-textColor-500 text-sm font-semibold whitespace-nowrap">Semester</p>
                            <p class="text-textColor-600 font-bold text-2xl whitespace-nowrap">Sem 7</p>
                        </div>
                        <div class="bg-white p-3 px-6 sm:px-8 h-fit rounded-xl col-span-2 lg:col-span-1 flex flex-col items-center justify-center gap-1 shadowCustom">
                            <p class="text-textColor-500 text-sm font-semibold">Batch</p>
                            <p class="text-textColor-600 font-bold text-2xl">2024</p>
                        </div>
                    </div>
                </div>
                {/* Form Div */}
                <div class="w-full lg:w-[95%] mx-auto h-fit bg-white rounded-2xl shadow-md mb-10 flex flex-col items-start justify-center">
                    <div className="w-full border-b border-borderColor py-5 px-6 flex sm:flex-row flex-col gap-3 items-center justify-between">
                        <h1 className="text-3xl font-bold text-textColor-600 sm:text-left text-center">Hello, LDRP ITR</h1>
                        <button
                            className="bg-primary-500 text-white px-3 py-2 rounded-lg text-sm"
                            onClick={() => {
                                let changePassModal = document.getElementById("changePasswordModal");
                                let changePassModalOverlay = document.getElementById("changePasswordModalOverlay");
                                changePassModal.classList.remove("scale-0");
                                changePassModalOverlay.classList.remove("scale-0");
                            }}
                        >
                            Change Password
                        </button>
                    </div>
                    <div className="w-full h-full flex md:flex-row flex-col items-start justify-center">
                        <div class="flex flex-col w-full md:w-1/3 h-full p-5 sm:p-8">
                            <h1 class="text-textColor-600 font-bold text-lg mb-3 sm:mb-5">Account Image</h1>
                            <div class=" w-full h-auto aspect-square bg-textColor-100 rounded-lg flex flex-col items-center justify-center p-6 relative mb-3">
                                <img src="https://api.dicebear.com/6.x/micah/svg?seed=John Doe&amp;baseColor=f9c9b6&amp;eyes=eyes,eyesShadow,round&amp;facialHairColor=000000,transparent&amp;facialHairProbability=20&amp;hair=fonze,mrT,mrClean,turban&amp;mouth=laughing,smile,smirk" alt="" class=" w-full h-full aspect-square object-cover object-center rounded" id="profileImg" />
                            </div>
                        </div>
                        <form class="flex flex-col h-full w-full md:w-2/3 p-5 sm:p-8 pb-8 sm:pb-10 md:border-l md:border-borderColor">
                            <div class="w-full flex gap-6 flex-col mb-8">
                                <h1 class="text-textColor-600 font-bold text-lg sm:mb-2">Basic Information</h1>
                                <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
                                    <div class="flex flex-col">
                                        <label htmlFor="username" class="ml-4 mb-2 font-medium text-textColor-600">
                                            Username
                                        </label>
                                        <input
                                            id="username"
                                            onChange={(e) => {
                                                setUsername(e.target.value);
                                            }}
                                            value={username}
                                            type="text"
                                            class="border rounded-full p-2.5 px-4 outline-none text-textColor-500 shadowCustom"
                                        />
                                    </div>
                                    <div class="flex flex-col">
                                        <label htmlFor="email" class="ml-4 mb-2 font-medium text-textColor-600">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                            value={email}
                                            type="text"
                                            class="border rounded-full p-2.5 px-4 outline-none text-textColor-500 shadowCustom"
                                        />
                                    </div>
                                </div>
                                <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
                                    <div class="flex flex-col">
                                        <label htmlFor="firstName" class="ml-4 mb-2 font-medium text-textColor-600">
                                            First Name
                                        </label>
                                        <input
                                            id="firstName"
                                            onChange={(e) => {
                                                setFirstName(e.target.value);
                                            }}
                                            value={firstName}
                                            type="text"
                                            class="border rounded-full p-2.5 px-4 outline-none text-textColor-500 shadowCustom"
                                        />
                                    </div>
                                    <div class="flex flex-col">
                                        <label htmlFor="lastName" class="ml-4 mb-2 font-medium text-textColor-600">
                                            Last Name
                                        </label>
                                        <input
                                            id="lastName"
                                            onChange={(e) => {
                                                setLastName(e.target.value);
                                            }}
                                            value={lastName}
                                            type="text"
                                            class="border rounded-full p-2.5 px-4 outline-none text-textColor-500 shadowCustom"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center justify-end">
                                <button class="transition-all duration-300 hover:-translate-y-1 purpleBtnShadow bg-primary-600 text-white rounded-full px-8 py-3 font-medium">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Change Password Modal */}
                <div id="changePasswordModal" className="fixed z-50 scale-0 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90%] sm:w-full max-w-md h-fit bg-white px-5 sm:px-10 py-8 rounded-xl transition-all duration-300">
                    <form className="w-full relative">
                        <button
                            className="absolute sm:top-0 -top-4 -right-1 sm:-right-4"
                            type="button"
                            onClick={() => {
                                let changePassModal = document.getElementById("changePasswordModal");
                                let changePassModalOverlay = document.getElementById("changePasswordModalOverlay");
                                changePassModal.classList.add("scale-0");
                                changePassModalOverlay.classList.add("scale-0");
                                let changePassInput = document.querySelectorAll(".changePassInput");
                                for (let i = 0; i < changePassInput.length; i++) {
                                    changePassInput[i].value = "";
                                }
                            }}
                        >
                            <svg fill="currentColor" className="w-4 h-4 text-textColor-400" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </button>
                        <h1 className="w-full text-center text-2xl font-medium text-textColor-800 mb-4">Reset Password</h1>
                        <div className="w-full flex flex-col gap-5 sm:px-0 px-2">
                            <div className="flex flex-col">
                                <label htmlFor="oldPassword" className="sm:ml-4 ml-1 mb-2 font-medium text-textColor-600">
                                    Old Password
                                </label>
                                <input id="oldPassword" type="password" placeholder="Enter Old Password..." className="border sm:rounded-full rounded-lg p-2.5 px-4 outline-none text-textColor-500 shadowCustom bg-textColor-100 changePassInput" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="newPassword" className="sm:ml-4 ml-1 mb-2 font-medium text-textColor-600">
                                    New Password
                                </label>
                                <input id="newPassword" type="password" placeholder="Enter New Password..." className="border sm:rounded-full rounded-lg p-2.5 px-4 outline-none text-textColor-500 shadowCustom bg-textColor-100 changePassInput" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="rePassword" className="sm:ml-4 ml-1 mb-2 font-medium text-textColor-600">
                                    Confirm Password
                                </label>
                                <input id="rePassword" type="password" placeholder="Re-Enter New Password..." className="border sm:rounded-full rounded-lg p-2.5 px-4 outline-none text-textColor-500 shadowCustom bg-textColor-100 changePassInput" />
                            </div>
                            <div class="flex items-center justify-end">
                                <button class="transition-all duration-300 hover:-translate-y-1 purpleBtnShadow bg-primary-600 text-white rounded-full px-8 py-3 font-medium">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div id="changePasswordModalOverlay" className="fixed top-0 left-0 w-screen h-screen z-40 bg-black/20 scale-0" />
            </div>
        </div>
    );
};

export default StudentProfile;
