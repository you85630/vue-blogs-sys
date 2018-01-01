<template>
  <div class="btn">
    <button @click="back">返回</button>
  </div>
</template>

<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  margin-bottom: 1vw;
  text-align: right;
  button {
    padding: 0.5vw 1.2vw;
    border: none;
    border-radius: 2px;
    background-color: #2d8cf0;
    color: #fff;
    font-size: 1.2vw;
    line-height: 1;
  }
}
</style>
