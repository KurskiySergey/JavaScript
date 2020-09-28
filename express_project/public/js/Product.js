Vue.component('products', {

    data() {
        return {
            products: [],
            filterProducts: [],
            catalogFile: 'catalogData.json',
            isNoProducts: false,
        }
    },

    methods: {

        addToBasket(product_id) {
            isAdded = false;
            for (product of this.products) {
                            if (product.id_product === product_id) {
                                this.$parent.$refs.cart.addProduct(product);
                            }
                        }

        },

        getProductInfo(product) {
            console.log('product-info');
            window.location.href = `/product.html?product=${product.id_product}`;
        },

    },

    created() {
        this.$parent.getRequest('/api/products')
            .then(data => {
                console.log(data);
                for (let item of data) {
                    this.filterProducts.push(item);
                    this.products.push(item);
                }
                if (this.products.length === 0) {
                    this.isNoProducts = true;
                }
                console.log(this.products);
            })
            .catch(error => {
                    this.$parent.showError(error);
                }

            );
    },

    template: `<div class="products">
                <product-item v-for="product in filterProducts"
                :key="product.id_product"
                :product="product"
                @add="addToBasket"
                @show="getProductInfo"
                ></product-item>
            </div>`


});


Vue.component("product-item", {

    props: ['product'],
    template: `<div class="product-item" @click="$emit('show', product)">
                    <img src="img/default.jpg" alt="">
                    <h3>{{product.product_name}}</h3>
                    <p>price - {{product.price}} P</p>
                    <button class="by-btn" @click="$emit('add', product.id_product)">Добавить в корзину</button>
                </div>`

});


Vue.component('product-info', {
    data() {
        return {
            product: {}
        }
    },

    methods: {
        getProducts() {
            window.location.href = "/";
        },

        addToBasket(product) {
            this.$root.$refs.cart.addProduct(product);
        }
    },

    created() {
//           console.log(this.$root);
        this.$root.getRequest('/api/products')
            .then(data => {
                for (let item of data) {
                    let product_id = parseInt(window.location.href.replace(/.+\?/ , '').split('=')[1]);
                    if (item.id_product === product_id) {
                        this.product = item;
                        break;
                    }
                }
            }).catch(error => {
                this.$root.showError(error);
            });
    },
    
    template: `<div class="product-info">
                    <img src="img/default.jpg" alt="">
                    <div class="information">
                        <div class="product-name">
                            <h3>{{product.product_name}}</h3>
                        </div>
                        <div class="description">
                            <p>{{product.description}}</p>
                        </div>
                        <div class="product-price">
                            <h5>Price - {{product.price}} P</h5>
                        </div>
                        <div class="product-btns">
                            <button @click="addToBasket(product)">Добавить в корзину</button>
                            <button @click="getProducts()">Вернуться к продуктам</button>
                        </div>
                    </div>
                </div>`
});
