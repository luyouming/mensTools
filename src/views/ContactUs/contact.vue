<template>
  <div class="ContactUs-container">
    <title-bar v-if="showTitle" text="联系我们" />
    <el-row class="ContactUs-main">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="main-left" />
      </el-col>
      <el-col class="submit-main" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="main-title">留言</div>
        <div class="main-desc">欢迎来到苏州美图半导体有限公司官方网站。 关于产品的使用问题、改进建议，或举报不良信息，您都可以填写下方信息告诉我们，我们重视您的每一个想法</div>
        <input v-model="data.name" type="text" maxlength="10" placeholder="姓名*" />
        <input v-model="data.email" type="text" maxlength="20" placeholder="邮箱*" />
        <input v-model="data.phone" type="text" maxlength="11" placeholder="手机*" />
        <textarea v-model="data.desc" type="text"  placeholder="需要 / 改进 / 建议" />
        <button @click="submitInfo">提交</button>
      </el-col>
    </el-row>
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
  // .ContactUs-main{
  //   padding: 0 130px;
  //   box-sizing:border-box;
  //   width: 100%;
  //   margin: 120px 0;
  //   .main-left{
  //     height: 11rem;
  //     width: 100%;
  //     background: url('~@/assets/ContactUs/bg88.jpg') no-repeat;
  //     background-size: cover;
  //   }
  //   .submit-main{
  //     height: 11rem;
  //     padding: 0.8rem 0.5rem;
  //     background: url('~@/assets/ContactUs/worldmap.png') no-repeat;
  //     background-size: cover;
  //     background-position: center;
  //     background-color: #002E5A !important;
  //     box-sizing: border-box;
  //     display: inline-flex;
  //     flex-direction: column;
  //     .main-title{
  //       text-align: left;
  //       user-select: none;
  //       font-size: 0.5rem;
  //       font-weight: 600;;
  //       cursor: default;
  //       color:white;
  //     }
  //     .main-desc{
  //       user-select: none;
  //       cursor: default;
  //       color: white;
  //       padding: 0.2rem 0;
  //       text-align: left;
  //       line-height: 0.4rem;
  //       font-size: 0.3rem;
  //     }
  //     input, textarea{
  //       color: white;
  //       background-color: rgba(255,255,255, 0);
  //       box-sizing: border-box;
  //       width: 100%;
  //       padding: 0.1rem;
  //       line-height: 0.5rem;
  //       font-size: 0.3rem;
  //       outline: none;
  //       border: none;
  //       transition: all 0.5s;
  //       border-bottom: 1PX solid #ddd;
  //       margin-bottom: 20PX;
  //       &:focus{
  //         border-bottom: 1PX solid #00c3ed;
  //       }
  //     }
  //     textarea{
  //       height: 2.5rem;
  //       resize: none;
  //       &::-webkit-input-placeholder{
  //         color: #ccc;
  //       }
  //     }
  //     button{
  //       border: none;
  //       user-select: none;
  //       outline: none;
  //       border-radius: 1rem;
  //       width: 3rem;
  //       height: 1rem;
  //       background-color: #0099ba;
  //       color: white;
  //       font-size: 0.35rem;
  //       letter-spacing: 0.2rem;
  //       border: 3PX solid #0099ba;
  //       transition: all 0.3s;
  //       cursor: pointer;
  //       &:hover{
  //         background-color: transparent;
  //         color: #00c3ed;
  //       }
  //     }
  //   }
  // }
  .ContactUs-main {
      width: 100%;
      display: flex;
      padding: 0 130px;
    box-sizing:border-box;
    margin: 120px 0;
      .main-title {
        text-align: left;
        user-select: none;
        font-size: 0.5rem;
        font-weight: 600;
        cursor: default;
        color: white;
      }

      .main-left {
        width: 100%;
        height: 100%;
        background: url("~@/assets/CommonImg/ContactUs/bg88.jpg") no-repeat;
        background-size: cover;
      }
      .main-desc {
        user-select: none;
        cursor: default;
        color: white;
        padding: 20px 0;
        text-align: left;
        line-height: 0.3rem;
        font-size: 0.2rem;
      }
      .submit-main {
        padding: 80px 30px 80px 30px !important;
        background: url("~@/assets/CommonImg/ContactUs/worldmap.png") no-repeat;
        background-size: cover;
        background-position: center;
        background-color: #002e5a !important;
        box-sizing: border-box;
        display: inline-flex;
        width: 50%;
        flex-direction: column;
        input,
        textarea {
          color: white;
          background-color: rgba(255, 255, 255, 0);
          box-sizing: border-box;
          width: 100%;
          padding: 10px;
          line-height: 20px;
          font-size: 0.2rem;
          outline: none;
          border: none;
          transition: all 0.5s;
          border-bottom: 1px solid #ddd;
          margin-bottom: 20px;
          &:focus {
            border-bottom: 1px solid #00c3ed;
          }
        }
        textarea {
          height: 1.5rem;
          resize: none;
          &::-webkit-input-placeholder {
            color: #ccc;
          }
        }
        button {
          border: none;
          user-select: none;
          outline: none;
          border-radius: 1rem;
          width: 2rem;
          height: 0.5rem;
          background-color: #0099ba;
          color: white;
          font-size: 0.3rem;
          letter-spacing: 0.2rem;
          border: 3px solid #0099ba;
          transition: all 0.3s;
          cursor: pointer;
          margin-top: 30px;
          &:hover {
            background-color: transparent;
            color: #00c3ed;
          }
        }
      }
    }
}
</style>