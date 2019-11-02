<template>
    <el-container>
      <el-header>
        <webheader>
        </webheader>
      </el-header>
      <el-container>
        <el-aside width="200px">
        </el-aside>
        <el-main>
          <chatbox></chatbox>
        </el-main>
        <el-aside width="200px"></el-aside>
      </el-container>
      <el-footer>
        <webfooter></webfooter>
      </el-footer>
    </el-container>
</template>

<script>
  import Webheader from '../components/webheader'
  import Webfooter from '../components/webfooter'
  import Chatbox from '../components/chatbox'
  export default {
    name: 'messagepage',
    components: {Chatbox, Webfooter, Webheader}
  }
</script>

<style scoped>

</style>
