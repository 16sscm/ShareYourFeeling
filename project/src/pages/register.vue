<template>
  <el-container>
    <el-header> <webheader></webheader> </el-header>
    <el-container>
      <el-aside width="600px"></el-aside>
      <el-main><registerform></registerform></el-main>
      <el-aside width="600px"></el-aside>
    </el-container>
    <el-footer> </el-footer>
  </el-container>
</template>

<script>
import Webheader from '../components/webheader'
import Registerform from '../components/registerform'
export default {
  name: 'register',
  components: {Registerform, Webheader}
}
</script>

<style scoped>

</style>
