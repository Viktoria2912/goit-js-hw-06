const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", headleFormSubmit);

function headleFormSubmit(event) {
	event.preventDefault();
	const email = event.currentTarget.elements.email.value;
	const password = event.currentTarget.elements.password.value;
	if (email === "" || password === "") {
		alert("All fields must be filled");
	} else {
		const formData = {
			email,
			password,
		};
		console.log(formData);
		formEl.reset();
	}
}
