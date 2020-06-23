'use strict';


function task3() {

	let a = parseInt(prompt("Введите первое целочисленне число"));
	let b = parseInt(prompt("Введите второе целочисленне число"));
	alert ( Number.isFinite(12.5));

	if ( a >= 0 && b >=0 ) { // Если оба положительны то

		alert("a-b = " + (a-b));

	} else if ( a < 0 && b < 0 ) { // Если оба отрицательны

		alert("a*b = " + (a*b));

	} else { 

		if ( isNaN(a) || isNaN(b) ) { // Eсли любой из них не число то ошибка

			alert("Данные введены некорректно");

		} else { // В противном случае они всегда разных знаков

			alert("a+b = " + (a+b));
		}
		
	}

}