import Vue from 'vue'
import Vuex from 'vuex'

import CommonStore from './CommonStore'
import SideMenuStore from './SideMenuStore'
import HomeStore from './HomeStore'
import DetailStore from './DetailStore'
import CinemaStore from './CinemaStore'
import FilmStore from './FilmStore'

Vue.use(Vuex);

const store=new Vuex.Store({
  modules:{
    CommonStore,SideMenuStore,HomeStore,DetailStore,CinemaStore,FilmStore
  }
});

export default store;
