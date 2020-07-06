'use strict';

let task3 = document.querySelector('.task3');
let test = document.createElement("div");
let buttonPlay = document.createElement('button');
let buttonStop = document.createElement('button');
let timerId = null;
let stop = function (event) {
	clearInterval(timerId);
}
let play = function (event) {
	timerId = setInterval ( turnOn , 500);
}
let turnOn = function () {
	test.classList.toggle("show");
}
buttonPlay.innerHTML = 'Play';
buttonStop.innerHTML = 'Stop';
test.classList.add("window");
task3.appendChild(buttonPlay);
task3.appendChild(buttonStop);
task3.appendChild(test);
buttonPlay.addEventListener('click' , play)
buttonStop.addEventListener('click' , stop );