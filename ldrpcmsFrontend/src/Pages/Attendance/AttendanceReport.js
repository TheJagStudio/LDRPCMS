import React from "react";

const AttendanceReport = () => {
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
                            <p className="font-bold text-textColor-500">Report</p>
                        </div>
                    </div>
                </div>
                <div class="px-8 w-full">
                    <div className="w-full bg-white p-5 px-6 rounded-lg shadow-md">
                        <h1 className="text-2xl font-bold text-textColor-700 mb-6">Report Generation</h1>
                        <div className="w-full flex flex-col items-start justify-start gap-6">
                            <div className="flex flex-wrap lg:flex-nowrap items-end justify-between gap-8 w-full">
                                {/* Primary Filters */}
                                <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-6 w-full">
                                    <div className="flex flex-col w-full gap-1">
                                        <label htmlFor="dateFilter" className="font-medium text-textColor-500">
                                            Date
                                        </label>
                                        <input id="dateFilter" name="dateFilter" type="date" className="outline-none border p-1.5 px-3 rounded-md text-sm" />
                                    </div>
                                    <div className="flex flex-col w-full gap-1">
                                        <label htmlFor="branchFilter" className="font-medium text-textColor-500">
                                            Branch
                                        </label>
                                        <select id="branchFilter" className="outline-none border p-1.5 px-3 rounded-md text-sm">
                                            <option selected disabled value="">
                                                -- Select Branch --
                                            </option>
                                            <option>Computer</option>
                                            <option>IT</option>
                                            <option>Mechanical</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col w-full gap-1">
                                        <label htmlFor="semFilter" className="font-medium text-textColor-500">
                                            Semester
                                        </label>
                                        <select id="semFilter" className="outline-none border p-1.5 px-3 rounded-md text-sm">
                                            <option selected disabled value="">
                                                -- Select Semester --
                                            </option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col w-full gap-1">
                                        <label htmlFor="divFilter" className="font-medium text-textColor-500">
                                            Division
                                        </label>
                                        <select id="divFilter" className="outline-none border p-1.5 px-3 rounded-md text-sm">
                                            <option selected disabled value="">
                                                -- Select Division --
                                            </option>
                                            <option>B</option>
                                            <option>D</option>
                                            <option>E</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="flex items-end justify-center gap-3">
                                    <button
                                        className="w-fit h-auto p-1.5 px-3 bg-primary-500 text-white rounded-lg"
                                        onClick={() => {
                                            let extraFiltersDiv = document.getElementById("extraFiltersDiv");
                                            extraFiltersDiv.classList.toggle("grid-rows-[0fr]");
                                            extraFiltersDiv.classList.toggle("grid-rows-[1fr]");
                                        }}
                                    >
                                        <svg className="w-5 h-6" fill="currentColor" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                        </svg>
                                    </button>
                                    <button className="w-fit h-auto p-1.5 px-3 bg-primary-500 text-white rounded-lg">Submit</button>
                                    <button className="w-fit h-auto p-1.5 px-3 bg-primary-500 text-white rounded-lg">Clear</button>
                                    <button className="w-fit h-auto p-1.5 px-3 bg-primary-500 text-white rounded-lg">Print</button>
                                </div>
                            </div>
                            <div id="extraFiltersDiv" class="grid grid-rows-[0fr] transition-all duration-500 rounded-lg w-full">
                                <div class="overflow-hidden">
                                    <div className="flex flex-wrap lg:flex-nowrap items-center justify-between w-full gap-6">
                                        <div className="flex flex-col gap-1 w-full">
                                            <label htmlFor="branchFilter" className="font-medium text-textColor-500">
                                                Lecture Type
                                            </label>
                                            <select id="branchFilter" className="outline-none border p-1.5 px-3 rounded-md text-sm w-full">
                                                <option selected disabled value="">
                                                    -- Select Type --
                                                </option>
                                                <option>Lecture</option>
                                                <option>Lab</option>
                                                <option>Proxy</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col gap-1 w-full">
                                            <label htmlFor="branchFilter" className="font-medium text-textColor-500">
                                                Lecture No
                                            </label>
                                            <select id="branchFilter" className="outline-none border p-1.5 px-3 rounded-md text-sm">
                                                <option selected disabled value="">
                                                    -- Select Lecture No --
                                                </option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>3</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col gap-1 w-full">
                                            <label htmlFor="semFilter" className="font-medium text-textColor-500">
                                                Subject
                                            </label>
                                            <select id="semFilter" className="outline-none border p-1.5 px-3 rounded-md text-sm">
                                                <option selected disabled value="">
                                                    -- Select Subject --
                                                </option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col gap-1 w-full">
                                            <label htmlFor="divFilter" className="font-medium text-textColor-500">
                                                Faculty Name
                                            </label>
                                            <select id="divFilter" className="outline-none border p-1.5 px-3 rounded-md text-sm">
                                                <option selected disabled value="">
                                                    -- Select Faculty --
                                                </option>
                                                <option>B</option>
                                                <option>D</option>
                                                <option>E</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AttendanceReport;
