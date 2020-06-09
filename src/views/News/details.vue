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
  computed: {
    ...mapState({
      newsInfo: state => state.news.newsInfo,
      newsList: state => state.news.newsList
    }),
    showInfo() {
      if (this.newsInfo.id) {
        return this.newsList.find(a => a.id === this.newsInfo.id)
      } else {
        return this.newsList[0]
      }
    }
  }
}
</script>

<style lang="scss">
.news-details-main{
  padding: 30PX 10PX;
}
.mt-30{
  margin-top: 30PX;
}
.mb-30{
  margin-bottom: 30PX;
}
.img-fullwidth{
  width: 80%;
}
blockquote {
  position: relative;
  padding: 0;
  border-left: 2px solid #0073aa;
  padding-left: 1rem;
  margin: 15px 0;
  footer{
    color: #888;
    font-size: 15px;
  }
  p {
    color: #444;
    font-size: 0.5rem;
    line-height: 1.7;
  }
}
</style>