class Settings {

	//Конструктор

	constructor() {
		this.boardSize = 30;
		this.startPos = {x : 0, y : 0};
		this.finishPos = {x : (this.boardSize - 1) , y : (this.boardSize - 1)};
		this.maxDivision = 5; // Количество реперных точек
	}

	// Свойства 

	getBorderSize() {
		return this.boardSize;
	}

	getStartPos() {
		return this.startPos;
	}

	getFinishPos() {
		return this.finishPos;
	}

	getMaxDivision() {
		return this.maxDivision;
	}

}