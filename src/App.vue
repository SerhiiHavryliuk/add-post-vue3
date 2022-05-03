<template>

    <nav>
        <router-link to="/">Posts</router-link>
        |
        <router-link to="/about">About</router-link>
        |
        <router-link to="/test">Test</router-link>
        |
        <!--        // делаем кнопку ссылкой-->
        <my-button @click="$router.push('/test')"> Test</my-button>
        |
        <router-link to="/vuetemplate">Vuetemplate</router-link>
        |
        <router-link to="/store">Store Vuex</router-link>
    </nav>
    <router-view/>

</template>

<script>

    export default {
        data() {
            return {

            }
        },
        // mounted - хук - это метод из жизненного цикла компонента,
        // который выполняется перед созанием элемента
        mounted() {

        },
        // наблюдаэмые свойства VUE
        // эта ф-ия следит за изменениями модели
        // если что то изменилось в моделе она отрабатывает
        // ф-ия должна называться так само как и модель
        watch: {

        },
        methods: {

        }

    }
</script>

// флаг scoped - стили будут доступны только в этом компоненте и не видны из вне
<!--<style lang="scss" scoped>-->
<style lang="scss">

    /* apply a natural box layout model to all elements, but allowing components to change */
    html {
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    .app__btns {
        display: flex;
        justify-content: space-between;
    }

    /*Serhii style*/


</style>
