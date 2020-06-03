<template>
  <div class="title-bar">
      <div>
        <span>{{ text }}</span>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.title-bar{
    width: 100%;
    user-select: none;
    cursor: default;
    height: 290PX;
    background: url('~@/assets/ContactUs/as02.jpg') 50% 50%;
    >div{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 290PX;
      background-color: rgba(0,0,0,0.5);
    }
    span{
      font-size: 0.8rem;
      color: white;
      font-weight: 800;
    }
  }
</style>