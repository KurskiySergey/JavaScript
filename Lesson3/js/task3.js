'use strict';

function task3() {

	const products = [
		{
			id: 3,
			price: 200,
		},
		{
			id: 4,
			price: 900,
		},
		{
			id: 1,
			price:1000,
		},
	];

	let discount = 15;

	products.forEach(

			function( currentValue ) {
				alert("id = " + currentValue.id + " old price = " + currentValue.price + " new price = " + (currentValue.price - (discount/100) * currentValue.price));
			}

		)

}