<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        Esse é o nome: {{nome}}
        <p> Idade é: <strong> {{idade}} </strong> </p>
        <button @click="alterarNome()"> Alterar </button>

        <hr>
        
        <div class="componentes">
            <app-usuario-info 
                :nome="nome" 
                :reiniciarFn="reiniciarNome"
                :idade="idade"
            />
            <!-- <app-usuario-editar 
                :idade="idade"
                v-on:idadeMudou="changeData"
            /> -->
            <app-usuario-editar  :idade="idade" /> 
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            nome: 'Pedro',
            idade: 21,
        }
    },

    methods: {
        alterarNome() {
            this.nome = 'Gabriel'
        },
        reiniciarNome() {
            this.nome = 'Pedro'
        },
        changeData( e ) {
            this.idade = e
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
