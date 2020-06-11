<template>
  <div class="Homepage-container DefaultContainerStyle">
    <swiperImg :imglist="imgArr"></swiperImg>
    <div class="content">
      <div class="productBox">
        <el-row :gutter="30">
          <el-col
            v-for="(item, index) in productList"
            :xs="24"
            :sm="12"
            :md="6"
            :lg="6"
            :xl="6"
            :key="index"
          >
            <productDiscribe :productInfo="item" :isEven="(index + 1) % 2 == 0"></productDiscribe>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 数字动效 -->
    <div class="content">
      <div class="numberDanceBox" id="numberDance">
        <div class="numberDance" v-for="(item, index) in numberDanceList" :key="index + item">
          <img class="imgPic" :src="require(`$static/icon/${item.iconUrl}`)" alt />
          <p class="number" v-if="!numberDanceStart">0</p>
          <IcountUp
            class="number"
            v-if="numberDanceStart"
            :endVal="item.num"
            :options="options"
            @ready="onReady"
          ></IcountUp>

          <p class="name">{{item.name}}</p>
        </div>
      </div>
    </div>
    <!-- 联系我们 -->
    <div class="content">
      <div class="ContactUs-main">
        <div class="submit-main">
          <div class="main-title">留言</div>
          <div
            class="main-desc"
          >欢迎来到苏州美图半导体有限公司官方网站。 关于产品的使用问题、改进建议，或举报不良信息，您都可以填写下方信息告诉我们，我们重视您的每一个想法</div>
          <input v-model="data.name" type="text" maxlength="10" placeholder="姓名*" />
          <input v-model="data.email" type="text" maxlength="20" placeholder="邮箱*" />
          <input v-model="data.phone" type="text" maxlength="11" placeholder="手机*" />
          <textarea v-model="data.desc" type="text" placeholder="需要 / 改进 / 建议" />
          <button @click="submitInfo">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/config/index";
import swiperImg from "@/components/public/swiperImg";
import productDiscribe from "@/components/public/productDiscribe";
import IcountUp from "vue-countup-v2";
export default {
  name: "Home",
  data() {
    return {
      data: {
        name: "",
        phone: "",
        email: "",
        desc: ""
      },
      numberDanceStart: false,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: ""
      },
      imgArr: [
        { id: "1", src: `${config.swiperImgUrl}first.png` },
        { id: "2", src: `${config.swiperImgUrl}second.jpg` }
      ],
      numberDanceList: [
        { name: "成立", iconUrl: `smile.png`, num: 2012 },
        { name: "合作客户", iconUrl: `rocket.png`, num: 1010 },
        { name: "员工", iconUrl: `worker.png`, num: 96 },
        { name: "获奖", iconUrl: `medal.png`, num: 25 }
      ],
      productList: [
        {
          name: "生物芯片专用设备",
          iconUrl: `product1.png`,
          discription:
            "产品描述产产品描述产产品描述产品描述产品描述产品描述产品描述产品描述"
        },
        {
          name: "CIS三维封装",
          iconUrl: `product2.png`,
          discription:
            "产品描述产产品描述产产品描述产品描述产品描述产品描述产品描述产品描述"
        },
        {
          name: "MENS器件制造",
          iconUrl: `product3.png`,
          discription:
            "产品描述产产品描述产产品描述产品描述产品描述产品描述产品描述产品描述"
        },
        {
          name: "薄片传输",
          iconUrl: `product4.png`,
          discription:
            "产品描述产产品描述产产品描述产品描述产品描述产品描述产品描述产品描述"
        }
      ]
    };
  },
  mounted() {
    // setTimeout(() => {
    //   this.numberDanceStart = true
    // }, 5000);
    window.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    submitInfo() {
      this.data = {
        name: "",
        phone: "",
        email: "",
        desc: ""
      };
      this.$message.closeAll();
      this.$message.success("提交成功");
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      var offsetTop = document.querySelector("#numberDance").offsetTop;
      // console.log(scrollTop, offsetTop)
      if (scrollTop > 350) {
        this.numberDanceStart = true;
      }
    },
    onReady: function(instance, CountUp) {
      console.log("进来了");
      // const that = this;
      // instance.start(that.endVal + 100);
    }
  },
  components: { swiperImg, productDiscribe, IcountUp }
};
</script>

<style scoped lang="scss">
.Homepage-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .content {
    width: 100%;
    .productBox {
      width: 100%;
      padding: 0 130px;
      box-sizing: border-box;
      margin: 120px 0 40px 0;
    }
    .numberDanceBox {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      padding: 0 60px;
      margin-bottom: 120px;
      height: 500px;
      background: url("~@/assets/CommonImg/HomePage/numberDance-bg.png")
        no-repeat;
      background-size: cover;
      .numberDance {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .imgPic {
          width: 60px;
          height: 60px;
        }
        .number {
          font-weight: 800;
          font-family: "Ping Fang SC";
          font-size: 80px;
          margin: 30px 0;
          min-width: 280px;
        }
        .name {
          font-family: "微软雅黑";
          font-size: 30px;
          font-weight: 600;
        }
      }
    }
    .ContactUs-main {
      background: url("~@/assets/ContactUs/as03.jpg") no-repeat;
      background-size: cover;
      // height: 500PX;
      .main-title {
        user-select: none;
        font-size: 0.5rem;
        padding: 20px 0;
        cursor: default;
        color: white;
      }
      .main-desc {
        user-select: none;
        cursor: default;
        color: white;
        padding: 20px 0;
        text-align: left;
        line-height: 0.5rem;
        font-size: 0.35rem;
      }
      .submit-main {
        box-sizing: border-box;
        padding: 10px;
        display: inline-flex;
        width: 80%;
        flex-direction: column;
        input,
        textarea {
          color: white;
          background-color: rgba(255, 255, 255, 0);
          box-sizing: border-box;
          width: 100%;
          padding: 10px;
          line-height: 20px;
          font-size: 0.3rem;
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
          height: 3rem;
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
          width: 3rem;
          height: 1rem;
          background-color: #0099ba;
          color: white;
          font-size: 0.35rem;
          letter-spacing: 0.2rem;
          border: 3px solid #0099ba;
          transition: all 0.3s;
          cursor: pointer;
          &:hover {
            background-color: transparent;
            color: #00c3ed;
          }
        }
      }
    }
  }
}
</style>