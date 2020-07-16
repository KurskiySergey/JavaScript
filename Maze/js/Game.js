class Game {

	//Конструктор

	// Методы

	init(border, player, settings) {

		this.border = border;
		this.player = player;
		this.settings = settings;
	}


	// Расчитвает расстояние между двумя клетками
	calculateDistance(startCell, finishCell) {
		let distSquare = (startCell.x - finishCell.x)*(startCell.x - finishCell.x) + (startCell.y - finishCell.y)*(startCell.y - finishCell.y);
		return Math.sqrt(distSquare);
	}


	// Проверяет что клетка является частью построенного пути
	checkForWay(cellCoordinates) {

		for ( let element in this.border.way) {
			if (this.border.way[element].x == cellCoordinates.x && this.border.way[element].y == cellCoordinates.y) {
				return true;
			}
		}

		return false;
		
	}


	// Проверяет наличие стены при ходе игрока
	checkForWall(direction) {

		switch (direction) {

			case 'ArrowUp' :
				if (this.player.currentPosition.y - 1 >= 0) {
					if ( this.border.table.children[this.player.currentPosition.y].children[this.player.currentPosition.x].classList.contains('upBorder') || 
						this.border.table.children[this.player.currentPosition.y - 1].children[this.player.currentPosition.x].classList.contains('downBorder')) {
						return true;
					}
				} else {
					return true;
				}

				break;

			case 'ArrowDown' : 
				if (this.player.currentPosition.y + 1 < this.settings.getBorderSize()) {

					if ( this.border.table.children[this.player.currentPosition.y].children[this.player.currentPosition.x].classList.contains('downBorder') || 
						this.border.table.children[this.player.currentPosition.y + 1].children[this.player.currentPosition.x].classList.contains('upBorder')) {
						return true;
					}
				} else {
					return true;
				}

				break;

			case 'ArrowRight' :
				if (this.player.currentPosition.x + 1 < this.settings.getBorderSize()) {
					if ( this.border.table.children[this.player.currentPosition.y].children[this.player.currentPosition.x].classList.contains('rightBorder') || 
						this.border.table.children[this.player.currentPosition.y].children[this.player.currentPosition.x + 1].classList.contains('leftBorder')) {
						return true;
					}
				} else {
					return true;
				}

				break;

			case 'ArrowLeft' :
				if ( this.player.currentPosition.x - 1 >= 0) {
					if ( this.border.table.children[this.player.currentPosition.y].children[this.player.currentPosition.x].classList.contains('leftBorder') || 
						this.border.table.children[this.player.currentPosition.y].children[this.player.currentPosition.x - 1].classList.contains('rightBorder')) {
						return true;
					}
				} else {
					return true;
				}

				break;
		}

		return false;
	}

	// Начинает игру
	startGame() {

		this.border.clearBorder();
		this.border.clearWay();
		this.border.createTable();
		this.border.renderLevel();
		this.border.showMessage('Лабиринт');
	}

	// Заканчивает игру
	stopGame() {
		this.border.showMessage('Победа');
	}

	// Проверка на победу
	checkForWin() {

		if ( this.player.currentPosition.x == this.settings.getFinishPos().x && this.player.currentPosition.y == this.settings.getFinishPos().y) {
			return true;
		}

		return false;

	}


}