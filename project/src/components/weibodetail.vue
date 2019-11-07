<template xmlns:el-col="http://www.w3.org/1999/html">
  <el-card id="card">
    <el-row id="writter">
      <el-col :span="1.6">
      <el-avatar :size="50" :src="info.avatarUrl" id="avatar" style="vertical-align:middle"></el-avatar>
      </el-col>
      <el-col :span="4" id="name">
        <el-row><div class="infor">{{info.name}}</div></el-row>
        <el-row><div class="infor">{{info.time}}</div></el-row>
      </el-col>
      <el-col :span="2" v-if="!info.hasguanzhu"><el-button type="primary" icon="el-icon-circle-plus-outline">关注</el-button></el-col>
      <el-col :span="2" v-if="info.hasguanzhu"><el-button type="danger" icon="el-icon-circle-close">取关</el-button></el-col>
      <el-col :span="14">
        <span style="color: white">space</span>
      </el-col>
      <el-col :span="2">
        <el-button type="danger" icon="el-icon-delete" ></el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="content">{{info.content}}</div>
      </el-col>
    </el-row>
    <el-row v-if="info.imageUrls.length>0">
      <div class="demo-image">
        <div class="block">
          <el-image
            style="width: 600px; height: 400px"
            :src="info.imageUrls[0]"
            :fit="fit"></el-image>
        </div>
        <div class="smallpic" v-if="info.imageUrls.length>1">
          <el-image
            v-for="url in info.imageUrls"
            :key = "url"
            style="width: 75px; height: 50px"
            :src="url"
            :fit="fit" class="small-image"></el-image>
        </div>
      </div>
    </el-row>
    <el-row id="infor">
      <el-col :span="6" v-if="hasshoucang === '0'" class="shoucang" @click.native="mark()">
        <i class="el-icon-star-off"></i>
        <span>收藏</span>
      </el-col>
      <el-col :span="6" v-if="hasshoucang === '1'" class="shoucang" @click.native="unmark()">
        <i class="el-icon-star-on"></i>
        <span >取消收藏</span>
      </el-col>
      <el-col :span="6">
        <i class="el-icon-position"></i>
        <span>{{info.chuanNum}}</span>
      </el-col>
      <el-col :span="6">
        <i class="el-icon-chat-dot-square"></i>
        <span>{{info.chatNum}}</span>
      </el-col>
      <el-col :span="6">
        <i class="el-icon-thumb"></i>
        <span>{{info.zanNum
          }}</span>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <div v-for="comment in comments" :key="comment">
    <el-row>
      <el-col :span="4">
        <span style="color: white">keepSpace</span>
      </el-col>
      <el-col :span="1.5">
        <el-avatar :size="30" :src="comment.avatarUrl"></el-avatar>
      </el-col>
      <el-col :span="3" >
        <el-row><div class="infor">{{comment.name}}</div></el-row>
        <el-row><div class="infor">{{comment.time}}</div></el-row>
      </el-col>
      <el-col :span="12">
        <div class="com">{{comment.content}}</div>
      </el-col>
      <el-col :span="3"><el-button type="danger" icon="el-icon-circle-close" size="small" >删除</el-button></el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <span style="color: white">keepSpace</span>
      </el-col>
      <el-col :span="16">
        <el-divider></el-divider>
      </el-col>
    </el-row>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000" id="pages">
    </el-pagination>
  </el-card>
</template>

<script>
export default {
  name: 'weibodetail',
  data () {
    return {
      comment: '',
      info: {
        avatarUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        name: 'Test',
        time: '10月31日 21:59',
        hasguanzhu: true,
        content: '这是微博内容',
        imageUrls: ['', '', '', '', '', ''],
        chuanNum: 114514,
        chatNum: 114514,
        zanNum: 114514
      },
      comments: [
        {
          avatarUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          name: 'Test',
          content: '这是一条评论',
          time: '10月31日 21:36'
        },
        {
          avatarUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          name: 'Test',
          content: '这是一条评论',
          time: '10月31日 21:36'
        },
        {
          avatarUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          name: 'Test',
          content: '这是一条评论',
          time: '10月31日 21:36'
        }
      ],
      fit: 'fill',
      hasshoucang: '0'
    }
  },
  methods: {
    mark () {
      this.hasshoucang = '1'
      console.log('jfekjf')
    },
    unmark () {
      this.hasshoucang = '0'
    }
  }
}
</script>

<style scoped>
 .infor{
   text-align: left;
 }
  #name{
    margin-top: 5px;
  }
  #card{
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
  .content{
    font-style: oblique;
    font-size:20px;
    text-align: left;
    margin-top:20px;
  }
  .small-image{
    margin-left: 0;
    margin-right: 5px;
    padding:0;
  }
  #infor{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  #comment{
    margin-bottom: 20px;
  }
  .com{
    text-align: left;
  }
  .site{
  }
  .shoucang{
    cursor: pointer;
  }
</style>
