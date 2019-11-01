<template>
  <el-container>
    <el-header><webheader></webheader></el-header>
    <el-main>
      <el-container>
        <el-aside width="350px"></el-aside>
        <el-main>
        <weibodetail></weibodetail>
        </el-main>
        <el-aside width="350px"></el-aside>
      </el-container>
    </el-main>
    <el-footer><webfooter></webfooter></el-footer>
  </el-container>
</template>

<script>
  import Webheader from '../components/webheader'
  import Webfooter from '../components/webfooter'
  import Weibodetail from '../components/weibodetail'
  export default {
    name: 'details',
    components: {Weibodetail, Webfooter, Webheader}
  }
</script>

<style scoped>

</style>
