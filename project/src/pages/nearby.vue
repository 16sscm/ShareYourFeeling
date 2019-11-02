<template>
<el-container>
  <el-header><webheader></webheader></el-header>
  <el-main>
    <el-container>
    <el-aside width="300px"></el-aside>
    <el-main>
      <div id="title">根据您的定位，找到附近的人如下:</div>
      <peoplecard></peoplecard>
      <peoplecard></peoplecard>
      <peoplecard></peoplecard>
    </el-main>
    <el-aside width="300px"></el-aside>
    </el-container>
  </el-main>
  <el-footer><webfooter></webfooter></el-footer>
</el-container>
</template>

<script>
import Webheader from '../components/webheader'
import Webfooter from '../components/webfooter'
import Peoplecard from '../components/peoplecard'
export default {
  name: 'nearby',
  components: {Peoplecard, Webfooter, Webheader}
}
</script>

<style scoped>
   #title{
     font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
     font-size: 32px;
     font-style: oblique;
     color: #409EFF;
     margin-bottom: 30px;
   }
</style>
