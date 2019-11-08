<template>
  <el-form ref="form" :model="form" :rules="rules"  label-width="80px" id="form">
     <el-form-item label="头像" required>
       <el-upload
         class="avatar-uploader"
         action="https://jsonplaceholder.typicode.com/posts/"
         :show-file-list="false"
         :on-success="handleAvatarSuccess"
         :before-upload="beforeAvatarUpload">
         <img v-if="imageUrl" :src="imageUrl" class="avatar">
         <i v-else class="el-icon-plus avatar-uploader-icon"></i>
       </el-upload>
     </el-form-item>
     <el-form-item label="用户名" required>
       <el-input v-model="form.name" class="messageInput" clearable></el-input>
     </el-form-item>
    <el-form-item label="邮箱" required>
      <el-input v-model="form.mailbox" class="messageInput" clearable></el-input>
    </el-form-item>
    <el-form-item label="性别" required>
      <el-select v-model="form.sex" placeholder="请选择性别"  class="fontclass">
        <el-option label="男" value="male"></el-option>
        <el-option label="女" value="female"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="生日" required>
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    <el-form-item label="签名" required>
      <el-input v-model="form.signature" class="messageInput" clearable></el-input>
    </el-form-item>
    <el-form-item label="标签" required>
      <tags @update="updateTags" :closeable="closeable" :input="form.tags"></tags>
    </el-form-item>
    <el-form-item label="密码" prop="pass" required>
      <el-input type="password" v-model="form.pass" autocomplete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass" required>
      <el-input type="password" v-model="form.checkPass" autocomplete="off" clearable></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('form')" class="button">立即注册</el-button>
      <el-button @click="resetForm('form')" class="button">重置</el-button>
    </el-form-item>
   </el-form>
</template>

<script>
import Tags from './tags'
export default {
  name: 'registerform',
  components: {Tags},
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.form.checkPass !== '') {
          this.$refs.form.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      imageUrl: '',
      closeable: true,
      form: {
        name: '',
        mailbox: '',
        sex: '',
        pass: '',
        checkpass: '',
        date1: '',
        signature: '',
        tags: []
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$cookies.set('login', '2')
          this.$store.commit('editLogin', '2')
          this.$router.push('/')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    updateTags (data) {
      this.form.tags = data
    }
  }
}

</script>

<style scoped>
  #form{
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    margin-top: 20px;
  }
  .avatar-uploader {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 200px;
  }

  .avatar-uploader:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .messageInput{

  }
  .fontclass{
    margin-right: 365px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
   }
  .button{
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
</style>
