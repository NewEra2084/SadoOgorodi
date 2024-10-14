import Image from "next/image";
import logo from "../media/logo.svg";
import clsx from "clsx";

export function Header({
	inputText,
	buttonText,
	className,
	filterNames,
	filterCompanies,
	setIsOpen,
}) {
	return (
		<header className={clsx(className, "flex pt-6 flex-wrap mb-7")}>
			<Image src={logo} alt="Агроном сад" className="mr-8 header__logo" />
			<div className="flex pt-9 gap-10 flex-wrap header__search order-2">
				<input
					type="text"
					placeholder={inputText}
					onChange={() => filterNames(document.querySelector("#name").value)}
					className="sans drop-shadow-md rounded-lg text-[#737373] pl-5 py-[15px] min-w-[396px] h-12 header__search__input"
					id="name"
				/>
				<input
					type="text"
					placeholder="Поиск по компании"
					onChange={() =>
						filterCompanies(document.querySelector("#company").value)
					}
					className="sans drop-shadow-md rounded-lg text-[#737373] pl-5 py-[15px] min-w-[396px] h-12 header__search__input"
					id="company"
				/>
				<button
					className="roboto bg-[#4CAF50] text-white rounded-xl drop-shadow-md h-12 px-10 min-w-[273px] header__search__button"
					onClick={() => setIsOpen(true)}
				>
					{buttonText}
				</button>
			</div>
			<div className="ml-auto sans text-3xl pt-1 font-bold text-right order-3 header__customers">
				<h3 className="mb-[5px] header__customers__text">Посетители</h3>
				<span className="text-[#80BB00]">280</span> /{" "}
				<span className="text-[#EC5937]">35</span>
			</div>
		</header>
	);
}
