import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import TabContent from "../Components/Common/TabContent";

const ForgotPassword = () => {
    const [activeTab, setActiveTab] = useState("Verification");
    const [otp, setOtp] = useState("");
    function otpBoxKeyDownEvent(event) {
        event.target.value = parseInt(event.target.value) % 10;
        if (event.key === "Backspace") {
            try {
                event.target.previousSibling.focus();
            } catch {}
        } else if (/^\d$/.test(event.key)) {
            try {
                event.target.nextSibling.focus();
            } catch {}
        }
        setOtp(document.getElementById("otp1").value + document.getElementById("otp2").value + document.getElementById("otp3").value + document.getElementById("otp4").value + document.getElementById("otp5").value + document.getElementById("otp6").value);

        if (document.getElementById("otp1").value === "" && document.getElementById("otp2").value === "" && document.getElementById("otp3").value === "" && document.getElementById("otp4").value === "" && document.getElementById("otp5").value === "" && document.getElementById("otp6").value === "") {
            document.getElementById("submitOtpBtn").disabled = true;
        } else {
            document.getElementById("submitOtpBtn").disabled = false;
        }
    }
    return (
        <section className="flex items-center justify-center w-screen min-h-screen h-full relative">
            {/* Left Side Image */}
            <div className="hidden lg:flex items-center justify-center h-full min-h-screen xl:w-2/3 w-[60%]  bg-primary-50/50 relative">
                <div className="absolute top-0 left-0 w-full flex items-center justify-between p-4 px-6">
                    <a href="/" className=" flex items-center justify-center gap-3 translate-x-[-50%] lg:translate-x-0 lg:left-8">
                        <img src="/static/images/LDRP.png" alt="Logo" className="w-16 h-16" />
                        <p className="text-3xl font-bold text-textColor-600">LDRP ITR</p>
                    </a>
                    <a href="/" className="flex items-center justify-center gap-3 translate-x-[-50%] lg:translate-x-0 lg:left-8">
                        <p className="text-3xl font-bold text-textColor-600">KSV</p>
                        <img src="/static/images/ksv.png" alt="Logo" className="w-16 h-16" />
                    </a>
                </div>
                <img src="/static/svg/login.svg" className="w-[60%] -scale-x-100" alt="login" />
            </div>
            <div className="flex flex-col gap-6 items-center justify-center w-full lg:w-[40%] xl:max-w-full xl:w-1/3 h-full min-h-screen bg-white">
                <NavLink to="/" className="absolute top-5 left-5 flex lg:hidden items-center justify-center gap-3 lg:translate-x-0 lg:left-8">
                    <img src="/static/images/LDRP.png" alt="Logo" className="w-16 h-16" />
                    <p className="text-3xl font-bold text-textColor-600">LDRP ITR</p>
                </NavLink>
                <div className="flex flex-col items-center justify-center max-w-[600px] w-full">
                    <h1 className="text-3xl font-bold text-textColor-600">Forgot Password ?</h1>
                    {/* <p className="text-md text-textColor-500">Please Enter Email To Verify.</p> */}
                </div>
                <TabContent id="Verification" activeTab={activeTab}>
                    {/* Form */}
                    <form className="flex flex-col items-center justify-center max-w-[600px] w-full h-full xl:px-16 lg:px-10 px-8">
                        <div className="w-full">
                            <label className="relative flex w-full">
                                <input
                                    onKeyUp={() => {
                                        if (document.getElementById("emailOtp").value === "") {
                                            document.getElementById("sendOTPBtn").disabled = true;
                                        } else {
                                            document.getElementById("sendOTPBtn").disabled = false;
                                        }
                                    }}
                                    className="form-input peer rounded-lg text-textColor-500 bg-slate-150 px-3 py-3 pl-11 border-2 border-primary-500 placeholder-shown:border-textColor-200 bg-transparent ring-primary-400/30 transition-all placeholder:text-slate-400 focus:border-primary-400 focus:ring outline-none w-full"
                                    placeholder="Email"
                                    id="emailOtp"
                                    name="emailOtp"
                                    type="text"
                                />
                                <span className="pointer-events-none absolute flex h-full w-12 items-center justify-center text-primary-600 peer-placeholder-shown:text-textColor-400 peer-placeholder:text-primary-600 peer-focus:text-primary-600">
                                    <svg className="h-6 w-6 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                            </label>
                            <button
                                id="sendOTPBtn"
                                disabled
                                className="disabled:opacity-50 disabled:cursor-not-allowed mt-8 h-10 w-full bg-primary-600 rounded-lg font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90"
                                onClick={() => {
                                    setActiveTab("OTP");
                                }}
                            >
                                Send OTP
                            </button>
                        </div>
                    </form>
                </TabContent>
                <TabContent id="OTP" activeTab={activeTab}>
                    {/* Form */}
                    <form className="flex flex-col items-center justify-center max-w-[600px] w-full h-full xl:px-16 lg:px-10 px-8">
                        <div className="w-full">
                            <label className="relative flex flex-col w-full gap-3">
                                <span className="text-lg font-medium text-primary-600">Enter OTP</span>
                                <div className="flex w-full gap-3">
                                    <input onKeyUp={(event) => otpBoxKeyDownEvent(event)} id="otp1" name="otp1" className="otpInput rounded-lg text-textColor-500 bg-slate-150 px-2 py-2.5 border-2 border-primary-500 placeholder-shown:border-textColor-200 bg-transparent ring-primary-400/30 transition-all focus:border-primary-400 focus:ring outline-none w-full text-center text-lg" type="number" placeholder=" " min={0} max={9} step={1} />
                                    <input onKeyUp={(event) => otpBoxKeyDownEvent(event)} id="otp2" name="otp2" className="otpInput rounded-lg text-textColor-500 bg-slate-150 px-2 py-2.5 border-2 border-primary-500 placeholder-shown:border-textColor-200 bg-transparent ring-primary-400/30 transition-all focus:border-primary-400 focus:ring outline-none w-full text-center text-lg" type="number" placeholder=" " min={0} max={9} step={1} />
                                    <input onKeyUp={(event) => otpBoxKeyDownEvent(event)} id="otp3" name="otp3" className="otpInput rounded-lg text-textColor-500 bg-slate-150 px-2 py-2.5 border-2 border-primary-500 placeholder-shown:border-textColor-200 bg-transparent ring-primary-400/30 transition-all focus:border-primary-400 focus:ring outline-none w-full text-center text-lg" type="number" placeholder=" " min={0} max={9} step={1} />
                                    <input onKeyUp={(event) => otpBoxKeyDownEvent(event)} id="otp4" name="otp4" className="otpInput rounded-lg text-textColor-500 bg-slate-150 px-2 py-2.5 border-2 border-primary-500 placeholder-shown:border-textColor-200 bg-transparent ring-primary-400/30 transition-all focus:border-primary-400 focus:ring outline-none w-full text-center text-lg" type="number" placeholder=" " min={0} max={9} step={1} />
                                    <input onKeyUp={(event) => otpBoxKeyDownEvent(event)} id="otp5" name="otp5" className="otpInput rounded-lg text-textColor-500 bg-slate-150 px-2 py-2.5 border-2 border-primary-500 placeholder-shown:border-textColor-200 bg-transparent ring-primary-400/30 transition-all focus:border-primary-400 focus:ring outline-none w-full text-center text-lg" type="number" placeholder=" " min={0} max={9} step={1} />
                                    <input onKeyUp={(event) => otpBoxKeyDownEvent(event)} id="otp6" name="otp6" className="otpInput rounded-lg text-textColor-500 bg-slate-150 px-2 py-2.5 border-2 border-primary-500 placeholder-shown:border-textColor-200 bg-transparent ring-primary-400/30 transition-all focus:border-primary-400 focus:ring outline-none w-full text-center text-lg" type="number" placeholder=" " min={0} max={9} step={1} />
                                </div>
                                {/* <span className="pointer-events-none absolute flex h-full w-12 items-center justify-center text-primary-600 peer-placeholder-shown:text-textColor-400 peer-placeholder:text-primary-600 peer-focus:text-primary-600">
                                    <svg className="h-6 w-6 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span> */}
                            </label>
                            <button
                                disabled
                                id="submitOtpBtn"
                                className="disabled:opacity-50 disabled:cursor-not-allowed mt-8 h-10 w-full bg-primary-600 rounded-lg font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90"
                                onClick={() => {
                                    setActiveTab("NewPassword");
                                }}
                            >
                                Verify
                            </button>
                        </div>
                    </form>
                </TabContent>
                <TabContent id="NewPassword" activeTab={activeTab}>
                    {/* Form */}
                    <form className="flex flex-col items-center justify-center max-w-[600px] w-full h-full xl:px-16 lg:px-10 px-8">
                        <div className="w-full">
                            <label className="relative mt-4 flex w-full">
                                <input
                                    onKeyUp={() => {
                                        if (document.getElementById("newPassword").value === "" || document.getElementById("confirmPassword").value === "") {
                                            document.getElementById("changePassBtn").disabled = true;
                                        } else {
                                            document.getElementById("changePassBtn").disabled = false;
                                        }
                                    }}
                                    id="newPassword"
                                    className="form-input peer rounded-lg text-textColor-500 bg-slate-150 px-3 py-3 pl-11 border-2 border-primary-500 placeholder-shown:border-textColor-200 bg-transparent ring-primary-400/30 transition-all placeholder:text-slate-400  focus:border-primary-400 focus:ring outline-none w-full"
                                    placeholder="New Password"
                                    type="password"
                                />
                                <span className="pointer-events-none absolute flex h-full w-12 items-center justify-center text-primary-600 peer-placeholder-shown:text-textColor-400 peer-placeholder:text-primary-600 peer-focus:text-primary-600">
                                    <svg className="h-6 w-6 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </span>
                            </label>
                            <label className="relative mt-4 flex w-full">
                                <input
                                    onKeyUp={() => {
                                        if (document.getElementById("newPassword").value === "" || document.getElementById("confirmPassword").value === "") {
                                            document.getElementById("changePassBtn").disabled = true;
                                        } else {
                                            document.getElementById("changePassBtn").disabled = false;
                                        }
                                    }}
                                    id="confirmPassword"
                                    className="form-input peer rounded-lg text-textColor-500 bg-slate-150 px-3 py-3 pl-11 border-2 border-primary-500 placeholder-shown:border-textColor-200 bg-transparent ring-primary-400/30 transition-all placeholder:text-slate-400  focus:border-primary-400 focus:ring outline-none w-full"
                                    placeholder="Confirm Password"
                                    type="password"
                                />
                                <span className="pointer-events-none absolute flex h-full w-12 items-center justify-center text-primary-600 peer-placeholder-shown:text-textColor-400 peer-placeholder:text-primary-600 peer-focus:text-primary-600">
                                    <svg className="h-6 w-6 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </span>
                            </label>
                            <button
                                disabled
                                id="changePassBtn"
                                className="disabled:opacity-50 disabled:cursor-not-allowed mt-8 h-10 w-full bg-primary-600 rounded-lg font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90"
                                onClick={() => {
                                    window.location.href = "/login";
                                }}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </TabContent>
            </div>
        </section>
    );
};

export default ForgotPassword;
