<template>
  <el-container>
    <el-header>
      <webheader></webheader>
    </el-header>
    <el-container>
      <el-aside width="400px">
      </el-aside>
      <el-main>
        <selfcard></selfcard>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">我的动态</el-menu-item>
          <el-menu-item index="2">我的资料</el-menu-item>
        </el-menu>
        <div v-if="currentIndex==='1'">
          <card-without-picture></card-without-picture>
          <cardwithonepicture></cardwithonepicture>
          <cardwithpictures></cardwithpictures>
        </div>
        <div v-if="currentIndex==='2'">
          <editinforform></editinforform>
        </div>
      </el-main>
      <el-aside width="400px"></el-aside>
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

export default {
  name: 'self',
  components: {
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

</style>
