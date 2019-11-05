<template>
  <el-form ref="form" :model="form" label-width="80px" id="form">
    <el-form-item label="微博内容" class="item">
      <el-input type="textarea" v-model="form.desc" :rows="6"></el-input>
    </el-form-item>
    <el-form-item label="类别" class="item" id="type">
      <el-select v-model="form.type" placeholder="请选择微博类型" >
        <el-option label="无" value="无"></el-option>
        <el-option label="搞笑" value="搞笑"></el-option>
        <el-option label="社会" value="社会"></el-option>
        <el-option label="电影" value="电影"></el-option>
        <el-option label="体育" value="体育"></el-option>
        <el-option label="美食" value="美食"></el-option>
        <el-option label="动漫" value="动漫"></el-option>
        <el-option label="生活" value="生活"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="配图" class="item">
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/post/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        list-type="picture">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-form-item>
    <el-form-item class="item">
      <el-button type="primary" >立即发布</el-button>
      <el-button>重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'weiboform',
  data () {
    return {
      form: {
        desc: '',
        type: '',
        fileList: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }]
      }
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    }
  }
}
</script>

<style scoped>
  #form{
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
  .item{
    margin-bottom: 30px;
  }
  #type{
    margin-right: 750px;
  }
</style>
