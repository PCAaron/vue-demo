<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <side-menu></side-menu>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import AppHeader from './components/public/Header.vue'
  import SideMenu from './components/public/SideMenu.vue'
  export default {
    name: 'app',
    components:{
        AppHeader,SideMenu
    },
    computed:{

    },
    created(){

    },
    watch:{

    }
  }
</script>

<style>
#app {

}
</style>
