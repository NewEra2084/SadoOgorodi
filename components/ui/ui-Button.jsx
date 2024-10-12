import clsx from "clsx";

export function UIButton({className, variant, type = "button", onSubmit , children}) {
  const buttonColors = clsx(
    className,
    {
      "green": "bg-[#4CAF50] text-white rounded-xl drop-shadow-md",
      "gray": "bg-[#737373] text-white rounded-xl drop-shadow-md"
    }[variant]
  )
	return (
		<button
			className={buttonColors}
      type={type}
      onClick={onSubmit}
		>
			{children}
		</button>
	);
}
