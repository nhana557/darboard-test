import Input from "../form/input";
import Carausel from "../carausel";
import { useEffect, useState } from "react";

function Invoice() {
	const [user, setUser] = useState([]);
	const [data, setData] = useState({
		name: "",
		email: "",
		itemsAmount: "",
		item: "",
	});
	console.log(data);

	const handleSumbit = (e) => {
		e.preventDefault();
		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json", // Tipe konten yang dikirim adalah JSON
			},
			body: JSON.stringify(data), // Mengonversi objek JavaScript ke JSON
		};
		fetch("/movies", requestOptions)
			.then((res) => res.json())
			.then(() => {
				setData({
					name: "",
					email: "",
					itemsAmount: "",
					item: "",
				});
				getUserData();
			})
			.catch((error) => console.error("Terjadi kesalahan:", error));
	};

	const getUserData = () => {
		fetch("/api/users")
			.then((res) => res.json())
			.then((json) => setUser(json));
	};
	useEffect(() => {
		getUserData();
	}, []);

	return (
		<div className="bg-[#ffffff] my-10 rounded-lg">
			<div className="container w-[90%]">
				<div className="mt-10 py-5 flex justify-between items-center">
					<p className="text-[#064061] text-2xl font-bold">Quick Invoice</p>
					<div className="bg-[#FAFAFA] rounded-full w-14 h-14 flex justify-center items-center">
						<svg
							width="28"
							height="28"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M4.5 9H13.5"
								stroke="#4EB7F2"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M9 13.5V4.5"
								stroke="#4EB7F2"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</div>
				<div>
					<h1 className="text-[#064061] text-lg font-semibold">Latest Transaction</h1>
					<Carausel data={user} />
					<div className="grid grid-flow-col gap-5"></div>
				</div>
				<hr className="text-[#FAFAFA] h-10 mt-5" />
				<form onSubmit={handleSumbit}>
					<div className="grid grid-cols-6 gap-x-6 gap-y-8 pb-10">
						<Input
							data={data}
							setData={setData}
							label={"Customer Name"}
							typeInput={"text"}
							placeholder={"name"}
							value={data.name}
						/>
						<Input
							data={data}
							setData={setData}
							label={"Customer Email"}
							typeInput={"text"}
							placeholder={"email"}
							value={data.email}
						/>
						<Input
							data={data}
							setData={setData}
							label={"Item name"}
							typeInput={"text"}
							placeholder={"item"}
							value={data.item}
						/>
						<Input
							data={data}
							setData={setData}
							label={"Items amount"}
							typeInput={"text"}
							currency={true}
							placeholder={"itemsAmount"}
							value={data.itemsAmount}
						/>
						<div className="sm:col-span-3">
							<div className="mt-2">
								<button className="py-4 w-full rounded-lg text-[#4EB7F2] hover:bg-[#4EB7F2] hover:text-white text-xl">
									Add more details
								</button>
							</div>
						</div>
						<div className="sm:col-span-3">
							<div className="mt-2">
								<button
									className="py-4 bg-[#4EB7F2] w-full rounded-lg text-white text-xl"
									type="submit"
								>
									Send Money
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Invoice;
