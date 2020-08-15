<template>
    <div class="citacao">
        <slot/>
        <slot name="fonte"/>
        <div class="autor">
            <slot name="autor"/>
        </div>
    </div>
</template>

<script>
export default {
    activated() {
        console.log("activato")
    },

    deactivated() {
        console.log("desativado")
    }
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }

    .autor{
        float: right;
    }
</style>
