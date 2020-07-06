'use strict';

let new_product = null;
let task4 = document.querySelector('.task4');
let cls = document.createElement('div');
cls.classList.add('cls');
task4.appendChild(cls);

let showMore = function (event) {
	if (event.currentTarget.innerHTML == "Подробнее") {
		event.path[1].querySelector("img").style.display = "none";
		event.path[1].querySelector("div.desc").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, necessitatibus.";
		event.currentTarget.innerHTML = "Отмена";
	} else {
		event.path[1].querySelector("div.desc").innerHTML = "";
		event.path[1].querySelector("img").style.display = "block";
		event.currentTarget.innerHTML = "Подробнее";
	}
	
}

function createProduct( name , src , buttonText) {
	return `<div class = "productName">${name}</div>
	<div class = "desc"></div>
	<img src = "${src}" alt = "photo">
	<button>${buttonText}</button>`;
}


for ( let i = 1; i < 4; i++) {
	new_product = task4.insertBefore( document.createElement('div'), cls);
	new_product.classList.add('product');
	new_product.insertAdjacentHTML('afterbegin' , createProduct(`Product ${i}` , "img/photo.jpg" , "Подробнее"));
	new_product.querySelector('button').addEventListener('click' , showMore);
	
}

