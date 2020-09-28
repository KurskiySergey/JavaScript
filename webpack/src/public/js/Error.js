
const error = {

    data() {

        return {
            error: '',
            isError: false
        }
    },

    methods: {

        closeError() {
            this.$el.close();
        }

    },

    template: `<dialog class="error">
                <p>Возникла ошибка - {{error}}</p>
                <button @click="closeError()">Закрыть</button>
                </dialog>`

};

export default error;