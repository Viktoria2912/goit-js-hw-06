const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", handleInputEnterInput);

function handleInputEnterInput(event) {
	spanEl.textContent = event.currentTarget.value;
	if (event.currentTarget.value === "") {
		spanEl.textContent = "Anonymous";
	}
}
