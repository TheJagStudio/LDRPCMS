import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AdminEditUser = () => {
	const [userName, setUserName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [userGender, setUserGender] = useState("");
	const [userRole, setUserRole] = useState("");
	const [currentUser, setCurrentUser] = useState([]);

	const userId = useParams("id");

	useEffect(() => {
		fetch(process.env.REACT_APP_SERVER + "/api/main/getUserDetails")
			.then((res) => res.json())
			.then((data) => {
				let id = parseInt(userId.id);
				let temp = [];
				for (let i = 0; i < data.data.length; i++) {
					if (data.data[i].id === id) {
						temp.push(data.data[i]);
                        setCurrentUser(temp);
                        setUserName(data.data[i]?.name)
                        setUserEmail(data.data[i]?.email)
                        setUserGender(data.data[i]?.gender)
                        setUserRole(data.data[i]?.role)
                        // setFirstName(data.data[i]?.name.trim().split(' ').slice(0,-1)[1])
                        setFirstName(data.data[i]?.name)
                        // setLastName(data.data[i]?.name)
                        setLastName(data.data[i]?.name.trim().split(' ').pop())
						break;
					}
				}
			});
	}, []);

	return (
		<div className="flex flex-nowrap w-full h-full lg:px-0 md:px-10 px-6">
			<div className="w-full relative">
				<div className="w-full h-32 flex flex-wrap items-center justify-between sm:gap-0 gap-8 mt-12 mb-6 sm:mt-4 lg:mt-0 sm:mb-0 lg:p-9">
					<div className="flex gap-4 w-full sm:w-fit">
                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-textColor-500 cursor-pointer transition-all duration-200 hover:text-yellow-500">
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.204 10.796 19 9c.545-.545.818-.818.963-1.112a2 2 0 0 0 0-1.776C19.818 5.818 19.545 5.545 19 5c-.546-.545-.818-.818-1.112-.964a2 2 0 0 0-1.776 0c-.294.146-.567.419-1.112.964l-1.82 1.819a10.9 10.9 0 0 0 4.023 3.977Zm-5.477-2.523-6.87 6.87c-.426.426-.638.638-.778.9-.14.26-.199.555-.317 1.145l-.615 3.077c-.067.332-.1.498-.005.593.094.095.26.061.593-.005l3.077-.616c.59-.117.884-.176 1.145-.316.262-.14.474-.352.9-.777l6.889-6.89a12.901 12.901 0 0 1-4.02-3.98Z" fill="currentColor" />
                        </svg>
						<div className="relative">
							<p className="absolute -top-6 -left-4 text-6xl text-textColor-100/80 font-bold -z-10 select-none">
								{userRole}
							</p>
							<p className="font-bold text-textColor-500">
								Edit User
							</p>
						</div>
					</div>
				</div>
				{/* Form Div */}
				<div className="w-full lg:w-[95%] mx-auto h-fit bg-white rounded-2xl shadow-md mb-10 flex flex-col items-start justify-center">
					<div className="w-full border-b border-borderColor py-5 px-6 flex sm:flex-row flex-col gap-3 items-center justify-between">
						<h1 className="text-3xl font-bold text-textColor-600 sm:text-left text-center">
							Hello, {currentUser[0]?.name}
						</h1>
						<button
							className="bg-primary-500 text-white px-3 py-2 rounded-lg text-sm"
							onClick={() => {
								let changePassModal = document.getElementById(
									"changePasswordModal"
								);
								let changePassModalOverlay =
									document.getElementById(
										"changePasswordModalOverlay"
									);
								changePassModal.classList.remove("scale-0");
								changePassModalOverlay.classList.remove(
									"scale-0"
								);
							}}
						>
							Change Password
						</button>
					</div>
                    {/* flex md:flex-row flex-col items-start justify-center */}
					<div className="w-full h-fit grid md:grid-cols-3 grid-cols-1">
						<div className="flex flex-col w-full h-full p-5 sm:p-8">
							<h1 className="text-textColor-600 font-bold text-lg mb-3 sm:mb-5 ">
								Account Image
							</h1>
							<div className=" w-full h-auto aspect-square bg-textColor-100 rounded-lg flex flex-col items-center justify-center p-6 relative mb-3">
                                <img src={process.env.REACT_APP_SERVER + "/api/main/avatarCreator?gender=" + userGender + "&name=" + userName} alt="" className=" w-full h-full aspect-square object-cover object-center rounded" id="profileImg" />
							</div>
						</div>
						<form className="flex flex-col h-full w-full col-span-2 p-5 sm:p-8 pb-8 sm:pb-10 md:border-l md:border-borderColor">
							<div className="w-full flex gap-6 flex-col mb-8">
								<h1 className="text-textColor-600 font-bold text-lg sm:mb-2">
									Basic Information
								</h1>
								<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
									<div className="flex flex-col">
										<label
											htmlFor="username"
											className="ml-4 mb-2 font-medium text-textColor-600"
										>
											Username
										</label>
										<input
											id="username"
											onChange={(e) => {
												setUserName(e.target.value);
											}}
											value={userName}
											type="text"
											className="border rounded-full p-2.5 px-4 outline-none text-textColor-500 shadowCustom"
										/>
									</div>
									<div className="flex flex-col">
										<label
											htmlFor="email"
											className="ml-4 mb-2 font-medium text-textColor-600"
										>
											Email
										</label>
										<input
											id="email"
											onChange={(e) => {
												setUserEmail(e.target.value);
											}}
											value={userEmail}
											type="text"
											className="border rounded-full p-2.5 px-4 outline-none text-textColor-500 shadowCustom"
										/>
									</div>
								</div>
								<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
									<div className="flex flex-col">
										<label
											htmlFor="firstName"
											className="ml-4 mb-2 font-medium text-textColor-600"
										>
											First Name
										</label>
										<input
											id="firstName"
											onChange={(e) => {
												setFirstName(e.target.value);
											}}
											value={firstName}
											type="text"
											className="border rounded-full p-2.5 px-4 outline-none text-textColor-500 shadowCustom"
										/>
									</div>
									<div className="flex flex-col">
										<label
											htmlFor="lastName"
											className="ml-4 mb-2 font-medium text-textColor-600"
										>
											Last Name
										</label>
										<input
											id="lastName"
											onChange={(e) => {
												setLastName(e.target.value);
											}}
											value={lastName}
											type="text"
											className="border rounded-full p-2.5 px-4 outline-none text-textColor-500 shadowCustom"
										/>
									</div>
								</div>
								<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
									<div className="flex flex-col">
										<label
											htmlFor="username"
											className="ml-4 mb-2 font-medium text-textColor-600"
										>
											Role
										</label>
										<select
											onChange={(event) => {
												setUserRole(
													event.currentTarget.value
												);
											}}
											value={userRole}
											className="border rounded-full p-2.5 px-4 outline-none text-textColor-500 shadowCustom"
										>
											<option value="HOD">HOD</option>
											<option value="Faculty">
												Faculty
											</option>
											<option value="Lab Asst">
												Lab Asst
											</option>
											<option value="Student">
												Student
											</option>
										</select>
									</div>
									<div className="flex flex-col">
										<label
											htmlFor="gender"
											className="ml-4 mb-2 font-medium text-textColor-600"
										>
											Gender
										</label>
										<select
											id="gender"
											onChange={(event) => {
												setUserGender(
													event.currentTarget.value
												);
											}}
											value={userGender}
											className="border rounded-full p-2.5 px-4 outline-none text-textColor-500 shadowCustom"
										>
											<option value="male">Male</option>
											<option value="female">
												Female
											</option>
										</select>
									</div>
								</div>
							</div>
							<div className="flex items-center justify-end">
								<button className="transition-all duration-300 hover:-translate-y-1 purpleBtnShadow bg-primary-600 text-white rounded-full px-8 py-3 font-medium">
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>

				{/* Change Password Modal */}
				<div
					id="changePasswordModal"
					className="fixed z-50 scale-0 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90%] sm:w-full max-w-md h-fit bg-white px-5 sm:px-10 py-8 rounded-xl transition-all duration-300"
				>
					<form className="w-full relative">
						<button
							className="absolute sm:top-0 -top-4 -right-1 sm:-right-4"
							type="button"
							onClick={() => {
								let changePassModal = document.getElementById(
									"changePasswordModal"
								);
								let changePassModalOverlay =
									document.getElementById(
										"changePasswordModalOverlay"
									);
								changePassModal.classList.add("scale-0");
								changePassModalOverlay.classList.add("scale-0");
								let changePassInput =
									document.querySelectorAll(
										".changePassInput"
									);
								for (
									let i = 0;
									i < changePassInput.length;
									i++
								) {
									changePassInput[i].value = "";
								}
							}}
						>
							<svg
								fill="currentColor"
								className="w-4 h-4 text-textColor-400"
								viewBox="0 0 16 16"
							>
								<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
							</svg>
						</button>
						<h1 className="w-full text-center text-2xl font-medium text-textColor-800 mb-4">
							Reset Password
						</h1>
						<div className="w-full flex flex-col gap-5 sm:px-0 px-2">
							<div className="flex flex-col">
								<label
									htmlFor="oldPassword"
									className="sm:ml-4 ml-1 mb-2 font-medium text-textColor-600"
								>
									Old Password
								</label>
								<input
									id="oldPassword"
									type="password"
									placeholder="Enter Old Password..."
									className="border sm:rounded-full rounded-lg p-2.5 px-4 outline-none text-textColor-500 shadow-inner bg-textColor-50 changePassInput"
								/>
							</div>
							<div className="flex flex-col">
								<label
									htmlFor="newPassword"
									className="sm:ml-4 ml-1 mb-2 font-medium text-textColor-600"
								>
									New Password
								</label>
								<input
									id="newPassword"
									type="password"
									placeholder="Enter New Password..."
									className="border sm:rounded-full rounded-lg p-2.5 px-4 outline-none text-textColor-500 shadow-inner bg-textColor-50 changePassInput"
								/>
							</div>
							<div className="flex flex-col">
								<label
									htmlFor="rePassword"
									className="sm:ml-4 ml-1 mb-2 font-medium text-textColor-600"
								>
									Confirm Password
								</label>
								<input
									id="rePassword"
									type="password"
									placeholder="Re-Enter New Password..."
									className="border sm:rounded-full rounded-lg p-2.5 px-4 outline-none text-textColor-500 shadow-inner bg-textColor-50 changePassInput"
								/>
							</div>
							<div className="flex items-center justify-end">
								<button className="transition-all duration-300 hover:-translate-y-1 purpleBtnShadow bg-primary-600 text-white rounded-full px-8 py-3 font-medium">
									Submit
								</button>
							</div>
						</div>
					</form>
				</div>
				<div
					id="changePasswordModalOverlay"
					className="fixed top-0 left-0 w-screen h-screen z-40 bg-black/20 scale-0"
				/>
			</div>
		</div>
	);
};

export default AdminEditUser;
