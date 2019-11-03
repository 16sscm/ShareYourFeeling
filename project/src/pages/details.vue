<template>
    <el-main>
      <el-container>
        <el-aside width="350px"></el-aside>
        <el-main>
        <weibodetail></weibodetail>
        </el-main>
        <el-aside width="350px"></el-aside>
      </el-container>
    </el-main>
</template>

<script>
import Weibodetail from '../components/weibodetail'
export default {
  name: 'details',
  components: {Weibodetail}
}
</script>

<style scoped>

</style>
