<template>
  <div class="AboutUs-container DefaultContainerStyle">
    <title-bar text="关于我们" />
     <!-- 产品海报图 -->
    <div class="content">
      <div class="provideGoodPro">
      <img :src="require(`$assets/CommonImg/HomePage/provideGoodPro.jpg`)" alt="">
      </div>
    </div>
    <!-- 友情链接 -->
    <div class="friendLink">
      <span>友情链接:</span>
      <img @click="gotoFriendNet" :src="require(`$assets/CommonImg/AboutUs/friend-logo.png`)" alt="">
    </div>
  </div>
</template>

<script>
import titleBar from "$components/public/titleBar";
export default {
  name: "aboutUsAbout",
  components: { titleBar },
  methods: {
    gotoFriendNet() {
      window.location.href = 'http://www.baidu.com'
    }
  }
};
</script>

<style scoped lang="scss">
.AboutUs-container {
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 width: 100%;
 .content {
    width: 100%;
    .provideGoodPro{
      box-sizing: border-box;
      padding: 0 130px;
      margin: 120px 0;
      img{
        width: 100%;
        height: 100%;
      }
    }
 }
 .friendLink{
   width: 100%;
   height: 400px;
   background:#0B2F57;
   display: flex;
   justify-content: center;
   align-items: center;
   span{
    //  display: inline-block;
    font-size: 36px;
    padding-top: 60px;
    color: #ccc;
   }
   img{
     cursor: pointer;
   }
 }
}
</style>