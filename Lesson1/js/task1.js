'use strict'

function task1() {

	let temperature = prompt("Введите температуру в градусах Цельсия");
	temperature = parseFloat(temperature);

	alert("Температура по Фаренгейту = " +((9/5)*temperature + 32) );
}