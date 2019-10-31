<template>
  <el-form ref="form" :model="form" label-width="80px" id="form">
     <el-form-item label="头像">
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
     <el-form-item label="用户名">
       <el-input v-model="form.name" class="messageInput"></el-input>
     </el-form-item>
    <el-form-item label="邮箱">
      <el-input v-model="form.mailbox" class="messageInput"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-select v-model="form.sex" placeholder="请选择性别"  class="fontclass">
        <el-option label="男" value="male"></el-option>
        <el-option label="女" value="female"></el-option>
      </el-select>
    </el-form-item>
   </el-form>
</template>

<script>
export default {
  name: 'registerform',
  data() {
    return {
      imageUrl: '',
      form: {
        name: '',
        mailbox: '',
        sex: ''
      }
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}

</script>

<style scoped>
  #form{
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
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
</style>

