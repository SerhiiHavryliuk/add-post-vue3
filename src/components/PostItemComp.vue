<template>
    <div class="post">
        <div class="post-title">
            <strong>Название: </strong>
            <p> {{post.id}} {{post.title}} </p>
        </div>
        <div class="post-descr">
            <strong> Описание: </strong>
            <p> {{post.body}} </p>
        </div>
        <div class="btn_container">
            <!-- // (3) Добавление компонента внутри файла-->
            <!-- // добавляем компонент через кастомный тег-->
            <!-- <my-btn> remove </my-btn>-->
            <!-- {[ 1 ]}
             @click="$emit('remove', post)" - создаем событие remove и прокидываем это событие наверх и сам пост-->
            <my-button
                    @click="$emit('remove', post)"

            > remove
            </my-button>

        </div>
    </div>
</template>

<script>
    // (1) Добавление компонента внутри файла
    // import MyBtn from "./UI/MyBtn";

    export default {
        name: "PostItemComp",
        // (2) Добавление компонента внутри файла
        // Регистрация компонента
        // components: {MyBtn},
        props: {
            post: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .post {
        border: 1px solid lightseagreen;
        text-align: left;
        padding: 10px;
        margin: 10px;
    }

    .post-title, .post-descr {
        display: flex;

        strong {
            margin-right: 10px;
        }
    }

    p {
        margin: 0;
        padding: 0;
    }

</style>