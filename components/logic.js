import clsx from "clsx";

function localStorageWrite(values, name) {
	const obj = {};
	let checkbox = values[3].checked;
	values.forEach((item, id) => {
		obj[
			clsx(
				id == 0 && "name",
				id == 1 && "company",
				id == 2 && "role",
				id == 3 && "has"
			)
		] = id === 3 ? checkbox : item.value;
	});
	localStorage.setItem(`${name.value}`, JSON.stringify(obj));
}

function localStorageRead() {
	let values = [];
	let count = 0;
	for (let i = 0; i < localStorage.length; i++) {
		let key = localStorage.key(i);
		try {
			if (!JSON.parse(localStorage.getItem(key))["name"]) continue;
			values.push(JSON.parse(localStorage.getItem(key)));
		} catch (error) {
			console.log(error);
		}finally{
			count++;
		}
	}

	return values;
}
//TODO сделать логику удаления и замены значений в localstorage
export { localStorageWrite, localStorageRead };
