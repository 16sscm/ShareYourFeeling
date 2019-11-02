<template>
  <el-container>
    <el-aside width="400px" >
      <el-row id="user">
        <el-col :span="4" id="userava">
          <el-avatar :size="50" :src="circleUrl"></el-avatar>
        </el-col>
        <el-col :span="4" id="username">
          <div>Test</div>
        </el-col>
      </el-row>
      <el-row id="search">
        <el-input
          placeholder="搜索联系人"
          v-model="input" id="input">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-row>
      <div class="peoplelist">
        <div class="people">
          <el-row>
            <el-row class="people">
              <el-col :span="4" class="avatar">
                <el-avatar :size="50" :src="circleUrl"></el-avatar>
              </el-col>
              <el-col :span="17">
                <el-row class="name">
                  <div class="infor">Test</div>
                </el-row>
                <el-row>
                  <div class="infor">这是一条长长2222222222222222消息..</div>
                </el-row>
              </el-col>
              <el-col :span="3">
                <div class="time">10-21</div>
              </el-col>
            </el-row>
          </el-row>
        </div>
        <hr>
        <div class="people">
          <el-row>
            <el-row class="people">
              <el-col :span="4" class="avatar">
                <el-avatar :size="50" :src="circleUrl"></el-avatar>
              </el-col>
              <el-col :span="17">
                <el-row class="name">
                  <div class="infor">Test</div>
                </el-row>
                <el-row>
                  <div class="infor">这是一条长长2222222222222222消息..</div>
                </el-row>
              </el-col>
              <el-col :span="3">
                <div class="time">10-21</div>
              </el-col>
            </el-row>
          </el-row>
        </div>
        <hr>
        <div class="people">
          <el-row>
            <el-row class="people">
              <el-col :span="4" class="avatar">
                <el-avatar :size="50" :src="circleUrl"></el-avatar>
              </el-col>
              <el-col :span="17">
                <el-row class="name">
                  <div class="infor">Test</div>
                </el-row>
                <el-row>
                  <div class="infor">这是一条长长2222222222222222消息..</div>
                </el-row>
              </el-col>
              <el-col :span="3">
                <div class="time">10-21</div>
              </el-col>
            </el-row>
          </el-row>
        </div>
        <hr>
        <div class="people">
          <el-row>
            <el-row class="people">
              <el-col :span="4" class="avatar">
                <el-avatar :size="50" :src="circleUrl"></el-avatar>
              </el-col>
              <el-col :span="17">
                <el-row class="name">
                  <div class="infor">Test</div>
                </el-row>
                <el-row>
                  <div class="infor">这是一条长长2222222222222222消息..</div>
                </el-row>
              </el-col>
              <el-col :span="3">
                <div class="time">10-21</div>
              </el-col>
            </el-row>
          </el-row>
        </div>
        <hr>
        <div class="people">
          <el-row>
            <el-row class="people">
              <el-col :span="4" class="avatar">
                <el-avatar :size="50" :src="circleUrl"></el-avatar>
              </el-col>
              <el-col :span="17">
                <el-row class="name">
                  <div class="infor">Test</div>
                </el-row>
                <el-row>
                  <div class="infor">这是一条长长2222222222222222消息..</div>
                </el-row>
              </el-col>
              <el-col :span="3">
                <div class="time">10-21</div>
              </el-col>
            </el-row>
          </el-row>
        </div>
        <hr>
      </div>
    </el-aside>
    <el-main id="chatBox">
     <el-row>
       <div id="chatBoxname">Test</div>
     </el-row>
      <div id="messagebox">
        <qipao></qipao>
      </div>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容按下Enter发送"
        v-model="textarea" resize="none">
      </el-input>
    </el-main>
  </el-container>
</template>

<script>
import Qipao from './qipao'
export default {
  name: 'chatbox',
  components: {Qipao},
  data () {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      input: '',
      textarea: ''
    }
  }
}
</script>

<style scoped>
  #user {
    background: #409EFF;
    color: white;
    font-size: 32px;
  }

  #userava {
    margin-top: 5px;
  }

  #username {
    margin-top: 10px;
  }

  #search {
    background: deepskyblue;
  }

  .people {
    background: #409EFF;
    color: white;
  }

  .avatar {
    margin-top: 5px;
  }

  .name {
    margin-top: 10px;
  }

  #input {
    background: #409EFF;
    color: #409EFF;
  }

  .infor {
    text-align: left;
  }

  .time {
    margin-top: 5px;
    font-size: 12px;
  }

  .peoplelist {
    background: #409EFF;
    color: white;
    height: 700px;
  }

  hr {
    color: white;
    width: 90%;
  }
  #chatBox{
    background: #e7e7e7;
  }
  #chatBoxname{
    text-align: left;
    font-size: 32px;
    color: #a9a9a9;
  }
  #messagebox{
    height: 650px;
  }
</style>
