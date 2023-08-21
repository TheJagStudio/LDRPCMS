import React from "react";
import Navbar from "../Components/CommonComponents/Navbar";
import Footer from "../Components/CommonComponents/Footer";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

const LandingPage = () => {
    const serviceDetails = [
        {
            name: "Sketch of Interior",
            svg: (
                <svg fill="currentColor" className="w-6 h-6 text-red-600" viewBox="0 0 16 16">
                    <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z" />
                </svg>
            ),
            color: "red",
        },
        {
            name: "Interior Visualization",
            svg: (
                <svg fill="currentColor" className="w-6 h-6 text-green-600" viewBox="0 0 16 16 ">
                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                </svg>
            ),
            color: "green",
        },
        {
            name: "Project Drawings",
            svg: (
                <svg fill="currentColor" viewBox="0 0 48 48" className="w-6 h-6 text-blue-600">
                    <g fill="currentColor">
                        <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="m12 10 9-9v9h-4" />
                        <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M12 39v6a2 2 0 0 0 2 2h31a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H21l-9 9v18" />
                        <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M43 39v4h-4M37 43h-2M43 9V5h-4M37 5h-2M1.606 43.47 18.42 26.655l2.925 2.925L4.53 46.394a2.067 2.067 0 0 1-2.924 0 2.067 2.067 0 0 1 0-2.924z" />
                        <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M21.345 29.58 25 23l-6.58 3.655M6.723 44.201l-2.924-2.924M17 28H3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6" />
                        <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M22 28h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H15M6 28v4M10 28v4M25 28v4M29 28v4M33 28v4M27 10h10v10H27z" />
                        <circle cx={37} cy={20} r={5} fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={2} />
                    </g>
                </svg>
            ),
            color: "blue",
        },
        {
            name: "Construction Project",
            svg: (
                <svg fill="currentColor" viewBox="0 0 2048 2048" className="w-9 h-9 text-purple-600">
                    <path fill="none" d="M0 0h2048v2048H0z" />
                    <path fill="none" d="M255.999 255.999h1536v1536h-1536z" />
                    <g fill="currentColor">
                        <path fill="currentColor" fillRule="nonzero" d="M1043.93 1076.85l238.532 64.864c-11.954-24.773-20.4-50.25-25.865-75.732-13.147-61.3-8.996-122.597 4.977-173.985 4.164-15.313 15.236-45.968 29.529-85.542 24.692-68.367 59.524-164.804 85.048-258.666 32.501-119.525 50.982-229.984 9.328-241.31-2.209-.6-4.277-.752-6.233-.452-2.402.368-5.049 1.407-7.977 3.109-73.953 42.714-106.798 235.086-133.263 390.108-12.16 71.228-23.048 134.997-37.27 177.834-21.248 64.07-54.018 112.024-90.231 147.855-21.574 21.346-44.327 38.364-66.575 51.917zm303.281 148.776L942.24 1115.502l-103.919-28.26 102.545-32.99c34.929-11.238 82.678-33.052 124.639-74.571 29.948-29.633 57.08-69.378 74.73-122.606 12.33-37.134 22.93-99.226 34.771-168.584 28.713-168.187 64.347-376.897 164.262-434.607 9.994-5.812 20.096-9.514 30.477-11.11 10.832-1.664 21.6-1.008 32.484 1.952 90.75 24.676 77.006 167.806 35.672 319.812-25.418 93.473-61.336 192.919-86.798 263.417-13.247 36.678-23.509 65.09-27.778 80.79-11.601 42.661-15.074 93.413-4.229 143.986 9.018 42.048 27.982 84.002 60.49 121.019l70.01 79.716-102.385-27.841zM584.444 1580.92c5.65-7.845 13.635-14.187 22.987-17.633l-.016-.04c41.791-15.484 80.853-80.52 111.692-149.219 32.961-73.427 55.512-150.115 64.275-182.033l8.467-30.837 30.658 8.337 571.261 155.345 32.165 8.746-10.04 31.754c-10.686 33.794-38.107 118.022-70.963 201.234-20.165 51.074-42.506 102.027-64.593 141.434l-.053-.03c-10.721 19.276-26.952 34.357-46.906 44.38-18.931 9.509-41.085 14.307-64.763 13.577-43.9-1.31-171.046-26.568-295.06-58.267-101.82-26.026-202.982-56.69-256.635-82.496l-.002.004c-11.82-5.618-21.423-12.568-28.283-20.35-9.571-10.861-14.386-23.408-13.705-36.958h.006c.48-9.81 3.966-19.252 9.508-26.947zm68.537 30.595c51.221 22.897 142.98 50.292 236.326 74.151 120.673 30.845 241.838 55.347 281.06 56.517 13.127.405 24.92-2.009 34.51-6.826 8.485-4.26 15.31-10.543 19.71-18.474v-.125c20.348-36.305 41.497-84.682 60.844-133.683 24.43-61.874 45.793-124.33 59.236-165.281l-508.615-138.31c-12.106 40.464-32.21 101.548-58.695 160.545-31.902 71.07-73.689 139.762-124.376 171.487zM820.876 1114.61l628.714 170.96-16.75 61.75-628.714-170.96z" />
                        <path fill="currentColor" fillRule="nonzero" d="M1015.06 1737.98c-8.836 15.256-3.632 34.79 11.624 43.625 15.257 8.836 34.79 3.632 43.626-11.624l84.244-144.675c8.836-15.256 3.632-34.79-11.624-43.625-15.257-8.836-34.79-3.632-43.625 11.624l-84.245 144.675z" />
                    </g>
                </svg>
            ),
            color: "purple",
        },
    ];

    const projectDetails = [
        {
            img: ["https://img.freepik.com/premium-photo/beautiful-landscape-ai-generative_458817-2429.jpg?w=2000", "https://assets-news.housing.com/news/wp-content/uploads/2022/02/18205828/Minimalist-interior-design-Tips-to-make-your-home-look-minimal.jpg", "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571460.jpg&fm=jpg"],
            name: "Bryant Townhouse",
            projectlocation: "Seattle",
            projectSize: "1600 SQ FT",
            projectType: "Residential",
            projectScope: "Fixtures & Decoration",
            finishCarpentry: "Pixel Builders",
            customCarpentry: "Chaudary Builders",
        },
        {
            img: ["https://www.thespruce.com/thmb/P4hBQtEPZVrrWPdbtXy7-wv9fiE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1161177015-f1de4ba58a6c4f50969d9119d80405a6.jpg", "https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg"],
            name: "Country House Interior",
            projectlocation: "Seattle",
            projectSize: "1600 SQ FT",
            projectType: "Residential",
            projectScope: "Fixtures & Decoration",
            finishCarpentry: "Pixel Builders",
            customCarpentry: "Chaudary Builders",
        },
        {
            img: ["https://media.architecturaldigest.com/photos/571e97c5741fcddb16b559c9/master/pass/modernist-decor-inspiration-01.jpg", "https://images.hindustantimes.com/img/2022/09/20/1600x900/office-g906b017c5_1920_1663669914946_1663669956567_1663669956567.jpg", "https://flyingcdn-98ab332c.b-cdn.net/wp-content/uploads/2022/03/ncr-interior-design.jpg"],
            name: "Interior Of House Lake",
            projectlocation: "Seattle",
            projectSize: "1600 SQ FT",
            projectType: "Residential",
            projectScope: "Fixtures & Decoration",
            finishCarpentry: "Pixel Builders",
            customCarpentry: "Chaudary Builders",
        },
    ];

    const teamDetails = [
        {
            name: "Jagrat Patel",
            designation: "Team Leader",
            img: "/static/images/JagratPatel.png",
        },
        {
            name: "Jaivin Barot",
            designation: "Backend Developer",
            img: "/static/images/JaivinBarot.png",
        },
        {
            name: "Shubham Bhogayata",
            designation: "Frontend Developer",
            img: "/static/images/ShubhamBhogayata.png",
        },
        {
            name: "Parth Padhiar",
            designation: "Frontend Developer",
            img: "/static/images/ParthPadhiar.png",
        },
    ];

    return (
        <div>
            <Navbar />

            {/* Hero Section */}
            <section className="h-[95vh] w-full drop-shadow-xl flex flex-col p-10">
                <div className="h-[95vh] w-full absolute top-0 left-0 [clip-path:ellipse(200vw_100vw_at_50%_38%)] sm:[clip-path:ellipse(75%_60%_at_50%_38%)]" style={{ backgroundImage: "url('/static/images/LDRPCampas.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", backgroundBlendMode: "difference" }}></div>

                <div className="flex items-center justify-center gap-6 z-50 w-full h-full">
                    <h1 className="text-white text-6xl max-w-[700px] text-center font-light leading-snug">
                        We Share <span className="font-semibold">Creativity</span> and Design Thinking
                    </h1>
                </div>
            </section>

            {/* Interior */}
            <section className="xl:px-40 xl:py-20 flex flex-col gap-14 items-center justify-center h-full">
                <div className="flex items-center justify-center flex-col w-full h-full">
                    <p className="uppercase text-xs bg-green-100 font-bold text-green-600 p-1 px-3 rounded-full shadow-sm  shadow-green-200 w-fit mb-3">Our Story</p>
                    <div className="flex items-center justify-center h-32 relative mb-6">
                        <h1 className="text-[10rem] select-none font-bold text-textColor-100/80 uppercase absolute -z-[1]">Interior</h1>
                        <p className="text-textColor-500 text-3xl z-[1]">
                            Creating <span className="text-textColor-700 font-semibold">Your Space</span> Detail by detail
                        </p>
                    </div>
                    <p className="text-center text-textColor-600 max-w-[800px] mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="flex items-center justify-center gap-20 w-full h-full">
                    <div className="relative w-1/2 h-full">
                        <img src="https://c4.wallpaperflare.com/wallpaper/431/451/684/the-most-beautiful-picture-of-nature-wallpaper-preview.jpg" alt="" className="w-full h-full object-cover object-center rounded-lg z-10" />
                        <img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" alt="" className="absolute top-6 right-6 w-full h-full object-cover object-center rounded-lg -z-[1]" />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-8 w-1/2 h-full">
                        <p className="uppercase text-xs bg-green-100 font-bold text-green-600 p-1 px-3 rounded-full shadow-sm  shadow-green-200 w-fit mb-3">Taste</p>
                        <p className="text-3xl text-textColor-400">
                            We Fry and <span className="text-textColor-600 font-semibold">Brew Only</span> the Best <span className="text-textColor-600 font-semibold">Coffee</span> from all Over the World
                        </p>
                        <button className="w-fit text-textColor-800 font-semibold py-3 text-lg px-1 flex items-center gap-3 hover:gap-6 transition-all duration-300">
                            From $5
                            <span>
                                <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="xl:px-40 xl:py-20 flex flex-col gap-14 items-center justify-center h-full">
                <div className="flex items-center justify-center flex-col w-full h-full">
                    <p className="uppercase text-xs bg-green-100 font-bold text-green-600 p-1 px-3 rounded-full shadow-sm  shadow-green-200 w-fit mb-3">Our Story</p>
                    <div className="flex items-center justify-center h-32 relative mb-6">
                        <h1 className="text-[10rem] select-none font-bold text-textColor-100/80 uppercase absolute -z-[1]">Services</h1>
                        <p className="text-textColor-500 text-3xl z-[1]">
                            Space <span className="text-textColor-700 font-semibold">Design is Our</span> Passion
                        </p>
                    </div>
                    <p className="text-center text-textColor-600 max-w-[800px] mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="flex items-center justify-center gap-8 w-full h-full">
                    {serviceDetails.map((item, i) => (
                        <div key={i} className="flex items-center justify-center flex-col gap-6 bg-white shadow rounded-lg p-3 w-72 h-48">
                            <p className="relative">
                                {item.svg}
                                <div className={`absolute -top-2 -left-2 bg-${item.color}-100 w-10 h-10 rounded-full -z-[1]`} />
                            </p>
                            <p className="text-textColor-500 font-semibold">{item.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects */}
            <section className="xl:px-40 xl:py-14 flex flex-col gap-14 items-center justify-center h-full">
                <div className="flex items-center justify-center flex-col w-full h-full">
                    <p className="uppercase text-xs bg-green-100 font-bold text-green-600 p-1 px-3 rounded-full shadow-sm  shadow-green-200 w-fit mb-3">Projects</p>
                    <div className="flex items-center justify-center h-32 relative mb-6">
                        <h1 className="text-[10rem] select-none font-bold text-textColor-100/80 uppercase absolute -z-[1]">Projects</h1>
                        <p className="text-textColor-500 text-3xl z-[1]">
                            We Treat <span className="text-textColor-700 font-semibold">Every Project</span> With Love
                        </p>
                    </div>
                    <p className="text-center text-textColor-600 max-w-[800px] mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                {/* Projects List */}
                <div className="flex flex-col items-center justify-center gap-14 w-full h-full">
                    {projectDetails.map((project, i) => (
                        <div className="w-full h-[500px] rounded-xl flex items-center justify-center overflow-hidden shadow-xl" key={i}>
                            <div className="w-[60%] h-full">
                                <Swiper
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination]}
                                    className="landingPageSwiper w-full h-full"
                                >
                                    {project.img.map((imgSrc, index2) => (
                                        <SwiperSlide key={index2} className="w-full h-full">
                                            <img src={imgSrc} alt="" className="w-full h-full object-cover object-center" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className="w-full h-full bg-white p-10 flex flex-col justify-center gap-6">
                                <h2 className="text-3xl text-textColor-700 font-bold">{project.name}</h2>
                                <div className="flex flex-col gap-6 mt-2 mb-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                                        <div>
                                            <p className="text-textColor-300 mb-2">Location</p>
                                            <p className="text-textColor-600 font-medium">{project.projectlocation}</p>
                                        </div>
                                        <div>
                                            <p className="text-textColor-300 mb-2">Size</p>
                                            <p className="text-textColor-600 font-medium">{project.projectSize}</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                                        <div>
                                            <p className="text-textColor-300 mb-2">Project Type</p>
                                            <p className="text-textColor-600 font-medium">{project.projectType}</p>
                                        </div>
                                        <div>
                                            <p className="text-textColor-300 mb-2">Scope</p>
                                            <p className="text-textColor-600 font-medium">{project.projectScope}</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                                        <div>
                                            <p className="text-textColor-300 mb-2">Finish Carpentry</p>
                                            <p className="text-textColor-600 font-medium">{project.finishCarpentry}</p>
                                        </div>
                                        <div>
                                            <p className="text-textColor-300 mb-2">Custom Carpentry</p>
                                            <p className="text-textColor-600 font-medium">{project.customCarpentry}</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-fit text-textColor-800 font-medium py-3 text-lg px-1 flex items-center gap-3 hover:gap-6 transition-all duration-300">
                                    View Project
                                    <span>
                                        <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team */}
            <section className="xl:px-40 xl:py-14 xl:pb-40 flex flex-col gap-14 items-center justify-center h-full">
                <div className="flex items-center justify-center flex-col w-full h-full">
                    <p className="uppercase text-xs bg-green-100 font-bold text-green-600 p-1 px-3 rounded-full shadow-sm  shadow-green-200 w-fit mb-3">Team</p>
                    <div className="flex items-center justify-center h-32 relative mb-6">
                        <h1 className="text-[10rem] select-none font-bold text-textColor-100/80 uppercase absolute -z-[1]">Team</h1>
                        <p className="text-textColor-500 text-3xl z-[1]">
                            Our <span className="text-textColor-700 font-bold">Team of True</span> Professionals
                        </p>
                    </div>
                    <p className="text-center text-textColor-600 max-w-[800px] mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="flex xl:flex-nowrap flex-wrap items-center justify-center mx-auto gap-8 w-full h-full">
                    {teamDetails.map((member, i) => (
                        <div key={i} className="rounded-xl shadow-xl overflow-hidden flex flex-col xl:even:translate-y-14">
                            <img src={member.img} alt="" className="xl:w-80 md:w-72 w-[17rem] xl:h-80 md:h-72 h-[17rem] object-cover object-center" />
                            <div className="flex flex-col items-center justify-center gap-1 p-4 sm:py-6">
                                <p className="text-textColor-700 font-bold sm:text-2xl text-xl text-center">{member.name}</p>
                                <p className="text-textColor-400 font-bold sm:text-lg text-center">{member.designation}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LandingPage;
