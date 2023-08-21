import React, { useState } from "react";

const StudentRequestForm = () => {
    const dropdownList = [
        {
            type: "LOR",
            inputLists: [
                {
                    type: "input",
                    label: "Name",
                    id: "name",
                    inputType: "text",
                    placeholder: "Enter Name..",
                },
                {
                    type: "input",
                    label: "Graduated",
                    id: "isGraduated",
                    inputType: "radio",
                    options: [
                        {
                            id: "yes-radio",
                            text: "Yes",
                            value: true,
                        },
                        {
                            id: "no-radio",
                            text: "No",
                            value: false,
                        },
                    ],
                    placeholder: "Enter Name..",
                },
                {
                    type: "select",
                    label: "Semester",
                    options: [
                        {
                            text: "Hii",
                            value: "Hii",
                        },
                        {
                            text: "Hii2",
                            value: "Hii2",
                        },
                        {
                            text: "Hii3",
                            value: "Hii3",
                        },
                    ],
                    placeholder: "Select Semester",
                    id: "facultyName",
                },
                {
                    type: "select",
                    label: "Faculty Name",
                    options: [
                        {
                            text: "Hii",
                            value: "Hii",
                        },
                        {
                            text: "Hii2",
                            value: "Hii2",
                        },
                        {
                            text: "Hii3",
                            value: "Hii3",
                        },
                    ],
                    id: "faculty",
                    placeholder: "Select Faculty",
                },
                {
                    type: "button",
                    position: "end",
                    id: "submit",
                    value: "Submit",
                },
            ],
        },
        {
            type: "Request Email",
            inputLists: [
                {
                    type: "input",
                    label: "Name",
                    id: "name2",
                    inputType: "text",
                    placeholder: "Enter Name 2..",
                },
                {
                    type: "select",
                    label: "Faculty",
                    options: [
                        {
                            text: "",
                            value: "",
                        },
                    ],
                    id: "faculty",
                    placeholder: "Select Faculty",
                },
                {
                    type: "textarea",
                    label: "Description",
                    id: "description",
                    placeholder: "Enter Description..",
                },
                {
                    type: "button",
                    position: "end",
                    id: "submit",
                    value: "Submit",
                },
            ],
        },
    ];

    const [formType, setFormType] = useState(0);

    return (
        <div className="flex flex-nowrap w-full h-full lg:px-0 md:px-10 px-6">
            <div className="w-full relative">
                <div className="w-full h-32 flex flex-wrap items-center justify-between sm:gap-0 gap-8 mt-12 mb-6 sm:mt-4 lg:mt-0 sm:mb-0 lg:p-9">
                    <div className="flex gap-4 w-full sm:w-fit">
                        <svg width={24} height={24} className="text-textColor-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x={4} y={4} width={6} height={7} rx={1} fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
                            <rect x={4} y={15} width={6} height={5} rx={1} fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
                            <rect x={14} y={4} width={6} height={5} rx={1} fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
                            <rect x={14} y={13} width={6} height={7} rx={1} fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
                        </svg>
                        <div className="relative">
                            <p className="absolute -top-5 -left-4 text-6xl text-textColor-100/80 font-bold -z-10 select-none whitespace-nowrap">{dropdownList[formType].type}</p>
                            <p className="font-bold text-textColor-500">Student</p>
                        </div>
                    </div>
                    <div class="sm:w-fit w-full flex justify-between gap-3 sm:pl-8 relative group/select">
                        <select
                            className="w-44 p-2 px-4 rounded-lg shadow-md text-textColor-700 outline-none"
                            onChange={(e) => {
                                setFormType(e.target.value);
                                let inputFields = document.querySelectorAll(".inputField");
                                for (let i = 0; i < inputFields.length; i++) {
                                    const element = inputFields[i];
                                    element.value = "";
                                }
                            }}
                        >
                            {dropdownList.map((item, index) => (
                                <option value={index}>{item.type}</option>
                            ))}
                        </select>
                        <p className="w-5 h-5 text-textColor-700 absolute top-2.5 right-2 group-focus/select:rotate-180">
                            <svg viewBox="0 0 24 24" fill="none">
                                <path d="M18 9L12 15L6 9" stroke="currentColor" strokeWidth={2} />
                            </svg>
                        </p>
                    </div>
                </div>
                {/* Form Div */}
                <div class="w-full lg:w-[95%] mx-auto h-fit bg-white rounded-2xl shadow-md mb-10 flex flex-col items-start justify-center">
                    <div className="w-full p-5 px-6 pb-7">
                        <h1 className="text-3xl font-bold text-textColor-800 mb-5">{dropdownList[formType].type} Form</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {dropdownList[formType].inputLists.map((item, index) => {
                                if (item.type === "input") {
                                    if (item.inputType === "radio")
                                        return (
                                            <div className="flex flex-col w-full md:col-span-1 col-span-2 sm:gap-0 gap-1.5">
                                                <label htmlFor={item.id} className="pl-3 text-lg text-textColor-700">
                                                    {item.label}
                                                </label>
                                                <div className="flex items-center justify-start gap-4 ml-4 h-full">
                                                    {item.options.map((option, i) => (
                                                        <div key={i} className="flex items-center justify-center gap-1">
                                                            <input type="radio" value={option.value} id={option.id} name={item.id} className="peer hidden" />
                                                            <div
                                                                onClick={() => {
                                                                    document.getElementById(option.id).checked = true;
                                                                }}
                                                                className="w-4 h-4 peer-focus:border-primary-500 peer-checked:border-primary-500 border border-textColor-700 rounded-full relative before:content-[''] before:scale-0 peer-checked:before:scale-100 peer-focus:before:scale-100 before:absolute before:top-[2.5px] before:left-[2.5px] before:rounded-full before:w-[9.5px] before:!h-[9.5px] sm:before:h-[10px] before:bg-primary-500 before:transition-all before:duration-300"
                                                            />
                                                            <label htmlFor={option.id} className="peer-focus:text-primary-500 peer-checked:text-primary-500 text-textColor-600">
                                                                {option.text}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    else if (item.inputType === "checkbox") {
                                        return <></>;
                                    } else {
                                        return (
                                            <div className="flex flex-col gap-1 w-full md:col-span-1 col-span-2">
                                                <label htmlFor={item.id} className="pl-3 text-lg text-textColor-700">
                                                    {item.label}
                                                </label>
                                                <input className="outline-none inputField border border-borderColor rounded-full px-3.5 py-2 focus:ring-1 focus:ring-offset-2 focus:ring-primary-500" id={item.id} name={item.name} type={item.inputType} key={index} placeholder={item.placeholder} />{" "}
                                            </div>
                                        );
                                    }
                                } else if (item.type === "select") {
                                    return (
                                        <div className="flex flex-col gap-1 w-full md:col-span-1 col-span-2">
                                            <label htmlFor={item.id} className="pl-3 text-lg text-textColor-700">
                                                {item.label}
                                            </label>
                                            <select id={item.id} name={item.name} key={index} className="outline-none inputField border border-borderColor rounded-full px-3.5 py-2 focus:ring-1 focus:ring-offset-2 focus:ring-primary-500">
                                                <option value="" disabled selected>
                                                    {item.placeholder}
                                                </option>
                                                {item.options.map((option, index2) => (
                                                    <option value={option.value} key={index2}>
                                                        {option.text}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    );
                                } else if (item.type === "textarea") {
                                    return (
                                        <div className="flex flex-col gap-1 col-span-2">
                                            <label htmlFor={item.id} className="pl-1 text-lg text-textColor-700">
                                                {item.label}
                                            </label>
                                            <textarea className="outline-none inputField border border-borderColor rounded-lg px-3 focus:ring-1 focus:ring-offset-2 focus:ring-primary-500 py-2" id={item.id} name={item.name} key={index} placeholder={item.placeholder} />
                                        </div>
                                    );
                                } else if (item.type === "button") {
                                    return (
                                        <div className={"w-full col-span-2 flex items-center justify-" + item.position}>
                                            <button id={item.id} className="bg-primary-500 text-white p-2.5 px-5 rounded-full shadow-lg">
                                                {item.value}
                                            </button>
                                        </div>
                                    );
                                } else {
                                    return <></>;
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentRequestForm;
