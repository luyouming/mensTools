<template>
  <div class="ProdIntro-container">
    <titleBar :text="prodInfo.title"/>
    <el-row class="prod-info">
      <el-col class="prod-img" :xs="24" :sm="24" :md="24" :lg="12" :xl="12"><img :src="prodInfo.src" alt=""></el-col>
      <el-col class="prod-desc" :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="title">{{ prodInfo.title }}</div>
        <div class="defaultFont summary">
          {{ prodInfo.summary }}
        </div>
      </el-col>
    </el-row>
    <div v-if="prodInfo.principle" class="other defaultFont" v-html="prodInfo.principle" />
    <div v-if="prodInfo.influenceFactor" class="other defaultFont" v-html="prodInfo.influenceFactor" />
    <div v-if="prodInfo.TechnicalIndicators" class="other defaultFont" v-html="prodInfo.TechnicalIndicators" />
    
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'prodIntroduction',
  data() {
    return {
      prodInfo: {}
    }
  },
  computed: {
    ...mapState({
      prodList: state => state.prod.prodList
    })
  },
  beforeRouteUpdate(to, from, next) {
    next()
    this.initInfo()
  },
  mounted() {
    this.initInfo()
  },
  methods: {
    initInfo() {
      this.id = this.$route.params.id
      const info = this.prodList.find(a => a.id === this.id)
      this.prodInfo = info || this.prodList[0]
    }
  }
}
</script>

<style lang="scss">
.subTitle{
  color: #000;
  font-weight: 700;
  font-size: 0.30rem;
  line-height: 1.5;
  margin-bottom: 0.1rem;
}
</style>
<style scoped lang="scss">
.prod-info{
  padding: 0.5rem 1rem 0 1rem;
  .prod-img{
    padding-right: 1rem;
    img{
      width: 100%;
    }
  }
  .prod-desc{
    box-sizing: border-box;
    text-align: left;
    padding: 1rem 0 0 0;
    .title{
      font-size: 0.55rem;
      font-weight: 800;
      line-height: 1.3;
      color: #002c42;
      margin-bottom: 20PX;
    }
  }
}
.defaultFont{
  text-align: left;
  color: #676767;
  font-size: 0.3rem;
  line-height: 1.2;
  margin-bottom: 10PX;
}
.other{
  text-align: left;
  padding: 0 1rem;
  margin-bottom: .5rem;
}
</style>