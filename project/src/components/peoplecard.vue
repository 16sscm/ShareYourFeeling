<template>
    <el-card id="card">
      <el-row>
        <el-col :span="2">
        <el-avatar :size="60" :src="circleUrl"></el-avatar>
        </el-col>
        <el-col :span="4">
          <el-row>
            <div style="text-align: left">Test</div>
          </el-row>
          <el-row>
            <div style="text-align: left">
              关注 22|粉丝 2|微博 25
            </div>
          </el-row>
          <el-row>
            <div style="text-align: left">
              这是他的签名
            </div>
          </el-row>
        </el-col>
        <el-col :span="14">
          <div style="color: white">
            space
          </div>
        </el-col>
        <el-col :span="4">
          <el-row>
          <el-button type="danger" icon="el-icon-circle-close" size="small">取关</el-button>
          </el-row>
          <el-row id="letter">
          <el-button type="primary" icon="el-icon-message" size="small">私信</el-button>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
</template>

<script>
export default {
  name: 'peoplecard',
  data () {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  }
}
</script>

<style>
  #card{
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-style: oblique;
    margin-top: 10px;
  }
  #letter{
    margin-top: 5px;
  }
</style>
