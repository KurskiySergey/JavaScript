const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';

const app = new Vue({

    el: '#app',

    data: {

        title: 'Интернет магазин',

    },

    methods: {

        getRequest(jsonFile) {
            
            return fetch(`${API}${jsonFile}`)
                .then(result => result.json())
                .catch(error => error)

        },
        
        showError(error) {
            let error_block = this.$root.$refs.error;
            console.log(error_block);
            error_block.error = error;
            error_block.$el.showModal();
        },

    },

});
