<template>
  <el-header>
      top-bar
  </el-header>
</template>

<script>
export default {
  name: 'TopBar',
  data() {
    return {
      navList: [
        { name: '首页', path: '/' },
        { name: '新闻资讯', path: '/news'},
        { name: '产品技术', path: '/prod', child: [
          { name: '产品展示', path: '/prod/show'},
          { name: '产品列表', path: '/prod/list'},
          { name: '产品简介', path: '/prod/present'}
        ] },
        { name: '应用领域', path: '/apparea' },
        { name: '联系我们', path: '/contactus', child: [
          { name: '联系我们', path: '/contactus/index'},
          { name: '百度地图', path: '/contactus/address'}
        ] },
        { name: '关于我们', path: '/aboutus', child: [
          { name: '企业概况', path: '/aboutus/profile'},
          { name: '企业文化', path: '/aboutus/culture'},
          { name: '资质证书', path: '/aboutus/certificate'},
          { name: '发展历程', path: '/aboutus/devHistory'},
          { name: '企业荣誉', path: '/aboutus/honor'},
        ] }
      ]
    }
  }
}
</script>

<style>

</style>