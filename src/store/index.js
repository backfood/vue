import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state"

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations: {
    changname(state,payload){
        state.name=payload.name
    },
    changId(){
      state.id++
    }
  },
  actions: {
    acId({commit,state,getters},acName){
      commit("changname",{
        name:acName
      })
    }
  },
  modules: { 
  }
})
