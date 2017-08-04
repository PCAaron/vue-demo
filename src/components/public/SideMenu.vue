<template>
    <div class="sideMenu">
        <div class="sideContainer" v-show="show" @click="hideMenu">
            <div class="sideOverlay">
              <transition name="leftMenu">
                <nav>
                  <ul>
                    <li v-for="menu in lists">
                      <router-link :to="menu.url">
                        <span>{{menu.name}}</span>
                        <i class="icon iconfont icon-right"></i>
                      </router-link>
                    </li>
                  </ul>
                </nav>
              </transition>
            </div>
        </div>
    </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default{
    computed:{
      ...mapState({
        lists:state=>state.SideMenuStore.lists
      }),
     show(){
          return this.$store.getters.leftMenuState
     }
    },
    methods:{
      hideMenu(){
        this.$store.dispatch('changeLeftMenu',false)
      }
    }
  }
</script>
<style scoped lang="scss">
  .sideMenu{
    transition: all ease .4s;
  }
  .sideMenu-enter-active,.sideMenu-leave-active{
    transition: all ease .4s;
  }
  .sideMenu-enter,.sideMenu-leave-active{
    opacity: 0;
  }
  .leftMenu-enter-active,.leftMenu-leave-active{
    transition: right ease .4s;
  }
  .leftMenu-enter,.leftMenu-leave-active{
    right:1.8rem;
  }
  .sideContainer{
    position: fixed;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    color:#9a9a9a;
    z-index: 999;
    .sideOverlay{
        background-color:rgba(0,0,0,.15);
        position: absolute;
        top:0.8rem;
        right:0;
        left:0;
        bottom:0;
      nav{
        border-top:1px solid #222;
        box-shadow: 0 1px 1px #363636 inset;
        background-color:#282828;
        display: block;
        position: absolute;
        right:1.8rem;
        left: 0;
        top:0;
        bottom:0;
        height: 100%;
        li{
          overflow: hidden;
          line-height: .8rem;
          height: .85rem;
          a{
            display: block;
            border-bottom:1px dotted #333;
            width: 90%;
            margin:0 auto;
            color:#9a9a9a;
            font-size: 14px;
            text-decoration: none;
            i{
              float: right;
              font-size: 14px;
              color:#666;
            }
          }
        }
      }
    }
  }
</style>
