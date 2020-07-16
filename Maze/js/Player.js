class Player {
	// Конструктор

	constructor() {
		this.currentPosition = {
			x : 0,
			y : 0
		};

	}

	// Методы

	init(game, border) {
		this.game = game;
		this.border = border;
	}


	// Выполняет шаг
	performStep(event) {

		let currentDirection = event.code;

		if (!this.game.checkForWall(currentDirection)) {

			this.border.clearPlayer();

			switch (currentDirection) {

				case 'ArrowUp' :
					this.currentPosition.y--;
					break;

				case 'ArrowDown' :
					this.currentPosition.y++;
					break;

				case 'ArrowRight' :
					this.currentPosition.x++;
					break;

				case 'ArrowLeft' :
					this.currentPosition.x--;
					break;
			}

			if (this.game.checkForWin()) {

				this.game.stopGame();

			} else {
				this.border.renderPlayer()
			}

			
		}

	}

	// Свойства 

	// Возвращает текущую позицию
	getPlayerPosition() {
		return this.currentPosition;
	}
}