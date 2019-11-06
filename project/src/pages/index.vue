<template>
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
                <el-menu-item index="10">
                  <i class="el-icon-menu"></i>
                  <span slot="title">生活</span>
                </el-menu-item>
              </el-menu>
        </el-aside>
        <el-main>
          <el-row id="searchme">
            <el-col :span="5">
              <span style="color: white">Space</span>
            </el-col>
          <el-col :span="10" >
          <el-input v-model="input" placeholder="搜索感兴趣的内容" ></el-input>
          </el-col>
          <el-col :span="2">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </el-col>
          </el-row>
          <card-without-picture  id="test" @click.native="jumptodetail" :input="cardInputType1" ></card-without-picture>
          <cardwithonepicture :input="cardInputType2"></cardwithonepicture>
          <cardwithpictures :input="cardInputType3"></cardwithpictures>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000" id="pages">
          </el-pagination>
        </el-main>
        <el-aside width="400px"></el-aside>
      </el-container>
      </el-main>
</template>

<script>
import CardWithoutPicture from '../components/cardwithoutpicture'
import Cardwithonepicture from '../components/cardwithonepicture'
import Cardwithpictures from '../components/cardwithpictures'
export default {
  name: 'index',
  data () {
    return {
      input: '',
      cardInputType1: {
        url: '',
        avatarurl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        content: '这是不带图片的微博',
        name: 'Test',
        time: '10月31日 21:59',
        trannum: 114514,
        chatnum: 114514,
        zannum: 114514
      },
      cardInputType2: {
        avatarurl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        content: '这是一个带一个图片的微博',
        name: 'Test',
        time: '10月31日 21:59',
        trannum: 114514,
        chatnum: 114514,
        zannum: 114514
      },
      cardInputType3: {
        photoUrlList: ['', '', '', '', '', '', ''],
        avatarurl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        content: '这是一个带多个图片的微博',
        name: 'Test',
        time: '10月31日 21:59',
        trannum: 114514,
        chatnum: 114514,
        zannum: 114514
      }
    }
  },
  components: {Cardwithpictures, Cardwithonepicture, CardWithoutPicture},
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
  #pages{
    margin-top: 30px;
  }
</style>
