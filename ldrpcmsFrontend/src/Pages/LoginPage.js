import React from "react";

const LoginPage = () => {
    return (
        <section className="flex items-center justify-center w-screen min-h-screen h-full relative">
            <a href="/" className="absolute top-7 left-[50%] flex items-center justify-center gap-3 translate-x-[-50%] lg:translate-x-0 lg:left-8">
                <img src="/images/LDRP.png" alt="Logo" className="w-16 h-16" />
                <p className="text-3xl font-bold text-textColor-600">LDRP ITR</p>
            </a>

            {/* Left Side Image */}
            <div className="hidden lg:flex items-center justify-center h-full min-h-screen xl:w-2/3 w-[60%]  bg-primary-50/50">
                <img src="/images/login.svg" class="w-[60%] -scale-x-100" alt="login" />
            </div>
            {/* Form Div */}
            <div className="flex flex-col gap-10 items-center justify-center w-full lg:w-[40%] xl:max-w-full xl:w-1/3 h-full min-h-screen bg-white">
                <div className="flex flex-col items-center justify-center max-w-[600px] w-full">
                    <h1 className="text-3xl font-bold text-textColor-600">Welcome Back!</h1>
                    <p className="text-md text-textColor-500">Please Sign in to Continue</p>
                </div>

                {/* Form */}
                <form className="flex flex-col items-center justify-center max-w-[600px] w-full h-full xl:px-16 lg:px-10 px-8">
                    <div className="w-full">
                        <label className="relative flex w-full">
                            <input className="form-input peer rounded-lg text-textColor-500 bg-slate-150 px-3 py-3 pl-11 border-2 border-primary-500 placeholder-shown:border-textColor-200 bg-transparent ring-primary-400/30 transition-all placeholder:text-slate-400 focus:border-primary-400 focus:ring outline-none w-full" placeholder="Username " type="text" />
                            <span className="pointer-events-none absolute flex h-full w-12 items-center justify-center text-primary-600 peer-placeholder-shown:text-textColor-400 peer-placeholder:text-primary-600 peer-focus:text-primary-600">
                                <svg className="h-6 w-6 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>
                        </label>
                        <label className="relative mt-4 flex w-full">
                            <input className="form-input peer rounded-lg text-textColor-500 bg-slate-150 px-3 py-3 pl-11 border-2 border-primary-500 placeholder-shown:border-textColor-200 bg-transparent ring-primary-400/30 transition-all placeholder:text-slate-400  focus:border-primary-400 focus:ring outline-none w-full" placeholder="Password " type="password" />
                            <span className="pointer-events-none absolute flex h-full w-12 items-center justify-center text-primary-600 peer-placeholder-shown:text-textColor-400 peer-placeholder:text-primary-600 peer-focus:text-primary-600">
                                <svg className="h-6 w-6 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>
                        </label>
                        <div className="mt-4 ml-1 flex items-center justify-between space-x-2">
                            <label className="inline-flex items-center space-x-2">
                                <input className="form-checkbox is-outline w-4 h-4 accent-primary-600 bg-gray-100 border-gray-300 rounded-lg" type="checkbox" />
                                <span className="line-clamp-1 text-textColor-400 text-sm">Remember me</span>
                            </label>
                            <a href="" className="text-xs text-slate-400 transition-colors line-clamp-1 hover:text-primary-400 focus:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100 dark:focus:text-navy-100">
                                Forgot Password?
                            </a>
                        </div>
                        <button className="btn mt-8 h-10 w-full bg-primary-600 rounded-lg font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90">Login</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default LoginPage;
