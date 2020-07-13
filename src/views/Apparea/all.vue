<template>
  <div class="Apparea-all-container DefaultContainerStyle">
    <title-bar text="应用领域" />
    <!-- 产品列表展示 -->
    <div class="content">
      <div class="productBox">
        <el-row :gutter="30">
          <el-col
            v-for="(item, index) in productList"
            :xs="24"
            :sm="12"
            :md="6"
            :lg="6"
            :xl="6"
            :key="index + item"
          >
            <productDiscribe :productInfo="item" :isEven="(index + 1) % 2 == 0"></productDiscribe>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import titleBar from "$components/public/titleBar";
import productDiscribe from "@/components/public/productDiscribe";
import commonInfo from '@/assets/CommonJs/commonInfo'
export default {
  name: 'appareaAll',
  data () {
    return {
      productList: commonInfo.productList
    }
  },
  components: { titleBar, productDiscribe }
}
</script>

<style scoped lang="scss">
.Apparea-all-container{
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 width: 100%;
 .content {
    width: 100%;

    .productBox {
      width: 100%;
      padding: 0 130px;
      box-sizing: border-box;
      margin: 80px 0 160px 0;
    }
 }
}

</style>