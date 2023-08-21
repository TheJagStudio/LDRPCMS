import React from "react";

const UserdeleteModal = ({ data, users, setUsers, activeUser, setActiveUser, activeUserType }) => {
    return (
        <div className="fixed w-full h-full top-0 left-0 bg-black/20 flex items-center justify-center z-[999] scale-0 opacity-0 transition-all duration-300" id="userDeleteModal">
            <div className="bg-white w-1/2 max-w-[500px] rounded-lg p-5">
                <p className="text-xl text-textColor-500 font-semibold">
                    Are you sure you want to delete <span className="whitespace-nowrap">{data?.name}</span> ?
                </p>
                <div className="w-full flex items-center justify-end gap-4 mt-5">
                    <div
                        className="border border-primary-600 text-primary-600 py-1 px-4 rounded-lg cursor-pointer"
                        onClick={() => {
                            document.getElementById("userDeleteModal").classList.toggle("scale-0");
                            document.getElementById("userDeleteModal").classList.toggle("opacity-0");
                            document.getElementsByTagName("BODY")[0].style.overflow = "visible";
                        }}
                    >
                        Cancel
                    </div>
                    <div
                        className="bg-primary-600 text-white py-1 px-4 rounded-lg cursor-pointer"
                        onClick={() => {
                            document.getElementById("userDeleteModal").classList.toggle("scale-0");
                            document.getElementById("userDeleteModal").classList.toggle("opacity-0");
                            document.getElementsByTagName("BODY")[0].style.overflow = "visible";
                            for (let i = 0; i < users.length; i++) {
                                const user = users[i];
                                if (user === data) {
                                    users.splice(i, 1);
                                    break;
                                }
                            }
                            let temp = [];
                            for (let i = 0; i < users.length; i++) {
                                if (users[i].role === activeUserType || activeUserType === "All Users") {
                                    temp.push(users[i]);
                                }
                            }
                            setActiveUser(temp);
                        }}
                    >
                        Delete
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserdeleteModal;
