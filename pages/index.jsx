import { Header, List, Modal, Filters } from "../components/exports";
import { useEffect, useState } from "react";
import {
	localStorageWrite,
	updateState,
	Present,
	Missing,
	filterNames,
	filterCompanies,
	editCustomer,
	replaceCustomer,
	countInOut
} from "../components/logic";

function HomePage() {
	const [isOpen, setIsOpen] = useState({ adding: false, replacing: false });
	const [customers, setCustomers] = useState([]);
	const [tempStr, setTempStr] = useState({ name: "", company: "" });
	const [countInOutState, setCountInOut] = useState({ in: "", out: "" });
	const [replaced, setReplaced] = useState("");
	const [cust, setCust] = useState("");
	useEffect(() => {
		updateState(setCustomers);
		countInOut(setCountInOut);
	}, []);
	useEffect(()=>{
		setCust(JSON.parse(localStorage.getItem(replaced)))
	},[replaced])

	return (
		<>
			<Header
				inputText={"Поиск по имени"}
				buttonText={"Добавить"}
				className="px-12 text-[#4E3000]"
				setIsOpen={setIsOpen}
				filterNames={filterNames}
				filterCompanies={filterCompanies}
				state={setTempStr}
				tempStr={tempStr}
				inCount={countInOutState.in}
				outCount={countInOutState.out}
			/>
			<main className="px-12 flex flex-col">
				<List
					customers={customers}
					str={tempStr}
					editCustomer={editCustomer}
					setIsOpen={setIsOpen}
					setReplaced={setReplaced}
					isOpen={isOpen}
				/>
				<Filters
					className="text-[#4E3000]"
					Present={() => Present(setCustomers)}
					Missing={() => Missing(setCustomers)}
					Clear={() => updateState(setCustomers)}
				/>
			</main>
			<Modal
				isOpen={isOpen.adding}
				onClose={() => setIsOpen({ ...isOpen, adding: false })}
				action={() => updateState(setCustomers)}
				actionName="Добавить"
				localStorageWrite={localStorageWrite}
			/>
			<Modal
				isOpen={isOpen.replacing}
				onClose={() => setIsOpen({ ...isOpen, replacing: false })}
				action={() => replaceCustomer(replaced)}
				actionName="Поменять"
				localStorageWrite={localStorageWrite}
				info={cust}
			/>
		</>
	);
}

export default HomePage;
