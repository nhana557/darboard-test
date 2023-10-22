import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
function Dropdown() {
	const [isOpen, setIsOpen] = useState(false);
	const [name, setName] = useState("Monthly");

	return (
		<div className="relative inline-block text-left">
			<button
				onClick={() => setIsOpen(!isOpen)}
				type="button"
				className="px-4 w-[150px] py-3 text-lg font-semibold flex justify-between items-center text-[#064061] bg-white border rounded-lg hover:bg-gray-100"
			>
				{name}
				{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
			</button>
			{isOpen && (
				<div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
					<div className="py-1">
						<ul>
							<li
								onClick={(e) => {
									setName(e.target.outerText);
									setIsOpen(!isOpen);
								}}
								className="hover:cursor-pointer hover:bg-gray-100 font-semibold px-3 text-lg text-[#064061]"
							>
								Yearly
							</li>
							<li
								onClick={(e) => {
									setName(e.target.outerText);
									setIsOpen(!isOpen);
								}}
								className="hover:cursor-pointer hover:bg-gray-100 font-semibold px-3 text-lg text-[#064061] "
							>
								Monthly
							</li>
						</ul>
					</div>
				</div>
			)}
		</div>
	);
}

export default Dropdown;
