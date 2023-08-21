import React from "react";
import Barcode from "react-barcode";
import "./3dCard.css";

const UserviewModal = ({ data }) => {
    return (
        <div className="fixed w-full h-full top-0 left-0 bg-black/20 flex items-center justify-center z-[999] scale-0 opacity-0 transition-all duration-300" id="userViewModal">
            <div
                className="absolute top-6 right-6 bg-primary-100 rounded-full flex items-center justify-center p-1 cursor-pointer"
                onClick={() => {
                    document.getElementById("userViewModal").classList.toggle("scale-0");
                    document.getElementById("userViewModal").classList.toggle("opacity-0");
                    document.getElementsByTagName("BODY")[0].style.overflow = "visible";
                }}
            >
                <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-primary-600">
                    <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className=" relative w-full h-auto sm:h-[80%] sm:w-auto aspect-[2/3]">
                <div className="w-full h-full flip-box">
                    <div className="bg-white h-full w-full overflow-hidden flip-box-front sm:!rounded-2xl border-8 border-white">
                        <div className="z-20 relative flex flex-col items-center justify-center h-full">
                            <img className=" w-[30%] mx-auto h-auto rounded-full border-4 border-primary-600 shadow-lg" src={process.env.REACT_APP_SERVER + "/api/main/avatarCreator?gender=" + data.gender + "&name=" + data.name} alt="" />
                            <div className="flex flex-col mt-5 items-center">
                                <p className="text-xl font-semibold text-primary-800">{data.name}</p>
                                <p className="text-md font-normal text-primary-800">{data.role}</p>
                            </div>
                            {data.data?.length > 0 && (
                                <>
                                    <hr className="border-primary-300 border-b border-dashed w-[80%] my-5 mt-2"></hr>
                                    <div className="flex flex-col gap-1.5 items-center justify-between">
                                        {data.data.map((item, index) => (
                                            <div className="flex flex-row gap-2" key={index}>
                                                <p className="text-textColor-500 capitalize">{item.label} : </p>
                                                <p className="text-textColor-700 font-medium">{item.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between items-center z-10">
                            <div className="absolute top-0 left-0 w-full flex flex-nowrap items-center justify-between p-3">
                                <div className="flex items-center gap-3">
                                    <img src="/static/images/LDRP.png" alt="" className="w-14 h-auto " />
                                    <p className="text-xl text-white">LDRP ITR</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <p className="text-xl text-white">KSV</p>
                                    <img src="/static/images/KSV.png" alt="" className="w-12 h-auto cursor-pointer" />
                                </div>
                            </div>
                            <svg className="w-full h-auto" viewBox="0 0 261 166" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M261 66.3756V0H0V166C9.00615 159.869 30.3207 146.963 43.5297 144.388C46.3475 143.838 48.8866 143.307 51.2695 142.809C62.85 140.388 70.7419 138.737 89 139.5C98.9855 139.917 109.381 142.433 118.061 144.534C124.691 146.138 130.319 147.5 134 147.5C146 147.5 165.038 140.5 174.5 130C177.325 126.865 180.234 123.466 183.266 119.924C201.699 98.3866 224.676 71.5413 261 66.3756Z" fill="#E0CAFF" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M261 46.3549V0H0V103.001C3 103.501 10.7 104.501 17.5 104.501C17.701 104.501 17.9113 104.501 18.1308 104.501C27.1943 104.513 51.8639 104.543 77.5 87.0007C87 80.5 104 69.1061 112.5 65.5C127.173 59.275 149.887 63.8586 165.168 66.9425C167.071 67.3264 168.858 67.687 170.5 68.0007C197.34 70.4851 233.072 66.0532 261 46.3549Z" fill="url(#paint0_linear_2031_2)" />
                                <defs>
                                    <linearGradient id="paint0_linear_2031_2" x1={261} y1={23} x2={-0.00000598505} y2={52} gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#6525BF" />
                                        <stop offset={1} stopColor="#8833FF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <svg className="w-full h-auto" viewBox="0 0 261 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 30V78H261V28.5889C242.13 30.2014 217.73 29.4215 202.5 25C200.564 24.438 197.023 22.7408 192.3 20.4774C177.074 13.1806 149.569 -0.000582701 124 0C102.83 0.000482477 80.6616 9.90835 62.5421 18.0066C51.9889 22.7232 42.8091 26.826 36 28C24.5107 29.9809 13.8585 29.9737 5.78463 29.9682C3.66893 29.9667 1.73028 29.9654 0 30Z" fill="#E0CAFF" />
                                <rect y={52} width={261} height={26} fill="url(#paint0_linear_2031_2)" />
                                <defs>
                                    <linearGradient id="paint0_linear_2031_2" x1={7.29225e-7} y1={65} x2={261} y2={65} gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#6626C0" />
                                        <stop offset={1} stopColor="#8833FE" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className="absolute bottom-3 left-1/2 w-fit -translate-x-1/2 bg-white/60 backdrop-blur-xl rounded-xl shadow-lg">
                                <Barcode value={data.barCode} height={50} width={1.7} background={"#00000000"} displayValue={false} />
                            </div>
                        </div>
                    </div>
                    <div className="h-full w-full flip-box-back bg-gradient-to-l from-[#8833FF] to-[#6525BF] sm:!rounded-2xl border-8 border-white">
                        <div className="inner h-full md:rounded-lg overflow-hidden flex items-center justify-center ">
                            <img src="/static/images/LDRP.png" alt="" className="w-[70%] h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserviewModal;
