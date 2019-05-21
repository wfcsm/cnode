<template>
    <div class="clearfix">
        <div v-show="isloading" class="home-loading">
            <cnode-loading ></cnode-loading>
        </div>
        <div v-show="isshow" class="main">
            <div class="main-left">
                <cnode-self :userInfoData="userInfoData" v-if="userInfoData.avatar_url !==''"></cnode-self>
                <cnode-recent-topics :userInfoData="userInfoData" ></cnode-recent-topics>
                <cnode-recent-replies :userInfoData="userInfoData" ></cnode-recent-replies>
            </div>
            <div class="main-right">
                <cnode-ad></cnode-ad>
            </div>
        </div>
    </div>
    
</template>

<script>
import cnodeAd from "@/components/Ad.vue"
import cnodeLoading from "@/components/Loading.vue"
import cnodeSelf from "./userInfo_components/UserSelf.vue"
import cnodeRecentTopics from "./userInfo_components/RecentTopics.vue"
import cnodeRecentReplies from "./userInfo_components/RecentReplies.vue"
export default {
    data(){
        return{
            isloading:true,
            isshow:false,
            userInfoData:undefined,
        }
    },
    components:{
        cnodeAd,
        cnodeLoading,
        cnodeSelf,
        cnodeRecentTopics,
        cnodeRecentReplies
    },
    methods:{
        getData(){
             this.$http.get(`${this.$url}/user/${this.$route.params.loginname}`)
                 .then(res=>{
                     if(res.status === 200){
                         if(res.data.success){
                          
                            this.userInfoData=res.data.data;
                            
                            this.isloading=false;
                           
                            this.isshow=true
                           
                         }
                     }           
                    
                 })
                 .catch(err=>{
                     console.log(err)
                 })
        }
    },
    beforeMount(){
        this.getData();
    },

    
}
</script>

<style scoped>

</style>



