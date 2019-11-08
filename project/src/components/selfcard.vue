<template>
  <el-card id="card" :style="{backgroundImage: 'url(' +input.backgroundUrl+ ')'}" >
    <el-row>
      <el-col :span="2">
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList"
        v-if="isMe">
        <el-button size="small" type="primary">修改背景图</el-button>
      </el-upload>
      </el-col>
    </el-row>
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
  props: ['input', 'isMe']
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
