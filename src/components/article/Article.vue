<template>
    <div class="clearfix">
        <!-- loading -->
        <div v-show="isloading" class="home-loading">
            <cnodeLoading ></cnodeLoading>
        </div>
        <!--内容  -->
        <div v-show="isshow" class="main">
            <div class="main-left">
                <cnode-article-panel  :articleData="articleData"></cnode-article-panel>
                <cnode-article-reply :articleData="articleData" class="reply" ></cnode-article-reply>
            </div>
           
            <div class="main-right">
                <cnode-ad></cnode-ad>
            </div>
            
        </div>
    </div>
</template>

<script>

import cnodeAd from "@/components/Ad.vue"
import cnodeArticlePanel from "./article_components/ArticlePanel.vue"
import cnodeArticleReply from "./article_components/ArticleReply.vue"
import cnodeLoading from "@/components/Loading.vue"
export default {
    data(){
        return{
            articleData:undefined,
            isloading:true,
            isshow:false
        }
    },
   components:{
       cnodeArticlePanel,
       cnodeArticleReply,
       cnodeAd,
       cnodeLoading
   },
   methods:{
        getData(){
            this.$http.get(`${this.$url}/topic/${this.$route.params.id}`)
                      .then(res=>{
                         this.articleData =res.data.data;
                         this.isloading=false;
                         this.isshow=true;
                      })
                      .catch(err=>{
                          console.log(err)
                      })
        }
   },
   beforeMount:function(){
       this.getData();
   }
}
</script>

<style >
/* .main{
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
    border:1px red solid;
} */

.reply{
    
}
</style>



