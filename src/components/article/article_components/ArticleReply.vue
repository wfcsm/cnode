<template>
    <div class="article-reply">
        <div class="article-reply-header">
            {{articleData.replies.length}}
            回复
        </div>
        <ul>
            <li class="clearfix" v-for="(item,index) in articleData.replies" v-bind:key="item.id">
                <router-link :to="{name:'userInfo',params:{loginname:item.author.loginname}}">
                    <div class="photo-wrapper">
                        <img v-bind:src="item.author.avatar_url" alt="profile photo">
                    </div>
                </router-link>
                <p>{{item.author.loginname}}<span>{{index+1}}楼•{{ item.create_at | formatTime}}</span></p>
                <div id="content" v-html="item.content" class="article-content"></div>
            </li>
        </ul>
    </div>
</template>
5cbfdf9a37faec0ce1d05c70
<script>
export default {
    props:["articleData"],
}
</script>

<style scoped >
.article-reply{
    border-radius: 3px;
    width:1095px; 
}
.article-reply > .article-reply-header{
    padding: 10px;
    background: #f6f6f6;
    border-radius: 3px 3px 0 0;
}
.article-reply>ul>li{
    background: #fff;
    padding: 10px;
    border-top: 1px solid #f0f0f0;
}
.photo-wrapper{
    width: 30px;
    height: 30px;
    float: left;
}
.photo-wrapper>img{
    width: 100%;
    height: 100%;
}
.article-reply>ul>li>p{
    color: #666;
    font-size: 12px;
    margin-left: 40px;
}
.article-reply>ul>li>p>span{
    color: #0088cc;
    font-size: 11px;
    margin-left: 5px;
}
.article-content{
    margin-left: 40px;
}
</style>
<style>
@import url("../../../assets/markdown-github.css");
</style>


