<template>
    <el-container>
      <el-aside width="300px">
      </el-aside>
      <el-main>
        <selfcard :input="selfCardInput" :is-me="isMe" ></selfcard>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1" v-if="isMe">我的动态</el-menu-item>
          <el-menu-item index="1" v-if="!isMe">他的动态</el-menu-item>
          <el-menu-item index="2" v-if="isMe">我的资料</el-menu-item>
          <el-menu-item index="3" v-if="isMe">我的关注</el-menu-item>
          <el-menu-item index="3" v-if="!isMe">他的关注</el-menu-item>
          <el-menu-item index="4" v-if="isMe">我的粉丝</el-menu-item>
          <el-menu-item index="4" v-if="!isMe">他的粉丝</el-menu-item>
        </el-menu>
        <el-row id="search" v-if="currentIndex!=='2'">
          <el-col :span="5">
            <span style="color: white">Space</span>
          </el-col>
          <el-col :span="10" id="">
            <el-input v-model="input" placeholder="搜索感兴趣的人或微博" ></el-input>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </el-col>
        </el-row>
        <div v-if="currentIndex==='1'">
          <card-without-picture  id="test" @click.native="jumptodetail" :input="cardInputType1" ></card-without-picture>
          <cardwithonepicture :input="cardInputType2"></cardwithonepicture>
          <cardwithpictures :input="cardInputType3"></cardwithpictures>
        </div>
        <div v-if="currentIndex==='2'">
          <el-card id="mycard">
          <editinforform :input="editformInput"></editinforform>
          </el-card>
        </div>
        <div v-if="currentIndex==='3'">
          <peoplecard :input="cardInput"></peoplecard>
          <peoplecard :input="cardInput"></peoplecard>
          <peoplecard :input="cardInput"></peoplecard>
        </div>
        <div v-if="currentIndex==='4'">
          <peoplecard :input="cardInput2"></peoplecard>
          <peoplecard :input="cardInput2"></peoplecard>
          <peoplecard :input="cardInput2"></peoplecard>
        </div>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000" id="pages" v-if="currentIndex!=='2'">
        </el-pagination>
      </el-main>
      <el-aside width="300px"></el-aside>
    </el-container>
</template>

<script>
import Selfcard from '../components/selfcard'
import CardWithoutPicture from '../components/cardwithoutpicture'
import Cardwithonepicture from '../components/cardwithonepicture'
import Cardwithpictures from '../components/cardwithpictures'
import Editinforform from '../components/editinforform'
import Peoplecard from '../components/peoplecard'

export default {
  name: 'self',
  components: {
    Peoplecard,
    Editinforform,
    Cardwithpictures,
    Cardwithonepicture,
    CardWithoutPicture,
    Selfcard
  },
  inject: ['reload'],
  data () {
    return {
      activeIndex: '1',
      currentIndex: '1',
      selfCardInput: {
        avatarUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        name: 'Test',
        signature: '这是他的签名',
        backgroundUrl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
      },
      cardInputType1: {
        url: '',
        avatarurl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        content: '这是不带图片的微博',
        name: 'Test',
        time: '10月31日 21:59',
        trannum: 114514,
        chatnum: 114514,
        zannum: 114514
      },
      cardInputType2: {
        avatarurl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        content: '这是一个带一个图片的微博',
        name: 'Test',
        time: '10月31日 21:59',
        trannum: 114514,
        chatnum: 114514,
        zannum: 114514
      },
      cardInputType3: {
        photoUrlList: ['', '', '', '', '', '', ''],
        avatarurl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        content: '这是一个带多个图片的微博',
        name: 'Test',
        time: '10月31日 21:59',
        trannum: 114514,
        chatnum: 114514,
        zannum: 114514
      },
      editformInput: {
        avatarUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        name: 'test',
        mailbox: 'test@test.com',
        sex: 'male',
        pass: '123',
        checkpass: '123',
        date1: '2019-8-2',
        signature: '',
        tags: ['JK', 'RK', 'TS']
      },
      cardInput: {
        avatarUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        name: 'Test2',
        gNum: 102,
        fansNum: 102,
        weiboNum: 102,
        signature: '这是他的签名',
        type: 'guanzhu',
        hasgz: true
      },
      cardInput2: {
        avatarUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        name: 'Test2',
        gNum: 102,
        fansNum: 102,
        weiboNum: 102,
        signature: '这是他的签名',
        type: 'fans',
        hasgz: true
      },
      isMe: true
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.currentIndex = key
    }
  },
  watch: {
    '$route': function (to, from) {
      this.reload()
    }
  },
  created () {
    this.isMe = this.$route.query.isme === '1'
  }
}
</script>

<style scoped>
  #pages{
    margin-top: 30px;
  }
  #search{
    margin-top: 30px;
    margin-bottom: 20px;
  }
  #mycard{
    margin-top: 30px;
  }
</style>
