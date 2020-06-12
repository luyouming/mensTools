<template>
  <el-container direction="vertical">
    <hangingBar />
    <top-bar
      id="topBar"
      :class="topBarFixed ? 'topBarIsFixed' : '' "
      :chosenTabIndex="5"
      @changePage="gotoPage"
    />
    <router-view class="main-page" />
    <footer-bar />
  </el-container>
</template>

<script>
import hangingBar from "@/components/public/hangingBar";
import topBar from "@/components/public/topBar";
import footerBar from "@/components/public/footerBar";
export default {
  name: "ContactUs",
  components: {
    hangingBar,
    topBar,
    footerBar
  },
  data() {
    return {
      topBarFixed: false
    };
  },
   mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    gotoPage(path) {
      // console.log(path)
      this.$router.push({ path });
        },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
        
      var offsetTop = document.querySelector("#topBar").offsetTop;
      // console.log(scrollTop, offsetTop)
      if (scrollTop > offsetTop) {
        this.topBarFixed = true;
      } else {
        this.topBarFixed = false;
      }
    }
  }
};
</script>
<style scoped lang="scss">
.main-page {
  min-height: 60vh;
}
.topBarIsFixed {
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 999;
}
</style>
