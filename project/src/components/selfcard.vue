<template>
  <el-card id="card" :style="{backgroundImage: 'url(' +input.backgroundUrl+ ')'}" >
    <el-row>
      <el-avatar :size="100" :src="input.avatarUrl" id="head"></el-avatar>
    </el-row>
    <el-row>
      <div id="name">{{input.name}}</div>
      <div id="signature">{{input.signature}}</div>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'selfcard',
  data () {
    return {
    }
  },
  props: ['input']
}
</script>

<style scoped>
  #card {
    background-size: cover;
    background-repeat: no-repeat;
  }

  #head {
    margin-top: 40px;
  }

  #name {
    font-style: oblique;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-size: 32px;
    margin-top: 20px;
    margin-bottom: 15px;
  }
</style>

