<template>
  <div class="header">
    <div class="inner-header clearfix">
        <router-link :to="{path:'/'}" class="home">
            <img src="http://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="logo">
        </router-link>
        <input class="search"/>
        <ul class="clearfix">
            <li>首页</li>
            <li>新手入门</li>
            <li>API</li>
            <li>关于</li>
            <li>注册</li>
            <li>登录</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.header {
  width: 100%;
  height: 50px;
  background: #444;
  min-width: 960px;
}
.inner-header {
    height: 40px;
    margin: 0 auto;
    padding-top: 5px;
    max-width: 1400px;
    
}
.home {
  width: 160px;
  height: 40px;
  display: inline-block;
  text-align: center;

}
.home>img{
    width: 120px;
    height: 30px;
    padding-top: 5px;
    
}
.search{
    border-radius: 15px;
    margin-top: 7px;
    background: url(../assets/search.png)  no-repeat #888;
    background-size: 20px 20px;
    background-position-x: 5px;
    background-position-y: 3px;
    padding: 3px 5px 3px 30px;
    transition: all .5s;
}
.search:hover{
    
    background: url(../assets/search.png)  no-repeat white;
    background-size: 20px 20px;
    background-position-x: 5px;
    background-position-y: 3px;
}
ul {
    float: right;
    font-size: 13px;
    color:#ccc;
}
ul>li{
    float: left;
    padding: 13px;
}

</style>

