<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="slide in imglist" :key="slide.id">
        <img :src="slide.src" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
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
      msg: "hello，轮播图"
    };
  },
  mounted() {
    // 初始化swiper插件
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      var mySwiper = new Swiper(".swiper-container", {
        loop: true,
        pagination: ".swiper-pagination",
        paginationClickable: true, // 点击切换
        autoplay: 3000,
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
      .swiper-pagination-bullet{
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
</style>