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
  padding: 30PX 20PX;
  text-align: left;
  h5 {
    font-size: 0.38rem;
    font-weight: 650;
    line-height: 1.5;
    margin-bottom: 0.3rem;
    margin-top: 0.75rem;
  }
  p{
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
blockquote {
  position: relative;
  padding: 0;
  border-left: 2PX solid #0073aa;
  padding-left: 0.7rem;
  margin: 30PX 0 20px 0;
  footer{
    cite{
      font-style: italic;
    }
    color: #888;
    font-size: 0.27rem;
  }
  p {
    color: #444;
    font-size: 0.35rem;
    line-height: 1.7;
  }
}
</style>