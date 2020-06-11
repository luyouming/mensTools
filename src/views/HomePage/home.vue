<template>
  <div class="Homepage-container DefaultContainerStyle">
     <swiperImg :imglist="imgArr"></swiperImg>
     <div class="content">
       <div class="productBox">
         <el-row :gutter="30">
           <el-col v-for="(item, index) in productList" :xs="24" :sm="12" :md="6" :lg="6" :xl="6" :key="index">
             <productDiscribe :productInfo="item"></productDiscribe>
           </el-col>
         </el-row>
       </div>
     </div>
  </div>
</template>

<script>
import config from "@/config/index";
import swiperImg from "@/components/public/swiperImg";
import productDiscribe from "@/components/public/productDiscribe";
export default {
  name: 'Home',
  data () {
    return {
      imgArr: [
        { id: "1", src: `${config.swiperImgUrl}first.png` },
        { id: "2", src: `${config.swiperImgUrl}second.jpg`}
      ],
      productList: [{ name: "生物芯片专用设备", iconUrl: `product1.png`, discription: '产品描述产产品描述产产品描述产品描述产品描述产品描述产品描述产品描述'},
      { name: "CIS三维封装", iconUrl: `product2.png`, discription: '产品描述产产品描述产产品描述产品描述产品描述产品描述产品描述产品描述'},
      { name: "MENS器件制造", iconUrl: `product3.png`, discription: '产品描述产产品描述产产品描述产品描述产品描述产品描述产品描述产品描述'},
      { name: "薄片传输", iconUrl: `product4.png`, discription: '产品描述产产品描述产产品描述产品描述产品描述产品描述产品描述产品描述'}]
    }
  },
  components: { swiperImg, productDiscribe }
}
</script>

<style scoped lang="scss">
.Homepage-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .content{
    margin: 120px 130px;
    .productBox{
    width: 100%;
    }
  }
}
</style>