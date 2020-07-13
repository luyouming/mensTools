<template>
  <div class="ProdIntro-container">
    <titleBar :text="prodInfo.title"/>
    <el-row class="prod-info">
      <el-col class="prod-desc" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <!-- <div class="title">{{ prodInfo.title }}</div> -->
        <div class="defaultFont summary">
          {{ prodInfo.summary }}
        </div>
      <el-col class="prod-img" :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><img :src="prodInfo.src" alt=""></el-col>
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
@media screen and (min-width:1200px){
  .prod-info, .other{
    width: 1000PX;
    margin: auto;
    img{
      width: 40%;
      height: 40%;
    }
  }
  .prod-info{
    padding: 20PX 2rem 0 2rem;
  }
  .other{
    padding: 0 2rem;
  }
}
@media screen and (max-width: 1200px) {
  .prod-info, .other{
    width: 100%;
    img{
      width: 40%;
      height: 40%;
    }
  }
  .prod-info{
    padding: 20PX 2rem 0 2rem;
  }
  .other{
    padding: 0 2rem;
  }
}
@media screen and (max-width: 768px) {
  .prod-info, .other{
    img{
      width: 100%;
    }
  }
  .prod-info{
    padding: 20PX 1rem 0 1rem;
  }
  .other{
    padding: 0 1rem;
  }
}
.prod-info{
  .prod-img{
    display: flex;
    justify-content: center;
  }
  .prod-desc{
    box-sizing: border-box;
    text-align: left;
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
  box-sizing: border-box;
  text-align: left;
  margin-bottom: .5rem;
}
</style>