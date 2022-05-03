<template>
    <input :value="modelValue" @input="updateInput" type="text">

</template>

<script>
    export default {
        name: "MyInput",
        props: {
            modelValue: [String, Number]
        },
        methods: {
            updateInput(event) {
                this.$emit('update:modelValue', event.target.value);
            }
        }
    }
</script>

<style lang="scss" scoped>
    input {
        width: 100%;
        margin: 0;
        margin-bottom: 10px;
        border: 1px solid lightseagreen;
        outline: none;
        padding: 10px;
    }
</style>