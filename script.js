const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinary = (input) => {
	if (input == 0 || input == 1) {
		return String(input);
	}
};

const checkUserInput = () => {
	// Update the condition in your if statement to use the logical NOT operator to check if numberInput.value is falsy.
	if (
		!numberInput.value ||
		isNaN(parseInt(numberInput.value)) ||
		parseInt(numberInput.value) < 0
	) {
		alert("Please provide a decimal number greater than or equal to 0");
		// After alerting the user if the number input is empty or the value is not a number, you can use the return keyword to break out of this function early. This will prevent future code in this function from running.
		return;
	}

	result.textContent = decimalToBinary(parseInt(numberInput.value));
	numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

// The keydown event fires every time a user presses a key on their keyboard, and is a good way to add more interactivity to input elements.
numberInput.addEventListener("keydown", (e) => {
	// Whenever an event listener is triggered by an event, an event object is created automatically. You don't always need to use this object, like with your click handler above, but it can be useful to access information about the event that was triggered.
	if (e.key === "Enter") {
		checkUserInput();
	}
});
