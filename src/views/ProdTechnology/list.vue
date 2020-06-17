<template>
  <div class="ProdList-container">
    <titleBar text="产品列表"/>
    <div class="prod-list">
      <el-row v-for="(rowList, i) in showList" :key="`prod-${i}`" :gutter="30">
          <el-col v-for="(item, index) in rowList" :xs="24" :sm="12" :md="12" :lg="6" :xl="6" :key="`${i}-${index}`">
            <div class="prod-item">
              <div class="item-img">
                <img :src="item.src" alt="图片">
              </div>
              <div class="item-title">
                {{ item.title }}
              </div>
              <div class="item-desc">
                <span @click="viewDetail(item)" class="title">{{ item.title }}</span>
                <span class="desc">{{ item.desc }}</span>
              </div>
            </div>
          </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'prodList',
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      prodList: state => state.prod.prodList
    }),
    showList() {
      const copNum = Math.ceil(this.prodList.length / 4)
      const arr = []
      for (let i = 0; i < copNum; i++) {
        const rowArr = []
        for (let j = 0; j < 4; j++) {
          const index = (i * 4) + j
          if (this.prodList[index]) rowArr.push(this.prodList[index])
        }
        arr.push(rowArr)
      }
      return arr
    }
  },
  methods: {
    viewDetail(info) {
      this.$store.commit('SET_PROD_INFO', info)
      this.$router.push('/prod/introduction')
      setTimeout(() => {
        document.documentElement.scrollTop = 0
      }, 100)
    }
  }
}
</script>

<style scoped lang="scss">
.prod-list{
  padding: 30PX 15PX;
  .prod-item{
    position: relative;
    margin-bottom: 30PX;
    .item-img{
      img{
        width: 100%;
      }
    }
    .item-title{
      cursor: default;
      position: absolute;
      color: #00c3ed;
      bottom: 0PX;
      height: 50PX;
      font-size: 20PX;
      line-height: 50PX;
      width: 100%;
      font-weight: 700;
      transition: all 900ms ease;
      background: rgba(0, 46, 90, 0.9);
    }
    .item-desc{
      position: absolute;
      width: 100%;
      opacity: 0;
      transition: all 900ms ease;
      display: flex;
      align-items: center;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: rgba(0, 46, 90, 0.9);
      height: 100%;
      box-sizing: border-box;
      user-select: none;
      padding: 20PX;
      .title{
        cursor: pointer;
        margin-bottom: 10PX;
        color: #00c3ed;
        font-size: 20PX;
        font-weight: 700;
      }
      .desc{
        font-size: 14PX;
        line-height: 16PX;
        color: white;
      }
    }
    &:hover{
      .item-desc{
        opacity: 1;
      }
    }
  }
}
</style>