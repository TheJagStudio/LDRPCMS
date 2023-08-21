import React, { useState } from "react";

const StudentDashboard = () => {
    const projectDetails = {
        mentorName: "Ashishkumar Patel",
        mentorEmail: "ashish_ce@ldrp.ac.in",
        projectTitle: "Procom (Product Compare)",
        projectDesc: "PROCOM is an innovative website designed to provide users with a comprehensive platform for comparing products across various categories, including electronics, sports, apps, and more.",
        groupSize: 4,
        groupLeaderName: "Jagrat Patel",
        groupLeaderEmail: "Jagratpatel99@gmail.com",
        groupLeaderEnrollment: "20BECE30152",
    };

    const [isProject, setIsProject] = useState(true);

    return (
        <div className="flex flex-nowrap w-full h-full">
            <div className="w-full">
                <div className="w-full h-32 flex flex-wrap items-center justify-between sm:gap-0 gap-8 mt-12 mb-6 sm:mt-4 lg:mt-0 sm:mb-0 px-8 lg:p-9">
                    <div className="flex gap-4 w-full sm:w-fit">
                        <svg width={24} height={24} className="text-textColor-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x={4} y={4} width={6} height={7} rx={1} fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
                            <rect x={4} y={15} width={6} height={5} rx={1} fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
                            <rect x={14} y={4} width={6} height={5} rx={1} fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
                            <rect x={14} y={13} width={6} height={7} rx={1} fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
                        </svg>
                        <div className="relative">
                            <p className="absolute -top-6 -left-4 text-6xl text-textColor-100/80 font-bold -z-10 select-none">Student</p>
                            <p className="font-bold text-textColor-500">Dashboard</p>
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
                <div class="py-4 px-8 w-full">
                    {isProject ? (
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center md:justify-start mx-auto w-full">
                            {/* Mentor Details */}
                            <div className="bg-white rounded-lg p-4 px-5 shadowCustom w-full h-full flex flex-col gap-6">
                                <div>
                                    <p className="text-textColor-400 text-lg font-medium mb-1.5">Mentor Name</p>
                                    <h1 className="text-3xl font-semibold text-textColor-700">{projectDetails.mentorName}</h1>
                                </div>
                                <div>
                                    <p className="font-medium text-primary-500">
                                        <span className="text-textColor-400 font-semibold">Email : </span>
                                        {projectDetails.mentorEmail}
                                    </p>
                                </div>
                            </div>
                            {/* Group Size */}
                            <div className="bg-white rounded-lg p-4 px-5 shadowCustom w-full h-full flex flex-col gap-6">
                                <div>
                                    <p className="text-textColor-400 text-lg font-medium mb-1.5">Group Size</p>
                                    <h1 className="text-3xl font-semibold text-textColor-700">{projectDetails.groupSize}</h1>
                                </div>
                                <div>
                                    <p className="font-semibold text-textColor-400">
                                        Team of
                                        <span className="text-primary-500 mx-1 font-bold">{projectDetails.groupSize}</span>
                                        members
                                    </p>
                                </div>
                            </div>
                            {/* Project Details */}
                            <div className="bg-white rounded-lg p-4 px-5 shadowCustom w-full h-full flex flex-col gap-6">
                                <div>
                                    <p className="text-textColor-400 text-lg font-medium mb-1.5">Project Title</p>
                                    <h1 className="text-3xl font-semibold text-textColor-700">{projectDetails.projectTitle}</h1>
                                </div>
                                <div>
                                    <p className="font-light text-textColor-600 line-clamp-2">
                                        <span className="text-textColor-400 font-semibold">Project Description : </span>
                                        {projectDetails.projectDesc}
                                    </p>
                                </div>
                            </div>
                            {/* Group Leader */}
                            <div className="bg-white rounded-lg p-4 px-5 shadowCustom w-full h-full flex flex-col gap-6">
                                <div>
                                    <p className="text-textColor-400 text-lg font-medium mb-1.5">Group Leader</p>
                                    <h1 className="text-3xl font-semibold text-textColor-700">{projectDetails.groupLeaderName}</h1>
                                </div>
                                <div>
                                    <p className="font-medium text-primary-500">
                                        <span className="text-textColor-400 font-semibold">Leader Enrollment : </span>
                                        {projectDetails.groupLeaderEnrollment}
                                    </p>
                                    <p className="font-medium text-primary-500">
                                        <span className="text-textColor-400 font-semibold">Leader Email : </span>
                                        {projectDetails.groupLeaderEmail}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="w-full h-96 p-4 bg-white rounded-lg">
                            <a href="/student/pms" className="w-full select-none cursor-pointer h-full px-3 border-2 border-textColor-300 rounded-md hover:border-textColor-400 border-dashed bg-textColor-50/40 hover:bg-textColor-50 transition-all duration-300 flex flex-col gap-3 items-center justify-center">
                                <h1 className="flex items-center gap-2 text-xl sm:text-2xl text-textColor-800 font-medium text-center">
                                    <svg className="w-6 h-6 p-1.5 bg-primary-500 text-white font-bold rounded-full" viewBox="0 0 16 16">
                                        <path fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 1v14M1 8h14" />
                                    </svg>
                                    Create A New Project
                                </h1>
                                <p className="text-textColor-600 text-center">or ask your Team Leader to Add New Project</p>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
