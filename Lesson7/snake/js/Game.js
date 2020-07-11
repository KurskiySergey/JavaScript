class Game {

	// Конструктор
	constructor() {
		this.gameStatus = 'pause';
		this.animationIndex = null;
		this.animationSpeed = null;
	}
	// Методы 

	init(border, snake, food, settings) {
		this.border = border;
		this.snake = snake;
		this.food = food;
		this.settings = settings;

	}

	// Начинает игру

	startGame() {

		this.settings.readNewSettings();
		this.animationSpeed  = 200 / this.settings.getSnakeSpeed();

		if (this.stillPlaying()) {

			this.changeStatusGame();
			this.border.renderCurrentState();

			this.animationIndex = setInterval(() => this.snake.moveSnake() , this.animationSpeed);
		} else {
			this.startNewGame();
		}
		

	}

	// Начинает новую игру

	startNewGame() {
		this.changeStatusGame();
		this.snake.createNewSnake();
		this.border.clearCounter();
		this.border.writeMessage('Игра Змейка');
		this.border.renderCurrentState();
		this.animationIndex = setInterval(() => this.snake.moveSnake() , this.animationSpeed);
	}

	// Останавливает игру

	stopGame() {

		this.changeStatusGame();
		clearInterval(this.animationIndex);
	}

	// Меняет статус игры

	changeStatusGame() {

		this.gameStatus = this.gameStatus === 'pause' ? 'play' : 'pause';
	}

	// Меняет статус игры 

	changeSnakeDirection(event){

			let newDirection = event.code.slice(5).toLowerCase();
			if ( this.chekNewSnakeDirection(newDirection)) {
				this.snake.currentDirection = newDirection;
			}

		
	}

	// Проверяет наличие змеи по координатам

	checkForSnake(coordinateX, coordinateY) {

		for ( let i in this.snake.body) {
			if (this.snake.body[i].x == coordinateX && this.snake.body[i].y == coordinateY) {
				return true;
			}
		}

		return false;
	}

	// Проверка нового направления 

	chekNewSnakeDirection(newDirection) {
		if (this.snake.directions.includes(newDirection) && this.snake.currentDirection != newDirection) {

			if (this.snake.currentDirection === 'up' && newDirection !== 'down') {
				return true;
			} 

			if (this.snake.currentDirection === 'down' && newDirection !== 'up') {
				return true;
			}

			if (this.snake.currentDirection === 'left' && newDirection !== 'right') {
				return true;
			}

			if (this.snake.currentDirection === 'right' && newDirection !== 'left') {
				return true;
			}

			return false;

		}
	}


	// Проверка на победу

	checkForWin() {
		if (this.settings.getMaxSnakeSize() === +this.border.counter.innerHTML) {
			return true;
		}

		return false;
	}

	// Проверка что игра все еще идет

	stillPlaying() {
		if (document.querySelector('.message').innerHTML == "Игра Змейка") {
			return true;
		}

		return false;
	}

}