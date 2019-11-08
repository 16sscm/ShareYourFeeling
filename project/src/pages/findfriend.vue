<template>
      <el-container>
        <el-aside width="300px">
        </el-aside>
        <el-main>
          <el-row>
            <div id="tagtitle">请在下方添加期望的标签:</div>
           </el-row>
          <el-row>
          <tags @update="updateTags" :input="tags" :closeable="closeable"></tags>
          </el-row>
          <el-row>
            <div id="find">
            根据您的标签找的匹配的人如下：
            </div>
          </el-row>
          <peoplecard :input="cardInput"></peoplecard>
          <peoplecard :input="cardInput"></peoplecard>
          <peoplecard :input="cardInput"></peoplecard>
          <peoplecard :input="cardInput"></peoplecard>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000" id="pages">
          </el-pagination>
        </el-main>
        <el-aside width="300px"></el-aside>
      </el-container>
</template>

<script>
import Tags from '../components/tags'
import Peoplecard from '../components/peoplecard'
export default {
  name: 'findfriend',
  components: {Peoplecard, Tags},
  data () {
    return {
      cardInput: {
        avatarUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        name: 'Test2',
        gNum: 102,
        fansNum: 102,
        weiboNum: 102,
        signature: '这是他的签名',
        type: 'nearby',
        tags: [],
        hasgz: false
      },
      tags: [],
      closeable: true
    }
  },
  methods: {
    updateTags (data) {
      this.tags = data
    }
  }
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
