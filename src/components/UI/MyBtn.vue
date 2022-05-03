<template>
    <button class="btnAddNewPost">
        <!--// все что ьы помещаем внутры кнопки будет уходить в тег <slot></slot>-->
        <slot/>
    </button>
</template>

<script>
    export default {
        name: "my-button"
    }
</script>

<style scoped>
    .btnAddNewPost {
        margin-bottom: 10px;
        background: lightseagreen;
        color: aliceblue;
        align-self: flex-end;
        outline: none;
        border: none;
        padding: 12px;
        font-weight: bolder;
        border-radius: 8px;
        cursor: pointer;
    }
</style>