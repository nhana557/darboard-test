import React from "react";

function CardDebit({ name, typeCard, number, cvv, iconBank }) {
	return (
		<div className={`card bg-[url('/src/assets/images/bg-card.png')] bg-cover`}>
			<div className="flex justify-between w-full p-8">
				<div className="flex-col text-white">
					<p className="text-lg">{typeCard}</p>
					<p className="text-lg font-semibold">{name}</p>
				</div>
				<div className="logo-bank">
					<img
						src={iconBank}
						alt="bca"
						width={70}
					/>
				</div>
			</div>
			<div className="flex-col text-end mr-5 text-white">
				<p className="text-2xl font-bold">{number}</p>
				<p>{cvv}</p>
			</div>
		</div>
	);
}

export default CardDebit;
