# vue_add_post

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Serhii, clone proj Vue 3 фундаментальный курс от А до Я
See [Reference](https://www.youtube.com/watch?v=XzLuMtDelGk&t=1201s&ab_channel=UlbiTV).

#### Solved problems
1) VueJS - after npm run build I got blank page
See [Reference](https://stackoverflow.com/questions/47796595/vuejs-after-npm-run-build-i-got-blank-page#:~:text=Perhaps%20the%20simplest%20way%20to%20solve%20the%20issue%20is%20to%20create%20a%20file%20vue.config.js%20in%20the%20project%27s%20root%20directory%20and%20add%20to%20it%20the%20following%20code%3A).

[Official deployment instructions at](https://cli.vuejs.org/guide/deployment.html)
```
npm install -g serve
```

#### запус на сервере после билда
```
# -s flag means serve it in Single-Page Application mode
# which deals with the routing problem below
serve -s dist
```