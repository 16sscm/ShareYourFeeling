<template>
 <el-container>
   <el-header> <webheader></webheader></el-header>
   <el-main><weiboform></weiboform></el-main>
   <el-footer><webfooter></webfooter></el-footer>
 </el-container>
</template>

<script>
  import Webheader from '../components/webheader'
  import Webfooter from '../components/webfooter'
  import Weiboform from '../components/weiboform'
  export default {
    name: 'post',
    components: {Weiboform, Webfooter, Webheader}
  }
</script>

<style scoped>

</style>
