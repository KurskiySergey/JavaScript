class Border {

	//Конструктор

	constructor() {
		this.table = document.querySelector('.border');
		this.list = ['upBorder' , 'downBorder' , 'leftBorder' , 'rightBorder'];
		this.way = [
			{
				x : 0,
				y : 0
			}
		];
	}
	
	// Методы

	init (settings, game,player) {
		this.settings = settings;
		this.game = game;
		this.player = player;
	}

	// Рендерит уровень
	renderLevel() {

		this.createWay();
		this.renderBoard();

	}

	// Рендерит границы
	renderBoard() {

			for ( let i = 0 ; i < this.settings.getBorderSize(); i++ ) {
				for ( let j = 0 ; j < this.settings.getBorderSize(); j++) {

					while(true) {

						let borderIndex = Math.floor(Math.random()*this.list.length);
						let check = false;

						switch ( borderIndex ) {
							case 0: 
								check = this.game.checkForWay({x : j, y : i - 1});
								break;

							case 1:
								check = this.game.checkForWay({x : j, y : i + 1});
								break;

							case 2:
								check = this.game.checkForWay({x : j - 1, y : i });
								break;

							case 3:
								check = this.game.checkForWay({x : j + 1, y : i });
								break;
						}

						if (!(this.game.checkForWay({x : j, y : i}) && check)) {
							this.table.children[i].children[j].classList.add(this.list[borderIndex]);
							break;
						}
					}
					
				}
			} 

	}

	// Создает таблицу
	createTable() {
		for ( let i = 0 ; i < this.settings.getBorderSize(); i++) {
			let tr = document.createElement('tr');
			for ( let j = 0 ; j < this.settings.getBorderSize(); j++) {
				let td = document.createElement('td');
				tr.appendChild(td);
			}
			this.table.appendChild(tr);
		}

		this.table.children[0].children[0].classList.add('start');
		this.table.children[this.settings.getBorderSize()-1].children[this.settings.getBorderSize()-1].classList.add('finish');
	}

	// Создает путь к выходу
	createWay() {

		let start = this.settings.getStartPos();
		let finish = this.settings.getFinishPos();
		let maxDivision = this.settings.getMaxDivision();
		let size = this.settings.getBorderSize();
		let previousTr = 0;
		let previousTd = 0;


		// Создает реперные точки
		for( let i = 0; i < maxDivision; i++) {

			let indexTd = Math.floor(Math.random()*size);
			let indexTr = Math.floor(Math.random()*((size - 1) / maxDivision) + ((size - 1)/maxDivision)*i);
			let startCell = {x : previousTd , y : previousTr};
			let finishCell = {x : indexTd , y : indexTr};
			this.createWayBetweenTwoCells(startCell, finishCell);
			previousTr = indexTr;
			previousTd = indexTd;

		}

		this.createWayBetweenTwoCells({x : previousTd, y : previousTr} , finish);

		if ( this.way[this.way.length-1].x != finish.x || this.way[this.way.length-1].y != finish.y) {
			this.setNewFinishPoint();
		}
	}

	// Генерит путь между двумя реперными точками
	// По принциму минимизации расстояния
	createWayBetweenTwoCells(startCell ,finishCell) {

		let distance = this.game.calculateDistance(startCell, finishCell);
		let currentTr = startCell.y;
		let currentTd = startCell.x;

		while(distance != 0 ) {

			let index = Math.floor(Math.random()*this.list.length);

			switch (index) {
				case 0:

					if (currentTr != 0) {
						currentTr -= 1;
					}
					break;

				case 1:

					if (currentTr != this.settings.getBorderSize()-1) {
						currentTr += 1;
					}
					break;

				case 2:

					if (currentTd != 0) {
						currentTd -= 1;
					}
					break;

				case 3:

					if (currentTd != this.settings.getBorderSize()-1) {
						currentTd += 1;
					}
					break;
			}

			let currentCell = this.table.children[currentTr].children[currentTd];

			if ( !currentCell.classList.contains('way')) {

				if ( currentTd != 0 || currentTr != 0) {

					if ( this.game.calculateDistance({x: currentTd, y: currentTr} , finishCell) < distance) {
						//currentCell.classList.add('way');
						this.way.push({x : currentTd, y : currentTr});
						distance = this.game.calculateDistance({x : currentTd , y : currentTr} , finishCell );
					}

				}
				
			} 
			currentTr = this.way[this.way.length - 1].y;
			currentTd = this.way[this.way.length - 1].x;

		}

	}


	// Задает новое значение финиша
	setNewFinishPoint() {
		this.table.children[this.settings.getBorderSize()-1].children[this.settings.getBorderSize()-1].classList.remove('finish');
		this.table.children[this.way[this.way.length-1].y].children[this.way[this.way.length-1].x].classList.add('finish');
	}


	// Удаляет игрока с поля
	clearPlayer() {
		this.table.children[this.player.currentPosition.y].children[this.player.currentPosition.x].classList.remove('player');
	}

	// Удаляет таблицу с поля
	clearBorder() {
		this.table.innerHTML = '';
	}

	// Очищает путь
	clearWay() {
		this.way = [
			{
				x : 0,
				y : 0
			}
		];
	}

	// Рендерит игрока
	renderPlayer() {
		this.table.children[this.player.currentPosition.y].children[this.player.currentPosition.x].classList.add('player');
	}


	// Показывает путь
	showWay() {

		for ( let element in this.way) {

			this.table.children[this.way[element].y].children[this.way[element].x].classList.add('way');
		}

	}

	// Выводит сообщение
	showMessage(message) {
		document.querySelector('.message').innerHTML = message;
	}

}