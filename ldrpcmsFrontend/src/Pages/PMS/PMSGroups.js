import React, { useEffect, useRef, useState } from "react";
import { Grid, _ } from "gridjs-react";
import { NavLink } from "react-router-dom";

// Components
// import UserviewModal from "../../Components/Common/UserviewModal";
import UserdeleteModal from "../../Components/Common/UserdeleteModal";

import { tempGrpDetails } from "../../Variables";

const Actions = ({ userData, setUserToDelete }) => {
	return (
		<div className="flex items-center gap-3 w-fit mx-auto">
			<a href={"/superadmin/users/edituser/" + userData.id}>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					className="w-6 h-6 text-primary-500 cursor-pointer transition-all duration-200 hover:text-yellow-500"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M17.204 10.796 19 9c.545-.545.818-.818.963-1.112a2 2 0 0 0 0-1.776C19.818 5.818 19.545 5.545 19 5c-.546-.545-.818-.818-1.112-.964a2 2 0 0 0-1.776 0c-.294.146-.567.419-1.112.964l-1.82 1.819a10.9 10.9 0 0 0 4.023 3.977Zm-5.477-2.523-6.87 6.87c-.426.426-.638.638-.778.9-.14.26-.199.555-.317 1.145l-.615 3.077c-.067.332-.1.498-.005.593.094.095.26.061.593-.005l3.077-.616c.59-.117.884-.176 1.145-.316.262-.14.474-.352.9-.777l6.889-6.89a12.901 12.901 0 0 1-4.02-3.98Z"
						fill="currentColor"
					/>
				</svg>
			</a>
			<a href={"/pms/group-details/" + userData.id}>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					className="w-7 h-7 text-primary-500 cursor-pointer transition-all duration-200 hover:text-blue-500"
				>
					<circle
						cx={12}
						cy={12}
						r={3}
						stroke="currentColor"
						strokeWidth={2}
					/>
					<path
						d="M20.188 10.934c.388.472.582.707.582 1.066 0 .359-.194.594-.582 1.066C18.768 14.79 15.636 18 12 18c-3.636 0-6.768-3.21-8.188-4.934-.388-.472-.582-.707-.582-1.066 0-.359.194-.594.582-1.066C5.232 9.21 8.364 6 12 6c3.636 0 6.768 3.21 8.188 4.934Z"
						stroke="currentColor"
						strokeWidth={2}
					/>
				</svg>
			</a>
			<svg
				viewBox="0 0 24 24"
				fill="none"
				className="w-6 h-6 text-primary-500 cursor-pointer transition-all duration-200 hover:text-red-500"
				onClick={() => {
					document
						.getElementById("userDeleteModal")
						.classList.toggle("scale-0");
					document
						.getElementById("userDeleteModal")
						.classList.toggle("opacity-0");
					document.getElementsByTagName("BODY")[0].style.overflow =
						"hidden";
					setUserToDelete(userData);
				}}
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M21 6H3v3a2 2 0 0 1 2 2v4c0 2.828 0 4.243.879 5.121C6.757 21 8.172 21 11 21h2c2.828 0 4.243 0 5.121-.879C19 19.243 19 17.828 19 15v-4a2 2 0 0 1 2-2V6Zm-10.5 5a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0v-5Zm5 0a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0v-5Z"
					fill="currentColor"
				/>
				<path
					d="M10.068 3.37c.114-.106.365-.2.715-.267A6.68 6.68 0 0 1 12 3c.44 0 .868.036 1.217.103.35.067.6.161.715.268"
					stroke="currentColor"
					strokeWidth={2}
					strokeLinecap="round"
				/>
			</svg>
		</div>
	);
};

