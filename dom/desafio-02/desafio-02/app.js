new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },


    methods: {
        showAlert() {
            alert("Exibir alerta")
        },

        keyDownFunction( event ) {
            this.valor = event.target.value
        }
    }
})