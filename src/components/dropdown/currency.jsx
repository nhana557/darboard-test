import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Currency() {
	const [isOpen, setIsOpen] = useState(false);
	const [name, setName] = useState("USD");

	return (
		<div className="relative inline-block text-left ">
			<button
				onClick={() => setIsOpen(!isOpen)}
				type="button"
				className="px-4 w-[100px] py-3 text-lg font-semibold flex justify-between items-center text-[#064061] bg-transparent border-none rounded-lg"
			>
				{name}
				{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
			</button>
			{isOpen && (
				<div className="origin-top-right absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
					<div className="py-1">
						<ul>
							<li
								onClick={(e) => {
									setName(e.target.outerText);
									setIsOpen(!isOpen);
								}}
								className="hover:cursor-pointer hover:bg-gray-100 font-semibold px-3 text-lg text-[#064061]"
							>
								US
							</li>
							<li
								onClick={(e) => {
									setName(e.target.outerText);
									setIsOpen(!isOpen);
								}}
								className="hover:cursor-pointer hover:bg-gray-100 font-semibold px-3 text-lg text-[#064061] "
							>
								IDR
							</li>
						</ul>
					</div>
				</div>
			)}
		</div>
	);
}

export default Currency;
