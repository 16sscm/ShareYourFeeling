<template>
      <el-container>
        <el-aside width="200px">
        </el-aside>
        <el-main>
          <chatbox></chatbox>
        </el-main>
        <el-aside width="200px"></el-aside>
      </el-container>
</template>

<script>
import Chatbox from '../components/chatbox'
export default {
  name: 'messagepage',
  components: {Chatbox}
}
</script>

<style scoped>

</style>
