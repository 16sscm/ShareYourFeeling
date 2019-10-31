<template>
    <el-row class="foot">
     <div id="copy">@copyright UnExist.Inc Since 2019</div>
    </el-row>
</template>

<script>
  export default {
    name: 'webfooter'
  }
</script>

<style scoped>
 .foot{
   background-color: #409EFF;
   height: 70px;
   text-align: center;
   font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
   font-size: 20px;
   font-style: italic;
   color: white;
 }
  #copy{
    margin-top: 20px;
  }
</style>
