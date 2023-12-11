import React, { useState } from "react";

const DashboardAttendance = () => {
    const [semester, setSemester] = useState(1);
    const data = {
        1: [
            {
                name: "Division B",
                students: 27,
            },
            {
                name: "Division B*",
                students: 65,
            },
            {
                name: "Division D",
                students: 77,
            },
            {
                name: "Division E",
                students: 75,
            },
            {
                name: "Division I",
                students: 25,
            },
            {
                name: "Division J",
                students: 10,
            },
        ],
        2: [
            {
                name: "Division B",
                students: 45,
            },
            {
                name: "Division B*",
                students: 36,
            },
            {
                name: "Division D",
                students: 86,
            },
            {
                name: "Division E",
                students: 25,
            },
            {
                name: "Division I",
                students: 10,
            },
            {
                name: "Division J",
                students: 0,
            },
        ],
        3: [
            {
                name: "Division B",
                students: 61,
            },
            {
                name: "Division B*",
                students: 43,
            },
            {
                name: "Division D",
                students: 32,
            },
            {
                name: "Division I",
                students: 14,
            },
            {
                name: "Division J",
                students: 57,
            },
        ],
        4: [
            {
                name: "Division B",
                students: 65,
            },
            {
                name: "Division B*",
                students: 24,
            },
            {
                name: "Division D",
                students: 86,
            },
            {
                name: "Division E",
                students: 24,
            },
            {
                name: "Division J",
                students: 32,
            },
        ],
        5: [
            {
                name: "Division B",
                students: 14,
            },
            {
                name: "Division B*",
                students: 25,
            },
            {
                name: "Division D",
                students: 63,
            },
            {
                name: "Division I",
                students: 42,
            },
            {
                name: "Division J",
                students: 23,
            },
        ],
        6: [
            {
                name: "Division B",
                students: 13,
            },
            {
                name: "Division B*",
                students: 24,
            },
            {
                name: "Division D",
                students: 42,
            },
            {
                name: "Division E",
                students: 12,
            },
        ],
        7: [
            {
                name: "Division B",
                students: 75,
            },
            {
                name: "Division B*",
                students: 62,
            },
            {
                name: "Division D",
                students: 12,
            },
            {
                name: "Division I",
                students: 42,
            },
            {
                name: "Division J",
                students: 32,
            },
        ],
        8: [
            {
                name: "Division B",
                students: 35,
            },
            {
                name: "Division B*",
                students: 42,
            },
            {
                name: "Division D",
                students: 56,
            },
            {
                name: "Division E",
                students: 12,
            },
        ],
    };
    return (
        <div className="w-full">
            <div className="flex items-center gap-4 px-8 mb-4 w-fit">
                <label htmlFor="username" className="font-medium text-textColor-600">
                    Semester
                </label>
                <select
                    onChange={(event) => {
                        setSemester(event.currentTarget.value);
                    }}
                    value={semester}
                    className="border rounded-lg p-2.5 px-4 outline-none text-textColor-500 shadowCustom"
                >
                    {Array(1, 2, 3, 4, 5, 6, 7, 8).map((sem, i) => {
                        return <option value={sem}>{sem}</option>;
                    })}
                </select>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-3 px-8">
                {data[semester].map((item, index) => {
                    let row1 = parseInt(item.students / 4);
                    let row2 = parseInt(item.students / 4);
                    let row3 = parseInt(item.students / 4);
                    let row4 = item.students - row1 - row2 - row3;
                    let rows = [row3, row1, row2, row4];
                    return (
                        <div key={index} className="w-full h-fit bg-white shadowCustom rounded-xl border border-borderColor relative">
                            <div className="bg-primary-600 h-10 w-[70%] rounded-b-lg mx-auto flex items-center justify-center">
                                <p className="text-white">{item.name}</p>
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
        </div>
    );
};

export default DashboardAttendance;
