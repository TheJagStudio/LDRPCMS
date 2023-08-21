import React, { useState } from "react";
import { DraftailEditor, BLOCK_TYPE, INLINE_STYLE } from "draftail";

const PMS = () => {
    let studentList = [
        { name: "Jagrat Patel", gender: "male" },
        { name: "Jaivin Barot", gender: "male" },
        { name: "Shubham Bhogayata", gender: "male" },
        { name: "Parth Padhiar", gender: "male" },
        { name: "John Doe", gender: "male" },
        { name: "Raven Karl", gender: "male" },
        { name: "Lisa Camileon", gender: "female" },
        { name: "Zephry Jackson", gender: "male" },
    ];
    let mentorList = [
        { name: "Dr. Sandip Modha", gender: "male" },
        { name: "Prof. Vishal Barot", gender: "male" },
        { name: "Prof. Ashishkumar Patel", gender: "male" },
        { name: "Prof. Pratik Modi", gender: "male" },
        { name: "Prof. Palak Parmar", gender: "female" },
        { name: "Prof. Avani Patel", gender: "female" },
    ];
    const [members, setMembers] = useState([]);
    const [technology, setTechnology] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [currentMentor, setCurrentMentor] = useState(null);
    const [projectName, setProjectName] = useState("New Project");
    const [searchStudentName, setSearchStudentName] = useState("");
    const [searchMentorName, setSearchMentorName] = useState("");
    const [taskProgress, setTaskProgress] = useState({ mentor: "inProgress", team1: "inProgress", team2: "inProgress", team3: "inProgress", team4: "inProgress", name: "inProgress", description: "inProgress", stack: "inProgress", todo: "inProgress" });

    const changeTaskProgress = () => {
        if (document.querySelector('[data-text="true"]').innerText.length >= 10 && taskProgress["description"] === "inProgress") {
            let tempProgress = taskProgress;
            tempProgress["description"] = "completed";
            setTaskProgress(tempProgress);
            console.log(taskProgress);
        } else if (document.querySelector('[data-text="true"]').innerText.length < 10 && taskProgress["description"] === "completed") {
            let tempProgress = taskProgress;
            tempProgress["description"] = "inProgress";
            setTaskProgress(tempProgress);
            console.log(taskProgress);
        }
    };

    return (
        <div className="flex flex-col w-full h-full">
            <div className="w-full my-6">
                <div className="w-full h-full flex flex-wrap sm:gap-0 gap-5 items-center justify-between p-2 px-8 lg:p-9">
                    <div className="flex gap-4">
                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-textColor-500">
                            <path d="M3 7c0-1.886 0-2.828.586-3.414C4.172 3 5.114 3 7 3h10c1.886 0 2.828 0 3.414.586C21 4.172 21 5.114 21 7v10c0 1.886 0 2.828-.586 3.414C19.828 21 18.886 21 17 21H7c-1.886 0-2.828 0-3.414-.586C3 19.828 3 18.886 3 17V7Z" stroke="currentColor" strokeWidth={2} />
                            <path fillRule="evenodd" clipRule="evenodd" d="M18 10h-5.343c-.818 0-1.226 0-1.594-.152-.368-.152-.657-.442-1.235-1.02l-.656-.656c-.578-.578-.868-.868-1.235-1.02C7.569 7 7.16 7 6.343 7H3v10c0 1.886 0 2.828.586 3.414C4.172 21 5.114 21 7 21h10c1.886 0 2.828 0 3.414-.586C21 19.828 21 18.886 21 17V7c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C19.398 10 18.932 10 18 10ZM7 15a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H7Z" fill="currentColor" />
                        </svg>
                        <div className="relative">
                            <p className="absolute -top-5 -left-4 text-6xl text-textColor-100/80 font-bold -z-10 select-none w-max capitalize max-w-[600px] truncate">{projectName}</p>
                            <p className="font-bold text-textColor-500">Add Project</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-[95%] mx-auto h-fit bg-white rounded-2xl shadow-md mb-10 flex flex-col items-start justify-center p-8">
                {/* Members List */}
                <div className="w-full flex items-center justify-between">
                    <div className="flex flex-wrap itams-center justify-start gap-3 w-full">
                        <div className="min-w-40 w-max border borderColor rounded-full relative">
                            <div
                                className="w-full h-full rounded-full flex items-center justify-center px-3 py-2"
                                onClick={() => {
                                    let mentorDiv = document.getElementById("selectMentorDiv");
                                    mentorDiv.classList.toggle("scale-y-0");
                                    mentorDiv.classList.toggle("opacity-0");
                                }}
                            >
                                {currentMentor !== null ? (
                                    <div className="w-full h-full flex items-center justify-center gap-2 cursor-pointer">
                                        <img src={process.env.REACT_APP_SERVER + "/api/main/avatarCreator?gender=" + mentorList[currentMentor].gender + "&name=" + mentorList[currentMentor].name} alt="" className="rounded-full border bg-primary-100 border-primary-800 w-6 h-6" />
                                        <p className="text-textColor-500 font-medium text-sm">{mentorList[currentMentor].name}</p>
                                    </div>
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center gap-2 cursor-pointer">
                                        <img src={process.env.REACT_APP_SERVER + "/api/main/avatarCreator?gender=male&name=selectmentor"} alt="" className="rounded-full border bg-primary-100 border-primary-800 w-6 h-6" />
                                        <p className="text-textColor-500 font-medium text-sm">Select Mentor</p>
                                    </div>
                                )}
                            </div>
                            <div className="absolute overflow-x-hidden top-[130%] noScrollbar left-0 w-64  border h-fit shadowCustom transition-all duration-300 scale-y-0 bg-white z-40 rounded-lg opacity-0 origin-top-right" id="selectMentorDiv">
                                <input
                                    type="text"
                                    value={searchMentorName}
                                    onChange={(event) => {
                                        setSearchMentorName(event.currentTarget.value);
                                    }}
                                    placeholder="Enter name of mentor...."
                                    className="w-full outline-none p-2 px-3 h-11 border-b z-50"
                                />
                                <div className="noScrollbar overflow-y-scroll h-full relative max-h-64">
                                    {mentorList.map((item, index) => {
                                        if (item.name.toLowerCase().includes(searchMentorName.toLowerCase())) {
                                            return (
                                                <div
                                                    key={index}
                                                    className="flex gap-2 items-center justify-start p-2 py-3 border-b transition-all duration-200 hover:bg-textColor-100 cursor-pointer"
                                                    onClick={() => {
                                                        setCurrentMentor(index);
                                                        let tempProgress = taskProgress;
                                                        tempProgress["mentor"] = "completed";
                                                        setTaskProgress(tempProgress);
                                                        let mentorDiv = document.getElementById("selectMentorDiv");
                                                        mentorDiv.classList.toggle("scale-y-0");
                                                        mentorDiv.classList.toggle("opacity-0");
                                                        setSearchMentorName("");
                                                    }}
                                                >
                                                    <img src={process.env.REACT_APP_SERVER + "/api/main/avatarCreator?gender=" + item.gender + "&name=" + item.name} alt="" className="rounded-full border bg-primary-100 border-primary-800 w-6 h-6" />
                                                    <span className="text-textColor-400 font-medium">{item.name}</span>
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                        {members.map((item, index) => (
                            <div className="flex items-center justify-between gap-4 max-w-[300px] w-fit h-fit border border-borderColor rounded-full p-2 hover:bg-textColor-50 shadowCustom cursor-pointer" key={index}>
                                <div className="flex items-center gap-2 max-w-[85%]">
                                    <img src={process.env.REACT_APP_SERVER + "/api/main/avatarCreator?gender=" + item.gender + "&name=" + item.name} alt="" className="rounded-full border bg-primary-100 border-primary-800 w-6 h-6" />
                                    <p className="text-textColor-500 text-sm font-semibold truncate">{item}</p>
                                </div>
                                <div
                                    onClick={() => {
                                        let temp = [...members];
                                        temp.splice(index, 1);
                                        setMembers(temp);

                                        let tempProgress = taskProgress;
                                        tempProgress["team" + members.length] = "inProgress";
                                        setTaskProgress(tempProgress);
                                    }}
                                    className="cursor-pointer"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-textColor-500">
                                        <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                        {members.length === 0 && (
                            <div className="opacity-50 flex items-center justify-between gap-4 max-w-[300px] w-fit h-fit border border-borderColor rounded-full p-2 hover:bg-textColor-50 shadowCustom cursor-pointer">
                                <div className="flex items-center gap-2 w-full">
                                <img src={process.env.REACT_APP_SERVER + "/api/main/avatarCreator?gender=male&name=selectmentor"} alt="" className="rounded-full border bg-primary-100 border-primary-800 w-6 h-6" />
                                    <p className="text-textColor-500 text-sm font-semibold truncate">Add a member</p>
                                </div>
                            </div>
                        )}
                    </div>
                    {members.length < 4 && (
                        <div
                            onMouseLeave={() => {
                                window.addMemberTimeout = setTimeout(() => {
                                    document.getElementById("selectMemberDropdownContainer").classList.add("scale-y-0");
                                    document.getElementById("selectMemberDropdownContainer").classList.add("opacity-0");
                                }, 1500);
                            }}
                            onMouseEnter={() => {
                                clearTimeout(window.addMemberTimeout);
                            }}
                            className="bg-textColor-100 text-textColor-500 flex flex-nowrap items-center px-3 py-2 gap-1 rounded-full w-fit shadow-inner transition-all group cursor-pointer relative"
                        >
                            <div
                                className="flex flex-nowrap items-center gap-1"
                                onClick={() => {
                                    document.getElementById("selectMemberDropdownContainer").classList.toggle("scale-y-0");
                                    document.getElementById("selectMemberDropdownContainer").classList.toggle("opacity-0");
                                }}
                            >
                                <svg className="w-6 h-6 group-hover:rotate-180 transition-all" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 6a1 1 0 0 1-1-1v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 1 1 2 0v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 0 1-1 1Z" fill="currentColor" />
                                </svg>
                                <span className="hidden lg:flex whitespace-nowrap">Add Member</span>
                            </div>
                            {/* Dropdown to add new member should be active when click on add member btn */}
                            <div className="max-w-96 w-64 border borderColor rounded-lg overflow-hidden h-fit absolute top-[130%] right-0 bg-white shadow-lg transition-all duration-300 scale-y-0 opacity-0 origin-top-right z-40" id="selectMemberDropdownContainer">
                                <input
                                    onChange={(event) => {
                                        setSearchStudentName(event.target.value);
                                    }}
                                    value={searchStudentName}
                                    type="text"
                                    placeholder="Enter name of member..."
                                    className="bg-transparent w-full outline-none py-2 px-3 text-textColor-500 border-b borderColor"
                                />
                                <div className="w-full max-h-72 overflow-y-scroll noScrollbar">
                                    {studentList.map((item, index) => {
                                        if (item.name.toLowerCase().includes(searchStudentName.toLowerCase()) && !members.includes(item.name)) {
                                            return (
                                                <div
                                                    key={index}
                                                    onClick={() => {
                                                        if (members.length < 4) {
                                                            setMembers([...members, item.name]);

                                                            let tempProgress = taskProgress;
                                                            tempProgress["team" + (members.length + 1)] = "completed";
                                                            setTaskProgress(tempProgress);
                                                        }
                                                    }}
                                                    className="userListRow group/user w-full hover:bg-textColor-50 px-3 py-2 flex items-center justify-between"
                                                >
                                                    <div className="flex items-center gap-2 max-w-[85%]">
                                                        <img src={process.env.REACT_APP_SERVER + "/api/main/avatarCreator?gender=" + item.gender + "&name=" + item.name} alt="" className="rounded-full border bg-primary-100 border-primary-800 w-6 h-6" />
                                                        <p className="text-textColor-500 text-sm font-semibold truncate">{item.name}</p>
                                                    </div>
                                                    <div className="flex items-center gap-1 text-textColor-500 cursor-pointer">
                                                        <svg className="w-6 h-6 group-hover/user:rotate-180 transition-all" viewBox="0 0 24 24" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 6a1 1 0 0 1-1-1v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 1 1 2 0v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 0 1-1 1Z" fill="currentColor" />
                                                        </svg>
                                                        <span className="hidden lg:flex whitespace-nowrap">Add</span>
                                                    </div>
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* Project Name */}
                <div className="w-full my-5 border borderColor rounded-lg overflow-hidden">
                    <input
                        type="text"
                        placeholder="Enter name of project..."
                        className="bg-transparent w-full outline-none py-2 px-3 text-textColor-500 borderColor"
                        onChange={(event) => {
                            if (event.currentTarget.value != "") {
                                setProjectName(event.currentTarget.value);

                                let tempProgress = taskProgress;
                                tempProgress["name"] = "completed";
                                setTaskProgress(tempProgress);
                            } else {
                                setProjectName("New Project");
                                let tempProgress = taskProgress;
                                tempProgress["name"] = "inProgress";
                                setTaskProgress(tempProgress);
                            }
                        }}
                        required
                    />
                </div>
                <DraftailEditor
                    onFocus={() => {
                        // if (document.querySelector('[data-text="true"]')) {
                        document.querySelector('[data-text="true"]').setAttribute("onkeydown", changeTaskProgress());
                        // }
                    }}
                    className="w-full"
                    blockTypes={[{ type: BLOCK_TYPE.UNSTYLED }, { type: BLOCK_TYPE.HEADER_ONE }, { type: BLOCK_TYPE.HEADER_TWO }, { type: BLOCK_TYPE.HEADER_THREE }, { type: BLOCK_TYPE.HEADER_FOUR }, { type: BLOCK_TYPE.HEADER_FIVE }, { type: BLOCK_TYPE.HEADER_SIX }, { type: BLOCK_TYPE.UNORDERED_LIST_ITEM }, { type: BLOCK_TYPE.ORDERED_LIST_ITEM }, { type: BLOCK_TYPE.BLOCKQUOTE }, { type: BLOCK_TYPE.CODE }]}
                    inlineStyles={[{ type: INLINE_STYLE.BOLD }, { type: INLINE_STYLE.ITALIC }, { type: INLINE_STYLE.UNDERLINE }, { type: INLINE_STYLE.MARK }, { type: INLINE_STYLE.SMALL }, { type: INLINE_STYLE.INSERT }, { type: INLINE_STYLE.DELETE }, { type: INLINE_STYLE.SUPERSCRIPT }, { type: INLINE_STYLE.SUBSCRIPT }]}
                />
                <div className="w-full mt-5 grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-4">
                    {/* Technology Stack */}
                    <div className="w-full h-auto bg-textColor-50 rounded-lg shadow-inner p-5 px-8">
                        <div className="w-full">
                            <p className="text-textColor-500 font-bold text-lg">Technology Stack</p>
                        </div>
                        {technology.length > 0 && (
                            <div className="flex flex-wrap w-full items-center gap-x-3">
                                {technology.map((item, index) => (
                                    <div className="w-fit bg-white flex items-center gap-3 rounded-full py-3 px-5 mt-5 text-textColor-500 shadowCustom" key={index}>
                                        <p className="capitalize">{item}</p>
                                        <div
                                            className="cursor-pointer"
                                            onClick={() => {
                                                if (technology.length < 5) {
                                                    let tempProgress = taskProgress;
                                                    tempProgress["stack"] = "inProgress";
                                                    setTaskProgress(tempProgress);
                                                }
                                                let tempTechnology = [...technology];
                                                tempTechnology.splice(index, 1);
                                                setTechnology(tempTechnology);
                                            }}
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-textColor-500">
                                                <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className="w-full bg-white rounded-full mt-4">
                            <input
                                id="technologyInput"
                                type="text"
                                placeholder="Enter technology..."
                                className="w-full rounded-full border border-borderColor outline-none py-2 px-4"
                                onKeyUp={(event) => {
                                    if (event.code === "Enter" || event.code === "NumpadEnter") {
                                        if (!technology.includes(event.currentTarget.value.toLowerCase())) {
                                            if (event.currentTarget.value !== "") {
                                                setTechnology([...technology, event.currentTarget.value.toLowerCase()]);
                                                event.currentTarget.value = "";
                                                if (technology.length > 2) {
                                                    let tempProgress = taskProgress;
                                                    tempProgress["stack"] = "completed";
                                                    setTaskProgress(tempProgress);
                                                }
                                            }
                                        } else {
                                            alert("Technology already added!");
                                            event.currentTarget.value = "";
                                        }
                                    }
                                }}
                            />
                        </div>
                        <div
                            className="bg-textColor-100 text-textColor-500 flex flex-nowrap items-center px-3 py-2 gap-1 rounded-full w-fit shadow-inner hover:-translate-y-1 transition-all group cursor-pointer mt-3"
                            onClick={() => {
                                let technologyName = document.getElementById("technologyInput").value;
                                if (!technology.includes(technologyName.toLowerCase())) {
                                    if (technologyName !== "") {
                                        setTechnology([...technology, technologyName.toLowerCase()]);
                                        document.getElementById("technologyInput").value = "";
                                        if (technology.length > 2) {
                                            let tempProgress = taskProgress;
                                            tempProgress["stack"] = "completed";
                                            setTaskProgress(tempProgress);
                                        }
                                    }
                                } else {
                                    alert("Technology already added!");
                                    document.getElementById("technologyInput").value = "";
                                }
                            }}
                        >
                            <svg className="w-6 h-6 group-hover:rotate-180 transition-all" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 6a1 1 0 0 1-1-1v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 1 1 2 0v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 0 1-1 1Z" fill="currentColor" />
                            </svg>
                            <span className="hidden lg:flex whitespace-nowrap">Add Technology</span>
                        </div>
                    </div>
                    {/* Tasks to do */}
                    <div className="w-full h-auto bg-textColor-50 rounded-lg shadow-inner p-5 px-8">
                        <div className="w-full">
                            <p className="text-textColor-500 font-bold text-lg">Tasks to do</p>
                        </div>
                        {/* Custom Checkbox god level */}
                        {/* <div className="relative w-6 h-6  text-white  overflow-hidden cursor-pointer">
                            <input type="checkbox" className="appearance-none w-full h-full shrink-0 border-4 border-primary-600 rounded-full  checked:bg-primary-600  peer transition-all" />
                            <svg className="absolute top-0 w-full h-full p-1 scale-0 peer-checked:scale-100 pointer-events-none transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div> */}
                        {tasks.length > 0 && (
                            <div className="flex flex-col items-center">
                                {tasks.map((item, index) => (
                                    <div className="w-full bg-white flex items-center justify-between rounded-xl py-3 px-5 mt-3 text-textColor-500 shadowCustom" key={index}>
                                        <p className="capitalize">{item}</p>
                                        <div
                                            className="cursor-pointer"
                                            onClick={() => {
                                                let tempTask = [...tasks];
                                                tempTask.splice(index, 1);
                                                setTasks(tempTask);
                                                if (tasks.length < 4) {
                                                    let tempProgress = taskProgress;
                                                    tempProgress["todo"] = "inProgress";
                                                    setTaskProgress(tempProgress);
                                                }
                                            }}
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-textColor-500">
                                                <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className="w-full bg-white rounded-full mt-4">
                            <input
                                id="taskInput"
                                type="text"
                                placeholder="Enter task..."
                                className="w-full rounded-full border border-borderColor outline-none py-2 px-4"
                                onKeyUp={(event) => {
                                    if (event.code === "Enter" || event.code === "NumpadEnter") {
                                        if (!tasks.includes(event.currentTarget.value.toLowerCase())) {
                                            if (event.currentTarget.value !== "") {
                                                if (tasks.length > 1) {
                                                    let tempProgress = taskProgress;
                                                    tempProgress["todo"] = "completed";
                                                    setTaskProgress(tempProgress);
                                                }
                                                setTasks([...tasks, event.currentTarget.value.toLowerCase()]);
                                                event.currentTarget.value = "";
                                            }
                                        } else {
                                            alert("Task already added!");
                                            event.currentTarget.value = "";
                                        }
                                    }
                                }}
                            />
                        </div>
                        <div
                            className="bg-textColor-100 text-textColor-500 flex flex-nowrap items-center px-3 py-2 gap-1 rounded-full w-fit shadow-inner hover:-translate-y-1 transition-all group cursor-pointer mt-3"
                            onClick={() => {
                                let taskName = document.getElementById("taskInput").value;
                                if (!tasks.includes(taskName.toLowerCase())) {
                                    if (taskName !== "") {
                                        if (tasks.length > 1) {
                                            let tempProgress = taskProgress;
                                            tempProgress["todo"] = "completed";
                                            setTaskProgress(tempProgress);
                                        }
                                        setTasks([...tasks, taskName.toLowerCase()]);
                                        document.getElementById("taskInput").value = "";
                                    }
                                } else {
                                    alert("Task already added!");
                                    document.getElementById("taskInput").value = "";
                                }
                            }}
                        >
                            <svg className="w-6 h-6 group-hover:rotate-180 transition-all" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 6a1 1 0 0 1-1-1v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 1 1 2 0v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 0 1-1 1Z" fill="currentColor" />
                            </svg>
                            <span className="hidden lg:flex whitespace-nowrap">Add Task</span>
                        </div>
                    </div>
                </div>
                {/* Task Progress */}
                <div className="w-full h-fit mt-5">
                    <div className="flex flex-nowrap items-center justify-between w-full">
                        <p className="text-textColor-500 font-bold text-lg">Task Progress</p>
                        <p className="text-textColor-500 font-bold text">100%</p>
                    </div>
                    <div className="flex flex-nowrap gap-2 items-center justify-center w-full mt-3">
                        {Object.keys(taskProgress).map((task, index) => {
                            return (
                                <div key={index} className="w-full h-3 rounded-full bg-textColor-100 relative overflow-hidden">
                                    <div className={"absolute top-0 left-0 w-full h-full bg-green-500 transition-all duration-700 " + (taskProgress[task] === "completed" ? "" : "-translate-x-full")}></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="w-full mt-5 flex items-center justify-between">
                    <div className="bg-red-500 px-4 py-2 rounded-full text-white">Cancel</div>
                    <div className="bg-green-500 px-6 py-2 rounded-full text-white">Save</div>
                </div>
            </div>
        </div>
    );
};

export default PMS;
