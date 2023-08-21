import React from "react";

const Message = ({ name, gender, role, time, message }) => {
    return (
        <div className="w-full h-fit p-4 px-10">
            <div className="flex flex-nowrap items-center justify-between gap-3 mb-4">
                <div className="flex flex-nowrap gap-3 items-center justify-between">
                    {/* <img src={"https://api.dicebear.com/6.x/micah/svg?seed=" + name + "&baseColor=f9c9b6&eyes=eyes,eyesShadow,round&facialHairColor=000000,transparent&facialHairProbability=20&hair=" + (gender === "female" ? "dannyPhantom,full,pixie" : "fonze,mrT,mrClean,turban") + "&mouth=laughing,smile,smirk"} alt="" className=" w-10 h-10 bg-textColor-200 aspect-square object-cover object-center rounded" /> */}
                    <img src={process.env.REACT_APP_SERVER + "/api/main/avatarCreator?gender=" + gender + "&name=" + name} alt="" className="w-10 h-10 bg-textColor-200 aspect-square object-cover object-center rounded" />
                    <p className="text-xl text-textColor-700 font-semibold">{name}</p>
                    <p className="text-textColor-500">( {role} )</p>
                </div>
                <p className="text-textColor-500">{time}</p>
            </div>
            <p className="text-textColor-600 p-2 px-3 w-fit max-w-full border border-borderColor rounded-lg shadow-inner">{message}</p>
        </div>
    );
};

export default Message;
