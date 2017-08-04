<template>
  <div class="film">
      <div class="tab">
        <ul class="flex_parent">
          <li class="flex_child_1" @click="changeType('now-playing')" :class="type=='now-playing'?'active':''">正在上映</li>
          <li class="flex_child_1" @click="changeType('coming-soon')" :class="type=='coming-soon'?'active':''">即将上映</li>
        </ul>
      </div>
      <div class="content">
        <ul class="now-playing-list" v-show="type=='now-playing'" >
          <router-link :to="{name:'cinema',params:{id:list.id}}" tag="li"  v-for="list in nowList" :key="list.id">
            <div class="flex_parent" >
              <div class="content_left">
                <img :src="list.poster.thumbnail"/>
              </div>
              <div class="content_main flex_child_1">
                <h3 class="title one_ellipsis">{{list.name}}</h3>
                <p class="desc">{{list.intro}}</p>
                <p class="detail">
                  <span><span class="detail_color">{{list.cinemaCount}}</span>家影院上映</span>
                  <span><span class="detail_color">{{list.watchCount}}</span>人购票</span>
                </p>
              </div>
              <div class="content_right"><span>{{list.grade}}</span>></div>
            </div>
          </router-link>
        </ul>
        <ul class="coming-soon-list" v-show="type=='coming-soon'">
          <router-link :to="{name:'cinema',params:{id:list.id}}" tag="li"  v-for="list in comingList" :key="list.id">
            <div class="flex_parent" >
              <div class="content_left">
                <img :src="list.poster.thumbnail"/>
              </div>
              <div class="content_main flex_child_1">
                <h3 class="title one_ellipsis">{{list.name}}</h3>
                <p class="desc">{{list.intro}}</p>
                <p class="detail">
                  <span class="time">{{list.premiereAt | filterDate}}</span>
                </p>
              </div>
              <div class="content_right"> > </div>
            </div>
          </router-link>
        </ul>
      </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
      data(){
          return {
              type:''
          }
      },
      computed:{
        ...mapGetters({
          nowList:'nowList',
          comingList:'comingList'
        })
      },
      created(){
        this.type=this.$route.params.type;
        //console.log(this.type);
        if(this.type=='now-playing' && this.nowList.length===0){
            this.$store.dispatch('getNowList')
        }else if(this.type=='coming-soon' && this.comingList.length==0){
            this.$store.dispatch('getComingList')
        }
      },
      filters:{
        filterDate(time){
            let date=new Date(time),
              month=date.getMonth()+1,
              day=date.getDate(),
              num=date.getDay();
            let week=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];

            return month+'月'+day+'日上映  '+week[num]
        }
      },
      methods:{
        changeType(type){
            console.log('type:'+type);
            if(this.type==type){
                return false
            }
            this.type=type;
            if(this.type=='now-playing' && this.nowList.length===0){
              this.$store.dispatch('getNowList')
            }else if(this.type=='coming-soon' && this.comingList.length==0){
              this.$store.dispatch('getComingList')
            }
        }
      }
  }
</script>
<style scoped lang="scss">
  .film{
    background-color: #fff;
    padding:0.8rem 0.25rem 0;
    .tab{
      border-bottom: 1px solid #fe6e00;
      line-height: .8rem;
      li{
        font-size: 16px;
        color:#6a6a6a;
        border-bottom: 3px solid transparent;
      }
      li.active{
          color:#fe6e00;
          border-bottom: 3px solid #fe6e00 ;
      }
    }
    .content{
      .now-playing-list li,.coming-soon-list li{
        padding:0.3rem 0;
        border-bottom: 1px dashed #c9c9c9 ;
        .flex_parent{
          align-items: inherit;
        }
        .content_left{
          display: inline-block;
          width: 1rem;
          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .content_main{
          text-align: left;
          padding:0 0.2rem;
          h3{
            font-size: 16px;
            font-weight: 100;
            line-height: .45rem;
            padding-bottom:0.25rem;
          }
          p{
            color:#8e8e8e;
            font-size: 12px;
            line-height: .35rem;
            >span{
              padding-right: 0.15rem;
            }
          }
          .detail_color{
            color:#8aa2bf
          }
          .time{
            color:#ffb375
          }
        }
        .content_right{
          color:#8e8e8e;
          font-size: 16px;
          text-align: center;
          span{
            color:#fc7103;
          }
        }
      }
    }
  }
</style>
