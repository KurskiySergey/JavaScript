Vue.component('cart', {
    data() {

        return {
            basket: [],
            basketFile: 'getBasket.json',
            isVisibleCart: false,
            basket_amount: 0,
            countGoods: 0,
        }
    },

    methods: {

        deleteProduct(product_name) {
            console.log(product_name);
            for (let i = 0; i < this.basket.length; i++) {
                if (this.basket[i].product_name === product_name) {
                    if (this.basket[i].quantity >= 2) {
                        this.basket[i].quantity--;
                    } else {
                        this.basket.splice(i, 1);
                    }
                }
            }


            console.log(this.basket);
        }

    },
    created() {

        this.$parent.getRequest(this.basketFile)
            .then(data => {
                console.log(data);
                this.countGoods = data.countGoods;
                this.basket_amount = data.amount;
                this.basket = data.contents;
                console.log(this.basket);

            }).catch(error => {
                this.$parent.showError(error);
            });
    },

    template: `<div class="cart">
                <search_line></search_line>
                <button class="btn-cart" @click="isVisibleCart = !isVisibleCart">Корзина</button>
                <div class="user_cart" :class="{hide : !isVisibleCart}" >
                    <cart-item v-for="item in basket" 
                        :key="item.id_product"
                        :item ="item"
                        @delete = "deleteProduct"
                    >
                    </cart-item>
                </div>
            </div>`
});


Vue.component('cart-item', {
    props: ['item'],
    template: `<div class="basket_item">
                        <span><b>{{item.product_name}}</b></span>
                        <span>x ({{item.quantity}}) </span>
                        <span> <i>{{item.price * item.quantity}}</i> P </span>
                        <span><button @click="$emit('delete', item.product_name)"> x </button></span>
                        <hr>
                    </div>`
});
