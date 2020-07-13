<template>
  <div class="News-details-container">
    <title-bar :text="showInfo.title" />
    <div class="news-details-main" v-html="showInfo.content" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import titleBar from '$components/public/titleBar'
export default {
  name: 'newsDetails',
  components: {
    titleBar
  },
  data() {
    return {
      showInfo: {}
    }
  },
  computed: {
    ...mapState({
      newsInfo: state => state.news.newsInfo,
      newsList: state => state.news.newsList
    })
  },
  beforeRouteUpdate(to, from, next) {
    next()
    this.initInfo()
  },
  mounted() {
    this.initInfo()
  },
  methods: {
    initInfo() {
      this.id = this.$route.params.id
      const info = this.newsList.find(a => a.id === this.id)
      this.showInfo = Object.assign({}, (info || this.prodList[0]))
    }
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 768px) {
  .news-details-main{
    margin: auto;
    padding: 20PX 0;
    width: 600PX;
    img{
      width: 100%;
    }
  }
}
@media screen and (max-width: 768px) {
  .news-details-main{
    padding: 20PX 1rem;
    // width: 100%;
    img{
      width: 100%;
    }
  }
}
.news-details-main{
  box-sizing: border-box;
  // padding: 30PX 1rem;
  text-align: left;
  h5 {
    text-align: center;
    font-size: 0.38rem;
    font-weight: 650;
    line-height: 1.5;
    margin-bottom: 0.3rem;
  }
  p{
    font-size: 0.3rem;
    line-height: 1.2;
    margin-bottom: 20PX;
  }
  img{
    margin-bottom: 20PX;
  }
}
.mt-30{
  margin-top: 30PX;
}
.mb-30{
  margin-bottom: 30PX;
}
.img-fullwidth{
  width: 100%;
}
</style>