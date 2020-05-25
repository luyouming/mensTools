<template>
  <el-container direction="vertical">
    <top-bar />
    <router-view class="main-page" />
    <footer-bar />
  </el-container>
</template>

<script>
import topBar from '@/components/public/topBar'
import footerBar from '@/components/public/footerBar'
export default {
  name: 'Index',
  components: {
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
  }
}
</script>
<style scoped lang="scss">
.main-page{
  min-height: 60vh;
}
</style>
