<template>
  <div>
    <el-form ref="loginForm" :model="form" :rules="loginFormRules" label-width="80px" class="fontclass">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name" clearable ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="form.pass" autocomplete="off" clearable ></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" id="loginbutton" @click="loginin('loginForm')">登录</el-button>
  </div>
</template>

<script>
    import {AxiosInstance as axios} from "axios";

    export default {
        name: 'loginform',
        data() {
            return {
                form: {
                    name: '',
                    pass: ''
                },
                loginFormRules: {
                    name: [
                        {required: true, message: '账号不可为空', trigger: 'blur'}
                    ],
                    pass: [
                        {required: true, message: '密码不可为空', trigger: 'blur'}
                    ]
                }

            }
        },
        methods: {
            loginin(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
                        this.$cookies.set('login', '2')
                        this.$store.commit('editLogin', '2')
                        this.$router.push('/')
                        axios.post('http://127.0.0.1:11/login', {
                            username: this.form.name, password: this.form.pass
                        }).then(function (res) {
                            if (res.data == true) {

                            }
                        }).catch(function (error) {
                            console.log(error)
                        })
                    } else {
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
  .fontclass {
    margin-top: 30px;
  }

  #loginbutton {
    width: 350px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
</style>
