'use strict';

function task1() {

	let i;
	let phrase = null;

	for ( i = 0 ; i <= 10 ; i++) {
		if (i == 0 ) {
			phrase = "- это ноль";
		} else if ( i % 2 == 0) {
			phrase = "- это четное число";
		} else {
			phrase = "- это нечетное число";
		}

		alert(i + " " + phrase);

	}

}