import React, { useState, useRef } from "react";
import CalendarMonth from "../Components/Calendar/CalendarMonth";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CalendarPage = () => {
    const swiperRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    let Today = new Date();
    let Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let MonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let CurrentYear = Today.getFullYear();
    let CurrentMonth = Today.getMonth();
    let CurrentMonthStart = new Date(CurrentYear, CurrentMonth, 1).getDay();
    let CurrentDay = Today.getDate();
    let YearStart = new Date(CurrentYear, 0, 1).getDay();
    if (CurrentYear % 4 === 0) {
        MonthDays[1] = 29;
    }
    let [calendarData, setCalendarData] = useState([
        [
            {
                year: 2023,
                day: 25,
                title: "Holiday 1",
                description: "This is a holiday",
                color: "green",
                start: "9:00",
                end: "4:00",
            },
        ],
        [
            {
                year: 2023,
                day: 6,
                title: "HOD Meeting",
                description: "This is a meeting",
                color: "red",
                start: "9:30",
                end: "10:30",
            },
            {
                year: 2023,
                day: 12,
                title: "Holiday 2",
                description: "This is a holiday",
                color: "green",
                start: "9:00",
                end: "4:00",
            },
        ],
        [
            {
                year: 2023,
                day: 8,
                title: "Sports Day",
                description: "This is a sports day",
                color: "yellow",
                start: "11:30",
                end: "1:30",
            },
            {
                year: 2023,
                day: 18,
                title: "HOD Meeting",
                description: "This is a meeting",
                color: "red",
                start: "9:30",
                end: "10:30",
            },
        ],
        [],
        [
            {
                year: 2023,
                day: 9,
                title: "Yoga Day",
                description: "This is a sports day",
                color: "yellow",
                start: "11:30",
                end: "1:30",
            },
            {
                year: 2023,
                day: 9,
                title: "HOD Meeting",
                description: "This is a meeting",
                color: "red",
                start: "9:30",
                end: "10:30",
            },
        ],
        [],
        [],
        [
            {
                year: 2023,
                day: 12,
                title: "Seminar",
                description: "This is a seminar",
                color: "yellow",
                start: "11:30",
                end: "1:30",
            },
            {
                year: 2023,
                day: 15,
                title: "HOD Meeting",
                description: "Meating is reagrading the new shedule",
                color: "red",
                start: "9:30",
                end: "10:30",
            },
            {
                year: 2023,
                day: 15,
                title: "Leave",
                description: "This is a leave",
                color: "blue",
                start: "9:00",
                end: "4:00",
            },
        ],
        [
            {
                year: 2023,
                day: 13,
                title: "Leave",
                description: "This is a leave",
                color: "blue",
                start: "9:00",
                end: "4:00",
            },
        ],
        [],
        [],
        [
            {
                year: 2023,
                day: 15,
                title: "HOD Meeting",
                description: "This is a meeting",
                color: "red",
                start: "9:30",
                end: "10:30",
            },
            {
                year: 2023,
                day: 19,
                title: "HOD Meeting",
                description: "This is a meeting",
                color: "red",
                start: "9:30",
                end: "10:30",
            },
        ],
    ]);
    return (
        <div className="flex flex-col w-full h-full">
            <div className="w-full ">
                <div className="w-full h-32 flex flex-wrap items-center justify-between p-2 px-8 lg:p-9">
                    <div className="flex gap-4">
                        <svg className="w-6 h-6 text-textColor-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x={3} y={6} width={18} height={15} rx={2} stroke="currentColor" strokeWidth={2} />
                            <path d="M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10H3Z" fill="currentColor" />
                            <path d="M7 3L7 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                            <path d="M17 3L17 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                            <rect x={7} y={12} width={4} height={2} rx={0.5} fill="currentColor" />
                            <rect x={7} y={16} width={4} height={2} rx={0.5} fill="currentColor" />
                            <rect x={13} y={12} width={4} height={2} rx={0.5} fill="currentColor" />
                            <rect x={13} y={16} width={4} height={2} rx={0.5} fill="currentColor" />
                        </svg>
                        <div className="relative">
                            <p className="absolute -top-6 -left-4 text-6xl text-textColor-100/80 font-bold -z-10 select-none">{currentSlide === 0 ? "Year" : "Month"}</p>
                            <p className="font-bold text-textColor-500">Calendar</p>
                        </div>
                    </div>
                    <button className="bg-primary-500 text-white flex flex-nowrap items-center px-3 py-2 gap-2 rounded-full w-fit h-12 purpleBtnShadow hover:-translate-y-1 transition-all group">
                        <svg className="w-6 h-6 group-hover:rotate-180 transition-all" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 6a1 1 0 0 1-1-1v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 1 1 2 0v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 0 1-1 1Z" fill="currentColor" />
                        </svg>
                        <span className="hidden lg:flex">Add Task</span>
                    </button>
                </div>
            </div>
            <div className="w-[90%] lg:w-[95%] mx-auto h-fit bg-white rounded-2xl shadowCustom mb-10 overflow-hidden">
                <div className="border-b border-borderColor flex flex-wrap gap-2 lg:flex-nowrap items-center justify-between px-5 py-5">
                    <button className="rounded-full px-4 py-2 border border-borderColor purpleBtnShadow hover:-translate-y-1 transition-all text-textColor-500 hover:text-primary-500 hover:font-semibold">Today</button>
                    <div className="flex flex-nowrap gap-3 items-center justify-center">
                        <button className="rounded-full p-2 border border-borderColor purpleBtnShadow hover:-translate-y-1 transition-all text-textColor-500 hover:text-primary-500 hover:font-semibold">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m15 6-6 6 6 6" stroke="#33363F" strokeWidth={2} />
                            </svg>
                        </button>
                        <p className="text-lg text-textColor-600 font-bold">
                            {CurrentDay} {Months[CurrentMonth]} , {CurrentYear}
                        </p>
                        <button className="rounded-full p-2 border border-borderColor purpleBtnShadow hover:-translate-y-1 transition-all text-textColor-500 hover:text-primary-500 hover:font-semibold">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m9 6 6 6-6 6" stroke="#33363F" strokeWidth={2} />
                            </svg>
                        </button>
                    </div>
                    <div className="flex rounded-full border border-borderColor overflow-hidden shaowCustom">
                        <button
                            onClick={() => {
                                swiperRef.current.swiper.slideTo(0);
                                setCurrentSlide(0);
                            }}
                            className={"px-4 py-2 w-20 border-r border-borderColor  " + (currentSlide === 0 ? "text-primary-600 font-bold" : "text-textColor-500 bg-textColor-50")}
                        >
                            Year
                        </button>
                        <button
                            onClick={() => {
                                swiperRef.current.swiper.slideTo(1);
                                setCurrentSlide(1);
                            }}
                            className={"px-4 py-2 w-20 border-r border-borderColor  " + (currentSlide === 1 ? "text-primary-600 font-bold" : "text-textColor-500 bg-textColor-50")}
                        >
                            Month
                        </button>
                        <button
                            onClick={() => {
                                swiperRef.current.swiper.slideTo(2);
                                setCurrentSlide(2);
                            }}
                            className={"px-4 py-2 w-20 border-r border-borderColor  " + (currentSlide === 2 ? "text-primary-600 font-bold" : "text-textColor-500 bg-textColor-50")}
                        >
                            Week
                        </button>
                    </div>
                </div>
                <Swiper
                    className="w-full"
                    ref={swiperRef}
                    autoHeight={true}
                    calculateHeight={true}
                    onSlideChange={() => {
                        setCurrentSlide(swiperRef.current.swiper.activeIndex);
                    }}
                >
                    <SwiperSlide>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {Months.map((month, index) => {
                                let startOld = YearStart;
                                YearStart = (startOld + MonthDays[index]) % 7;
                                return (
                                    <div key={index} className={"w-full h-full p-3 bg-white border-borderColor last:border-none " + (index % 4 === 3 ? "" : " xl:border-r ") + (index > 7 ? " border-b xl:border-b-0 " : " border-b")}>
                                        <CalendarMonth name={month} monthIndex={index + 1} start={startOld} previousEnd={index !== 0 ? MonthDays[index - 1] : MonthDays[11]} days={MonthDays[index]} data={calendarData[index]} />
                                    </div>
                                );
                            })}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="grid grid-cols-7 ">
                            <div className="text-center text-textColor-600 font-bold py-5 border-borderColor border-b border-r">
                                <span className="hidden sm:block">Sunday</span>
                                <span className="block sm:hidden">Su</span>
                            </div>
                            <div className="text-center text-textColor-600 font-bold py-5 border-borderColor border-b border-r">
                                <span className="hidden sm:block">Monday</span>
                                <span className="block sm:hidden">MO</span>
                            </div>
                            <div className="text-center text-textColor-600 font-bold py-5 border-borderColor border-b border-r">
                                <span className="hidden sm:block">Tuesday</span>
                                <span className="block sm:hidden">TU</span>
                            </div>
                            <div className="text-center text-textColor-600 font-bold py-5 border-borderColor border-b border-r">
                                <span className="hidden sm:block">Wednesday</span>
                                <span className="block sm:hidden">WE</span>
                            </div>
                            <div className="text-center text-textColor-600 font-bold py-5 border-borderColor border-b border-r">
                                <span className="hidden sm:block">Thrusday</span>
                                <span className="block sm:hidden">TH</span>
                            </div>
                            <div className="text-center text-textColor-600 font-bold py-5 border-borderColor border-b border-r">
                                <span className="hidden sm:block">Friday</span>
                                <span className="block sm:hidden">FR</span>
                            </div>
                            <div className="text-center text-textColor-600 font-bold py-5 border-borderColor border-b">
                                <span className="hidden sm:block">Saturday</span>
                                <span className="block sm:hidden">SA</span>
                            </div>
                            {Array.from({ length: CurrentMonthStart }).map((_, index) => (
                                <div key={index} className="font-semibold h-auto aspect-square w-full text-right p-4 text-xl border-b border-r border-borderColor text-textColor-200 py-3 cursor-default ">
                                    {CurrentMonth !== 0 ? MonthDays[CurrentMonth - 1] - CurrentMonthStart + 1 + index : MonthDays[11] - CurrentMonthStart + 1 + index}
                                </div>
                            ))}
                            {Array.from({ length: MonthDays[CurrentMonth] }).map((_, index) => {
                                let color = [];
                                let title = [];
                                let start = [];
                                let end = [];
                                let description = [];
                                let data = calendarData[CurrentMonth];
                                for (let i = 0; i < data.length; i++) {
                                    if (data[i].day === index + 1) {
                                        color.push(data[i].color);
                                        title.push(data[i].title);
                                        start.push(data[i].start);
                                        end.push(data[i].end);
                                        description.push(data[i].description);
                                    }
                                }
                                return (
                                    <div key={index} className={"font-semibold h-auto aspect-auto lg:aspect-square w-full text-right p-3 lg:p-4 text-xl border-borderColor text-textColor-500 py-3 cursor-default " + ((index + CurrentMonthStart) % 7 === 6 ? "border-b" : MonthDays[CurrentMonth] - ((MonthDays[CurrentMonth] + CurrentMonthStart) % 7) < index + 1 ? " border-r" : "border-b border-r")}>
                                        <p>{index + 1}</p>
                                        <div className={"z-20 w-48 scale-100 transition-all duration-300 "}>
                                            {color.length !== 0
                                                ? (() => {
                                                      return (
                                                          <>
                                                              {color.map((_, index2) => {
                                                                  return (
                                                                      <div className={"relative group font-semibold text-start rounded-full lg:rounded-md px-3 py-1 w-6 aspect-square lg:aspect-auto lg:h-auto lg:w-full mt-2 text-textColor-600 hover:text-white transition-all border-2 border-" + color[index2] + "-500 bg-" + color[index2] + "-50 hover:bg-" + color[index2] + "-500 "}>
                                                                          <p className="hidden lg:block">{title[index2]}</p>
                                                                          <div className={"absolute scale-0 group-hover:scale-100 origin-bottom transition-all bottom-[110%] left-0 h-fit p-2 lg:w-full border-2 rounded-lg border-" + color[index2] + "-500 bg-" + color[index2] + "-50 " + ((index + CurrentMonthStart) % 7 > 3 ? "-translate-x-[calc(100%-2rem)]" : "origin-bottom-left")}>
                                                                              <div className="flex flex-nowrap gap-2">
                                                                                  <div className={"text-lg px-1 rounded-md bg-" + color[index2] + "-500"}>{start[index2]}</div>
                                                                                  <div className={"text-lg px-1 rounded-md bg-" + color[index2] + "-500"}>{end[index2]}</div>
                                                                              </div>
                                                                              <p className="text-xl text-textColor-600 mt-2">{title[index2]}</p>
                                                                              <p className="text-sm text-textColor-400">{description[index2]}</p>
                                                                          </div>
                                                                      </div>
                                                                  );
                                                              })}
                                                          </>
                                                      );
                                                  })()
                                                : ""}
                                        </div>
                                    </div>
                                );
                            })}
                            {Array.from({ length: 7 - ((CurrentMonthStart + MonthDays[CurrentMonth]) % 7) }).map((_, index) => {
                                return (
                                    <div key={index} className={"font-semibold h-auto aspect-square w-full text-right p-4 text-xl border-borderColor text-textColor-200 py-3 cursor-default " + ((index + MonthDays[CurrentMonth] + CurrentMonthStart) % 7 === 6 ? "" : "border-r")}>
                                        {index + 1}
                                    </div>
                                );
                            })}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>Week</div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default CalendarPage;
