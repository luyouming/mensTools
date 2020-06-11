<template>
  <div class="TopBar-container">
    <img class="imgPic" :src="require(`$static/icon/logo-mens.png`)" alt="">
     <!-- 大于1200PX屏的导航展示 -->
      <ul class="nav-centent">
        <li v-for="(item , index) in navList" :key="item + index" @mouseover="item.isSubShow = true" @mouseout="item.isSubShow = false">
        <a @click="gotoPage(item.path)"  :class="{chosenTab: chosenTabIndex === index}">{{item.name}}<i v-show="item.child && item.child.length > 0" class="hasDetails el-icon-arrow-down"></i></a>
        <ul v-show="item.isSubShow">
        <li v-for="(subItems, i) in item.child" :key="subItems + i">
        <a @click="gotoPage(subItems.path)">{{subItems.name}}</a>
        </li>
        </ul>
        </li>
      </ul>
      <!-- 小于1200PX屏的导航展示 -->
      <div class="nav-centent-phone" :class="{navCententPhoneOpen:showVerticalMenu}">
        <img class="more" @click="showVerticalMenu = !showVerticalMenu" :src="require(`$static/icon/more.png`)" alt="">
        <el-row class="nav-bar">
           <el-col :span="24">
             <!-- @open="handleOpen"  @close="handleClose" -->
          <el-menu
            v-show="showVerticalMenu"
            class="navBox"
            default-active="2"
            :unique-opened="true"
            background-color="#363636"
            text-color="#fff"
            active-text-color="#fff">
            <div v-for="(item , index) in navList" :key="item + index">
              <div v-if="item.child && item.child.length > 0" >
                <el-submenu @click="gotoPage(item.path)" :index="index + 1 + ''"  >
                    <template slot="title">
                    <span>{{item.name}}</span>
                </template>
                <el-menu-item @click="gotoPage(subItems.path, true)" :index="(index + 1) + '-' + (i + 1)" v-for="(subItems, i) in item.child" :key="subItems + i" >{{subItems.name}}</el-menu-item>
                </el-submenu>
              </div>
              <div v-else>
                <el-menu-item @click="gotoPage(item.path)" :index="index + 1 + ''">
                  <span slot="title">{{item.name}}</span>
                </el-menu-item>
              </div>
              </div>
          </el-menu>
          </el-col> 
        </el-row>
      </div>

  </div>
</template>

<script>
export default {
  name: 'TopBar',
  props:{
    chosenTabIndex: {
      type: Number,
       default () {
      return 0}
      }
  },
  data() {
    return {
      activeIndex: '1',
      showVerticalMenu: false,
      navList: [
        { name: '主页', path: '/' , isSubShow:false},
        { name: '关于我们', path: '/aboutus', isSubShow:false},
        // { name: '关于我们', path: '/aboutus', isSubShow:false, child: [
        //   { name: '企业概况', path: '/aboutus/profile'},
        //   { name: '企业文化', path: '/aboutus/culture'},
        //   { name: '资质证书', path: '/aboutus/certificate'},
        //   { name: '发展历程', path: '/aboutus/devHistory'},
        //   { name: '企业荣誉', path: '/aboutus/honor'},
        // ] },
        { name: '应用领域', path: '/apparea', isSubShow:false, child: [
          { name: '所有', path: '/apparea/all'},
          { name: '简介', path: '/apparea/introduction'}
        ]},
        // { name: '产品技术', path: '/prod', isSubShow:false},
        // { name: '产品技术', path: '/prod', isSubShow:false, child: [
        //   { name: '产品展示', path: '/prod/show'},
        //   { name: '产品列表', path: '/prod/list'},
        //   { name: '产品简介', path: '/prod/introduction'}
        // ] },
        { name: '新闻资讯', path: '/news', isSubShow:false, child: [
          { name: '所有新闻', path: '/news/all'},
          { name: '新闻详情', path: '/news/details'}
        ]},
        { name: '联系我们', path: '/contactus', isSubShow:false}
        // { name: '联系我们', path: '/contactus', isSubShow:false, child: [
        //   { name: '联系我们', path: '/contactus/index'},
        //   { name: '百度地图', path: '/contactus/address'}
        // ] }
      ]
    }
  },
  mounted() {
    // console.log(this.chosenTabIndex)
  },
  methods: {
    gotoPage(path, hideMenu){ // hideMenu是弥补本页刷新的情况下，把菜单隐藏，否则本页刷新时用户体验不佳
      console.log(path)
      // this.$router.push({path})
      if (hideMenu) {this.showVerticalMenu = false}
      window.scrollTo(0, 0)
      this.$emit('changePage', path)
    }
  }  
}
</script>

