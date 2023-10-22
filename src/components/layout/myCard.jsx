import { useEffect, useState } from "react";
import bcaLogo from "../../assets/images/bca.png";
import CardDebit from "../card/cardDdebit";
import CardList from "../card/cardList";

function MyCard() {
	const [transaction, setTransaction] = useState([]);

	useEffect(() => {
		fetch("/api/transactions")
			.then((res) => res.json())
			.then((json) => setTransaction(json));
	}, []);
	return (
		<div className="bg-[#ffffff] h-auto w-3/12 my-10 mr-5 rounded-lg ">
			<div className="container w-[90%] py-10">
				<h1 className="text-[#064061] text-2xl font-bold">My Card</h1>
				<CardDebit
					iconBank={bcaLogo}
					name={"Syah Bandi"}
					typeCard={"Paspor"}
					number={"0918 8124 0042 8129"}
					cvv={"12/20-124"}
				/>
				<div className="flex h-10 items-center gap-1">
					<span
						className={`h-2 cursor-pointer rounded-2xl transition-all content-[''] w-7 bg-[#4EB7F2]`}
					/>
					<span
						className={`h-2 cursor-pointer rounded-2xl transition-all content-[''] w-2 bg-[#E8E8E8]`}
					/>
					<span
						className={`h-2 cursor-pointer rounded-2xl transition-all content-[''] w-2 bg-[#E8E8E8]`}
					/>
				</div>
				<hr className="bg-gray-300 " />

				<div className="flex justify-between mt-5">
					<h1 className="text-[#064061] text-2xl font-bold">Transaction History</h1>
					<a
						href="/"
						className="text-[#4EB7F2] text-lg"
					>
						See all
					</a>
				</div>
				<div className="mt-5">
					<p className="text-xl text-[#AAAAAA]">23 April</p>
					{transaction &&
						transaction.map((item, i) => (
							<CardList
								amountReceiveing={item?.receveing}
								amount={item?.amount}
								amountName={item?.name}
								date={item?.date}
							/>
						))}
				</div>
			</div>
		</div>
	);
}

export default MyCard;
