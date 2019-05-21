<template>
    <div class="pagination">
        <ul class="clearfix">
            <li @click="firstPage"> 首页</li>
            <li @click="previousPage" id="previousPage">上一页</li>
            <li v-if="previosMore">...</li>
            <li v-for="(btn,index) in pagebtn" :key="index" 
                @click.stop="changeBtn(btn)"
                :class="[{currentPage:btn === currentPage},'pagebtn']">
                {{btn}}
                </li>
            <li @click="nexPage" id="nexPage">下一页</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            pagebtn:[1,2,3,4,5,'...'],
            currentPage:1,
            previosMore:false
        }
    },
    methods:{
        changeBtn(page){
            if(page!=='...'){
                this.currentPage = page;
            }
            
            if(page === this.pagebtn[4]){
                this.pagebtn.shift();//移除第一个元素
                this.pagebtn.splice(4,0,this.pagebtn[3]+1)//添加最后一个
                this.previosMore=true;
            }else if(page === this.pagebtn[0] && page !==1){
               
                this.pagebtn.unshift(this.pagebtn[0]-1);
                this.pagebtn.splice(5,1);
                if(page===2){
                    this.previosMore=false;
                }
               
            }
        },
        firstPage(){
            this.currentPage=1;
            this.pagebtn=[1,2,3,4,5,'...'];
        },
        previousPage(){
            if(this.currentPage !==1){
                this.currentPage--;
                if(this.currentPage === this.pagebtn[0] && this.currentPage !==1){
                    this.pagebtn.unshift(this.pagebtn[0]-1);
                    this.pagebtn.splice(5,1)     
                     if(this.currentPage===2){
                        this.previosMore=false;
                    }  
                }
            }     
        },
        nexPage(){
            this.currentPage++;
            if(this.currentPage===this.pagebtn[4]){
                this.pagebtn.shift();
                this.pagebtn.splice(4,0,this.pagebtn[3]+1)
                this.previosMore=true;      
            }
            
        }
    },
    updated(){
        this.$emit("currentPage",this.currentPage)
    }
}
</script>

<style scoped>
.pagination{
  height: 40px;
  background: #fff;
}
.pagination > ul{
    margin-left: 20px;
    padding-top: 10px;
}
.pagination > ul > li{
    float: left;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border:1px solid #ccc;
    cursor: pointer;
}
.pagination > button{
    background: #fff;

}
.currentPage{
    background: brown;
}
#previousPage,
#nexPage {
    width: 50px;
}
</style>


