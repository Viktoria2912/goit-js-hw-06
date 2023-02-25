const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const parentEl = document.querySelector("#ingredients");
const createElements = ingredients => {
	return ingredients.map(ingredient => {
		const newLiEl = document.createElement("li");
		newLiEl.classList = "item";
		newLiEl.textContent = ingredient;
		return newLiEl;
	});
};

const result = createElements(ingredients);
parentEl.append(...result);
