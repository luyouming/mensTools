<template>
<div class="footer-container">
  <div class="footerInfo">
    <div class="footerBox">
      <img class="imgPic" :src="require(`$static/icon/logo-mens.png`)" alt="">
      <p class="paragraph">苏州美图半导体技术有限公司成立于2012年1月，主要从事半导体和MEMS领域微细加工设备的研发、生产和销售。</p>
      <!-- <div><img class="iconPic" v-for="(item, index) in footerIcons" :key="item + index" :src="require(`$static/icon/${item}`)" alt=""></div> -->
    </div>
    <div class="footerBox">
      <div class="title">
        <div >公司动态</div>
        <div><span class="left"></span><span class="right"></span></div>
      </div>
      <div class="newsBox" v-for="(item, index) in footerNews" :key="item + index">
        <img :src="require(`$assets/CommonImg/${item.imgUrl}`)" alt="">
        <div class="news">
          <p class="title">{{item.title}}</p>
          <p class="content">{{item.time}}</p>
        </div>
      </div>
    </div>
    <div class="footerBox">
      <div class="title">
        <div >联系方式</div>
        <div><span class="left"></span><span class="right"></span></div>
      </div>
      <div class="contactWay">
        <p class="main" :class="{longMain: item.name === '地址'}" v-for="(item, index) in footerContactWay" :key="item + index">
        <span class="name" :class="{longInfo: item.name === '地址'}">{{item.name + ':'}}</span> <span :class="{longInfo: item.name === '地址'}" class="tel">{{item.contactWay}}</span>
        </p>
      </div>
    </div>
  </div>
  <div class="Tips">
    <p>苏ICP备18021576号-1&演示系统&</p>
    <p>本站暂为&演示系统&使用，请勿用于正式运营</p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'FooterBar',
  data () {
    return {
      footerIcons: ['person.png','person.png','person.png','person.png'],
      footerNews:[{imgUrl: '1.jpg', title:'动态1', time: '2020-05-15 00:00:00'},
                  {imgUrl: '2.jpg', title:'动态2', time: '2020-05-15 00:00:01'},
                  {imgUrl: '3.jpg', title:'动态3', time: '2020-05-15 00:00:02'}],
      footerContactWay: [{name: '联系人-段小姐', contactWay: '18112606475'},
                        //  {name: '联系人-冒小姐', contactWay: '18360485933'},
                         {name: '电话', contactWay: '0512 62995316'},
                         {name: '网址', contactWay: 'www.memstools.cn'},
                         {name: '邮箱', contactWay: 'info@memstools.cn'},
                         {name: '地址', contactWay: '江苏省苏州市工业园区星湖街218号生物纳米园A7-506'},]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-container{
  .footerInfo {
    background-color: #000;
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: flex-start;
    font-size: 26PX;
    color: white;
    min-height: 580px;
    // padding: 120px 0 0 0;
    .footerBox{
      width: calc(100% / 3);
      // height: 100%;
      margin-top: 120px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      color: #bbb;
      padding: 0 80px;
      .imgPic{
        width: 210PX;
        height: 112PX;
      }
      .paragraph{
        text-align: left;
        font-size: 18PX;
        line-height: 22PX;
        font-family: "微软雅黑";
        font-weight: 300;
        margin: 30px 0;
      }
      div {
        .iconPic{
          width: 32px;
          height: 32px;
          border: 1px solid skyblue;
          border-radius: 10px;
          margin-right: 30px;
        }
      }
      .title{
        width: 100%;
        div {
          font-size: 24PX;
          color: #ffffff;
          font-weight: bold;
          letter-spacing: 2px;
          font-family: "微软雅黑";
          text-align: left;
          width: 100%;
          margin-bottom: 15px;
          .left, .right{
            display: block;
            background-color: #00c3ed;
            height: 4px;
            width: 75px;
            float: left;
          }
          .right{
            width: calc(100% - 80px);
            background-color: rgba(65, 65, 65, 0.3);
          }
        }
     }
     .newsBox{
        width: 100%;
        margin: 20px auto;
        img {
          float: left;
          width: 120PX;
          height: 90PX;
          border-radius: 2px;
        }
        .news {
           float: left;
           width: calc(100% - 120PX);
           padding: 0 20px;
           height: 45PX;
           line-height: 45PX;
           text-align: left;
           box-sizing: border-box;
           .title{
             font-weight: 500;
             font-size: 18PX;
             font-family: "微软雅黑";
             color: #ccc;
           }
           .content{
             color: #666;
             font-family: "微软雅黑";
             font-weight: 500;
             font-size: 14PX;
           }
        }
      }
      .contactWay{
        width: 100%;
        .main{
          font-size: 18PX;
          line-height: 1PX;
          padding: 30px 0;
          border-bottom: 1px solid #444;
         .name{
          float: left;
          font-family: "微软雅黑";
          font-weight: 300;
         }
        .tel{
          float: right;
          color: #ccc;
        }
        .longInfo{
          width: 100%;
          text-align: left;
          height: 25PX;
          line-height: 25PX;
        }
       }
       .longMain{
         padding: 10px 0 0 0;
         border: none;
       }
        

      }
    }
  }
  .Tips{
    width: 100%;
    min-height: 60PX;
    line-height: 60PX;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: rgb(42, 42, 42);
    color: #bbb;
    padding: 0 160px;
    box-sizing: border-box;
    p{
      font-size: 18PX;
    }
  }
}
@media screen and (max-width: 1200px) {
      .footer-container {
        .footerInfo{
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          .footerBox{
            width: 80%;
          }
        }
        // .newsBox{
        //   .img{
        //     width: 200px;
        //     height: 150px;
        //   }
        // }
        .contactWay{
          margin-bottom: 90px;
          .main{
            margin: 30px 0;
            padding-bottom:50px !important;
          }
        }
        // 移动端字体需要大一些展示的时候
        .Tips{
          p{
            font-size: 15PX;
            line-height: 15PX;
            width: 50%;
            padding: 0;
          }
        }
      }
    }
</style>