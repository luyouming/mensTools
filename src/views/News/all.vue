<template>
  <div class="News-all-container">
    <title-bar text="所有新闻" />
    <div class="news-list">
      <el-row v-for="(rowList, i) in showList" :key="`row-${i}`" :gutter="30">
          <el-col v-for="(item, index) in rowList" :xs="24" :sm="12" :md="8" :lg="8" :xl="8" :key="`${i}-${index}`">
            <div class="news-item">
              <div class="news-item-img">
                <div class="thumb">
                  <img :src="item.src" alt="图片">
                </div>
                <div class="link"><i class="el-icon-link" /></div>
              </div>
              <div class="news-item-title" @click="viewNews(item)">
                {{ item.title }}
              </div>
              <div class="news-item-flag">
                <i class="el-icon-date" />
                <span>{{ item.time }}</span>
                <i class="el-icon-folder" />
                <span>{{item.keyword}}</span>
              </div>
              <div class="news-item-desc">
                {{ item.desc }}
              </div>
              <div class="news-item-details">
                View Details <i class="el-icon-right" />
              </div>
            </div>
          </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import titleBar from '$components/public/titleBar'
export default {
  name: 'newsAll',
  components: {
    titleBar
  },
  data() {
    return {
      newsList: [
        {
          id: '1',
          title: '2017年苏州工业园区金鸡湖人才计划科技领军人才',
          time: '2020-01-01 00:00:00',
          keyword: '人才,获奖',
          src: require('$assets/CommonImg/1.jpg'),
          desc: '2017年12月27日下午，苏州工业园区第八届金鸡湖人才表彰大会在现代大厦召开，此次大会授予437人“金鸡湖人才”称....'
        },
        {
          id: '2',
          src: require('$assets/CommonImg/2.jpg'),
          title: '祝贺我司获得“高新技术企业”荣誉证书',
          time: '2020-01-01 00:00:00',
          keyword: '证书,获奖',
          desc: '苏州美图半导体技术有限公司被授予“高新技术企业”荣誉证书，大大提高了我公司参与各项招投标业务的竞争力，同时也进一步提升了我公司的....'
        },
        {
          id: '3',
          src: require('$assets/CommonImg/3.jpg'),
          title: '中国微米纳米技术学会第十八届学术年会暨微系统与纳米工程高层论坛',
          time: '2020-01-01 00:00:00',
          keyword: '会议, 学术',
          desc: '中国微米纳米技术学会第十八届学术年会暨微系统与纳米工程高层论坛北京市新疆大厦 展位号：16....'
        }
      ]
    }
  },
  computed: {
    showList() {
      // 每行三列
      const copNum = Math.ceil(this.newsList.length / 3)
      const arr = []
      for (let i = 0; i < copNum; i++) {
        const rowArr = []
        for (let j = 0; j < 3; j++) {
          const index = (i * 3) + j
          if (this.newsList[index]) rowArr.push(this.newsList[index])
        }
        arr.push(rowArr)
      }
      return arr
    }
  },
  methods: {
    viewNews(info) {
      this.$store.commit('SET_NEWS_INFO', info)
      this.$router.push('/news/details')
      setTimeout(() => {
        document.documentElement.scrollTop = 0
      }, 100)
    }
  }
}
</script>

<style scoped lang="scss">
.news-list{
  line-height: 1.8;
  color: #676767;
  background: #EFEFEF;
  text-align: left;
  padding: 100PX 40PX;
  cursor: default;
  .news-item{
    user-select: none;
    margin-bottom: 50PX;
    background-color: #fff;
    transition: all 0.3s cubic-bezier(0.7, 0.04, 0.37, 1);
    border-radius: 7px 7px 0 0;
    .news-item-img{
      margin-bottom: 40PX;
      width: 100%;
      position: relative;
      overflow: hidden;
      img{
        transition: all 0.4s ease-in-out;
        clip-path: polygon(130% 0, 92% 100%, 0 82%, 0 0);
        width: 100%;
      }
      .thumb{
        display: flex;
        overflow: hidden;
        position: relative;
        clip-path: polygon(130% 0, 92% 100%, 0 82%, 0 0);
        transition: all 0.4s ease-in-out;
        &::after{
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          transition: all 0.3s linear;
          transform: scaleY(0);
          overflow: hidden;
          opacity: 0;
        }
      }
      .link{
        cursor: pointer;
        left: 0;
        box-sizing: border-box;
        top: 45%;
        right: 0;
        height: 50PX;
        width: 50PX;
        color: #fff;
        padding: 10PX;
        text-align: center;
        margin: 0 auto;
        font-size: 20PX;
        z-index: 12;
        opacity: 0;
        background: #00c3ed;
        transition: all 0.4s ease-in-out;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    &:hover{
      transform: translateY(-3px);
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
      .thumb::after{
        transform: scaleY(1);
        opacity: 1;
      }
      .link{
        opacity: 1;
        transform: rotateY(180deg);
      }
    }
    .news-item-title, .news-item-flag, .news-item-desc, .news-item-details{
      padding: 0 40PX;
    }
    .news-item-title{
      cursor: pointer;
      font-size: 0.38rem;
      color: #002c42;
      font-weight: 700;
      line-height: 1.5;
      margin-bottom: 0.5rem;
      transition: all 0.3s ease;
      &:hover{
        color: #00c3ed;
      }
    }
    .news-item-flag{
      .el-icon-folder{
        margin-left: 10PX;
      }
      vertical-align: middle;
      user-select: none;
      width: calc(100% - 80PX);
      margin: 20PX auto .5rem auto;
      padding: 20PX 0 0 0;
      font-size: 0.22rem;
      color: #999;
      border-top: 1PX solid rgba(204, 204, 204, 0.3);
      padding-top: 20PX;
    }
    .news-item-desc{
      font-size: 0.29rem;
      margin-bottom: 25PX;
    }
    .news-item-details{
      cursor: pointer;
      letter-spacing: .03rem;
      color: #2f3241;
      font-size: 0.25rem;
      padding-bottom: 40PX;
      i{
        position: relative;
        color: #00c3ed;
        top: 2px;
        transition: all 0.3s ease 0s;
      }
      &:hover{
        i{
          animation: moveArrow 1s ease;
        }
      }
    }
  }
}
@keyframes moveArrow {
  0%, 55% {
    opacity: 1;
    -webkit-transform: translateX(0) scale(1);
    -moz-transform: translateX(0) scale(1);
    transform: translateX(0) scale(1); }
  25% {
    opacity: 0;
    -webkit-transform: translateX(13px) scale(0.9);
    -moz-transform: translateX(13px) scale(0.9);
    transform: translateX(13px) scale(0.9); }
  26% {
    opacity: 0;
    -webkit-transform: translateX(-13px) scale(0.9);
    -moz-transform: translateX(-13px) scale(0.9);
    transform: translateX(-13px) scale(0.9); } }
</style>