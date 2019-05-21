<template>
    <div class="article-main ">
        <div class="article-header clearfix">
            <h1>
                <span v-if="articleData.top===true" class="tag_topOrGood">置顶</span>
                <sapn v-else-if="articleData.good===true" class="tag_topOrGood">精华</sapn>
                {{articleData.title}}
            </h1>
            <ul class="clearfix">
                <li>•发布于{{articleData | formatTime}}</li>
                <li>•作者{{articleData.author.loginname}}</li>
                <li>•{{articleData.visit_count}}次浏览</li>
                <li>•来自{{articleData | tagMsg}}</li>
            </ul>
            <button>收藏</button>
        </div>
        <div class="article-content" v-html="articleData.content" id="content" ></div>
    </div>
</template>

<script>
export default {
    props:["articleData"],
}
</script>

<style scoped>
.article-content{
    padding: 15px 20px;
}

.article-main{
    background: #fff;
    border-radius: 3px;
    margin-bottom: 15px;
    width:1095px;
}
.article-header{
    padding: 10px;
    border-bottom: 1px solid #ccc;
    position: relative;
}
.article-header>h1{
    font-size: 22px;
    font-weight: 700;
    margin:8px 0;
}
.article-header>ul{
    padding: 15px 0;
}
.article-header>ul>li{
    float: left;
    font-size: 12px;
    color:#838383;
    margin: 3px 5px;
}
.article-header>button{
    float: right;
    color: #fff;
    background: #80bd01;
    border-radius: 3px;
    padding: 10px 15px;
    position: absolute;
    bottom: 15px;
    right: 10px;
}

.tag_topOrGood{
    background:#80bd01;
    color: white;
    border-radius: 5px;
    font-size: 12px;
    padding: 2px 4px;
} 
</style>

<style>
@import url('../../../assets/markdown-github.css');
</style>




