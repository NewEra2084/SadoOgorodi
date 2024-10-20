export function List({
	customers,
	str,
	editCustomer,
	setIsOpen,
	setReplaced,
	isOpen,
}) {
	return (
		<div className="sans max-h-[60vh] overflow-x-auto overflow-y-auto list">
			<div className="flex text-xl text-[#4E3000] font-semibold pr-5 list__title">
				<h5 className="min-w-[200px]">Номер</h5>
				<h5 className="min-w-[400px] mr-10">ФИО</h5>
				<h5 className="min-w-[500px]">Компания</h5>
				<h5 className="min-w-[440px]">Группа</h5>
				<h5 className="min-w-14 ml-auto">Присутствие</h5>
			</div>
			<hr className="h-1 mt-2" />
			<ul className="text-3xl pr-10 list__collection">
				{customers
					.filter(
						(customer) =>
							customer.name.includes(str.name) &&
							customer.company.includes(str.company)
					)
					.map((customer, id) => {
						return (
							<li
								className="pt-8 flex list__collection__item"
								key={id}
								onClick={() =>
									editCustomer(customer.name, setIsOpen, setReplaced, isOpen)
								}
							>
								<h2 className="min-w-[200px] tabular-nums">{id + 1}</h2>
								<h2 className="min-w-[400px] mr-10 truncate">{customer.name}</h2>
								<h2 className="min-w-[500px] truncate">{customer.company}</h2>
								<h2 className="min-w-[500px]">{customer.role}</h2>
								{customer.has ? (
									<div className="bg-[#80BB00] rounded-full h-14 min-w-14 ml-auto"></div>
								) : (
									<div className="bg-[red] rounded-full h-14 min-w-14 ml-auto"></div>
								)}
							</li>
						);
					})}
			</ul>
		</div>
	);
}
