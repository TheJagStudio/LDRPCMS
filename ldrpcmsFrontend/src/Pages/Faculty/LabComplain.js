import React from "react";

const LabComplain = () => {
    return (
        <div>
            <form action="lab_records_entry.php" method="POST" name="form1">
                <div className="flex">
                    <div className="m-3 w-1/4">
                        <label style={{ transform: "translateY(-3px)" }} className="block text-md ml-4 mb-3 px-2 font-bold text-gray-700">
                            Select the Lab
                        </label>
                        <select id="lab" name="lab" required="" className="w-full mt-3 px-4 py-1 h-10 text-md text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none">
                            <option value="#" />
                            <option value="A1">Lab A1</option>
                            <option value="A2">Lab A2</option>
                            <option value="B1">Lab B1</option>
                            <option value="B2">Lab B2</option>
                            <option value="C">Lab C</option>
                            <option value="D">Lab D</option>
                            <option value="E">Lab E</option>
                            <option value="F">Lab F</option>
                            <option value="F7">Lab F7</option>
                            <option value="K">Lab K</option>
                            <option value="G">Lab G</option>
                            <option value="H">Lab H</option>
                            <option value="I">Lab I</option>
                            <option value="J">Lab J</option>
                            <option value="L">Lab L</option>
                            <option value="M">Lab M</option>
                            <option value="N">Lab N</option>
                            <option value="O">Lab O</option>
                            <option value="S6">Lab S6</option>
                            <option value="P">Lab P</option>
                            <option value="Q">Lab Q</option>
                            <option value=" Phy Second Floor">Lab Phy Second Floor</option>
                        </select>
                    </div>
                </div>
                <div className="flex ">
                    <div className="m-3 mt-0 w-full">
                        <label style={{ transform: "translateY(-3px) translateX(-20px)" }} className="absolute block text-md ml-4 bg-white px-2 font-bold text-gray-700">
                            Select Your Issuses
                        </label>
                    </div>
                </div>
                <input type="text" hidden="" id="remarkSub" name="remarkSub" />
                <div style={{ transform: "translateY(-10px) translateX(10px)" }}>
                    <div className="flex ">
                        <div className="m-3 mt-0 w-full">
                            <input type="checkbox" style={{ transform: "translateY(25px)" }} defaultValue="Keyboard not working" id={1} name={1} />
                            <label className="absolute block text-md ml-4 bg-white px-2 font-bold text-gray-700">Keyboard not working</label>
                        </div>
                        <div className="m-3 mt-0 w-full">
                            <input type="checkbox" style={{ transform: "translateY(25px)" }} defaultValue="Mouse not working" id={2} name={2} />
                            <label className="absolute block text-md ml-4 bg-white px-2 font-bold text-gray-700">Mouse not working</label>
                        </div>
                    </div>
                    <div className="flex ">
                        <div className="m-3 mt-0 w-full">
                            <input type="checkbox" style={{ transform: "translateY(25px)" }} defaultValue="Monitor not working" id={3} name={3} />
                            <label className="absolute block text-md ml-4 bg-white px-2 font-bold text-gray-700">Monitor not working</label>
                        </div>
                        <div className="m-3 mt-0 w-full">
                            <input type="checkbox" style={{ transform: "translateY(25px)" }} defaultValue="PC not working" id={4} name={4} />
                            <label className="absolute block text-md ml-4 bg-white px-2 font-bold text-gray-700">PC not working</label>
                        </div>
                    </div>
                    <div className="flex ">
                        <div className="m-3 mt-0 w-full">
                            <input type="checkbox" style={{ transform: "translateY(25px)" }} defaultValue="Internet Issue" id={5} name={5} />
                            <label className="absolute block text-md ml-4 bg-white px-2 font-bold text-gray-700">Internet Issue</label>
                        </div>
                        <div className="m-3 mt-0 w-full">
                            <input type="checkbox" style={{ transform: "translateY(25px)" }} defaultValue="Server/Network Problem" id={6} name={6} />
                            <label className="absolute block text-md ml-4 bg-white px-2 font-bold text-gray-700">Server/Network Problem</label>
                        </div>
                    </div>
                    <div className="flex ">
                        <div className="m-3 mt-0 w-full">
                            <input type="checkbox" style={{ transform: "translateY(25px)" }} defaultValue="Others" id="Others" name="Others" />
                            <label className="absolute block text-md ml-4 bg-white px-2 font-bold text-gray-700">Others</label>
                        </div>
                    </div>
                    <div>
                        <div style={{ transform: "translateY(20px)" }}>
                            <div className="flex ">
                                <div id="topicDiv" name="topicDiv" style={{ display: "none" }} className="m-3 mt-0 w-[95%]">
                                    <label style={{ transform: "translateY(-3px)" }} className="absolute block text-md ml-4 bg-white px-2 font-bold text-gray-700">
                                        Enter your Issue
                                    </label>
                                    <input type="text" id="remarkCus" name="remarkCus" required="" maxLength={500} className="w-full h-8 mt-3 px-4 py-1 text-md text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none" />
                                </div>
                            </div>
                            <div className="w-[95%] -translate-y-3" style={{ display: "none" }} id="counterDiv">
                                <h1 className="font-bold text-gray-600 float-right mr-3 ">
                                    <span id="counter">0</span>/500
                                </h1>
                            </div>
                        </div>
                        <div style={{ transform: "translateY(0px)" }}>
                            <div className="flex mt-6">
                                <div className="m-3 mt-0 w-[95%]">
                                    <label style={{ transform: "translateY(-3px)" }} className="absolute block text-md ml-4 bg-white px-2 font-bold text-gray-700">
                                        Explain Your Complains
                                    </label>
                                    <textarea id="remark" name="remark" required="" maxLength={1000} placeholder="Please Enter PC Number" className="w-full h-20 mt-3 px-4 py-1 text-md text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none" defaultValue={""} />
                                </div>
                            </div>
                            <div className="w-[95%] -translate-y-4">
                                <h1 className="font-bold text-gray-600 float-right mr-3 ">
                                    <span id="fcounter">0</span>/1000
                                </h1>
                            </div>
                        </div>
                        <div className="flex w-full">
                            <div className="m-3 mt-0  w-1/2 mx-[25%]">
                                <button onclick="submitter()" className="block mx-auto w-full px-4 py-1 text-md text-gray-700 bg-primary-600 text-white font-bold rounded-lg hover:bg-blue-600">
                                    Submit
                                </button>
                            </div>
                        </div>
                        <div className="m-3 " />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LabComplain;
