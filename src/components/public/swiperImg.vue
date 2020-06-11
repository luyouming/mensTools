<template>
  <div class="swiper-Box">
    <!-- v-show="activeIndex === 2" -->
    <div class="back1" v-show="activeIndex !== 2">
      <p class="title"><span class="year">2012</span>公司员工荣称</p>
      <p class="award">苏州工业园区科技</p>
      <p class="award">领军人才</p>
    </div>
    <div class="back2" v-show="activeIndex === 2">
      <p class="title">国家重点支持</p>
      <p class="award">高新技术企业</p>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="slide in imglist" :key="slide.id">
          <img :src="slide.src" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import config from "@/config/index";
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";

export default {
  props: {
    imglist: {
      type: Array,
      default: () => [
        { id: "1", src: `${config.swiperImgUrl}first.png` },
        { id: "2", src: `${config.swiperImgUrl}second.jpg` },
        { id: "3", src: `${config.swiperImgUrl}third.jpg` }
      ]
    }
  },
  data() {
    return {
      msg: "hello，轮播图",
      activeIndex: 0
    };
  },
  mounted() {
    // 初始化swiper插件
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      var that = this
      var mySwiper = new Swiper(".swiper-container", {
        loop: true,
        pagination: ".swiper-pagination",
        onSlideChangeEnd: function(swiperHere) {
          // console.log(swiperHere.activeIndex);
          that.activeIndex = swiperHere.activeIndex
        },
        paginationClickable: true, // 点击切换
        autoplay: 5000,
        preventLinksPropagation: true,
        autoplayDisableOnInteraction: false
      });
      if (mySwiper) {
        this.msg = "初始化轮播图成功";
      }
    }
  }
};
</script>

<style lang="scss" >
.swiper-Box {
  width: 100%;
  height: 800px;
  position: relative;
  .back1 {
    position: absolute;
    z-index: 3;
    top: 200px;
    left: 100px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    .title{
      color: rgb(0, 195, 237);
      font-size: 36PX;
      font-weight: 500;
      padding: 15px;
      font-family: "微软雅黑";
      border-left: 8px solid rgb(0, 195, 237);
      border-top: 3px solid rgb(0, 195, 237);
      background: #333;
      animation: bottomEaseInAnimate 2s ease 1; /*调用动画：动画名、时间、时间线条、播放次数*/
    animation-fill-mode: forwards;/*定义动画结束的状态*/
      .year{
       font-size: 36PX;
       font-weight: bold;
      }
    }
    .award{
      color: #fff;
      font-size: 80PX;
      font-weight: 800;
      font-family: "微软雅黑";
      animation: topEaseInAnimate 2s ease 1; /*调用动画：动画名、时间、时间线条、播放次数*/
    animation-fill-mode: forwards;/*定义动画结束的状态*/
    }
  }
  .back2 {
    position: absolute;
    z-index: 3;
    top: calc(50% - 150px);
    left: calc(50% - 400px);
    width: 800px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .title{
      color: rgb(0, 195, 237);
      font-size: 36PX;
      font-weight: 500;
      padding: 15px;
      font-family: "微软雅黑";
      border-top: 5px solid rgb(0, 195, 237);
      background: #333;
      animation: rightEaseInAnimate 2s ease 1; /*调用动画：动画名、时间、时间线条、播放次数*/
    animation-fill-mode: forwards;/*定义动画结束的状态*/
    }
    .award{
      color: #fff;
      font-size: 80PX;
      font-weight: 800;
      font-family: "微软雅黑";
      animation: leftEaseInAnimate 2s ease 1; /*调用动画：动画名、时间、时间线条、播放次数*/
    animation-fill-mode: forwards;/*定义动画结束的状态*/
    }
  }
 
  /* 以下是swiper的轮播图 */
  .swiper-container {
    width: 100%;
    height: 800px;
    display: block;

    .swiper-slide img {
      width: 100%;
      height: 100%;
    }
    .swiper-wrapper {
      height: 100%;
    }
    .swiper-slide {
      text-align: center;
      background: #fff;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
    .swiper-pagination {
      margin-bottom: 15px;
      .swiper-pagination-bullet {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 0;
        background: #666;
      }
    }
    .swiper-pagination-bullet-active {
      background: #fff !important;
    }
  }
}
 @keyframes rightEaseInAnimate{/*定义从右边滑入文字的动画*/
    0%{transform: translateX(400px);opacity: 0;}
    100%{transform:translateX(0px);opacity: 1; }
}
 @keyframes leftEaseInAnimate{/*定义从左边滑入文字的动画*/
    0%{transform: translateX(-400px);opacity: 0;}
    100%{transform:translateX(0px);opacity: 1; }
}
 @keyframes topEaseInAnimate{/*定义从右边滑入文字的动画*/
    0%{transform: translateY(200px);opacity: 0;}
    100%{transform:translateY(0px);opacity: 1; }
}
 @keyframes bottomEaseInAnimate{/*定义从右边滑入文字的动画*/
    0%{transform: translateY(-200px);opacity: 0;}
    100%{transform:translateY(0px);opacity: 1; }
}
</style>