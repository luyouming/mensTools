<template>
  <div class="Apparea-intro-container DefaultContainerStyle">
    <title-bar :text="prodInfo.name" />
    <div class="contentBox">
      <!-- <img :src="require(`$assets/CommonImg/AppArea/${prodInfo.imgUrl}`)" alt="">
      <p>{{prodInfo.desc}}</p>-->
      <img :src="require(`$assets/CommonImg/AppArea/${prodInfo.imgUrl}`)" alt />
      <div class="news">
        <p class="content">
          <span>产品名称:</span>
          <span>{{prodInfo.desc}}</span>
        </p>
        <p class="content">
          <span>基片尺寸:</span>
          <span>{{prodInfo.size}}</span>
        </p>
        <p class="content">
          <span>适用材料:</span>
          <span>{{prodInfo.material}}</span>
        </p>
        <p class="content">
          <span>适用工艺:</span>
          <span>{{prodInfo.technique}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import titleBar from "$components/public/titleBar";
import commonInfo from "@/assets/CommonJs/commonInfo";
export default {
  name: "appareaIntroduction",
  data() {
    return {
      productList: commonInfo.productList,
      prodInfo: {
        id: "1",
        name: "生物芯片",
        desc: "生物芯片专用设备",
        size: "200mm * 100mm",
        material: "硅胶纳米材料",
        technique: "工艺23432",
        iconUrl: `product1.png`,
        imgUrl: `appArea1.jpg`,
        discription:
          "产品描述产产品描述产产品描述产品描述产品描述产品描述产品描述产品描述"
      }
    };
  },
  components: { titleBar },
  mounted() {
    this.initInfo();
  },
  methods: {
    initInfo() {
      this.id = this.$route.params.id;
      const info = this.productList.find(a => a.id === this.id);
      this.prodInfo = info || this.productList[0];
      console.log(this.prodInfo);
    }
  }
};
</script>

<style scoped lang="scss">
.Apparea-intro-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .contentBox {
    width: 100%;
    padding: 0 130px;
    box-sizing: border-box;
    margin: 60px auto;
    cursor: pointer;
    img {
      float: left;
      width: 480px;
      height: 360px;
      border-radius: 2px;
    }
    .news {
      float: left;
      width: calc(100% - 480px);
      padding: 0 20px;
      height: 90px;
      line-height: 90px;
      text-align: left;
      box-sizing: border-box;
      .title {
        font-weight: 500;
        font-size: 18px;
        font-family: "微软雅黑";
        line-height: 28px;
        color: #ccc;
      }
      .content {
        color: #666;
        font-family: "微软雅黑";
        font-weight: 500;
        font-size: 30px;
        text-indent: 100px;
      }
    }
  }
}
</style>