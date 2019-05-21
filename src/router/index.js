import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/home/Home.vue"
import Article from "@/components/article/Article.vue"
import UserInfo from "@/components/userInfo/userInfo.vue"

Vue.use(Router)

var router = new Router({
    routes:[
      {
        path:"/",
        name:"home",
        component:Home,  
      },
      {
        path:"/:tab",
        component:Home
      },
      {
        path:"/article/:id",
        name:"article",
        component:Article
      },
      {
        path:"/user/:loginname",
        name:"userInfo",
        component:UserInfo
      }
    ], 
})
export default router
