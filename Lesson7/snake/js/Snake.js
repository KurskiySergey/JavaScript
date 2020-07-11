class Snake {

	// Конструктор
	constructor() {

		this.body = [
			{
				x : 0, 
				y : 0,
			}
		];

		this.directions = ['up', 'down' , 'left' , 'right'];
		this.currentDirection = 'down';	
	}

	// Методы

	init(border, food, settings, game) {
		this.border = border;
		this.food = food;
		this.settings = settings;
		this.game = game;
	}

	// Добавляет в хвот новый элемент

	addTail(coordinates) {

		this.body.push(coordinates);

	}

	// Двигает змею по заданном направлению

	moveSnake() {

		let newHeadPosition = {
				x : this.body[0].x,
				y : this.body[0].y
			}

		switch(this.currentDirection) {


			case 'up' :

				newHeadPosition.y--;
				if (this.checkForWall(newHeadPosition)) {
					newHeadPosition.y = this.settings.getBorderSize() - 1;
				}
				break;

			case 'down' :
				newHeadPosition.y++;
				if (this.checkForWall(newHeadPosition)) {
					newHeadPosition.y = 0;
				}
				break;

			case 'right' :
				newHeadPosition.x++;
				if (this.checkForWall(newHeadPosition)) {
					newHeadPosition.x = 0;
				}
				break;

			case 'left' :
				newHeadPosition.x--;
				if (this.checkForWall(newHeadPosition)) {
					newHeadPosition.x = this.settings.getBorderSize() - 1;
				}
				break;

			default :
				throw new Error("Неправильное направление");
				break;

		}

		if ( !this.game.checkForSnake(newHeadPosition.x, newHeadPosition.y)) {
			this.body.unshift(newHeadPosition);
			this.body.pop();
			this.border.renderCurrentState();
		} else {
			this.border.writeMessage('Вы проиграли');
			this.game.stopGame();
		}

	}

	// проверка на наличие стены

	checkForWall(newHeadCoordinates) {

		if (newHeadCoordinates.x < 0 || newHeadCoordinates.x == this.settings.getBorderSize() || 
			newHeadCoordinates.y < 0 || newHeadCoordinates.y == this.settings.getBorderSize()) 
		{
			return true;

		}

		return false;

	}

	// Проверка что голова змеи добралась до еды

	headOnFood() {

		if (this.body[0].x === this.food.currentFoodCoordinates.x && this.body[0].y === this.food.currentFoodCoordinates.y) {
			return true;
		}

		return false;

	}


	// Создает новую змею

	createNewSnake() {

		this.body = [
			{
				x : 0, 
				y : 0,
			}
		];

		this.currentDirection = 'down';	
	}

}