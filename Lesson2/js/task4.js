'use strict';


function task4() {
	let operation = parseInt(prompt("Выберите операцию: 1 - сложение , 2 - вычитание, 3 - умножение , 4 - деление"));
	let number_1 = parseFloat(prompt("Введите первое число"));
	let number_2 = parseFloat(prompt("Введите второе число"));
	let result = null;

	switch (operation) {

		case 1:
			result = getSumm(number_1, number_2);
			break;
		case 2:
			result = getDiff(number_1, number_2);
			break;
		case 3:
			result = getMult(number_1, number_2);
			break;
		case 4:
			result = getDiv(number_1, number_2);
			break;
		default:
			alert("Операция выбрана некорректно");
			return 0;
	}

	alert ("result = " + result);
}


function getSumm(arg1, arg2) {

	if (  Number.isFinite(arg1) &&  Number.isFinite(arg2) ) {
		return arg1 + arg2;
	} else {
		return "Некорректно введенные данные";
	}
	
}

function getDiff(arg1, arg2) {
	if (  Number.isFinite(arg1) &&  Number.isFinite(arg2) ) {
		return arg1 - arg2;
	} else {
		return "Некорректно введенные данные";
	}
}

function getMult(arg1, arg2) {
	if (  Number.isFinite(arg1) &&  Number.isFinite(arg2) ) {
		return arg1 * arg2;
	} else {
		return "Некорректно введенные данные";
	}
}

function getDiv(arg1, arg2) {
	if (  Number.isFinite(arg1) &&  Number.isFinite(arg2) ) {
		if (arg2 != 0) {
			return arg1 / arg2;
		} else {
			return "На ноль делить нельзя";
		}
		
	} else {
		return "Некорректно введенные данные";
	}
}