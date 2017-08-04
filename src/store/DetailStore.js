import axios from 'axios'
import * as types from './mutationsType'

export default {
  state:{
    detail:null,
  },
  getters:{
    getFilmDetail:state=>state.detail
  },
  actions:{
    getFilmDetail({commit},id){
      axios({
        method:'get',
        baseURL:'/maizuoapi',
        url:'/film/'+id+'?t='+new Date()
      })
        .then((res)=>{
          console.log(res);
          if(res.status>= 200 && res.status< 300){
            commit(types.DETAIL_LIST,res.data.data)
          }
        })
        .catch((err)=>{
          return Promise.reject(err)
        })
    }
  },
  mutations:{
    [types.DETAIL_LIST](state,res){
      state.detail=res.film;
    }
  }
}
