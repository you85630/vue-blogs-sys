<template>
  <div class="search">
    <input type="text" v-model="val">
    <button @click="search">
      <i class="fa fa-search"></i>搜索
    </button>
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
    },
    refresh () {
      location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1vw 0;
  width: 60%;
  border: 1px solid #ccc;
  background-color: #2d8cf0;
  input {
    padding: 0.6vw 1vw;
    width: 100%;
    border: none;
    font-size: 1.2vw;
  }
  button {
    padding: 0 1vw;
    border: none;
    background-color: #2d8cf0;
    color: #fff;
    white-space: nowrap;
    font-size: 1.2vw;
    i {
      margin-right: 4px;
    }
  }
}
</style>
