import { Header, List, Modal, Filters } from "../components/exports";
import { useEffect, useState } from "react";
import { localStorageWrite, localStorageRead } from "../components/logic";

function HomePage() {
	const [isOpen, setIsOpen] = useState({ adding: false, replacing: false });
	const [customers, setCustomers] = useState([]);
	const [tempStr, setTempStr] = useState({ name: "", company: "" });
	const [countInOutState, setCountInOut] = useState({ in: "", out: "" });
	let customerId = 0;

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
	function editCustomer(id) {
		setIsOpen({ ...isOpen, replacing: true });
		customerId = id;
	}
	function countInOut() {
		setCountInOut({
			out: localStorageRead().filter((customer) => !customer.has).length,
			in: localStorageRead().filter((customer) => customer.has).length
		});
	}

	function replaceCustomer(id) {
		const keyName = localStorageRead();
		localStorage.removeItem(keyName[id].name);
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
				action={() => replaceCustomer(customerId)}
				actionName="Поменять"
				localStorageWrite={localStorageWrite}
			/>
		</>
	);
}

export default HomePage;
