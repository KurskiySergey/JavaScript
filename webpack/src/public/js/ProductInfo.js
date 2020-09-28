const productInfo = {
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
};

export default productInfo;