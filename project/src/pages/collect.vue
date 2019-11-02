<template>
    <el-container>
      <el-header><webheader></webheader></el-header>
      <el-main>
        <el-container>
          <el-aside width="300px">
          </el-aside>
          <el-main>
            <el-row id="search">
              <el-col :span="5">
                <span style="color: white">Space</span>
              </el-col>
              <el-col :span="10" >
                <el-input v-model="input" placeholder="搜索收藏的内容" ></el-input>
              </el-col>
              <el-col :span="2">
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
              </el-col>
            </el-row>
            <card-without-picture></card-without-picture>
            <cardwithonepicture></cardwithonepicture>
            <cardwithpictures></cardwithpictures>
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000" id="pages">
            </el-pagination>
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
import Cardwithpictures from '../components/cardwithpictures'
import CardWithoutPicture from '../components/cardwithoutpicture'
import Cardwithonepicture from '../components/cardwithonepicture'
export default {
  name: 'collect',
  components: {Cardwithonepicture, CardWithoutPicture, Cardwithpictures, Webfooter, Webheader}
}
</script>

<style scoped>
  #pages{
    margin-top: 30px;
  }
</style>
