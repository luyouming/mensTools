<template>
  <div class="goToTop" @click="gotoTop">
        <span class="el-icon-arrow-up icon"></span>
    </div>
</template>

<script>
export default {
    props: {
    },
    methods: {
      gotoTop() {
        window.scrollTo(0, 0)
      }
    }
}
</script>

<style lang="scss" scoped>
.goToTop{
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 80px;
  height: 80px;
  line-height: 100px;
  background: #1bacd6;
  border-radius: 50%;
  opacity: 0.3;
      cursor: pointer;
    .icon{
      font-size: 42PX;
      color:#fff;
      font-weight: bold;
      padding-top: 5px;
      
    }
    
  }
  .goToTop:hover{
      opacity: 1;
    }
</style>