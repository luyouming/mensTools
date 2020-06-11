<template>
  <div class="AboutUs-container DefaultContainerStyle">
    <title-bar text="关于我们" />
  </div>
</template>

<script>
import titleBar from "$components/public/titleBar";
export default {
  name: "aboutUsAbout",
  components: { titleBar }
};
</script>

<style scoped lang="scss">
.AboutUs-container {
 width: 100%;
}
</style>