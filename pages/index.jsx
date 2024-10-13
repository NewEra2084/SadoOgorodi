import { Header, List, Modal, Filters } from "../components/exports";
import { useEffect, useState } from "react";
import { localStorageWrite, localStorageRead } from "../components/logic";

function HomePage() {
	const [isOpen, setIsOpen] = useState(false);
	const [customers, setCustomers] = useState([]);

	function updateState() {
		const values = localStorageRead();
		setCustomers(values);
	}
	function Present(){
		setCustomers(localStorageRead().filter(customer => customer.has));
	}
	function Missing(){
		setCustomers(localStorageRead().filter(customer => !customer.has));
	}
	function filterNames(string) {
		setCustomers(localStorageRead().filter(customer => {
			customer.name.find(`${string}`)
		}));
	}

	useEffect(()=>{
		updateState()
	},[])

	return (
		<>
			<Header
				inputText={"Поиск по имени"}
				buttonText={"Добавить"}
				className={"px-12 text-[#4E3000]"}
				setIsOpen={setIsOpen}
				filterNames={filterNames}
			/>
			<main className="px-12 flex flex-col">
				<List customers={customers} />
				<Filters className="text-[#4E3000]" Present={Present} Missing={Missing} Clear={updateState}/>
			</main>
			<Modal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				add={updateState}
				localStorageWrite={localStorageWrite}
			/>
		</>
	);
}

export default HomePage;
