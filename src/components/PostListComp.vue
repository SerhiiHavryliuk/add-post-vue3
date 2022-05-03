<template>
    <div v-show="posts.length > 0">
        <h3>Список пользователей</h3>
        <!-- // Добавляем анимацию-->
        <!-- // https://ru.vuejs.org/v2/guide/transitions.html#%D0%9F%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4%D1%8B-%D0%B2-%D1%81%D0%BF%D0%B8%D1%81%D0%BA%D0%B0%D1%85-->
        <transition-group name="serhii-list">
            <!-- {[ 2 ]} @remove="$emit('remove', post)" - ловим событие remove и прокидываем это событие наверх и сам пост-->
            <post-item-comp
                    :post="post"
                    v-for="post in posts"
                    :key="post.id"
                    @remove="$emit('remove', post)"
            />
        </transition-group>
    </div>

    <!--    // Если список пуст то показываем сообщение-->
    <h2 v-show="posts.length === 0" style="color: red"> Список постов пуст)</h2>


</template>

<script>
    import PostItemComp from "./PostItemComp";

    export default {
        name: "PostListComp",
        components: {PostItemComp},
        // через пропсы передаем значение в компонент
        // тип переменной что будет передаваться? должен быть массив
        // required: true - значение передавть в компонент обязательно
        props: {
            posts: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    // Serhii: очень внимательно смотрим какой vue (2 или 3) так как классы в документации отличаются
    // нужно чтобы name="serhii-list" в элементе совпадал с началом классом serhii-list-enter-active
    //Добавляем анимацию
    // https://ru.vuejs.org/v2/guide/transitions.html#%D0%9F%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4%D1%8B-%D0%B2-%D1%81%D0%BF%D0%B8%D1%81%D0%BA%D0%B0%D1%85
    /*.serhii-list-item {*/
    /*    display: inline-block;*/
    /*    margin-right: 10px;*/
    /*}*/

    .serhii-list-enter-active, .serhii-list-leave-active {
        transition: all 0.4s;
    }

    .serhii-list-enter-from, .serhii-list-leave-to /* .list-leave-active до версии 2.1.8 */
    {
        opacity: 0;
        transform: translateX(130px);
    }

    // Анимация при сортировке
    // https://v3.ru.vuejs.org/ru/guide/transitions-list.html#%D0%B0%D0%BD%D0%B8%D0%BC%D0%B0%D1%86%D0%B8%D1%8F-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D1%89%D0%B5%D0%BD%D0%B8%D1%8F-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-%D1%81%D0%BF%D0%B8%D1%81%D0%BA%D0%B0
    .serhii-list-move {
        transition: transform 0.8s ease;
    }
</style>