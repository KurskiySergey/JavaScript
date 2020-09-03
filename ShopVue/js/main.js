const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';

const app = new Vue({

    el: '#app',

    data: {

        title: 'Интернет магазин',
        products: [],
        basket: [],
        catalogFile: 'catalogData.json',
        basketFile: 'getBasket.json',
        search_info: '',
        isVisibleCart: false,
        isNoProducts: false,
        basket_amount: 0,
        countGoods: 0,

    },

    methods: {

        getRequest(jsonFile) {

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

        },
        
        filterGoods() {
            regExp = new RegExp(this.search_info, 'igm');
            console.log(regExp);
            for ( let product of this.products) {
                if ( !regExp.test(product.product_name)) {
                    product.class = 'hide';
                } else {
                    product.class = 'visible';
                }
            }
        },
        
        addProduct(event) {
            let productToAdd = event.target.parentElement.children[1].innerHTML;
            for (let product of this.products) {
                if ( product.product_name === productToAdd) {
                    this.addToBasket(product);
                    break;
                }
            }
            
        },
        
        addToBasket(product) {
            let isAdded = false;
            for (item of this.basket) {
                if (item.product_name === product.product_name) {
                    item.quantity += 1;
                    isAdded = true;
                    // Чтобы происходило обновление при изменении basket
                    this.basket.push(0);
                    this.basket.pop();
                    break;
                }
            }
            
            if ( !isAdded ) {
                product['quantity'] = 1;
                // basket обновился => доп. изменения не нужны 
                this.basket.push(product);
            }
            
        },
        
        deleteProduct(product_name) {
            console.log(product_name);
            for (let i=0; i < this.basket.length; i++) {
                if ( this.basket[i].product_name === product_name) {
                    if ( this.basket[i].quantity >= 2) {
                        this.basket[i].quantity--;
                    } else {
                        this.basket.splice(i,1);
                    }
                    // Чтобы происходило обновление при изменении basket
                    this.basket.push(0);
                    this.basket.pop();
                    break;
                }
            }
            
            
            console.log(this.basket);
         }

    },
    created() {
            this.getRequest(this.catalogFile)
                .then(data => {
                console.log(data);
                for (let item of data) {
                    console.log(typeof(item));
                    item['class'] = 'visible';
                    this.products.push(item);
                }
                if (this.products.length === 0) {
                    this.isNoProducts = true;
                }
                console.log(this.products);
            });
        
            this.getRequest(this.basketFile)
                .then(data => {
               console.log(data);
                this.countGoods = data.countGoods;
                this.basket_amount = data.amount;
                this.basket = data.contents;
                console.log(this.basket);
                
            });
        },

});
