<template>
  <el-row class="title">
    <el-col :span="4"><h1 class="blog">ShareYourFeeling</h1></el-col>
    <el-col :span="10">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#409EFF"
        text-color="#fff"
        active-text-color="#ffd04b"
        id="menu">
        <el-menu-item index="1">主页</el-menu-item>
        <el-menu-item index="3" >浏览</el-menu-item>
        <el-menu-item index="4">附近的人</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="8">
      <el-avatar :size="50" :src="circleUrl" id="avatar"></el-avatar>
    </el-col>
    <el-col :span="2">
      <div class="res">
      <span class="clickAble" v-on:click="goToLogin()">登录</span>
      <span>|</span>
      <span class="clickAble" v-on:click="goToRegister()">注册</span>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'webheader',
  data () {
    return {
      input: '',
      activeIndex: '1',
      activeIndex2: '1',
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  },
  methods: {
    goToRegister () {
      this.$router.push('/register')
    },
    goToLogin () {
      this.$router.push({path: '/login'})
    }
  }
}
</script>

<style scoped>
 .title{
   background-color: #409EFF;
 }
  .blog{
   text-align: left;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    color: white;
    font-size: 22px;
    margin-left: 10px;
    font-style: italic;
  }
  .res{
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    color: white;
    margin-top: 20px;
  }
  #menu{
    margin-top: 4px;
    margin-bottom: 0;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
  #avatar{
    margin-left: 600px;
    margin-top: 5px;
  }
  .clickAble{
   cursor: pointer;
  }
</style>
