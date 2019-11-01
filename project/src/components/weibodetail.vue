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
      <el-col :span="2"><el-button type="primary" icon="el-icon-circle-plus-outline">关注</el-button></el-col>
      <el-col :span="14">
        <span style="color: white">space</span>
      </el-col>
      <el-col :span="2">
        <el-button type="danger" icon="el-icon-delete" ></el-button>
      </el-col>
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
    <el-row id="infor">
      <el-col :span="6">
        <i class="el-icon-star-off"></i>
        <span>收藏</span>
      </el-col>
      <el-col :span="6">
        <i class="el-icon-position"></i>
        <span>114514</span>
      </el-col>
      <el-col :span="6">
        <i class="el-icon-chat-dot-square"></i>
        <span>114514</span>
      </el-col>
      <el-col :span="6">
        <i class="el-icon-thumb"></i>
        <span>114514</span>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row id="comment">
      <el-col :span="6">
        <span style="color: white">keepSpace</span>
      </el-col>
      <el-col :span="10">
      <el-input v-model="comment" placeholder="请输入评论"></el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary">评论</el-button>
      </el-col>
    </el-row>
    <el-row class="site">
      <el-col :span="4">
        <span style="color: white">keepSpace</span>
      </el-col>
      <el-col :span="1.5">
        <el-avatar :size="30" :src="circleUrl"></el-avatar>
      </el-col>
      <el-col :span="3" >
        <el-row><div class="infor">Test</div></el-row>
        <el-row><div class="infor">10月31日 12:56</div></el-row>
      </el-col>
      <el-col :span="12">
        <div class="com">这是一条评论</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <span style="color: white">keepSpace</span>
      </el-col>
      <el-col :span="16">
        <el-divider></el-divider>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <span style="color: white">keepSpace</span>
      </el-col>
      <el-col :span="1.5">
        <el-avatar :size="30" :src="circleUrl"></el-avatar>
      </el-col>
      <el-col :span="3" >
        <el-row><div class="infor">Test</div></el-row>
        <el-row><div class="infor">10月31日 12:56</div></el-row>
      </el-col>
      <el-col :span="12">
        <div class="com">这是一条评论</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <span style="color: white">keepSpace</span>
      </el-col>
      <el-col :span="16">
        <el-divider></el-divider>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <span style="color: white">keepSpace</span>
      </el-col>
      <el-col :span="1.5">
        <el-avatar :size="30" :src="circleUrl"></el-avatar>
      </el-col>
      <el-col :span="3" >
        <el-row><div class="infor">Test</div></el-row>
        <el-row><div class="infor">10月31日 12:56</div></el-row>
      </el-col>
      <el-col :span="12">
        <div class="com">这是一条评论</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <span style="color: white">keepSpace</span>
      </el-col>
      <el-col :span="16">
        <el-divider></el-divider>
      </el-col>
    </el-row>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000" id="pages">
    </el-pagination>
  </el-card>
</template>

<script>
export default {
  name: 'weibodetail',
  data () {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      comment: ''
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
  #infor{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  #comment{
    margin-bottom: 20px;
  }
  .com{
    text-align: left;
  }
  .site{
  }
</style>
