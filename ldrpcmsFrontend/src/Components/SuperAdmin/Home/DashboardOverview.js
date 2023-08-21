import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, Filler } from "chart.js";
import { Bar } from "react-chartjs-2";

// Components
import DepartmentAttendance from "../Home/DepartmentAttendance";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, Filler);
export const options = {
    responsive: true,
};

const labels = ["January", "February", "March", "April", "March", "May", "June"];

export const data = {
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

const DashboardOverview = () => {
    const departmentData = [
        {
            deptName: "Computer Engineering",
            deptData: [
                { semName: "Sem 8", semData: [20, 55, 48, 51] },
                { semName: "Sem 6", semData: [86, 45, 41, 23] },
                { semName: "Sem 4", semData: [7, 84, 2] },
                { semName: "Sem 2", semData: [89, 12, 25, 99, 200] },
            ],
        },
        {
            deptName: "IT Engineering",
            deptData: [
                { semName: "Sem 8", semData: [45, 0, 23, 12] },
                { semName: "Sem 6", semData: [25, 2, 35, 69] },
                { semName: "Sem 4", semData: [42, 7, 59] },
                { semName: "Sem 2", semData: [44, 99, 200] },
            ],
        },
        {
            deptName: "Mechanical Engineering",
            deptData: [
                { semName: "Sem 8", semData: [200, 152, 8] },
                { semName: "Sem 6", semData: [41, 1, 88, 45] },
                { semName: "Sem 4", semData: [36, 69, 7] },
                { semName: "Sem 2", semData: [56, 59] },
            ],
        },
    ];

    return (
        <>
            <div className="w-full grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-3 gap-3 px-8">
                <div className="bg-white h-40 rounded-xl col-span-2 lg:col-span-1 flex flex-col items-center justify-center gap-3 shadowCustom">
                    <p className="text-textColor-500 text-sm font-semibold">Sales: Aug 2027</p>
                    <p className="text-textColor-600 font-bold text-2xl">$5.73K</p>
                    <p className="text-textColor-500 text-xs ">Jul 2027: $10.35K</p>
                </div>
                <div className="bg-white h-40 rounded-xl col-span-2 lg:col-span-1 flex flex-col items-center justify-center gap-3 shadowCustom">
                    <p className="text-textColor-500 text-sm font-semibold">Average Order Value : Aug 2027</p>
                    <p className="text-textColor-600 font-bold text-2xl">$34</p>
                    <p className="text-textColor-500 text-xs ">Jul 2027: $0.23K</p>
                </div>
                <div className="bg-white h-full rounded-xl col-span-2 row-span-2 flex flex-col items-center justify-center gap-3 shadowCustom p-3">
                    <p className="text-textColor-500 text-sm font-semibold">Attendance</p>
                    <Bar options={options} data={data} />
                </div>
                <div className="bg-white h-full rounded-xl col-span-2 row-span-2 shadowCustom p-6">
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-textColor-500 font-bold">Staging Orders</p>
                        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-textColor-500 rotate-90">
                            <circle cx={12} cy={12} r={1} stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                            <circle cx={6} cy={12} r={1} stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                            <circle cx={18} cy={12} r={1} stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-8">
                        <div className="w-full h-28 bg-textColor-50 rounded-lg shadow-inner flex flex-col items-center justify-center">
                            <p className="text-2xl text-textColor-600 font-bold">18</p>
                            <p className="text-xs text-textColor-500 font-bold mt-3">Payment</p>
                        </div>
                        <div className="w-full h-28 bg-textColor-50 rounded-lg shadow-inner flex flex-col items-center justify-center">
                            <p className="text-2xl text-textColor-600 font-bold">12</p>
                            <p className="text-xs text-textColor-500 font-bold mt-3">In work</p>
                        </div>
                        <div className="w-full h-28 bg-textColor-50 rounded-lg shadow-inner flex flex-col items-center justify-center">
                            <p className="text-2xl text-textColor-600 font-bold">32</p>
                            <p className="text-xs text-textColor-500 font-bold mt-3">Delivery</p>
                        </div>
                        <div className="w-full h-28 bg-textColor-50 rounded-lg shadow-inner flex flex-col items-center justify-center">
                            <p className="text-2xl text-textColor-600 font-bold">32</p>
                            <p className="text-xs text-textColor-500 font-bold mt-3">Delivered</p>
                        </div>
                        <div className="w-full h-28 bg-textColor-50 rounded-lg shadow-inner flex flex-col items-center justify-center">
                            <p className="text-2xl text-textColor-600 font-bold">4</p>
                            <p className="text-xs text-textColor-500 font-bold mt-3">Failed</p>
                        </div>
                        <div className="w-full h-28 bg-textColor-50 rounded-lg shadow-inner flex flex-col items-center justify-center">
                            <p className="text-2xl text-textColor-600 font-bold">11</p>
                            <p className="text-xs text-textColor-600 font-bold mt-3">Return</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white h-40 rounded-xl col-span-2 lg:col-span-1 flex flex-col items-center justify-center gap-3 shadowCustom">
                    <p className="text-textColor-500 text-sm font-semibold">Total Profit: Aug 2027</p>
                    <p className="text-textColor-600 font-bold text-2xl">$1.2K</p>
                    <p className="text-textColor-500 text-xs ">Jul 2027: $0.8K</p>
                </div>
                <div className="bg-white h-40 rounded-xl col-span-2 lg:col-span-1 flex flex-col items-center justify-center gap-3 shadowCustom">
                    <p className="text-textColor-500 text-sm font-semibold">Cutomers: Aug 2027</p>
                    <p className="text-textColor-600 font-bold text-2xl">144</p>
                    <p className="text-textColor-500 text-xs ">Jul 2027: 121</p>
                </div>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 px-8 py-5">
                {departmentData.map((item, index) => (
                    <DepartmentAttendance data={item} key={index} />
                ))}
            </div>
        </>
    );
};

export default DashboardOverview;
