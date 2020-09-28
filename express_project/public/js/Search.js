Vue.component('search', {
    
    data() {
        return {
            'searchLine': '',
        }
    },
    
    methods: {
      
        search() {
            regExp = new RegExp(this.searchLine, 'igm');
            this.$root.$refs.products.filterProducts = [];
            products = this.$root.$refs.products.products;

            for (let product of products) {
                if (regExp.test(product.product_name)) {
                    this.$root.$refs.products.filterProducts.push(product);
                }
            }
        }
        
    },
    
    template: `<div class="search">
                    <table>
                        <tr>
                            <td class="search_line"><input type="text" v-model="searchLine"></td>
                            <td class="search_button"><button @click="search()">Поиск</button></td>
                        </tr>
                    </table>
                </div>`
    
})