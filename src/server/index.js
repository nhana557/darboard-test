import { createServer } from "miragejs";
import iconBelance from "../assets/images/money.png";
import iconReceveing from "../assets/images/card-receivein.png";
import iconSendout from "../assets/images/card-sendout.png";

export default function server() {
	return createServer({
		routes() {
			this.userData = [
				{ id: "1", name: "Lekan Okeowo", email: "demo@gmail.com" },
				{ id: "2", name: "Luke", email: "luke@gmail.com" },
				{ id: "3", name: "Leia", email: "leia@gmail.com" },
				{ id: "4", name: "Anakin", email: "anakin@gmail.com" },
			];
			this.transaction = [
				{ id: "1", amount: "20,129", date: "13 Apr, 2022", name: "Cash Withdrawal", receveing: false },
				{ id: "2", amount: "2,000", date: "13 Apr, 2022 at 3:30 PM", name: "Landing Page project" },
				{ id: "3", amount: "20,129", date: "13 Apr, 2022 at 3:30 PM", name: "Juni Mobile App project" },
			];
			this.expenses = [
				{ id: "1", name: "Balance", date: "April 2022", total: "20,129", icon: iconBelance },
				{ id: "2", name: "Income", date: "April 2022", total: "20,129", icon: iconReceveing },
				{ id: "3", name: "Expenses", date: "April 2022", total: "20,129", icon: iconSendout },
			];
			this.get("/api/users", () => this.userData);
			this.get("/api/transactions", () => this.transaction);
			this.get("/api/expenses", () => this.expenses);
			this.get("/api/users/:id", (schema, request) => {
				let id = request.params.id;
				return this.userData.find((user) => user.id === id);
			});

			this.post("/api/transaction", (schema, request) => {
				const attrs = JSON.parse(request.requestBody);

				return this.userData.unshift({ ...attrs, id: this.userData.length + 1 });
			});
		},
	});
}
