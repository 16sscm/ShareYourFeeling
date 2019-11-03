<template>
    <el-container id="main">
      <el-aside width="600px"></el-aside>
  <el-main class="form">
    <span class="font">登录ShareYouFeeling</span>
    <loginform></loginform>
  </el-main>
      <el-aside width="600px"></el-aside>
    </el-container>
</template>

<script>
import Loginform from '../components/loginform'
export default {
  name: 'login',
  components: {Loginform}
}
</script>

<style scoped>
  .font{
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-size:32px ;
    font-style: italic;
  }
  .form{
    margin-top: 200px;
  }
  #main{
    margin-bottom: 100px;
  }
</style>
