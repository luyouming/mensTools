<template>
  <div class="ContactUs-container">
    <title-bar v-if="showTitle" text="联系我们" />
    <div class="ContactUs-main">
      <div class="main-left" />
      <div class="submit-main">
      <div class="main-title">需求OR建议OR留言</div>
      <div class="main-desc">欢迎来到苏州美图半导体有限公司官方网站。 关于产品的使用问题、改进建议，或举报不良信息，您都可以填写下方信息告诉我们，我们重视您的每一个想法</div>
        <input v-model="data.name" type="text" maxlength="10" placeholder="姓名*" />
        <input v-model="data.email" type="text" maxlength="20" placeholder="邮箱*" />
        <input v-model="data.phone" type="text" maxlength="11" placeholder="手机*" />
        <textarea v-model="data.desc" type="text"  placeholder="需要 / 改进 / 建议" />
        <button @click="submitInfo">提交</button>
      </div>
    </div>

  </div>
</template>

<script>
import titleBar from '$components/public/titleBar'
export default {
  name: 'contactUsContact',
  components: {
    titleBar
  },
  props: {
    showTitle: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      data: {
        name: '',
        phone: '',
        email: '',
        desc: ''
      }
    }
  },
  methods: {
    submitInfo() {
      this.data = {
        name: '',
        phone: '',
        email: '',
        desc: ''
      }
      this.$message.closeAll()
      this.$message.success('提交成功')
    }
  }
}
</script>

<style scoped lang="scss">
.ContactUs-container{
  .ContactUs-main{
    display: flex;
    .main-title{
      text-align: left;
      user-select: none;
      font-size: 0.7rem;
      font-weight: 600;;
      cursor: default;
      color:white;
    }
    .main-left{
      width: 50%;
      background: url('~@/assets/ContactUs/bg88.jpg') no-repeat;
      background-size: cover;
    }
    .main-desc{
      user-select: none;
      cursor: default;
      color: white;
      padding: 20PX 0;
      text-align: left;
      line-height: 0.5rem;
      font-size: 0.32rem;
    }
    .submit-main{
      padding: 80PX 30PX 100PX 30PX !important;
      background: url('~@/assets/ContactUs/worldmap.png') no-repeat;
      background-size: cover;
      background-position: center;
      background-color: #002E5A !important;
      box-sizing: border-box;
      display: inline-flex;
      width: 50%;
      flex-direction: column;
      input, textarea{
        color: white;
        background-color: rgba(255,255,255, 0);
        box-sizing: border-box;
        width: 100%;
        padding: 10PX;
        line-height: 20PX;
        font-size: 0.3rem;
        outline: none;
        border: none;
        transition: all 0.5s;
        border-bottom: 1PX solid #ddd;
        margin-bottom: 20PX;
        &:focus{
          border-bottom: 1PX solid #00c3ed;
        }
      }
      textarea{
        height: 3rem;
        resize: none;
        &::-webkit-input-placeholder{
          color: #ccc;
        }
      }
      button{
        border: none;
        user-select: none;
        outline: none;
        border-radius: 1rem;
        width: 3rem;
        height: 1rem;
        background-color: #0099ba;
        color: white;
        font-size: 0.35rem;
        letter-spacing: 0.2rem;
        border: 3PX solid #0099ba;
        transition: all 0.3s;
        cursor: pointer;
        &:hover{
          background-color: transparent;
          color: #00c3ed;
        }
      }
    }
  }
}
</style>