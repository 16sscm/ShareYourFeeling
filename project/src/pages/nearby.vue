<template>
  <el-main>
    <el-container>
    <el-aside width="300px"></el-aside>
    <el-main>
      <div id="title">根据您的定位，找到附近的人如下:</div>
      <peoplecard :input="cardInput"></peoplecard>
      <peoplecard :input="cardInput"></peoplecard>
      <peoplecard :input="cardInput"></peoplecard>
    </el-main>
    <el-aside width="300px"></el-aside>
    </el-container>
  </el-main>
</template>

<script>
import Peoplecard from '../components/peoplecard'
export default {
  name: 'nearby',
  components: {Peoplecard},
  data () {
    return {
      cardInput: {
        avatarUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        name: 'Test2',
        gNum: 102,
        fansNum: 102,
        weiboNum: 102,
        signature: '这是他的签名',
        type: 'nearby'
      }
    }
  }
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
