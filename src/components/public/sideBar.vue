<template>
  <div class="side-bar">
    <div class="tel">
      <div class="Box">
        <span class="el-icon-phone-outline icon"></span>
        <span class="number">18112606475</span>
      </div>
    </div>
    <div class="qq">
      <div class="Box">
        <img :src="require(`$assets/CommonImg/sideBar/qq.png`)" class="qqImg" alt />
        <span class="number">13584888970</span>
      </div>
    </div>
    <div class="goToTop">
      <div class="topBox" @click="gotoTop">
      <span class="el-icon-arrow-up icon"></span>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: {

  // },
  name: "sideBar",
  data() {
    return {
      msg: "hello, sideBar"
    };
  },
  methods: {
    gotoTop() {
        window.scrollTo(0, 0)
      }
  }
};
</script>

<style lang="scss" scoped>
.side-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 60px;
  position: fixed;
  z-index: 999;
  top: calc(50% - 90px);
  right: 10px;
  div {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid white;
    background: #6db0f9;
    // cursor: pointer;
    position: relative;
    .icon {
      font-size: 40px;
      color: #fff;
      font-weight: bold;
    }
    .qqImg {
      width: 50px;
      height: 50px;
    }
    .Box, .topBox {
      position: absolute;
      top: 0;
      right: 0;
      // width: 260px;
      height: 60px;
      // border: 1px solid red;
      display: flex;
      justify-content: center;
      align-items: center;
      
      .number {
        color: white;
        font-size: 22PX;
        line-height: 1px;
        margin-left: 10px;
        display: none;
      }
    }
    .Box:hover{
      width: 230px;
    }
    .Box:hover .number{
      display: block;
    }
  }
}
</style>