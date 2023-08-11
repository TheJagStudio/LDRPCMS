import React from "react";
import Message from "../Components/Space/Message";

const SpacePage = () => {
    return (
        <div className="flex flex-col w-full h-full">
            <div className="w-full ">
                <div className="w-full h-32 flex flex-wrap items-center justify-between p-2 px-8 lg:p-9">
                    <div className="flex gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-textColor-500" viewBox="0 0 32 32">
                            <path d="M31 4h-3V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h3v5a1 1 0 0 0 1 1h9l3.293 3.293a.997.997 0 0 0 1.414 0L22 28h9a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 2v20h-8.828L18 29.172 14.828 26H6V6h24zM2 20V2h24v3H6a1 1 0 0 0-1 1v14H2zm8-8h16v1H10v-1zm0 3h16v1H10v-1zm0 3h16v1H10v-1z" fill="currentColor" />
                        </svg>
                        <div className="relative">
                            <p className="absolute -top-6 -left-4 text-6xl text-textColor-100/80 font-bold -z-10 select-none">Chat</p>
                            <p className="font-bold text-textColor-500">Space</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[90%] lg:w-[95%] flex flex-nowrap mx-auto h-fit bg-white rounded-2xl shadowCustom mb-10 overflow-hidden">
                <div className="w-1/5 flex flex-col h-[80vh] border-r border-borderColor">
                    <div className="h-20 flex items-center group justify-center w-full border-b border-borderColor relative">
                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-textColor-400 group-hover:text-textColor-600 absolute top-1/2 -translate-y-1/2 left-3">
                            <circle cx={11} cy={11} r={6} stroke="currentColor" />
                            <path d="M11 8a3 3 0 0 0-3 3m12 9-3-3" stroke="currentColor" strokeLinecap="round" />
                        </svg>
                        <input type="text" placeholder="Search Messages" className="w-full p-2 pl-10 bg-white text-textColor-600 text-sm outline-none" />
                    </div>
                    <div className="h-full w-full flex flex-col">
                        <div className="sticky top-0 h-12 w-full px-3 border-b border-borderColor group flex flex-nowrap justify-between items-center ">
                            <p className="text-textColor-600 font-bold text-xl"># Channels</p>
                            <svg className="w-6 h-6 group-hover:rotate-180 transition-all text-textColor-300 group-hover:text-textColor-600" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 6a1 1 0 0 1-1-1v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 1 1 2 0v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 0 1-1 1Z" fill="currentColor" />
                            </svg>
                        </div>
                        <div className="h-12 w-full px-3 pl-10 group flex flex-nowrap justify-between items-center cursor-pointer hover:bg-slate-100">
                            <p className="text-textColor-600 font-bold">All Members</p>
                            <div className="flex flex-nowrap gap-2 items-center justify-end">
                                <p className="text-green-400 font-bold">+2</p>
                                <p className="text-textColor-400 font-bold w-10 text-end">553</p>
                            </div>
                        </div>
                        <div className="h-12 w-full px-3 pl-10 group flex flex-nowrap justify-between items-center cursor-pointer hover:bg-slate-100">
                            <p className="text-textColor-600 font-bold">All Admins</p>
                            <div className="flex flex-nowrap gap-2 items-center justify-end">
                                <p className="text-green-400 font-bold">+5</p>
                                <p className="text-textColor-400 font-bold w-10 text-end">4</p>
                            </div>
                        </div>
                        <div className="h-12 w-full px-3 pl-10 group flex flex-nowrap justify-between items-center cursor-pointer hover:bg-slate-100">
                            <p className="text-textColor-600 font-bold">All Faculty</p>
                            <div className="flex flex-nowrap gap-2 items-center justify-end">
                                <p className="text-green-400 font-bold">+2</p>
                                <p className="text-textColor-400 font-bold w-10 text-end">56</p>
                            </div>
                        </div>
                        <div className="h-12 w-full px-3 pl-10 group flex flex-nowrap justify-between items-center cursor-pointer hover:bg-slate-100">
                            <p className="text-textColor-600 font-bold">All Assistant</p>
                            <div className="flex flex-nowrap gap-2 items-center justify-end">
                                <p className="text-green-400 font-bold">+3</p>
                                <p className="text-textColor-400 font-bold w-10 text-end">8</p>
                            </div>
                        </div>
                        <div className="h-12 w-full px-3 pl-10 group flex flex-nowrap justify-between items-center cursor-pointer hover:bg-slate-100 ">
                            <p className="text-textColor-600 font-bold">All Students</p>
                            <div className="flex flex-nowrap gap-2 items-center justify-end">
                                <p className="text-green-400 font-bold">+10</p>
                                <p className="text-textColor-400 font-bold w-10 text-end">485</p>
                            </div>
                        </div>
                        <div className="h-12 w-full px-3 pl-10 group flex flex-nowrap justify-between items-center cursor-pointer hover:bg-slate-100 ">
                            <p className="text-textColor-600 font-bold">CE Students</p>
                            <div className="flex flex-nowrap gap-2 items-center justify-end">
                                <p className="text-green-400 font-bold">+11</p>
                                <p className="text-textColor-400 font-bold w-10 text-end">400</p>
                            </div>
                        </div>
                        <div className="h-12 w-full px-3 pl-10 group flex flex-nowrap justify-between items-center cursor-pointer hover:bg-slate-100 ">
                            <p className="text-textColor-600 font-bold">IT Students</p>
                            <div className="flex flex-nowrap gap-2 items-center justify-end">
                                <p className="text-green-400 font-bold">+5</p>
                                <p className="text-textColor-400 font-bold w-10 text-end">80</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-4/5 flex flex-col h-[80vh]">
                    <div className="h-20 w-full flex flex-nowrap items-center justify-center px-10 border-b border-borderColor">
                        <p className="text-xl font-bold text-textColor-700">All Faculty</p>
                    </div>
                    <div className="h-full w-full relative flex flex-col">
                        <div className="h-[calc(80vh-8.5rem)] overflow-y-scroll flex flex-col justify-end">
                            <Message name="John Doe" gender="male" role="Faculty" time="12:45 PM" message="when you starting a company you are thinking on how to out expenses. One of such options to out the startup costs is a company logo design. But is it good idea to order a cheap logo or work without company logo at all?" />
                            <Message name="Jagrat Patel" gender="male" role="Student" time="12:46 PM" message="Hi" />
                        </div>
                        <div className="h-14 w-full border-t border-borderColor relative">
                            <svg className="absolute top-4 right-5 text-blue-800" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.048 3.053C18.87.707 2.486 6.453 2.5 8.55c.015 2.379 6.398 3.11 8.167 3.607 1.064.299 1.349.604 1.594 1.72 1.111 5.052 1.67 7.566 2.94 7.622 2.027.09 7.972-16.158 5.847-18.447Z" fill="currentColor" stroke="currentColor" strokeWidth={1.5} />
                                <path d="M11.5 12.5 15 9" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <input type="text" placeholder="Type a message" className="w-full h-full p-2 pl-5 pr-14 bg-white text-textColor-600 text-sm outline-none" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpacePage;
