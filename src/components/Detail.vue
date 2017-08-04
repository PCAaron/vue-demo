<template>
  <div class="detail">
      <div class="img">
        <img :src="detail.cover.origin"/>
      </div>
      <div class="desc">
          <h3>影片简介</h3>
          <div class="info">
              <ul>
                <li class="flex_parent">
                  <div class="info_left">导演</div> :
                  <div class="info_right flex_child_1">{{detail.director}}</div>
                </li>
                <li class="flex_parent">
                  <div class="info_left">主演</div> :
                  <div class="info_right flex_child_1">
                    <span v-for="item in detail.actors">{{item.name}} | </span>
                  </div>
                </li>
                <li class="flex_parent">
                  <div class="info_left">地区语言</div> :
                  <div class="info_right flex_child_1">{{detail.nation}} ({{detail.language}})</div>
                </li>
                <li class="flex_parent">
                  <div class="info_left">类型</div> :
                  <div class="info_right flex_child_1">{{detail.category}}</div>
                </li>
                <li class="flex_parent">
                  <div class="info_left">上映时间</div> :
                  <div class="info_right flex_child_1">{{detail.premiereAt | filterDate}}</div>
                </li>
              </ul>
              <p>{{detail.synopsis}}</p>
          </div>
      </div>
      <div class="operation" v-if="detail.isNowPlaying">
        <router-link :to="{name:'cinema',params:{id:detail.id}}" class="go-pay">
          立即购票
        </router-link>
      </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
      computed:{
        ...mapGetters({
          detail:'getFilmDetail',
        })
      },
      created(){
          let id=this.$route.params.id;
          console.log('id:'+id);
          this.$store.dispatch('getFilmDetail',id)
      },
      filters:{
        filterDate(time){
            let date=new Date(time),
              month=date.getMonth()+1,
              day=date.getDate();
            return month+'月'+day+'日上映'
        }
      }
  }
</script>
<style scoped lang="scss">
  .detail{
    padding-top: .8rem;
    background-color: #e1e1e1;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    h3{
      color:#333;
      font-size: 16px;
      font-weight: normal;
      line-height: 0.4rem;
      padding-left:0.1rem;;
      border-left: 0.25rem solid RGB(228, 200, 156);
      margin:0.25rem auto 0.1rem;
    }
    .info{
      font-size: 10px;
      color:#333;
      padding: 0.25rem;
      li{
        line-height: .4rem;
      }
      .info_left{
        display: inline-block;
        width: 1rem;
        text-align: justify;
        text-align-last: justify;
      }
      .info_right{
        padding-left:0.15rem;
        text-align: left;
      }
      p{
        padding-top:0.15rem;
        line-height: .35rem;
      }
    }
    .operation{
      text-align: center;
      padding:0.15rem 0 0.25rem;
      .go-pay{
        display: inline-block;
        width: auto;
        line-height: 0.65rem;
        text-decoration: none;
        color:#fff;
        background-color: #fe8233;
        padding:0 0.85rem;
        border-radius: 0.35rem;
      }
    }
  }
</style>
