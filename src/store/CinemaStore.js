import axios from 'axios'
import * as types from './mutationsType'

export default {
  state:{
    district:[],
    lists:null
  },
  getters:{
    districts:state=>state.district,
    lists:state=>state.lists
  },
  actions:{
    getCinemaList({commit},id){
      axios({
        method:'get',
        baseURL:'/maizuoapi',
        url:'/film/'+id+'/cinema?t='+new Date()
      })
        .then((res)=>{
          console.log(res);
          if(res.status>=200 && res.status < 300){
            commit(types.CINEMA_LIST,res.data.data);
          }
        })
        .catch((err)=>{
          return Promise.reject(err);
        })
    }
  },
  mutations:{
    [types.CINEMA_LIST](state,res){
      state.lists=res.cinemas;
      let _district=[];
      for(let area of res.cinemas ){
        _district.push(area.district.name)
      }
      //数组存在重复数据，使用es6:new Set()去重和Array.from()将类数组对象
      //转为数组
      _district=Array.from(new Set(_district));
      console.log(_district);
      state.district=_district;
    }
  }
}
