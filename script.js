const num1 = prompt("nummer 1");
const num2 = prompt("nummer 2");
const sum = Number(num1) + Number(num2);

if (sum === 72) {
	console.log(`Du är en delfin som är ${sum} år`); // "Du är en delfin som är ", sum, " år"
} else {
	console.log(`${sum}`);
}
