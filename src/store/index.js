import { createStore } from 'vuex'

export default createStore({
  state: {
    likes: 2,
    isAuth: false
  },
  getters: {
    doubleLikes(state){
      return state.likes * 2;
    }
  },
  mutations: {
    addLikes(state){
      return state.likes++;
    },
    deleteLikes(state){
      return state.likes--;
    }
  },
  actions: {
  },
  modules: {
  }
})
