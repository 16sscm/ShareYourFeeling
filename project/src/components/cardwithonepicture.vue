<template>
  <el-card id="card">
    <el-row>
      <el-col span="4">
        <el-image
          style="width: 100px; height: 100px"
          :src="url"
          :fit="fit"></el-image>
      </el-col>
      <el-col span="20">
        <el-row>
          <div id="content">这是一个带一个图片的微博</div>
        </el-row>
        <el-row type="flex" id="writter" style="vertical-align: middle">
          <el-col :span="4">
            <div>
              <el-avatar :size="30" :src="circleUrl" id="avatar"></el-avatar>
              <span>Test</span>
              <span>10月31日 21:56</span>
            </div>
          </el-col>
          <el-col :span="14"></el-col>
          <el-col :span="6">
            <div id="icons">
              <i class="el-icon-position"></i>
              <span>114514</span>
              <i class="el-icon-chat-dot-square"></i>
              <span>114514</span>
              <i class="el-icon-thumb"></i>
              <span>114514</span>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
  export default {
    name: 'cardwithonepicture',
    data () {
      return {
        circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
      }
    }
  }
</script>

<style scoped>
  #content {
    text-align: left;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-size: 20px;
    font-style: oblique;
    margin-left: 8px;
  }

  #writter {
    font-size: 20px;
    margin-top: 20px;
  }

  #card{
    margin-top: 20px;
  }
</style>
