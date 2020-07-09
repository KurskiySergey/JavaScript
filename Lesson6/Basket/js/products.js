'use strict';

function createNewProduct(name, src , id , price) {
	return `<li class="product">
				<span class = "name">${name}</span><br>
				<img src="${src}" alt = "${name}"><br>
				<span class = "price"> ${price} </span><span class = "currency"> рублей</span><br>
				<button class = "buy" data-id = "${id}" data-name = "${name}" data-price ="${price}">В корзину</button>
			</li>`;
}

let products = document.querySelector(".product_list");
let new_product = null;

for ( let i = 0; i < 3; i++) {
	products.insertAdjacentHTML('beforeend', createNewProduct(`Товар ${i+1}` , "img/photo.jpg" , i+1, 100 + i));
	products.children[i].addEventListener('click' , addToBasket);
}