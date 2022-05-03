<template>
    <!--        // @submit.prevent - отменяем действие формы по у молчанию (перезагрузку страницы)-->
    <form @submit.prevent class="addNewPost">
        <h4> Создание поста:</h4>
        <!--
         Вызов ф-ии при изменении значения в текстовом поле
         @input="changeTitle"-->
        <!--        v-model - более универсальная директива для двухстороннего связывания -->
        <!--        <input-->
        <!--                v-model="post.title"-->
        <!--                type="text"-->
        <!--                placeholder="Title"-->
        <!--        >-->
        <my-input
                v-model="post.title"
                type="text"
                placeholder="Title"
        />
        <!--        v-bind: и @input - двухстороннего связывания (обычный подход)-->
        <!--        <input-->
        <!--                v-bind:value="post.body"-->
        <!--                @input="post.body = $event.target.value"-->
        <!--                type="text"-->
        <!--                placeholder="Body"-->
        <!--        >-->

        <my-input
                v-model="post.body"
                type="text"
                placeholder="Body"
        />

        <!--        // @submit.prevent - отменяем действие формы по у молчанию (перезагрузку страницы)-->
        <!--        пока удаляем слушатель собвтия в компоненте-->
        <!--        <button @click="addNewPost" class="btnAddNewPost"> Add new post</button>-->
        <!--        (3) Добавление компонента внутри файла-->
        <!--        <my-btn @click="createPost"> Add new post</my-btn>-->
        <my-button @click="createPost">Add new post</my-button>
    </form>
</template>

<script>
    // (1) Добавление компонента внутри файла
    import MyBtn from "./UI/MyBtn";
    // import MyInput from "./UI/MyInput";

    export default {
        // components: {MyInput},
        // (2) Добавление компонента внутри файла
        // components: {MyButton, MyBtn},
        data() {
            return {
                post: {
                    title: '',
                    body: ''
                }
            }
        },
        watch: {
            // пример когда модель явлется объектом
            post(newValue) {
                console.log("Serhii: watch");
                console.log(newValue);
            }
        },
        methods: {
            // добавление нового поста
            createPost() {
                console.log("Serhii: createPost");
                this.post.id = Date.now();

                // Передача данных между компонентами
                // (1) создаем событие в дочернем элементе
                // Заэмители событие
                // функция для генерации события create на которое можно будет подписаться
                // когда сработало событие мы передаем в родительский елемент переменную this.post
                this.$emit('create', this.post);

                // очистка полей формы
                this.post = {
                    title: '',
                    body: ''
                }
            },
            // $emit(param, post) {
            //     console.log("Serhii: $emit");
            // }
        }
    }
</script>

<style lang="scss" scoped>
    .addNewPost {
        display: flex;
        flex-direction: column;
        width: 400px;
        padding: 20px;

        /*input {*/
        /*    width: 100%;*/
        /*    margin-bottom: 10px;*/
        /*    border: 1px solid lightseagreen;*/
        /*    outline: none;*/
        /*    padding: 10px;*/
        /*}*/
    }
</style>