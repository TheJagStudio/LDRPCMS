import React from "react";

const Page500 = () => {
    return (
        <main className="grid w-screen h-screen grid-cols-1 place-items-center overflow-hidden hue-rotate-[10deg]">
            <div className="max-w-[26rem] text-center">
                <div className="w-full">
                    <img className="w-full hue-rotate-[10deg]" src="/static/svg/error-500.svg" alt="error-500" />
                </div>
                <div className="-hue-rotate-[10deg]">
                    <p className="pt-4 text-7xl font-bold text-primary-950">500</p>
                    <p className="pt-4 text-xl font-semibold text-primary-950">Internal Server Error</p>
                    <p className="pt-2 text-primary-600">The server has been deserted for a while. Please be patient or try again later</p>
                </div>
            </div>
        </main>
    );
};

export default Page500;
