<template>
  <div class="ProdIntro-container">
    <titleBar :text="prodInfo.title + '-案例'" backBtn />
    <el-row class="prod-info" :gutter="30">
      <el-col class="prod-img" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <img :src="prodInfo.topLeftImg">
      </el-col>
      <el-col class="prod-desc" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="defaultFont summary pr-20">
          {{ prodInfo.topRightText }}
        </div>
      </el-col>
    </el-row>
    <el-row class="prod-info" :gutter="30">
      <el-col class="prod-desc" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="defaultFont summary pl-20">
          {{ prodInfo.topRightText }}
        </div>
      </el-col>
      <el-col class="prod-img" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <img :src="prodInfo.topLeftImg">
      </el-col>
    </el-row>
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
      prodCaseList: state => state.prod.prodCaseList
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
      const info = this.prodCaseList.find(a => a.id === this.id)
      this.prodInfo = info || this.prodCaseList[0]
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
  .prod-img{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20PX;
    img{
      width: 70%;
    }
  }
  .prod-desc{
    box-sizing: border-box;
    text-align: left;
    padding: 20PX;
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
.pr-20{
  padding-right: 20PX;
}
.pl-20{
  padding-left: 20PX;
}
</style>