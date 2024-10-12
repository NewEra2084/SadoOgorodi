export function List({customers}) {
	return (
		<div className="pt-7 sans max-w-90vw overflow-x-auto">
			<div className="flex text-xl text-[#4E3000] font-semibold pr-5">
				<h5 className="mr-[4vw]">Номер</h5>
				<h5 className="mr-[20vw]">ФИО</h5>
				<h5 className="mr-[10vw]">Компания</h5>
				<h5>Группа</h5>
				<h5 className="ml-[38vw]">Присутствие</h5>
			</div>
			<hr className="h-1 col-[1_/_6] mt-2" />
			<ul className="text-3xl pr-10">
				{customers.map((customer, id) => {
					return <li className="pt-8 flex " key={id}>
            элемент
						{/* <h2 className="mr-[6vw]">{index+1}</h2>
						<h2 className="mr-[4vw] truncate">{customer.name}</h2>
						<h2 className="mr-[4vw]">{customer.company}</h2>
						<h2>{customer.role}</h2>
            {
              customer.on ? 
              <div className="bg-[#80BB00] rounded-full h-14 w-14 ml-[38vw]"></div> :
              <div className="bg-[red] rounded-full h-14 w-14 ml-[38vw]"></div> 
            } */}
					</li>
				})}
			</ul>
		</div>
	);
}

