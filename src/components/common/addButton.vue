<template>
  <div class="add-button">
    <button @click="addList">添加</button>
  </div>
</template>

<script>
export default {
  props: ['list'],
  methods: {
    addList () {
      let list = this.list
      console.log(list)

      let router = this.$router.currentRoute.fullPath + '/redact'
      this.$router.push(router)
    }
  }
}
</script>

<style lang="scss" scoped>
.add-button {
  font-size: 20px;
  text-align: right;
  padding-bottom: 1vw;
  button {
    font-size: 14px;
    line-height: 1;
    border: none;
    background-color: #2d8cf0;
    color: #fff;
    padding: 0.5vw 1.2vw;
  }
}
</style>
