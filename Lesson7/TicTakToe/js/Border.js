class Border {

	// Конструктор

	// Методы 
	init(settings, player) {
		this.settings = settings;
		this.player = player;
		this.table = document.querySelector('table');
		this.clickedCellData = null;
		this.setEventListener();
	}

	// Нарисовать поле

	renderBorder() {

		for ( let row = 0; row < this.settings.getNumber(); row++ ) {
			let tr = document.createElement('tr');
			for (let col = 0; col < this.settings.getNumber(); col++) {
				let td = document.createElement('td');
				td.dataset.row = row.toString();
				td.dataset.col = col.toString();
				tr.appendChild(td);
			}
			this.table.appendChild(tr);
		}
	}

	// Добавить новые значения на поле
	updateBorder() {

			this.clickedCellData.innerHTML = this.player.playerId;

	}

	// Очистить доску
	clearBorder() {
		this.table.innerHTML = '';
	}

	// Назначить событие на заданную таблицу

	setEventListener() {
		this.table.addEventListener('click' , event => this.player.playerMove(event));
	}

	// Проверка на правильность нажатия

	checkCellData(event) {
		return event.target.tagName === 'TD' && event.target.innerHTML === '';
	}


	// Изменить имя ходящего игрока
	changeNameText() {
		let text = document.querySelector('.info_player');
		let index = this.player.playerId === 'X' ? 0 : 1;
		text.innerHTML = `Ходит ${this.settings.getNames()[index]}`; 
	}

	// Записать имя победителя
	writeWinnerName() {
		let text = document.querySelector('.info_player');
		let index = this.player.playerId === 'X' ? 0 : 1;
		text.innerHTML = `Победил игрок - ${this.settings.getNames()[index]}`;
	}

	// Свойства

	// Назначить новую ячейку
	setCellData(data) {
	  this.clickedCellData = data;
	}

}