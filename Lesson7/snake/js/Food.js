class Food {

	// Конструктор

	constructor() {
		this.currentFoodCoordinates = null;
	}

	// Методы 

	init(settings, snake, game) {
		this.settings = settings;
		this.snake = snake;
		this.game = game;
	}

	// Задает новые координаты еды

	setNewFoodCoordinates() {
			while(true) {
				let xCoord = Math.floor(Math.random() * this.settings.getBorderSize());
				let yCoord = Math.floor(Math.random() * this.settings.getBorderSize());

				if (!this.game.checkForSnake(xCoord, yCoord)) {
					this.currentFoodCoordinates = {
						x : xCoord,
						y : yCoord
					}

					break;
				}
			}

	}



	// Свойства 


	getFoodCoordinates() {
		return this.currentFoodCoordinates;
	}

}