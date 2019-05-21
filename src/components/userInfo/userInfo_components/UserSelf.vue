<template>
    <div >
        <div class="self-header">
           主页
        </div>
        <div class="self-main ">
            <div class="img-wrapper">
                <img :src="userInfoData.avatar_url" alt="">
                <span class="name">{{userInfoData.loginname}}</span>
            </div>
            <p>{{userInfoData.score}} 积分</p>
            <p>9个收藏话题</p>
            <p class="address"> 杭州</p>
            <p class="githubname"> @{{userInfoData.githubUsername}}</p>
            <p class="time">注册时间 {{ userInfoData.create_at  | formatTime }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:["userInfoData"]
}
</script>


<style scoped>
.self-header{
    padding: 10px;
    background: #f6f6f6;
    border-radius: 3px 3px 0 0;
}

.self-main{
    background: #fff;
    border-radius: 3px;
    margin-bottom: 15px;
    width:1095px;
    padding: 10px;
}
.img-wrapper {
    height: 40px;
}
.img-wrapper > img{
    height: 100%;
    width: 40px;
}
.img-wrapper > span{
    color: #778087;
    margin-left: 10px;
}
.self-main >p {
    margin-top: 15px;
}
.self-main > .time{
    color: #ababab;
    font-size: 14px
}
.githubname,
.address{
    color: #778087;
}
.githubname::before{
    content: "";
    display: inline-block;
    background: url("../../../assets/github.png") no-repeat;
    background-size: 15px 15px;
    width: 15px;
    height: 15px;
}
.address::before{
    content: "";
    display: inline-block;
    background: url("../../../assets/address.png") no-repeat;
    background-size: 15px 15px;
    width: 15px;
    height: 15px;
}
</style>


