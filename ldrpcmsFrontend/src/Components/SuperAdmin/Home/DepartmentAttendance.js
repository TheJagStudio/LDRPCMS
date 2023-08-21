import React from "react";

const DepartmentAttendance = ({ data }) => {
    return (
        <div className="w-full bg-white rounded-lg h-full shadowCustom p-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 relative ">
                    <p className="text-textColor-500 font-semibold">{data.deptName}</p>
                    <div className="group relative ">
                        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-textColor-200 hover:text-primary-600 cursor-pointer">
                            <path fillRule="evenodd" clipRule="evenodd" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-8 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 5a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2h.094C13.147 7 14 7.853 14 8.906v.513c0 .514-.329.97-.816 1.132A3.194 3.194 0 0 0 11 13.581V16h2v-2.419c0-.514.329-.97.816-1.132A3.194 3.194 0 0 0 16 9.419v-.513A3.906 3.906 0 0 0 12.094 5H12Z" fill="currentColor" />
                        </svg>
                        <div className="w-48 h-fit scale-0 group-hover:scale-100 transition-all origin-bottom bg-white drop-shadow p-3 rounded-lg absolute bottom-8 left-0 -translate-x-1/2">
                            <p className="text-xs text-textColor-500 font-medium">Attendance of all division for {data.deptName} Department</p>
                            <svg width={15} height={15} className="absolute -bottom-3.5 left-1/2 translate-x-0.5 rotate-180 scale-x-150" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill="white" d="M9.86584 1.26833L1.10854 18.7829C1.05867 18.8827 1.1312 19 1.2427 19H18.7573C18.8688 19 18.9413 18.8827 18.8915 18.7829L10.1342 1.26833C10.0789 1.15777 9.92111 1.15777 9.86584 1.26833Z" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-textColor-500 rotate-90">
                    <circle cx={12} cy={12} r={1} stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                    <circle cx={6} cy={12} r={1} stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                    <circle cx={18} cy={12} r={1} stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                </svg>
            </div>
            <div className="mt-3">
                {data.deptData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between border-b last:border-none border-borderColor ">
                        <p className="text-textColor-500 font-bold">{item.semName}</p>
                        <div className="flex flex-nowrap justify-between border-l border-borderColor">
                            {item.semData.map((item2, index2) => (
                                <p key={index2} className="text-textColor-500 font-medium border-r last:border-none border-borderColor w-10 text-center">
                                    {item2}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DepartmentAttendance;
