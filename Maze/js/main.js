'use strict';

window.addEventListener('load' , function() {

	let border = new Border();
	let settings = new Settings();
	let game = new Game();
	let player = new Player();

	border.init(settings, game, player);
	game.init(border, player, settings);
	player.init(game, border);

	border.createTable();
	border.renderLevel();

	window.addEventListener('keydown', (event) => player.performStep(event) );
	document.querySelector('.startGame').addEventListener('click' , () => game.startGame());
	document.querySelector('.showWay').addEventListener('click' , () => border.showWay());


})







