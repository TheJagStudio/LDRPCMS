import React, { useState } from "react";

// Bar chart
import { Bar } from "react-chartjs-2";

// Flatpickr
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";

const AttendanceHome = () => {
    const [date, setDate] = useState({});

    const options = {
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    const labels = ["January", "February", "March", "April", "March", "May", "June"];

    const data = {
        labels,
        datasets: [
            {
                label: "Batch 1",
                data: [10, 20, 50, 30, 32, 20, 25],
                backgroundColor: "#e4d0ff88",
                borderColor: "#8833ff",
                borderWidth: 1,
            },
            {
                label: "Batch 2",
                data: [5, 3, 2, 4, 10, 3, 9],
                backgroundColor: "#e4d0ff88",
                borderColor: "#8833ff",
                borderWidth: 1,
            },
        ],
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
                            <p className="absolute -top-6 -left-4 text-6xl text-textColor-100/80 font-bold -z-10 select-none">Attendance</p>
                            <p className="font-bold text-textColor-500">Dashboard</p>
                        </div>
                    </div>
                </div>
                <div class="px-8 w-full">
                    <div className="w-full bg-white p-5 px-6 rounded-lg shadow-md">
                        <div className="w-full grid grid-cols-4 gap-3">
                            <div className="flex flex-col">
                                <label htmlFor="datePicker" className="ml-4 mb-2 font-medium text-textColor-600">
                                    Date
                                </label>
                                <Flatpickr
                                    placeholder="Select Date"
                                    className="border rounded-full p-2.5 px-4 outline-none text-textColor-500 shadowCustom"
                                    onChange={([date]) => {
                                        setDate(date);
                                        // console.log(document.getElementsByClassName("flatpickr-input")[0].value);
                                    }}
                                    options={{
                                        dateFormat: "d-m-Y",
                                        mode: "range",
                                    }}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="username" className="ml-4 mb-2 font-medium text-textColor-600">
                                    Branch
                                </label>
                                <select className="border rounded-full p-2.5 px-4 outline-none text-textColor-500 shadowCustom">
                                    <option value="Computer Engineering">Computer Engineering</option>
                                    <option value="Information Technology">Information Technology</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="username" className="ml-4 mb-2 font-medium text-textColor-600">
                                    Semester
                                </label>
                                <select className="border rounded-full p-2.5 px-4 outline-none text-textColor-500 shadowCustom">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                </select>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="bg-primary-600 px-4 py-2 mt-7 rounded-lg text-white cursor-pointer">Submit</div>
                                <div className="bg-primary-600 px-4 py-2 mt-7 rounded-lg text-white cursor-pointer">Clear</div>
                                <div className="bg-primary-600 px-4 py-2 mt-7 rounded-lg text-white cursor-pointer">Print</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="px-8 w-full grid grid-cols-2 gap-4 my-5">
                    <div className="w-full bg-white p-5 px-6 rounded-lg shadow-md">
                        <Bar options={options} data={data} />
                    </div>
                    <div className="w-full bg-white p-5 px-6 rounded-lg shadow-md">
                        <Bar options={options} data={data} />
                    </div>
                    <div className="w-full bg-white p-5 px-6 rounded-lg shadow-md">
                        <Bar options={options} data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AttendanceHome;
