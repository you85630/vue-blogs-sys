<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created () {
    // 获取文章
    this.$store.dispatch('blogsList')
    // 获取公告
    this.$store.dispatch('newsList')
  }
}
</script>


<style lang="scss" scoped>
#app {
  height: 100%;
  font-size: 0;

  user-select: none;
}
</style>
