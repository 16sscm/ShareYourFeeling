<template>
  <div class="pp1">
    <span>这是我的电话号码作者啧啧啧啧啧在:1371912424294508</span>
  </div>
</template>

<script>
export default {
  name: 'qipao'
}
</script>

<style scoped>
  .pp1 span{
    background-color: #fff;
    padding: 5px 8px;
    display: inline-block;
    border-radius: 4px;
    margin:10px 0 10px 10px;
    position: relative;
    max-width: 200px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-size: 15px;
    text-align: left;
    word-wrap:break-word;
    white-space:normal;
  }
  .pp1 span::after{
    content: '';
    border: 8px solid #ffffff00;
    border-right: 8px solid #fff;
    position: absolute;
    top: 6px;
    left: -16px;
  }
</style>
