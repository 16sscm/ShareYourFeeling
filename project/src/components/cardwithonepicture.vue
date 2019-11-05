<template>
  <el-card id="card">
    <el-row>
      <el-col span="3">
        <el-image
          style="width: 100px; height: 100px"
          :src="input.url"
          fit="fill"></el-image>
      </el-col>
      <el-col span="21">
        <el-row>
          <div id="content" >{{input.content}}</div>
        </el-row>
        <el-row type="flex" id="writter" style="vertical-align: middle">
          <el-col :span="6">
            <div>
              <el-avatar :size="30" :src="input.avatarurl" id="avatar"></el-avatar>
              <span>{{input.name}}</span>
              <span>{{input.time}}</span>
            </div>
          </el-col>
          <el-col :span="13"></el-col>
          <el-col :span="8">
            <div id="icons">
              <i class="el-icon-position"></i>
              <span>{{input.trannum}}</span>
              <i class="el-icon-chat-dot-square"></i>
              <span>{{input.chatnum}}</span>
              <i class="el-icon-thumb"></i>
              <span>{{input.zannum}}</span>
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
  },
  props: ['input']
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