<style lang="scss">
    .TopBar-container{
      width:100%;
      // min-height: 104px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      // background-color: #f9f9f9;
      position: relative;
      .nav-centent{float: right;margin-right: 140px;}
      .nav-centent > li > a > .hasDetails {margin-left: 2px;}
      .nav-centent > li{width: 80PX;padding: 32PX 0;display: block;float: left;text-align: center;margin-right: 30PX;position: relative;cursor: pointer;}
      .nav-centent > li > a{background-color: #fff; padding: 6PX 10PX;border-radius: 50px;width: 88PX;height: 30PX;display: block;font-size: 16PX;font-family: 'PingFang SC';font-weight: 500;line-height: 30PX;color: #000;}
      .nav-centent > li > .chosenTab {background: #1bacd6;color:#FFF}
      .nav-centent > li:hover > a{height:30PX;line-height: 30PX;background: #1bacd6;color:#FFF }
      .nav-centent > li > a.on{background: #1bacd6;color:#000; }
      .nav-centent > li > ul{position: absolute;left: 0;top: 105PX;z-index: 99;width: 100PX;}
      .nav-centent > li > ul li{width: 100PX;font-size: 16PX;display: block;float: left;text-align: center;line-height: 30PX;background: #f5f5f5}
      .nav-centent > li > ul li a {color: #333;padding: 6PX 0PX;display:inline-block;transition: all 0.3s ease;width: 96.5PX;border: none;border-left:6px solid #f5f5f5;border-bottom:1px solid #ddd;font-size: 16PX;font-family: 'PingFang SC';font-weight: 500;}
      .nav-centent > li > ul li:nth-last-of-type(1) a {border:none;border-left:6px solid #f5f5f5;}
      .nav-centent > li > ul li:hover a{background: #ddd;height: 30PX;padding: 6PX 0PX;color:#000;border-left:6px solid #000}
    }
    .nav-centent-phone{
      margin: auto;
      width: 78%;
      margin-top: 0PX;
      margin-bottom: 0PX;
      position: relative;
      .more{
        width: 40PX;
        height: 40PX;
        position: absolute;
        right: 50px;
        top: -42px;
        cursor: pointer;
      }
      .nav-bar{
        width: 100%;
        // max-height: 500PX;
        overflow-y: auto;
        overflow-x: hidden;
        margin-top: 45PX;
        .navBox{width: 100%;}
        .el-submenu__title,.el-menu-item, .el-submenu .el-menu-item{
          text-align: left;
          font-size: 16PX;
          font-weight: bold;
          font-family: "微软雅黑";
          border-bottom: 1px solid #444;
          border-left: 1px solid #444;
          height: 50PX;
          line-height: 50PX;
        }
        .el-submenu__title {
          position: relative;
        }
        .el-submenu__icon-arrow, .el-icon-arrow-down{
          position: absolute;
          top: 18PX;
          right: 60px;
          font-size: 20PX;
          color: #fff;
          font-weight: bold;
        }
        .el-menu-item:focus, .el-menu-item:hover{
          border-left: 8px solid #000;
          padding-left: 20PX;
        }
      }
    }
    .navCententPhoneOpen {
        margin-bottom: 15PX;
    }
    @media screen and (max-width: 1200px) {
      .TopBar-container {
        padding-top: 52PX;
          .nav-centent-phone{
            display: block;
          }
          .nav-centent{
            display: none;
          }
          .imgPic{
            position: absolute;
            top: 0;
            left: 200px;
            height: 96PX;
            width: 195PX;
          }
      }
    }
    // and (max-width:2400px)  这里不需要上限
    @media screen and (min-width:1200px){
      .TopBar-container {
        .nav-centent-phone{
           display: none;
        }
        .nav-centent{
           display: block;
        }
        .imgPic{
        position: absolute;
        left: 200px;
        height: 100%;
      }
      }
    }
</style>