import React, { useState, useRef } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, Filler } from "chart.js";
import { Bar } from "react-chartjs-2";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const FacultyDashboard = () => {
    const swiperRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const attendance = [
        {
            sem: "5th",
            div: "B",
            students: 69,
        },
    ];

    const options = {
        responsive: true,
    };

    const labels = ["January", "February", "March", "April", "March", "May", "June"];

    const data = {
        labels,
        datasets: [
            {
                label: "Attandance",
                data: [10, 20, 50, 30, 32, 20, 25],
                backgroundColor: "#e4d0ff88",
                borderColor: "#8833ff",
                borderWidth: 1,
            },
        ],
    };

    const learnerList = [
        {
            semester: "3",
            division: "B",
            students: "55",
        },
        {
            semester: "3",
            division: "B*",
            students: "49",
        },
        {
            semester: "5",
            division: "B",
            students: "53",
        },
        {
            semester: "5",
            division: "D",
            students: "61",
        },
        {
            semester: "5",
            division: "E",
            students: "57",
        },
    ];

    const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    const timeTable = [
        [
            {
                classRoom: "",
                sem: "",
                div: "",
            },
            {
                classRoom: "306",
                sem: "7th",
                div: "D",
            },
            {
                classRoom: "",
                sem: "",
                div: "",
            },
            {
                classRoom: "306",
                sem: "7th",
                div: "D",
            },
            {
                classRoom: "",
                sem: "",
                div: "",
            },
            {
                classRoom: "306",
                sem: "7th",
                div: "D",
            },
        ],
        [
            {
                classRoom: "",
                sem: "",
                div: "",
            },
            {
                classRoom: "",
                sem: "",
                div: "",
            },
            {
                classRoom: "306",
                sem: "7th",
                div: "D",
            },
            {
                classRoom: "",
                sem: "",
                div: "",
            },
            {
                classRoom: "306",
                sem: "7th",
                div: "D",
            },
            {
                classRoom: "",
                sem: "",
                div: "",
            },
        ],
        [
            {
                classRoom: "306",
                sem: "7th",
                div: "D",
            },
            {
                classRoom: "",
                sem: "",
                div: "",
            },
            {
                classRoom: "",
                sem: "",
                div: "",
            },
            {
                classRoom: "",
                sem: "",
                div: "",
            },
            {
                classRoom: "",
                sem: "",
                div: "",
            },
            {
                classRoom: "306",
                sem: "7th",
                div: "D",
            },
        ],
        [
            {
                classRoom: "306",
                sem: "7th",
                div: "D",
            },
            {
                classRoom: "306",
                sem: "7th",
                div: "D",
            },
            {
                classRoom: "",
                sem: "",
                div: "",
            },
            {
                classRoom: "",
                sem: "",
                div: "",
            },
            {
                classRoom: "306",
                sem: "7th",
                div: "D",
            },
            {
                classRoom: "",
                sem: "",
                div: "",
            },
        ],
        [
            {
                classRoom: "306",
                sem: "7th",
                div: "D",
            },
            {
                classRoom: "",
                sem: "",
                div: "",
            },
            {
                classRoom: "306",
                sem: "7th",
                div: "D",
            },
            {
                classRoom: "",
                sem: "",
                div: "",
            },
            {
                classRoom: "",
                sem: "",
                div: "",
            },
            {
                classRoom: "306",
                sem: "7th",
                div: "D",
            },
        ],
        [
            {
                classRoom: "306",
                sem: "7th",
                div: "D",
            },
            {
                classRoom: "",
                sem: "",
                div: "",
            },
            {
                classRoom: "",
                sem: "",
                div: "",
            },
            {
                classRoom: "",
                sem: "",
                div: "",
            },
            {
                classRoom: "306",
                sem: "7th",
                div: "D",
            },
            {
                classRoom: "",
                sem: "",
                div: "",
            },
        ],
        [
            {
                classRoom: "",
                sem: "",
                div: "",
            },
            {
                classRoom: "306",
                sem: "7th",
                div: "D",
            },
            {
                classRoom: "",
                sem: "",
                div: "",
            },
            {
                classRoom: "",
                sem: "",
                div: "",
            },
            {
                classRoom: "306",
                sem: "7th",
                div: "D",
            },
            {
                classRoom: "306",
                sem: "7th",
                div: "D",
            },
        ],
        [
            {
                classRoom: "",
                sem: "",
                div: "",
            },
            {
                classRoom: "",
                sem: "",
                div: "",
            },
            {
                classRoom: "",
                sem: "",
                div: "",
            },
            {
                classRoom: "306",
                sem: "7th",
                div: "D",
            },
            {
                classRoom: "306",
                sem: "7th",
                div: "D",
            },
            {
                classRoom: "",
                sem: "",
                div: "",
            },
        ],
        [
            {
                classRoom: "306",
                sem: "7th",
                div: "D",
            },
            {
                classRoom: "",
                sem: "",
                div: "",
            },
            {
                classRoom: "306",
                sem: "7th",
                div: "D",
            },
            {
                classRoom: "306",
                sem: "7th",
                div: "D",
            },
            {
                classRoom: "306",
                sem: "7th",
                div: "D",
            },
            {
                classRoom: "",
                sem: "",
                div: "",
            },
        ],
    ];

    const timings = ["9:00 to 9:55", "9:55 to 10:50", "", "11:00 to 11:55", "11:55 to 12:50", "", "01:20 to 2:15", "2:15 to 3:10"];

    return (
        <div className="flex flex-nowrap w-full h-full">
            <div className="w-full">
                <div className="w-full h-32 flex flex-wrap items-center justify-between p-2 px-8 lg:p-9">
                    <div className="flex gap-4 w-full lg:w-fit">
                        <svg width={24} height={24} className="text-textColor-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x={4} y={4} width={6} height={7} rx={1} fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
                            <rect x={4} y={15} width={6} height={5} rx={1} fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
                            <rect x={14} y={4} width={6} height={5} rx={1} fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
                            <rect x={14} y={13} width={6} height={7} rx={1} fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
                        </svg>
                        <div className="relative">
                            <p className="absolute -top-6 -left-4 text-6xl text-textColor-100/80 font-bold -z-10 select-none">Faculty</p>
                            <p className="font-bold text-textColor-500">Dashboard</p>
                        </div>
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6 pb-6 px-8">
                    {/* Attendance */}
                    <div className="w-full">
                        {attendance.map((item, index) => {
                            let row1 = parseInt(item.students / 4);
                            let row2 = parseInt(item.students / 4);
                            let row3 = parseInt(item.students / 4);
                            let row4 = item.students - row1 - row2 - row3;
                            let rows = [row3, row1, row2, row4];
                            return (
                                <div key={index} className="w-full h-fit bg-white shadowCustom rounded-xl border border-borderColor relative">
                                    <div className="bg-primary-600 h-10 w-[70%] rounded-b-lg mx-auto flex items-center justify-center">
                                        <p className="text-white">
                                            {item.sem} - {item.div}
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 w-full h-full p-4">
                                        {rows.map((item2, index2) => (
                                            <div key={index2} className="w-full h-fit grid grid-cols-2 gap-1">
                                                {Array.from({ length: 24 }).map((_, index3) => (
                                                    <div key={index3} className={" h-auto w-full aspect-square rounded " + (index3 > item2 ? "bg-gray-200" : "bg-green-500")}></div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {/* Graph */}
                    <div className="bg-white h-full rounded-xl col-span-2 flex flex-col items-center justify-center gap-3 shadowCustom p-3">
                        <p className="text-textColor-500 text-sm font-semibold">Attendance</p>
                        <Bar options={options} data={data} />
                    </div>
                    {/* Action / Complain */}
                    <div className="border border-borderColor rounded-xl w-full flex flex-col shadowCustom overflow-hidden">
                        <div className="w-full bg-white border-b border-borderColor flex flex-nowrap items-center justify-between px-5 pb-4 pt-5">
                            <div className="flex flex-nowrap gap-2">
                                <p
                                    onClick={() => {
                                        swiperRef.current.swiper.slideTo(0);
                                        setCurrentSlide(0);
                                    }}
                                    className={currentSlide === 1 ? "text-textColor-500 cursor-pointer" : "font-bold text-primary-600 "}
                                >
                                    Actions
                                </p>
                                <p
                                    onClick={() => {
                                        swiperRef.current.swiper.slideTo(1);
                                        setCurrentSlide(1);
                                    }}
                                    className={currentSlide === 1 ? "font-bold text-primary-600 " : "text-textColor-500 cursor-pointer"}
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
                    {/* Learners List */}
                    <div className="w-full bg-white border border-borderColor rounded-xl shadowCustom overflow-hidden">
                        <div className="w-full grid grid-cols-3">
                            <p className="border-b border-borderColor bg-textColor-100 font-semibold text-textColor-600 py-2 px-4">Sem</p>
                            <p className="border-b border-borderColor bg-textColor-100 font-semibold text-textColor-600 py-2 px-4">Div</p>
                            <p className="border-b border-borderColor bg-textColor-100 font-semibold text-textColor-600 py-2 px-4">Students</p>
                        </div>
                        <div className="w-full">
                            {learnerList.map((item, i) => {
                                return (
                                    <div key={i} className="grid grid-cols-3 w-full hover:bg-textColor-50 transition-all">
                                        <p className="border-b border-borderColor py-2 px-4">{item.semester}</p>
                                        <p className="border-b border-borderColor py-2 px-4">{item.division}</p>
                                        <p className="border-b border-borderColor py-2 px-4">{item.students}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    {/* Time Table */}
                    <div className="w-full col-span-3 bg-white border border-borderColor rounded-xl shadowCustom overflow-hidden">
                        <div className="w-full grid grid-cols-8 text-center">
                            <p className="border-b border-borderColor bg-textColor-100 font-semibold text-textColor-600 py-2 px-4 col-span-2"></p>
                            {days.map((item, i) => {
                                return (
                                    <p key={i} className="border-b border-borderColor bg-textColor-100 font-semibold text-textColor-600 py-2 px-4">
                                        {item}
                                    </p>
                                );
                            })}
                        </div>
                        <div className="w-full">
                            {/* {Array(1, 2, "", 3, 4, "", 5, 6).map((item, i) => {
                                return (
                                    <div key={i} className="grid grid-cols-7 w-full hover:bg-textColor-50 transition-all">
                                        {timeTable.map((period, i2) => {
                                            return (
                                                <>
                                                    <p className="border-b border-borderColor py-2 px-4">{item}</p>
                                                    <p className="border-b border-borderColor py-2 px-4">{item.semester}</p>
                                                    <p className="border-b border-borderColor py-2 px-4">{item.division}</p>
                                                    <p className="border-b border-borderColor py-2 px-4">{item.students}</p>
                                                    <p className="border-b border-borderColor py-2 px-4">{item.students}</p>
                                                    <p className="border-b border-borderColor py-2 px-4">{item.students}</p>
                                                    <p className="border-b border-borderColor py-2 px-4">{item.students}</p>
                                                </>
                                            );
                                        })}
                                    </div>
                                );
                            })} */}
                            {timings.map((item, i) => {
                                if (item % 3 === 0) {
                                    return <div key={i} className="grid grid-cols-8 w-full bg-red-50 transition-all border-b border-borderColor h-6"></div>;
                                } else {
                                    return (
                                        <div key={i} className="grid grid-cols-8 w-full hover:bg-textColor-50 transition-all">
                                            <p className="border-b border-borderColor py-2 px-4 col-span-2 flex items-center gap-2">
                                                <span className="font-bold">{i + 1}</span> {"(" + item + ")"}
                                            </p>
                                            {timeTable[i]?.map((item2, i2) => {
                                                return (
                                                    <div className="flex flex-col items-center justify-start gap-1 border-b border-borderColor py-2 px-4 w-full">
                                                        <p className="">
                                                            {item2.sem}-{item2.div}
                                                        </p>
                                                        <p className="">{item2.classRoom}</p>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacultyDashboard;
