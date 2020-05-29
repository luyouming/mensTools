<template>
  <div class="AboutUs-Container">
    <div class="tip">{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data () {
    return {
      msg: '你好啊，AboutUs！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.AboutUs-Container {
  .tip{
     // 不写会直接编译成对应的rem
    width: 1920px;
    height: 300px; 
    line-height: 300px;
    // 写了/*px*/ 会根据dpr不同生成对应的大小 ----sass 不支持
    font-size: 36px; /*px*/
    // 写了/*no*/那就不会转换   ----sass 不支持，要想不自动转换 需要大写
    border:1PX solid red; /*no*/
    color:green;
  }
}
</style>
