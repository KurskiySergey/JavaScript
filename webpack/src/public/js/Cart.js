const mainCart = {

    data() {
        return {
            amount: 0,
            countGoods: 0,
            basket: this.$root.$refs.cart.cartItems
        }
    },

    methods: {
        getProducts() {
//            this.$root.getRequest('/api/basket/get_basket');
            window.location.href = "/";
        },

        getProductInfo(product) {
            console.log('product-info');
            window.location.href = `/product.html?product=${product.id_product}`;
        },
    },

    created() {
        this.$root.getRequest('/api/basket')
            .then(data => {
                this.amount = data.amount;
                this.countGoods = data.countGoods;
            })
            .catch(error => {
                this.$root.showError(error);
            });
    },

    template: `<div class="products">
            <div class="total_info">
                <div class="total_amount total_block">
                    <p><b>Total :</b> <span>{{countGoods}}</span></p>
                </div>
                <div class="total_price total_block">
                    <p><b>Total price:</b> <span>{{amount}}</span> P</p>
                </div>
            </div>
            <div class="product-item" @click="getProductInfo(product)" v-for="product of basket" :key="product.id_product">
                <img src="img/default.jpg" alt="">
                <h3>{{product.product_name}}</h3>
                <p>total price - {{product.price*product.quantity}} P</p>
                <p>amount - {{product.quantity}}</p>
                <button class="by-btn" id="">Купить</button>
            </div>
            <div class="product-btns">
                <button>Купить все</button>
                <button @click="getProducts()">Вернуться к продуктам</button>
            </div>
        </div>`
};

const cart_item = {

    props: ['cartItem'],

    template: `<div class="cart_item">
                            <div class="cart-item-name cart-item-block">
                                <h5>{{cartItem.product_name}}</h5>
                            </div>
                            <div class="cart-item-price cart-item-block">
                                <p>{{cartItem.price}} P</p>
                            </div>
                            <div class="cart-item-amount cart-item-block">
                                <p>(x{{cartItem.quantity}})</p>
                            </div>
                            <div class="cart-item-delete cart-item-block">
                                <button @click="$emit('delete', cartItem.id_product)">x</button>
                            </div>
                        </div>`
};

const cart = {

    components: {cart_item},
    data() {
        return {
            cartItems: [],
            cartIsHidden: true,
        }
    },

    methods: {

        toogleCart() {
            this.cartIsHidden = this.cartIsHidden === true ? false : true;
        },

        addProduct(product) {
            let isAdded = false;
            for (let cartItem of this.cartItems) {
                if (cartItem.id_product === product.id_product) {
                    this.$root.putRequest(`/api/basket/${product.id_product}`, {quantity: 1})
                    cartItem.quantity += 1;
                    isAdded = true;
                    break;
                }
            }

            if (!isAdded) {
                let newItem = Object.assign({
                    'quantity': 1
                }, product);
                this.$root.postRequest('/api/basket', newItem)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.push(newItem);
                        }
                    });

            }
        },

        deleteFromBasket(product_id) {
            this.$root.deleteRequest(`/api/basket/${product_id}`)
                .then(data => {
                    if (data.result === 1) {
                        for (let product of this.cartItems) {
                            if (product.id_product === product_id) {
                                if (product.quantity === 1) {
                                    this.cartItems.splice(this.cartItems.indexOf(product), 1);
                                } else {
                                    product.quantity -= 1;
                                }

                            }
                        }
                    }
                }).catch(error => {

                    this.$root.showError(error);
                });
        },

        getBasket() {
//            console.log('getbasket');
//            this.$root.getRequest('/api/basket/get_basket')
//            .then(data => {
//                console.log();
//            });
//            document.querySelector('.products').remove();
//            cart = document.createElement
//            document.querySelector('.header').insertAdjacentHTML('afterend', '<main-cart></main-cart>');
            window.location.href = "/cart.html";
        }

    },

    created() {
        this.$root.getRequest('/api/basket')
            .then(data => {
                for (let item of data.contents) {
                    this.cartItems.push(item);
                }
            }).catch(error => {
                this.$root.showError(error);
            })
    },

    template: `<div class="cart">
                    <div class="cart_icon">
                        <button @click="toogleCart()">Корзина</button>
                    </div>
                    <div class="cart_items" :class="{hide: cartIsHidden}">
                        <cart_item
                        v-for="cartItem in cartItems"
                        :key="cartItem.id_product"
                        :cartItem="cartItem"
                        @delete ="deleteFromBasket"
                        ></cart_item>
                        <button @click="getBasket()">Открыть корзину</button>
                    </div>
                </div>`

};

export default cart;