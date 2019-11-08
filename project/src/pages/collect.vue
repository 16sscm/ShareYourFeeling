<template>
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
            <card-without-picture   :input="cardInputType1" ></card-without-picture>
            <cardwithonepicture :input="cardInputType2"></cardwithonepicture>
            <cardwithpictures :input="cardInputType3"></cardwithpictures>
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000" id="pages">
            </el-pagination>
          </el-main>
          <el-aside width="300px"></el-aside>
        </el-container>
      </el-main>
</template>

<script>
import Cardwithpictures from '../components/cardwithpictures'
import CardWithoutPicture from '../components/cardwithoutpicture'
import Cardwithonepicture from '../components/cardwithonepicture'
export default {
  name: 'collect',
  components: {Cardwithonepicture, CardWithoutPicture, Cardwithpictures},
  data () {
    return {
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
  }
}
</script>

<style scoped>
  #pages{
    margin-top: 30px;
  }
</style>
