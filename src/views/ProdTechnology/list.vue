<template>
  <div class="ProdList-container">
    <titleBar text="产品列表"/>
    <div class="prod-list">
      <el-row v-for="(rowList, i) in showList" :key="`prod-${i}`" :gutter="30">
          <el-col v-for="(item, index) in rowList" :xs="24" :sm="12" :md="8" :lg="6" :xl="6" :key="`${i}-${index}`">
            <div class="prod-item">
              <div class="item-img">
                <img :src="item.src" alt="图片">
              </div>
              <div class="item-title">
                {{ item.title }}
              </div>
            </div>
          </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'prodList',
  data() {
    return {
      newsList: [
        {
          id: '1',
          title: '紫外光刻机',
          listDesc: '光刻机(Mask Aligner) 又名掩模对准曝光机，曝光系统，光刻系统等。常用的光刻机是掩膜对准光刻，所以叫 Mask Alignment System.',
          src: require('$assets/CommonImg/1.jpg'),},
        {
          id: '2',
          title: '桌面显影机',
          listDesc: '显影机是将晒制好的印版通过半自动和全自动的程序将显影、冲洗、涂胶、烘干等工序一次性部分或全部完成的印刷处理设备。',
          src: require('$assets/CommonImg/2.jpg'),
        },
        {
          id: '3',
          title: '匀胶机',
          listDesc: '匀胶机是在高速旋转的基片上，滴注各类胶液，利用离心力使滴在基片上的胶液均匀地涂覆在基片上的设备，膜的厚度取决于匀胶机的转速和溶胶的黏度。',
          src: require('$assets/CommonImg/3.jpg'),
        },
        {
          id: '4',
          title: '热板',
          listDesc: '匀胶机是在高速旋转的基片上，滴注各类胶液，利用离心力使滴在基片上的胶液均匀地涂覆在基片上的设备，膜的厚度取决于匀胶机的转速和溶胶的黏度。',
          src: require('$assets/CommonImg/3.jpg'),
        },
        {
          id: '5',
          title: '贴膜机',
          listDesc: '贴膜机是专门用于电子/通讯/半导体等行业贴保护膜及防暴膜的机器，可确保无气泡无擦痕贴膜。',
          src: require('$assets/CommonImg/3.jpg'),
        }
      ]
    }
  },
  computed: {
    showList() {
      const copNum = Math.ceil(this.newsList.length / 4)
      const arr = []
      for (let i = 0; i < copNum; i++) {
        const rowArr = []
        for (let j = 0; j < 4; j++) {
          const index = (i * 4) + j
          if (this.newsList[index]) rowArr.push(this.newsList[index])
        }
        arr.push(rowArr)
      }
      return arr
    }
  }
}
</script>

<style scoped lang="scss">
.prod-list{
  padding: 30PX 0;
  .prod-item{

    .item-img{
      img{
        width: 100%;
      }
    }
  }
}
</style>