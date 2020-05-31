<template>
  <el-container direction="vertical">
    <hangingBar />      
    <top-bar :chosenTabIndex="4" @changePage="gotoPage"/>
    <router-view class="main-page" />
    <footer-bar />
  </el-container>
</template>

<script>
import hangingBar from '@/components/public/hangingBar'
import topBar from '@/components/public/topBar'
import footerBar from '@/components/public/footerBar'
export default {
  name: 'News',
  components: {
    hangingBar,
    topBar,
    footerBar
  },
  data () {
    return {
    }
  },
  mounted(){
  },
  methods: {
     gotoPage(path){
      // console.log(path)
      this.$router.push({path})
    }
  }
}
</script>
<style scoped lang="scss">
.main-page{
  min-height: 60vh;
}
</style>
