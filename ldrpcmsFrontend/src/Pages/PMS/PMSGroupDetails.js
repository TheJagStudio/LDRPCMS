import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, _ } from "gridjs-react";

import { tempGrpDetails } from "../../Variables";

const PMSGroupDetails = () => {
	const groupID = useParams("groupID");
	// const [group, setGroup] = ([])
	const group = tempGrpDetails[groupID.groupID - 2];

	// useEffect(() => {
	//     for(let i=0; i < tempGrpDetails.length; i++) {
	//         if( tempGrpDetails[i].id === groupID.groupID )  {

	//         }
	//     }
	// }, []);

	const projectDetails = {
		mentorName: "Ashishkumar Patel",
		mentorEmail: "ashish_ce@ldrp.ac.in",
		projectTitle: "Procom (Product Compare)",
		projectDesc:
			"PROCOM is an innovative website designed to provide users with a comprehensive platform for comparing products across various categories, including electronics, sports, apps, and more. The website also serves as an e-commerce platform, integrating multiple popular online retailers such as Amazon, Flipkart, Croma, and others. In addition to facilitating product comparisons, PROCOM aims to empower developers by offering an Admin panel and creating APIs for over 20 different platforms. Furthermore, the project includes the development of a unique system that enables developers to create web scrapers from the website's user interface, allowing them to utilize any website as a real-time API. Key Features: Product Comparison: PROCOM offers users a centralized platform to compare products from diverse categories. The website provides comprehensive information, including specifications, prices, user reviews, and ratings, assisting users in making informed purchase decisions. E-commerce Integration: The platform seamlessly integrates with popular e-commerce platforms, including Amazon, Flipkart, Croma, and more. Users can browse products from these platforms directly on PROCOM, providing a convenient and streamlined shopping experience. Developer's Admin Panel: PROCOM provides a dedicated admin panel for developers. This panel offers a range of features and tools for managing and enhancing the website's functionality. Developers can access and modify various aspects of the platform, including APIs, data integration, scraping settings, and user management. API Development: The project involves the creation of APIs for more than 20 different platforms. These APIs enable seamless data integration between PROCOM and the supported platforms, ensuring up-to-date information on products, prices, availability, and more. Developers can leverage these APIs to enhance their own applications and services. Web Scraper Creation: PROCOM offers a user-friendly interface that empowers developers to create their own web scrapers. This unique system enables developers to extract data from any website and utilize it as a real-time API. The web scraper creation tool allows for customization and configuration based on individual requirements. Benefits: Comprehensive Product Comparison: Users can conveniently compare products from different categories and make well-informed purchasing decisions. Enhanced E-commerce Experience: Integration with popular e-commerce platforms simplifies the shopping process by providing a unified interface for browsing and purchasing products. Developer Empowerment: The inclusion of an admin panel and API development enables developers to extend the functionality of PROCOM and integrate it into their own applications and services. Versatile Web Scraping Capabilities: The web scraper creation system allows developers to access data from any website, expanding the possibilities for real-time data integration and utilization. Overall, PROCOM is a dynamic website that brings together product comparison and e-commerce functionalities while empowering developers to enhance and customize the platform. By offering a wide range of features and tools, PROCOM aims to provide an intuitive and comprehensive experience for both users and developers.",
		projectTechnologies: [
			"React",
			"Next JS 13",
			"TypeScript",
			"Tailwind CSS",
			"Django",
		],
		projectTasks: [
			"Asd",
			"ASDasdgdlksfadkfd;kasdals",
			"asdajoiiiiiiiiiiiiiiiiiiiiiasdad add ad adasdad adsd sdkajskldjaklsjdklajdsj aklsdjklasjdlkajosdjaojsdlkajskdp ajsdpkaj s;kldjlasldla",
		],
	};

	return (
		<div className="flex flex-nowrap w-full h-full">
			<div className="w-full">
				<div className="w-full h-32 flex flex-wrap items-center justify-between sm:gap-0 gap-8 mt-12 mb-6 sm:mt-4 lg:mt-0 sm:mb-0 px-8 lg:p-9">
					<div className="flex gap-4 w-full sm:w-fit">
						<svg
							className="w-6 h-6 text-textColor-500"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx={12}
								cy={8}
								r={3}
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
							/>
							<path
								d="M15.268 8a2 2 0 1 1 3.464 2 2 2 0 0 1-3.464-2Zm-10 0a2 2 0 1 1 3.464 2 2 2 0 0 1-3.464-2Z"
								stroke="currentColor"
								strokeWidth={2}
							/>
							<path
								d="m16.882 18-.98.197.16.803h.82v-1Zm3.838-1.096.943-.334-.943.334Zm-5.94-2.194-.604-.796-1.157.879 1.234.767.528-.85ZM19.868 17h-2.985v2h2.985v-2Zm-.09.238a.208.208 0 0 1-.005-.103.217.217 0 0 1 .043-.097c.032-.04.059-.038.052-.038v2c1.146 0 2.274-1.08 1.796-2.43l-1.885.668ZM17 15c1.642 0 2.403 1.181 2.778 2.238l1.885-.668C21.198 15.259 19.948 13 17 13v2Zm-1.614.507C15.77 15.215 16.282 15 17 15v-2c-1.162 0-2.097.362-2.824.914l1.21 1.593Zm-1.133.053c1.039.646 1.474 1.772 1.648 2.637l1.96-.394c-.217-1.083-.824-2.867-2.552-3.942l-1.056 1.699Zm-5.033-.85.527.85 1.234-.767-1.157-.879-.605.796Zm-5.94 2.194.942.334-.942-.334ZM7.118 18v1h.82l.16-.803-.98-.197ZM7 15c.718 0 1.23.215 1.614.507l1.21-1.593C9.097 13.362 8.162 13 7 13v2Zm-2.778 2.238C4.597 16.181 5.358 15 7 15v-2c-2.948 0-4.198 2.259-4.663 3.57l1.885.668ZM4.132 17c-.006 0 .02-.002.053.038a.218.218 0 0 1 .043.097.21.21 0 0 1-.006.103l-1.885-.668C1.86 17.92 2.987 19 4.133 19v-2Zm2.986 0H4.133v2h2.985v-2Zm.98 1.197c.175-.865.61-1.991 1.65-2.637l-1.058-1.7c-1.728 1.075-2.335 2.86-2.553 3.942l1.96.394Z"
								fill="currentColor"
							/>
							<path
								d="M12 14c3.572 0 4.592 2.551 4.883 4.009.109.541-.33.991-.883.991H8c-.552 0-.992-.45-.883-.991C7.408 16.55 8.428 14 12 14Z"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
							/>
						</svg>
						<div className="relative">
							<p className="absolute -top-6 -left-4 text-6xl text-textColor-100/80 font-bold -z-10 select-none">
								G{group.id}
							</p>
							<p className="font-bold text-textColor-500">
								Group
							</p>
						</div>
					</div>
					<div class="sm:w-fit w-full flex justify-between gap-3 sm:pl-8">
						<div class="bg-white p-3 px-6 sm:px-8 h-fit rounded-xl col-span-2 lg:col-span-1 flex flex-col items-center justify-center gap-1 shadowCustom">
							<p class="text-textColor-500 text-sm font-semibold whitespace-nowrap">
								Semester
							</p>
							<p class="text-textColor-600 font-bold text-2xl whitespace-nowrap">
								Sem 7
							</p>
						</div>
						<div class="bg-white p-3 px-6 sm:px-8 h-fit rounded-xl col-span-2 lg:col-span-1 flex flex-col items-center justify-center gap-1 shadowCustom">
							<p class="text-textColor-500 text-sm font-semibold">
								Batch
							</p>
							<p class="text-textColor-600 font-bold text-2xl">
								2024
							</p>
						</div>
					</div>
				</div>
				<div class="py-4 px-8 w-full">
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center md:justify-start mx-auto w-full">
						{/* Project Details */}
						<div className="bg-white rounded-lg p-4 px-5 shadowCustom w-full h-full flex flex-col gap-6 md:col-span-1 col-span-2">
							<div className="flex items-start justify-between gap-3">
								<div>
									<p className="text-textColor-400 text-lg font-medium mb-1.5">
										Project Title
									</p>
									<h1 className="text-3xl font-semibold text-textColor-700">
										{group.project_name}
									</h1>
								</div>
								<div className="flex flex-col items-end">
									<p className="text-textColor-400 text-lg font-medium mb-1.5">
										Group Id
									</p>
									<h1 className="text-3xl font-semibold text-textColor-700">
										G{group.id}
									</h1>
								</div>
							</div>
							<div>
								<p className="font-semibold text-textColor-400">
									Group of
									<span className="text-primary-500 mx-1 font-bold">
										{group.group_members.length}
									</span>
									members
								</p>
							</div>
						</div>
						{/* Mentor Details */}
						<div className="bg-white rounded-lg p-4 px-5 shadowCustom w-full h-full flex flex-col gap-6 md:col-span-1 col-span-2">
							<div>
								<p className="text-textColor-400 text-lg font-medium mb-1.5">
									Mentor Name
								</p>
								<h1 className="text-3xl font-semibold text-textColor-700">
									{group.mentor_name}
								</h1>
							</div>
							<div>
								<p className="font-medium text-primary-500">
									<span className="text-textColor-400 font-semibold">
										Email :{" "}
									</span>
									{group.mentor_email}
								</p>
							</div>
						</div>
						{/* Project Technologies */}
						<div className="bg-white rounded-lg p-5 px-5 shadowCustom w-full h-full flex flex-col gap-6 md:col-span-1 col-span-2">
							<div>
								<p className="text-textColor-400 text-lg font-medium mb-1.5">
									Project
								</p>
								<h1 className="text-3xl font-semibold text-textColor-700">
									Technologies
								</h1>
							</div>
							<div className="flex flex-wrap gap-3">
								{group.project_techs.map((tech, i) => (
									<p
										key={i}
										className="border whitespace-nowrap border-primary-500 cursor-pointer w-fit h-fit rounded-full p-2 px-3 shadow-inner text-primary-500"
									>
										{tech}
									</p>
								))}
							</div>
						</div>
						{/* Project Tasks */}
						<div className="bg-white rounded-lg p-4 px-5 shadowCustom w-full h-full flex flex-col gap-3 md:col-span-1 col-span-2">
							<div>
								<p className="text-textColor-400 text-lg font-medium mb-1.5">
									Project
								</p>
								<h1 className="text-3xl font-semibold text-textColor-700">
									{" "}
									Tasks
								</h1>
							</div>
							<ul className="list-disc pl-8">
								{group.project_tasks.map((task, i) => (
									<li
										key={i}
										className="w-full h-fit text-primary-500 !break-words"
									>
										{task}
									</li>
								))}
							</ul>
						</div>
						{/* Group Members */}
						<div className="bg-white rounded-lg p-4 px-5 shadowCustom w-full h-full flex flex-col gap-3 col-span-2">
							<div>
								<p className="text-textColor-400 text-lg font-medium mb-1.5">
									Group
								</p>
								<h1 className="text-3xl font-semibold text-textColor-700">
									{" "}
									Members
								</h1>
							</div>
							<div className="">
								<Grid
									columns={[
										"Enrollment No",
										"Member Name",
										"Member Email",
										"Division",
									]}
									data={group.group_members.map((group) => [
										"221SBECE30014",
										group,
										group+"@ldrp.com",
										"D",
									])}
									search={false}
									sort={true}
									resizable={true}
									fixedHeader={true}
								/>
							</div>
						</div>
						{/* Project Details */}
						<div className="bg-white rounded-lg p-4 px-5 shadowCustom w-full h-full flex flex-col gap-3 col-span-2">
							<div>
								<p className="text-textColor-400 text-lg font-medium mb-1.5">
									Project
								</p>
								<h1 className="text-3xl font-semibold text-textColor-700">
									{" "}
									Description
								</h1>
							</div>
							<div>
								<h1 className="font-light text-textColor-600 text-lg">
									{group.project_desc}
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PMSGroupDetails;
