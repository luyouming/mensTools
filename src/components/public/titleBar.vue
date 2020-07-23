<template>
  <div class="title-bar">
      <div>
        <span>{{ text }}</span>
        <div v-if="prodCase || backBtn" class="prodCase" >
          <span v-if="prodCase" @click="prodCaseRouter">产品案例</span>
          <span v-if="backBtn" @click="backBtnRouter">返回</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    prodCase: {
      type: Boolean,
      default: false
    },
    backBtn: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: '1'
    }
  },
  mounted() {
    // console.log(this.prodCase, this.backBtn)
  },
  methods: {
    prodCaseRouter(){
      this.$router.push('/prod/case/' + this.id)
    },
    backBtnRouter() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.title-bar{
    width: 100%;
    user-select: none;
    cursor: default;
    height: 2.3rem;
    background: url('~@/assets/CommonImg/ContactUs/as02.jpg') 50% 50%;
    >div{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 2.3rem;
      background-color: rgba(0,0,0,0.5);
      flex-direction: column;
      >span{
        font-size: 0.4rem;
        color: white;
        font-weight: bold;
        padding: 10PX;
        font-family: "黑体";
      }
    }
    .prodCase{
      color: white;
      cursor: pointer;
      font-size: 0.25rem;
      padding: 0 20PX;
      span{
        text-decoration: underline;
        &+span{
          margin-left: 20PX;
        }
      }
    }
    
  }
</style>