<template>
  <div class="ContactUs-container DefaultContainerStyle">
    <title-bar v-if="showTitle" text="联系我们" />
    <!-- 地图 -->
    <div class="content">
      <div class="provideGoodPro">
      <img :src="require(`$assets/CommonImg/ContactUs/linkaddress.png`)" alt="">
      </div>
    </div>
    <div class="introduction">
      <p class="title">联系方式</p>
      <p>（1）销售热线：18112606475</p>
      <p>（2）邮箱：info@memstools.cn</p>
      <p>（3）电话：0512 62995316</p>
      <p>（4）网址：www.memstools.cn</p>
      <p>（5）地址：江苏省苏州工业园区新平街388号腾飞创意产业园23幢-801</p>
    </div>
    <div v-loading="loading" class="introduction">
      <p class="title">留言</p>
      <p>欢迎来到苏州美图半导体技术有限公司。 关于产品的使用问题、改进建议，或举报不良信息，您都可以填写下方信息告诉我们，我们重视您的每一个想法</p>
      <div class="inputs">
      <input v-model="data.name" type="text" maxlength="10" placeholder="姓名*" />
      <input v-model="data.phone" type="text" maxlength="11" placeholder="手机*" />
      <input v-model="data.email" type="text" maxlength="20" placeholder="邮箱*" />
      <textarea v-model="data.remark" type="text"  placeholder="需要 / 改进 / 建议" />
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
      loading: false,
      data: {
        name: '',
        phone: '',
        email: '',
        remark: ''
      }
    }
  },
  methods: {
    submitInfo() {
      const { name, phone, email, remark } = this.data
      const fields = ['name', 'phone', 'email', 'remark']
      const tips = ['姓名', '手机号', '邮箱', '需要 / 改进 / 建议']
      let res = true
      for (let i = 0; i < fields.length; i++) {
        if (!this.data[fields[i]]) {
          this.$message.closeAll()
          this.$message.error(`请填写${tips[i]}`)
          res = false
          break
        }
      }
      if (!res) return
      this.loading = true
      this.$store.dispatch('submitFeedBack', this.data).then(res => {
        this.$message.closeAll()
        if (res.data.Code === 1) {
          this.$message.success('提交成功')
          this.data = {
            name: '',
            phone: '',
            email: '',
            remark: ''
          }
        } else {
          this.$message.error('提交失败')
        }
      }).catch(err => {
        this.$message.error('服务异常,请稍候再试')
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style scoped lang="scss">
.ContactUs-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.introduction{
  width: 100%;
  box-sizing: border-box;
  // padding: 0 130px;
  margin-bottom: 120px;
  color: #000;
  max-width: 18rem;
  background-color: #fff;
  padding: 80px 40px;
  p{
    text-align: left;
    color: rgb(0, 0, 0);
    font-family: "Ping Fang SC";
    font-size: 15.6pt;
    letter-spacing: 0pt;
    line-height: 24pt;
    padding: 0 28pt;
    // text-indent: 28pt;
    font-weight: 300;
  }
  .title{
    font-weight: bold;
  }
  .inputs{
    padding: 0 28pt;
  }
  input,textarea {
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    width: 100%;
    padding: 20PX 10PX;
    line-height: 20px;
    font-size: 0.3rem;
    outline: none;
    border: none;
    transition: all 0.5s;
    border-bottom: 1PX solid #ddd;
    margin-bottom: 20px;
    &:focus {
      border-bottom: 1PX solid #00c3ed;
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
    height: 0.65rem;
    line-height: 0.4rem;
    background-color: #0099ba;
    color: white;
    font-size: 0.3rem;
    border: 2PX solid #0099ba;
    transition: all 0.3s;
    cursor: pointer;
    margin-top: 30px;
    &:hover {
      background-color: transparent;
      color: #00c3ed;
    }
  }
}
.content {
    width: 100%;
    .provideGoodPro{
      box-sizing: border-box;
      padding: 0 130px;
      margin: 120px 0;
      img{
        width: 100%;
        max-width: 18rem;
        height: 100%;
      }
    }
 }
// 移动端
    @media screen and (max-width: 1200px) {
      .ContactUs-container{
         .provideGoodPro{
           img{
             width: 100%;
             height: 6rem;
           }
         }
      }
    }
// 移动端
    @media screen and (max-width: 1200px) {
      .ContactUs-container{
        .ContactUs-main{
          .main-title{
            font-size: 0.8rem;
          }
          .main-left{
            height: 4rem;
          }
          .main-desc {
            font-size:  0.4rem; 
            line-height: 0.45rem;
          }
          .submit-main{
              input,
              textarea{
                font-size:  0.4rem;
                line-height: 0.5rem;
              }
              textarea{
                height: 4rem;
              }
              button{
                font-size:  0.4rem;
                height: 2.5rem;
                line-height: 0.5rem;
                width: 3rem;
              }
          }
        }
      }
    }
</style>