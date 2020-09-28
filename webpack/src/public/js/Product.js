const product_item = {

    props: ['product'],
    template: `<div class="product-item">
                    <img src="img/default.jpg" alt="no_image" @click="$emit('show', product)">
                    <h3>{{product.product_name}}</h3>
                    <p>price - {{product.price}} P</p>
                    <button class="by-btn" @click="$emit('add', product.id_product)">Добавить в корзину</button>
                </div>`

};

const products = {

    components: {product_item},
    data() {
        return {
            products: [],
            filterProducts: [],
            isNoProducts: false,
        }
    },

    methods: {

        addToBasket(product_id) {
            for (let product of this.products) {
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
        console.log('created');
        this.$parent.getRequest('/api/products')
            .then(data => {
                console.log(data);
                console.log(this);
                for (let item of data) {
                    console.log(item);
                    this.filterProducts.push(item);
                    this.products.push(item);
                }
                if (this.products.length === 0) {
                    this.isNoProducts = true;
                }
            })
            .catch(error => {
                    this.$parent.showError(error);
                }

            );
    },

    template: `<div class="products">
                <product_item v-for="product in filterProducts"
                :key="product.id_product"
                :product="product"
                @add="addToBasket"
                @show="getProductInfo"
                ></product_item>
            </div>`


};

export default products;