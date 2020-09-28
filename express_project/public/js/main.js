const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';

const app = new Vue({

    el: '#app',

    data: {
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

});
