<template>
  <div id="app">
    <!-- 头部 -->
    <app-header :poiInfo = "poiInfo"></app-header>

    <!-- 导航 -->
    <app-nav :commentNum="commentNum">导航</app-nav>

    <!-- 内容 -->
    <!-- 路由之间切换不刷新，保持原本的状态 -->
    <keep-alive>  
      <router-view></router-view>
    </keep-alive>
    
  </div>
</template>

<script>
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
export default {
  name: 'App',
  components:{
    "app-header":Header,
    "app-nav":Nav
  },
  data(){
    return{
      poiInfo:{},
      commentNum:0
    }
  },
  created(){
    this.axios.get("/api/goods").then(res=>{
      if(res.data.code==0){
        this.poiInfo = res.data.data.poi_info
      }
    })

    this.axios.get("/api/ratings").then(res=>{
      if(res.data.code==0){
        this.commentNum = res.data.data.comment_num
      }
    })
    
  }
}
</script>

<style>

</style>
