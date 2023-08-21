import React from "react";
import Message from "../../Components/SuperAdmin/Space/Message";

const SpacePage = () => {
    return (
        <div className="flex flex-col w-full h-full">
            <div className="w-full ">
                <div className="w-full h-32 flex flex-wrap items-center justify-between p-2 px-8 lg:p-9">
                    <div className="flex gap-4">
                        <svg className="w-6 h-6 text-textColor-500" viewBox="0 0 24 24" fill="none">
                            <path d="M4.32698 6.63803L5.21799 7.09202L4.32698 6.63803ZM4.7682 20.2318L4.06109 19.5247H4.06109L4.7682 20.2318ZM18.362 16.673L18.816 17.564L18.816 17.564L18.362 16.673ZM19.673 15.362L20.564 15.816L20.564 15.816L19.673 15.362ZM19.673 6.63803L20.564 6.18404L20.564 6.18404L19.673 6.63803ZM18.362 5.32698L18.816 4.43597L18.816 4.43597L18.362 5.32698ZM5.63803 5.32698L6.09202 6.21799L5.63803 5.32698ZM7.70711 17.2929L7 16.5858L7.70711 17.2929ZM5 9.8C5 8.94342 5.00078 8.36113 5.03755 7.91104C5.07337 7.47262 5.1383 7.24842 5.21799 7.09202L3.43597 6.18404C3.18868 6.66937 3.09012 7.18608 3.04419 7.74817C2.99922 8.2986 3 8.97642 3 9.8H5ZM5 12V9.8H3V12H5ZM3 12V17H5V12H3ZM3 17V19.9136H5V17H3ZM3 19.9136C3 21.2054 4.56185 21.8524 5.4753 20.9389L4.06109 19.5247C4.40757 19.1782 5 19.4236 5 19.9136H3ZM5.4753 20.9389L8.41421 18L7 16.5858L4.06109 19.5247L5.4753 20.9389ZM15.2 16H8.41421V18H15.2V16ZM17.908 15.782C17.7516 15.8617 17.5274 15.9266 17.089 15.9624C16.6389 15.9992 16.0566 16 15.2 16V18C16.0236 18 16.7014 18.0008 17.2518 17.9558C17.8139 17.9099 18.3306 17.8113 18.816 17.564L17.908 15.782ZM18.782 14.908C18.5903 15.2843 18.2843 15.5903 17.908 15.782L18.816 17.564C19.5686 17.1805 20.1805 16.5686 20.564 15.816L18.782 14.908ZM19 12.2C19 13.0566 18.9992 13.6389 18.9624 14.089C18.9266 14.5274 18.8617 14.7516 18.782 14.908L20.564 15.816C20.8113 15.3306 20.9099 14.8139 20.9558 14.2518C21.0008 13.7014 21 13.0236 21 12.2H19ZM19 9.8V12.2H21V9.8H19ZM18.782 7.09202C18.8617 7.24842 18.9266 7.47262 18.9624 7.91104C18.9992 8.36113 19 8.94342 19 9.8H21C21 8.97642 21.0008 8.2986 20.9558 7.74817C20.9099 7.18608 20.8113 6.66937 20.564 6.18404L18.782 7.09202ZM17.908 6.21799C18.2843 6.40973 18.5903 6.71569 18.782 7.09202L20.564 6.18404C20.1805 5.43139 19.5686 4.81947 18.816 4.43597L17.908 6.21799ZM15.2 6C16.0566 6 16.6389 6.00078 17.089 6.03755C17.5274 6.07337 17.7516 6.1383 17.908 6.21799L18.816 4.43597C18.3306 4.18868 17.8139 4.09012 17.2518 4.04419C16.7014 3.99922 16.0236 4 15.2 4V6ZM8.8 6H15.2V4H8.8V6ZM6.09202 6.21799C6.24842 6.1383 6.47262 6.07337 6.91104 6.03755C7.36113 6.00078 7.94342 6 8.8 6V4C7.97642 4 7.2986 3.99922 6.74817 4.04419C6.18608 4.09012 5.66937 4.18868 5.18404 4.43597L6.09202 6.21799ZM5.21799 7.09202C5.40973 6.71569 5.71569 6.40973 6.09202 6.21799L5.18404 4.43597C4.43139 4.81947 3.81947 5.43139 3.43597 6.18404L5.21799 7.09202ZM8.41421 18V16C7.88378 16 7.37507 16.2107 7 16.5858L8.41421 18Z" fill="currentColor" />
                            <path d="M8 9L16 9" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 13L13 13" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
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
                        <div className="h-[calc(80vh-8.5rem)] overflow-y-scroll flex flex-col noScrollbar">
                            <Message name="John Doe" gender="male" role="Faculty" time="12:45 PM" message="when you starting a company you are thinking on how to out expenses. One of such options to out the startup costs is a company logo design. But is it good idea to order a cheap logo or work without company logo at all?" />
                            <Message name="Jagrat Patel" gender="male" role="Student" time="12:46 PM" message="Hi" />
                            <Message name="Shubham Bhogayata" gender="male" role="Student" time="12:47 PM" message="Hello moto" />
                            <Message name="John Doe" gender="male" role="Faculty" time="12:45 PM" message="when you starting a company you are thinking on how to out expenses. One of such options to out the startup costs is a company logo design. But is it good idea to order a cheap logo or work without company logo at all?" />
                            <Message name="Jagrat Patel" gender="male" role="Student" time="12:46 PM" message="Hi" />
                            <Message name="Shubham Bhogayata" gender="male" role="Student" time="12:47 PM" message="Hello moto" />
                            <Message name="John Doe" gender="male" role="Faculty" time="12:45 PM" message="when you starting a company you are thinking on how to out expenses. One of such options to out the startup costs is a company logo design. But is it good idea to order a cheap logo or work without company logo at all?" />
                            <Message name="Jagrat Patel" gender="male" role="Student" time="12:46 PM" message="Hi" />
                            <Message name="Shubham Bhogayata" gender="male" role="Student" time="12:47 PM" message="Hello moto" />
                            <Message name="John Doe" gender="male" role="Faculty" time="12:45 PM" message="when you starting a company you are thinking on how to out expenses. One of such options to out the startup costs is a company logo design. But is it good idea to order a cheap logo or work without company logo at all?" />
                            <Message name="Jagrat Patel" gender="male" role="Student" time="12:46 PM" message="Hi" />
                            <Message name="Shubham Bhogayata" gender="male" role="Student" time="12:47 PM" message="Hello moto" />
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
