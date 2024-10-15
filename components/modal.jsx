import clsx from "clsx";
import { CrossIcon } from "../media/cross";
import { UIButton } from "./ui/ui-Button";

export function Modal({
	isOpen = false,
	onClose,
	action,
	localStorageWrite,
	info="",
	actionName = "Добавить",
}) {
	if (!isOpen) return;
	
	return (
		<div className="fixed inset-0 h-[100vh] bg-black/30 pt-10 pb-10 overflow-y-auto ">
			<div className="w-[70vw] relative mx-auto mt-[15vh] bg-white rounded-3xl text-[#4E3000] sans text-3xl px-[18vw] py-[66px] overflow-x-auto modal__wrapper">
				<form className="flex flex-col items-center" name="customerInfo">
					<div className="flex mb-16 modal__form-input items-center">
						<label htmlFor="name" className="w-44 modal__input-title">
							ФИО
						</label>
						<input
							required
							className={clsx(!info.name && "a", "sans drop-shadow-md rounded-lg text-[#737373] pl-5 py-[15px]")}
							data-localstorage
							id="name"
							placeholder={info?.name || "ФИО"}
						></input>
					</div>
					<div className="flex mb-16 items-center modal__form-input">
						<label htmlFor="company" className="modal__input-title w-44">
							Компания
						</label>
						<input
							required
							id="company"
							className={clsx(!info.name && "a", "sans drop-shadow-md rounded-lg text-[#737373] pl-5 py-[15px]")}
							data-localstorage
							placeholder={info?.company || "Компания"}
						></input>
					</div>
					<div className="flex mb-16 text-left">
						<label htmlFor="group" className="modal__input-title w-44">
							Группа
						</label>
						<select id="group" data-localstorage>
							{info ? <option>Не менять: {info?.role}</option> : ""}
							<option>Прохожий</option>
							<option>Клиент</option>
							<option>Партнер</option>
						</select>
					</div>
					<div className="flex mb-16">
						<label htmlFor="checking" className="modal__input-title w-56">
							Присутствие
						</label>
						<input
							id="checking"
							type="checkbox"
							data-localstorage
							className="w-8 h-8"
						></input>
					</div>
					<div className="flex justify-center gap-x-8 flex-wrap gap-y-2">
						<UIButton
							className={"roboto h-12 w-[273px] modal__buttons"}
							variant={"green"}
							type={"submit"}
							onClick={() => {
								action();
								localStorageWrite(
									document.querySelectorAll("[data-localstorage]"),
									document.querySelector("[data-localstorage]")
								);
							}}
						>
							{actionName}
						</UIButton>
						<UIButton
							className={"roboto h-12 w-[273px] modal__buttons"}
							variant={"gray"}
							onClick={onClose}
						>
							Закрыть
						</UIButton>
					</div>
				</form>
				<div className={"absolute top-5 right-5"} onClick={onClose}>
					<CrossIcon />
				</div>
			</div>
		</div>
	);
}
