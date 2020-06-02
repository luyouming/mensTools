<template>
  <ul class="hangingBar-container">
    <li class="contentBox" v-for="(item, index) in contentList" :key="item + index">
       <img class="iconPic" :src="require(`$static/icon/${item.iconUrl}`)" alt="">
         {{item.text}} 
         <span class="line" v-show="index !== contentList.length - 1">|</span>
      </li>
  </ul>
</template>

<script>
export default {
  name: 'HangingBar',
  data() {
    return {
      msg: 'hello，I am HangingBar！',
      contentList: [{
        iconUrl: `person.png`,
        text: '段小姐Tel: 18112606475'
      },{
        iconUrl: `person.png`,
        text: '冒小姐Tel: 18360485933'
      },{
        iconUrl: `person.png`,
        text: 'info@example.com'
      },{
        iconUrl: `person.png`,
        text: '本站暂为Demo演示使用，请勿用于正式运营'
      }]
    }
  }
}
</script>

<style scoped lang="scss">
.hangingBar-container{
  background-color: #00c3ed;
  // padding: 15px 15px 15px 60px;
  padding-left: 80PX;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  // 这块内容暂时不需要了
  display: none;
  .contentBox{
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 16PX;
    font-weight: 700;
    font-family: 'PingFang SC';
    min-width: 200PX;
    padding: 23px 0;
    .iconPic{
        width: 15PX;
        height: 15PX;
        margin-right: 10PX;
      }
    .line{
      margin-left: 15PX;
      margin-right: 16PX;
      font-weight: 300;
    }  
  }
}
</style>