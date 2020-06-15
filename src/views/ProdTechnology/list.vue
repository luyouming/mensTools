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
                <span class="title">{{ item.title }}</span>
                <span class="desc">{{ item.desc }}</span>
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
          title: '阳极键合',
          desc: '阳极键合技术也称为场辅助密封、静电键合。它可以将玻璃与金属、合金或半导体键合在一起而不用任何粘结剂。',
          src: require('$assets/CommonImg/ProdList/阳极键合.png')
        },
        {
          id: '2',
          title: '解键合',
          desc: '工艺完成以后，需将器件晶圆与载片分离。减薄后的器件晶圆会由其他器件晶圆(晶圆级键合，永久键合至另一个晶圆上)或胶膜(芯片-品圆键合时黏附在划片使用的支撑胶膜上)支撑。',
          src: require('$assets/CommonImg/ProdList/解键合.png')
        },
        {
          id: '3',
          title: '键合对准',
          desc: '晶圆键合对准机是把一片晶圆与另一片晶圆进行对准。',
          src: require('$assets/CommonImg/ProdList/键合对准.png')
        },
        {
          id: '4',
          title: '晶圆喷胶机',
          desc: '晶圆喷胶机是一种能够覆盖崎岖形貌的光刻胶涂覆设备，同时对厚胶涂覆和节省光刻胶方面有着非常明显的优势。',
          src: require('$assets/CommonImg/ProdList/喷胶机.png')
        },
        {
          id: '5',
          title: '紫外光刻机',
          desc: '光刻机(Mask Aligner) 又名掩模对准曝光机，曝光系统，光刻系统等。常用的光刻机是掩膜对准光刻，所以叫 Mask Alignment System.',
          src: require('$assets/CommonImg/ProdList/紫外光刻机.png')
        },
        {
          id: '6',
          title: '桌面显影机',
          desc: '显影机是将晒制好的印版通过半自动和全自动的程序将显影、冲洗、涂胶、烘干等工序一次性部分或全部完成的印刷处理设备。',
          src: require('$assets/CommonImg/ProdList/桌面式显影机.png'),
        },
        {
          id: '7',
          title: '匀胶机',
          desc: '匀胶机是在高速旋转的基片上，滴注各类胶液，利用离心力使滴在基片上的胶液均匀地涂覆在基片上的设备，膜的厚度取决于匀胶机的转速和溶胶的黏度。',
          src: require('$assets/CommonImg/ProdList/匀胶机.png'),
        },
        {
          id: '8',
          title: '热板',
          desc: '可编程存储多达20个程序，每个程序可设阶梯温度值30个阶段，单个阶段定时最长可达10小时（600分钟）',
          src: require('$assets/CommonImg/ProdList/热板.png'),
        },
        {
          id: '9',
          title: '贴膜机',
          desc: '贴膜机是专门用于电子/通讯/半导体等行业贴保护膜及防暴膜的机器，可确保无气泡无擦痕贴膜。',
          src: require('$assets/CommonImg/ProdList/贴膜机.png'),
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