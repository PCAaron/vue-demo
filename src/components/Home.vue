<template>
  <div class="home">
      <div class="banner">
          <swiper :options="swiperOption" class="banner-swiper">
              <swiper-slide class="slide" v-for="banner in banners" :key="banner.id">
                <a target="_blank" :href="banner.url">
                  <img :src="banner.imageUrl" :alt="banner.name"/>
                </a>
              </swiper-slide>
          </swiper>
      </div>
      <div class="now-playing">
          <ul class="item">
            <router-link :to="{name:'detail',params:{id:list.id}}" :key="list.id" tag="li"  v-for="list in nowPlay">
                <img :src="list.cover.origin"/>
                <div class="desc flex_parent">
                    <div class="info flex_child_1">
                        <h4>{{list.name}}</h4>
                        <p>{{list.cinemaCount}}家影院上映{{list.watchCount}}人购票</p>
                    </div>
                    <div class="count">{{list.grade}}</div>
                </div>
            </router-link>
          </ul>
          <router-link :to="{name:'film',params:{type:'now-playing'}}" class="go-more">
              更多热映电影
          </router-link>
      </div>
      <div class="coming-title">
        <h3>即将上映</h3>
      </div>
      <div class="coming-soon">
          <ul class="item">
            <router-link :to="{name:'detail',params:{id:list.id}}" :key="list.id" tag="li"  v-for="list in coming ">
              <img :src="list.cover.origin"/>
              <div class="desc flex_parent">
                <div class="info flex_child_1">
                  <h4>{{list.name}}</h4>
                </div>
                <div class="count">{{list.premiereAt | filterDate}}</div>
              </div>
            </router-link>
          </ul>
          <router-link :to="{name:'film',params:{type:'coming-soon'}}" class="go-more">
            更多即将上映电影
          </router-link>
      </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {swiper,swiperSlide} from 'vue-awesome-swiper'
  export default{
      data(){
        return{
            swiperOption:{
                autoplay:3000,
                autoHeight:true,
                loop:true,
            }
        }
      },
      components:{
          swiper,swiperSlide
      },
      computed:{
        ...mapGetters({
          banners:'getBannerList',
          nowPlay:'getNowPlaying',
          coming:'getComingSoon'
        })
      },
      filters:{
        filterDate(time){
          let date=new Date(time),
            month=date.getMonth()+1,
            day=date.getDate();
          return month+'月'+day+'日上映'
        }
      },
      created(){
        if(this.banners.length===0){
            console.log('bannerList.length:'+this.banners.length);
            this.$store.dispatch('getBannerList');
        }
        if(this.nowPlay.length===0){
            console.log('hot.length:'+this.nowPlay.length);
            this.$store.dispatch('getNowPlaying')
        }
        if(this.coming.length===0){
            this.$store.dispatch('getComingSoon')
        }
      },
  }
</script>
<style scoped lang="scss">
  .home{
    background-color: #e1e1e1;
    padding-top:.8rem;
    .banner-swiper{
      height: 3.6rem;
      color:#ffffff;
      .slide img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .now-playing,.coming-soon{
      padding:0.25rem 0.25rem 0;
      .item li{
        background-color: #f9f9f9;
        margin-bottom:0.25rem;
        box-shadow: 0 0 4px rgba(0,0,0,.4);
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .desc{
          padding:0.15rem 0.2rem;
          .info{
            font-size: 12px;
            text-align: left;
            h4{
              font-weight: 100;
              line-height: .3rem;
            }
            p{
              font-size: 10px;
              color:#9a9a9a;
            }
          }
          .count{
            color:#f78360;
            font-weight: 500;
          }
        }
      }
    }
    .coming-soon{
      padding-bottom:0.25rem;
    }
    .coming-title{
      width: 100%;
      border-bottom:1px solid #a8a8a8;
      margin-bottom: 0.5rem;
      text-align: center;
      h3{
        color:#eee;
        background-color:#a7a7a7;
        font-size: 10px;
        font-weight: 100;
        padding:0.05rem 0.15rem;
        border-radius: 0.1rem;
        text-align: center;
        display: inline-block;
        width: auto;
        transform: translateY(50%);
      }
    }
    .go-more{
      display: block;
      width: 2.5rem;
      font-size: 12px;
      line-height: .45rem;
      text-align: center;
      text-decoration: none;
      border:1px solid #aaa;
      border-radius: 0.25rem;
      color:#616161;
      margin:0.1rem auto 0.35rem;
    }
  }
</style>
