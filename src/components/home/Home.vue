<template>
    <div class="clearfix">
        <div v-show="isloading" class="home-loading">
            <cnode-loading ></cnode-loading>
        </div>
        <div v-show="isshow" class="main">
            <div class="main-left">
                <cnode-post-list  :isloading="isloading" 
                                  :parentTag="tab"  
                                  @getflag="changeFlag" 
                                  @restore="restore" 
                                  :page="page"></cnode-post-list>
              
            </div>
            <div class="main-right">
                <cnode-ad></cnode-ad>
            </div>
        </div>

    </div>
</template>

<script>
import cnodePostList from './home_components/PostList.vue'
import cnodeAd from "@/components/Ad.vue"
import cnodeLoading from "@/components/Loading.vue"
import cnodePagination from '@/components/Pagination.vue'
export default {
    data(){
        return {
            isloading:true,
            isshow:false,
           
        }
    },

    components:{
        cnodePostList,
        cnodeAd,
        cnodeLoading,
        cnodePagination
    },
    methods:{
        changeFlag(value){
            this.isloading=value;
            this.isshow=!value
        },
        restore(value){
            this.isloading=value;
            this.isshow = !value
        }
       
    },
    computed:{
        tab(){
            return this.$route.query.tab
        }
    }
}
</script>

<style >

</style>


