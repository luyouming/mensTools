<template>
  <div class="productDiscribe-container borderAnimation" :class="isEven ? 'borderAnimation-even' : ''">
    <img class="iconPic" :src="require(`$static/icon/${productInfo.iconUrl}`)" alt />
    <h5 class="name">{{productInfo.name}}</h5>
    <div class="discribe">{{productInfo.discription}}</div>
    <div class="news-item-details" :class="isEven ? 'news-item-details-even' : 'news-item-details'">
      Show View
      <i class="el-icon-right" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productInfo: {
      type: Object,
      default: () => {
        return {
          name: "生物芯片专用设备",
          iconUrl: `product1.png`,
          discription:
            "产品描述产产品描述产产品描述产品描述产品描述产品描述产品描述产品描述"
        };
      }
    },
    isEven: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      msg: "hello，产品描述"
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.productDiscribe-container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fff;
  color: #000;
  padding-top: 40px;
  margin-bottom: 80px;
  .name {
    font-size: 18PX;
    font-family: "PingFang SC";
    color: #002c42;
    font-weight: 700;
    margin: 30px 0 20px 0;
  }
  .discribe {
    font-size: 15PX;
    line-height: 25PX;
    color: #676767;
    font-weight: 300;
    margin: 0 25px;
    margin-bottom: 30px;
  }
  .iconPic {
    width: 64PX;
    height: 64PX;
  }
   .news-item-details, .news-item-details-even{
      cursor: pointer;
      color: #fff;
      font-size: 16PX;
      padding: 25PX 0;
      // border: 1px solid red;
      background: #00c3ed;
      width: 100%;
      line-height: 16PX;
      margin-top:40px;
      font-weight: bold;
      font-family: "黑体";
      i{
        position: relative;
        margin-left: 5px;
        color: #fff;
        top: 2px;
        transition: all 0.3s ease 0s;
      }
      &:hover{
        i{
          animation: moveArrow 1s ease;
        }
      }
    }
    .news-item-details-even{
      background: #002E5A;
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
}
.borderAnimation{position: relative;cursor: pointer;}
.borderAnimation:before,.borderAnimation:after{content:"";display:block;width: 0;height:0;border:3px solid transparent;box-sizing: border-box;position: absolute;}
 
.borderAnimation:before{top:0;left:0;transition: border-color 0s ease-in 0.8s,width 0.2s ease-in 0.6s,height 0.2s ease-in 0.4s;}
.borderAnimation:after{right:0;bottom:0;transition: border-color 0s ease-in 0.4s,width 0.2s ease-in 0.2s,height 0.2s ease-in ;}
 
.borderAnimation:hover:before{width:100%;height:100%;transition:width 0.2s ease-in ,height 0.2s ease-in 0.2s;border-top-color:#00c3ed;border-right-color:#00c3ed;}
.borderAnimation:hover:after{width:100%;height:100%;transition: border-color 0s ease-in 0.4s,width 0.2s ease-in 0.4s,height 0.3s ease-in 0.6s;border-bottom-color:#00c3ed;border-left-color:#00c3ed;}

.borderAnimation-even:hover:before{width:100%;height:100%;transition:width 0.2s ease-in ,height 0.2s ease-in 0.2s;border-top-color:#002E5A;border-right-color:#002E5A;}
.borderAnimation-even:hover:after{width:100%;height:100%;transition: border-color 0s ease-in 0.4s,width 0.2s ease-in 0.4s,height 0.3s ease-in 0.6s;border-bottom-color:#002E5A;border-left-color:#002E5A;}


</style>