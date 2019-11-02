<template>
  <div>
    <el-row>
      <el-col :span="12">
        <div style="color:  #e7e7e7">space</div>
      </el-col>
      <el-col :span="10">
      <div class="right">
        <span>465464465454646fhkejhfkjef5hfkejfhkjehfegrgsgerg465465465</span>
      </div>
      </el-col>
    <el-col :span="2">
      <el-avatar :size="40" :src="circleUrl"></el-avatar>
    </el-col>
    </el-row>
    <el-col :span="2">
      <el-avatar :size="40" :src="circleUrl"></el-avatar>
    </el-col>
    <el-col :span="10">
    <div class="left">
      <span>fjlekjfelkjflekjfklejfiefjflekjfalejfiefnfjejfoijfjelffjjeflje4654fkehfkje65465</span>
    </div>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'qipao',
  data () {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  }
}
</script>

<style scoped>
  .right span {
    background-color: #fff;
    padding: 5px 8px;
    display: inline-block;
    border-radius: 4px;
    margin: 10px 0 10px 10px;
    position: relative;
    max-width: 400px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-size: 15px;
    text-align: left;
    word-wrap: break-word;
    white-space: normal;
  }

  .right span::before {
    content: '';
    border: 8px solid #ffffff00;
    border-left: 8px solid #fff;
    position: absolute;
    top: 6px;
    right: -16px;
  }

  .left span {
    background-color: #fff;
    padding: 5px 8px;
    display: inline-block;
    border-radius: 4px;
    margin: 10px 0 10px 10px;
    position: relative;
    max-width: 400px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-size: 15px;
    text-align: left;
    word-wrap: break-word;
    white-space: normal;
  }

  .left span::after {
    content: '';
    border: 8px solid #ffffff00;
    border-right: 8px solid #fff;
    position: absolute;
    top: 6px;
    left: -16px;
  }
</style>
