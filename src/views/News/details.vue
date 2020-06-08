<template>
  <div class="News-details-container">
    <title-bar :text="newsInfo.title" />
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
      newsInfo: state => state.news.newsInfo
    })
  },
  mounted() {
    console.log(this.newsInfo)
  }
}
</script>

<style scoped lang="scss">
</style>