'use strict';

window.addEventListener('load', function() {

	let settings = new Settings();
	let border = new Border();
	let player = new Player();
	let game = new Game();


	border.init(settings, player);
	player.init(border, game);
	game.init(settings, player, border);

	document.querySelector('button').addEventListener('click' , event => game.start(event)); // Кнопка начала игры
	border.renderBorder();

});