<template>
  <div id="app">
    <router-view />
    <sideBar />
  </div>
</template>

<script>
// import goToTop from "@/components/public/goToTop";
import sideBar from "@/components/public/sideBar";
export default {
  name: 'App',
  components:{sideBar}
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
