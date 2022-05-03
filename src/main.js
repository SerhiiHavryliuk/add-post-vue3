import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// {1} глобальная регистрация компонентов (сокращенный вариант)
// импортируем файл с UI компонетами
import components from './components/UI'

//--------------------------------------------
// [1] глобальная регистрация компонента
// import MyBtn from "./components/UI/MyBtn";
//--------------------------------------------

const app = createApp(App);

//--------------------------------------------
// [2] глобальная регистрация компонента
// app.component(MyBtn.name, MyBtn);

// [3] глобальная регистрация компонента
// далее нужно прописать название компонента как тег в том файле где он нужен
// <my-button> remove</my-button>
//--------------------------------------------

// {2} глобальная регистрация компонентов (сокращенный вариант)
let allMyComponents = Object.values(components);
allMyComponents.forEach(component => {
    app.component(component.name, component);
});


console.log(components);

app.use(store).use(router).mount('#app')
