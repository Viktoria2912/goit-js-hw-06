const counterBtnsEl = document.querySelectorAll("#counter button");
const decrementBtn = counterBtnsEl[0];
const incrementBtn = counterBtnsEl[1];
const valueEl = document.querySelector("#value");

let counterValue = 0;
decrementBtn.addEventListener("click", handledecrementBtnClick);
incrementBtn.addEventListener("click", handleincrementBtnClick);

function handledecrementBtnClick(event) {
	counterValue = counterValue - 1;
	console.log(counterValue);
	valueEl.textContent = counterValue;
}
function handleincrementBtnClick(event) {
	counterValue = counterValue + 1;
	console.log(counterValue);
	valueEl.textContent = counterValue;
}
