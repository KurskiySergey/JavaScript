Vue.component('search_line', {
    
    data() {
      
        return {
            search_info: ''
        }
        
    },
    
    methods : {
        
        filterGoods() {
            regExp = new RegExp(this.search_info, 'igm');
            console.log(this.$root.$refs.products.products);
            this.$root.$refs.products.filtered_products = this.$root.$refs.products.products.filter(el => regExp.test(el.product_name))
        },
        
    },
    
    template: `<table class="search">
                    <tr>
                        <td class="search_line">
                            <input type="text" v-model="search_info">
                        </td>
                        <td class="search_btn">
                            <button class="find" @click="filterGoods()">Search</button>
                        </td>
                    </tr>
                </table>`
});

