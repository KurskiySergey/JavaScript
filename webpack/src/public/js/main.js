import cart from './Cart'
import main_cart from './MainCart'
import products from './Product'
import search from './Search'
import error from './Error'
import product_info from './ProductInfo'

const app = {

    el: '#app',

    components: {
        cart,
        products,
        error,
        search,
        main_cart,
        product_info,
    },

    methods: {

        getRequest(url) {

            return fetch(url)
                .then(result => result.json())
                .catch(error => error);

        },

        postRequest(url, data) {
            return fetch(url, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }).then(result => result.json())
                  .catch(error => {
                      this.$refs.error.setError(error);
                  });
        },

        putRequest(url, data) {
            return fetch(url, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }).then(result => result.json())
                  .catch(error => {
                      this.$refs.error.setError(error);
                  });
        },

        deleteRequest(url) {
            return fetch(url, {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json"
                    },
                }).then(result => result.json())
                  .catch(error => {
                      this.$refs.error.setError(error);
                  });
        },
        
        showError(error) {
            let error_block = this.$root.$refs.error;
            console.log(error_block);
            error_block.error = error;
            error_block.$el.showModal();
        }
        

    },

};


export default app;