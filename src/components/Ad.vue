<template>
    <div>
       <ul class="ad">
           <li class="ad-item"><img src="@/assets/ad1.png"></li>
           <li class="ad-item"><img src="@/assets/ad2.png"></li>
           <li class="ad-item"><img src="@/assets/ad3.png"></li>
       </ul>
    </div>
</template>

 <script>
 export default {
     
 }
 </script>

 <style scoped>
.ad>.ad-item>img{
    height: auto;
    max-width: 100%;
    vertical-align:middle
}
.ad{
    padding: 10px;
    border-radius:0 0 3px 3px;
    background: #fff;
}
.ad>li:not(:first-child){
    margin-top: 10px;
}
 </style>
 
 
