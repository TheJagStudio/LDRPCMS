import React from "react";

const DashboardAttendance = () => {
    const data = [
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
    ];
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-3 px-8">
            {data.map((item, index) => {
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
    );
};

export default DashboardAttendance;
