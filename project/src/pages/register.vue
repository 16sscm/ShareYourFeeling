<template>
  <el-container>
    <el-header> <webheader></webheader> </el-header>
    <el-container>
      <el-aside width="600px"></el-aside>
      <el-main>
        <span class="font">注册ShareYouFeeling</span>
        <registerform>
        </registerform></el-main>
      <el-aside width="600px"></el-aside>
    </el-container>
    <el-footer><webfooter></webfooter> </el-footer>
  </el-container>
</template>

<script>
import Webheader from '../components/webheader'
import Registerform from '../components/registerform'
import Webfooter from '../components/webfooter'
export default {
  name: 'register',
  components: {Webfooter, Registerform, Webheader}
}
</script>

<style scoped>
 .font{
   font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
   font-size:32px ;
   font-style: italic;
 }
</style>
