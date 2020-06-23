'use strict';

function task6() {

	let money = parseInt(prompt("Введите сумму, которую хотите положить на счет"));
	let ruble_phrase = null;

	let last_number = money % 10; // Находим последнюю цифру 
	let penultimate_number = ((money - last_number) / 10) % 10; // Находим предполследнюю цифру

	if (penultimate_number == 1 ) { // если предпоследняя = 1 то всегда используется рублей. 11 рублей , 12 рублей и т.д.
		ruble_phrase = "рублей";
	} else if (last_number == 1) {  // иначе если последняя цифра 1 то будет рубль. Например 101 рубль 
		ruble_phrase = "рубль";
	} else if (last_number > 1 && last_number < 5) { // от 2 до 4 - рубля. Например 10024 рубля
		ruble_phrase = "рубля";
	} else {	// от 5 до 9 и включая 0 - рублей.  Например 123458 рублей

		if ( isNaN(money) ) {
			alert("Некорректное значение суммы");
			return 0;
		}

		ruble_phrase = "рублей";
	}

	alert("Ваша сумма в " + money + " " + ruble_phrase + " успешно зачислена");

}