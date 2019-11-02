<template>
  <el-container>
    <el-header>
      <webheader></webheader>
    </el-header>
    <el-container>
      <el-aside width="300px">
      </el-aside>
      <el-main>
        <selfcard></selfcard>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">我的动态</el-menu-item>
          <el-menu-item index="2">我的资料</el-menu-item>
          <el-menu-item index="3">我的关注</el-menu-item>
          <el-menu-item index="4">我的粉丝</el-menu-item>
        </el-menu>
        <el-row id="search" v-if="currentIndex!=='2'">
          <el-col :span="5">
            <span style="color: white">Space</span>
          </el-col>
          <el-col :span="10" >
            <el-input v-model="input" placeholder="搜索感兴趣的人或内容" ></el-input>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </el-col>
        </el-row>
        <div v-if="currentIndex==='1'">
          <card-without-picture></card-without-picture>
          <cardwithonepicture></cardwithonepicture>
          <cardwithpictures></cardwithpictures>
        </div>
        <div v-if="currentIndex==='2'">
          <editinforform></editinforform>
        </div>
        <div v-if="currentIndex==='3'">
          <peoplecard></peoplecard>
          <Peoplecard></Peoplecard>
          <peoplecard></peoplecard>
        </div>
        <div v-if="currentIndex==='4'">
          <peoplecard></peoplecard>
          <Peoplecard></Peoplecard>
          <peoplecard></peoplecard>
        </div>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000" id="pages" v-if="currentIndex!=='2'">
        </el-pagination>
      </el-main>
      <el-aside width="300px"></el-aside>
    </el-container>
    <el-footer>
      <webfooter></webfooter>
    </el-footer>
  </el-container>
</template>

<script>
import Webheader from '../components/webheader'
import Webfooter from '../components/webfooter'
import Selfcard from '../components/selfcard'
import CardWithoutPicture from '../components/cardwithoutpicture'
import Cardwithonepicture from '../components/cardwithonepicture'
import Cardwithpictures from '../components/cardwithpictures'
import Editinforform from '../components/editinforform'
import Peoplecard from '../components/peoplecard'

export default {
  name: 'self',
  components: {
    Peoplecard,
    Editinforform,
    Cardwithpictures,
    Cardwithonepicture,
    CardWithoutPicture,
    Selfcard,
    Webfooter,
    Webheader
  },
  data () {
    return {
      activeIndex: '1',
      currentIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.currentIndex = key
    }
  }
}
</script>

<style scoped>
  #pages{
    margin-top: 30px;
  }
  #search{
    margin-top: 30px;
  }
</style>
