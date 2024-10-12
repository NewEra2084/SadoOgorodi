import { CrossIcon } from "../media/cross";
import { UIButton } from "./ui/ui-Button";

export function Modal({ isOpen = false, onClose, add, localStorageWrite }) {
	if (!isOpen) return;
	return (
		<div className="fixed inset-0 h-[100vh] bg-black/30 pt-10 pb-10 overflow-y-auto ">
			<div className="w-[70vw] relative mx-auto mt-[15vh] bg-white rounded-3xl text-[#4E3000] sans text-3xl pl-[15%] py-[66px] overflow-x-auto">
				<form>
					<div className="flex justify-between w-[60%] mb-16 flex-wrap">
						<label htmlFor="name" className="modal__input-title">ФИО</label>
						<input data-localstorage id="name"></input>
					</div>
					<div className="flex w-[40%] mb-16 items-center">
						<label htmlFor="company" className="modal__input-title">
							Компания
						</label>
						<input
							id="company"
							className={
								"sans drop-shadow-md rounded-lg text-[#737373] pl-5 py-[15px]"
							}
							data-localstorage
						></input>
					</div>
					<div className="flex justify-between w-[40%] mb-16">
						<label htmlFor="group" className="modal__input-title">Группа</label>
						<select id="group" data-localstorage>
							<option>Прохожий</option>
							<option>Клиент</option>
							<option>Партнер</option>
						</select>
					</div>
					<div className="flex w-[40%] mb-16">
						<label htmlFor="checking" className="modal__input-title">Присутствие</label>
						<input
							id="checking"
							type="checkbox"
							data-localstorage
							className="w-8 h-8"
						></input>
					</div>
					<div className="flex gap-x-8">
						<UIButton
							className={"roboto h-12 w-[273px]"}
							variant={"green"}
							type={"button"}
							onSubmit={() => {
								localStorageWrite(
									document.querySelectorAll("[data-localstorage]"),
									document.querySelector("[data-localstorage]")
								);
								setTimeout(() => {
									add();
								}, 0);
							}}
						>
							Добавить
						</UIButton>
						<UIButton className={"roboto h-12 w-[273px]"} variant={"gray"}>
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
