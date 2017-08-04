<template>
    <div class="header flex_parent">
        <a class="go-menu" @click="showMenu">
            <i class="icon iconfont icon-menu"></i>
        </a>
      <div class="title flex_parent flex_child_1">
          <p class="flex_child_1">
            {{title}}
          </p>
          <a class="go-city">
            广州
            <i class="icon iconfont icon-bottom"></i>
          </a>
      </div>
      <router-link :to="{name:'user'}" class="go-mine">
        <i class="icon iconfont icon-people"></i>
      </router-link>
    </div>
</template>
<script>
  export default{
      name:'header',
      data (){
          return {
            title:'卖座电影'
          }
      },
      methods:{
          showMenu(){
              return this.$store.dispatch('changeLeftMenu',true)
          }
      }
  }
</script>
<style scoped lang="scss">
  .header{
    background-color: #282828;
    color:#999;
    position: fixed;
    z-index: 500;
    height: .8rem;
    line-height: .8rem;
    p{
      text-align: left;
      padding-left: 0.2rem;
      color:#ffffff;
      font-size: 16px;
    }
    a{
      display: inline-block;
    }
    .go-menu,.go-mine{
      width: auto;
      padding:0 0.2rem;
      color:#999;
    }
    .go-menu{
      border-right: 1px solid #222;
      box-shadow: 1px 0 1px #363636;
    }
  }
</style>
