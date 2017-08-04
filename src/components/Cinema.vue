<template>
  <div class="cinema">
      <div class="section" v-for="(area,index) in districts">
          <div class="district">{{area}}</div>
          <div class="main"  v-for="list in lists" v-if="list.district.name==area">
            <a :href='"http://m.maizuo.com/v4/?co=maizuo#!/film/"+_id+"/cinema"'>
              <div class="flex_parent">
                <div class="list_left flex_child_1">
                  <h3 class="title">
                    {{list.name | filterVal(12)}}
                    <span class="icon-zuo">座</span>
                    <span v-if="list.itemTypes.length>3" class="icon-tong">通</span>
                  </h3>
                  <div class="discount">
                    <span v-for="label in list.labels">{{label.name}}</span>
                  </div>
                  <p class="address">{{list.address | filterVal(25)}}</p>
                  <p class="detail">
                    <span>距离未知</span> | <span>剩余{{list.avaliableSchedule}}场</span>
                  </p>
                </div>
                <div class="list_right">¥ {{list.minimumPrice}}</div>
              </div>
            </a>
          </div>
      </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default{
    data(){
      return {
          show:false,
      }
    },
    computed:{
      ...mapState({
        districts:state=>state.CinemaStore.district,
        lists:state=>state.CinemaStore.lists
      }),
      _id(){
          return this.$route.params.id
      }
    },
    created(){
        let id=this.$route.params.id;
        console.log('id:'+id);
        this.$store.dispatch('getCinemaList',id)
    },
    filters:{
      filterVal(val,len){
          let length=val.length;
          if(val.length>=len){
            return val.substring(0,len)+'...'
          }
          return val;
      }
    },
  }
</script>
<style scoped lang="scss">
  .cinema{
    padding-top:.8rem;
    background-color: #fff;
    color:#333;
    .section{
      margin-bottom: 1px;
    }
    .district{
      font-size: 14px;
      line-height: 0.7rem;
      background-color: #e1e1e1;
      padding-left: 0.2rem;
      color:#333;
    }
    .main{
      border-bottom: 1px solid #e1e1e1;
      padding: 0.3rem 0.25rem;
      a:hover, a:visited, a:link, a:active {
        text-decoration: none;
        color:#333;
      }
      .flex_parent{
        align-items:baseline;
        .list_left{
          text-align: left;
          display: inline-block;
          .title{
            font-size: 16px;
            padding-bottom: 0.1rem;
            font-weight: 100;
            line-height: .3rem;
            span{
              font-size: 10px;
              border-radius: 50%;
              border:1px solid #fc8558;
              display: inline-block;
              color:#fc8558;
              width: 0.3rem;
              height: 0.3rem;
              line-height: 0.3rem;
              text-align: center;
              margin-left: 0.05rem;
            }
            .icon-tong{
              color:#88aec8;
              border:1px solid #88aec8;
            }
          }
          .discount{
            padding-bottom:0.1rem;
            span{
              font-size: 10px;
              color:#fff;
              background-color: #ff9658;
              border-radius: 0.05rem;
              padding:0 0.15rem;
              margin-right: 0.2rem;
            }
          }
          .address,.detail{
            font-size: 12px;
            color:#ccc;
            line-height: 0.32rem;
          }
        }
        .list_right{
          width: 1.2rem;
          text-align: center;
          font-size: 16px;
          color:#fc8637;
        }
      }
    }
  }
</style>
