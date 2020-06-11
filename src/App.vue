<template>
  <div id="app">
    <router-view />
    <goToTop />
  </div>
</template>

<script>
import goToTop from "@/components/public/goToTop";
export default {
  name: 'App',
  components:{goToTop}
}
</script>

<style lang="scss">
@import '../static/font/font.css';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'PingFang SC';
}
</style>
