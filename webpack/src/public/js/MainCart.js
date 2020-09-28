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

export default mainCart;