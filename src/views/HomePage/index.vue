<template>
  <div class="HomePage-Container">
    <div class="tip">{{msg}}</div>
  </div>
</template>

<script>
import BASE_URL from "@/config/BasePath";
export default {
  name: 'HomePage',
  data () {
    return {
      msg: '你好，HomePage！master 分支的一次简单提交'
    }
  },
  mounted(){
    alert(process.env.NODE_ENV)
    this.askForToken()
  },
  methods: {
    askForToken(){
   // 使用封装好的axios
      const loginUrl = `${BASE_URL.LOGIN_URL}?corpid=wwd2de45d2edfd1123&corpsecret=735-2Y6-mxBd7MvHKLb51jMDdOj7v3qHDavh-77Os7w`
      // console.log(loginUrl)
      // console.log(this.$api)
      this.$api.get(loginUrl).then(response => {
        console.log(response.data)
        this.$messageBox.success('请求成功')
        this.token = response.data.errmsg
      }).catch(err => {
        let errMsg = err.errmsg ? err.errmsg : '未知错误'
        // errMsg = errMsg.length > 80 ? errMsg.substring(0, 80) + '...' : errMsg
        this.$messageBox.error(errMsg, '请求失败')
        // this.$notify({type: 'warning', message: err})
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.HomePage-Container {
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
