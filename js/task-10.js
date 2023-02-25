function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const divControlsEl = document.querySelector("#controls");
const inputEl = divControlsEl.firstElementChild;
const btnCreate = divControlsEl.children[1];
const btnDestroy = divControlsEl.lastElementChild;
const divBoxesEl = document.querySelector("#boxes");

btnCreate.addEventListener("click", handleBtnCreateClick);
function handleBtnCreateClick(event) {
	const count = Number(inputEl.value);
	createBoxes(count);
}

function createBoxes(amount) {
	console.log(amount);
	let newDivElBox = [];
	for (let i = 0; i < amount; i += 1) {
		const currentColor = getRandomHexColor();
		const newDivEl = document.createElement("div");
		const elWidth = i * 10 + 30;
		const elHeight = i * 10 + 30;
		newDivEl.style.width = `${elWidth}px`;
		newDivEl.style.height = `${elHeight}px`;
		newDivEl.style.backgroundColor = currentColor;
		newDivElBox.push(newDivEl);
	}
	divBoxesEl.append(...newDivElBox);
}
btnDestroy.addEventListener("click", handleBtnDestroyClick);

function handleBtnDestroyClick(event) {
	while (divBoxesEl.firstElementChild) {
		divBoxesEl.removeChild(divBoxesEl.lastElementChild);
	}
	inputEl.value = "";
}
