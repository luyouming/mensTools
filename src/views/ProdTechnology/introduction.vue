<template>
  <div class="ProdIntro-container">
    <titleBar :text="prodInfo.title"/>
    <el-row class="prod-info">
      <el-col class="prod-img" :xs="24" :sm="24" :md="12" :lg="12" :xl="12"><img :src="prodInfo.src" alt=""></el-col>
      <el-col class="prod-desc" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="title">{{ prodInfo.title }}</div>
        <div>
          {{ prodInfo.desc }}
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'prodIntroduction',
  computed: {
    ...mapState({
      prodInfo: state => state.prod.prodInfo
    })
  }
}
</script>

<style scoped lang="scss">
.prod-info{
  .prod-img{
    padding: 10PX;
    img{
      width: 100%;
    }
  }
  .prod-desc{
    box-sizing: border-box;
    text-align: left;
    padding: 50PX 10PX 10PX 10PX;
    .title{
      font-size: 0.55rem;
      font-weight: 800;
      line-height: 1.3;
      color: #002c42;
    }
  }
}
</style>