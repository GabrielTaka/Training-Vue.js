<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p> Nome do Usuário: <strong> {{nome}} </strong> </p>
        <p> Idade do usuário: <strong> {{idade}} </strong> </p>
        <button @click="reiniciarNome"> Reiniciar Nome </button> 
        <button @click="reiniciarFn()"> Reiniciar Nome (callback) </button> 
    </div>
</template>

<script>
import barramento from '@/barramento'


export default {
    props: {
        nome: {
            type: String,
            required: true
            //default: Nome
        },
        reiniciarFn: Function,
        idade: Number
    },
    created() {
        barramento.quandoIdadeMudar( (idade) => {
            this.idade = idade
        })
    },

    methods: {
        reiniciarNome() {
            this.nome = 'Pedro'
            this.$emit('nomeMudou', {nome: this.nome })
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
