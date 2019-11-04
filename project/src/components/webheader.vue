<template>
  <el-row class="title">
    <el-col :span="3"><h1 class="blog">ShareYourFeeling</h1></el-col>
    <el-col :span="5">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#409EFF"
        text-color="#fff"
        active-text-color="#ffd04b"
        id="menu">
        <el-menu-item index="1" v-on:click="goToIndex()">广场</el-menu-item>
        <el-menu-item index="2" v-on:click="goToPost()">发动态</el-menu-item>
        <el-menu-item index="3" @click="goToNearby()">附近的人</el-menu-item>
        <el-menu-item index="4" @click.native="goToFriend">好友推荐</el-menu-item>
      </el-menu>
    </el-col>
    <div v-if="hasLogin === '1'">
      <el-col :span="13">
        <div style="color:#409EFF;">Space</div>
      </el-col>
      <el-col :span="1">
        <el-avatar :size="50" :src="circleUrl" class="avatar"></el-avatar>
      </el-col>
      <el-col :span="1.5">
        <div class="res">
          <span class="clickAble" v-on:click="goToLogin()">登录</span>
          <span>|</span>
          <span class="clickAble" v-on:click="goToRegister()">注册</span>
        </div>
      </el-col>
    </div>
    <div v-if="hasLogin === '2'">
      <el-col :span="13">
        <div style="color:#409EFF;">Space</div>
      </el-col>
      <el-col :span="1">
        <el-avatar :size="50" :src="circleUrl" class="avatar"></el-avatar>
      </el-col>
      <el-col :span="1">
        <el-dropdown>
          <div class="el-dropdown-link">
            我的<i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-s-home" @click.native="goToSelf">主页</el-dropdown-item>
            <el-dropdown-item icon="el-icon-chat-dot-round" @click.native="goToMessage">消息</el-dropdown-item>
            <el-dropdown-item icon="el-icon-star-on" @click.native="goToCollect">收藏</el-dropdown-item>
            <el-dropdown-item icon="el-icon-switch-button" @click.native="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </div>
  </el-row>
</template>

<script>
export default {
  name: 'webheader',
  data () {
    return {
      input: '',
      activeIndex: '0',
      activeIndex2: '0',
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      hasLogin: '2'
    }
  },
  created () {
    this.hasLogin = this.$cookies.isKey('login') ? this.$cookies.get('login') : '1'
    console.log(this.hasLogin)
  },
  computed: {
    /**
     * @return {boolean}
     */
    ListenLogin () {
      return this.$store.state.haslogin
    }
  },
  watch: {
    ListenLogin: function (old) {
      this.hasLogin = old
      console.log(this.hasLogin)
    }
  },
  methods: {
    goToRegister () {
      this.$router.push('/register')
    },
    goToLogin () {
      this.$router.push({path: '/login'})
    },
    goToIndex () {
      this.$router.push('/')
    },
    goToPost () {
      this.$router.push('/post')
    },
    goToSelf () {
      this.$router.push('/self')
    },
    goToMessage () {
      this.$router.push('/message')
    },
    goToCollect () {
      this.$router.push('/collect')
    },
    goToNearby () {
      this.$router.push('/nearby')
    },
    goToFriend () {
      this.$router.push('/findfriend')
    },
    logout () {
      this.$store.commit('editLogin', '1')
      console.log(this.$store.state.haslogin)
      this.$cookies.set('login', '1')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  .title {
    background-color: #409EFF;
  }

  .blog {
    text-align: left;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    color: white;
    font-size: 22px;
    margin-left: 10px;
    font-style: italic;
  }

  .res {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    color: white;
    margin-top: 20px;
  }

  #menu {
    margin-top: 4px;
    margin-bottom: 0;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }

  .avatar {
    margin-top: 5px;
  }

  .clickAble {
    cursor: pointer;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: white;
    font-size: 20px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    margin-top: 20px;
    font-style: oblique;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
