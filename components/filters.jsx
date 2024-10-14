import clsx from "clsx";
import { useState } from "react";

export function Filters({ Present, Missing, Clear, className }) {
	const [filtered, setFiltered] = useState(false);
	
	return (
		<div
			className={clsx(
				className,
				"flex-wrap absolute flex gap-12 text-2xl bottom-12 left-12 filters"
			)}
		>
			<h2 className={"font-bold text-3xl my-auto filters__title"}>
				Фильтровать по:
			</h2>
			<div className="flex gap-12 flex-wrap filters__variants">
				<button
					onClick={() => {
						Missing();
						setFiltered(true);
					}}
				>
					Отсутствующим
				</button>
				<button
					onClick={() => {
						Present();
						setFiltered(true);
					}}
				>
					Присутствующим
				</button>
				<button
					className={clsx(
						"rounded-3xl bg-[#C4C4C4] text-white px-2 py-5 filters__variants-without",
						filtered && "bg-[#54d866]"
					)}
					onClick={() => {
						Clear();
						setFiltered(false);
					}}
				>
					Без фильтров
				</button>
			</div>
		</div>
	);
}
