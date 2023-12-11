import React, { useState } from "react";

const CreateUser = () => {
	let isProfileImgSet = false;
	const [userGender, setUserGender] = useState("male");
	const [username, setUsername] = useState("John Doe");
	const [firstname, setFirstname] = useState("John");
	const [lastname, setLastname] = useState("Doe");
	const [userRole, setUserRole] = useState("HOD");

	return (
		<div className="flex flex-col w-full h-full mt-8 px-5">
			<div className="w-full md:mb-0 mb-6">
				<div className="w-full h-full flex flex-wrap sm:gap-0 gap-5 items-center justify-between p-2 lg:p-9">
					<div className="flex gap-4">
						<svg
							viewBox="0 0 24 24"
							fill="none"
							className="w-6 h-6 text-textColor-500"
						>
							<circle cx={10} cy={8} r={5} fill="currentColor" />
							<path
								d="M19 10L19 16"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
							/>
							<path
								d="M22 13L16 13"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
							/>
							<path
								d="M17.1421 20.3825C17.6038 20.278 17.8806 19.7981 17.676 19.3713C17.1242 18.2203 16.2173 17.2088 15.0419 16.4465C13.5955 15.5085 11.8232 15 10 15C8.17681 15 6.40455 15.5085 4.95811 16.4465C3.78266 17.2088 2.87577 18.2202 2.32396 19.3713C2.11935 19.7981 2.39623 20.278 2.85786 20.3825C7.55976 21.4474 12.4402 21.4474 17.1421 20.3825Z"
								fill="currentColor"
							/>
						</svg>
						<div className="relative">
							<p className="absolute -top-5 -left-4 text-6xl text-textColor-100/80 font-bold -z-10 select-none w-max">
								{userRole}
							</p>
							<p className="font-bold text-textColor-500">
								Add User
							</p>
						</div>
					</div>
					<div className="relative">
						<label
							htmlFor="importCSV"
							className="flex items-center gap-2 bg-purple-600 rounded-lg py-2 px-3 text-white cursor-pointer"
						>
							<svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
								<path
									d="M3.5 13v-.804c0-2.967 0-4.45.469-5.636.754-1.905 2.348-3.407 4.37-4.118C9.595 2 11.168 2 14.318 2c1.798 0 2.698 0 3.416.253 1.155.406 2.066 1.264 2.497 2.353.268.677.268 1.525.268 3.22V13"
									stroke="currentColor"
									strokeWidth={1.5}
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M3.5 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057a1.667 1.667 0 0 0 1.179-1.18c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13.5 2"
									stroke="currentColor"
									strokeWidth={1.5}
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M7.5 17.22C7.445 16.03 6.622 16 5.505 16c-1.72 0-2.005.406-2.005 2v2c0 1.594.285 2 2.005 2 1.117 0 1.94-.03 1.995-1.22m13-4.78-1.777 4.695c-.33.87-.494 1.305-.755 1.305-.26 0-.426-.435-.755-1.305L15.436 16m-2.56 0h-1.18c-.473 0-.709 0-.895.076-.634.26-.625.869-.625 1.424 0 .555-.009 1.165.625 1.424.186.076.422.076.894.076.472 0 .708 0 .894.076.634.26.625.869.625 1.424 0 .555.009 1.165-.625 1.424-.186.076-.422.076-.894.076H10.41"
									stroke="currentColor"
									strokeWidth={1.5}
									strokeLinecap="round"
								/>
							</svg>
							<p>Import CSV</p>
						</label>
						<input
							id="importCSV"
							type="file"
							className="hidden cursor-pointer"
							accept=".csv,.xlxs"
                            multiple
						/>
					</div>
				</div>
			</div>
			<div className="w-full lg:w-[95%] mx-auto h-fit bg-white rounded-2xl shadow-md mb-10 flex md:flex-row flex-col items-start justify-center">
				<div className="flex flex-col w-full md:w-1/3 h-full p-8 md:border-r md:border-borderColor">
					<h1 className="text-textColor-600 font-bold text-lg mb-5">
						Account Image
					</h1>
					<div
						className={
							" w-full h-auto aspect-square bg-textColor-100 rounded-lg flex flex-col items-center justify-center p-6 relative mb-3"
						}
					>
						<img
							src={
								process.env.REACT_APP_SERVER +
								"/api/main/avatarCreator?gender=" +
								userGender +
								"&name=" +
								username
							}
							alt=""
							className=" w-full h-full aspect-square object-cover object-center rounded"
							id="profileImg"
						/>
					</div>
				</div>
				<div className="flex flex-col w-full md:w-2/3 p-8 pb-10">
					<div className="w-full flex gap-6 flex-col mb-8">
						<h1 className="text-textColor-600 font-bold text-lg mb-2">
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
									onKeyUp={(event) => {
										if (event.currentTarget.value === "") {
											setUsername("John Doe");
										} else {
											setUsername(
												event.currentTarget.value
											);
										}
									}}
									id="username"
									type="text"
									placeholder="Enter User Name..."
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
									type="text"
									placeholder="Enter Email..."
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
									onKeyUp={(event) => {
										if (event.currentTarget.value === "") {
											setFirstname("John Doe");
										} else {
											setFirstname(
												event.currentTarget.value
											);
										}
									}}
									id="firstName"
									type="text"
									placeholder="Enter First Name..."
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
									onKeyUp={(event) => {
										if (event.currentTarget.value === "") {
											setLastname("John Doe");
										} else {
											setLastname(
												event.currentTarget.value
											);
										}
									}}
									id="lastName"
									type="text"
									placeholder="Enter Last Name..."
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
										setUserRole(event.currentTarget.value);
									}}
									value={userRole}
									className="border rounded-full p-2.5 px-4 outline-none text-textColor-500 shadowCustom"
								>
									<option value="HOD">HOD</option>
									<option value="Faculty">Faculty</option>
									<option value="Lab Asst">Lab Asst</option>
									<option value="Student">Student</option>
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
									<option value="female">Female</option>
								</select>
							</div>
						</div>
						<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
							<div className="flex flex-col">
								<label
									htmlFor="passwordNew"
									className="ml-4 mb-2 font-medium text-textColor-600"
								>
									Password
								</label>
								<input
									id="passwordNew"
									placeholder="Enter Password..."
									type="password"
									className="border rounded-full p-2.5 px-4 outline-none text-textColor-500 shadowCustom"
								/>
							</div>
							<div className="flex flex-col">
								<label
									htmlFor="passwordConfirm"
									className="ml-4 mb-2 font-medium text-textColor-600"
								>
									Confirm Password
								</label>
								<input
									id="passwordConfirm"
									placeholder="Confirm Password..."
									type="password"
									className="border rounded-full p-2.5 px-4 outline-none text-textColor-500 shadowCustom"
								/>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-end">
						<button className="transition-all duration-300 hover:-translate-y-1 purpleBtnShadow bg-primary-600 text-white rounded-full px-8 py-3 font-medium">
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateUser;
