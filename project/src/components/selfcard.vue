<template>
  <el-card id="card">
    <el-row>
      <el-avatar :size="100" :src="circleUrl" id="head"></el-avatar>
    </el-row>
    <el-row>
      <div id="name">Test</div>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'selfcard',
  data () {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  }
}
</script>

<style scoped>
  #card {
    background-image: url("https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png");
    background-size: cover;
    background-repeat: no-repeat;
  }

  #head {
    margin-top: 40px;
  }

  #name {
    font-style: oblique;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-size: 32px;
    margin-top: 20px;
    margin-bottom: 40px;
  }
</style>
