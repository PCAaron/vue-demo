import * as types from './mutationsType'

export default {
  state:{
    leftMenuState:false
  },
  getters:{
    leftMenuState:state=>state.leftMenuState
  },
  //更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
  mutations:{
    [types.CHANGE_LEFTMENU](state,status){
      state.leftMenuState=status
    }
  },
  //Action 提交的是 mutation，而不是直接变更状态。
  //可以包含任意异步操作。
  actions:{
    changeLeftMenu({commit},status){
      commit(types.CHANGE_LEFTMENU,status)
    }
  }
}
