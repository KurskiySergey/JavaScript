'use strict';

function task4() {

	const products = [ 
		{ 
			id: 3,
			price: 127, 
			photos: [ 
				"1.jpg", 
				"2.jpg", 
			] 
		}, 
		{ 
			id: 5, 
			price: 499, 
			photos: [] 
		}, 
		{ 
			id: 10, 
			price: 26, 
			photos: [ 
				"3.jpg" 
			] 
		}, 
		{ 
			id: 8, 
			price: 78,
		}, 
	];

	let result = [];
	let max = products[0].price;

	products.forEach(

		function(currentValue) {

			if (currentValue.photos != undefined && currentValue.photos.length != 0) {
				result.push(currentValue);		
			}

		}
	)

	result.sort(

		function ( a, b) {
 			return a.price - b.price; // сортировка по возрастанию цены
		}
	)

	result.forEach(

		function (currentValue) {
			alert(currentValue.price);
		}
	)

}