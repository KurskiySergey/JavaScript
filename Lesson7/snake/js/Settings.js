class Settings {

	//Конструктор
	constructor () {
		this.borderSize = +document.querySelector('.borderSize').value;
		this.maxSnakeSize = +document.querySelector('.snakeSize').value;
		this.snakeSpeed = +document.querySelector('.snakeSpeed').value;
	}

	// Методы

	init(border, food, game) {
		this.border = border;
		this.food = food;
		this.game = game;
	}

	// Считывает новые настройки

	readNewSettings() {
		this.borderSize = +document.querySelector('.borderSize').value;
		this.maxSnakeSize = +document.querySelector('.snakeSize').value;
		this.snakeSpeed = +document.querySelector('.snakeSpeed').value;
	}

	// Использует новые настройки

	useNewSettings() {
		this.game.stopGame();
		this.readNewSettings();

		if ( this.checkSettings()) {
			this.food.setNewFoodCoordinates();
			this.border.writeMessage('Настройки изменились<br>Нажмите Старт для начала игры');
			this.border.changeMaxSnakeSize();
			this.border.renderCurrentState();
		} else {
			this.border.writeMessage('Неверные настройки');
		}
		
	}

	// Проверка настроек

	checkSettings() {
		if (this.borderSize >= 10 && this.borderSize <= 20 &&
			this.maxSnakeSize >= 10 && this.maxSnakeSize <= 30 &&
			this.snakeSpeed >= 1 && this.snakeSpeed <= 5) {

			return true;
		}

		return false;
	}

	// Свойства

	getBorderSize() {
		return this.borderSize;
	}

	getMaxSnakeSize() {
		return this.maxSnakeSize;
	}

	getSnakeSpeed() {
		return this.snakeSpeed;
	}

}