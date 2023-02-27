const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
spanEl.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener("input", handleInputRange);

function handleInputRange(event) {
	spanEl.style.fontSize = `${inputEl.value}px`;
}
