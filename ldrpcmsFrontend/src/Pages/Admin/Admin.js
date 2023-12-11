import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import useWebSocket, { ReadyState } from "react-use-websocket";

// Atoms
import { useAtom } from "jotai";
import { sideBarAtom, lastMessageAtom } from "../../Variables";

// Components
import Navbar from "../../Components/Common/Navbar";
import AdminSidebar from "../../Components/Admin/AdminSidebar";

const Admin = () => {
    const [sideBar, setSideBar] = useAtom(sideBarAtom);
    const [lastMessageMain, setLastMessageMain] = useAtom(lastMessageAtom);
    const [socketUrl, setSocketUrl] = useState("wss://thejagstudio-ntfy.hf.space/AllLdrp/ws");
    const [tempMsg, setTempMsg] = useState("");
    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
    useEffect(() => {
        if (lastMessage !== null) {
            setLastMessageMain(lastMessage);
            try {
                let tempmsg = JSON.parse(lastMessage?.data);
                if (tempmsg.event === "message") {
                    tempmsg = JSON.parse(tempmsg?.message).message;
                    setTempMsg(tempmsg);
                    let notificationDiv = document.getElementById("notificationDiv");
                    notificationDiv.classList.remove("scale-0");
                    setTimeout(() => {
                        notificationDiv.classList.add("scale-0");
                    }, 3000);
                }
            } catch (err) {
                console.log(err);
            }
        }
    }, [lastMessage]);
    const connectionStatus = {
        [ReadyState.CONNECTING]: "Connecting",
        [ReadyState.OPEN]: "Open",
        [ReadyState.CLOSING]: "Closing",
        [ReadyState.CLOSED]: "Closed",
        [ReadyState.UNINSTANTIATED]: "Uninstantiated",
    }[readyState];
    return (
        <div>
            {/* <img src="/images/homePage.png" alt="Placeholder" className="-z-50 opacity-75 absolute top-0 left-0" /> */}
            <Navbar />
            <audio id="dingAudio" src="/static/audio/ding.mp3" className="opacity-0 h-0 w-0" />
            <div id="notificationDiv" className="fixed bottom-5 right-5 p-3 bg-green-200 border-2 border-green-700 rounded-lg h-fit w-fit max-w-[24rem] z-50 shadow-xl transition-all duration-300 scale-0">
                <button className="absolute -right-3 -top-3 bg-green-200 border-2 border-green-700 rounded-full p-2" onClick={() => {}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-3 h-3" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                </button>
                {tempMsg}
            </div>
            <div className="w-full h-full min-h-[calc(100vh-6rem)] flex flex-nowrap mt-24">
                <AdminSidebar />
                <div className={"transition-all duration-500 " + (sideBar ? "lg:w-[calc(100%-12rem)] lg:ml-48" : "w-full lg:w-[calc(100%-6rem)] lg:ml-24")}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Admin;
