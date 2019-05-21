<template>
  <div id="app">
      <cnode-head></cnode-head>
      <router-view ></router-view>
      <!-- <router-view :name="article"></router-view> -->
  </div>
</template>

<script>
import cnodeHead from './components/Header.vue'
import cnodeHome from './components/home/Home.vue'
export default {
  name: 'App',
  components:{
    cnodeHead
  }
}
</script>

<style>
/* 初始化css */
@import url(./assets/reset.css);

.clearfix::after{
  content: '';
  display: block;
  clear:both;
}
html{
  background: #e1e1e1;
}
/* ---------------- */
.home-loading{
    margin-top: 15px;
}
.main{
   width: 90%;
   margin: 15px auto 0;
   max-width: 1400px; 
   min-width: 960px; 
   display: flex;
   flex-direction: row;
   justify-content: space-between;
}

.main-right{
    width: 290px;
    margin-left: 15px;
    /* border:1px red solid; */
}


</style>
