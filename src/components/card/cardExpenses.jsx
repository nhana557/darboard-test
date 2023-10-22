import React from "react";
import iconarrow from "../../assets/images/arrow-rightarrow.png";
import iconArrowBlue from "../../assets/images/arrow-rightarrow-blue.png";

function cardExpenses({ title, date, total, icon, active }) {
	return (
		<div
			className={`${
				active ? "bg-[#4EB7F2]" : "bg-[#ffffff]"
			} border border-gray-100 rounded-lg w-auto`}
		>
			<div className="flex justify-between mx-4 py-5 mb-10">
				<div
					className={`${
						active ? "bg-[#ffffff]/10" : "bg-black/10"
					} rounded-full w-[85px] h-[85px] flex justify-center items-center`}
				>
					<img
						src={icon}
						alt="money"
						width={45}
					/>
				</div>
				{active ? (
					<div className="rounded-full w-[75px] h-[75px] flex justify-center items-center">
						<img
							src={iconarrow}
							alt="money"
							width={30}
						/>
					</div>
				) : (
					<div className="rounded-full w-[75px] h-[75px] flex justify-center items-center">
						<img
							src={iconArrowBlue}
							alt="money"
							width={30}
						/>
					</div>
				)}
			</div>
			<div className="ml-5">
				<p className={`${active ? "text-white" : "text-[#064061]"} text-xl font-semibold p-1`}>
					{title}
				</p>
				<p className={`${active ? "text-white" : "text-[#AAAAAA]"} text-md p-1`}>{date}</p>
				<p className={`${active ? "text-white" : "text-[#064061]"} text-3xl font-semibold p-1 pb-5`}>
					${total}
				</p>
			</div>
		</div>
	);
}

export default cardExpenses;
