import { Header, List, Modal, Filters } from "../components/exports";
import { useEffect, useState } from "react";
import { localStorageWrite, localStorageRead } from "../components/logic";

function HomePage() {
	const [isOpen, setIsOpen] = useState({ adding: false, replacing: false });
	const [customers, setCustomers] = useState([]);
	const [tempStr, setTempStr] = useState({ name: "", company: "" });
	const [countInOutState, setCountInOut] = useState({ in: "", out: "" });
	const [cust, setCust] = useState("");

	function updateState() {
		const values = localStorageRead();
		setCustomers(values);
	}
	function Present() {
		setCustomers(localStorageRead().filter((customer) => customer.has));
	}
	function Missing() {
		setCustomers(localStorageRead().filter((customer) => !customer.has));
	}
	function filterNames(value) {
		setTempStr({ ...tempStr, name: value });
	}
	function filterCompanies(value) {
		setTempStr({ ...tempStr, company: value });
	}
	function editCustomer(name) {
		setIsOpen({ ...isOpen, replacing: true });
		setCust(name);
	}
	function countInOut() {
		setCountInOut({
			out: localStorageRead().filter((customer) => !customer.has).length,
			in: localStorageRead().filter((customer) => customer.has).length
		});
	}

	function replaceCustomer(name) {
		localStorage.removeItem(name);
	}

	useEffect(() => {
		updateState();
		countInOut();
	}, []);

	return (
		<>
			<Header
				inputText={"Поиск по имени"}
				buttonText={"Добавить"}
				className="px-12 text-[#4E3000]"
				setIsOpen={setIsOpen}
				filterNames={filterNames}
				filterCompanies={filterCompanies}
				inCount={countInOutState.in}
				outCount={countInOutState.out}
			/>
			<main className="px-12 flex flex-col">
				<List customers={customers} str={tempStr} editCustomer={editCustomer} />
				<Filters
					className="text-[#4E3000]"
					Present={Present}
					Missing={Missing}
					Clear={updateState}
				/>
			</main>
			<Modal
				isOpen={isOpen.adding}
				onClose={() => setIsOpen({ ...isOpen, adding: false })}
				action={updateState}
				actionName="Добавить"
				localStorageWrite={localStorageWrite}
			/>
			<Modal
				isOpen={isOpen.replacing}
				onClose={() => setIsOpen({ ...isOpen, replacing: false })}
				action={() => replaceCustomer(cust)}
				actionName="Поменять"
				localStorageWrite={localStorageWrite}
			/>
		</>
	);
}

export default HomePage;
