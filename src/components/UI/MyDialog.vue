<template>
    <!--    // @click:stop - stop propagation - убираем всплытие событий-->
    <!--    // для того чтобы при нажатии на диалоговое окноб оно не закрывалось-->
    <div v-if="show === true" class="dialog" @click.stop="hideDialog">
        <div @click.stop class="dialog__content">
            <slot>

            </slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "my-dialog",
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            // функция заурытия диалога
            // если мы кликаем вне диалога то окно закрывается
            hideDialog() {
                console.log(77777)
                this.$emit('update:show', false)
            }
        }
    }
</script>

<style scoped>
    .dialog {
        display: flex;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
    }

    .dialog__content {
        margin: auto;
        background: white;
        border-radius: 12px;
        min-height: 50px;
        min-width: 250px;
    }

</style>