import axios from 'axios'
import * as types from './mutationsType'

export default {
  state:{
    nowList:[],
    comingList:[],
    nowPage:0,
    comingPage:0
  },
  getters:{
    nowList:state=>state.nowList,
    comingList:state=>state.comingList
  },
  actions:{
    getNowList({commit}){
      axios({
        method:'get',
        baseURL:'/maizuoapi',
        url:'/film/now-playing?page='+0+'&count=10'
      })
        .then((res)=>{
          commit(types.NOWPLAYING_LIST,res.data.data);
        })
        .catch((err)=>{
          return Promise.reject(err);
        })
    },
    getComingList({commit}){
      axios({
        method:'get',
        baseURL:'/maizuoapi',
        url:'/film/coming-soon?page='+0+'&count=10'
      })
        .then((res)=>{
          commit(types.COMING_LIST,res.data.data);
        })
        .catch((err)=>{
          return Promise.reject(err);
        })
    }
  },
  mutations:{
    [types.NOWPLAYING_LIST](state,res){
      console.log(res);
      state.nowList=state.nowList.concat(res.films)
    },
    [types.COMING_LIST](state,res){
      console.log(res);
      state.comingList=state.comingList.concat(res.films)
    }
  }
}
