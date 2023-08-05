import React, { useRef, useState } from "react";
import { Line } from "react-chartjs-2";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const labels = ["January", "February", "March", "April", "March", "May", "June"];

export const optionsLine = {
    scales: {
        x: {
            display: false, // hide x-axis
        },
        y: {
            display: false, // hide y-axis
        },
    },
    plugins: {
        legend: {
            display: false, // hide legends
        },
        title: {
            display: false, // hide title
        },
    },
};

export const dataLine = {
    labels,
    datasets: [
        {
            fill: true,
            data: [10, 20, 50, 30, 22, 45, 59],
            backgroundColor: "#e4d0ff88",
            borderColor: "#8833ff",
            borderWidth: 1,
        },
    ],
};

const SidebarRight = () => {
    const swiperRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <div className="w-[22%] border-l border-borderColor hidden lg:flex flex-col gap-5 p-5">
            <div className="border border-borderColor rounded-xl w-full flex flex-col shadowCustom overflow-hidden">
                <div className="h-full flex flex-nowrap gap-2 px-3 relative">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-textColor-500 text-sm font-semibold">Total Sales</p>
                        <p className="text-textColor-600 font-bold text-2xl">$281.90</p>
                    </div>
                    <div>
                        <Line options={optionsLine} data={dataLine} style={{ height: "auto", width: "100%" }} />
                    </div>
                </div>
                <div className="w-full h-14 bg-white border-t border-borderColor flex flex-nowrap items-center justify-between px-4">
                    <p className="text-textColor-500">6 Total Orders</p>
                    <p className="font-bold text-textColor-500 hover:text-primary-600 transition-all cursor-pointer">View Report</p>
                </div>
            </div>
            <div className="border border-borderColor rounded-xl w-full flex flex-col shadowCustom overflow-hidden">
                <div className="h-full flex flex-nowrap gap-2 px-3 relative">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-textColor-500 text-sm font-semibold">Total Sales</p>
                        <p className="text-textColor-600 font-bold text-2xl">$281.90</p>
                    </div>
                    <div>
                        <Line options={optionsLine} data={dataLine} style={{ height: "auto", width: "100%" }} />
                    </div>
                </div>
                <div className="w-full h-14 bg-white border-t border-borderColor flex flex-nowrap items-center justify-between px-4">
                    <p className="text-textColor-500">6 Total Orders</p>
                    <p className="font-bold text-textColor-500 hover:text-primary-600 transition-all cursor-pointer">View Report</p>
                </div>
            </div>
            <div className="border border-borderColor rounded-xl w-full flex flex-col shadowCustom overflow-hidden">
                <div className="h-full flex flex-nowrap gap-2 px-3 relative">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-textColor-500 text-sm font-semibold">Total Sales</p>
                        <p className="text-textColor-600 font-bold text-2xl">$281.90</p>
                    </div>
                    <div>
                        <Line options={optionsLine} data={dataLine} style={{ height: "auto", width: "100%" }} />
                    </div>
                </div>
                <div className="w-full h-14 bg-white border-t border-borderColor flex flex-nowrap items-center justify-between px-4">
                    <p className="text-textColor-500">6 Total Orders</p>
                    <p className="font-bold text-textColor-500 hover:text-primary-600 transition-all cursor-pointer">View Report</p>
                </div>
            </div>
            <div className="border border-borderColor rounded-xl w-full flex flex-col shadowCustom overflow-hidden">
                <div className="w-full bg-white border-b border-borderColor flex flex-nowrap items-center justify-between px-5 pb-4 pt-5">
                    <div className="flex flex-nowrap gap-2">
                        <p
                            onClick={() => {
                                swiperRef.current.swiper.slideTo(0);
                                setCurrentSlide(0);
                            }}
                            className={currentSlide == 1 ? "text-textColor-500 cursor-pointer" : "font-bold text-primary-600 "}
                        >
                            Actions
                        </p>
                        <p
                            onClick={() => {
                                swiperRef.current.swiper.slideTo(1);
                                setCurrentSlide(1);
                            }}
                            className={currentSlide == 1 ? "font-bold text-primary-600 " : "text-textColor-500 cursor-pointer"}
                        >
                            Complains
                        </p>
                    </div>
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx={12} cy={12} r={1} stroke="#c3cad9" strokeWidth={2} strokeLinecap="round" />
                        <circle cx={6} cy={12} r={1} stroke="#c3cad9" strokeWidth={2} strokeLinecap="round" />
                        <circle cx={18} cy={12} r={1} stroke="#c3cad9" strokeWidth={2} strokeLinecap="round" />
                    </svg>
                </div>
                <Swiper
                    className="w-full"
                    ref={swiperRef}
                    onSlideChange={() => {
                        setCurrentSlide(swiperRef.current.swiper.activeIndex);
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <div className="flex flex-col gap-3 mb-3 p-3 select-none">
                            <div className="flex flex-nowrap gap-2">
                                <p className="w-fit h-8 rounded-full bg-white border-2 border-borderColor text-center p-2 py-1 text-sm text-textColor-500 font-bold relative">
                                    11:25
                                    <span className="absolute top-full left-1/2 h-14 w-0.5 bg-borderColor"></span>
                                </p>
                                <div className="flex flex-col">
                                    <p className="text-textColor-500 font-semibold">John Doe</p>
                                    <p className="text-textColor-500 text-xs font-light">
                                        <span className="text-primary-600 font-semibold z-0">Complain:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptas?
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-nowrap gap-2">
                                <p className="w-fit h-8 rounded-full bg-white border-2 border-borderColor text-center p-2 py-1 text-sm text-textColor-500 font-bold relative z-10">11:10</p>
                                <div className="flex flex-col">
                                    <p className="text-textColor-500 font-semibold">John Doe</p>
                                    <p className="text-textColor-500 text-xs font-light">
                                        <span className="text-primary-600 font-semibold">Complain:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptas?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-3 mb-3 p-3 select-none">
                            <div className="flex flex-nowrap gap-2">
                                <p className="w-fit h-8 rounded-full bg-white border-2 border-borderColor text-center p-2 py-1 text-sm text-textColor-500 font-bold relative">
                                    11:25
                                    <span className="absolute top-full left-1/2 h-14 w-0.5 bg-borderColor"></span>
                                </p>
                                <div className="flex flex-col">
                                    <p className="text-textColor-500 font-semibold">John Doe</p>
                                    <p className="text-textColor-500 text-xs font-light">
                                        <span className="text-primary-600 font-semibold z-0">Complain:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptas?
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-nowrap gap-2">
                                <p className="w-fit h-8 rounded-full bg-white border-2 border-borderColor text-center p-2 py-1 text-sm text-textColor-500 font-bold relative z-10">
                                    11:10
                                    <span className="absolute top-full left-1/2 h-14 w-0.5 bg-borderColor"></span>
                                </p>
                                <div className="flex flex-col">
                                    <p className="text-textColor-500 font-semibold">John Doe</p>
                                    <p className="text-textColor-500 text-xs font-light">
                                        <span className="text-primary-600 font-semibold">Complain:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptas?
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-nowrap gap-2">
                                <p className="w-fit h-8 rounded-full bg-white border-2 border-borderColor text-center p-2 py-1 text-sm text-textColor-500 font-bold relative z-10">11:05</p>
                                <div className="flex flex-col">
                                    <p className="text-textColor-500 font-semibold">John Doe</p>
                                    <p className="text-textColor-500 text-xs font-light">
                                        <span className="text-primary-600 font-semibold">Complain:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptas?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default SidebarRight;
