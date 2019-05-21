<template>
    <div >
        <div class="home-main">
            <div class="tagNav">
                <span   v-for="(item,index) in alinks" 
                        v-bind:key="index"
                        @click="chooseTag(item.type)">
                    <router-link :to="{path:'/',query:{tab:item.type}}" 
                                v-bind:class="[tagStyle,{
                                                            tag_topOrGood:(item.type===tab)
                                                        }]">{{item.name}}</router-link>
                </span>
            </div>
            <ul>
                <li v-for="item of list" v-bind:key="item.id" >
                    <router-link :to="{name:'userInfo',params:{loginname:item.author.loginname}}">
                        <img v-bind:src="item.author.avatar_url" >
                    </router-link>
                    <span class="allNum">
                        <span class="returnNum">{{item.reply_count}}</span>/<span class="clickNum">{{item.visit_count}}</span>
                    </span>
                    <span v-bind:class="[tagStyle,{
                                                tag_topOrGood:(item.good===true || item.top===true),
                                                tag_shareOrQuestionOrJob:(item.top===false && item.good===false)
                                            }]" 
                    >{{ item | tagMsg}}</span>
                    <router-link :to="{name:'article',params:{id:item.id}}">
                        <span class="title">{{item.title}}</span>
                    </router-link>
                    <span class="time">{{ item.last_reply_at | formatTime }}</span>
                </li>
            </ul>
              <cnode-pagination @currentPage="chooseTag"></cnode-pagination>
        </div>
    </div>
</template>

<script>
import cnodePagination from "@/components/Pagination.vue";
export default {
    props:["isloading","parentTag"],
    name:"postList",
    data(){
        return{
            list:[],
            page:"",
            tagStyle:"tag",
            alinks:[
                    {
                        type:'all',
                        name:"全部"
                    },
                    {
                        type:'good',
                        name:"精华"
                    },
                    {
                        type:'share',
                        name:"分享"
                    },
                    {
                        type:'ask',
                        name:"问答"
                    },
                    {
                        type:'job',
                        name:"招聘"
                    },
                    {
                        type:"dev",
                        name:"客户端测试"
                    }
                ]
        }
    },
    components:{
        cnodePagination
    },
    computed:{
        flagLoading(){
            return this.isloading
        },
        tab(){
            if(this.parentTag){
                return this.parentTag
            }else{
                return "all"
            }
        }

    },
    methods:{
        getData(){
            this.$http.get(`${this.$url}/topics`,{
               params:{
                    tab:this.tab,
                    page:this.page,
                    limit:20
               }
            }).then(response=>{
                this.list=response.data.data;
                let a = !this.flagLoading;
                this.$emit('getflag',a)   
               
            }).catch(err=>{
                console.log(err)
            })
        },
        chooseTag(value){
            if(typeof value ==='string'){
                this.tab=value;
            }else if(typeof value ==="number"){
                this.page=value
            }
            
            this.getData();   
            this.$emit("restore",true);  
        }, 
        rendList(value){
            this.page=value;
            this.getData();
        
        }
    },
    beforeMount(){
        this.getData();      
    },
    
   
}
</script>

<style scoped>
.home-main{
    width: 1095px
}


.tagNav {
     padding: 5px 10px;
     background: #f5f5f5;
     padding: 10px;
}
.tagNav a:not(.tag_topOrGood){
    color:#80bd01;
}
.tagNav > span{
    font-size: 14px;
    margin:0 10px;
    cursor: pointer;
}
.tagNav > span a:not(.tag_topOrGood):hover{
   color: #005580;
}
li{
    padding: 5px 10px;
    background: #fff;
    border-top:1px solid #f0f0f0;
}
li:hover{
    background: #f5f5f5;
}
img{
    width: 30px;
    height: 30px;
}
.allNum{
    padding-left: 5px;
    display: inline-block;
    width: 70px;
    text-align: center
}
.allNum > .returnNum{
    color:#9e78c0;
}
.allNum > .clickNum{
    color:#b4b4b4;
    font-size: 10px;
}
/* 标志 */
.tag,
.tag_topOrGood,
.tag_shareOrQuestionOrJob{
    border-radius: 5px;
    font-size: 12px;
    padding: 2px 4px;
}
/* 置顶和精华*/
.tag_topOrGood{
    background:#80bd01;
    color: white
}   
/* 分享,问答和招聘 */
.tag_shareOrQuestionOrJob{
    background:#e5e5e5;
    color: #999;
}
.title{
    padding-left: 5px;
    color: #333;
    font-size: 16px;
}
.title:hover{
    text-decoration-line: underline; 
}
.time{
    float: right;
    padding: 9px 0;
}

</style>


