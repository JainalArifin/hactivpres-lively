import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

const state = {
  articles: []
}

const mutations = {
  tampilArticle (state, payload) {
    state.articles = payload
  }
}

const actions = {
  getArticle ({ commit }) {
    http.get('/articles')
    .then(({ data }) => {
      commit('tampilArticle', data)
    })
    .catch((err) => {
      console.error(err)
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
