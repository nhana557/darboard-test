import React from "react";
import DropdownCurrency from "../dropdown/currency";

function Input({ label, typeInput, currency, placeholder, setData, data, value }) {
	const handleChangeData = (e) => {
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value,
		});
	};
	return (
		<div className="col-span-3">
			<label
				for="first-name"
				className="block text-lg font-semibold leading-6 text-[#064061]"
			>
				{label}
			</label>
			<div className="mt-2 flex bg-[#FAFAFA]">
				{currency && <DropdownCurrency />}
				<input
					onChange={handleChangeData}
					name={placeholder}
					type={typeInput}
					value={value}
					placeholder={placeholder}
					className="block w-full rounded-md border-none py-4 text-gray-400 bg-[#FAFAFA] placeholder:text-gray-400 sm:text-sm sm:leading-6"
				/>
			</div>
		</div>
	);
}

Input.defaultProps = {
	currency: false,
};
export default Input;
