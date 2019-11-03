<template>
    <el-container>
      <el-header><webheader></webheader></el-header>
      <el-container>
        <el-aside width="300px">
        </el-aside>
        <el-main>
          <el-row>
            <div id="tagtitle">请在下方选择期望的tags:</div>
           </el-row>
          <el-row>
          <tags></tags>
          </el-row>
          <el-row>
            <div id="find">
            根据您的tags找的匹配的人如下：
            </div>
          </el-row>
          <peoplecard></peoplecard>
          <peoplecard></peoplecard>
          <peoplecard></peoplecard>
          <peoplecard></peoplecard>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000" id="pages">
          </el-pagination>
        </el-main>
        <el-aside width="300px"></el-aside>
      </el-container>
      <el-footer><webfooter></webfooter></el-footer>
    </el-container>
</template>

<script>
import Webheader from '../components/webheader'
import Webfooter from '../components/webfooter'
import Tags from '../components/tags'
import Peoplecard from '../components/peoplecard'
export default {
  name: 'findfriend',
  components: {Peoplecard, Tags, Webfooter, Webheader}
}
</script>

<style scoped>
  #tagtitle{
    font-style: oblique;
    color: #409EFF;
    font-size: 30px;
    margin-bottom: 20px;
  }
  #find{
    font-style: oblique;
    color: #409EFF;
    font-size: 30px;
    margin-top: 20px;
  }
  #pages{
    margin-top: 30px;
  }
</style>
