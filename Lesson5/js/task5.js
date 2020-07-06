'use strict';

// переменная cls определена в task4

let task5 = document.querySelector('.task5');
let new_square = null;
let new_line = null;

function createSquare (color, text = "") {
	return `<div class = "square" style = "background-color: ${color}">${text}</div>`;
}

for ( let i = 0; i < 9; i++) {

	new_line = task5.appendChild(document.createElement('div')); // создаем линию в виде родительского блока
	task5.appendChild(cls);
	new_line.classList.add("square_line");

	for (let j = 0; j < 9; j++) { // создаем шахматную доску в родительском блоке

		if ( j == 8 && i != 0 ) {

			new_square = createSquare("white", `${i}`); // если добавляется последний элемент строки и строка не является первой
		} 
		else if ((j + i) % 2 == 0 && i != 0) { // условие чередования белого и черного при условии что строка не является первой

			new_square = createSquare("grey"); 

		} 
		else if (i != 0 ){

			new_square = createSquare("brown"); 

		} else if (j != 8) { // если строка первая по счету то прописываем буквы
			new_square = createSquare("white", `${String.fromCharCode(72 - j)}`);
		}
		else  // оставшийся случай - незадействованный квадрат на стыке чисел и букв
		{
			new_square = createSquare("white");
		}


		new_line.insertAdjacentHTML('afterbegin' ,new_square); // создаем соответствующий элемент
	}
	
}

// заполнение фигурами....

let lines = task5.querySelectorAll(".square_line");

// Начальная позиция: Нужны 1 , 2 , 7 и 8 элементты


for ( let  i = 1; i < 9; i++ ) {
	lines[2].children[i].innerHTML = `${String.fromCharCode(9817)}`;
	lines[7].children[i].innerHTML = `${String.fromCharCode(9823)}`;

	switch (i) {

		case 1:
			lines[1].children[i].innerHTML = `${String.fromCharCode(9814)}`;
			lines[1].children[9-i].innerHTML = `${String.fromCharCode(9814)}`;
			lines[8].children[i].innerHTML = `${String.fromCharCode(9820)}`;
			lines[8].children[9-i].innerHTML = `${String.fromCharCode(9820)}`;
			break;

		case 2:
			lines[1].children[i].innerHTML = `${String.fromCharCode(9816)}`;
			lines[1].children[9-i].innerHTML = `${String.fromCharCode(9816)}`;
			lines[8].children[i].innerHTML = `${String.fromCharCode(9822)}`;
			lines[8].children[9-i].innerHTML = `${String.fromCharCode(9822)}`;
			break;

		case 3:
			lines[1].children[i].innerHTML = `${String.fromCharCode(9815)}`;
			lines[1].children[9-i].innerHTML = `${String.fromCharCode(9815)}`;
			lines[8].children[i].innerHTML = `${String.fromCharCode(9821)}`;
			lines[8].children[9-i].innerHTML = `${String.fromCharCode(9821)}`;
			break;

		case 4:
			lines[1].children[i].innerHTML = `${String.fromCharCode(9813)}`;
			lines[8].children[i].innerHTML = `${String.fromCharCode(9819)}`;
			break;

		case 5:
			lines[1].children[i].innerHTML = `${String.fromCharCode(9812)}`;
			lines[8].children[i].innerHTML = `${String.fromCharCode(9818)}`;
			break;

		default:
			break;

	}
}

