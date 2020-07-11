'use strict';

window.addEventListener('load' , function() {

	//создаем объекты
	let settings = new Settings();

	let border = new Border();

	let snake = new Snake();

	let food = new Food();

	let game = new Game();

	// иницилизируем
	settings.init(border, food, game);
	snake.init(border, food, settings, game);
	border.init(settings, snake, food, game);
	food.init(settings, snake, game);
	game.init(border, snake, food, settings);

	// Первичный рендер

	food.setNewFoodCoordinates();
	border.renderCurrentState();
	border.writeMessage('Игра Змейка');

	// Задаем события

	let inputSettings = document.querySelectorAll('input');

	for ( let i = 0; i < inputSettings.length; i++) {
		inputSettings[i].addEventListener('change', () => settings.useNewSettings());
	}
	document.querySelector('.start').addEventListener('click' , event => game.startGame(event));
	document.querySelector('.pause').addEventListener('click' , event => game.stopGame(event));
	window.addEventListener('keydown', event => game.changeSnakeDirection(event));

})