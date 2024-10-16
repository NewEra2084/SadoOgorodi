import Image from "next/image";
import logo from "../media/logo.svg";
import clsx from "clsx";
import { useState } from "react";

export function Header({
	inputText,
	buttonText,
	className,
	filterNames,
	filterCompanies,
	state,
	tempStr,
	setIsOpen,
	inCount = 0,
	outCount = 0
}) {
	const [isClicked, setClicked] = useState(false);
	function burgerClickHandle() {
		if(!isClicked) {setClicked(true); 
			state({name: "", company: ""})};
		if(isClicked){
			setClicked(false);
			filterNames("", state, tempStr);
			filterCompanies("", state, tempStr);
		}
	}
	
	return (
		<header className={clsx(className, "flex pt-6 flex-wrap mb-7")}>
			<Image src={logo} alt="Агроном сад" className="mr-8 header__logo" />
			<div className="hidden md:flex pt-9 gap-10 flex-wrap header__search order-2">
				<input
					type="text"
					placeholder={inputText}
					onChange={() =>
						filterNames(document.querySelector("#name").value, state, tempStr)
					}
					className="sans drop-shadow-md rounded-lg text-[#737373] pl-5 py-[15px] min-w-[396px] h-12 header__search__input"
					id="name"
				/>
				<input
					type="text"
					placeholder="Поиск по компании"
					onChange={() =>
						filterCompanies(
							document.querySelector("#company").value,
							state,
							tempStr
						)
					}
					className="sans drop-shadow-md rounded-lg text-[#737373] pl-5 py-[15px] min-w-[396px] h-12 header__search__input"
					id="company"
				/>
				<button
					className="roboto bg-[#4CAF50] text-white rounded-xl drop-shadow-md h-12 px-10 min-w-[273px] header__search__button"
					onClick={() => setIsOpen({ ...setIsOpen, adding: true })}
				>
					{buttonText}
				</button>
			</div>
			{/*адаптив*/}
			<div className="md:hidden flex flex-col items-end absolute right-12 top-9">
				<button onClick={burgerClickHandle}>
					{isClicked ? (
						<svg
							className="h-10 w-10"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							className="h-10 w-10"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16m-7 6h7"
							/>
						</svg>
					)}
				</button>
				{isClicked && (
					<div
						className={
							"md:hidden flex flex-col gap-5 bg-[#4E3000] rounded-lg p-4 mt-4 burger relative"
						}
					>
						<input
							type="text"
							placeholder={inputText}
							onChange={() => {
								filterNames(
									document.querySelector("#nameMd").value,
									state,
									tempStr
								);
							}}
							className="block sans drop-shadow-md rounded-lg text-[#737373] pl-5 py-[15px] min-w-[396px] h-12 header__search__input"
							id="nameMd"
						/>
						<input
							type="text"
							placeholder="Поиск по компании"
							onChange={() =>
								filterCompanies(
									document.querySelector("#companyMd").value,
									state,
									tempStr
								)
							}
							className="block sans drop-shadow-md rounded-lg text-[#737373] pl-5 py-[15px] min-w-[396px] h-12 header__search__input"
							id="companyMd"
						/>
						<button
							className="roboto bg-[#4CAF50] text-white rounded-xl drop-shadow-md h-12 px-10 min-w-[273px] header__search__button"
							onClick={() => setIsOpen({ ...setIsOpen, adding: true })}
						>
							{buttonText}
						</button>
					</div>
				)}
			</div>
			<div className="ml-auto absolute top-6 right-12 sans text-3xl pt-1 font-bold text-right order-3 header__customers">
				<h3 className="mb-[5px] header__customers__text">Посетители</h3>
				<span className="text-[#80BB00]">{inCount}</span> /{" "}
				<span className="text-[#EC5937]">{outCount}</span>
			</div>
		</header>
	);
}
