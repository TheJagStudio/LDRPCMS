import React from "react";

const CalendarMonth = ({ name, start, days, monthIndex, previousEnd, data }) => {
    let Today = new Date();
    let CurrentMonth = Today.getMonth() + 1;
    let CurrentYear = Today.getFullYear();
    let CurrentDay = Today.getDate();
    let backNumber = 14;
    return (
        <div>
            <p className="text-textColor-500 text-lg font-semibold ml-2">{name}</p>
            <div className="grid grid-cols-7 max-h-[21rem] mt-1 items-center justify-center text-center">
                <div className="text-textColor-400 font-medium h-12 w-12 border border-transparent py-3 rounded-full">SU</div>
                <div className="text-textColor-400 font-medium h-12 w-12 border border-transparent py-3 rounded-full">MO</div>
                <div className="text-textColor-400 font-medium h-12 w-12 border border-transparent py-3 rounded-full">TU</div>
                <div className="text-textColor-400 font-medium h-12 w-12 border border-transparent py-3 rounded-full">WE</div>
                <div className="text-textColor-400 font-medium h-12 w-12 border border-transparent py-3 rounded-full">TH</div>
                <div className="text-textColor-400 font-medium h-12 w-12 border border-transparent py-3 rounded-full">FR</div>
                <div className="text-textColor-400 font-medium h-12 w-12 border border-transparent py-3 rounded-full">SA</div>
                {Array.from({ length: start }).map((_, index) => (
                    <div key={index} className="font-semibold h-12 w-12 border border-transparent text-textColor-200 py-3 rounded-full cursor-default">
                        {previousEnd - start + 1 + index}
                    </div>
                ))}
                {Array.from({ length: days }).map((_, index) => {
                    let color = [];
                    let title = [];
                    let description = [];
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].day == index + 1) {
                            color.push(data[i].color);
                            title.push(data[i].title);
                            description.push(data[i].description);
                        }
                    }
                    return (
                        <div key={index} className={" font-semibold group h-12 w-12 border border-transparent hover:scale-105 transition-all py-3 rounded-full focus:bg-textColor-500 focus:text-white cursor-pointer relative " + (monthIndex == CurrentMonth && index + 1 == CurrentDay ? " text-white bg-primary-600 purpleBtnShadow " : "") + (color.length != 0 ? "bg-" + color[0] + "-500 text-white" : "text-textColor-500 hover:border-gray-500 ")}>
                            <p className="">{index + 1}</p>
                            <div className={"absolute bottom-[110%] z-20 w-48 scale-0 group-hover:scale-100 transition-all duration-300 " + ((index + start) % 7 == 6 ? "-translate-x-36 origin-bottom-right" : (index + start) % 7 == 5 ? "-translate-x-32 origin-bottom-right" : (index + start) % 7 < 4 && (index + start) % 7 >= 2 ? "-translate-x-16 origin-bottom" : "origin-bottom-left")}>
                                {color.length != 0
                                    ? (() => {
                                          return (
                                              <div className={"w-full h-full rounded-lg flex flex-col items-start p-2 pb-1 pt-0 justify-center shadow-lg shadow-" + color[0] + "-500/10 bg-" + color[0] + "-50 border-2 border-" + color[0] + "-500 "}>
                                                  {color.map((_, index) => {
                                                      return (
                                                          <>
                                                              <p className={"font-semibold text-white rounded px-9 w-full mt-2 bg-" + color[index] + "-500"}>{title[index]}</p>
                                                              <p className={"font-normal text-start text-textColor-600 w-full z-50"}>{description[index]}</p>
                                                          </>
                                                      );
                                                  })}
                                              </div>
                                          );
                                      })()
                                    : ""}
                            </div>
                        </div>
                    );
                })}
                {Array.from({ length: backNumber }).map((_, index) => {
                    return (
                        <div key={index} className="font-semibold h-12 w-12 border border-transparent text-textColor-200 py-3 rounded-full cursor-default">
                            {index + 1}
                        </div>
                    );
                })}
            </div>
            <div className="h-0 w-0 overflow-hidden">
                <div className="hover:bg-red-500 bg-red-500 border-red-500 shadow shadow-red-500/10"></div>
                <div className="hover:bg-red-50 bg-red-50"></div>
                <div className="hover:bg-yellow-500 bg-yellow-500 border-yellow-500 shadow shadow-yellow-500/10"></div>
                <div className="hover:bg-yellow-50 bg-yellow-50"></div>
                <div className="hover:bg-green-500 bg-green-500 border-green-500 shadow shadow-green-500/10"></div>
                <div className="hover:bg-green-50 bg-green-50"></div>
                <div className="hover:bg-blue-500 bg-blue-500 border-blue-500 shadow shadow-blue-500/10"></div>
                <div className="hover:bg-blue-50 bg-blue-50"></div>
            </div>
        </div>
    );
};

export default CalendarMonth;
