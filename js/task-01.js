const body = document.body;
const pEl = body.firstElementChild;
const listEl = pEl.nextElementSibling;
const itemsArray = listEl.childNodes;
let newArr = [];
itemsArray.forEach(function callback(element) {
	if (element.classList) {
		newArr.push(element);
	}
});

console.log(`Number of categories: ${newArr.length}`);

newArr.forEach(function callback(element) {
	const hEl = element.firstElementChild;
	console.log(`Category: ${hEl.textContent}`);
	const list = element.lastElementChild;
	const items = list.children;
	console.log(`Elements: ${items.length}`);
});
