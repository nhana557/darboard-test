//components
import Dropdown from "../dropdown";
import CardExpenses from "../card/cardExpenses";

import InvoiceQuick from "./invoice";
import { useEffect, useState } from "react";

function Expenses() {
	const [expenses, setExpenses] = useState([]);

	useEffect(() => {
		fetch("/api/expenses")
			.then((res) => res.json())
			.then((json) => setExpenses(json));
	}, []);
	return (
		<div className="flex-col w-1/2 h-max">
			<div className="bg-[#ffffff] w-full h-1/2 my-10 rounded-lg">
				<div className="container w-[90%] py-10">
					<div className="flex justify-between">
						<p className="text-[#064061] text-2xl font-bold">All Expenses</p>
						<Dropdown />
					</div>
					<div className="grid gap-5 mt-8 grid-flow-col">
						{expenses &&
							expenses.map((item, i) => (
								<CardExpenses
									title={item?.name}
									icon={item?.icon}
									total={item?.total}
									active={i === 0 ? true : false}
									date={item?.date}
								/>
							))}
					</div>
				</div>
			</div>
			<InvoiceQuick />
		</div>
	);
}

export default Expenses;
