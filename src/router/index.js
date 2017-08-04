import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Film from '@/components/Film'
import Cinema from '@/components/Cinema'
import Detail from '@/components/Detail'
import User from '@/components/User'

Vue.use(Router);

const routes=new Router({
  linkActiveClass:"active",
  history:true,
  routes:[
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path:'/detail/:id',
      name:'detail',
      component:Detail
    },
    {
      path:'/cinema/:id',
      name:'cinema',
      component:Cinema
    },
    {
      path:'/film/:type',
      name:'film',
      component:Film
    },
    {
      path:'/user',
      name:'user',
      component:User,
      meta:{
        requireAuth:true
      }
    },
  ]
});

export default routes;
