import clsx from "clsx";

export function UIInput({type = "text",inputText = "", className, id, children }) {
	return (
		<input
			type="text"
			placeholder={inputText}
			id={id}
			className={clsx(
				className,
				"sans drop-shadow-md rounded-lg text-[#737373] pl-5 py-[15px]"
			)}
		>{children}</input>
	);
}
