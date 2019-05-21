<template>
        <div class="home-main">
            <div class="tagNav">
               最近创建的话题
            </div>
            <ul>
                <li v-for="item in a" v-bind:key="item.id" >

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
        </div>
  
</template>

<script>

export default {
    props:["userInfoData"],
    data(){
        return{
            a:""
        }
    },
     computed:{
        // list(){
        //    return this.userInfoData.recent_topics.slice(0,5)
        // }        
    },
    mounted(){
       this.a = this.userInfoData.recent_topics.slice(0,5)
    }
}
</script>

<style scoped>
.tagNav {
     padding: 5px 10px;
     background: #f5f5f5;
     padding: 10px;
}
.home-main{
    margin-bottom: 15px;
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


