import { Header, List, Modal, Filters } from "../components/exports";
import { useState } from "react";
import { localStorageWrite, localStorageRead } from "../components/logic";

function HomePage() {
	const [isOpen, setIsOpen] = useState(false);
	const [customers, setCustomers] = useState([]);

	function updateState() {
		const values = localStorageRead();
		values.forEach((it) => setCustomers([...customers, it]));
		console.log(customers);
	}

	return (
		<>
			<Header
				inputText={"Поиск по имени"}
				buttonText={"Добавить"}
				className={"px-12 text-[#4E3000]"}
				setIsOpen={setIsOpen}
			/>
			<main className="px-12 flex flex-col">
				<List customers={customers} />
				<Filters className="text-[#4E3000]" />
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
