<template>
    <el-container>
      <el-header>
      <webheader></webheader>
      </el-header>
      <el-main>
      <el-container>
        <el-aside width="200px">
              <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#409EFF"
                text-color="#fff"
                active-text-color="gold">
                <el-menu-item index="1">
                  <i class="el-icon-menu"></i>
                  <span slot="title">热门</span>
                </el-menu-item>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">最新</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-menu"></i>
                  <span slot="title">关注</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-menu"></i>
                  <span slot="title">搞笑</span>
                </el-menu-item>
                <el-menu-item index="5">
                  <i class="el-icon-menu"></i>
                  <span slot="title">社会</span>
                </el-menu-item>
                <el-menu-item index="6">
                  <i class="el-icon-menu"></i>
                  <span slot="title">电影</span>
                </el-menu-item>
                <el-menu-item index="7">
                  <i class="el-icon-menu"></i>
                  <span slot="title">体育</span>
                </el-menu-item>
                <el-menu-item index="8">
                  <i class="el-icon-menu"></i>
                  <span slot="title">美食</span>
                </el-menu-item>
                <el-menu-item index="9">
                  <i class="el-icon-menu"></i>
                  <span slot="title">动漫</span>
                </el-menu-item>
              </el-menu>
        </el-aside>
        <el-main>
          <el-row id="searchme">
          <el-col :span="10" >
          <el-input v-model="input" placeholder="搜索感兴趣的内容" ></el-input>
          </el-col>
          <el-col :span="2">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </el-col>
          </el-row>
          <card-without-picture  id="test" @click.native="jumptodetail"></card-without-picture>
          <cardwithonepicture></cardwithonepicture>
          <cardwithpictures></cardwithpictures>
        </el-main>
        <el-aside width="400px"></el-aside>
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
import Cardwithpictures from '../components/cardwithpictures'
export default {
  name: 'index',
  data() {
    return {
      input: ''
    }
  },
  components: {Cardwithpictures, Cardwithonepicture, CardWithoutPicture, Webheader, Webfooter},
  methods: {
    jumptodetail () {
      this.$router.push('/detail')
    }
  }
}
</script>

<style scoped>
  #searchbox{
    width: 400px;
  }
  i{
    color: white;
  }
  #test{
    cursor: pointer;
  }
  #searchme{
    margin-bottom: 20px;
  }
</style>
