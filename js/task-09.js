function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");

buttonEl.addEventListener("click", hendleButtonChangeColor);

function hendleButtonChangeColor(event) {
	const currentColor = getRandomHexColor();
	bodyEl.style.backgroundColor = currentColor;
	spanEl.textContent = currentColor;
}
