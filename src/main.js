// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

Vue.prototype.$http=Axios
Vue.config.productionTip = false
Vue.prototype.$url="https://cnodejs.org/api/v1"

Vue.filter("tagMsg",function(item){
  if(item.good===true){
      return "精华";
  }else if(item.top===true){
      return "置顶"
  }else if(item.tab==="share"&&item.top===false &&item.good===false){
      return "分享"
  }else if(item.tab==="ask" && item.top===false &&item.good===false){
      return "问答"
  }else if(item.tab ==="job" && item.top===false &&item.good===false){
      return "招聘"
  }
})

Vue.filter("formatTime" ,function(time){
  let date = new Date();
  let last = new Date(time);
  let timeDifference = date.getTime()-last.getTime();
  //hours
  let hour = timeDifference/1000/60/60
  if(hour>=24){
      let day= Math.floor(hour/24);
      if(day>=365){
        return Math.floor(day/365)+"年前"
      }else{
        return Math.floor(hour/24)+"天前";
      }
  }else if(hour<24 && hour > 0){
      if(Math.floor(hour)===0){
          return  Math.floor(hour*60)+"分钟前";
      }else{
          return  Math.floor(hour) + "小时前";
      }
      
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
