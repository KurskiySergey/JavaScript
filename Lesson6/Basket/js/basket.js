'use strict';

let isHidden = true;

let basketProducts = [];

function showInfo() {
	if (isHidden) {
		document.querySelector('.hidden').style.display = 'block';
		isHidden = false;
	} else {
		document.querySelector('.hidden').style.display = 'none';
		isHidden = true;
	}
}

function createNewLine(id , name , price) {
		return ` <tr class = "row" id = "${id}">
                             	<th class="column">${id}</th>
                                <th class="column">${name}</th>
                                <th class="column price">${price}</th>
                                <th class="column">${1}</th>
                                <th class="column"><button onclick="deleteFromBasket(${id});"> Удалить<button></th>
                            </tr>`
	
}

function addToBasket(event) {

	let data = event.target.attributes;
	if (basketProducts.includes(data[1].value)) {
		let currentProduct = document.getElementById(`${data[1].value}`);
		let ammount = parseInt(currentProduct.children[3].innerHTML) + 1;
		currentProduct.children[2].innerHTML = ammount*parseInt(data[3].value);
		currentProduct.children[3].innerHTML = ammount;
		
	} else {
		basketProducts.push(data[1].value);
		document.querySelector('tbody').insertAdjacentHTML('beforeend', createNewLine(`${data[1].value}` , `${data[2].value}` , `${data[3].value}`));
	}

	let prices = document.querySelectorAll("th.price");
	let total = 0;

	prices.forEach( function (element) {
		total += parseInt(element.innerHTML);
	});

	document.querySelector('.total').innerHTML = total;
}

function deleteFromBasket(id) {
	let toDeleteProduct = document.getElementById(id);
	let deletePrice = parseInt(toDeleteProduct.children[2].innerHTML);
	let currentTotalPrice = document.querySelector(".total");
	currentTotalPrice.innerHTML = parseInt(currentTotalPrice.innerHTML) - deletePrice;
	toDeleteProduct.remove();
	basketProducts.pop(id);
}

document.querySelector('.basket').addEventListener('click' , showInfo);

