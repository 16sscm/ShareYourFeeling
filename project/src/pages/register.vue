<template>
    <el-container>
      <el-aside ></el-aside>
      <el-main>
        <span class="font">注册ShareYouFeeling</span>
        <registerform>
        </registerform>
      </el-main>
      <el-aside></el-aside>
    </el-container>
</template>

<script>
import Registerform from '../components/registerform'
export default {
  name: 'register',
  components: {Registerform}
}
</script>

<style scoped>
 .font{
   font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
   font-size:32px ;
   font-style: italic;
 }
</style>
