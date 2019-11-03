<template>
  <div>
  <el-form ref="form" :model="form" label-width="80px" class="fontclass">
    <el-form-item label="用户名">
      <el-input v-model="form.name" clearable></el-input>
    </el-form-item>
    <el-form-item label="密码" >
      <el-input type="password" v-model="form.pass" autocomplete="off" clearable></el-input>
    </el-form-item>
  </el-form>
    <el-button type="primary" id="loginbutton" @click.native="loginin">登录</el-button>
  </div>
</template>

<script>
export default {
  name: 'loginform',
  data () {
    return {
      form: {
        name: '',
        pass: ''
      }
    }
  },
  methods: {
    loginin () {
      this.$cookies.set('login', true)
      this.$store.commit('editLogin', true)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .fontclass{
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    margin-top: 30px;
  }
  #loginbutton{
    width: 350px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
</style>
