
class Product {
    constructor({ title,price,id}, img = 'img/default.jpg') {
        this.name = title;
        this.price = price;
        this.id = id;
        this.img = img;
    }

    renderProduct() {
        return `<div class="product-item">
            <img src="${this.img}" alt="${this.name}">
            <h3>${this.name}</h3>
            <p>${this.price}</p>
            <button class="by-btn">Добавить в корзину</button>
          </div>`;
    }
}

class ProductList {
    constructor(products = [], container = '.products') {
        this.products = products;
        this.container = container;
    }

    fetchGoods() {
        this.products = [
            {
                id: 1,
                title: 'Notebook',
                price: 20000
    },
            {
                id: 2,
                title: 'Mouse',
                price: 1500
    },
            {
                id: 3,
                title: 'Keyboard',
                price: 5000
    },
            {
                id: 4,
                title: 'Gamepad',
                price: 4500
    },
];

    }
    
    getTotalPrice() {
        
        let totalPrice = 0;
        this.products.forEach(product =>{
            totalPrice += product.price;
        })
        
        console.log(`totalPrice = ${totalPrice}`);
        return totalPrice;
        
        
    }

    render() {

        let htmlProductList = document.querySelector(this.container);
        this.products.forEach(product => {
            htmlProductList.insertAdjacentHTML('afterbegin', new Product(product).renderProduct());
        })

    }
}

class Basket {

    constructor(basketList = []) {
        this.basketList = basketList;
    }

    getBasketList() {

    }

    getTotalPrice() {

    }

    renderBasket() {

    }

    addToBasket() {

    }

    removeFromBasket() {

    }

}

class BasketItem {

    constructor(product) {
        this.product = product
    }

    getBasketItemPrice() {

    }

    renderBasketItem() {

    }

    buyBasketItem() {

    }
}

let items = new ProductList();
items.fetchGoods();
items.getTotalPrice();
items.render();
