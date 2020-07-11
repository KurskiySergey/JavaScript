class Border {

	// Конструктор
	constructor() {
		this.table = document.querySelector('.border');
		this.counter = document.querySelector('.currentCount');
	}
	// Методы 

	init(settings, snake, food, game) {
		this.settings = settings;
		this.snake = snake;
		this.food = food;
		this.game = game;
	}

	// Рендерит текущее состояние

	renderCurrentState() {

		if (this.snake.headOnFood()) {
			this.snake.addTail(this.food.currentFoodCoordinates);
			this.food.setNewFoodCoordinates();
			this.updateCounter();

			if (this.game.checkForWin()) {
				this.writeMessage('Вы победили');
				this.game.stopGame();
			}
		}

		this.clearBorder();
		this.renderBorder();
		this.renderSnake();
		this.renderFood();

	}

	// Рендерит поле

	renderBorder() {

		for ( let row = 0; row < this.settings.getBorderSize(); row++) {
			let tr = document.createElement('tr');

			for ( let col = 0 ; col < this.settings.getBorderSize(); col++) {
				tr.appendChild(document.createElement('td'));
			}

			this.table.appendChild(tr);
		}

	}

	// Рендерит змею

	renderSnake() {

		for ( let i in this.snake.body) {

			this.table.children[this.snake.body[i].y].children[this.snake.body[i].x].classList.add('snake');

		}
	}

	// Рендерит еду

	renderFood() {

		this.table.children[this.food.currentFoodCoordinates.y].children[this.food.currentFoodCoordinates.x].classList.add('food');

	}

	// Увеличивает счетчик

	updateCounter() {
		this.counter.innerHTML = +(this.counter.innerHTML) + 1;
	}

	// Изменяет максимальную длину змеи

	changeMaxSnakeSize() {
		document.querySelector('.maxCount').innerHTML = this.settings.getMaxSnakeSize();
	}


	// Выводит сообщение

	writeMessage(message) {
		document.querySelector('.message').innerHTML = message;
	}

	// Очищает доску

	clearBorder() {
		this.table.innerHTML = "";
	}

	// Очищает счетчик
	clearCounter() {
		this.counter.innerHTML = 1;
	}

	// Свойства

}