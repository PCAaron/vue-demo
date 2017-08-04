import axios from 'axios'
import * as types from './mutationsType'

export default {
  state:{
    banners:[],
    nowPlay:[],
    coming:[]
  },
  getters:{
    getBannerList:state=>state.banners,
    getNowPlaying:state=>state.nowPlay,
    getComingSoon:state=>state.coming
  },
  actions:{
    //banners
    getBannerList({commit}){
      axios({
        method:'get',
        baseURL:'/maizuoapi',
        url:'/billboard/home?t='+new Date()
      })
        .then((res)=>{
          console.log(res);
          if(res.status>=200 && res.status < 300){
            commit(types.HOME_BANNERS_LIST,res.data.data)
          }
        })
        .catch((err)=>{
          console.log(err);
          return Promise.reject(err)
        })
    },
    //热映
    getNowPlaying({commit}){
      axios({
        method:'get',
        baseURL:'/maizuoapi',
        url:'/film/now-playing?t='+new Date()+'&page=1&count=5'
      })
        .then((res)=>{
          console.log(res);
          if(res.status>=200 && res.status<300){
            commit(types.HOME_NOWPLAYING_LIST,res.data.data)
          }
        })
        .catch((err)=>{
          return Promise.reject(err)
        })
    },
    //即将上映
    getComingSoon({commit}){
      axios({
        method:'get',
        baseURL:'/maizuoapi',
        url:'/film/coming-soon?t='+new Date()+'&page=1&count=3'
      })
        .then((res)=>{
          console.log(res);
          if(res.status>=200 && res.status < 300){
            commit(types.HOME_COMING_LIST,res.data.data)
          }
        })
        .catch((err)=>{
          return Promise.reject(err)
        })
    }
  },
  //更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
  mutations:{
    [types.HOME_BANNERS_LIST](state,res){
      state.banners=res.billboards
    },
    [types.HOME_NOWPLAYING_LIST](state,res){
      state.nowPlay=res.films
    },
    [types.HOME_COMING_LIST](state,res){
      state.coming=res.films
    }
  }
}
