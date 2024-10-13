import { Header, List, Modal, Filters } from "../components/exports";
import { useEffect, useState } from "react";
import { localStorageWrite, localStorageRead } from "../components/logic";

function HomePage() {
	const [isOpen, setIsOpen] = useState(false);
	const [customers, setCustomers] = useState([]);
	const [tempStr, setTempStr] = useState({ name: "", company: "" });

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
		setTempStr({...tempStr, name:value});
	}
	function filterCompanies(value) {
		setTempStr({...tempStr, company:value});
	}
	function editCustomer(id) {
		setIsOpen(true);
		const values = localStorageRead()
		return {...values[id]}
	}

	useEffect(() => {
		updateState();
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
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				add={updateState}
				localStorageWrite={localStorageWrite}
				fio
				company
				group
				has
			/>
		</>
	);
}

export default HomePage;
