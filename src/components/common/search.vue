<template>
  <div class="search">
    <input type="text" v-model="val">
    <button @click="search">
      <i class="fa fa-search"></i>搜索</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val: ''
    }
  },
  methods: {
    search () {
      this.$emit('search', this.val)
      this.val = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  margin: 1vw 0;
  input {
    padding: 0.6vw 1vw;
    width: 30vw;
  }
  button {
    padding: 0.6vw 1vw;
    border: none;
    font-size: 1.2vw;
    background-color: #2d8cf0;
    color: #fff;
    i {
      margin-right: 4px;
    }
  }
}
</style>
