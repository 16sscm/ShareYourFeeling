<template>
      <el-container>
        <el-aside width="300px">
        </el-aside>
        <el-main>
          <chatbox></chatbox>
        </el-main>
        <el-aside width="300px"></el-aside>
      </el-container>
</template>

<script>
import Chatbox from '../components/chatbox'
export default {
  name: 'messagepage',
  components: {Chatbox},
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
