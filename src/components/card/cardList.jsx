import React from "react";

function CardList({ amountReceiveing, amountName, date, amount }) {
	return (
		<div className="bg-[#FAFAFA] rounded-lg flex justify-between items-center mt-5 p-3">
			<div className="flex-col">
				<p className="text-[#064061] text-lg font-semibold">{amountName}</p>
				<p className="text-[#AAAAAA] ">{date}</p>
			</div>
			<p className={`${amountReceiveing ? "text-[#7DD97B]" : "text-[#F3735E]"} text-xl font-semibold`}>
				${amount}
			</p>
		</div>
	);
}

CardList.defaultProps = {
	amountReceiveing: true,
};

export default CardList;
