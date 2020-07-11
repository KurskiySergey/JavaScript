class Settings {

	// Конструктор
	constructor( numberOfElements = 3 , players = ["Player1" , "Player2"]) {
		this.numberOfElements = numberOfElements;
		this.players = players;
		this.checkForError();
	}

	// Методы

	// Проверка на ошибку
	checkForError() {
		if (this.numberOfElements < 3) {
			throw new Error('Число строк и столбцов не может быть меньше 3');
		}
	}

	// Свойства


	// Задаем размеры поля
	setNewNumber( value ) {
		this.numberOfElements = value;
		this.checkForError();
	}

	// Задаем имена игроков
	setPlayersName( names ) {
		this.players = names;
	}

	// Получить размеры поля
	getNumber() {
		return this.numberOfElements;
	}

	// Получить имена
	getNames() {
		return this.players;
	}

}