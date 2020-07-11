class Game {
	// конструктор

	// Методы

	init(settings, player, border) {
		this.settings = settings;
		this.player = player;
		this.border = border;
		this.status = 'stopped';
	}


	// Функция считывания настроек
	readSettings() {

		let namesInfo = document.querySelectorAll('.name');
		let dimention = document.querySelector('select');

		let size = +dimention[dimention.options.selectedIndex].innerHTML[0]; 
		let names = [namesInfo[0].value, namesInfo[1].value];

		this.settings.setPlayersName(names); // Назначаем новые настройки
		this.settings.setNewNumber(size);

	}

	// Функция проверки победителя
	playerIsWon() {

		let currentRow = +this.border.clickedCellData.dataset.row;
		let currentCol = +this.border.clickedCellData.dataset.col;

		if (this.checkRowLine(currentRow) || this.checkColLine(currentCol) || this.checkDiagLine(currentCol, currentRow)) {
			return true;
		}

		return false;

	}

	// Проверка что строка - победная
	checkRowLine( currentRow ) {

		let lineIsWon = true;

		for ( let col = 0; col < this.settings.getNumber(); col++) {
			if( !(this.border.table.children[currentRow].children[col].innerHTML === this.player.playerId)) {
				lineIsWon = false;
				break;
			}
		}

		return lineIsWon
	}
	// Проверка что столбец- победный
	checkColLine( currentCol ) {

		let colIsWon = true;

		for (let row = 0; row<this.settings.getNumber(); row++) {
			if ( !(this.border.table.children[row].children[currentCol].innerHTML === this.player.playerId)) {
				colIsWon = false;
				break;
			}
		}

		return colIsWon;

	}
	// Проверка что главные диагонали победные
	checkDiagLine(currentCol, currentRow) {

		let diagMainIsWon = true;
		let diagIsWon = true;

		if (currentCol == currentRow) {

			for ( let row = 0; row < this.settings.getNumber(); row++) {

				if(!(this.border.table.children[row].children[row].innerHTML === this.player.playerId)) {
					diagMainIsWon = false;
					break;
				}

			}

		} else {
			diagMainIsWon = false;
		}

		if ( currentCol + currentRow == this.settings.getNumber() - 1) {

			for ( let row = 0; row < this.settings.getNumber(); row++ ) {

					if (!(this.border.table.children[row].children[this.settings.getNumber()-1-row].innerHTML === this.player.playerId)) {
						diagIsWon = false;
						break;
					}
			}

		} else {
			diagIsWon = false;
		}

		return diagMainIsWon || diagIsWon;

	}

	// Смена стауса игры
	changeStatus() {
		this.status = this.status === 'playing' ? 'stopped' : 'playing';
	}


	// Функция начала игры
	start() {

		this.border.clearBorder();
		this.readSettings();
		this.changeStatus();
		this.border.changeNameText();
		this.border.renderBorder();
	}

	// Функция остановки игры
	stop() {
		this.changeStatus();
		this.border.writeWinnerName();
	}


}