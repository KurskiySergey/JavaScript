const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/'

let getRequest = (jsonFile) => {
    
    return new Promise((resolve, reject) => {
        
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `${API}${jsonFile}`, true);
        
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let response = JSON.parse(xhr.responseText);
                    resolve(response);
                } else {
                    reject('Error');
                }
            }
        }
        
        xhr.send();
        
    });
}


class Product {
    constructor({ product_name,price,id_product}, img = 'img/default.jpg') {
        this.name = product_name;
        this.price = price;
        this.id = id_product;
        this.img = img;
    }

    renderProduct() {
        return `<div class="product-item">
            <img src="${this.img}" alt="${this.name}">
            <h3>${this.name}</h3>
            <p>price - ${this.price}P</p>
            <button class="by-btn" id = "${this.id}">Добавить в корзину</button>
          </div>`;
    }
}

class ProductList {
    constructor(products = [], container = '.products') {
        this.products = products;
        this.container = container;
    }

    fetchGoods() {
        
        getRequest('catalogData.json')
            .then(data => {
                this.products = data;
                this.render();
            })
            .catch(error => console.log(error));
    }

    render() {

        let htmlProductList = document.querySelector(this.container);
        htmlProductList.innerHTML = '';
        
        this.products.forEach(product => {
            htmlProductList.insertAdjacentHTML('afterbegin', new Product(product).renderProduct());
        })

    }
}

class Basket {

    constructor(basketList = [], container = '.products') {
        this.basketList = basketList;
        this.container = container;
    }

    getBasketList() {
        getRequest('getBasket.json')
            .then(data => {
                this.basketList = data;
                this.renderBasket();
            })
            .catch(error => console.log(error));
    }

    getTotalPrice() {

    }

    renderBasket() {
        
        let htmlProductList = document.querySelector(this.container);
        htmlProductList.innerHTML = '';
        htmlProductList.insertAdjacentHTML('afterbegin' , '<button class = "main-btn">К списку товаров</button>');
        
        this.basketList.contents.forEach(item => {
            htmlProductList.insertAdjacentHTML('afterbegin' , new BasketItem(item).renderBasketItem());
        })
        
        htmlProductList.insertAdjacentHTML('afterbegin' , `<p class = "basket_total">Всего в корзине <b>${this.basketList.countGoods} товара(ов)</b></p>`);
        htmlProductList.insertAdjacentHTML('afterbegin' , `<p class = "basket_total">Полная цена - <b>${this.basketList.amount}P</b></p>`);
    }

    addToBasket(id) {
        
        getRequest('addToBasket.json')
            .then(data => {
                if (data.result === 1) {
                    alert( 'Продукт успешно добавлен');
                } else {
                    alert('error');
                }
            })
            .catch( error => console.log(error));
    }

    removeFromBasket(id) {
        getRequest('deleteFromBasket.json')
            .then(data => {
                if (data.result === 1) {
                    alert( 'Продукт успешно удален');
                } else {
                    alert('error');
                }
            })
            .catch( error => console.log(error));
    }
    
    buyItem(id) {
        alert('Продукт куплен');
    }

}

class BasketItem {

    constructor({ product_name,price,id_product, quantity}, img = 'img/default.jpg') {
        this.name = product_name;
        this.price = price;
        this.id = id_product;
        this.quantity = quantity;
        this.img = img;
    }

    getBasketItemPrice() {

    }

    renderBasketItem() {
        return `<div class="product-item">
            <img src="${this.img}" alt="${this.name}">
            <h3>${this.name}</h3>
            <p>price - ${this.price}P</p>
            <button class="basket_by" id = "${this.id}">Купить (x ${this.quantity})</button>
            <button class="del-btn" id = "${this.id}"> Удалить</button>
          </div>`;
    }

    buyBasketItem() {

    }
}

let items = new ProductList();
let basket = new Basket();
items.fetchGoods();
