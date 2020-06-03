<template>
  <div class="News-all-container">
    <title-bar text="所有新闻" />
    <div class="news-list">
      <el-row v-for="(rowList, i) in showList" :key="`row-${i}`" :gutter="30">
          <el-col v-for="(item, index) in rowList" :xs="24" :sm="12" :md="8" :lg="8" :xl="8" :key="`${i}-${index}`" class="news-item">
            <div class="news-item-img">
              <div class="thumb">
                <img :src="require('@/assets/news/1.jpg')" alt="图片">
              </div>
            </div>
            <div class="news-item-title">
              {{ item.title }}
            </div>
            <div class="news-item-flag">
              <span>{{ item.time }}</span>
              <span>{{item.keyword}}</span>
            </div>
            <div class="news-item-desc">
              {{ item.desc }}
            </div>
            <div>
              View Details <i class="el-icon-right" />
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
          title: '2017年苏州工业园区金鸡湖人才计划科技领军人才',
          time: '2020-01-01 00:00:00',
          keyword: '人才,获奖',
          desc: '2017年12月27日下午，苏州工业园区第八届金鸡湖人才表彰大会在现代大厦召开，此次大会授予437人“金鸡湖人才”称....'
        },
        {
          title: '祝贺我司获得“高新技术企业”荣誉证书',
          time: '2020-01-01 00:00:00',
          keyword: '证书,获奖',
          desc: '苏州美图半导体技术有限公司被授予“高新技术企业”荣誉证书，大大提高了我公司参与各项招投标业务的竞争力，同时也进一步提升了我公司的....'
        },
        {
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
  }
}
</script>

<style scoped lang="scss">
.news-list{
  padding: 100PX 40PX;
  cursor: default;
  .news-item{
    margin-bottom: 50PX;
    background-color: #fff;
    transition: all 0.3s cubic-bezier(0.7, 0.04, 0.37, 1);
    border-radius: 7px 7px 0 0;
    &:hover{
      transform: translateY(-3px);
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
    }
    .news-item-img{
      margin-bottom: 40PX;
      width: 100%;
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
        &:hover{
          &::after{
            transform: scaleY(1);
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>