const PMSGroups = () => {
	const [activeUserType, setActiveUserType] = useState("All Groups");
	const [users, setUsers] = useState([]);
	const [activeUser, setActiveUser] = useState([]);
	const [userToDelete, setUserToDelete] = useState("");

	useEffect(() => {
		fetch(process.env.REACT_APP_SERVER + "/api/main/getUserDetails")
			.then((res) => res.json())
			.then((data) => {
				setUsers(data.data);
				let temp = [];
				for (let i = 0; i < data.data.length; i++) {
					if (
						data.data[i].role === activeUserType ||
						activeUserType === "All Groups"
					) {
						temp.push(data.data[i]);
					}
				}
				setActiveUser(temp);
			});
	}, []);
	return (
		<div className="flex flex-col w-full h-full relative">
			<UserdeleteModal
				data={userToDelete}
				users={users}
				setUsers={setUsers}
				activeUser={activeUser}
				setActiveUser={setActiveUser}
				activeUserType={activeUserType}
			/>
			<div className="w-full">
				<div className="w-full h-full flex flex-wrap sm:gap-0 gap-5 items-center justify-between p-2 px-8 lg:p-9">
					<div className="flex gap-4">
						<svg
							className="w-6 h-6 text-textColor-500"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx={12}
								cy={8}
								r={3}
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
							/>
							<path
								d="M15.268 8a2 2 0 1 1 3.464 2 2 2 0 0 1-3.464-2Zm-10 0a2 2 0 1 1 3.464 2 2 2 0 0 1-3.464-2Z"
								stroke="currentColor"
								strokeWidth={2}
							/>
							<path
								d="m16.882 18-.98.197.16.803h.82v-1Zm3.838-1.096.943-.334-.943.334Zm-5.94-2.194-.604-.796-1.157.879 1.234.767.528-.85ZM19.868 17h-2.985v2h2.985v-2Zm-.09.238a.208.208 0 0 1-.005-.103.217.217 0 0 1 .043-.097c.032-.04.059-.038.052-.038v2c1.146 0 2.274-1.08 1.796-2.43l-1.885.668ZM17 15c1.642 0 2.403 1.181 2.778 2.238l1.885-.668C21.198 15.259 19.948 13 17 13v2Zm-1.614.507C15.77 15.215 16.282 15 17 15v-2c-1.162 0-2.097.362-2.824.914l1.21 1.593Zm-1.133.053c1.039.646 1.474 1.772 1.648 2.637l1.96-.394c-.217-1.083-.824-2.867-2.552-3.942l-1.056 1.699Zm-5.033-.85.527.85 1.234-.767-1.157-.879-.605.796Zm-5.94 2.194.942.334-.942-.334ZM7.118 18v1h.82l.16-.803-.98-.197ZM7 15c.718 0 1.23.215 1.614.507l1.21-1.593C9.097 13.362 8.162 13 7 13v2Zm-2.778 2.238C4.597 16.181 5.358 15 7 15v-2c-2.948 0-4.198 2.259-4.663 3.57l1.885.668ZM4.132 17c-.006 0 .02-.002.053.038a.218.218 0 0 1 .043.097.21.21 0 0 1-.006.103l-1.885-.668C1.86 17.92 2.987 19 4.133 19v-2Zm2.986 0H4.133v2h2.985v-2Zm.98 1.197c.175-.865.61-1.991 1.65-2.637l-1.058-1.7c-1.728 1.075-2.335 2.86-2.553 3.942l1.96.394Z"
								fill="currentColor"
							/>
							<path
								d="M12 14c3.572 0 4.592 2.551 4.883 4.009.109.541-.33.991-.883.991H8c-.552 0-.992-.45-.883-.991C7.408 16.55 8.428 14 12 14Z"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
							/>
						</svg>
						<div className="relative">
							<p className="absolute -top-6 -left-4 text-6xl text-textColor-100/80 font-bold -z-10 select-none w-max">
								{activeUserType}
							</p>
							<p className="font-bold text-textColor-500">
								Groups
							</p>
						</div>
					</div>

					<NavLink
						to="/superadmin/users/adduser"
						className="bg-primary-500 text-white flex flex-nowrap items-center px-3 py-2 gap-2 rounded-full w-fit h-12 purpleBtnShadow hover:-translate-y-1 transition-all group"
					>
						<svg
							className="w-6 h-6 group-hover:rotate-180 transition-all"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 6a1 1 0 0 1-1-1v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 1 1 2 0v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 0 1-1 1Z"
								fill="currentColor"
							/>
						</svg>
						<span className="hidden lg:flex">Add New Group</span>
					</NavLink>
				</div>
			</div>
			<div className="w-full lg:w-[95%] mx-auto h-fit bg-white rounded-2xl shadow-md mb-10 overflow-hidden">
				<Grid
					columns={[
						{ name: "Group ID", width: 150 },
						"Project Name",
						"Mentor Name",
						"Group Leader",
						{ name: "Group Size", width: 150 },
						{ name: "Actions", width: 150 },
					]}
					data={tempGrpDetails.map((group) => [
						group.id,
						group.project_name,
						group.mentor_name,
						group.group_leader,
						group.group_members.length,
						_(
							<Actions
								setUserToDelete={setUserToDelete}
								userData={group}
							/>
						),
					])}
					search={false}
					pagination={{
						limit: 25,
						summary: true,
					}}
					sort={true}
					resizable={true}
					fixedHeader={true}
				/>
			</div>
		</div>
	);
};

export default PMSGroups;
