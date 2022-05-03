<template>
    <h1> Page Store</h1>

    <p>Likes (работаем со state): {{$store.state.likes}}</p>
    <p>Double Likes (работаем со getters): {{$store.getters.doubleLikes}}</p>

    <p> Обработчик события и изменения состояяния переменной в state через функцию (работаем со mutations)</p>
    <my-button @click="$store.commit('addLikes')"> Add likes</my-button>
    <my-button @click="$store.commit('deleteLikes')"> Delete likes</my-button>

    <p> {{$store.state.isAuth ? "Авторизация прошла успешно" :"Пользователь не авторизовался" }}</p>
</template>

<script>
    import MyButton from "../components/UI/MyBtn";

    export default {
        name: "StoreView",
        components: {MyButton}
    }
</script>

<style scoped>

</style>