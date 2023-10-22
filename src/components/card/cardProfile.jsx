import React from "react";

function CardProfile({ ppIcon, name, email }) {
	return (
		<div className="w-full rounded-lg bg-[#FAFAFA] h-20 mx-auto flex  items-center mt-10">
			<img
				src={ppIcon}
				width={50}
				alt="ppIcon"
				className="rounded-full mx-4"
			/>
			<div className="flex-col">
				<p className="text-[#064061] text-lg font-bold text-clip overflow-hidden">{name}</p>
				<p className="text-gray-400 text-xs text-clip overflow-hidden">{email}</p>
			</div>
		</div>
	);
}

export default CardProfile;
