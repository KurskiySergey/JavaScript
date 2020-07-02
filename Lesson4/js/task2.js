'use strict';

//es5

function Product( name , price ) {
	this.name = name;
	this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
	this.price = this.price - (25/100)*this.price;
}

Product.prototype.showInfo = function () {
	alert(`name = ${this.name} price = ${this.price}`);
}


//es6

class ProductEs6  {
	constructor ( name , price ) {
		this.name  = name;
		this.price = price;
	};

	make25PercentDiscount() {
		this.price = this.price - (25/100)*this.price;
	};

	showInfo() {
		alert(`name = ${this.name} price = ${this.price}`);
	};
}


function task2() {

	let product1 = new Product("Apple", 125);
	product1.showInfo();
	product1.make25PercentDiscount();
	product1.showInfo();

	let product2 = new ProductEs6("Orange", 100);
	product2.showInfo();
	product2.make25PercentDiscount();
	product2.showInfo();


}