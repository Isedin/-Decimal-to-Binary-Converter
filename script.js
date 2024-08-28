const numberInput = document.getElementById("number-input");
const fromSystem = document.getElementById("from-system");
const convertBtn = document.getElementById("convert-btn");
const resultDecimal = document.getElementById("result-decimal");
const resultBinary = document.getElementById("result-binary");
const resultHexadecimal = document.getElementById("result-hexadecimal");
const animationContainer = document.getElementById("animation-container");

// const animationData = [
// 	{
// 		inputVal: 5,
// 		marginTop: 300,
// 		addElDelay: 1000,
// 		msg: "decimalToBinary(5) returns '10' + 1 (5 % 2). Then it pops off the stack.",
// 		showMsgDelay: 15000,
// 		removeElDelay: 20000,
// 	},
// 	{
// 		inputVal: 2,
// 		marginTop: -200,
// 		addElDelay: 1500,
// 		msg: "decimalToBinary(2) returns '1' + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.",
// 		showMsgDelay: 10000,
// 		removeElDelay: 15000,
// 	},
// 	{
// 		inputVal: 1,
// 		marginTop: -200,
// 		addElDelay: 2000,
// 		msg: "'decimalToBinary(1) returns '1' (base case) and gives that value to the stack below. Then it pops off the stack.'",
// 		showMsgDelay: 5000,
// 		removeElDelay: 10000,
// 	},
// ];

// const decimalToBinary = (input) => {
// 	if (input === 0 || input === 1) {
// 		return String(input);
// 	} else {
// 		return decimalToBinary(Math.floor(input / 2)) + (input % 2);
// 	}
// };

// const showAnimation = () => {
// 	result.innerText = "Call Stack Animation";
// 	animationData.forEach((obj) => {
// 		setTimeout(() => {
// 			// Add a style attribute to the paragraph element and use string interpolation to set the value to "margin-top: ${currMarginTop}px;", where currMarginTop is the marginTop property of the current object.
// 			animationContainer.innerHTML += `<p id="${obj.inputVal}" style="margin-top: ${obj.marginTop}px;" class = "animation-frame">decimalToBinary(${obj.inputVal})</p>`;
// 		}, obj.addElDelay);
// 		setTimeout(() => {
// 			// Using the .getElementById() method, set the textContent property of the targeted element equal to the msg property of the current object.
// 			document.getElementById(obj.inputVal).textContent = obj.msg;
// 		}, obj.showMsgDelay);
// 		setTimeout(() => {
// 			document.getElementById(obj.inputVal).remove();
// 		}, obj.removeElDelay);
// 	});
// 	setTimeout(() => {
// 		result.textContent = decimalToBinary(5);
// 	}, 20000);
// };

// const checkUserInput = () => {
// 	const inputInt = parseInt(numberInput.value);
// 	// Update the condition in your if statement to use the logical NOT operator to check if numberInput.value is falsy.
// 	if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
// 		alert("Please provide a decimal number greater than or equal to 0");
// 		// After alerting the user if the number input is empty or the value is not a number, you can use the return keyword to break out of this function early. This will prevent future code in this function from running.
// 		return;
// 	}

// 	if (inputInt === 5) {
// 		showAnimation();
// 		return;
// 	}

// 	result.textContent = decimalToBinary(inputInt);
// 	numberInput.value = "";
// };

// convertBtn.addEventListener("click", checkUserInput);

// // The keydown event fires every time a user presses a key on their keyboard, and is a good way to add more interactivity to input elements.
// numberInput.addEventListener("keydown", (e) => {
// 	// Whenever an event listener is triggered by an event, an event object is created automatically. You don't always need to use this object, like with your click handler above, but it can be useful to access information about the event that was triggered.
// 	if (e.key === "Enter") {
// 		checkUserInput();
// 	}
// });

const convertNumber = () => {
	const input = numberInput.value.trim();
	const from = fromSystem.value;

	let decimalValue;

	// Konvertiere die Eingabe zuerst in Dezimal
	if (from === "decimal") {
		decimalValue = parseInt(input, 10);
	} else if (from === "binary") {
		decimalValue = parseInt(input, 2);
	} else if (from === "hexadecimal") {
		decimalValue = parseInt(input, 16);
	}

	// Überprüfen, ob die Konvertierung erfolgreich war
	if (isNaN(decimalValue)) {
		alert("Invalid number or format. Please enter a valid number.");
		return;
	}

	// Dezimal zu Binär und Hexadezimal konvertieren
	const binaryValue = decimalValue.toString(2);
	const hexValue = decimalValue.toString(16).toUpperCase();

	// Ergebnisse anzeigen
	resultDecimal.textContent = decimalValue.toString(10);
	resultBinary.textContent = binaryValue;
	resultHexadecimal.textContent = hexValue;

	// Eingabefeld leeren
	numberInput.value = "";
};

convertBtn.addEventListener("click", convertNumber);

numberInput.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		convertNumber();
	}
});
