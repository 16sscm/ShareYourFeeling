<template>
  <div id="app">
    <el-container>
      <el-header><webheader></webheader></el-header>
      <router-view/>
      <el-footer><webfooter></webfooter></el-footer>
    </el-container>
  </div>
</template>

<script>
import Webheader from './components/webheader'
import Webfooter from './components/webfooter'
export default {
  name: 'App',
  components: {Webfooter, Webheader}
}
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
