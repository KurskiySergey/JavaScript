'use strict'

function task2() {

	let name = prompt("Введите имя");
	let admin = null;

	alert("Перед копрованием name = " + name + " admin = " + admin);


	admin = name;
	name = null;

	alert("После коппирования и удаления значения из имени name = " + name + " admin = " + admin);

}