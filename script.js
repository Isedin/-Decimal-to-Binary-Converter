const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

function checkUserInput() {
	console.log(numberInput.value);
}

convertBtn.addEventListener("click", checkUserInput);

// The keydown event fires every time a user presses a key on their keyboard, and is a good way to add more interactivity to input elements.
numberInput.addEventListener("keydown", () => {});