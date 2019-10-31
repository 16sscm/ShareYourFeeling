<template>
  <el-container>
<el-header><webheader></webheader></el-header>
    <el-container>
      <el-aside width="600px"></el-aside>
  <el-main class="form">
    <span class="font">登录ShareYouFeeling</span>
    <loginform></loginform>
    <el-button type="primary" id="loginbutton">登录</el-button>
  </el-main>
      <el-aside width="600px"></el-aside>
    </el-container>
  <el-footer class="foot"><webfooter></webfooter></el-footer>
  </el-container>
</template>

<script>
import Webheader from '../components/webheader'
import Loginform from '../components/loginform'
import Webfooter from '../components/webfooter'
export default {
  name: 'login',
  components: {Webfooter, Loginform, Webheader}
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
  .foot{
    margin-top: 100px;
  }
  #loginbutton{
    width: 350px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
</style>
