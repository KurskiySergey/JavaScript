'use strict';

function task5() {
	let operation = (prompt("Выберите операцию: summ - сложение , difference - вычитание, multiplication - умножение , division - деление"));
	let number_1 = parseFloat(prompt("Введите первое число"));
	let number_2 = parseFloat(prompt("Введите второе число"));
	alert( "result = " + mathOperation(number_1, number_2, operation) );
}

function mathOperation(arg1, arg2, operation) {

	let result = null;

	switch (operation) {

		case "summ":
			result = getSumm(arg1, arg2);
			break;
		case "difference":
			result = getDiff(arg1, arg2);
			break;
		case "multiplication":
			result = getMult(arg1, arg2);
			break;
		case "division":
			result = getDiv(arg1, arg2);
			break;
		default:
			alert("Операция выбрана некорректно");
	}

	return result
}