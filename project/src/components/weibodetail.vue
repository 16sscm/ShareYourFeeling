<template xmlns:el-col="http://www.w3.org/1999/html">
  <el-card id="card">
    <el-row id="writter">
      <el-col :span="1.6">
      <el-avatar :size="50" :src="circleUrl" id="avatar" style="vertical-align:middle"></el-avatar>
      </el-col>
      <el-col :span="4" id="name">
        <el-row><div class="infor">Test</div></el-row>
        <el-row><div class="infor">10月31日 12:56</div></el-row>
      </el-col>
      <el-col :span="10"></el-col>
      <el-col :span="2"><el-button type="primary" icon="el-icon-circle-plus-outline">关注</el-button></el-col>
    </el-row>
    <el-row>
      <el-col :span="10">
        <div class="content">这是一行内容</div>
      </el-col>
    </el-row>
    <el-row>
      <div class="demo-image">
        <div class="block">
          <el-image
            style="width: 600px; height: 400px"
            :src="url"
            :fit="fit"></el-image>
        </div>
        <div class="smallpic">
          <el-image
            style="width: 75px; height: 50px"
            :src="url"
            :fit="fit" class="small-image"></el-image>
          <el-image
            style="width: 75px; height: 50px"
            :src="url"
            :fit="fit" class="small-image"></el-image>
          <el-image
            style="width: 75px; height: 50px"
            :src="url"
            :fit="fit" class="small-image"></el-image>
          <el-image
            style="width: 75px; height: 50px"
            :src="url"
            :fit="fit" class="small-image"></el-image>
          <el-image
            style="width: 75px; height: 50px"
            :src="url"
            :fit="fit" class="small-image"></el-image>
          <el-image
            style="width: 75px; height: 50px"
            :src="url"
            :fit="fit" class="small-image"></el-image>
          <el-image
            style="width: 75px; height: 50px"
            :src="url"
            :fit="fit" class="small-image"></el-image>
          <el-image
            style="width: 75px; height: 50px"
            :src="url"
            :fit="fit" class="small-image"></el-image>
        </div>
      </div>
    </el-row>
  </el-card>
</template>

<script>
  export default {
    name: 'weibodetail',
    data(){
      return{
        circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
      }
    }
  }
</script>

<style scoped>
 .infor{
   text-align: left;
 }
  #name{
    margin-top: 5px;
  }
  #card{
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
  .content{
    font-style: oblique;
    font-size:20px;
    text-align: left;
    margin-top:20px;
  }
  .small-image{
    margin-left: 0;
    margin-right: 0;
    padding:0;
  }
</style>
