<template>
    <p> Serhii {{likes}}</p>
    <button v-on:click="addLikes"> likes +</button>
    <button @click="deleteLikes"> likes -</button>

    <!--    // 3) пишем название тега-->
    <!--    // добавление формы-->
    <!--    подписываемся на событие create-->
    <!--    // $refs - доступ к до элементу-->
    <h1 ref="myTitle"> Страница с постами </h1>
    <div class="app__btns">
        <my-button @click="showDialog"> создать пост</my-button>
        <my-select
                v-model="selectedSort"
                :options="sortOptions"
        />
    </div>

    <my-dialog v-model:show="dialogVisible">
        <post-form-comp
                @create="createPost"
        />
    </my-dialog>


    <!--    // список постов-->
    <!--    // Передача данных между компонентами-->
    <!--    // (2) подписываемся на событие-->
    <!--    {[ 3 ]}
    @remove="$emit('remove', post)" - ловим событие remove и прокидываем это событие наверх и сам пост-->
    <!--    v-if="!isPostsLoading" - пока идет загрузка скрываем блок и боказиваем сообщение что идет загрузка-->
    <post-list-comp
            :posts="posts"
            @remove="removePost"
            v-if="!isPostsLoading"
    >
    </post-list-comp>
    <p v-else> Идет загрузка ...</p>

</template>

<script>
    // добавление UI компонентов из UI/components/ идет автоматически через глобальная регистрация компонентов в main.js

    // добавлене компонентов
    // 1) импорт компонента
    import PostFormComp from "@/components/PostFormComp";
    import PostListComp from "@/components/PostListComp";
    // 1) импорт библиотеки для запросов
    import axios from "axios"

    export default {
        // 2) регистрация компонета
        components: {
            PostListComp, PostFormComp
        },
        data() {
            return {
                likes: 1,
                dislikes: 9,
                posts: [],

                // ручное создание постов
                // posts: [
                //     {id: 1, title: ' Title rrrrrrr', body: 'Description ffffffffff'},
                //     {id: 2, title: ' Title rrrrrrr', body: 'Description ffffffffff'},
                //     {id: 3, title: ' Title rrrrrrr', body: 'Description ffffffffff'},
                //     {id: 4, title: ' Title rrrrrrr', body: 'Description ffffffffff'}
                // ],

                dialogVisible: false,
                isPostsLoading: false,
                selectedSort: '', // в селекте по умолчанию не должно быть выбраных значений (пустая строка)

                // массив который содержит елементы списка
                // это будет объект в котором мы задаем значение value: "title" и название что будет отображаться в селекте name: "По названию"
                sortOptions: [
                    {value: "title", name: "По названию"},
                    {value: "body", name: "По содержимому"}
                ]

                // title: '',
                // body: ''
            }
        },
        // mounted - хук - это метод из жизненного цикла компонента,
        // который выполняется перед созанием элемента
        mounted() {
            this.fetchPosts();
            console.log("Serhii___________");
            // $refs - доступ к до элементу
            console.log(this.$refs.myTitle);
            this.$refs.myTitle.style.color = "red";

        },
        // наблюдаэмые свойства VUE
        // эта ф-ия следит за изменениями модели
        // если что то изменилось в моделе она отрабатывает
        // ф-ия должна называться так само как и модель
        watch: {
            // принимается новый переметр newValue, то на что была изменена модель
            // newValue - будет возвращать value которое было выбрано в селекте (title, body)
            selectedSort(newValue) {
                console.log(newValue);
                this.posts.sort((post1, post2) => {
                    return post1[newValue]?.localeCompare(post2[newValue]);
                })
            },
            dialogVisible(newValue) {
                console.log(newValue);
            },
        },
        methods: {
            // увеличение значения переменной при клике на кнопку
            addLikes() {
                this.likes++;
            },
            // уменьшение значения переменной при клике на кнопку
            deleteLikes() {
                this.likes--;
            },
            // двухстороннее связывание
            // Связываем инпут с переменной title
            changeTitle(event) {
                console.log(event);
                this.title = event.target.value;
            },
            // двухстороннее связывание
            // Связываем инпут с переменной title
            changeBody(event) {
                this.body = event.target.value;
            },
            createPost(post) {
                // post - это параметр которая принимает ф-ия с дочернего элемента
                // console.log(post);
                // добавляем пост который был заполнен в дочернем елементе
                this.posts.unshift(post);
                // console.log(this.posts);
                // закрываем диалоговое окно
                this.dialogVisible = false;
            },
            // метод удаления постов
            // формируем новый массив
            // в новый масив ложим те элементы которые не равны id поста которое мы передаем через аргумент post
            removePost(post) {
                // console.log(1111);
                this.posts = this.posts.filter(p => p.id !== post.id)
            },
            showDialog() {
                this.dialogVisible = true;
            },
            // axios - библиотека для запросов
            // npm i axios
            async fetchPosts() {
                try {
                    // показываем блок загрузки перед загрузкой всех постов на стр
                    this.isPostsLoading = true;
                    // делаем задержку чтобы увидеть блок загрузки
                    setTimeout(async () => {
                        // получаем посты через axios и помещаем их в переменную response
                        const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10");
                        // console.log(response.data);
                        this.posts = response.data;
                        // скрываем блок загрузки
                        this.isPostsLoading = false;
                    }, 2000);

                } catch (e) {
                    alert("Ошибка загрузки данных!")
                }
            }
            // // добавление нового поста
            // addNewPost() {
            //     // создаем объект нового поста и заполняем его текущими значениями из текстовых полей
            //     const newPost = {
            //         id: Date.now(),
            //         title: this.title,
            //         body: this.body
            //     };
            //
            //     // добавляем новый пост к общему массиву постов
            //     this.posts.push(newPost);
            //
            //     // очистка полей формы
            //     this.title = '';
            //     this.body = '';
            // }
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
