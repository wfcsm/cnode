<template>
    <div  class="loading">
            <img src="@/assets/loading.png" >
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.loading{
    width: 50px;
    height: 50px;
    margin: 0 auto;
}
.loading img{
    width: 100%;
    height: 100%;
    animation: rotate 3s linear infinite; 
}
/* 旋转动画 */
@keyframes rotate{
		0%{transform:rotate(0deg);}
 
		25%{transform:rotate(90deg);}
 
		50%{transform:rotate(180deg);}
 
		75%{transform:rotate(270deg);}
 
		100%{transform:rotate(360deg);}
}
</style>

