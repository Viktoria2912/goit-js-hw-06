const inputEl = document.querySelector("#validation-input");
const valueToCheck = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", hendleInputBlur);

function hendleInputBlur(event) {
	const inputValue = event.currentTarget.value;
	inputEl.classList = "invalid";
	if (inputValue.length === valueToCheck) {
		inputEl.classList = "valid";
	}
}
