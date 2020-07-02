'use strict';


function NumberInfo( value ) {
	this.units = null;
	this.tens = null;
	this.hundreds = null;

	if (Number.isInteger(value)) {

		if (value >= 0 && value <= 999) {
			this.units = value % 10;
			value = (value - this.units) / 10;
			this.tens = value % 10;
			value = (value - this.tens) / 10;
			this.hundreds = value % 10;
		} else {
			console.log("Вне диапазона");
			alert("Вне диапазона");
		}


	} else {
		console.log("Не челое число");
		alert("Не челое число");
	}
}


function task1() {

	let number = parseInt(prompt("Введите челое число в диапазоне [0, 999]"));
	let numbInfo = new NumberInfo( number );

	alert(`Units: ${numbInfo.units}`);
	alert(`Tens: ${numbInfo.tens}`);
	alert(`Hundreds: ${numbInfo.hundreds}`);

}