<template>
    <el-container>
      <el-header>
      <webheader></webheader>
      </el-header>
      <el-main>
      <el-container>
        <el-aside width="200px">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#409EFF"
                text-color="#fff">
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                  <i class="el-icon-document"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航四</span>
                </el-menu-item>
              </el-menu>
        </el-aside>
        <el-main>
          <card-without-picture></card-without-picture>
          <cardwithonepicture></cardwithonepicture>
        </el-main>
      </el-container>
      </el-main>
      <el-footer><webfooter></webfooter></el-footer>
    </el-container>
</template>

<script>
import Webfooter from '../components/webfooter'
import Webheader from '../components/webheader'
import CardWithoutPicture from '../components/cardwithoutpicture'
import Cardwithonepicture from '../components/cardwithonepicture'
export default {
  name: 'index',
  components: {Cardwithonepicture, CardWithoutPicture, Webheader, Webfooter},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>
