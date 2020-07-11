class Player {

// Конструктор

// Методы

	init(border, game) {
		this.border = border;
		this.game = game;
		this.playerId = 'X';
	}

	// Ход игрока

	playerMove(event) {

		if (this.border.checkCellData(event) && this.game.status === 'playing') {

			this.border.setCellData(event.target);
			this.border.updateBorder();
			if (this.game.playerIsWon()) {
				this.game.stop();
			} else {
				this.changePlayerId();
				this.border.changeNameText();
			}
			
		}

	}

	// Смена игрока после хода

	changePlayerId() {
		this.playerId = this.playerId === 'X' ? 'O' : 'X';
	}

}