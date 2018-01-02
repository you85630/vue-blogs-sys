<template>
  <div class="add-button">
    <button @click="addList">添加</button>
  </div>
</template>

<script>
export default {
  methods: {
    addList () {
      let router = this.$router.currentRoute.fullPath + '/redact'
      this.$router.push(router)
    }
  }
}
</script>

<style lang="scss" scoped>
.add-button {
  padding-bottom: 1vw;
  text-align: right;
  font-size: 20px;
  button {
    padding: 0.5vw 1.2vw;
    border: none;
    border-radius: 2px;
    background-color: #2d8cf0;
    color: #fff;
    font-size: 14px;
    line-height: 1;
  }
}
</style>
