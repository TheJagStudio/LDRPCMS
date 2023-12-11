import React from "react";

// Components
import SidebarRight from "../../Components/SuperAdmin/Home/SidebarRight";

const PMSDashboard = () => {
	return (
		<div className="flex flex-nowrap w-full h-full">
			<div className="w-full lg:w-[78%] ">
				<div className="w-full h-32 flex flex-wrap items-center justify-between p-2 px-8 lg:p-9">
					<div className="flex gap-4 w-full lg:w-fit">
						<svg
							width={24}
							height={24}
							className="text-textColor-500"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								x={4}
								y={4}
								width={6}
								height={7}
								rx={1}
								fill="currentColor"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinejoin="round"
							/>
							<rect
								x={4}
								y={15}
								width={6}
								height={5}
								rx={1}
								fill="currentColor"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinejoin="round"
							/>
							<rect
								x={14}
								y={4}
								width={6}
								height={5}
								rx={1}
								fill="currentColor"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinejoin="round"
							/>
							<rect
								x={14}
								y={13}
								width={6}
								height={7}
								rx={1}
								fill="currentColor"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinejoin="round"
							/>
						</svg>
						<div className="relative">
							<p className="absolute -top-6 -left-4 text-6xl text-textColor-100/80 font-bold -z-10 select-none">
								PMS
							</p>
							<p className="font-bold text-textColor-500">
								Dashboard
							</p>
						</div>
					</div>
				</div>
				<div className="w-full grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-3 gap-3 px-8">
					<div className="bg-white h-40 rounded-xl col-span-2 lg:col-span-1 flex flex-col items-center justify-center gap-3 shadowCustom">
						<p className="text-textColor-500 text-base font-semibold">
							Groups Created
						</p>
						<p className="text-textColor-600 font-bold text-3xl">
							27
						</p>
					</div>
					<div className="bg-white h-40 rounded-xl col-span-2 lg:col-span-1 flex flex-col items-center justify-center gap-3 shadowCustom">
						<p className="text-textColor-500 text-base font-semibold">
							Students Registered
						</p>
						<p className="text-textColor-600 font-bold text-3xl">
							92
						</p>
					</div>
					<div className="bg-white h-40 rounded-xl col-span-2 lg:col-span-1 flex flex-col items-center justify-center gap-3 shadowCustom">
						<p className="text-textColor-500 text-base font-semibold">
							Students Remaining
						</p>
						<p className="text-textColor-600 font-bold text-3xl">
							27
						</p>
					</div>
					<div className="bg-white h-40 rounded-xl col-span-2 lg:col-span-1 flex flex-col items-center justify-center gap-3 shadowCustom">
						<p className="text-textColor-500 text-base font-semibold">
							Students Registered
						</p>
						<p className="text-textColor-600 font-bold text-3xl">
							92
						</p>
					</div>
				</div>
			</div>
            <SidebarRight />
		</div>
	);
};

export default PMSDashboard;
