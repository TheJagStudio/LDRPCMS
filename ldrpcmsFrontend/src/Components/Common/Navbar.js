import React from "react";

// Atoms
import { useAtom } from "jotai";
import { sideBarAtom } from "../../Variables";

const Navbar = () => {
    const [sideBar, setSideBar] = useAtom(sideBarAtom);
    return (
        <div className="h-24 z-40 w-full fixed top-0 left-0 flex items-center justify-center border-b border-borderColor bg-bgColor">
            <div className="w-full px-6 flex items-center justify-between">
                <div className="flex items-center gap-20">
                    <div className="flex items-center gap-8">
                        <div
                            onClick={() => {
                                setSideBar(!sideBar);
                            }}
                            className="bg-white p-3 rounded-full shadow cursor-pointer"
                        >
                            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-textColor-400">
                                <path d="M5 7h14M5 12h14M5 17h14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                            </svg>
                        </div>
                        <a href="/" className="font-bold text-textColor-600">
                            LDRP ITR
                        </a>
                    </div>
                    <div className="lg:flex hidden items-center gap-6">
                        <ul className="flex items-center gap-5 text-sm text-textColor-500">
                            <li>
                                <a href="/">Dashboard</a>
                            </li>
                            <li>
                                <a href="/">About Us</a>
                            </li>
                            <li>
                                <a href="/">News</a>
                            </li>
                            <li>
                                <a href="/">User Policy</a>
                            </li>
                            <li>
                                <a href="/">Contacts</a>
                            </li>
                        </ul>
                        <div>
                            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-textColor-500">
                                <circle cx={12} cy={12} r={1} stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                                <circle cx={6} cy={12} r={1} stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                                <circle cx={18} cy={12} r={1} stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-96 relative hidden lg:block">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-textColor-500 absolute top-1/2 -translate-y-1/2 left-3">
                        <circle cx={11} cy={11} r={6} stroke="currentColor" />
                        <path d="M11 8a3 3 0 0 0-3 3m12 9-3-3" stroke="currentColor" strokeLinecap="round" />
                    </svg>
                    <input type="text" placeholder="Search Products, Orders and Clients" className="w-full rounded-full p-3 pl-12 bg-white shadow text-sm outline-none" />
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-3">
                        <div className="lg:w-7 lg:h-7 w-10 h-10 bg-white flex items-center justify-center rounded-full overflow-hidden shadow-sm text-primary-600">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className="w-full h-full object-cover object-center" alt="" />
                        </div>
                        <p className="text-textColor-500 text-sm font-bold lg:block hidden">Clayton Santos</p>
                    </div>
                    <div className="bg-white p-3 rounded-full shadow">
                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-textColor-400">
                            <path d="M6.502 6.975a5.525 5.525 0 0 1 10.995 0l.287 2.866c.018.175.026.262.037.348a8 8 0 0 0 1.19 3.325l.192.291.861 1.292c.787 1.18 1.18 1.769 1.008 2.244-.033.09-.078.175-.135.252-.3.407-1.009.407-2.426.407H5.489c-1.417 0-2.126 0-2.426-.407a1 1 0 0 1-.134-.252c-.173-.475.22-1.065 1.006-2.244l.862-1.292.192-.291a8 8 0 0 0 1.19-3.325c.01-.086.02-.173.037-.348l.286-2.866Z" fill="currentColor" />
                            <path d="M10.068 20.63c.114.106.365.2.715.267.349.067.777.103 1.217.103.44 0 .868-.036 1.217-.103.35-.067.6-.161.715-.268" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
