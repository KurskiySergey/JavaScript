Vue.component('products', {
    data() {

        return {
            products: [],
            filtered_products: [],
            catalogFile: 'catalogData.json',
            isNoProducts: false,
        }

    },
    methods: {

        addProduct(product) {
            this.$parent.getRequest('addToBasket.json')
                .then(data => {
                    if (data.result === 1) {
                        this.addToBasket(product);
                    }
                });

        },

        addToBasket(product) {
            let isAdded = false;
            for (item of this.$root.$refs.cart.basket) {
                if (item.product_name === product.product_name) {
                    item.quantity += 1;
                    isAdded = true;
                    break;
                }
            }

            if (!isAdded) {
                //product['quantity'] = 1;
                let prod = Object.assign({
                    quantity: 1
                }, product);
                this.$root.$refs.cart.basket.push(prod);
            }

        },


    },
    created() {

        this.$parent.getRequest(this.catalogFile)
            .then(data => {
                console.log(data);
                for (let item of data) {
                    this.filtered_products.push(item);
                    this.products.push(item);
                }
                if (this.products.length === 0) {
                    this.isNoProducts = true;
                }
                console.log(this.products);

            }).catch(error => {
                this.$parent.showError(error);
            });
    },

    template: `<div class="products">
               <div class="no_products" :class="{hide: !isNoProducts}">
                   <p>Нет данных</p>
               </div>
                <product-item v-for="product in filtered_products" :key="product.id_product"
                :product = "product"
                @add = "addProduct"
                >         
                </product-item>
            </div>`


});


Vue.component('product-item', {

    props: ['product'],
    template: `<div class="product-item">
                    <img src="img/default.jpg" alt="">
                    <h3>{{product.product_name}}</h3>
                    <p>price - \${{product.price}}P</p>
                    <button class="by-btn" @click="$emit('add', product)">Добавить в корзину</button>
                </div>`
});
