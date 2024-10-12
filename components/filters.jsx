import clsx from "clsx";

export function Filters({ Present, Missing, Clear, className }) {
	return (
		<div
			className={clsx(
				className,
				"flex-wrap absolute flex gap-12 text-2xl bottom-12 left-12 filters"
			)}
		>
			<h2 className={"font-bold text-3xl my-auto filters__title"}>Фильтровать по:</h2>
			<div className="flex gap-12 flex-wrap filters__variants">
				<button onClick={() => Present()}>Отсутствующим</button>
				<button onClick={() => Missing()}>Присутствующим</button>
				<button
					className={"rounded-3xl bg-[#C4C4C4] text-white px-2 py-5 filters__variants-without"}
					onClick={() => Clear()}
				>
					Без фильтров
				</button>
			</div>
		</div>
	);
}
