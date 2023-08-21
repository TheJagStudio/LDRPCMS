import React from "react";

const StudentGroup = () => {
    const projectDetails = {
        mentorName: "Ashishkumar Patel",
        mentorEmail: "ashish_ce@ldrp.ac.in",
        projectTitle: "Procom (Product Compare)",
        projectDesc: "PROCOM is an innovative website designed to provide users with a comprehensive platform for comparing products across various categories, including electronics, sports, apps, and more. The website also serves as an e-commerce platform, integrating multiple popular online retailers such as Amazon, Flipkart, Croma, and others. In addition to facilitating product comparisons, PROCOM aims to empower developers by offering an Admin panel and creating APIs for over 20 different platforms. Furthermore, the project includes the development of a unique system that enables developers to create web scrapers from the website's user interface, allowing them to utilize any website as a real-time API. Key Features: Product Comparison: PROCOM offers users a centralized platform to compare products from diverse categories. The website provides comprehensive information, including specifications, prices, user reviews, and ratings, assisting users in making informed purchase decisions. E-commerce Integration: The platform seamlessly integrates with popular e-commerce platforms, including Amazon, Flipkart, Croma, and more. Users can browse products from these platforms directly on PROCOM, providing a convenient and streamlined shopping experience. Developer's Admin Panel: PROCOM provides a dedicated admin panel for developers. This panel offers a range of features and tools for managing and enhancing the website's functionality. Developers can access and modify various aspects of the platform, including APIs, data integration, scraping settings, and user management. API Development: The project involves the creation of APIs for more than 20 different platforms. These APIs enable seamless data integration between PROCOM and the supported platforms, ensuring up-to-date information on products, prices, availability, and more. Developers can leverage these APIs to enhance their own applications and services. Web Scraper Creation: PROCOM offers a user-friendly interface that empowers developers to create their own web scrapers. This unique system enables developers to extract data from any website and utilize it as a real-time API. The web scraper creation tool allows for customization and configuration based on individual requirements. Benefits: Comprehensive Product Comparison: Users can conveniently compare products from different categories and make well-informed purchasing decisions. Enhanced E-commerce Experience: Integration with popular e-commerce platforms simplifies the shopping process by providing a unified interface for browsing and purchasing products. Developer Empowerment: The inclusion of an admin panel and API development enables developers to extend the functionality of PROCOM and integrate it into their own applications and services. Versatile Web Scraping Capabilities: The web scraper creation system allows developers to access data from any website, expanding the possibilities for real-time data integration and utilization. Overall, PROCOM is a dynamic website that brings together product comparison and e-commerce functionalities while empowering developers to enhance and customize the platform. By offering a wide range of features and tools, PROCOM aims to provide an intuitive and comprehensive experience for both users and developers.",
        projectTechnologies: ["React", "Next JS 13", "TypeScript", "Tailwind CSS", "Django"],
        projectTasks: ["Asd", "ASDasdgdlksfadkfd;kasdals", "asdajoiiiiiiiiiiiiiiiiiiiiiasdad add ad adasdad adsd asdasda sdasdadsadsadsadadadsadsadadsa sadasdasdasdasdiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiaslkdjklajskdasdkasdasjdkajskdjkasdkajskldjaklsjdklajdsj aklsdjklasjdlkajosdjaojsdlkajskdp ajsdpkaj s;kldjlasldla"],
    };

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
                            <p className="font-bold text-textColor-500">Group</p>
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
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center md:justify-start mx-auto w-full">
                        {/* Mentor Details */}
                        <div className="bg-white rounded-lg p-4 px-5 shadowCustom w-full h-full flex flex-col gap-6 md:col-span-1 col-span-2">
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
                        {/* Project Technologies */}
                        <div className="bg-white rounded-lg p-5 px-5 shadowCustom w-full h-full flex flex-col gap-6 md:col-span-1 col-span-2">
                            <div>
                                <p className="text-textColor-400 text-lg font-medium mb-1.5">Project</p>
                                <h1 className="text-3xl font-semibold text-textColor-700">Technologies</h1>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {projectDetails.projectTechnologies.map((tech, i) => (
                                    <p key={i} className="border whitespace-nowrap border-primary-500 cursor-pointer w-fit h-fit rounded-full p-2 px-3 shadow-inner text-primary-500">
                                        {tech}
                                    </p>
                                ))}
                            </div>
                        </div>
                        {/* Project Tasks */}
                        <div className="bg-white rounded-lg p-4 px-5 shadowCustom w-full h-full flex flex-col gap-3 col-span-2">
                            <div>
                                {/* <p className="text-textColor-400 text-lg font-medium mb-1.5"></p> */}
                                <h1 className="text-3xl font-semibold text-textColor-700">Project Tasks</h1>
                            </div>
                            <ul className="list-disc pl-8">
                                {projectDetails.projectTasks.map((task, i) => (
                                    <li key={i} className="w-full h-fit text-primary-500 !break-words">
                                        {task}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Project Details */}
                        <div className="bg-white rounded-lg p-4 px-5 shadowCustom w-full h-full flex flex-col gap-6 col-span-2">
                            <div>
                                <p className="text-textColor-400 text-lg font-medium mb-1.5">Project Title</p>
                                <h1 className="text-3xl font-semibold text-textColor-700">{projectDetails.projectTitle}</h1>
                            </div>
                            <div>
                                <p className="font-light text-textColor-600">
                                    <span className="text-textColor-400 font-semibold">Project Description : </span>
                                    {projectDetails.projectDesc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentGroup;
