import SideBar from "./components/layout/navbar";
import Expenses from "./components/layout/expenses";
import MyCard from "./components/layout/myCard";
import server from "./server/index";

function App() {
	server();
	return (
		<div className="flex gap-5">
			<SideBar />
			<Expenses />
			<MyCard />
		</div>
	);
}

export default App;
